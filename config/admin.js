module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '52d45d480e131d5223e892a0defebe42'),
  },
});
