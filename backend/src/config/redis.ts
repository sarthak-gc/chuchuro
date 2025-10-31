import { Redis } from "ioredis";

class RedisService {
  private static instance: RedisService;
  private redis: Redis;

  private constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379, // default Redis port
      password: process.env.REDIS_PASSWORD,
      maxRetriesPerRequest: 3,
      lazyConnect: true,
    });

    this.redis.on("connect", () => {
      console.log("✅ Redis connected successfully");
    });

    this.redis.on("error", (error: Error) => {
      console.error("❌ Redis connection error:", error.message);
    });

    this.redis.on("close", () => {
      console.warn("⚠️ Redis connection closed");
    });
  }

  public static getInstance(): RedisService {
    if (!RedisService.instance) {
      RedisService.instance = new RedisService();
    }
    return RedisService.instance;
  }

  async get<T>(key: string): Promise<T | null> {
    const data = await this.redis.get(key);
    return data ? JSON.parse(data) : null;
  }

  async set(key: string, value: any, ttl: number = 3600): Promise<void> {
    await this.redis.setex(key, ttl, JSON.stringify(value));
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key);
  }

  async cacheOrFetch<T>(
    key: string,
    fetchFn: () => Promise<T>,
    ttl: number = 3600
  ): Promise<T> {
    const cached = await this.get<T>(key);
    if (cached) return cached;

    const data = await fetchFn();
    await this.set(key, data, ttl);
    return data;
  }

  async invalidate(pattern: string): Promise<void> {
    const keys = await this.redis.keys(pattern);
    if (keys.length > 0) {
      await Promise.all(keys.map((key: string) => this.del(key)));
    }
  }

  getClient(): Redis {
    return this.redis;
  }

  async disconnect(): Promise<void> {
    await this.redis.quit();
  }
}

const redisService = RedisService.getInstance();
export default redisService;
