import "./Derecho.css";
import React from "react";
import derechoTitle from "../style/titulos/derechos.png"

const Derecho = () => {
  return (
    <div class="contenedor-inicial">
      <nav className="navbarPrincipal">
        <ul className="navbarList2Principal">
          <li className="navbarItemPrincipal">
            <a className="navbarLink2Principal">
              Usuario
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href="/Home" className="navbarLink2Principal">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navbar2Principal">
        <ul className="navbarListPrincipal">
          <li className="navbarItemPrincipal">
            <a className="navbarLinkPrincipal">
              Lecciones
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href="/Temas" className="navbarLink3Temas">
              Temas
            </a>
          </li>
        </ul>
      </nav>
      <div class="temaDerecho"><img src={derechoTitle} alt="Imagen" /></div>
      <div class="introduccionDerecho">En la antigua Grecia, los derechos y la participación política estaban restringidos a los ciudadanos varones. Las mujeres, los esclavos y los extranjeros no tenían los mismos derechos que los ciudadanos. Aunque se desarrollaron conceptos de democracia y gobierno directo, la democracia ateniense era limitada y excluía a gran parte de la población</div>
    </div>
  );
};

export default Derecho;