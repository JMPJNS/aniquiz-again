module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4bf7429b33bdb57dd8759692baae0f9e'),
  },
});