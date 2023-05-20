import "./Style.css";
import React from "react";
import backgroundImage from "./images/Grecia.svg";

const Principal = () => {
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
            color: "#fff",
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
            <a href="/Temas" style={styles.navbarLink}>
              Temas
            </a>
          </li>
        </ul>
      </nav>
      <div className="logo-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        {/* Contenido de tu componente */}
      </div>
    </div>
  );
};

export default Principal;
