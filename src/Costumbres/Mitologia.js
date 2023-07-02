import "./styles/Mitologia.css";
import React from "react";
import mitologiaTitle from "../style/titulos/mitologia.png";
import { Link } from "react-router-dom";
import botonModel3D from "./Images/btnMitologia3D.png";
import NavbarMito from "../components/navMito";

const Mitologia = () => {
  return (
    <div className="contenedor-inicial-mitologia">
      <NavbarMito />
      <div className="temaMitologia">
        <img src={mitologiaTitle} alt="Imagen" />
      </div>
      <div className="introduccionMitologia">
        La mitología griega es un vasto conjunto de relatos y creencias que
        formaban parte de la antigua religión y cultura de la civilización
        griega. Estas historias míticas abarcan desde los orígenes del mundo
        hasta las hazañas de los dioses, héroes y criaturas míticas. La
        mitología griega proporcionaba explicaciones sobre el origen del
        universo, la naturaleza, la vida humana y las interacciones entre los
        dioses y los mortales
      </div>
      <div className="button-container-mito">
        <Link to="/Temas/Mitologia/Model" className="btn-mito">
          <img src={botonModel3D} alt="Imagen" className="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Mitologia;
