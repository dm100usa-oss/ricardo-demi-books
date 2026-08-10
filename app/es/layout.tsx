import React from "react";

/* Испанский раздел. Каркас общий, здесь только свои заголовки страницы.
   Свой html и свой подвал тут были бы вторыми: испанские страницы
   рисуются внутри общего каркаса. */

export const metadata = {
  metadataBase: new URL("https://www.ricardo-demi.com"),
  title: "Magic of Discoveries — Base Oficial de Conocimiento de Ricardo Demi",
  description:
    "Serie educativa oficial de Ricardo Demi que combina creatividad, inteligencia emocional y aprendizaje bilingüe para niños de 1 a 10 años.",
  alternates: {
    canonical: "https://www.ricardo-demi.com/es",
  },
};

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
