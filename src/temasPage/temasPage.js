import "./StyleTemas.css";
import "../index.css";
import { Link } from "react-router-dom";
import React from "react";
import filoImage from "./images/filosofia.png";
import sitesImage from "./images/sitios.png";
import gastroImage from "./images/gastronomia.png";
import literaturaImage from "./images/literatura.png";
import mitologiaImage from "./images/mitologia.png";
import derechosImage from "./images/derechos.png";
import deporteImage from "./images/deporte.png";
import vestimentaImage from "./images/vestimenta.png";
import arteImage from "./images/arte.png";
import NavbarPrincipal from "../components/navbar2";

const Temas = () => {
  return (
    <div class="contenedor-inicial-principal">
      <NavbarPrincipal />
      <div class="cuerpo">
        <div class="contenedor-temas">
          <div class="contenedor-filosofia">
            <Link to="/Temas/Filosofia" class="btn ">
              <img src={filoImage} alt="Imagen" class="button-image" />
            </Link>
          </div>

          <div class="contenedor-gastronomia">
            <Link to="/Temas/Gastronomia" class="btn ">
              <img src={gastroImage} alt="Imagen" class="button-image" />
            </Link>
          </div>

          <div class="contenedor-sitios">
            <Link to="/Temas/SitiosCaracteristicos" class="btn ">
              <img src={sitesImage} alt="Imagen" class="button-image" />
            </Link>
          </div>

          <div class="contenedor-mitologia">
            <Link to="/Temas/Mitologia" class="btn ">
              <img src={mitologiaImage} alt="Imagen" class="button-image" />
            </Link>
          </div>

          <div class="contenedor-deporte">
            <Link to="/Temas/Deporte" class="btn ">
              <img src={deporteImage} alt="Imagen" class="button-image" />
            </Link>
          </div>

          <div class="contenedor-vestimenta">
            <Link to="/Temas/Vestimenta" class="btn ">
              <img src={vestimentaImage} alt="Imagen" class="button-image" />
            </Link>
          </div>

          <div class="contenedor-literatura">
            <Link to="/Temas/Literatura" class="btn ">
              <img src={literaturaImage} alt="Imagen" class="button-image" />
            </Link>
          </div>

          <div class="contenedor-derechos">
            <Link to="/Temas/Derechos" class="btn ">
              <img src={derechosImage} alt="Imagen" class="button-image" />
            </Link>
          </div>

          <div class="contenedor-arte">
            <Link to="/Temas/Arte" class="btn ">
              <img src={arteImage} alt="Imagen" class="button-image" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temas;
