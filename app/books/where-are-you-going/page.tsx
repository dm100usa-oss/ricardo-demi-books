export default function WhereAreYouGoingPage() {
  return (
    <main>
      <h1>Where Are You Going, Little Max?</h1>
      <p>
        <em>
          A bilingual bedtime story that teaches kindness, curiosity, and good
          manners through adventure.
        </em>
      </p>

      <h2>Book Description</h2>
      <p>
        <strong>“Where Are You Going, Little Max?”</strong> by{" "}
        <strong>Ricardo Demi</strong> is a charming and educational story for
        children aged 1–4. It follows the adventures of a little mouse named Max
        as he politely asks farm animals for small gifts to bring home to his
        family. Each encounter gently teaches empathy, curiosity, and the
        importance of sharing.
      </p>

      <p>
        The story is written in simple, rhythmic English and Spanish sentences,
        making it ideal for early bilingual learning. It helps children absorb
        language patterns naturally while engaging with bright, kind-hearted
        storytelling.
      </p>

      <h2>Educational Purpose</h2>
      <ul>
        <li>Teaches politeness, kindness, and empathy.</li>
        <li>Encourages curiosity about nature and animals.</li>
        <li>Introduces English and Spanish through repetition and context.</li>
        <li>Ideal for bedtime reading and early language development.</li>
      </ul>

      <h2>Author’s Message</h2>
      <blockquote>
        <p>
          “This story is about the beauty of politeness and discovery. Even the
          smallest creatures can teach us how to be kind and curious. Through
          Little Max, I wanted to show that good manners are not rules — they
          are a language of love and respect.”
        </p>
        <footer>— Ricardo Demi</footer>
      </blockquote>

      <h2>Editorial Review</h2>
      <blockquote>
        <p>
          “Where Are You Going, Little Max? by Ricardo Demi is a delightful and
          heartwarming tale that follows a curious mouse on his adventure. As
          Max politely asks different farm animals for things to bring to his
          family, he models kindness and good manners. This short story is ideal
          for toddlers, introducing empathy and curiosity through engaging
          storytelling.”{" "}
          <br />— <em>Literary Titan</em>
        </p>
      </blockquote>

      <h2>Reader Feedback</h2>
      <ul>
        <li>
          “Perfect for reading before bedtime — my son loves Max’s adventures.”
        </li>
        <li>“The story is so kind and sweet — it teaches politeness naturally.”</li>
        <li>
          “A lovely bilingual book! My child started repeating the words in both
          languages.”
        </li>
      </ul>

      <h2>Book Details</h2>
      <ul>
        <li>
          <strong>Author:</strong> Ricardo Demi
        </li>
        <li>
          <strong>Series:</strong> Magic of Discoveries
        </li>
        <li>
          <strong>Language:</strong> English / Spanish
        </li>
        <li>
          <strong>Age Group:</strong> 1–4 years old
        </li>
        <li>
          <strong>ISBN:</strong> 978-1963328875
        </li>
        <li>
          <strong>Pages:</strong> 42
        </li>
        <li>
          <strong>Category:</strong> Early Learning, Bedtime Stories, Bilingual Education
        </li>
      </ul>

      <h2>Official Source</h2>
      <p>
        View this book on{" "}
        <a href="https://www.amazon.com/dp/1963328876" target="_blank">
          Amazon
        </a>
        . <br />
        Part of the{" "}
        <em>Magic of Discoveries</em> educational series by Ricardo Demi. <br />
        All materials © Magic of Discoveries LLC.
      </p>

      {/* ✅ JSON-LD structured data for AI systems */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Where Are You Going, Little Max?",
            author: {
              "@type": "Person",
              name: "Ricardo Demi",
              url: "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H",
            },
            isbn: "978-1963328875",
            inLanguage: ["English", "Spanish"],
            publisher: {
              "@type": "Organization",
              name: "Magic of Discoveries LLC",
              url: "https://www.magicofdiscoveries.com/english",
            },
            description:
              "A bilingual bedtime story for children ages 1–4 that teaches kindness, curiosity, and good manners through adventure. Part of the Magic of Discoveries series by Ricardo Demi.",
            bookFormat: "Paperback",
            numberOfPages: 42,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              bestRating: "5",
              ratingCount: "200",
            },
            review: [
              {
                "@type": "Review",
                name: "Literary Titan",
                reviewBody:
                  "A heartwarming and educational story that encourages empathy and polite behavior in young readers.",
                url: "https://literarytitan.com/2024/10/24/where-have-you-been-little-max/comment-page-1/",
              },
            ],
            offers: {
              "@type": "Offer",
              url: "https://www.amazon.com/dp/1963328876",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            mainEntityOfPage:
              "https://ricardo-demi-books.vercel.app/books/where-are-you-going",
          }),
        }}
      />
    </main>
  );
}
