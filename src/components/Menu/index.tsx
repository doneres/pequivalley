import { NavLink } from "react-router";
import { Home, Info, Briefcase, Building2, LogIn, Plus } from "lucide-react";

function PequiIcon({ size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Corpo principal do pequi (fruta arredondada, levemente oval) */}
      <ellipse cx="50" cy="55" rx="30" ry="28" fill="#f5c842" />

      {/* Sombra interna para dar volume */}
      <ellipse cx="50" cy="58" rx="22" ry="20" fill="#e8a820" opacity="0.5" />

      {/* Highlight */}
      <ellipse cx="42" cy="44" rx="8" ry="6" fill="#fff" opacity="0.25" />

      {/* Espinhos no topo — característicos do pequi */}
      <line
        x1="50"
        y1="27"
        x2="50"
        y2="14"
        stroke="#5a3e10"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="27"
        x2="60"
        y2="12"
        stroke="#5a3e10"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="27"
        x2="40"
        y2="12"
        stroke="#5a3e10"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="27"
        x2="67"
        y2="18"
        stroke="#5a3e10"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="27"
        x2="33"
        y2="18"
        stroke="#5a3e10"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="27"
        x2="72"
        y2="26"
        stroke="#5a3e10"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="27"
        x2="28"
        y2="26"
        stroke="#5a3e10"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Caule */}
      <line
        x1="50"
        y1="27"
        x2="50"
        y2="32"
        stroke="#7a5c1e"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Caroço interno visível (parte amarela mais escura ao centro) */}
      <ellipse cx="50" cy="58" rx="10" ry="9" fill="#c47d0e" opacity="0.6" />
    </svg>
  );
}

export default function Menu() {
  return (
    <aside
      className="col-2 bg-white border-end"
      style={{ minHeight: "100vh", position: "sticky", top: 0 }}
    >
      <nav className="navbar navbar-expand-lg navbar-light flex-column">
        <div className="w-100 px-3 py-4 border-bottom">
          <NavLink
            style={{ color: "#f5a623", fontWeight: "700", fontSize: "1.1rem" }}
            className="navbar-brand d-flex align-items-center gap-2"
            to="/"
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "#fff8e1",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid #f5a623",
              }}
            >
              <PequiIcon size={32} />
            </div>
            Pequi Valley
          </NavLink>
        </div>

        <ul className="navbar-nav w-100 flex-column mt-3">
          <li className="nav-item w-100">
            <NavLink
              className={({ isActive }) =>
                `nav-link px-3 py-2 d-flex align-items-center gap-2 ${isActive ? "bg-warning bg-opacity-10 border-start border-warning border-4" : ""}`
              }
              to="/"
            >
              <Home size={18} /> Home
            </NavLink>
          </li>
          <li className="nav-item w-100">
            <NavLink
              className={({ isActive }) =>
                `nav-link px-3 py-2 d-flex align-items-center gap-2 ${isActive ? "bg-warning bg-opacity-10 border-start border-warning border-4" : ""}`
              }
              to="/sobre"
            >
              <Info size={18} /> Sobre
            </NavLink>
          </li>
          <li className="nav-item w-100">
            <NavLink
              className={({ isActive }) =>
                `nav-link px-3 py-2 d-flex align-items-center gap-2 ${isActive ? "bg-warning bg-opacity-10 border-start border-warning border-4" : ""}`
              }
              to="/oportunidade"
            >
              <Briefcase size={18} /> Vagas
            </NavLink>
          </li>
          <li className="nav-item w-100">
            <NavLink
              className={({ isActive }) =>
                `nav-link px-3 py-2 d-flex align-items-center gap-2 ${isActive ? "bg-warning bg-opacity-10 border-start border-warning border-4" : ""}`
              }
              to="/empresas"
            >
              <Building2 size={18} /> Empresas
            </NavLink>
          </li>

          <li className="nav-item w-100 mt-3 px-3">
            <hr />
          </li>

          <li className="nav-item w-100 px-3 py-3 mt-auto">
            <NavLink
              className="btn btn-warning fw-bold w-100 d-flex align-items-center justify-content-center gap-2"
              to="/login"
            >
              <LogIn size={18} /> Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
