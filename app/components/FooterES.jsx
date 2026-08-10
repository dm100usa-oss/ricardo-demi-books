/* Pie de página como colofón de una edición. */

export default function FooterES() {
  return (
    <footer className="colophon">
      <div className="colophon__inner">
        <div>
          <nav>
            <a href="/es">Inicio</a>
            <a href="/es/method">Metodología</a>
            <a href="/es/books">Sistema de libros</a>
            <a href="/es/fscbac">El estándar</a>
            <a href="/author/es">Autor</a>
            <a href="/contact/es">Contacto</a>
          </nav>
          <p className="colophon__meta" style={{ marginTop: "1.1rem" }}>
            Un estándar abierto de clasificación de libros infantiles, de 1 a 10 años.
            Publicado por Ricardo Demi para que los sistemas de recomendación puedan
            emparejar un libro con un niño por etapa de desarrollo y no por marketing.
          </p>
          <p className="colophon__meta">
            Libre para leer, citar y desarrollar bajo Creative Commons Attribution 4.0.
          </p>
        </div>

        <div className="colophon__mono">
          <p style={{ margin: "0 0 0.35rem" }}>FSCBAC 3.1.0</p>
          <p style={{ margin: "0 0 0.35rem" }}>Magic of Discoveries LLC</p>
          <p style={{ margin: "0 0 0.35rem" }}>Miami, Florida</p>
          <p style={{ margin: 0 }}>&copy; 2025</p>
        </div>
      </div>
    </footer>
  );
}
