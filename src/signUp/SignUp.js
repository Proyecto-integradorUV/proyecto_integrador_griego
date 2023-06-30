import "./StyleSignUp.css";
import backgroundImage from "./Images/temploPoseidon.jpg";
import { useNavigate, Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { addUsers } from "../Services/users";
import { useState } from "react";
import Swal from "sweetalert2";
import Afrodita from "../components/images/Afrodita.png";
import Apolo from "../components/images/Apolo.png";
import Ares from "../components/images/Ares.png";
import Artemisa from "../components/images/Artemisa.png";
import Atenea from "../components/images/Atenea.png";
import Demeter from "../components/images/Demeter.png";
import Dioniso from "../components/images/Dioniso.png";
import Hades from "../components/images/Hades.png";
import Hefesto from "../components/images/Hefesto.png";
import Hera from "../components/images/Hera.png";
import Hestia from "../components/images/Hestia.png";
import Poseidon from "../components/images/Poseidon.png";
import Zeus from "../components/images/Zeus.png";
import Medusa from "../components/images/Medusa.png";
import default_photo from "../components/images/default_photo.jpg";

const SignUp = () => {
  let navigate = useNavigate();

  // const[erros, setErros] = useState()

  //almacenar modals por nombres
  const [modals, setModals] = useState({
    modal: false,
  });

  const avatars = [
    { name: "Afrodita", image: Afrodita },
    { name: "Apolo", image: Apolo },
    { name: "Ares", image: Ares },
    { name: "Artemisa", image: Artemisa },
    { name: "Atenea", image: Atenea },
    { name: "Demeter", image: Demeter },
    { name: "Dioniso", image: Dioniso },
    { name: "Hades", image: Hades },
    { name: "Hefesto", image: Hefesto },
    { name: "Hera", image: Hera },
    { name: "Hestia", image: Hestia },
    { name: "Poseidon", image: Poseidon },
    { name: "Zeus", image: Zeus },
    { name: "Medusa", image: Medusa },
    { name: "default_photo", image: default_photo },
  ];

  //imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(default_photo);

  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(-1);

  // Funciones de manejo para abrir/cerrar cada modal
  const handleOpenModal = (modalName) => {
    setModals((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const handleCloseModal = (modalName) => {
    setModals((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  const handleImageSelect = (imageIndex) => {
    setSelectedAvatarIndex(imageIndex);
    const selectedAvatar = avatars[imageIndex];
    setSelectedImage(selectedAvatar.image);
    setFormData((prevFormData) => ({
      ...prevFormData,
      avatar: selectedAvatar.name,
    }));
    handleCloseModal("modal");
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    avatar: "default_photo",
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
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
        // width: "100%",
        // height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="formContainerWrapper">
        {" "}
        {/* Contenedor adicional */}
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
              <span className="error-message">
                {formData.errors.first_name}
              </span>
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
              <span class="slert alert-danger">
                {formData.errors.last_name}
              </span>
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
            <label>Seleccione un avatar: </label>
            <br />
            <Link
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "10%",
                height: "10%",
              }}
            >
              <img
                onClick={() => handleOpenModal("modal")}
                src={selectedImage}
                alt="Imagen"
                className="userImage"
              />
            </Link>
            <br />
            <input
              type="hidden"
              className="form-control"
              disabled
              name="avatar"
              onChange={handleChange}
              value={formData.avatar}
            ></input>
            <button type="submit">Registarme</button>
          </form>
          <div>
            <Modal
              show={modals.modal}
              onHide={() => handleCloseModal("modal")}
              scrollable={true}
              size="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title>Selecciona tu avatar</Modal.Title>
              </Modal.Header>
              <Modal.Body
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 2fr)",
                  gap: "10px",
                }}
              >
                {avatars.map((avatar, index) => (
                  <Link key={index} onClick={() => handleImageSelect(index)}>
                    <img
                      key={index}
                      src={avatar.image}
                      alt={avatar.name}
                      className={`avatarImage ${
                        selectedAvatarIndex === index ? "selected" : ""
                      }`}
                      onClick={() => handleImageSelect(index)}
                      style={{
                        width: "100%",
                        height: "100%",
                        margin: "auto",
                        borderRadius: "20%",
                      }}
                    />
                  </Link>
                ))}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => handleCloseModal("modal")}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div class="col-md-10 my-2">
            <a href="/Home">Regresar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
