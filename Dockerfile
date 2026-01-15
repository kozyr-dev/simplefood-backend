# ============ Stage 1: Builder ============
FROM node:16-alpine AS builder

# Install build dependencies (only needed here)
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git

WORKDIR /app

# Copy package files first (better layer caching)
COPY package*.json ./

# Install ALL dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the admin panel
RUN npm run build

# Remove devDependencies after build
RUN npm prune --production

# ============ Stage 2: Production ============
FROM node:16-alpine AS production

# Install only runtime dependencies for vips (image processing)
RUN apk add --no-cache vips-dev

WORKDIR /app

# Copy only what's needed from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/config ./config
COPY --from=builder /app/src ./src
COPY --from=builder /app/package.json ./
COPY --from=builder /app/favicon.ico ./

# Create .tmp directory for SQLite
RUN mkdir -p .tmp

ENV NODE_ENV=production

EXPOSE 1338

CMD ["npm", "start"]
