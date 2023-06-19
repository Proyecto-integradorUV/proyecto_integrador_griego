import "./StyleHome.css";
import "../index.css";
import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { useContext } from "react";
import { SignInContext } from "../context/signInContext";

const Home = () => {
  const { setIsLogged } = useContext(SignInContext); // Obtener el contexto de inicio de sesión

  useEffect(() => {
    localStorage.removeItem("userData");
    setIsLogged(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div class="contenedor-inicial1">
      <Navbar />
    </div>
  );
};

export default Home;
