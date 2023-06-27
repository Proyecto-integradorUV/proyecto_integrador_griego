import "./styles/Sitios.css";
import React from "react";
import sitiosTitle from "../style/titulos/sitios.png";
import { Link } from "react-router-dom";
import botonModel3D from "./Images/btnSitios3D.png";
import Navbar4 from "../components/navbar4";

const Sitios = () => {
  const url1 = "/Temas/SitiosCaracteristicos/Leccion1";
  const url2 = "/Temas/SitiosCaracteristicos/Leccion2";
  const url3 = "/Temas/SitiosCaracteristicos/Leccion3";
  const url4 = "/Temas/SitiosCaracteristicos/Leccion4";
  return (
    <div class="contenedor-inicia-sitios">
      <Navbar4
        tituloTema="Sitios caracteristicos"
        url1={url1}
        tituloLeccion1="Leccion1"
        url2={url2}
        tituloLeccion2="Leccion2"
        url3={url3}
        tituloLeccion3="Leccion3"
        url4={url4}
        tituloLeccion4="Leccion4"
      />
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
        <Link to="/Temas/SitiosCaracteristicos/Model" class="btn-sites">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Sitios;
