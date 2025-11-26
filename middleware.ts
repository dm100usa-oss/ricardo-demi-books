import { NextResponse } from "next/server";
import Redis from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
});

export async function middleware(request) {
  try {
    const url = request.nextUrl.pathname;
    const ua = request.headers.get("user-agent") || "unknown";

    const entry = {
      time: Date.now(),
      file: url,
      ua: ua
    };

    await redis.lpush("rd_logs", JSON.stringify(entry));
    await redis.ltrim("rd_logs", 0, 999);
  } catch (err) {
    console.error("Middleware error:", err);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/(.*)"]
};
