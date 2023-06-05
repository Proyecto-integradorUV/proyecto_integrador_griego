import "./Vestimenta.css";
import React from "react";
import vestimentaTitle from "../style/titulos/vestimenta.png";
import { Link } from "react-router-dom";
import botonLeccion from "./Images/btnVestimenta.png";
import botonModel3D from "./Images/btnVestimenta3D.png";
import NavbarPrincipal from "../components/navbar2";

const Vestimenta = () => {
  return (
    <div class="contenedor-inicial-vestimenta">
      <NavbarPrincipal />
      <div class="temaVestimenta">
        <img src={vestimentaTitle} alt="Imagen" />
      </div>
      <div class="introduccionVestimenta">
        En términos generales, tanto hombres como mujeres griegas vestían
        túnicas largas y sueltas, hechas de telas livianas y fluidas. Estas
        túnicas se conocían como 'quitos' para los hombres y 'peplo' para las
        mujeres. El quitos masculino era una prenda recta y sin mangas que
        llegaba hasta las rodillas o los tobillos. Por otro lado, el peplo
        femenino era más complejo y consistía en una tela rectangular que se
        envolvía alrededor del cuerpo y se sujetaba en el hombro con alfileres o
        broches
      </div>
      <div class="button-container-vest">
        <Link to="/Temas/Vestimenta/Lecciones" class="btn-vest ">
          <img src={botonLeccion} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Vestimenta/Model" class="btn-vest ">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Vestimenta;
