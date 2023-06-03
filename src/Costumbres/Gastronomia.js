import "./Gastronomia.css";
import React from "react";
import gastronomiaTitle from "../style/titulos/gastronomia.png";
import { Link } from "react-router-dom";
import botonLeccion from "./Images/btnGastronomia.png";
import botonModel3D from "./Images/btnGastronomia3D.png";

const Gastronomia = () => {
  return (
    <div class="contenedor-inicial-gastro">
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
      <div class="temaGastronomia">
        <img src={gastronomiaTitle} alt="Imagen" />
      </div>
      <div class="introduccionGastronomia">
        La gastronomía de Grecia tiene una rica historia que se remonta a miles
        de años atrás y ha influido en muchas otras cocinas alrededor del mundo.
        La cocina griega es conocida por su sabor fresco, ingredientes
        saludables y técnicas culinarias simples pero sabrosas
      </div>
      <div class="button-container-gastro">
        <Link to="/Temas/Gastronomia/Lecciones" class="btn-gastro">
          <img src={botonLeccion} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Gastronomia/Model" class="btn-gastro">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Gastronomia;
