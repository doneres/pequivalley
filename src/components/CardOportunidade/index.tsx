import { useState } from "react";
import {
  DollarSign,
  X,
  Briefcase,
  MapPin,
  ExternalLink,
  Mail,
  Building2,
  CheckCircle,
} from "lucide-react";
import styles from "./CardOportunidade.module.css";

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
  inscricao: {
    tipo: "link" | "email";
    valor: string;
  };
}

const NIVEL_COR: Record<string, string> = {
  Júnior: "#22c55e",
  Pleno: "#3b82f6",
  Sênior: "#f97316",
};

const TIPO_COR: Record<string, string> = {
  Remoto: "#8b5cf6",
  Presencial: "#ec4899",
  Híbrido: "#14b8a6",
};

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className={styles.badge}
      style={{
        color,
        background: color + "18",
        border: `1px solid ${color}33`,
      }}
    >
      {label}
    </span>
  );
}

export default function CardOportunidade({
  titulo,
  logoEmpresa,
  nomeEmpresa,
  sobreEmpresa,
  remunacao,
  localizacao,
  tipo,
  nivel,
  requisitos,
  descricaoCompleta,
  inscricao,
}: Oportunidade) {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      {/* Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img
            src={logoEmpresa}
            alt={nomeEmpresa}
            className={styles.cardLogo}
          />
          <div className={styles.cardTitleContainer}>
            <span className={styles.cardTitle}>{titulo}</span>
            <span className={styles.cardCompany}>{nomeEmpresa}</span>
          </div>
        </div>

        <div className={styles.badgesContainer}>
          <Badge label={nivel} color={NIVEL_COR[nivel]} />
          <Badge label={tipo} color={TIPO_COR[tipo]} />
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.infoRow}>
            <MapPin size={13} color="#aaa" />
            <span className={styles.infoText}>{localizacao}</span>
          </div>
          {remunacao && (
            <div className={styles.infoRow}>
              <DollarSign size={13} color="#aaa" />
              <span className={styles.infoText}>{remunacao}</span>
            </div>
          )}
        </div>

        <div className={styles.cardFooter}>
          <button onClick={() => setAberto(true)} className={styles.verVagaBtn}>
            Ver vaga
          </button>
        </div>
      </div>

      {/* Modal */}
      {aberto && (
        <>
          <div className={styles.backdrop} onClick={() => setAberto(false)} />

          <div className={styles.modalWrapper} tabIndex={-1}>
            <div className={styles.modalDialog}>
              <div className={styles.modalContent}>
                {/* Header */}
                <div className={styles.modalHeader}>
                  <div className={styles.modalHeaderContainer}>
                    <img
                      src={logoEmpresa}
                      alt={nomeEmpresa}
                      className={styles.modalLogo}
                    />
                    <div>
                      <h5 className={styles.modalTitle}>{titulo}</h5>
                      <span className={styles.modalCompany}>{nomeEmpresa}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAberto(false)}
                    className={styles.closeBtn}
                    aria-label="Fechar"
                  >
                    <X size={20} color="#888" />
                  </button>
                </div>

                {/* Body */}
                <div className={styles.modalBody}>
                  <div className={styles.badgesInfo}>
                    <Badge label={nivel} color={NIVEL_COR[nivel]} />
                    <Badge label={tipo} color={TIPO_COR[tipo]} />
                    <span className={styles.infoSpan}>
                      <MapPin size={13} color="#aaa" /> {localizacao}
                    </span>
                    {remunacao && (
                      <span className={styles.infoSpan}>
                        <DollarSign size={13} color="#aaa" /> {remunacao}
                      </span>
                    )}
                  </div>

                  <div>
                    <div className={styles.sectionHeader}>
                      <Briefcase size={15} color="#ffc107" />
                      <span className={styles.sectionTitle}>Sobre a vaga</span>
                    </div>
                    {descricaoCompleta.map((desc, i) => (
                      <p key={i} className={styles.descriptionText}>
                        {desc}
                      </p>
                    ))}
                  </div>

                  <div>
                    <div className={styles.sectionHeader}>
                      <CheckCircle size={15} color="#ffc107" />
                      <span className={styles.sectionTitle}>Requisitos</span>
                    </div>
                    <ul className={styles.requirementsList}>
                      {requisitos.map((req, i) => (
                        <li key={i} className={styles.requirementItem}>
                          <span className={styles.requirementDot} />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className={styles.sectionHeader}>
                      <Building2 size={15} color="#ffc107" />
                      <span className={styles.sectionTitle}>
                        Sobre a empresa
                      </span>
                    </div>
                    <p className={styles.aboutCompanyText}>{sobreEmpresa}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className={styles.modalFooter}>
                  <button
                    onClick={() => setAberto(false)}
                    className={styles.closeModalBtn}
                  >
                    Fechar
                  </button>

                  {inscricao.tipo === "link" ? (
                    <a
                      href={inscricao.valor}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.applicationLink}
                    >
                      <ExternalLink size={14} /> Candidatar-se
                    </a>
                  ) : (
                    <a
                      href={`mailto:${inscricao.valor}`}
                      className={styles.applicationLink}
                    >
                      <Mail size={14} /> Enviar currículo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
