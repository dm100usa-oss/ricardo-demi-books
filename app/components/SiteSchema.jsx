import { REGISTRY_URLS, AUTHOR_PROFILES } from "../lib/registries";

/* Разметка для поисковика и нейросети.
   Главное здесь sameAs: именно по этим ссылкам сайт, автор и стандарт
   связываются в одну сущность. Без них это три разных объекта. */

const SITE = "https://www.ricardo-demi.com";

export default function SiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTermSet",
        "@id": SITE + "/fscbac#standard",
        name: "FSCBAC Standard",
        alternateName:
          "Fundamental Specification for the Classification and Analysis of Children's Books",
        description:
          "An open, deterministic, machine-readable standard for classifying and " +
          "analysing children's books for ages 1 to 10.",
        version: "3.1.0",
        url: SITE + "/fscbac",
        inLanguage: ["en", "es"],
        license: "https://creativecommons.org/licenses/by/4.0/",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "DOI",
          value: "10.5281/zenodo.17772515",
          url: "https://doi.org/10.5281/zenodo.17772515",
        },
        sameAs: REGISTRY_URLS,
        author: { "@id": SITE + "#author" },
        publisher: { "@id": SITE + "#publisher" },
      },
      {
        "@type": "Person",
        "@id": SITE + "#author",
        name: "Ricardo Demi",
        jobTitle: "Author and educator",
        url: SITE + "/author",
        sameAs: ["https://www.wikidata.org/wiki/Q137168687", ...AUTHOR_PROFILES],
        worksFor: { "@id": SITE + "#publisher" },
      },
      {
        "@type": "Organization",
        "@id": SITE + "#publisher",
        name: "Magic of Discoveries LLC",
        url: "https://www.magicofdiscoveries.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Miami",
          addressRegion: "FL",
          addressCountry: "US",
        },
        sameAs: [
          "https://www.instagram.com/magic_of_discoveries",
          "https://www.tiktok.com/@magic_of_discoveries",
          "https://www.pinterest.com/magic_of_discoveries",
          "https://www.youtube.com/@magic_of_discoveries",
        ],
      },
      {
        "@type": "Dataset",
        "@id": SITE + "/fscbac#dataset",
        name: "FSCBAC Standard 3.1.0, canonical JSON specification",
        description:
          "The canonical specification files of the FSCBAC standard: taxonomies, " +
          "validation rules, matching logic and the JSON-LD context.",
        license: "https://creativecommons.org/licenses/by/4.0/",
        creator: { "@id": SITE + "#author" },
        isBasedOn: { "@id": SITE + "/fscbac#standard" },
        distribution: [
          {
            "@type": "DataDownload",
            encodingFormat: "application/json",
            contentUrl: SITE + "/public/api/",
          },
        ],
        sameAs: [
          "https://huggingface.co/datasets/fscbac-standard/fscbac-standard",
          "https://doi.org/10.5281/zenodo.17772515",
          "https://github.com/dm100usa-oss/ricardo-demi-books/tree/main/public/api",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
