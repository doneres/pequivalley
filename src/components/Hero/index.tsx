import { useState } from "react";
import { useNavigate } from "react-router";

export default function Hero() {
  const [valorBusca, setValorBusca] = useState("");
  const navigate = useNavigate();

  function handlePesquisar() {
    console.log(valorBusca);
    navigate(`/oportunidade/${valorBusca}`);
  }

  return (
    <section className="container">
      <div className="p-4 bg-white rounded-2 shadow-sm">
        <section className="d-flex flex-column mb-4">
          <h1 className="text-center text-warning fw-bold fs-1">Vagas</h1>
          <p className="text-center fs-3 mb-0">
            A sua oportunidade pode estar a um Pequi de distância
          </p>
        </section>
        <section>
          <form>
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="input-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite o nome da vaga, cargo ou empresa"
                    value={valorBusca}
                    onChange={(e) => setValorBusca(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={handlePesquisar}
                  >
                    Pesquisar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
}
