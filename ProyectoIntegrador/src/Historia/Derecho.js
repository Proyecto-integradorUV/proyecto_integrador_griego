import "./Derecho.css";
import React from "react";
import derechoTitle from "../style/titulos/derechos.png"

const Derecho = () => {
  return (
    <div class="contenedor-inicial">
        <nav className="navbar">
            <ul className="navbarList">
            <li className="navbarItem">
                <a href="/SignIn" className="navbarName">
                Nombre
                </a>
            </li>
            </ul>
        </nav>
        <nav className="navbarSecond">
            <ul className="navbarListSecond">
            <li className="navbarItemSecond">
                <a href="/Temas" className="navbarLinkSecond">
                Mis lecciones
                </a>
            </li>
            <li className="navbarItemSecond">
                <a href="/Temas" className="navbarLinkSecond">
                Temas
                </a>
            </li>
            </ul>
        </nav>
      <div class="temaDerecho"><img src={derechoTitle} alt="Imagen"/></div>
      <div class="introduccionDerecho">En la antigua Grecia, los derechos y la participación política estaban restringidos a los ciudadanos varones. Las mujeres, los esclavos y los extranjeros no tenían los mismos derechos que los ciudadanos. Aunque se desarrollaron conceptos de democracia y gobierno directo, la democracia ateniense era limitada y excluía a gran parte de la población</div>
    </div>
  );
};

export default Derecho;