import "./StyleSignIn.css";
import React, { useState, useContext, useEffect } from "react";
import backgroundImage from "./Images/acropolis.jpg";
import { useNavigate } from "react-router-dom";
import { signIn } from "../Services/users";
import Swal from "sweetalert2";
import { SignInContext } from "../context/signInContext";

const SignIn = () => {
  let navigate = useNavigate();
  const { setIsLogged } = useContext(SignInContext);
  const setLoading = useState(false)[1];

  const [fromData, setFromData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    localStorage.removeItem("userData");
    setIsLogged(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...fromData,
    };

    setLoading(true);

    signIn(data)
      .then((response) => {
        setLoading(false);
        localStorage.setItem("userData", JSON.stringify(response));
        Swal.fire({
          icon: "success",
          title: "Bienvenido",
          text: "Te has logueado correctamente",
          confirmButtonText: "Continuar",
          allowOutsideClick: false,
          showCancelButton: false,
        }).then(() => {
          setIsLogged(true);
          navigate("/Principal");
        });
      })
      .catch((err) => {
        onError(err);
        setLoading(false);
      });
  };

  const onError = (error) => {
    Swal.fire({
      icon: "error",
      title: "Algo salió mal",
      text: "Ocurrió un error al iniciar sesión, intenta de nuevo y verifica que tu usuario sea correcto",
      confirmButtonText: "Continuar",
      allowOutsideClick: false,
      showCancelButton: false,
    });
  };

  return (
    <div
      className="contenedorPrincipal"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="form-group">
          <h2>Iniciar sesión</h2>
          <label>Usuario: </label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder=" "
            onChange={handleChange}
          />
          <br />
          <label>Contraseña: </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="********"
            onChange={handleChange}
          />
          <br />
          <button type="submit">Iniciar sesión</button>
        </form>
        <div className="col-md-10 my-2">
          <a href="/SignUp">Registrar usuario</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
