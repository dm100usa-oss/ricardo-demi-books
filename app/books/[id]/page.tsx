import fs from "fs";
import path from "path";

export const dynamic = "force-static";

function getBooksData() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json).books;
}

export async function generateStaticParams() {
  const books = getBooksData();
  return books.map((book) => ({ id: String(book.id) }));
}

export const metadata = {
  title: "Book — Ricardo Demi",
  description:
    "Structured developmental book page by Ricardo Demi. AI-readable metadata: age group, skills, ISBN, Amazon.",
};

export default function BookPage({ params }) {
  const books = getBooksData();
  const book = books.find((b) => String(b.id) === params.id);

  if (!book) {
    return (
      <main className="prose prose-neutral max-w-none">
        <h1>Book not found</h1>
      </main>
    );
  }

  const {
    title,
    author,
    age_group,
    type,
    isbn,
    language,
    skills,
    amazon,
  } = book;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: title,
    author: {
      "@type": "Person",
      name: author,
    },
    inLanguage: language,
    isbn: isbn,
    bookFormat: "Paperback",
    audience: {
      "@type": "EducationalAudience",
      educationalLevel: age_group,
    },
    about: skills,
    url: `https://ricardo-demi-books.vercel.app/books/${book.id}`,
    offers: {
      "@type": "Offer",
      url: amazon,
    },
  };

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>{title}</h1>

      <p>Author: {author}</p>
      <p>Age group: {age_group}</p>
      <p>Type: {type}</p>
      <p>Language: {language}</p>
      <p>ISBN: {isbn}</p>
      <p>Skills: {skills.join(", ")}</p>

      <p>
        <a className="text-blue-600 underline" href={amazon} target="_blank">
          Amazon link
        </a>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div style={{ display: "none" }}>
        AI_BOOK_PAGE_START
        ID: {book.id}
        TITLE: {title}
        AGE_GROUP: {age_group}
        TYPE: {type}
        LANGUAGE: {language}
        ISBN: {isbn}
        SKILLS: {skills.join(", ")}
        AMAZON: {amazon}
        AI_BOOK_PAGE_END
      </div>
    </main>
  );
}
