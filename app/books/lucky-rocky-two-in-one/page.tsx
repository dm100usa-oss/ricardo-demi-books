import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Lucky Rocky — Two-in-One Edition | Ricardo Demi",
  description:
    "Two-in-One bilingual gift edition for ages 7–10. English + Spanish stories for vocabulary growth and real-life language patterns.",
  alternates: {
    canonical:
      "https://www.ricardo-demi.com/books/lucky-rocky-two-in-one",
    languages: {
      en: "https://www.ricardo-demi.com/books/lucky-rocky-two-in-one",
      es: "https://www.ricardo-demi.com/es/books/lucky-rocky-two-in-one"
    }
  }
};

export default function Page() {
  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Lucky Rocky — Two-in-One Edition (EN+ES)</h1>
      <p>Age group: 7–10 years</p>
      <p>Type: Bilingual Two-in-One Edition</p>
      <p>Skills: vocabulary expansion, real-life scenes, logic</p>

      <p>
        ISBN: 978-1963328981<br />
        Amazon:{" "}
        <a href="https://www.amazon.com/dp/1963328981" target="_blank">
          https://www.amazon.com/dp/1963328981
        </a>
      </p>

      <h3>About This Book</h3>
      <p>
        A bilingual two-in-one edition where the child reads the same story first
        in English, then in Spanish. This method strengthens comprehension,
        vocabulary, retention, and natural bilingual acquisition.  
        The book is a winner of an international children's literary award.
      </p>

      <h3>Internal Links</h3>
      <ul>
        <li><Link href="/books">All Books</Link></li>
        <li><Link href="/">Main Page</Link></li>
        <li><Link href="/#age-7-10">Age 7–10 System</Link></li>
      </ul>

    </main>
  );
}
