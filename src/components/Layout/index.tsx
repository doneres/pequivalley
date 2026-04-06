import { Outlet } from "react-router";
import Menu from "../Menu";
import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <div className="row g-0">
        <Menu />
        <main className="col-10">
          <Outlet />
          <Footer />
        </main>
      </div>
    </>
  );
}
