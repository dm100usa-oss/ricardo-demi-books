import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/* Передаем адрес страницы в каркас, чтобы он знал, какой язык рисовать.
   Без этого испанский каркас вкладывался в общий и оба рисовали свой подвал.

   Вторая задача, добавлена 25.08.2026. Сайт открывается по двум адресам
   сразу: по настоящему домену ricardo-demi.com и по служебному
   ricardo-demi-books.vercel.app. Содержимое одинаковое, и для поисковика
   это два сайта-близнеца. Он выбирает между ними сам, и в Search Console
   видно, что выбрал он служебный: главная помечена как копия и по этой
   причине не индексируется вовсе.

   Указание на главный адрес на каждой странице уже стоит, но это лишь
   подсказка, и Google волен ее не послушать. Пометка "не заносить в
   поиск" это запрет, тут выбора у него нет. Разница между просьбой и
   правилом.

   Человеку это ничего не меняет: по служебному адресу сайт открывается
   и работает, проверять правки до выкладки по-прежнему удобно. Он просто
   перестает участвовать в поиске, что ему и не нужно.

   Оговорка на будущее: если сайт когда-нибудь останется без своего
   домена и будет жить на vercel.app, эту правку надо откатить. */

const REAL_HOST = "www.ricardo-demi.com";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-pathname", request.nextUrl.pathname);

  const res = NextResponse.next({ request: { headers } });

  const host = request.headers.get("host") || "";
  if (host && host !== REAL_HOST) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.).*)"],
};
