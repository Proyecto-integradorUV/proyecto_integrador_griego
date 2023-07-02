import "./styles/Vestimenta.css";
import React from "react";
import vestimentaTitle from "../style/titulos/vestimenta.png";
import { Link } from "react-router-dom";
import botonModel3D from "./Images/btnVestimenta3D.png";
import Navbar4 from "../components/navbar4";

const Vestimenta = () => {
  const url1 = "/Temas/Vestimenta/Leccion1";
  const url2 = "/Temas/Vestimenta/Leccion2";
  const url3 = "/Temas/Vestimenta/Leccion3";
  const url4 = "/Temas/Vestimenta/Leccion4";
  return (
    <div className="contenedor-inicial-vestimenta">
      <Navbar4
        tituloTema="Vestimenta"
        url1={url1}
        tituloLeccion1="Leccion1"
        url2={url2}
        tituloLeccion2="Leccion2"
        url3={url3}
        tituloLeccion3="Leccion3"
        url4={url4}
        tituloLeccion4="Leccion4"
      />
      <div className="temaVestimenta">
        <img src={vestimentaTitle} alt="Imagen" />
      </div>
      <div className="introduccionVestimenta">
        En términos generales, tanto hombres como mujeres griegas vestían
        túnicas largas y sueltas, hechas de telas livianas y fluidas. Estas
        túnicas se conocían como 'quitos' para los hombres y 'peplo' para las
        mujeres. El quitos masculino era una prenda recta y sin mangas que
        llegaba hasta las rodillas o los tobillos. Por otro lado, el peplo
        femenino era más complejo y consistía en una tela rectangular que se
        envolvía alrededor del cuerpo y se sujetaba en el hombro con alfileres o
        broches
      </div>
      <div className="button-container-vest">
        <Link to="/Temas/Vestimenta/Model" className="btn-vest ">
          <img src={botonModel3D} alt="Imagen" className="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Vestimenta;
