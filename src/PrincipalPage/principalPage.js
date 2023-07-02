import "./StylePrincipal.css";
import "../index.css";
import React from "react";
import VideoSlider from "./videoSlider";
import NavbarPrincipal from "../components/navbar2";



const Principal = () => {

  return (
    <div className="contenedor-inicial-principal">
      <NavbarPrincipal />
      <div className="video">
        <VideoSlider />
      </div>
    </div>
  );
};

export default Principal;