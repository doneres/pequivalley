import { useState } from "react";
import { useNavigate } from "react-router";
import { Search } from "lucide-react";

export default function Hero() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    navigate(`/oportunidade${query ? `/${query}` : ""}`);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <section className="hero-section">
      <p className="hero-label">Plataforma de vagas em TI</p>

      <h1 className="hero-title">
        Sua carreira começa<br />
        <em>no Cerrado.</em>
      </h1>

      <p className="hero-subtitle">
        Conectamos talentos de Goiás às melhores oportunidades em tecnologia.
        A um Pequi de distância do seu próximo emprego.
      </p>

      <div className="hero-search">
        <input
          type="text"
          placeholder="Cargo, empresa ou palavra-chave..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="hero-search-btn" onClick={handleSearch}>
          <Search size={14} />
          Buscar
        </button>
      </div>
    </section>
  );
}
