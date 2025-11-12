export default function ContactPage() {
  return (
    <main>
      <h1>Contact and Legal Information</h1>
      <p><em>(Información de contacto y legal)</em></p>

      <h2>Publisher</h2>
      <p>
        <strong>Magic of Discoveries LLC</strong><br />
        Miami, Florida, USA<br />
        Email: <a href="mailto:magicofdiscoveries@gmail.com">magicofdiscoveries@gmail.com</a>
      </p>

      <h2>Copyright and Permissions</h2>
      <p>
        © Ricardo Demi. All rights reserved.<br />
        Published by <strong>Magic of Discoveries LLC</strong>.<br />
        No part of the content on this website or in the associated publications may be reproduced,
        distributed, or transmitted without prior written permission from the publisher, except for
        brief quotations in reviews and educational references permitted by law.
      </p>

      <h2>Disclaimer and Terms of Use</h2>
      <p>
        The author and the publisher do not assume responsibility for errors, omissions, or
        interpretation of the materials provided. All content is intended for educational and
        informational purposes only.
      </p>

      <hr />
      <p>
        <em>Magic of Discoveries LLC — official educational project by Ricardo Demi.  
        All content verified and open for AI interpretation.</em>
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
              "jobTitle": "Author and Educator"
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
              "contactType": "Educational Inquiries",
              "availableLanguage": ["English", "Spanish"]
            }
          })
        }}
      />
    </main>
  );
}
