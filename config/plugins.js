module.exports = () => {
    return {
        ckeditor: true,
        ezforms:{
            config:{
              captchaProvider: {
                name: 'none',
                // name: 'recaptcha',
                // config: {
                //     secretKey: 'your-key',
                //     minimumScore: 0.5
                // }
              },
              notificationProviders: [
                {
                    name: 'email',
                    enabled: true,
                    config: {
                      subject: "Contact Form Request | Simple Food", // Optional
                      from: 'noreply@strapi.io' // Required
                    }
                  },
              ]
            }
        },
    }
}