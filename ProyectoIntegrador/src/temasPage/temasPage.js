import "./StyleTemas.css";
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

const Temas = () => {
  return (
    <div class="contenedor-inicial-principal">
      <nav className="navbarTemas">
        <ul className="navbarList2Temas">
          <li className="navbarItemTemas">
            <a className="navbarLink2Temas">
              Usuario
            </a>
          </li>
          <li className="navbarItemTemas">
            <a href="/Home" className="navbarLink2Temas">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navbar2Temas">
        <ul className="navbarListTemas">
          <li className="navbarItemTemas">
            <a className="navbarLinkTemas">
              Lecciones
            </a>
          </li>
          <li className="navbarItemTemas">
            <a href="/Temas" className="navbarLink3Temas">
              Temas
            </a>
          </li>
        </ul>
      </nav>

      <div class="button-container">
        <Link to="/Temas/Filosofia" class="btn ">
          <img src={filoImage} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Gastronomia" class="btn ">
          <img src={gastroImage} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/SitiosCaracteristicos" class="btn ">
          <img src={sitesImage} alt="Imagen" class="button-image" />
        </Link>
      </div>
      <div class="button-container2">
        <Link to="/Temas/Mitologia" class="btn ">
          <img src={mitologiaImage} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Deporte" class="btn ">
          <img src={deporteImage} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Vestimenta" class="btn ">
          <img src={vestimentaImage} alt="Imagen" class="button-image" />
        </Link>
      </div>
      <div class="button-container3">
        <Link to="/Temas/Literatura" class="btn ">
          <img src={literaturaImage} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Derechos" class="btn ">
          <img src={derechosImage} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Arte" class="btn ">
          <img src={arteImage} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>

  );
};

export default Temas;
