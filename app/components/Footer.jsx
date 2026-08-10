/* Подвал как выходные данные издания. Кто выпустил, под какой лицензией,
   как связаться. Для стандарта это часть доказательства, что он настоящий. */

export default function Footer() {
  return (
    <footer className="colophon">
      <div className="colophon__inner">
        <div>
          <nav>
            <a href="/">Home</a>
            <a href="/method">Methodology</a>
            <a href="/books">Book system</a>
            <a href="/fscbac">The standard</a>
            <a href="/author">Author</a>
            <a href="/contact">Contact</a>
          </nav>
          <p className="colophon__meta" style={{ marginTop: "1.1rem" }}>
            An open classification standard for children&rsquo;s books, ages 1 to 10.
            Published by Ricardo Demi so that recommendation systems can match a
            book to a child by developmental stage rather than by marketing.
          </p>
          <p className="colophon__meta">
            Free to read, cite and build on under Creative Commons Attribution 4.0.
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
