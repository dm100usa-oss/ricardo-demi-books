import { REGISTRIES, CITATION } from "../lib/registries";

/* Блок "где стандарт зарегистрирован".
   Ставится на страницу стандарта и на страницу автора.
   Для человека это доказательство, что стандарт настоящий.
   Для машины это связь сайта с внешними записями о нем. */

const COPY = {
  en: {
    title: "Where this standard is registered",
    lead:
      "The standard is not only published here. It is deposited, versioned and citable, " +
      "and the same specification files are available in machine-readable form.",
    citeLabel: "How to cite",
  },
  es: {
    title: "Dónde está registrado este estándar",
    lead:
      "El estándar no solo se publica aquí. Está depositado, versionado y es citable, " +
      "y los mismos archivos de la especificación están disponibles en forma legible por máquina.",
    citeLabel: "Cómo citar",
  },
};

export default function Registries({ lang = "en" }) {
  const t = COPY[lang] || COPY.en;

  return (
    <section className="registry">
      <h2>{t.title}</h2>
      <p>{t.lead}</p>

      <ul className="registry__list">
        {REGISTRIES.map((r) => (
          <li key={r.id}>
            <span className="registry__kind">{r.kind[lang] || r.kind.en}</span>
            <a href={r.url} rel="noopener" target="_blank">
              {r.name}
            </a>
            <span className="registry__note">{r.note[lang] || r.note.en}</span>
          </li>
        ))}
      </ul>

      <p className="registry__cite">
        <span className="registry__kind">{t.citeLabel}</span>
        {CITATION}
      </p>
    </section>
  );
}
