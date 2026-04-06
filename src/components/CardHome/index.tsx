type Stat = {
  numero: string;
  descricao: string;
};

const stats: Stat[] = [
  { numero: "+200", descricao: "empresas cadastradas no Pequi Valley" },
  { numero: "+6.500", descricao: "profissionais presentes na plataforma" },
  { numero: "+1.200", descricao: "vagas abertas em diferentes segmentos" },
];

export default function CardHome() {
  return (
    <div
      className="container mt-5 p-4 p-md-5 rounded-3 shadow-2"
      style={{ backgroundColor: "#fdecd9" }}
    >
      <div className="row justify-content-center g-4 text-center">
        {stats.map((stat) => (
          <div className="col-12 col-sm-4" key={stat.numero}>
            {/* Número com círculo */}
            <div
              className="d-inline-block px-4 py-2 mb-2 fw-bold"
              style={{
                color: "#f5a623",
                fontSize: "2.2rem",
                border: "3px solid #f5a623",
                borderRadius: "50%",
                lineHeight: 1.2,
              }}
            >
              {stat.numero}
            </div>
            <p
              className="mb-0"
              style={{ color: "#6b4c2a", fontSize: "0.95rem" }}
            >
              {stat.descricao}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
