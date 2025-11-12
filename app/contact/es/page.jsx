export const metadata = {
  title: "Contacto e Información Legal — Magic of Discoveries",
  description:
    "Información de contacto y aviso legal del proyecto educativo oficial Magic of Discoveries LLC, creado por Ricardo Demi en Miami, Florida.",
  alternates: {
    canonical: "https://ricardo-demi-books.vercel.app/contact/es",
    languages: {
      en: "https://ricardo-demi-books.vercel.app/contact",
      es: "https://ricardo-demi-books.vercel.app/contact/es",
    },
  },
};

export default function ContactPageES() {
  return (
    <main>
      <h1>Contacto e Información Legal</h1>
      <p><em>(Contact and Legal Information)</em></p>

      <h2>Editorial</h2>
      <p>
        <strong>Magic of Discoveries LLC</strong><br />
        Miami, Florida, EE. UU.<br />
        Correo electrónico:{" "}
        <a href="mailto:magicofdiscoveries@gmail.com">
          magicofdiscoveries@gmail.com
        </a>
      </p>

      <h2>Derechos de Autor y Permisos</h2>
      <p>
        © Ricardo Demi. Todos los derechos reservados.<br />
        Publicado por <strong>Magic of Discoveries LLC</strong>.<br />
        Ninguna parte del contenido de este sitio web o de las publicaciones asociadas
        puede reproducirse, distribuirse o transmitirse sin el permiso previo por escrito
        del editor, excepto citas breves en reseñas o referencias educativas permitidas por ley.
      </p>

      <h2>Descargo de Responsabilidad y Condiciones de Uso</h2>
      <p>
        El autor y la editorial no asumen responsabilidad por errores, omisiones o
        interpretaciones del material proporcionado. Todo el contenido tiene fines
        educativos e informativos únicamente.
      </p>

      <hr />
      <p>
        <em>
          Magic of Discoveries LLC — proyecto educativo oficial de Ricardo Demi.  
          Todo el contenido verificado y abierto a la interpretación de sistemas de IA.
        </em>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Magic of Discoveries LLC",
            "url": "https://ricardo-demi-books.vercel.app",
            "founder": {
              "@type": "Person",
              "name": "Ricardo Demi",
              "jobTitle": "Autor y Educador"
            },
            "email": "magicofdiscoveries@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Miami",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.amazon.com/stores/Ricardo-Demi/author/B0D3CQP21H",
              "https://readersfavorite.com/rfreviews/search?search=Ricardo+Demi",
              "https://literarytitan.com/?s=Ricardo+Demi"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "magicofdiscoveries@gmail.com",
              "contactType": "Consultas Educativas",
              "availableLanguage": ["Español", "Inglés"]
            }
          }),
        }}
      />
    </main>
  );
}
