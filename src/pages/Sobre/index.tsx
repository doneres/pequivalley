import { MapPin, Briefcase, Users, Zap } from "lucide-react";

const cards = [
  {
    icon: <MapPin size={17} />,
    title: "Foco no Cerrado",
    desc: "Nascemos em Goiânia para conectar talentos locais a empresas que valorizam o potencial do Centro-Oeste.",
  },
  {
    icon: <Briefcase size={17} />,
    title: "Vagas em TI",
    desc: "Curadoria de oportunidades reais em desenvolvimento, dados, design e infraestrutura.",
  },
  {
    icon: <Users size={17} />,
    title: "Comunidade",
    desc: "Mais de 6.500 profissionais conectados e crescendo juntos no ecossistema de tecnologia goiano.",
  },
  {
    icon: <Zap size={17} />,
    title: "Simples e direto",
    desc: "Sem ruído. Candidatos encontram vagas, empresas encontram pessoas. Rápido e sem burocracia.",
  },
];

const tags = [
  "React", "Node.js", "Python", "Go", "Kotlin",
  "DevOps", "Data Science", "UX/UI", "Goiânia", "Remoto",
];

export default function Sobre() {
  return (
    <div className="sobre-page">
      <p className="sobre-label">Quem somos</p>

      <h1 className="sobre-title">
        Tecnologia com<br />
        <em>sabor de pequi.</em>
      </h1>

      <p className="sobre-lead">
        O <strong>Pequi Valley</strong> é uma plataforma de vagas em TI nascida no
        coração de Goiás. Acreditamos que o Cerrado tem tudo para se tornar um polo
        de inovação tecnológica — e estamos aqui para construir isso, uma conexão
        de cada vez.
      </p>

      <div className="sobre-cards">
        {cards.map((c) => (
          <div className="sobre-card" key={c.title}>
            <div className="sobre-card-icon">{c.icon}</div>
            <p className="sobre-card-title">{c.title}</p>
            <p className="sobre-card-desc">{c.desc}</p>
          </div>
        ))}
      </div>

      <p className="sobre-section-label">Tecnologias em destaque</p>
      <div>
        {tags.map((tag) => (
          <span className="sobre-tag" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
