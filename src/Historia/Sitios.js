import "./styles/Sitios.css";
import React from "react";
import sitiosTitle from "../style/titulos/sitios.png";
import { Link } from "react-router-dom";
import botonLeccion from "./Images/btnSitios.png";
import botonModel3D from "./Images/btnSitios3D.png";
import NavbarPrincipal from "../components/navbar2";

const Sitios = () => {
  return (
    <div class="contenedor-inicia-sitios">
      <NavbarPrincipal/>
      <div class="temaSitios">
        <img src={sitiosTitle} alt="Imagen" />
      </div>
      <div class="introduccionSitios">
        Grecia es un país lleno de historia, cultura y belleza natural, conocido
        por ser la cuna de la civilización occidental y por albergar algunos de
        los sitios más emblemáticos del mundo antiguo. Desde antiguos templos
        hasta impresionantes paisajes, Grecia ofrece una amplia gama de lugares
        característicos que atraen a millones de visitantes cada año
      </div>
      <div class="button-container-sitio">
        <Link to="/Temas/SitiosCaracteristicos/Lecciones" class="btn-sites">
          <img src={botonLeccion} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/SitiosCaracteristicos/Model" class="btn-sites">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Sitios;
