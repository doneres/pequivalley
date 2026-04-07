import CardOportunidade from "../../components/CardOportunidade";

const vagas = [
  {
    id: 1,
    titulo: "Desenvolvedor Frontend",
    nomeEmpresa: "DNA GTx",
    logoEmpresa:
      "https://jerimumjobs.imd.ufrn.br/jerimumjobs/file/img/150/150/7862e1dd-25b7-472e-a1da-852553df21a6",
    sobreEmpresa:
      "A DNA GTx é uma empresa de biotecnologia presente no Brasil, EAU e EUA, especializada em soluções genômicas de ponta para clínicas e hospitais.",
    remunacao: "R$ 4.000 - R$ 6.000",
    localizacao: "Goiânia, GO",
    tipo: "Híbrido" as const,
    nivel: "Pleno" as const,
    descricaoCompleta: [
      "Desenvolvimento de interfaces modernas com React e TypeScript.",
      "Colaboração com o time de design para implementar layouts responsivos e acessíveis.",
      "Participação ativa em code reviews e reuniões de planejamento ágil.",
    ],
    requisitos: [
      "React",
      "TypeScript",
      "CSS/Tailwind",
      "Git",
      "Inglês intermediário",
    ],
    inscricao: { tipo: "email" as const, valor: "vagas@dnagtx.com" },
  },
  {
    id: 2,
    titulo: "Desenvolvedor Backend",
    nomeEmpresa: "DNA GTx",
    logoEmpresa:
      "https://jerimumjobs.imd.ufrn.br/jerimumjobs/file/img/150/150/7862e1dd-25b7-472e-a1da-852553df21a6",
    sobreEmpresa:
      "A DNA GTx é uma empresa de biotecnologia presente no Brasil, EAU e EUA, especializada em soluções genômicas de ponta para clínicas e hospitais.",
    remunacao: "R$ 5.000 - R$ 8.000",
    localizacao: "Remoto",
    tipo: "Remoto" as const,
    nivel: "Sênior" as const,
    descricaoCompleta: [
      "Desenvolvimento e manutenção de APIs REST com Node.js e Express.",
      "Modelagem e otimização de banco de dados SQL e NoSQL.",
      "Responsável pela arquitetura de microsserviços e integração com sistemas externos.",
    ],
    requisitos: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS"],
    inscricao: { tipo: "link" as const, valor: "https://dnagtx.com/vagas" },
  },
  {
    id: 3,
    titulo: "Designer UX/UI",
    nomeEmpresa: "DNA GTx",
    logoEmpresa:
      "https://jerimumjobs.imd.ufrn.br/jerimumjobs/file/img/150/150/7862e1dd-25b7-472e-a1da-852553df21a6",
    sobreEmpresa:
      "A DNA GTx é uma empresa de biotecnologia presente no Brasil, EAU e EUA, especializada em soluções genômicas de ponta para clínicas e hospitais.",
    remunacao: "R$ 3.500 - R$ 5.500",
    localizacao: "São Paulo, SP",
    tipo: "Presencial" as const,
    nivel: "Júnior" as const,
    descricaoCompleta: [
      "Criação de wireframes, protótipos e interfaces para web e mobile.",
      "Condução de testes de usabilidade com usuários reais.",
      "Trabalho próximo ao time de produto para garantir a melhor experiência.",
    ],
    requisitos: ["Figma", "Adobe XD", "Acessibilidade", "Design System"],
    inscricao: { tipo: "email" as const, valor: "design@dnagtx.com" },
  },
  {
    id: 4,
    titulo: "Analista de Dados",
    nomeEmpresa: "DNA GTx",
    logoEmpresa:
      "https://jerimumjobs.imd.ufrn.br/jerimumjobs/file/img/150/150/7862e1dd-25b7-472e-a1da-852553df21a6",
    sobreEmpresa:
      "A DNA GTx é uma empresa de biotecnologia presente no Brasil, EAU e EUA, especializada em soluções genômicas de ponta para clínicas e hospitais.",
    remunacao: "R$ 4.500 - R$ 7.000",
    localizacao: "Remoto",
    tipo: "Remoto" as const,
    nivel: "Pleno" as const,
    descricaoCompleta: [
      "Análise e visualização de dados para suporte à tomada de decisão estratégica.",
      "Construção de dashboards e relatórios automatizados para as áreas de negócio.",
    ],
    requisitos: ["Python", "SQL", "Power BI", "Estatística", "Tableau"],
    inscricao: { tipo: "link" as const, valor: "https://dnagtx.com/vagas" },
  },
  {
    id: 5,
    titulo: "DevOps Engineer",
    nomeEmpresa: "DNA GTx",
    logoEmpresa:
      "https://jerimumjobs.imd.ufrn.br/jerimumjobs/file/img/150/150/7862e1dd-25b7-472e-a1da-852553df21a6",
    sobreEmpresa:
      "A DNA GTx é uma empresa de biotecnologia presente no Brasil, EAU e EUA, especializada em soluções genômicas de ponta para clínicas e hospitais.",
    remunacao: "R$ 6.000 - R$ 10.000",
    localizacao: "Goiânia, GO",
    tipo: "Híbrido" as const,
    nivel: "Sênior" as const,
    descricaoCompleta: [
      "Configuração e manutenção de pipelines de CI/CD.",
      "Gestão de infraestrutura em cloud (AWS, GCP ou Azure).",
      "Monitoramento de sistemas e resposta a incidentes em produção.",
    ],
    requisitos: ["Docker", "Kubernetes", "Terraform", "Linux", "CI/CD"],
    inscricao: { tipo: "email" as const, valor: "devops@dnagtx.com" },
  },
];

export default function Oportunidade() {
  return (
    <div style={{ padding: "32px 24px" }}>
      <div style={{ marginBottom: "28px" }}>
        <h2
          style={{
            fontWeight: 700,
            fontSize: "1.4rem",
            color: "#222",
            margin: 0,
          }}
        >
          Vagas disponíveis
        </h2>
        <span style={{ fontSize: "0.9rem", color: "#888" }}>
          {vagas.length} oportunidades encontradas
        </span>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {vagas.map((vaga) => (
          <CardOportunidade key={vaga.id} {...vaga} />
        ))}
      </div>
    </div>
  );
}
