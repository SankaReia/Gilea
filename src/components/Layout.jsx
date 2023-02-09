import { Link, Outlet } from "react-router-dom";
import gilea from "../img/gilea.png";
import "../styles/Layout.scss";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <header>
          <div className="container header">
            <div className="left">
              <Link to="/">
                <img src={gilea} alt="Гилея" width="140px" height="40px" />
              </Link>
              <span>Живи в гармонии с природой</span>
            </div>
            <div className="right">
              <span>gilea-kazan@mail.ru</span>
              <Navbar />
            </div>
          </div>
        </header>
        <hr />

        <main className="container">
          <Outlet />
        </main>
      </div>

      <footer>
        <div className="container">
          <span>Гилея</span>
          <br />
          <span>gilea-kazan@mail.ru</span>
          <br />
          <span>{`© ${new Date().getFullYear()}, gilea.ru`}</span>
        </div>
      </footer>
    </>
  );
};

export default Layout;
