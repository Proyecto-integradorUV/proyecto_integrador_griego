import "./Style.css";
import React from "react";
import backgroundImage from "./Images/Civilización.png";
const Home = () => {
  const styles = {
    navbar: {
      backgroundColor: "#E07A5F",
      padding: "10px",
    },
    navbarList: {
      listStyle: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
      padding: 0,
    },
    navbarItem: {
      margin: "0 20px",
    },
    navbarLink: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "16px",
    },
  };
  return (
    <div class="contenedor-inicial">
      <nav style={styles.navbar}>
        <ul style={styles.navbarList}>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              Iniciar sesión
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a href="/contact" style={styles.navbarLink}>
              Registrarse
            </a>
          </li>
        </ul>
      </nav>

      {/* <nav class="navbar navbar-expand-lg navbar-light bg-salmon">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <a className="btn btn-light btn-lg">Iniciar sesion</a>
              <a className="btn btn-light btn-lg" href="#">
                Registrarse
              </a>
            </ul>
          </div>
        </div>
      </nav> */}
      <div
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

export default Home;
