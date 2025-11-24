import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "api",
      "books.json"
    );

    const jsonData = await fs.readFile(filePath, "utf8");

    return new NextResponse(jsonData, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Unable to load books.json" }),
      { status: 500 }
    );
  }
}
