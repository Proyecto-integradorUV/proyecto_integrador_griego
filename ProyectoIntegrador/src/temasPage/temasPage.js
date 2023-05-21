import "./Style.css";
import React from "react";
import filoImage from "./images/filosofia.png";
import sitesImage from "./images/sitios.png";
import gastroImage from "./images/gastronomia.png";
import literaturaImage from "./images/literatura.png";
import mitologiaImage from "./images/mitologia.png";
import derechosImage from "./images/derechos.png";
import deporteImage from "./images/deporte.png";

const Temas = () => {
  const styles = {
    navbar: {
      backgroundColor: "#E07A5F",
      padding: "10px",
    },
    navbar2: {
      backgroundColor: "#f2cc8f",
      padding: "10px",
    },
    navbarList: {
      listStyle: "none",
      display: "flex",
      justifyContent: "left",
      alignItems: "left",
      margin: 0,
      padding: 0,
    },
    navbarItem: {
      margin: "0 20px",
    },
    navbarLink: {
      textDecoration: "none",
      color: "#5c4a2d",
      fontSize: "16px",
    },
    navbarLink2: {
      textDecoration: "none",
      color: "#E07A5F",
      fontSize: "16px",
    },
    navbarList2: {
      listStyle: "none",
      display: "flex",
      justifyContent: "right",
      alignItems: "right",
      margin: 0,
      padding: 0,
    },
  };
  return (
    <div class="contenedor-inicial-principal">
      <nav style={styles.navbar}>
        <ul style={styles.navbarList2}>
          <li style={styles.navbarItem}>
            <a href="/Usuario" style={styles.navbarLink2}>
              Usuario
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink2}>
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>
      <nav style={styles.navbar2}>
        <ul style={styles.navbarList}>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              Mis lecciones
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a href="/Temas" style={styles.navbarLink2}>
              Temas
            </a>
          </li>
        </ul>
      </nav>

        <div class="button-container">
          <button class="btn ">
            <img src={filoImage} alt="Imagen" class="button-image" />
          </button>
          <button class="btn ">
            <img src={gastroImage} alt="Imagen" class="button-image" />
          </button>
          <button class="btn ">
            <img src={sitesImage} alt="Imagen" class="button-image" />
          </button>
        </div>
        <div class="button-container2">
          <button class="btn ">
            <img src={mitologiaImage} alt="Imagen" class="button-image" />
          </button>
          <button class="btn ">
            <img src={deporteImage} alt="Imagen" class="button-image" />
          </button>
        </div>
        <div class="button-container3">
          <button class="btn ">
            <img src={literaturaImage} alt="Imagen" class="button-image" />
          </button>
          <button class="btn ">
            <img src={derechosImage} alt="Imagen" class="button-image" />
          </button>
        </div>
      </div>

  );
};

export default Temas;
