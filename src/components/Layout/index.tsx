import { Outlet } from "react-router";
import Menu from "../Menu";
import Footer from "../Footer";

export default function Layout() {
  return (
    <div className="app-layout">
      <Menu />
      <main className="app-main">
        <div className="app-content">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
