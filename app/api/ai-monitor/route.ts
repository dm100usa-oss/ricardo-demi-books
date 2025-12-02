import { NextResponse } from 'next/server';

const globalAny = global as any;

export async function GET() {
  return NextResponse.json(globalAny.__VISITS__ || []);
}
