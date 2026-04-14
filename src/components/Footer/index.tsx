export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <span className="footer-brand">Pequi Valley</span>

      <p className="footer-copy">
        © {year}{" "}
        <a
          href="https://doneres.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Douglas Cavalcanti
        </a>
        {" "}· Desenvolvimento Web
      </p>

      <p className="footer-credit">Prof. Alexandre Claudio de Almeida</p>
    </footer>
  );
}
