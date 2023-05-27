import "./Mitologia.css";
import React from "react";
import mitologiaTitle from "../style/titulos/mitologia.png"

const Mitologia = () => {
  return (
    <div class="contenedor-inicial">
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
            <a href="/Temas" className="navbarLink3Temas">
              Temas
            </a>
          </li>
        </ul>
      </nav>
      <div class="temaMitologia"><img src={mitologiaTitle} alt="Imagen"/></div>
      <div class="introduccionMitologia">La mitología griega es un vasto conjunto de relatos y creencias que formaban parte de la antigua religión y cultura de la civilización griega. Estas historias míticas abarcan desde los orígenes del mundo hasta las hazañas de los dioses, héroes y criaturas míticas. La mitología griega proporcionaba explicaciones sobre el origen del universo, la naturaleza, la vida humana y las interacciones entre los dioses y los mortales</div>
    </div>
  );
};

export default Mitologia;