import "./Sitios.css";
import React from "react";
import sitiosTitle from "../style/titulos/sitios.png"

const Sitios = () => {
  return (
    <div class="contenedor-inicialHistoria">
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
      <div class="temaSitios"><img src={sitiosTitle} alt="Imagen" /></div>
      <div class="introduccionSitios">Grecia es un país lleno de historia, cultura y belleza natural, conocido por ser la cuna de la civilización occidental y por albergar algunos de los sitios más emblemáticos del mundo antiguo. Desde antiguos templos hasta impresionantes paisajes, Grecia ofrece una amplia gama de lugares característicos que atraen a millones de visitantes cada año</div>
    </div>
  );
};

export default Sitios;