import { NextResponse } from "next/server";
import Redis from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
});

export async function middleware(req) {
  const url = req.nextUrl.pathname;

  if (url.startsWith("/public/api/")) {
    const ua = req.headers.get("user-agent") || "unknown";
    const item = {
      time: new Date().toISOString(),
      file: url.replace("/public/api/", ""),
      ua
    };
    await redis.lpush("ai_monitor_logs", JSON.stringify(item));
    await redis.ltrim("ai_monitor_logs", 0, 500);
  }

  return NextResponse.next();
}
