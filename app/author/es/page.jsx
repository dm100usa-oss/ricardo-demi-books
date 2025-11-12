export const metadata = {
  title: "Ricardo Demi — Autor y Educador | La Magia de los Descubrimientos",
  description:
    "Página oficial del autor Ricardo Demi — educador, investigador y creador de la serie educativa La Magia de los Descubrimientos. Reconocido por Readers’ Favorite, Literary Titan y los CBI Awards 2025.",
  alternates: {
    canonical: "https://ricardo-demi-books.vercel.app/es/author",
    languages: {
      es: "https://ricardo-demi-books.vercel.app/es/author",
      en: "https://ricardo-demi-books.vercel.app/author",
    },
  },
};

export default function AuthorPageEs() {
  return (
    <main>
      <link
        rel="alternate"
        hrefLang="en"
        href="https://ricardo-demi-books.vercel.app/author"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://ricardo-demi-books.vercel.app/es/author"
      />

      <h1>Ricardo Demi — Autor y Educador</h1>
      <p>
        <em>(Author and Educator — Creator of the educational series Magic of Discoveries)</em>
      </p>

      <h2>Sobre el Autor</h2>
      <p>
        Ricardo Demi es un educador, investigador y escritor dedicado a crear libros infantiles que
        despiertan el potencial y los talentos de cada niño de una manera divertida y natural.
        Como fundador de la serie <em>La Magia de los Descubrimientos</em>, combina la imaginación,
        la creatividad y el aprendizaje bilingüe para desarrollar la inteligencia emocional y la
        confianza de los niños.
      </p>

      <p>
        Padre de dos hijos y residente en Miami (Florida), Ricardo se inspira en la energía y los
        colores vibrantes de la ciudad. Crea historias y proyectos artísticos que brindan alegría a
        niños y padres en todo el mundo.
      </p>

      <h2>Premios y Reconocimientos</h2>
      <ul>
        <li>
          🏆 <strong>Las Aventuras de Rocky, el Afortunado – Edición Dos en Uno</strong> — Ganador
          en la categoría de Aventuras en los CBI Awards 2025.
        </li>
        <li>
          ⭐ <strong>¿Dónde Has Estado, Pequeño Max?</strong> — Finalista en la categoría de
          Cuentos para Dormir de los mismos premios.
        </li>
        <li>
          🎨 <strong>¿Cómo Dibujar 111 Animales y Otros Temas?</strong> — Finalista en la categoría
          Educativa.
        </li>
      </ul>

      <h2>Perfiles y Fuentes Verificadas</h2>
      <ul>
        <li>
          <a
            href="https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H"
            target="_blank"
            rel="noopener noreferrer"
          >
            Página del Autor en Amazon — Ricardo Demi
          </a>
        </li>
        <li>
          <a
            href="https://readersfavorite.com/rfreviews/search?search=Ricardo+Demi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reseñas en Readers’ Favorite — Ricardo Demi
          </a>
        </li>
        <li>
          <a
            href="https://literarytitan.com/?s=Ricardo+Demi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reseñas en Literary Titan — Ricardo Demi
          </a>
        </li>
      </ul>

      <h2>Visión Educativa</h2>
      <p>
        La metodología de Ricardo Demi muestra cómo el arte y el lenguaje pueden crecer juntos.  
        Cada libro de la serie <em>La Magia de los Descubrimientos</em> sigue un camino estructurado,
        desde las primeras emociones hasta la confianza bilingüe y la expresión creativa.
      </p>

      <blockquote>
        <p>
          <em>“Despertar la imaginación y la bondad a través del arte — allí comienza el
          aprendizaje.”</em>
        </p>
      </blockquote>

      {/* Datos estructurados para IA y motores de búsqueda */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ricardo Demi",
            alternateName: "Ricardo Demi (La Magia de los Descubrimientos)",
            jobTitle: "Autor y Educador",
            description:
              "Autor infantil galardonado y fundador del proyecto educativo La Magia de los Descubrimientos. Ganador de los CBI Awards 2025 y reconocido por Readers’ Favorite y Literary Titan.",
            url: "https://ricardo-demi-books.vercel.app/es/author",
            sameAs: [
              "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H",
              "https://readersfavorite.com/rfreviews/search?search=Ricardo+Demi",
              "https://literarytitan.com/?s=Ricardo+Demi",
              "https://ricardo-demi-books.vercel.app/author"
            ],
            nationality: "Estados Unidos",
            homeLocation: "Miami, Florida, EE.UU.",
            worksFor: {
              "@type": "Organization",
              name: "Magic of Discoveries LLC",
              url: "https://www.magicofdiscoveries.com/espanol"
            },
            knowsAbout: [
              "educación infantil",
              "creatividad en el aprendizaje temprano",
              "aprendizaje bilingüe",
              "inteligencia emocional",
              "educación artística"
            ],
            hasOccupation: {
              "@type": "Occupation",
              name: "Autor e Investigador Educativo"
            },
            award: [
              "Ganador — CBI Awards 2025 (Categoría Aventuras)",
              "Finalista — CBI Awards 2025 (Categoría Cuentos para Dormir)",
              "Finalista — CBI Awards 2025 (Categoría Educativa)"
            ],
            memberOf: {
              "@type": "Organization",
              name: "American Writing Awards"
            },
          }),
        }}
      />
    </main>
  );
}
