module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtManagement: "refresh", // Enables refresh token functionality
      sessions: {
        accessTokenLifespan: 15 * 60 * 1000, // 15 minutes in ms
        maxRefreshTokenLifespan: 30 * 24 * 60 * 60 * 1000, // 30 days in ms
        idleRefreshTokenLifespan: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
      },
      register: {
        allowedFields: ["phone"],
      },
    },
  },
  "deep-populate": {
    enabled: true,
    config: {
      useCache: true, // default
      replaceWildcard: true, // default
    },
  },
  ezforms: {
    config: {
      captchaProvider: {
        name: "none",
        // name: 'recaptcha',
        // config: {
        //     secretKey: 'your-key',
        //     minimumScore: 0.5
        // }
      },
      notificationProviders: [
        {
          name: "email",
          enabled: true,
          config: {
            subject: "Contact Form Request | Simple Food", // Optional
            from: "noreply@strapi.io", // Required
          },
        },
      ],
    },
  },
});
