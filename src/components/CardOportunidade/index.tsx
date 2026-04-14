import { useState } from "react";
import {
  X,
  MapPin,
  DollarSign,
  Briefcase,
  ExternalLink,
  Mail,
  Building2,
  CheckCircle,
} from "lucide-react";

interface Oportunidade {
  titulo: string;
  logoEmpresa: string;
  nomeEmpresa: string;
  sobreEmpresa: string;
  remunacao?: string;
  localizacao: string;
  tipo: "Remoto" | "Presencial" | "Híbrido";
  nivel: "Júnior" | "Pleno" | "Sênior";
  requisitos: string[];
  descricaoCompleta: string[];
  inscricao: { tipo: "link" | "email"; valor: string };
}

const NIVEL_COLOR: Record<string, string> = {
  Júnior:     "var(--clr-junior)",
  Pleno:      "var(--clr-pleno)",
  Sênior:     "var(--clr-senior)",
};

const TIPO_COLOR: Record<string, string> = {
  Remoto:     "var(--clr-remoto)",
  Presencial: "var(--clr-presencial)",
  Híbrido:    "var(--clr-hibrido)",
};

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="opp-badge"
      style={{ color, background: color + "18", border: `1px solid ${color}28` }}
    >
      {label}
    </span>
  );
}

export default function CardOportunidade(props: Oportunidade) {
  const {
    titulo, logoEmpresa, nomeEmpresa, sobreEmpresa,
    remunacao, localizacao, tipo, nivel,
    requisitos, descricaoCompleta, inscricao,
  } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="opp-card">
        <div className="opp-card-header">
          <img src={logoEmpresa} alt={nomeEmpresa} className="opp-card-logo" />
          <div>
            <p className="opp-card-title">{titulo}</p>
            <span className="opp-card-company">{nomeEmpresa}</span>
          </div>
        </div>

        <div className="opp-badges">
          <Badge label={nivel} color={NIVEL_COLOR[nivel]} />
          <Badge label={tipo}  color={TIPO_COLOR[tipo]}  />
        </div>

        <div className="opp-info">
          <div className="opp-info-row">
            <MapPin size={12} color="var(--t3)" />
            <span>{localizacao}</span>
          </div>
          {remunacao && (
            <div className="opp-info-row">
              <DollarSign size={12} color="var(--t3)" />
              <span>{remunacao}</span>
            </div>
          )}
        </div>

        <div className="opp-card-footer">
          <button className="opp-ver-btn" onClick={() => setOpen(true)}>
            Ver vaga
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="modal-backdrop" onClick={() => setOpen(false)} />

          <div className="modal-wrapper">
            <div className="modal-box">
              {/* Header */}
              <div className="modal-head">
                <div className="modal-head-left">
                  <img src={logoEmpresa} alt={nomeEmpresa} className="modal-logo" />
                  <div>
                    <p className="modal-job-title">{titulo}</p>
                    <span className="modal-company">{nomeEmpresa}</span>
                  </div>
                </div>
                <button
                  className="modal-close"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Body */}
              <div className="modal-body">
                <div className="modal-chips">
                  <Badge label={nivel} color={NIVEL_COLOR[nivel]} />
                  <Badge label={tipo}  color={TIPO_COLOR[tipo]}  />
                  <span className="modal-chip">
                    <MapPin size={12} color="var(--t3)" /> {localizacao}
                  </span>
                  {remunacao && (
                    <span className="modal-chip">
                      <DollarSign size={12} color="var(--t3)" /> {remunacao}
                    </span>
                  )}
                </div>

                <div>
                  <p className="modal-section-label">
                    <Briefcase size={12} color="var(--amber)" /> Sobre a vaga
                  </p>
                  {descricaoCompleta.map((desc, i) => (
                    <p key={i} className="modal-text">{desc}</p>
                  ))}
                </div>

                <div>
                  <p className="modal-section-label">
                    <CheckCircle size={12} color="var(--amber)" /> Requisitos
                  </p>
                  <ul className="modal-req-list">
                    {requisitos.map((req, i) => (
                      <li key={i} className="modal-req-item">{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="modal-section-label">
                    <Building2 size={12} color="var(--amber)" /> Sobre a empresa
                  </p>
                  <p className="modal-text">{sobreEmpresa}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="modal-foot">
                <button className="modal-cancel-btn" onClick={() => setOpen(false)}>
                  Fechar
                </button>
                {inscricao.tipo === "link" ? (
                  <a
                    href={inscricao.valor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-apply-btn"
                  >
                    <ExternalLink size={13} /> Candidatar-se
                  </a>
                ) : (
                  <a href={`mailto:${inscricao.valor}`} className="modal-apply-btn">
                    <Mail size={13} /> Enviar currículo
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
