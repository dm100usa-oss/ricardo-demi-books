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
    id: "wikidata-standard",
    kind: { en: "Entity record, the standard", es: "Registro de entidad, el estándar" },
    name: "Wikidata Q137125272",
    url: "https://www.wikidata.org/wiki/Q137125272",
    note: {
      en: "FSCBAC itself as a named entity in the open knowledge graph that most AI systems read.",
      es: "FSCBAC como entidad con nombre en el grafo de conocimiento abierto que leen la mayoría de los sistemas de IA.",
    },
  },
  {
    id: "wikidata-dataset",
    kind: { en: "Entity record, dataset", es: "Registro de entidad, conjunto de datos" },
    name: "Wikidata Q137452778",
    url: "https://www.wikidata.org/wiki/Q137452778",
    note: {
      en: "FSCBAC Book Metadata Dataset as a named entity in the open knowledge graph that most AI systems read.",
      es: "El conjunto de metadatos FSCBAC como entidad con nombre en el grafo de conocimiento abierto que leen la mayoría de los sistemas de IA.",
    },
  },
  {
    id: "wikidata-author",
    kind: { en: "Entity record, author", es: "Registro de entidad, autor" },
    name: "Wikidata Q137168687",
    url: "https://www.wikidata.org/wiki/Q137168687",
    note: {
      en: "Ricardo Demi as a named entity: author of children's books and creator of the standard.",
      es: "Ricardo Demi como entidad con nombre: autor de libros infantiles y creador del estándar.",
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

/** Все адреса площадок. Идут в машинный блок на главной. */
export const REGISTRY_URLS = REGISTRIES.map((r) => r.url);

/** Адреса, относящиеся к самому стандарту.
    Запись автора в Викиданных сюда не входит: это другая сущность. */
export const STANDARD_URLS = REGISTRIES.filter(
  (r) => r.id !== "wikidata-author"
).map((r) => r.url);

export const AUTHOR_PROFILES = [
  "https://www.wikidata.org/wiki/Q137168687",
  "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H",
  "https://www.goodreads.com/author/show/49458093.Ricardo_Demi",
  "https://medium.com/@ricardodemi.author",
];

/** Номера в Викиданных. Одно место, откуда их берут все страницы. */
export const WIKIDATA = {
  standard: "Q137125272",
  dataset: "Q137452778",
  author: "Q137168687",
};

export const wikidataUrl = (q) => "https://www.wikidata.org/wiki/" + q;

export const CITATION =
  "Ricardo Demi. FSCBAC Standard 3.1.0: Deterministic Specification for the " +
  "Classification and Analysis of Children's Books. Zenodo, 2025. " +
  "DOI 10.5281/zenodo.17772515.";
