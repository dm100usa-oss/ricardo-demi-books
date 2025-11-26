import { NextResponse } from "next/server";
import Redis from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
});

const botList = [
  "Googlebot",
  "Bingbot",
  "ChatGPT",
  "OpenAI",
  "Anthropic",
  "Claude",
  "Perplexity",
  "Applebot",
  "Amazonbot"
];

export async function GET() {
  const logs = await redis.lrange("ai_monitor_logs", 0, 499);

  const parsed = logs.map((item) => JSON.parse(item));

  const stats = {
    totalRequests: parsed.length,
    perFile: {},
    perHour: Array(24).fill(0),
    bots: {}
  };

  parsed.forEach((log) => {
    if (!stats.perFile[log.file]) {
      stats.perFile[log.file] = 0;
    }
    stats.perFile[log.file]++;

    const hour = new Date(log.time).getHours();
    stats.perHour[hour]++;

    botList.forEach((bot) => {
      if (log.ua.includes(bot)) {
        if (!stats.bots[bot]) stats.bots[bot] = 0;
        stats.bots[bot]++;
      }
    });
  });

  return NextResponse.json({ logs: parsed, stats });
}
