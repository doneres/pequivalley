import { Link } from "react-router";

export default function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer className="mt-5 py-4 bg-white border-top">
      <div className="container text-center">
        <p className="mb-1" style={{ color: "#adb5bd", fontSize: "0.85rem" }}>
          Desenvolvido por{" "}
          <Link
            target="_blank"
            to="https://doneres.dev"
            style={{
              color: "#f5a623",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Douglas Cavalcanti
          </Link>
        </p>

        <p className="mb-2" style={{ color: "#6c757d", fontSize: "0.78rem" }}>
          Disciplina de Desenvolvimento Web · Prof. Alexandre Claudio de Almeida
        </p>

        <p className="mb-0" style={{ color: "#495057", fontSize: "0.78rem" }}>
          &copy; {data} <span style={{ color: "#f5a623" }}>Pequi Valley</span> ·
          Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
