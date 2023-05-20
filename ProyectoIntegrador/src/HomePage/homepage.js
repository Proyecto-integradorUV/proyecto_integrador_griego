import "./Style.css";
import React from "react";
import backgroundImage from "./Images/Civilización.png";
const Home = () => {
  // const styles = {
  //   navbar: {
  //     backgroundColor: "#E07A5F",
  //     padding: "10px",
  //   },
  //   navbarList: {
  //     listStyle: "none",
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     margin: 0,
  //     padding: 0,
  //   },
  //   navbarItem: {
  //     margin: "0 20px",
  //   },
  //   navbarLink: {
  //     textDecoration: "none",
  //     color: "#fff",
  //     fontSize: "16px",
  //   },
  // };
  return (
    <div class="contenedor-inicial">
      <nav className="navbar">
        <ul className="navbarList">
          <li className="navbarItem">
            <a href="/SignIn" className="navbarLink">
              Iniciar sesión
            </a>
          </li>
          <li className="navbarItem">
            <a href="/SignUp" className="navbarLink">
              Registrarse
            </a>
          </li>
        </ul>
      </nav>
      <div className="Image"></div>
    </div>
  );
};

export default Home;
