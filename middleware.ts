import { NextRequest, NextResponse } from 'next/server';

type VisitorType = 'ai' | 'search' | 'crawler' | 'human';

function classifyVisitor(userAgent: string): VisitorType {
  const ua = userAgent.toLowerCase();

  if (ua.includes('gptbot') || ua.includes('chatgpt') || ua.includes('claude') || ua.includes('perplexity')) {
    return 'ai';
  }

  if (ua.includes('googlebot') || ua.includes('bingbot')) {
    return 'search';
  }

  if (ua.includes('curl') || ua.includes('wget') || ua.includes('python')) {
    return 'crawler';
  }

  return 'human';
}

// глобальное хранилище в памяти (ring buffer)
const globalAny = global as any;
globalAny.__VISITS__ = globalAny.__VISITS__ || [];
const MAX_RECORDS = 5000;

export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent') || '';
  const referer = req.headers.get('referer') || '';
  const pathname = req.nextUrl.pathname;

  // не логируем статику
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const record = {
    timestamp: new Date().toISOString(),
    path: pathname,
    method: req.method,
    referer,
    visitorType: classifyVisitor(ua),
    userAgent: ua,
    country: req.geo?.country || 'unknown',
  };

  globalAny.__VISITS__.push(record);

  if (globalAny.__VISITS__.length > MAX_RECORDS) {
    globalAny.__VISITS__.shift();
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
