import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { SignInContext } from "../context/signInContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import avatar1 from "./images/Afrodita.png";
import avatar2 from "./images/Apolo.png";
import avatar3 from "./images/Ares.png";
import avatar4 from "./images/Artemisa.png";
import avatar5 from "./images/Atenea.png";
import avatar6 from "./images/Demeter.png";
import avatar7 from "./images/Dioniso.png";
import avatar8 from "./images/Hades.png";
import avatar9 from "./images/Hefesto.png";
import avatar10 from "./images/Hera.png";
import avatar11 from "./images/Hestia.png";
import avatar12 from "./images/Poseidon.png";
import avatar13 from "./images/Zeus.png";
import avatar14 from "./images/medusa.png";
import defaultPhoto from "./images/default_photo.jpg";

const NavbarPrincipal = () => {
  const { isLogged, setIsLogged } = useContext(SignInContext);

  const handleLogout = () => {
    if (isLogged) {
      localStorage.removeItem("userData");
      setIsLogged(false);
    }
  };

  const getUsername = () => {
    if (isLogged) {
      const userData = localStorage.getItem("userData");
      const parsedUserData = JSON.parse(userData);
      const username = parsedUserData.username;
      return username;
    } else {
      return "No hay ningún token";
    }
  };

  return (
    <div className="fixed-top">
      <nav className="navbarPrincipal">
          <ul className="navbarList2Principal">
            {/* <li className="navbarItemPrincipal">
              {isLogged && (
                <a href=" " className="navbarLink2Principal navbar-home">
                  Hola, {getUsername()}
                </a>
              )}
            </li> */}
            <li className="navbarItemPrincipal">
              {isLogged && (
                <a
                  href="/Home"
                  className="navbarLinkPrincipal navbar-home"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </a>
              )}
            </li>
          </ul>
      </nav>
      <nav className="navbar2Principal">
        <ul className="navbarListPrincipal">
          <li className="navbarItemPrincipal">
            <a href="/Principal" className="navbarLinkPrincipal navbar-home">
              Página principal
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href=" " className="navbarLinkPrincipal navbar-home ">
              Lecciones
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href="/Temas" className="navbarLinkPrincipal navbar-home">
              Temas
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarPrincipal;