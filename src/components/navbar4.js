import React, { useContext, useState } from "react";
import { Button, Modal, Dropdown } from "react-bootstrap";
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

const Navbar4 = (props) => {
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
  });

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

  // const handleImageSelect = (imageUrl) => {
  //   setSelectedImage(imageUrl);
  //   handleCloseModal('modal');
  // };

  //imagen seleccionada
  const [setSelectedImage] = useState(default_photo);

  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(-1);

  const [setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    avatar: "default_photo",
    errors: {},
  });

  // const handleChange = (e) => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

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

  const { isLogged, setIsLogged } = useContext(SignInContext);

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
                <Link>
                  <img
                    onClick={() => handleOpenModal("modal")}
                    src={getAvatar()}
                    alt="Imagen"
                    className="userImage"
                  />
                </Link>
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
                <Dropdown.Item onClick={() => handleOpenModal("modal")}>
                  Cambiar avatar
                </Dropdown.Item>
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
                        <Link
                          key={index}
                          onClick={() => handleImageSelect(index)}
                        >
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
                    <h5>{props.tituloTema}</h5>
                    <ul>
                      <li>
                        <a href={props.url1}>{props.tituloLeccion1}</a>
                      </li>
                      <li>
                        <a href={props.url2}>{props.tituloLeccion2}</a>
                      </li>
                      <li>
                        <a href={props.url3}>{props.tituloLeccion3}</a>
                      </li>
                      <li>
                        <a href={props.url4}>{props.tituloLeccion4}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar4;
