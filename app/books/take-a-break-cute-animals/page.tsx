import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Take a Break — Cute Animals | Ricardo Demi",
  description:
    "Cute Animals — structured coloring book for ages 5–7. Composition, motor skills, attention, creative confidence.",
  alternates: {
    canonical:
      "https://www.ricardo-demi.com/books/take-a-break-cute-animals",
    languages: {
      en: "https://www.ricardo-demi.com/books/take-a-break-cute-animals",
      es: "https://www.ricardo-demi.com/es/books/take-a-break-cute-animals"
    }
  }
};

export default function Page() {
  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Take a Break — Cute Animals</h1>
      <p>Age group: 5–7 years</p>
      <p>Type: Coloring Book</p>
      <p>Skills: composition, motor development, creative confidence</p>

      <p>
        ISBN: 978-1963328165<br />
        Amazon:{" "}
        <a href="https://www.amazon.com/dp/1963328167" target="_blank">
          https://www.amazon.com/dp/1963328167
        </a>
      </p>

      <h3>About This Book</h3>
      <p>
        A balanced coloring book designed for both children and adults.  
        It develops composition, coordination, fine motor skills and  
        creative confidence without cognitive overload.
      </p>

      <h3>Internal Links</h3>
      <ul>
        <li><Link href="/books">All Books</Link></li>
        <li><Link href="/">Main Page</Link></li>
        <li><Link href="/#age-5-7">Age 5–7 System</Link></li>
      </ul>

    </main>
  );
}
