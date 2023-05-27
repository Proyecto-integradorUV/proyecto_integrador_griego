import "./Gastronomia.css";
import React from "react";
import gastronomiaTitle from "../style/titulos/gastronomia.png"

const Gastronomia = () => {
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
      <div class="temaGastro"><img src={gastronomiaTitle} alt="Imagen" /></div>
      <div class="introduccionGastro">La gastronomía de Grecia tiene una rica historia que se remonta a miles de años atrás y ha influido en muchas otras cocinas alrededor del mundo. La cocina griega es conocida por su sabor fresco, ingredientes saludables y técnicas culinarias simples pero sabrosas</div>
    </div>
  );
};

export default Gastronomia;