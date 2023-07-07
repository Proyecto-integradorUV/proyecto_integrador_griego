import "./styles/Filosofia.css";
import React from "react";
import filoTitle from "../style/titulos/filosofia.png";
import { Link } from "react-router-dom";
import botonModel3D from "./Images/btnFilosofia3D.png";
import Navbar4 from "../components/navbar4";

const Filosofia = () => {
  const url1 = "/Temas/Filosofia/Leccion1";
  const url2 = "/Temas/Filosofia/Leccion2";
  const url3 = "/Temas/Filosofia/Leccion3";
  const url4 = "/Temas/Filosofia/Leccion4";

  return (
    <div className="contenedor-inicial-filosofia">
      <Navbar4
        tituloTema="Filosofía"
        url1={url1}
        tituloLeccion1="Leccion1"
        url2={url2}
        tituloLeccion2="Leccion2"
        url3={url3}
        tituloLeccion3="Leccion3"
        url4={url4}
        tituloLeccion4="Leccion4"
      />
      <div className="temaFilosofia">
        <img src={filoTitle} alt="Imagen" />
      </div>
      <div className="introduccionFilosofia text-center">
        A lo largo de la historia de la filosofía griega, se destacaron figuras
        clave como Sócrates, Platón y Aristóteles. Sócrates enfatizó el uso de
        la razón y el diálogo para buscar la verdad y la virtud. Platón
        desarrolló la teoría de las Ideas, argumentando que el mundo sensible es
        solo una sombra imperfecta de las Ideas eternas y perfectas.
        Aristóteles, por su parte, realizó importantes contribuciones en lógica,
        ética, metafísica y ciencias naturales, y enfatizó la observación
        empírica y el estudio sistemático
      </div>
      <div className="button-container-fil">
        <Link to="/Temas/Filosofia/Model" className="btn-filosofia">
          <img src={botonModel3D} alt="Imagen" className="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Filosofia;
