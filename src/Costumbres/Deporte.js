import "./Deporte.css";
import React from "react";
import deporteTitle from "../style/titulos/deporte.png";
import { Link } from "react-router-dom";
import botonLeccion from "./Images/btnDeporte.png";
import botonModel3D from "./Images/btnDeporte3D.png";
import NavbarPrincipal from "../components/navbar2";

const Deporte = () => {
  return (
    <div class="contenedor-inicial-deporte">
      <NavbarPrincipal />
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
      <div class="button-container-dep">
        <Link to="/Temas/Deporte/Lecciones" class="btn ">
          <img src={botonLeccion} alt="Imagen" class="button-image" />
        </Link>
        <Link to="/Temas/Deporte/Model" class="btn ">
          <img src={botonModel3D} alt="Imagen" class="button-image" />
        </Link>
      </div>
    </div>
  );
};

export default Deporte;
