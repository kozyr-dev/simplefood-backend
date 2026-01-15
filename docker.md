## Docker commands for production

Build the image:

```bash
docker build -t sf-backend .
```

Create the network:

```bash
docker network create sf-network
```

Run the container:

```bash
docker run -p 1338:1338 -v $(pwd)/.tmp:/app/.tmp -e HOST=0.0.0.0 -e PORT=1338 --name simplefood-backend --network sf-network sf-backend
```


Or with environment variables from file:

```bash
docker run -p 1338:1338 -v ${pwd}/.tmp:/app/.tmp --env-file .env --name simplefood-backend --network sf-network sf-backend
```


## Alternatively Docker Compose commands

Build the image:

```bash
docker-compose build --no-cache 
```


Start the container:

```bash
docker-compose up -d
```

View logs:

```bash
docker-compose logs -f
```

Stop the container:

```bash
docker-compose down
```

Rebuild after code changes:

```bash
docker-compose up -d --build
```

Stop and remove volumes (WARNING: deletes data):

```bash
docker-compose down -v
```