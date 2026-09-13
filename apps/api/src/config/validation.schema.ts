import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  PORT: Joi.number().default(4000),
  MONGODB_URI: Joi.string().required(),
  ACCESS_TOKEN_SECRET: Joi.string().min(16).required(),
  ACCESS_TOKEN_TTL: Joi.string().default('15m'),
  REFRESH_TOKEN_SECRET: Joi.string().min(16).required(),
  REFRESH_TOKEN_TTL: Joi.string().default('7d'),
  COOKIE_DOMAIN: Joi.string().default('localhost'),
  WEB_ORIGIN: Joi.string().uri().required(),
  ADMIN_ORIGIN: Joi.string().uri().required(),
  CLOUDINARY_CLOUD_NAME: Joi.string().allow('').optional(),
  CLOUDINARY_API_KEY: Joi.string().allow('').optional(),
  CLOUDINARY_API_SECRET: Joi.string().allow('').optional(),
  SEED_ADMIN_NAME: Joi.string().optional(),
  SEED_ADMIN_EMAIL: Joi.string().email().optional(),
  SEED_ADMIN_PASSWORD: Joi.string().min(8).optional(),
});
