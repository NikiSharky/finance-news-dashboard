export default function Footer({ brand, note }) {
  return (
    <footer>
      <div className="container footer-row">
        <a href="#top" className="brand">
          {brand}
        </a>
        <span className="footer-note">{note}</span>
      </div>
    </footer>
  );
}
