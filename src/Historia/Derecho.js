import "./styles/Derecho.css";
import React from "react";
import derechoTitle from "../style/titulos/derechos.png";
import { Link } from "react-router-dom";
import botonModel3D from "./Images/btnDerecho3D.png";
import Navbar4 from "../components/navbar4";

const Derecho = () => {
  const url1 = "/Temas/Derecho/Leccion1";
  const url2 = "/Temas/Derecho/Leccion2";
  const url3 = "/Temas/Derecho/Leccion3";
  const url4 = "/Temas/Derecho/Leccion4";
  return (
    <div class="contenedor-inicial-derecho">
      <Navbar4
        tituloTema="Derecho"
        url1={url1}
        tituloLeccion1="Leccion1"
        url2={url2}
        tituloLeccion2="Leccion2"
        url3={url3}
        tituloLeccion3="Leccion3"
        url4={url4}
        tituloLeccion4="Leccion4"
      />
      <div class="temaDerecho">
        <img src={derechoTitle} alt="Imagen" />
      </div>
      <div class="introduccionDerecho">
        En la antigua Grecia, los derechos y la participación política estaban
        restringidos a los ciudadanos varones. Las mujeres, los esclavos y los
        extranjeros no tenían los mismos derechos que los ciudadanos. Aunque se
        desarrollaron conceptos de democracia y gobierno directo, la democracia
        ateniense era limitada y excluía a gran parte de la población
      </div>
      <div class="button-container-der">
        <Link to="/Temas/Derecho/Model" class="btn-derecho ">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Derecho;
