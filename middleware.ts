import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/* Передаем адрес страницы в каркас, чтобы он знал, какой язык рисовать.
   Без этого испанский каркас вкладывался в общий и оба рисовали свой подвал. */

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.).*)"],
};
