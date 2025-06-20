// apps/web/lib/redis.ts
// This file initializes the Redis client connection using ioredis.

import Redis from 'ioredis';

// Ensure the Redis URL is set in the environment variables.
if (!process.env.REDIS_URL) {
  throw new Error('REDIS_URL is not set in the environment variables.');
}

const redis = new Redis(process.env.REDIS_URL);

redis.on('connect', () => {
  console.log('Successfully connected to Redis.');
});

redis.on('error', (err) => {
  console.error('Redis connection error:', err);
});

export default redis;
