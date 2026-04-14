const stats = [
  { value: "200",   prefix: "+", suffix: "",  desc: "empresas cadastradas"          },
  { value: "6.500", prefix: "+", suffix: "",  desc: "profissionais na plataforma"   },
  { value: "1.200", prefix: "+", suffix: "",  desc: "vagas abertas em TI"           },
];

export default function CardHome() {
  return (
    <div className="stats-section">
      {stats.map((s) => (
        <div className="stat-item" key={s.value}>
          <div className="stat-number">
            <em>{s.prefix}</em>{s.value}{s.suffix}
          </div>
          <p className="stat-desc">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
