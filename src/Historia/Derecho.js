import "./styles/Derecho.css";
import React from "react";
import derechoTitle from "../style/titulos/derechos.png";
import { Link } from "react-router-dom";
import botonLeccion from "./Images/btnDerecho.png";
import botonModel3D from "./Images/btnDerecho3D.png";
import NavbarPrincipal from "../components/navbar2";

const Derecho = () => {
  return (
    <div class="contenedor-inicial-derecho">
      <NavbarPrincipal/>
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
        <Link to="/Temas/Derecho/Lecciones" class="btn-derecho ">
          <img src={botonLeccion} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Derecho/Model" class="btn-derecho ">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Derecho;
