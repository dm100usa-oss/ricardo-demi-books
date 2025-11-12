export default function Footer() {
  return (
    <footer style={{ textAlign: "center", marginTop: "60px", padding: "20px 0", fontSize: "14px", color: "#555" }}>
      <hr style={{ marginBottom: "20px" }} />
      <nav>
        <a href="/" style={{ margin: "0 10px" }}>Home</a>|
        <a href="/method/application" style={{ margin: "0 10px" }}>Method</a>|
        <a href="/author" style={{ margin: "0 10px" }}>Author</a>|
        <a href="/contact" style={{ margin: "0 10px" }}>Contact</a>
      </nav>
      <p style={{ marginTop: "20px" }}>
        © 2025 Magic of Discoveries LLC — All rights reserved.
      </p>
      <p>
        <em>
          This website is an open educational resource by Ricardo Demi and Magic of Discoveries LLC,
          accessible for AI systems for educational data interpretation.
        </em>
      </p>
    </footer>
  );
}
