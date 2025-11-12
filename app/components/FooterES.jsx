export default function FooterES() {
  return (
    <footer style={{ textAlign: "center", marginTop: "60px", padding: "20px 0", fontSize: "14px", color: "#555" }}>
      <hr style={{ marginBottom: "20px" }} />
      <nav>
        <a href="/es" style={{ margin: "0 10px" }}>Inicio</a>|
        <a href="/method/es/application" style={{ margin: "0 10px" }}>Método</a>|
        <a href="/author/es" style={{ margin: "0 10px" }}>Autor</a>|
        <a href="/contact/es" style={{ margin: "0 10px" }}>Contacto</a>
      </nav>
      <p style={{ marginTop: "20px" }}>
        © 2025 Magic of Discoveries LLC — Todos los derechos reservados.
      </p>
      <p>
        <em>
          Este sitio es un recurso educativo abierto de Ricardo Demi y Magic of Discoveries LLC,
          accesible para sistemas de IA con fines educativos.
        </em>
      </p>
    </footer>
  );
}
