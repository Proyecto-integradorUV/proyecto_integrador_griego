import "./styles/Literatura.css";
import React from "react";
import literaturaTitle from "../style/titulos/literatura.png";
import { Link } from "react-router-dom";
import botonModel3D from "./Images/btnLiteratura3D.png";
import NavbarLite from "../components/navLite";

const Literatura = () => {
  return (
    <div className="contenedor-inicial-leteratura">
      <NavbarLite/>
      <div className="temaLiteratura">
        <img src={literaturaTitle} alt="Imagen" />
      </div>
      <div className="introduccionLiteratura">
        La literatura griega es una de las tradiciones literarias más
        influyentes y duraderas en la historia. Se desarrolló en la antigua
        Grecia, desde el siglo VIII a.C. hasta la época helenística, y ha dejado
        una huella profunda en la cultura occidental. La literatura griega
        abarca una amplia gama de géneros y temas, desde la poesía épica y la
        tragedia hasta la filosofía y la historia
      </div>
      <div className="button-container-lit">
        <Link to="/Temas/Literatura/Model" className="btn-lit">
          <img src={botonModel3D} alt="Imagen" className="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Literatura;
