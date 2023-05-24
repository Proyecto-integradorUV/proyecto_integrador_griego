import "./Deporte.css";
import React from "react";
import deporteTitle from "../style/titulos/deporte.png"

const Deporte = () => {
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
      <div class="temaDepor"><img src={deporteTitle} alt="Imagen" /></div>
      <div class="introduccionDepor">El deporte en la antigua Grecia era una parte integral de la vida y la cultura griega. Los griegos valoraban el cuerpo atlético y consideraban el deporte como una forma de cultivar la belleza, la virtud y la excelencia. Los juegos y competiciones deportivas eran celebrados en todo el territorio griego y eran considerados eventos de gran importancia social y cultural</div>
    </div>
  );
};

export default Deporte;