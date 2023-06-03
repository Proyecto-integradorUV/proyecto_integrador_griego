import "./StyleSignUp.css";
import backgroundImage from "./Images/temploPoseidon.jpg";
import { useNavigate } from "react-router-dom";
import { addUsers } from "../Services/users";
import { useState } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
  let navigate = useNavigate();

  // const[erros, setErros] = useState()

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    errors: {},
  });

  const validateForm = () => {
    const errors = {};

    // Validación del campo first_name
    if (formData.first_name.trim() === "") {
      errors.first_name = "El nombre es requerido.";
    }

    // Validación del campo last_name
    if (formData.last_name.trim() === "") {
      errors.last_name = "El apellido es requerido.";
    }

    // Validación del campo email
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = "El correo electrónico no es válido.";
    }

    // Validación del campo username
    if (formData.username.trim() === "") {
      errors.username = "El nombre de usuario es requerido.";
    }

    // Validación del campo password
    if (formData.password.trim() === "") {
      errors.password = "La contraseña es requerida.";
    } else if (formData.password.length < 8) {
      errors.password = "La contraseña debe tener al menos 8 caracteres.";
    }

    setFormData({ ...formData, errors });

    return Object.keys(errors).length === 0; // Retorna true si no hay errores
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const data = {
        ...formData,
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
    } else {
      // Mostrar mensaje de error genérico
      onError("Por favor, completa correctamente los campos del formulario.");
    }
  };

  const onError = (error) => {
    Swal.fire({
      icon: "error",
      title: "Algo salió mal",
      text: "Ocurrió un error al crear el usuario, recuerda que la contraseña es de 8 carácteres",
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
          {formData.errors.first_name && (
            <span className="error-message">{formData.errors.first_name}</span>
          )}
          <br />
          <label>Apellido: </label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            placeholder=" "
            onChange={handleChange}
          />
          {formData.errors.last_name && (
            <span class="slert alert-danger">{formData.errors.last_name}</span>
          )}
          <br />
          <label>Correo: </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder=" "
            onChange={handleChange}
          />
          {formData.errors.email && (
            <span className="error-message">{formData.errors.email}</span>
          )}
          <br />
          <label>Username: </label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder=" "
            onChange={handleChange}
          />
          {formData.errors.username && (
            <span className="error-message">{formData.errors.username}</span>
          )}
          <br />
          <label>Contraseña: </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="********"
            onChange={handleChange}
          />
          {formData.errors.password && (
            <span className="error-message">{formData.errors.password}</span>
          )}
          <br />
          <button type="submit">Registarme</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
