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
    <div className="contenedor-inicial-principal">
      <NavbarPrincipal />
      <div className="cuerpo">
        <div className="contenedor-temas">
          <div className="contenedor-filosofia">
            <Link to="/Temas/Filosofia" className="btn ">
              <img src={filoImage} alt="Imagen" className="button-image" />
            </Link>
          </div>

          <div className="contenedor-gastronomia">
            <Link to="/Temas/Gastronomia" className="btn ">
              <img src={gastroImage} alt="Imagen" className="button-image" />
            </Link>
          </div>

          <div className="contenedor-sitios">
            <Link to="/Temas/SitiosCaracteristicos" className="btn ">
              <img src={sitesImage} alt="Imagen" className="button-image" />
            </Link>
          </div>

          <div className="contenedor-mitologia">
            <Link to="/Temas/Mitologia" className="btn ">
              <img src={mitologiaImage} alt="Imagen" className="button-image" />
            </Link>
          </div>

          <div className="contenedor-deporte">
            <Link to="/Temas/Deporte" className="btn ">
              <img src={deporteImage} alt="Imagen" className="button-image" />
            </Link>
          </div>

          <div className="contenedor-vestimenta">
            <Link to="/Temas/Vestimenta" className="btn ">
              <img src={vestimentaImage} alt="Imagen" className="button-image" />
            </Link>
          </div>

          <div className="contenedor-literatura">
            <Link to="/Temas/Literatura" className="btn ">
              <img src={literaturaImage} alt="Imagen" className="button-image" />
            </Link>
          </div>

          <div className="contenedor-derechos">
            <Link to="/Temas/Derechos" className="btn ">
              <img src={derechosImage} alt="Imagen" className="button-image" />
            </Link>
          </div>

          <div className="contenedor-arte">
            <Link to="/Temas/Arte" className="btn ">
              <img src={arteImage} alt="Imagen" className="button-image" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temas;
