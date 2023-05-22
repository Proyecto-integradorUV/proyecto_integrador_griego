import "./Mitologia.css";
import React from "react";
import mitologiaTitle from "../style/titulos/mitologia.png"

const Mitologia = () => {
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
                <a href="/" className="navbarLinkSecond">
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
      <div class="temaMitologia"><img src={mitologiaTitle} alt="Imagen"/></div>
      <div class="introduccionMitologia">La mitología griega es un vasto conjunto de relatos y creencias que formaban parte de la antigua religión y cultura de la civilización griega. Estas historias míticas abarcan desde los orígenes del mundo hasta las hazañas de los dioses, héroes y criaturas míticas. La mitología griega proporcionaba explicaciones sobre el origen del universo, la naturaleza, la vida humana y las interacciones entre los dioses y los mortales</div>
    </div>
  );
};

export default Mitologia;