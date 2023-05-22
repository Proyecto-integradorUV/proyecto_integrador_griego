import "./Vestimenta.css";
import React from "react";
import vestimentaTitle from "../style/titulos/vestimenta.png"

const Vestimenta = () => {
  return (
    <div class="contenedor-inicial">
        <nav className="navbar">
            <ul className="navbarList">
            <li className="navbarItem">
                <a href="/SignIn" className="navbarName">
                Nombre
                </a>
            </li>
            </ul>
        </nav>
        <nav className="navbarSecond">
            <ul className="navbarListSecond">
            <li className="navbarItemSecond">
                <a href="/Temas" className="navbarLinkSecond">
                Mis lecciones
                </a>
            </li>
            <li className="navbarItemSecond">
                <a href="/Temas" className="navbarLinkSecond">
                Temas
                </a>
            </li>
            </ul>
        </nav>
      <div class="temaVestimenta"><img src={vestimentaTitle} alt="Imagen"/></div>
      <div class="introduccionVestimenta">En términos generales, tanto hombres como mujeres griegas vestían túnicas largas y sueltas, hechas de telas livianas y fluidas. Estas túnicas se conocían como 'quitos' para los hombres y 'peplo' para las mujeres. El quitos masculino era una prenda recta y sin mangas que llegaba hasta las rodillas o los tobillos. Por otro lado, el peplo femenino era más complejo y consistía en una tela rectangular que se envolvía alrededor del cuerpo y se sujetaba en el hombro con alfileres o broches</div>
    </div>
  );
};

export default Vestimenta;