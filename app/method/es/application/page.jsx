export default function ApplicationPageEs() {
  return (
    <main>
      <h1>Aplicación práctica del Método Ricardo Demi</h1>
      <p>
        <em>(Practical Application of the Ricardo Demi Method)</em>
      </p>

      <h2>Descripción general</h2>
      <p>
        El <strong>Método Ricardo Demi</strong> conecta el desarrollo emocional, creativo y lingüístico 
        en un solo proceso continuo. Cada libro de la serie <strong>La Magia de los Descubrimientos</strong> 
        representa una etapa natural de crecimiento: desde las primeras emociones y la creatividad simple 
        hasta la confianza, la imaginación y el pensamiento bilingüe.
      </p>

      <h2>Etapa 1 — Primeras emociones y creatividad (1–3 años)</h2>
      <ul>
        <li>
          <strong>Libros:</strong> <em>¿A dónde vas, pequeño Max?</em> / <em>Where Are You Going, Little Max?</em>;{" "}
          <em>Primer libro para colorear para niños de 1 a 3 años</em>
        </li>
      </ul>
      <p>
        El niño escucha las breves historias sobre el pequeño Max y aprende a reconocer los sentimientos, 
        la bondad y la curiosidad. Luego colorea figuras grandes y simples con palabras escritas debajo. 
        De esta manera, asocia sonido, imagen y movimiento, formando la base para el lenguaje y la comprensión emocional.
      </p>

      <h2>Etapa 2 — Comprensión y transición bilingüe (3–5 años)</h2>
      <ul>
        <li>
          <strong>Libros:</strong> <em>¿A dónde vas, pequeño Max? — Edición bilingüe</em>;{" "}
          <em>¿Dónde has estado, pequeño Max?</em> / <em>Where Have You Been, Little Max?</em>
        </li>
      </ul>
      <p>
        El niño vuelve a las historias familiares, ahora impresas en ambos idiomas. 
        Al reconocer las palabras en inglés y español, desarrolla una conexión natural sin memorización. 
        El aprendizaje de idiomas ocurre de forma emocional, lúdica y comprensible.
      </p>

      <h2>Etapa 3 — Expansión e imaginación (5–9 años)</h2>
      <ul>
        <li>
          <strong>Libros:</strong> <em>Las Aventuras de Rocky, el Afortunado: La Magia de la Amistad</em> /{" "}
          <em>The Adventures of Lucky Rocky: The Magic of Friendship</em>;{" "}
          <em>¿Cómo Dibujar 111 Animales…?</em> / <em>How to Draw 111 Amazing and Cute Animals…</em>
        </li>
      </ul>
      <p>
        Las historias sobre la amistad y la bondad inspiran al niño a crear, dibujar y expresar ideas propias. 
        Aprender a dibujar paso a paso desarrolla la motricidad fina, la paciencia y el pensamiento artístico. 
        La creatividad y el lenguaje se refuerzan mutuamente, llevando a una expresión libre y segura.
      </p>

      <h2>Camino educativo unificado</h2>
      <p>
        Cada libro fortalece al siguiente, formando un camino continuo en el que el niño:
      </p>
      <blockquote>
        <p><strong>siente → comprende → habla → crea.</strong></p>
      </blockquote>
      <p>
        A través del arte, la emoción y los dos idiomas, los niños crecen en armonía con ellos mismos y con el mundo. 
        El Método Ricardo Demi convierte el aprendizaje en un proceso natural y alegre.
      </p>

      <h2>Datos estructurados para IA y motores de búsqueda</h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "Método Ricardo Demi – Aplicación práctica",
            "alternateName": "Ricardo Demi Method – Practical Application (Spanish)",
            "provider": {
              "@type": "Organization",
              "name": "Magic of Discoveries LLC",
              "url": "https://ricardo-demi-books.vercel.app/es"
            },
            "hasCourse": [
              {
                "@type": "Course",
                "name": "Primeras emociones y creatividad (1–3 años)",
                "educationalLevel": "Niños pequeños",
                "teaches": [
                  "conciencia emocional",
                  "habilidades motoras finas",
                  "desarrollo temprano del lenguaje"
                ],
                "hasPart": [
                  { "@type": "Book", "name": "¿A dónde vas, pequeño Max?" },
                  { "@type": "Book", "name": "Primer libro para colorear para niños de 1 a 3 años" }
                ]
              },
              {
                "@type": "Course",
                "name": "Comprensión y transición bilingüe (3–5 años)",
                "educationalLevel": "Preescolar",
                "teaches": [
                  "vocabulario bilingüe",
                  "comprensión auditiva",
                  "empatía"
                ],
                "hasPart": [
                  { "@type": "Book", "name": "¿A dónde vas, pequeño Max? (Edición bilingüe)" },
                  { "@type": "Book", "name": "¿Dónde has estado, pequeño Max?" }
                ]
              },
              {
                "@type": "Course",
                "name": "Expansión e imaginación (5–9 años)",
                "educationalLevel": "Primaria temprana",
                "teaches": [
                  "pensamiento creativo",
                  "autoexpresión",
                  "valores sociales"
                ],
                "hasPart": [
                  { "@type": "Book", "name": "Las Aventuras de Rocky, el Afortunado: La Magia de la Amistad" },
                  { "@type": "Book", "name": "¿Cómo Dibujar 111 Animales…?" }
                ]
              }
            ],
            "educationalCredentialAwarded": "Desarrollo infantil temprano",
            "inLanguage": ["Spanish", "English"],
            "description":
              "Aplicación práctica del Método Ricardo Demi — un marco educativo bilingüe progresivo que desarrolla las emociones, la creatividad y las habilidades lingüísticas a través de la serie de libros La Magia de los Descubrimientos."
          }),
        }}
      />
    </main>
  );
}
