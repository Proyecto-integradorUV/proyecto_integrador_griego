import "./Filosofia.css";
import React from "react";
import filoTitle from "../style/titulos/filosofia.png";
import { Link } from "react-router-dom";
import botonLeccion from "./Images/btnFilosofia.png";
import botonModel3D from "./Images/btnFilosofia3D.png";
import NavbarPrincipal from "../components/navbar2";

const Filosofia = () => {
  return (
    <div class="contenedor-inicial-filosofia">
      <NavbarPrincipal />
      <div class="temaFilosofia">
        <img src={filoTitle} alt="Imagen" />
      </div>
      <div className="introduccionFilosofia">
        A lo largo de la historia de la filosofía griega, se destacaron figuras
        clave como Sócrates, Platón y Aristóteles. Sócrates enfatizó el uso de
        la razón y el diálogo para buscar la verdad y la virtud. Platón
        desarrolló la teoría de las Ideas, argumentando que el mundo sensible es
        solo una sombra imperfecta de las Ideas eternas y perfectas.
        Aristóteles, por su parte, realizó importantes contribuciones en lógica,
        ética, metafísica y ciencias naturales, y enfatizó la observación
        empírica y el estudio sistemático
      </div>
      <div class="button-container-fil">
        <Link to="/Temas/Filosofia/Lecciones" class="btn-filosofia">
          <img src={botonLeccion} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Filosofia/Model" class="btn-filosofia">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Filosofia;
