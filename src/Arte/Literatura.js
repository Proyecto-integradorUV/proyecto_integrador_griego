import "./Literatura.css";
import React from "react";
import literaturaTitle from "../style/titulos/literatura.png";
import { Link } from "react-router-dom";
import botonLeccion from "./Images/btnLiteratura.png";
import botonModel3D from "./Images/btnLiteratura3D.png";

const Literatura = () => {
  return (
    <div class="contenedor-inicial-leteratura">
      <nav className="navbarPrincipal">
        <ul className="navbarList2Principal">
          <li className="navbarItemPrincipal">
            <a href=" " className="navbarLink2Principal">
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
            <a href="/Principal" className="navbarLinkPrincipal">
              Página principal
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href=" " className="navbarLinkPrincipal">
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
      <div class="temaLiteratura">
        <img src={literaturaTitle} alt="Imagen" />
      </div>
      <div class="introduccionLiteratura">
        La literatura griega es una de las tradiciones literarias más
        influyentes y duraderas en la historia. Se desarrolló en la antigua
        Grecia, desde el siglo VIII a.C. hasta la época helenística, y ha dejado
        una huella profunda en la cultura occidental. La literatura griega
        abarca una amplia gama de géneros y temas, desde la poesía épica y la
        tragedia hasta la filosofía y la historia
      </div>
      <div class="button-container-lit">
        <Link to="/Temas/Literatura/Lecciones" class="btn-lit">
          <img src={botonLeccion} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Literatura/Model" class="btn-lit">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Literatura;
