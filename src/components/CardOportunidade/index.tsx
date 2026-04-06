import { useState } from "react";

interface oportunidade {
  titulo: string;
  logoEmpresa: string;
  remunacao?: string;
  descricaoCompleta: string[];
}

export default function CardOportunidade({
  titulo,
  logoEmpresa,
  remunacao,
  descricaoCompleta,
}: oportunidade) {
  const [cardCompleto, setCardCompleto] = useState(false);

  function handleMostrarCard() {
    setCardCompleto(!cardCompleto);
  }

  return (
    <section className="border">
      <h1>{titulo}</h1>
      <img src={logoEmpresa} alt={titulo} />
      <span>{remunacao}</span>

      {cardCompleto ? (
        <>
          <div>
            {descricaoCompleta.map((desc) => (
              <p>{desc}</p>
            ))}
          </div>
          <button onClick={handleMostrarCard}>Fechar</button>
        </>
      ) : (
        <button onClick={handleMostrarCard}>Visualizar Vaga</button>
      )}
    </section>
  );
}
