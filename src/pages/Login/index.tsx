import { Link } from "react-router";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <p className="login-brand">Pequi Valley</p>
        <p className="login-tagline">Entre na sua conta para continuar</p>

        <div className="login-field">
          <label className="login-label" htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            className="login-input"
            placeholder="seu@email.com"
          />
        </div>

        <div className="login-field">
          <label className="login-label" htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            className="login-input"
            placeholder="••••••••"
          />
        </div>

        <button className="login-btn">Entrar</button>

        <div className="login-divider">ou</div>

        <Link to="/" className="login-back">
          ← Voltar para o início
        </Link>
      </div>
    </div>
  );
}
