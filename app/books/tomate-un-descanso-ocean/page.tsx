import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Tómate un Descanso — Belleza del Océano | Ricardo Demi",
  description:
    "Libro de colorear para niños de 5–7 años. Desarrollo de composición, motricidad y equilibrio creativo.",
  alternates: {
    canonical:
      "https://www.ricardo-demi.com/books/tomate-un-descanso-ocean",
    languages: {
      en: "https://www.ricardo-demi.com/books/tomate-un-descanso-ocean",
      es: "https://www.ricardo-demi.com/es/books/tomate-un-descanso-ocean"
    }
  }
};

export default function Page() {
  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Tómate un Descanso</h1>
      <p className="page-sub">Belleza del Océano</p>
      <p>Grupo de edad: 5–7 años</p>
      <p>Tipo: Libro de colorear</p>
      <p>Habilidades: composición, motricidad fina, confianza creativa</p>

      <p>
        ISBN: 978-1963328394<br />
        Amazon:{" "}
        <a href="https://www.amazon.com/dp/1963328396" target="_blank">
          https://www.amazon.com/dp/1963328396
        </a>
      </p>

      <h3>Sobre el Libro</h3>
      <p>
        Un libro de colorear de ritmo equilibrado que ayuda al niño a mejorar la
        motricidad fina, la comprensión visual y la composición sin generar
        sobrecarga cognitiva. Ideal para el desarrollo creativo temprano.
      </p>

      <h3>Enlaces Internos</h3>
      <ul>
        <li><Link href="/books">Todos los libros</Link></li>
        <li><Link href="/">Página principal</Link></li>
        <li><Link href="/#age-5-7">Sistema 5–7 años</Link></li>
      </ul>

    </main>
  );
}
