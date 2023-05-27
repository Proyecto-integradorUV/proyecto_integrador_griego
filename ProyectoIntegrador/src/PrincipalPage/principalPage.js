import "./StylePrincipal.css";
import React from "react";
import VideoSlider from "./videoSlider";

const Principal = () => {
  
  return (
    <div class="contenedor-inicial-principal">
      <nav className="navbarPrincipal">
        <ul className="navbarList2Principal">
          <li className="navbarItemPrincipal">
            <a  className="navbarLink2Principal">
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
            <a  className="navbarLinkPrincipal">
              Lecciones
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href="/Temas" className="navbarLinkPrincipal">
              Temas
            </a>
          </li>
        </ul>
      </nav>
      <div className="video">
        <VideoSlider />
      </div>
    </div>
  );
};

export default Principal;
