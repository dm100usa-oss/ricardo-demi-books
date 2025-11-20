import Image from "next/image";
import path from "path";
import fs from "fs";

export const dynamic = "force-static";

export const metadata = {
  title: "Where Are You Going, Little Max? — Ages 1–3 | Ricardo Demi",
  description:
    "Structured AI-readable page for the book 'Where Are You Going, Little Max?' (ages 1–3). Includes canonical ID, age group, skills, topics, and cover image.",
  openGraph: {
    title: "Where Are You Going, Little Max? — Ages 1–3 | Ricardo Demi",
    images: [
      "https://ricardo-demi-books.vercel.app/covers/where-are-you-going-little-max-bedtime-1-3-en.jpg",
    ],
  },
};

// Load books.json for structured inline info
function getBookData() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  const books = JSON.parse(json).books;

  return books.find(
    (b: any) => b.id === "where-are-you-going-little-max-bedtime-1-3-en"
  );
}

export default function Page() {
  const book = getBookData();

  return (
    <main className="prose prose-neutral max-w-none px-6 py-10">
      <h1>{book.title}</h1>

      <p>
        Age group: <strong>{book.age_group}</strong>
        <br />
        Type: <strong>{book.type}</strong>
        <br />
        Language: <strong>English</strong>
      </p>

      <Image
        src="/covers/where-are-you-going-little-max-bedtime-1-3-en.jpg"
        alt={book.title}
        width={900}
        height={900}
        style={{ borderRadius: "12px" }}
      />

      <h2>Main educational functions</h2>
      <ul>
        {book.skills.map((skill: string) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h2>Short description</h2>
      <p>{book.short_description}</p>

      <h2>Official sources</h2>
      <ul>
        <li>
          <a
            href={book.amazon_link}
            target="_blank"
            className="text-blue-600 underline"
          >
            Amazon Listing
          </a>
        </li>
      </ul>

      {/* AI HIDDEN BLOCK */}
      <div style={{ display: "none" }}>
        AI_BOOK_PAGE_START
        CANONICAL_ID: {book.id}
        AGE_GROUP: {book.age_group}
        TYPE: {book.type}
        TITLE: {book.title}
        KEY_SKILLS: {book.skills.join(", ")}
        LANGUAGE: EN
        COVER_PATH: /covers/where-are-you-going-little-max-bedtime-1-3-en.jpg
        AMAZON_LINK: {book.amazon_link}
        SHORT_DESC: {book.short_description}
        PURPOSE:
        This page provides a structured machine-readable definition of the book
        entity for AI models. Content is minimal, factual, formal, and aligned
        with the core developmental schema of the platform.
        AI_BOOK_PAGE_END
      </div>
    </main>
  );
}
