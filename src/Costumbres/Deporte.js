import "./styles/Deporte.css";
import React from "react";
import deporteTitle from "../style/titulos/deporte.png";
import { Link } from "react-router-dom";
import botonModel3D from "./Images/btnDeporte3D.png";
import Navbar4 from "../components/navbar4";

const Deporte = () => {
  const url1 = "/Temas/Deporte/Leccion1";
  const url2 = "/Temas/Deporte/Leccion2";
  const url3 = "/Temas/Deporte/Leccion3";
  const url4 = "/Temas/Deporte/Leccion4";
  return (
    <div class="contenedor-inicial-deporte">
      <Navbar4
        tituloTema="Deporte"
        url1={url1}
        tituloLeccion1="Leccion1"
        url2={url2}
        tituloLeccion2="Leccion2"
        url3={url3}
        tituloLeccion3="Leccion3"
        url4={url4}
        tituloLeccion4="Leccion4"
      />
      <div class="temaDepor">
        <img src={deporteTitle} alt="Imagen" />
      </div>
      <div class="introduccionDepor">
        El deporte en la antigua Grecia era una parte integral de la vida y la
        cultura griega. Los griegos valoraban el cuerpo atlético y consideraban
        el deporte como una forma de cultivar la belleza, la virtud y la
        excelencia. Los juegos y competiciones deportivas eran celebrados en
        todo el territorio griego y eran considerados eventos de gran
        importancia social y cultural
      </div>
      <div class="button-container-depor">
        <Link to="/Temas/Deporte/Model" class="btn-deporte ">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Deporte;
