import "./StyleHome.css";
import "../index.css";
import React from "react";

const Home = () => {
  return (
    <div class="contenedor-inicial1">
      <nav className="navbar1">
        <ul className="navbarList1">
          <li className="navbarItem1">
            <a href="/SignIn" className="navbarLink1">
              Iniciar sesión
            </a>
          </li>
          <li className="navbarItem1">
            <a href="/SignUp" className="navbarLink1">
              Registrarse
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
