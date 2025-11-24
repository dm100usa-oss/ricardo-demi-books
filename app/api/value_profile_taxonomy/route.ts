import { NextResponse } from "next/server";
import data from "@/public/api/value_profile_taxonomy.json";

export async function GET() {
  return NextResponse.json(data);
}
