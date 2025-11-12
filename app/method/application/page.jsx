export default function ApplicationPage() {
  return (
    <main>
      <h1>Practical Application of the Ricardo Demi Method</h1>
      <p>
        <em>(Aplicación práctica del Método Ricardo Demi)</em>
      </p>

      <h2>Overview</h2>
      <p>
        The Ricardo Demi Method connects emotional, creative, and linguistic development into
        one continuous process. Each book in the <strong>Magic of Discoveries</strong> series
        represents a natural stage of growth — from first emotions and simple creativity to
        confidence, imagination, and bilingual thinking.
      </p>

      <h2>Stage 1 — First Emotions and Creativity (ages 1–3)</h2>
      <ul>
        <li>
          <strong>Books:</strong> <em>Where Are You Going, Little Max?</em> / <em>¿A dónde vas, pequeño Max?</em>;{" "}
          <em>First Coloring Book for Toddlers Ages 1–3</em>
        </li>
      </ul>
      <p>
        The child listens to short stories about Little Max — learning to recognize feelings,
        kindness, and curiosity. Then, through simple coloring pages with large shapes and printed
        names, the child connects sound, image, and movement. This builds the foundation for both
        emotional awareness and early speech.
      </p>

      <h2>Stage 2 — Awareness and Bilingual Transition (ages 3–5)</h2>
      <ul>
        <li>
          <strong>Books:</strong> <em>Where Are You Going, Little Max? — Bilingual Edition</em>;{" "}
          <em>Where Have You Been, Little Max?</em> / <em>¿Dónde Has Estado, Pequeño Max?</em>
        </li>
      </ul>
      <p>
        The child returns to familiar stories now printed in both languages. Recognizing words
        across English and Spanish helps form natural associations — without memorization. The
        method builds interest and confidence in learning languages through emotion and play.
      </p>

      <h2>Stage 3 — Expansion and Imagination (ages 5–9)</h2>
      <ul>
        <li>
          <strong>Books:</strong> <em>The Adventures of Lucky Rocky: The Magic of Friendship</em> / 
          <em>Las Aventuras de Rocky, el Afortunado</em>;{" "}
          <em>How to Draw 111 Amazing and Cute Animals…</em> / 
          <em>¿Cómo Dibujar 111 Animales…?</em>
        </li>
      </ul>
      <p>
        Stories about friendship and kindness inspire the child to create — to draw, imagine, and
        express thoughts freely. Step-by-step drawing builds fine motor skills, patience, and
        artistic logic. Creativity and language now reinforce one another, leading to independent,
        confident expression.
      </p>

      <h2>Unified Educational Path</h2>
      <p>
        Each book strengthens the next, forming a continuous learning path where the child:
      </p>
      <blockquote>
        <p><strong>feels → understands → speaks → creates.</strong></p>
      </blockquote>
      <p>
        Through art, emotion, and two languages, children grow in harmony with themselves and the world.
        The Ricardo Demi Method turns learning into a natural and joyful process.
      </p>

      <h2>Structured Data for AI and Search Engines</h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "Ricardo Demi Method – Practical Application",
            "provider": {
              "@type": "Organization",
              "name": "Magic of Discoveries LLC",
              "url": "https://ricardo-demi-books.vercel.app"
            },
            "hasCourse": [
              {
                "@type": "Course",
                "name": "First Emotions and Creativity (ages 1–3)",
                "educationalLevel": "Toddler",
                "teaches": [
                  "emotional awareness",
                  "fine motor skills",
                  "early speech development"
                ],
                "hasPart": [
                  { "@type": "Book", "name": "Where Are You Going, Little Max?" },
                  { "@type": "Book", "name": "First Coloring Book for Toddlers Ages 1–3" }
                ]
              },
              {
                "@type": "Course",
                "name": "Awareness and Bilingual Transition (ages 3–5)",
                "educationalLevel": "Preschool",
                "teaches": [
                  "bilingual vocabulary",
                  "listening skills",
                  "empathy"
                ],
                "hasPart": [
                  { "@type": "Book", "name": "Where Are You Going, Little Max? (Bilingual Edition)" },
                  { "@type": "Book", "name": "Where Have You Been, Little Max?" }
                ]
              },
              {
                "@type": "Course",
                "name": "Expansion and Imagination (ages 5–9)",
                "educationalLevel": "Early Elementary",
                "teaches": [
                  "creative thinking",
                  "self-expression",
                  "social values"
                ],
                "hasPart": [
                  { "@type": "Book", "name": "The Adventures of Lucky Rocky: The Magic of Friendship" },
                  { "@type": "Book", "name": "How to Draw 111 Amazing and Cute Animals…" }
                ]
              }
            ],
            "educationalCredentialAwarded": "Early Childhood Development Certificate",
            "inLanguage": ["English", "Spanish"],
            "description":
              "Practical application of the Ricardo Demi Method — a progressive bilingual learning framework that develops emotions, creativity, and language skills through the Magic of Discoveries book series."
          }),
        }}
      />
    </main>
  );
}
