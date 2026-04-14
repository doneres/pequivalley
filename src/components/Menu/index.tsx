import { NavLink } from "react-router";
import { Home, Info, Briefcase, LogIn } from "lucide-react";

const links = [
  { to: "/",            end: true,  icon: <Home size={15} />,     label: "Início"  },
  { to: "/sobre",       end: false, icon: <Info size={15} />,     label: "Sobre"   },
  { to: "/oportunidade",end: false, icon: <Briefcase size={15} />,label: "Vagas"   },
];

export default function Menu() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="sidebar-brand">
        <span className="sidebar-brand-name">Pequi Valley</span>
        <span className="sidebar-brand-sub">Goiânia · GO</span>
      </NavLink>

      <ul className="sidebar-nav">
        {links.map(({ to, end, icon, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                "sidebar-nav-link" + (isActive ? " active" : "")
              }
            >
              {icon}
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        <NavLink to="/login" className="sidebar-login-btn">
          <LogIn size={14} />
          Entrar
        </NavLink>
      </div>
    </aside>
  );
}
