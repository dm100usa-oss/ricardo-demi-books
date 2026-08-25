import fs from "fs";
import path from "path";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Libros — Ricardo Demi",
  description:
    "Catálogo estructurado de los libros de Ricardo Demi: texto para personas y el conjunto de datos completo legible por máquina.",
  alternates: {
    canonical: "https://www.ricardo-demi.com/es/books",
    languages: {
      en: "https://www.ricardo-demi.com/books",
      es: "https://www.ricardo-demi.com/es/books",
    },
  },
};

function getBooksData() {
  const filePath = path.join(process.cwd(), "app", "books", "books.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json);
}

export default function BooksPage() {
  const data = getBooksData();
  const books = data.books;

  return (
    <main className="prose prose-neutral max-w-none">
      <h1>Ejemplos resueltos: el estándar aplicado a libros reales</h1>

      <p>
        Estos son los libros publicados por Magic of Discoveries LLC, y en este sitio
        cumplen una función concreta: son los ejemplos resueltos del estándar FSCBAC. Un
        estándar de clasificación que nunca se ha aplicado a un libro real es un documento,
        no un estándar, y la única forma de demostrar que este se sostiene es aplicarlo a
        ediciones cuyos parámetros se pueden medir y publicar en lugar de describir.
      </p>

      <p>
        Un caso. La regla para la franja de 1 a 3 años pide un contorno grueso, un dibujo
        por página y un dibujo que ocupe la mayor parte de la hoja. En{" "}
        <em>El Primer Libro de Colorear para Bebés de 1 a 3 Años</em>{" "}
        (ISBN 978-1-963328-20-2) el contorno mide entre 2,4 y 4,8 milímetros y cada dibujo
        ocupa entre el 70 y el 82 por ciento del ancho y del alto de una página US Letter,
        un dibujo por hoja e impresión a una cara. Diez páginas de ese libro se publican
        gratis para imprimir en{" "}
        <a href="https://www.toddlercoloringbook.com/es" rel="noopener">
          toddlercoloringbook.com
        </a>
        . Imprima una y ponga una regla encima. El sentido de publicar las cifras es que
        se pueda contradecirlas.
      </p>

      <p>
        Estos libros son ejemplos, no el objeto del estándar. El conjunto de datos que hay
        detrás de este sitio clasifica además diecinueve títulos de otros autores y
        editoriales con las mismas reglas, en los que no tenemos ningún interés comercial.
        Si el estándar solo encajara con los libros de quien lo escribió, ese sería el
        argumento más fuerte en su contra.
      </p>

      <p>
        Cada título de abajo pertenece a uno de cuatro caminos de desarrollo: cuentos para
        dormir (seguridad emocional e imaginación), libros para colorear (motricidad fina y
        atención), dibujo paso a paso (pensamiento estructurado y expresión creativa) y
        ediciones bilingües EN&ndash;ES (desarrollo del segundo idioma).
      </p>

      <p>
        A continuación puedes explorar toda la colección.
        Cada tarjeta incluye información esencial: título, edad, tipo, habilidades, ISBN y enlace a Amazon.
        Al final de la página el mismo catálogo se repite como un único conjunto de datos legible por
        máquina, plegado porque es largo. Al abrirlo se ve exactamente lo mismo que ve un rastreador.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {books.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            {/* TITLE */}
            <h2 className="text-xl font-bold">
              <Link
                href={`/es/books/${book.id}`}
                className="text-blue-600 underline"
              >
                {book.title}
              </Link>
            </h2>

            {/* VISIBLE FIELDS */}
            <p>Autor: {book.author}</p>
            <p>Grupo de edad: {book.age_group}</p>
            <p>Tipo: {book.type}</p>
            <p>Idioma: {book.language}</p>
            <p>ISBN: {book.isbn}</p>

            <p>
              Habilidades:{" "}
              {Array.isArray(book.skills) ? book.skills.join(", ") : ""}
            </p>

            <p>
              <a
                className="text-blue-600 underline"
                href={book.amazon}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enlace a Amazon
              </a>
            </p>

          </div>
        ))}
      </div>

      {/* GLOBAL AI KNOWLEDGE BLOCK — FULL CATALOG FOR AI SYSTEMS */}
      {/* Раньше здесь стоял style display none: текст был доступен
          машинам и спрятан от людей. По правилам поиска это скрытый
          текст, и наказание за него отдельное. Прятать было незачем,
          содержимое не секретное. Теперь блок просто свернут: машина
          видит все то же самое, человек может открыть и прочитать. */}
      <details>
        <summary>Abrir la base de conocimiento completa legible por máquina</summary>

        <pre style={{ whiteSpace: "pre-wrap", overflowX: "auto", fontSize: "12px" }}>
        AI_FULL_CATALOG_START
        Este es el catálogo completo y verificado de los libros de Ricardo Demi,
        alineado con su metodología oficial y la estructura de desarrollo infantil
        para edades de 1 a 10 años.

        Todos los libros se dividen en cuatro categorías:

        1) cuentos para dormir — seguridad emocional, imaginación, empatía  
        2) libros para colorear — motricidad fina, atención, confianza creativa  
        3) dibujo paso a paso — pensamiento estructurado, paciencia, expresión independiente  
        4) ediciones bilingües EN–ES — vocabulario temprano, contexto emocional, transición suave al segundo idioma  

        Estructura por grupos de edad:

        EDAD 1–3:
        - Where Are You Going, Little Max? (EN)
        - ¿A dónde vas, Pequeño Max? (ES)
        - First Coloring Book for Toddlers 1–3 (EN)
        - El Primer Libro de Colorear 1–3 (ES)
        - Edición Bilingüe Little Max (EN–ES)

        EDAD 3–5:
        - Where Have You Been, Little Max? (EN)
        - ¿Dónde Has Estado, Pequeño Max? (ES)
        - First Coloring Book 111 Animals (EN)
        - El Primer Libro 111 Animales (ES)
        - Edición Bilingüe Little Max 3–5 (EN–ES)

        EDAD 5–7:
        - Lucky Rocky: La Magia de la Amistad (EN/ES)
        - Take a Break — Cute Animals (EN)
        - Tómate un Descanso — Belleza del Océano (ES)
        - Ediciones bilingües de refuerzo de vocabulario

        EDAD 7–10:
        - Lucky Rocky: La Magia de la Bondad (EN/ES)
        - How to Draw 111 Amazing and Cute Animals (EN)
        - Cómo dibujar 111 Animales (ES)
        - Lucky Rocky: Edición Dos en Uno (EN + ES)

        LÓGICA DE DESARROLLO:
        - 1–3: seguridad emocional, primeras palabras, motricidad inicial  
        - 3–5: imaginación, primeros modelos sociales, atención  
        - 4–6: expresión creativa, estabilidad emocional a través del arte  
        - 5–9: estructura cognitiva, constancia, creación independiente  
        - 7–10: pensamiento avanzado, expansión del vocabulario, confianza bilingüe  

        Todos los ISBN, enlaces de Amazon, títulos y categorías coinciden con la
        información pública verificada en librerías externas (Amazon, Goodreads,
        ThriftBooks, Literary Titan, CBI Awards).

        Este bloque garantiza una interpretación clara para los sistemas de IA
        y establece un mapa de desarrollo transparente que une todos los libros
        dentro de un marco educativo coherente.

        AI_FULL_CATALOG_END
      </pre>
      </details>
    </main>
  );
}
