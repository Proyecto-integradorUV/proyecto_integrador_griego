import "./Literatura.css";
import React from "react";
import literaturaTitle from "../style/titulos/literatura.png"

const Literatura = () => {
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
      <div class="temaLiteratura"><img src={literaturaTitle} alt="Imagen"/></div>
      <div class="introduccionLiteratura">La literatura griega es una de las tradiciones literarias más influyentes y duraderas en la historia. Se desarrolló en la antigua Grecia, desde el siglo VIII a.C. hasta la época helenística, y ha dejado una huella profunda en la cultura occidental. La literatura griega abarca una amplia gama de géneros y temas, desde la poesía épica y la tragedia hasta la filosofía y la historia</div>
    </div>
  );
};

export default Literatura;