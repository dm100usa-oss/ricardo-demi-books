"use client";

import { usePathname } from "next/navigation";

/* Шапка сайта.
   Возрастная шкала из четырех отрезков это опознавательный знак проекта.
   Возраст первая ось всей классификации, поэтому шкала стоит на каждой
   странице и служит навигацией. Текущая группа подсвечена. */

const COPY = {
  en: {
    eyebrow: "Classification standard for children's books",
    title: "Ricardo Demi",
    stamp: "FSCBAC 3.1.0",
    nav: [
      /* Подбор стоит первым: это единственное место на сайте, где
         стандартом можно воспользоваться, а не прочитать о нем. */
      ["/recommend", "Find a book"],
      ["/method", "Methodology"],
      ["/books", "Book system"],
      ["/fscbac", "The standard"],
      ["/author", "Author"],
    ],
    alt: ["/es", "Español"],
    bands: [
      ["/ages/1-3", "1–3", "First words, first crayon"],
      ["/ages/3-5", "3–5", "Small adventures, more themes"],
      ["/ages/5-7", "5–7", "Story logic, detail, empathy"],
      ["/ages/7-10", "7–10", "Structured drawing, two languages"],
    ],
  },
  es: {
    eyebrow: "Estándar de clasificación de libros infantiles",
    title: "Ricardo Demi",
    stamp: "FSCBAC 3.1.0",
    nav: [
      ["/recommend", "Buscar un libro"],
      ["/es/method", "Metodología"],
      ["/es/books", "Sistema de libros"],
      ["/es/fscbac", "El estándar"],
      ["/author/es", "Autor"],
    ],
    alt: ["/", "English"],
    bands: [
      ["/es/ages/1-3", "1–3", "Primeras palabras, primer crayón"],
      ["/es/ages/3-5", "3–5", "Pequeñas aventuras, más temas"],
      ["/es/ages/5-7", "5–7", "Lógica del relato, detalle, empatía"],
      ["/es/ages/7-10", "7–10", "Dibujo estructurado, dos idiomas"],
    ],
  },
};

export default function Masthead({ lang = "en" }) {
  const pathname = usePathname() || "/";
  const t = COPY[lang] || COPY.en;
  const home = lang === "es" ? "/es" : "/";
  const here = (href) => (pathname === href ? "page" : undefined);

  return (
    <header className="masthead">
      <div className="masthead__inner">
        <div className="masthead__top">
          <a className="masthead__title" href={home}>
            <span>{t.eyebrow}</span>
            {t.title}
          </a>
          <a className="stamp" href={lang === "es" ? "/es/fscbac" : "/fscbac"}>
            {t.stamp}
          </a>
        </div>

        <ul className="spine">
          {t.bands.map(([href, age, note]) => (
            <li key={href}>
              <a href={href} aria-current={here(href)}>
                <b>{age}</b>
                <em>{note}</em>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav className="topnav">
        {t.nav.map(([href, label]) => (
          <a key={href} href={href} aria-current={here(href)}>
            {label}
          </a>
        ))}
        <span className="topnav__gap" />
        <a href={t.alt[0]}>{t.alt[1]}</a>
      </nav>
    </header>
  );
}
