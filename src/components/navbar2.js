import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import React, { useContext } from "react";
import { SignInContext } from "../context/signInContext";

const NavbarPrincipal = () => {
  const { isLogged, setIsLogged } = useContext(SignInContext);

  const handdleLogout = () => {
    if (isLogged) {
      localStorage.removeItem("userData");
      setIsLogged(false);
    }
  };

  const username = localStorage.getItem("username");

  return (
    <div className="fixed-top">
      <nav className="navbarPrincipal ">
        <ul className="navbarList2Principal">
          <li className="navbarItemPrincipal">
            {isLogged && (
              <a href=" " className="navbarLink2Principal navbar-home">
                Hola, {username}
              </a>
            )}
          </li>
          <li className="navbarItemPrincipal">
            {isLogged && (
              <a
                href="/Home"
                className="navbarLink2Principal navbar-home"
                onClick={handdleLogout}
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
