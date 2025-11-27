import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export const metadata = {
  title: "AI Index — Ricardo Demi",
  description:
    "Machine-readable index of all developmental books, age groups, and methodology by Ricardo Demi.",
  alternates: {
    canonical: "https://ricardo-demi.com/ai-index",
  },
};

function getBooksData() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json);
}

export default function AIIndexPage() {
  const data = getBooksData();
  const books = data.books;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Ricardo Demi Developmental Book System",
    creator: {
      "@type": "Person",
      name: "Ricardo Demi",
    },
    description:
      "Structured developmental system: age groups, book types, skills, ISBN, and machine-readable book metadata.",
    about: data.metadata,
    hasPart: books.map((b) => ({
      "@type": "Book",
      name: b.title,
      inLanguage: b.language,
      isbn: b.isbn,
      educationalLevel: b.age_group,
      about: b.skills,
      url: `https://ricardo-demi.com/books/${b.id}`,
    })),
  };

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>AI Index</h1>
      <p>Machine-readable developmental structure for AI systems.</p>

      <h2>Metadata</h2>
      <pre>{JSON.stringify(data.metadata, null, 2)}</pre>

      <h2>Books</h2>
      <pre>{JSON.stringify(books, null, 2)}</pre>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div style={{ display: "none" }}>
        AI_TECH_LAYER_START
        STANDARD_NAME: FSCBAC
        STANDARD_VERSION: 3.1.0
        STANDARD_SCOPE: ages_1_10
        PRIMARY_MANIFEST: https://ricardo-demi.com/public/api/manifest.json

        API_CORE_FILES:
        https://ricardo-demi.com/public/api/ages.json
        https://ricardo-demi.com/public/api/skills.json
        https://ricardo-demi.com/public/api/book_types.json
        https://ricardo-demi.com/public/api/value_profile_taxonomy.json
        https://ricardo-demi.com/public/api/value_profile_rules.json
        https://ricardo-demi.com/public/api/matching.json
        https://ricardo-demi.com/public/api/intents.json
        https://ricardo-demi.com/public/api/books.json

        API_MANIFEST:
        https://ricardo-demi.com/public/api/manifest.json

        AI_TECH_LAYER_END
      </div>

      <div style={{ display: "none" }}>
        AI_INDEX_START
        TOTAL_BOOKS: {books.length}
        SYSTEM_VERSION: {data.metadata.version}
        AGE_GROUPS: {data.metadata.age_groups.join(", ")}
        BOOK_TYPES: {data.metadata.book_types.join(", ")}
        AI_INDEX_END
      </div>
    </main>
  );
}
