import { NextResponse } from "next/server";
import data from "@/public/api/book_types.json";

export async function GET() {
  return NextResponse.json(data);
}
