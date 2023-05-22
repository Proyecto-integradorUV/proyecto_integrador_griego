import "./Filosofia.css";
import React from "react";
import filoTitle from "../style/titulos/filosofia.png"
import socrates from "./Images/Socrates.jpg"

const Filosofia = () => {
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
      <div class="temaFilosofia"><img src={filoTitle} alt="Imagen"/></div>
      <p class="introduccionFilosofia" >A lo largo de la historia de la filosofía griega, se destacaron figuras clave como Sócrates, Platón y Aristóteles. Sócrates enfatizó el uso de la razón y el diálogo para buscar la verdad y la virtud. Platón desarrolló la teoría de las Ideas, argumentando que el mundo sensible es solo una sombra imperfecta de las Ideas eternas y perfectas. Aristóteles, por su parte, realizó importantes contribuciones en lógica, ética, metafísica y ciencias naturales, y enfatizó la observación empírica y el estudio sistemático</p>
    </div>
  );
};

export default Filosofia;