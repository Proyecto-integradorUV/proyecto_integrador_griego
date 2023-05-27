import "./StyleSignUp.css";
import backgroundImage from "./Images/temploPoseidon.jpg";
import { useNavigate } from "react-router-dom";
import { addUsers } from "../Services/users";
import { useState } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
  let navigate = useNavigate();

  const [fromData, setFromData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    nickname: "",
    password: "",
  });

  const handleChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...fromData,
    };

    console.log(data);

    Swal.fire({
      title: "Atención, estás seguro de realizar esta acción",
      text: "Vas a registrarte como un nuevo usuario",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      showLoaderOnConfirm: true,
      cancelButtonColor: "#d33",
      confirmButtonText: `Confirmar`,
      allowOutsideClick: false,
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        return new Promise((resolve, reject) => {
          addUsers(data)
            .then((response) => {
              Swal.fire({
                icon: "success",
                title: "Operación exitosa",
                text: "Te has registrado correctamente",
                confirmButtonText: "Continuar",
                allowOutsideClick: false,
                showCancelButton: false,
              }).then(() => {
                navigate("/SignIn");
              });
            })
            .catch((err) => {
              // console.log("error");
              onError("Error al crear el usuario, intenta de nuevo.");
              console.log(err);
            });
        });
      },
    });
  };

  const onError = (error) => {
    Swal.fire({
      icon: "error",
      title: "Algo salió mal",
      text: "Ocurrió un error al crear el usuario, intenta de nuevo",
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
      <div className="formContainerSignUp">
        <form onSubmit={handleSubmit} className="form-group">
          <h2>Registrate</h2>
          <label>Nombre: </label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            placeholder=" "
            onChange={handleChange}
          />
          <br />
          <label>Apellido: </label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            placeholder=" "
            onChange={handleChange}
          />
          <br />
          <label>Correo: </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder=" "
            onChange={handleChange}
          />
          <br />
          <label>Username: </label>
          <input
            type="text"
            className="form-control"
            name="nickname"
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
          <button type="submit">Registarme</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
