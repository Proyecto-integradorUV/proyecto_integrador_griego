import "./StylePrincipal.css";
import "../index.css";
import React from "react";
import VideoSlider from "./videoSlider";
import NavbarPrincipal from "../components/navbar2";



const Principal = () => {

  return (
    <div class="contenedor-inicial-principal">
      <NavbarPrincipal />
      <div className="video">
        <VideoSlider />
      </div>
    </div>
  );
};

export default Principal;
