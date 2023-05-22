import "./Arte.css";
import React from "react";
import arteTitle from "../style/titulos/arte.png"

const Arte = () => {
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
      <div class="temaArte"><img src={arteTitle} alt="Imagen"/></div>
      <div class="introduccionArte">El arte griego abarca una amplia gama de disciplinas, desde la escultura y la arquitectura hasta la pintura y la cerámica. A lo largo de los siglos, los artistas griegos experimentaron y perfeccionaron diversas técnicas y estilos artísticos, dejando un legado duradero</div>
    </div>
  );
};

export default Arte;