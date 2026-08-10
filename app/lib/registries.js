/* Внешние площадки, на которых стандарт зарегистрирован.

   Это самое ценное, что есть у проекта. Поисковик и нейросеть связывают
   сайт, автора и стандарт в одну сущность именно по этим ссылкам.
   Пока связи нет, они считают их разными объектами.

   Порядок неслучаен: сначала то, что дает постоянство и цитируемость
   (DOI, Wikidata), потом машинная выдача, потом публикации. */

export const REGISTRIES = [
  {
    id: "doi",
    kind: { en: "Permanent citation", es: "Cita permanente" },
    name: "Zenodo DOI 10.5281/zenodo.17772515",
    url: "https://doi.org/10.5281/zenodo.17772515",
    note: {
      en: "Each version of the standard gets its own DOI, so a citation stays valid forever.",
      es: "Cada versión del estándar recibe su propio DOI, de modo que una cita sigue siendo válida para siempre.",
    },
  },
  {
    id: "wikidata",
    kind: { en: "Entity record", es: "Registro de entidad" },
    name: "Wikidata Q137168687",
    url: "https://www.wikidata.org/wiki/Q137168687",
    note: {
      en: "The standard as a named entity in the open knowledge graph that most AI systems read.",
      es: "El estándar como entidad con nombre en el grafo de conocimiento abierto que leen la mayoría de los sistemas de IA.",
    },
  },
  {
    id: "huggingface",
    kind: { en: "Machine-readable dataset", es: "Conjunto de datos legible por máquina" },
    name: "Hugging Face: fscbac-standard",
    url: "https://huggingface.co/datasets/fscbac-standard/fscbac-standard",
    note: {
      en: "The canonical JSON files, loadable in one line by any research or engineering team.",
      es: "Los archivos JSON canónicos, cargables en una línea por cualquier equipo de investigación o ingeniería.",
    },
  },
  {
    id: "github",
    kind: { en: "Source files", es: "Archivos fuente" },
    name: "GitHub: ricardo-demi-books",
    url: "https://github.com/dm100usa-oss/ricardo-demi-books/tree/main/public/api",
    note: {
      en: "The specification files as they are maintained, with full version history.",
      es: "Los archivos de la especificación tal como se mantienen, con historial completo de versiones.",
    },
  },
  {
    id: "medium",
    kind: { en: "Author's account of the standard", es: "Explicación del autor" },
    name: "Medium: FSCBAC, the full specification",
    url: "https://medium.com/@ricardodemi.author/fscbac-fundamental-specification-for-the-classification-analysis-of-childrens-books-official-93fc9a9241e9",
    note: {
      en: "What the standard defines and why it is written the way it is.",
      es: "Qué define el estándar y por qué está escrito como está.",
    },
  },
  {
    id: "linkedin",
    kind: { en: "The case for a standard", es: "El argumento a favor de un estándar" },
    name: "LinkedIn: Why AI needs a standard for children's books",
    url: "https://www.linkedin.com/pulse/fscbac-why-artificial-intelligence-needs-standard-childrens-c--wr4xe",
    note: {
      en: "The problem this standard exists to solve, written for a general audience.",
      es: "El problema que este estándar existe para resolver, escrito para un público general.",
    },
  },
];

/** Только адреса. Идут в разметку sameAs и в машинный блок. */
export const REGISTRY_URLS = REGISTRIES.map((r) => r.url);

export const AUTHOR_PROFILES = [
  "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H",
  "https://www.goodreads.com/author/show/49458093.Ricardo_Demi",
  "https://medium.com/@ricardodemi.author",
];

export const CITATION =
  "Ricardo Demi. FSCBAC Standard 3.1.0: Deterministic Specification for the " +
  "Classification and Analysis of Children's Books. Zenodo, 2025. " +
  "DOI 10.5281/zenodo.17772515.";
