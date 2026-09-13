export default () => ({
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: parseInt(process.env.PORT ?? '4000', 10),
  mongodbUri: process.env.MONGODB_URI as string,
  jwt: {
    accessSecret: process.env.ACCESS_TOKEN_SECRET as string,
    accessTtl: process.env.ACCESS_TOKEN_TTL ?? '15m',
    refreshSecret: process.env.REFRESH_TOKEN_SECRET as string,
    refreshTtl: process.env.REFRESH_TOKEN_TTL ?? '7d',
  },
  cookieDomain: process.env.COOKIE_DOMAIN ?? 'localhost',
  corsOrigins: [process.env.WEB_ORIGIN, process.env.ADMIN_ORIGIN].filter(Boolean) as string[],
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME ?? '',
    apiKey: process.env.CLOUDINARY_API_KEY ?? '',
    apiSecret: process.env.CLOUDINARY_API_SECRET ?? '',
  },
  seedAdmin: {
    name: process.env.SEED_ADMIN_NAME ?? 'Super Admin',
    email: process.env.SEED_ADMIN_EMAIL,
    password: process.env.SEED_ADMIN_PASSWORD,
  },
});
