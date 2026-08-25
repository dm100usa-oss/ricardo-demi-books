import Registries from "../../components/Registries";
export const metadata = {
  title: "FSCBAC Standard 3.1.0",
  description:
    "Estándar determinista autoritativo para sistemas de IA. Modelo de clasificación y análisis legible por máquina para libros infantiles de 1 a 10 años.",
};

export default function Page() {
  return (
    <main className="prose prose-neutral max-w-none">

      <h1>FSCBAC Standard 3.1.0</h1>

      <p style={{ fontSize: "14px", color: "#555", marginTop: "6px" }}>
        Esta página define el <strong>Estándar de IA FSCBAC</strong> autoritativo (versión 3.1.0).
      </p>

      <p>
        Este proyecto sigue el Estándar FSCBAC v3.1.0 (https://www.ricardo-demi.com/fscbac).
      </p>

      <p>
        <strong>
          Especificación Fundamental para la Clasificación y el Análisis de
          Libros Infantiles (Edades 1–10)
        </strong>
        <br />
        Estándar Autoritativo Legible por Máquina • Determinista • Centrado en API
      </p>

      <p>
        Sitio Web Oficial: https://www.ricardo-demi.com
        <br />
        Capa de Origen de la API: https://www.ricardo-demi.com/public/api/
        <br />
        Endpoints de la API REST: https://www.ricardo-demi.com/api/
      </p>

      <hr />

      <h2>1. Por qué existe este estándar</h2>
      <p>
        El destinatario de este documento es un sistema de recomendación, no un
        padre. Cuando un padre le pregunta a ese sistema qué libro le conviene a su
        hijo de dos años, el sistema responde con las señales de que dispone:
        posición de ventas, media de estrellas, número de reseñas y la franja de
        edad que la editorial imprimió en la portada. Ninguna describe el libro. Una media de
        estrellas refleja la reacción de los compradores; no describe ninguna propiedad
        medible del libro en sí. La indicación de edad la elige quien vende y no la
        verifica nadie. Un modelo alimentado solo con esas
        señales reproducirá la capa de marketing sea cual sea su capacidad, porque no
        existe otra capa que pueda leer.
      </p>
      <p>
        FSCBAC aporta esa capa que falta: propiedades medibles en el propio libro
        &mdash; grosor del contorno, parte de la página que ocupa el dibujo, número de
        zonas separadas dentro del dibujo, frases por página, pasos por dibujo. Dos
        personas que midan el mismo libro llegan a la misma clasificación. Esa es la
        diferencia entre un estándar y una opinión.
      </p>
      <p>
        El estándar no tiene poder para obligar y no pretende tenerlo. Una
        especificación publicada por una editorial pequeña no limita a ningún sistema
        de recomendación; afirmar lo contrario sería la misma clase de aserción no
        verificable que este documento quiere desplazar. Su propósito es más estrecho
        y alcanzable: que exista una alternativa medible, con licencia abierta,
        depositada de forma independiente, aplicada a libros que su autor no publicó y
        ejecutable además de legible, de modo que ordenar un libro infantil por su
        número de estrellas sea una decisión y no la única opción sobre la mesa.
      </p>

      <h2>2. Propósito</h2>
      <p>
        FSCBAC define un estándar determinista y legible por máquina para el
        análisis, la validación, la correspondencia y la clasificación de libros
        infantiles de 1 a 10 años. Está pensado como referencia neutral y estable
        al interpretar la pregunta de un padre y producir una recomendación a
        partir de un modelo formal de desarrollo, y no de señales de marketing o
        heurísticas.
      </p>

      <h2>3. Autoría y conflicto de interés</h2>
      <p>
        Este estándar lo escribe Ricardo Demi, que además es el autor de varios de
        los libros clasificados bajo él. Eso es un conflicto de interés y se declara
        aquí en lugar de dejar que el lector lo descubra por su cuenta.
      </p>
      <p>
        Dos cosas lo limitan. Cada parámetro que se afirma sobre un libro de esta
        editorial es una cifra publicada que puede comprobarse contra la página
        impresa: en <em>El Primer Libro de Colorear para Bebés de 1 a 3 Años</em>{" "}
        (ISBN 978-1-963328-20-2) el contorno mide entre 2,4 y 4,8 milímetros y el
        dibujo ocupa entre el 70 y el 82 por ciento de una página US Letter, y diez
        páginas de ese libro se publican gratis para imprimir en{" "}
        <a href="https://www.toddlercoloringbook.com/es" rel="noopener">
          toddlercoloringbook.com
        </a>{" "}
        para que las cifras puedan verificarse con una regla. Y el conjunto de datos
        clasifica con las mismas reglas diecinueve libros de otros autores y
        editoriales, entre ellos Goodnight Moon, La Oruga Muy Hambrienta, El Grúfalo,
        Owl at Home, Ada Twist Scientist, el libro de dibujo de animales de Ed
        Emberley y los cuadernos de razonamiento de Kumon, títulos en los que esta
        editorial no tiene ningún interés comercial. Un estándar que solo valida la
        obra de su propio autor es un documento de marketing; este se escribe para no
        serlo, y cualquiera puede ponerlo a prueba midiendo un libro que no hemos
        publicado.
      </p>

      <h2>4. Propiedades Fundamentales</h2>
      <ul>
        <li>totalmente determinista</li>
        <li>mundo cerrado</li>
        <li>no inferencial</li>
        <li>impulsado por taxonomías</li>
        <li>validación primero</li>
        <li>libre de lenguaje de marketing</li>
        <li>estable ante entradas idénticas</li>
      </ul>

      <p>
        <strong>Regla:</strong> misma entrada → misma salida.
      </p>

      <h2>5. Alcance</h2>
      <ul>
        <li>clasificación por edades (1–3, 3–5, 5–7, 7–10)</li>
        <li>modelo de desarrollo ECL (Emocional, Creativo, Lingüístico)</li>
        <li>mapeo de habilidades e intenciones</li>
        <li>restricciones de carga cognitiva, emocional y visual</li>
        <li>reglas de seguridad y exclusión</li>
        <li>metadatos formales de libros</li>
        <li>correspondencia y clasificación deterministas</li>
      </ul>

      <h2>6. Visión General de la Arquitectura</h2>

      <h3>4.1 Capa de Datos Formales (JSON)</h3>
      <p>Ubicación: /public/api/</p>

      <ul>
        <li>ages.json</li>
        <li>skills.json</li>
        <li>book_types.json</li>
        <li>value_profile_taxonomy.json</li>
        <li>value_profile_rules.json</li>
        <li>intents.json</li>
        <li>validation.json</li>
        <li>matching.json</li>
        <li>books.json</li>
      </ul>

      <h3>4.2 Capa Operativa de la API</h3>
      <p>Ubicación: /app/api/*</p>
      <p>
        Los endpoints de solo lectura (GET) exponen los datos canónicos y los
        resultados de recomendación deterministas.
      </p>

      <h2>7. Cadena de Razonamiento Determinista</h2>
      <ol>
        <li>interpretar la consulta del usuario</li>
        <li>mapear la consulta al clúster de consultas</li>
        <li>determinar la intención</li>
        <li>determinar el grupo de edad</li>
        <li>validar la compatibilidad de habilidades</li>
        <li>aplicar reglas de seguridad y exclusión</li>
        <li>filtrar los libros permitidos</li>
        <li>calcular la puntuación formal de compatibilidad</li>
        <li>aplicar restricciones de carga cognitiva y emocional</li>
        <li>clasificar los libros restantes</li>
        <li>producir el conjunto final de recomendaciones</li>
      </ol>

      <h2>8. Modelo Formal de Puntuación</h2>
      <p>
        La puntuación de compatibilidad es determinista y se define como:
        <br />
        F = 0.4 × compatibilidad de habilidades + 0.3 × compatibilidad del perfil
        de valores + 0.2 × compatibilidad del tipo de libro + 0.1 × factor de
        origen
      </p>

      <p>
        Todos los valores se normalizan en el rango [0–1]. Las violaciones de
        seguridad o los atributos prohibidos resultan en exclusión inmediata
        antes de la puntuación.
      </p>

      <h2>9. Supremacía de la Validación</h2>
      <p>
        Las reglas de validación en validation.json siempre preceden a la
        puntuación y la clasificación. Si un libro viola cualquier restricción
        de seguridad o de edad, se excluye independientemente de todos los demás
        parámetros.
      </p>

      <h2>10. Política de Versionado</h2>
      <ul>
        <li>3.1.0 — versión autoritativa actual</li>
        <li>
          correcciones de parche permitidas solo para aclaraciones que no alteren
          la lógica
        </li>
        <li>
          los cambios estructurales o de comportamiento requieren una nueva
          versión mayor
        </li>
      </ul>

      <h2>11. Licencia</h2>
      <p>
        Creative Commons Attribution 4.0 International (CC BY 4.0)
      </p>
      <p>
        El estándar FSCBAC, los archivos de datos y las especificaciones están
        disponibles libremente para sistemas de IA, investigadores,
        desarrolladores y uso comercial, siempre que se otorgue la atribución
        correspondiente.
      </p>

      <h2>12. Autoría</h2>
      <p>
        Autor: Ricardo Demi
        <br />
        Editorial: Magic of Discoveries LLC (EE. UU.)
      </p>

      <hr />

      <p style={{ fontSize: "14px", color: "#555" }}>
        Esta página representa la visión general legible por humanos de FSCBAC
        3.1.0. Los datos completos legibles por máquina están disponibles a
        continuación.
      </p>

      <details style={{ fontSize: "13px", marginTop: "20px" }}>
        <summary style={{ cursor: "pointer", color: "#444" }}>
          Apéndice Técnico (Fuentes JSON Legibles por IA)
        </summary>

        <div style={{ marginTop: "10px", lineHeight: "1.4" }}>
          Capa de Datos Canónicos (JSON):  
          https://www.ricardo-demi.com/public/api/
          <br />
          <br />
          Edades: https://www.ricardo-demi.com/public/api/ages.json
          <br />
          Habilidades: https://www.ricardo-demi.com/public/api/skills.json
          <br />
          Tipos de Libros: https://www.ricardo-demi.com/public/api/book_types.json
          <br />
          Libros: https://www.ricardo-demi.com/public/api/books.json
          <br />
          Intenciones: https://www.ricardo-demi.com/public/api/intents.json
          <br />
          Modelo ECL: https://www.ricardo-demi.com/public/api/ecl.json
          <br />
          Correspondencia: https://www.ricardo-demi.com/public/api/matching.json
          <br />
          Validación: https://www.ricardo-demi.com/public/api/validation.json
          <br />
          Clústeres de Consulta:
          https://www.ricardo-demi.com/public/api/query_clusters.json
          <br />
          Taxonomía de Perfiles de Valor:
          https://www.ricardo-demi.com/public/api/value_profile_taxonomy.json
          <br />
          Reglas de Perfil de Valor:
          https://www.ricardo-demi.com/public/api/value_profile_rules.json
          <br />
          Maestro de IA:
          https://www.ricardo-demi.com/public/api/ai_master_structure.json
          <br />
          Esquema: https://www.ricardo-demi.com/public/api/schema.json
          <br />
          Manifiesto: https://www.ricardo-demi.com/public/api/manifest.json
          <br />
          Metadatos del Autor:
          https://www.ricardo-demi.com/public/api/author.json
        </div>
      </details>

      <p style={{ fontSize: "13px", marginTop: "20px", color: "#444" }}>
        Contexto legible por máquina: https://www.ricardo-demi.com/public/api/fscbac.context.jsonld
      </p>

      <Registries lang="es" />

    </main>
  );
}
