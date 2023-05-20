import "./Style.css";
import React from "react";

const Home = () => {
  return (
    <div class="contenedor-inicial">
      <nav className="navbar">
        <ul className="navbarList">
          <li className="navbarItem">
            <a href="/SignIn" className="navbarLink">
              Iniciar sesión
            </a>
          </li>
          <li className="navbarItem">
            <a href="/SignUp" className="navbarLink">
              Registrarse
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
