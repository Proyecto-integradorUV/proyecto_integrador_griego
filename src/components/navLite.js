import React, { useContext, useState } from "react";
import { Button, Dropdown, Modal, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SignInContext } from "../context/signInContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Afrodita from "./images/Afrodita.png";
import Apolo from "./images/Apolo.png";
import Ares from "./images/Ares.png";
import Artemisa from "./images/Artemisa.png";
import Atenea from "./images/Atenea.png";
import Demeter from "./images/Demeter.png";
import Dioniso from "./images/Dioniso.png";
import Hades from "./images/Hades.png";
import Hefesto from "./images/Hefesto.png";
import Hera from "./images/Hera.png";
import Hestia from "./images/Hestia.png";
import Poseidon from "./images/Poseidon.png";
import Zeus from "./images/Zeus.png";
import Medusa from "./images/Medusa.png";
import default_photo from "./images/default_photo.jpg";
import { updateUser } from "../Services/users";

const NavbarLite = () => {
  const { isLogged, setIsLogged } = useContext(SignInContext);

  //imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(default_photo);

  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(-1);

  const [formData, setFormData] = useState({
    id: null,
    email: '',
    first_name: '',
    last_name: '',
    username: '',
    avatar: '',
  });

  //almacenar avatars por nombres
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

  //almacenar modals por nombres
  const [modals, setModals] = useState({
    modal: false,
    modalAvatar: false,
  });

  // Funciones de manejo para abrir/cerrar cada modal
  const handleOpenModal = (modalName, userId) => {
    setModals((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      id: userId,
    }));
    getDatosUsuario();
  };

  // Obtiene los datos del usuario actual
  const getDatosUsuario = () => {
    const userData = localStorage.getItem("userData");
    const parsedUserData = JSON.parse(userData);

    const id = parsedUserData.id;
    const firstName = parsedUserData.first_name;
    const username = parsedUserData.username;
    const last_name = parsedUserData.last_name;
    const email = parsedUserData.email;
    const avatar = parsedUserData.avatar;

    console.log("getDatos ", id)
    setFormData((prevFormData) => ({
      ...prevFormData,
      id: id,
      first_name: firstName,
      username: username,
      last_name: last_name,
      email: email,
      avatar: avatar,
    }));
  };

  // Cierra el modal
  const handleCloseModal = (modalName) => {
    setModals((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  // Funciones de manejo para abrir/cerrar cada modal
  const handleModalAvatar = (modalName) => {
    setModals((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
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
    handleCloseModal("modalAvatar");
  };

  // Cerrar sesión
  const handleLogout = () => {
    if (isLogged) {
      localStorage.removeItem("userData");
      setIsLogged(false);
    }
  };

  const getUsername = () => {
    if (isLogged) {
      const userData = localStorage.getItem("userData");
      const parsedUserData = JSON.parse(userData);
      const username = parsedUserData.username;
      return username;
    } else {
      return "No hay ningún token";
    }
  };

  const getAvatar = () => {
    if (isLogged) {
      const userData = localStorage.getItem("userData");
      const parsedUserData = JSON.parse(userData);
      const avatarName = parsedUserData.avatar;
      const selectedAvatar = avatars.find(
        (avatarObj) => avatarObj.name === avatarName
      );
      return selectedAvatar ? selectedAvatar.image : default_photo;
    } else {
      return default_photo;
    }
  };

  const handleSaveProfile = () => {
    const { id, email, first_name, last_name, username, avatar } = formData;

    const body = {
      email: email,
      first_name: first_name,
      last_name: last_name,
      username: username,
      avatar: avatar,
    };

    updateUser(id, body)
      .then((response) => {
        console.log("Usuario actualizado correctamente:", response);
        // Actualizar los datos en localStorage
        const userData = localStorage.getItem("userData");
        const parsedUserData = JSON.parse(userData);
        parsedUserData.email = email;
        parsedUserData.first_name = first_name;
        parsedUserData.last_name = last_name;
        parsedUserData.username = username;
        parsedUserData.avatar = avatar;
        localStorage.setItem("userData", JSON.stringify(parsedUserData));

        handleCloseModal("modal");
      })
      .catch((error) => {
        console.error("Error al actualizar el usuario:", error);
      });
  };

  return (
    <div className="fixed-top">
      <nav className="navbarPrincipal">
        <ul className="navbarList2Principal">
          <li className="navbarItemPrincipal">
            {isLogged && (
              <p
                style={{ margin: "auto" }}
                className="navbarLink2Principal navbar-home"
              >
                Hola, &nbsp;{getUsername()}
              </p>
            )}
          </li>
          <li className="navbarItemPrincipal">
            {isLogged && (
              <div className="userImageContainer">
                <p>
                  <img
                    src={getAvatar()}
                    alt="Imagen"
                    className="userImage"
                  />
                </p>
              </div>
            )}
          </li>
          <li className="navbarItemPrincipal">
            <Dropdown className="custom-dropdown">
              <Dropdown.Toggle
                variant="light"
                id="dropdownMenu"
                className="custom-toggle"
              />
              <Dropdown.Menu>
                <Dropdown.Item href="/Lecciones">Mi progreso</Dropdown.Item>
                <Dropdown.Item onClick={() => handleOpenModal("modal", formData && formData.id)}>
                  Editar usuario
                </Dropdown.Item>
                <Dropdown.Item href="/Home">
                  <li>
                    {isLogged && <p onClick={handleLogout}>Cerrar sesión</p>}
                  </li>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </nav>
      <nav className="navbar2Principal">
        <ul className="navbarListPrincipal">
          <li className="navbarItemPrincipal">
            <a href="/Principal" className="navbarLinkPrincipal navbar-home">
              Home
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href="/Temas" className="navbarLinkPrincipal navbar-home">
              Temas
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <Dropdown className="custom-dropdown">
              <Dropdown.Toggle
                variant="light"
                id="dropdownMenu"
                className="custom-toggle"
              >
                <span className="navbarLinkPrincipal navbar-home">
                  Lecciones
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="custom-menu">
                <div className="row">
                  <div className="col">
                    <h5>Literatura</h5>
                    <ul>
                      <li>
                        <a href="/Temas/Literatura/Leccion1">Lección1</a>
                      </li>
                      <li>
                        <a href="/Temas/Literatura/Leccion2">Lección2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </nav>
      <div>
        <Modal
          show={modals.modal}
          onHide={() => handleCloseModal("modal")}
          scrollable={true}
          size="lg"
        >
          <ModalHeader>
            <div>
              <h3> Modificar datos </h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label style={{ color: "black" }}>Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                value={formData && formData.email}
                onChange={handleChange}
              />
              <br />
              <label style={{ color: "black" }}>Nombre</label>
              <input
                className="form-control"
                type="text"
                name="first_name"
                value={formData && formData.first_name}
                onChange={handleChange}
              />
              <br />

              <label style={{ color: "black" }}>Apellido</label>
              <input
                className="form-control"
                type="text"
                name="last_name"
                value={formData && formData.last_name}
                onChange={handleChange}
              />
              <br />
              <label style={{ color: "black" }}>Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                value={formData && formData.username}
                onChange={handleChange}
              />
              <br />
              <label style={{ color: "black" }}>Seleccione un avatar: </label>
              <br />
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%', height: '10%' }}>
                <img
                  onClick={() => handleModalAvatar("modalAvatar")}
                  src={selectedImage}
                  alt="Imagen"
                  className="userImage"
                />
              </div>
              <br />
              <input type="hidden"
                className="form-control"
                disabled
                name="avatar"
                onChange={handleChange}
                value={formData && formData.avatar} >
              </input>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button className="btn btn-primary" onClick={() => handleSaveProfile(formData)}>
              Actualizar
            </Button>
            <Button
              variant="btn btn-danger"
              onClick={() => handleCloseModal("modal")}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>

      </div>

      <div>
        <Modal show={modals.modalAvatar} onHide={() => handleCloseModal('modalAvatar')} scrollable={true} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Selecciona tu avatar</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display: "grid", gridTemplateColumns: "repeat(7, 2fr)", gap: "10px" }}>
            {avatars.map((avatar, index) => (
              <Link key={index} onClick={() => handleImageSelect(index)}>
                <img key={index}
                  src={avatar.image}
                  alt={avatar.name}
                  className={`avatarImage ${selectedAvatarIndex === index ? "selected" : ""}`}
                  onClick={() => handleImageSelect(index)} style={{ width: "100%", height: "100%", margin: "auto", borderRadius: "20%" }} />
              </Link>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleCloseModal('modalAvatar')}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default NavbarLite;