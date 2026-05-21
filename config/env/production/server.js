module.exports = ({ env }) => ({
  url: env("PUBLIC_URL", "https://api-simplefood.kozyr.info"),
  proxy: true,
});
