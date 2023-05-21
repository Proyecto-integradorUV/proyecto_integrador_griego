import "./Style.css";
import React from "react";
import VideoSlider from "./videoSlider";

const Principal = () => {
  
  return (
    <div class="contenedor-inicial-principal">
      <nav className="navbar">
        <ul className="navbarList2">
          <li className="navbarItem">
            <a  className="navbarLink2">
              Usuario
            </a>
          </li>
          <li className="navbarItem">
            <a href="/Home" className="navbarLink2">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navbar2">
        <ul className="navbarList">
          <li className="navbarItem">
            <a  className="navbarLink">
              Lecciones
            </a>
          </li>
          <li className="navbarItem">
            <a href="/Temas" className="navbarLink">
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
