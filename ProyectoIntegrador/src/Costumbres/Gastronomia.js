import "./Gastronomia.css";
import React from "react";
import gastronomiaTitle from "../style/titulos/gastronomia.png"

const Gastronomia = () => {
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
      <div class="temaGastro"><img src={gastronomiaTitle} alt="Imagen"/></div>
      <div class="introduccionGastro">La gastronomía de Grecia tiene una rica historia que se remonta a miles de años atrás y ha influido en muchas otras cocinas alrededor del mundo. La cocina griega es conocida por su sabor fresco, ingredientes saludables y técnicas culinarias simples pero sabrosas</div>
    </div>
  );
};

export default Gastronomia;