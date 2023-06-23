import "./styles/Mitologia.css";
import React from "react";
import mitologiaTitle from "../style/titulos/mitologia.png";
import { Link } from "react-router-dom";
import botonLeccion from "./Images/btnMitologia.png";
import botonModel3D from "./Images/btnMitologia3D.png";
import NavbarPrincipal from "../components/navbar2";

const Mitologia = () => {
  return (
    <div class="contenedor-inicial-mitologia">
      <NavbarPrincipal />
      <div class="temaMitologia">
        <img src={mitologiaTitle} alt="Imagen" />
      </div>
      <div class="introduccionMitologia">
        La mitología griega es un vasto conjunto de relatos y creencias que
        formaban parte de la antigua religión y cultura de la civilización
        griega. Estas historias míticas abarcan desde los orígenes del mundo
        hasta las hazañas de los dioses, héroes y criaturas míticas. La
        mitología griega proporcionaba explicaciones sobre el origen del
        universo, la naturaleza, la vida humana y las interacciones entre los
        dioses y los mortales
      </div>
      <div class="button-container-mito">
        <Link to="/Temas/Mitologia/Lecciones" class="btn-mito">
          <img src={botonLeccion} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Mitologia/Model" class="btn-mito">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Mitologia;