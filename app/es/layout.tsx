import React from "react";

export const metadata = {
  metadataBase: new URL("https://www.ricardo-demi.com"),
  title: "Magic of Discoveries — Base Oficial de Conocimiento de Ricardo Demi",
  description:
    "Serie educativa oficial de Ricardo Demi que combina creatividad, inteligencia emocional y aprendizaje bilingüe para niños de 1 a 10 años.",
  alternates: {
    canonical: "https://www.ricardo-demi.com/es",
  },
};

export default function ESLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
