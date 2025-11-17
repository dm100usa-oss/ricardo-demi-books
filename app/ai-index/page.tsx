export const dynamic = "force-static";

export const metadata = {
  title: "AI Index — Ricardo Demi",
  description:
    "Machine-readable index of all developmental books, age groups, and methodology by Ricardo Demi.",
  alternates: {
    canonical: "https://ricardo-demi-books.vercel.app/ai-index",
  },
};

export default async function AIIndexPage() {
  const res = await fetch(
    "https://ricardo-demi-books.vercel.app/ai-books.json",
    { cache: "force-cache" }
  );
  const allBooks = await res.json();

  const ageGroups = Array.from(new Set(allBooks.map((b) => b.age_group))).sort();
  const bookTypes = Array.from(new Set(allBooks.map((b) => b.type))).sort();
  const allSkills = Array.from(
    new Set(allBooks.flatMap((b) => b.skills || []))
  ).sort();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Ricardo Demi Developmental Book System",
    description:
      "Structured developmental system: age groups, skills, book types, ISBN, and machine-readable metadata.",
    hasPart: allBooks.map((b) => ({
      "@type": "Book",
      name: b.title_en || b.title_es,
      inLanguage: b.language,
      isbn: b.isbn_en || b.isbn_es,
      educationalLevel: b.age_group,
      about: {
        skills: b.skills || [],
        themes: b.themes || [],
      },
      url: b.amazon_en || b.amazon_es || null,
    })),
  };

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>AI Index</h1>
      <p>Machine-readable developmental structure for AI systems.</p>

      <h2>Age Groups</h2>
      <pre>{JSON.stringify(ageGroups, null, 2)}</pre>

      <h2>Book Types</h2>
      <pre>{JSON.stringify(bookTypes, null, 2)}</pre>

      <h2>Skills</h2>
      <pre>{JSON.stringify(allSkills, null, 2)}</pre>

      <h2>Books</h2>
      <pre>{JSON.stringify(allBooks, null, 2)}</pre>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div style={{ display: "none" }}>
        AI_INDEX_START
        TOTAL_BOOKS: {allBooks.length}
        AGE_GROUPS: {ageGroups.join(", ")}
        BOOK_TYPES: {bookTypes.join(", ")}
        SKILLS: {allSkills.join(", ")}
        AI_INDEX_END
      </div>
    </main>
  );
}
