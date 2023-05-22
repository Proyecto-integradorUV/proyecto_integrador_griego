import "./Sitios.css";
import React from "react";
import sitiosTitle from "../style/titulos/sitios.png"

const Sitios = () => {
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
      <div class="temaSitios"><img src={sitiosTitle} alt="Imagen"/></div>
      <div class="introduccionSitios">Grecia es un país lleno de historia, cultura y belleza natural, conocido por ser la cuna de la civilización occidental y por albergar algunos de los sitios más emblemáticos del mundo antiguo. Desde antiguos templos hasta impresionantes paisajes, Grecia ofrece una amplia gama de lugares característicos que atraen a millones de visitantes cada año</div>
    </div>
  );
};

export default Sitios;