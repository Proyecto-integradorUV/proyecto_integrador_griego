import "./styles/Gastronomia.css";
import React from "react";
import gastronomiaTitle from "../style/titulos/gastronomia.png";
import { Link } from "react-router-dom";
import botonModel3D from "./Images/btnGastronomia3D.png";
import Navbar4 from "../components/navbar4";

const Gastronomia = () => {
  const url1 = "/Temas/Gastronomia/Leccion1";
  const url2 = "/Temas/Gastronomia/Leccion2";
  const url3 = "/Temas/Gastronomia/Leccion3";
  const url4 = "/Temas/Gastronomia/Leccion4";

  return (
    <div className="contenedor-inicial-gastro">
      <Navbar4
        tituloTema="Gastronomia"
        url1={url1}
        tituloLeccion1="Leccion1"
        url2={url2}
        tituloLeccion2="Leccion2"
        url3={url3}
        tituloLeccion3="Leccion3"
        url4={url4}
        tituloLeccion4="Leccion4"
      />
      <div className="temaGastronomia">
        <img src={gastronomiaTitle} alt="Imagen" />
      </div>
      <div className="introduccionGastronomia">
        La gastronomía de Grecia tiene una rica historia que se remonta a miles
        de años atrás y ha influido en muchas otras cocinas alrededor del mundo.
        La cocina griega es conocida por su sabor fresco, ingredientes
        saludables y técnicas culinarias simples pero sabrosas
      </div>
      <div className="button-container-gastro">
        <Link to="/Temas/Gastronomia/Model" className="btn-gastro">
          <img src={botonModel3D} alt="Imagen" className="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Gastronomia;
