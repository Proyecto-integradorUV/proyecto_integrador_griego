import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SignInContext } from "../context/signInContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import avatar1 from "./images/Afrodita.png";
import avatar2 from "./images/Apolo.png";
import avatar3 from "./images/Ares.png";
import avatar4 from "./images/Artemisa.png";
import avatar5 from "./images/Atenea.png";
import avatar6 from "./images/Demeter.png";
import avatar7 from "./images/Dioniso.png";
import avatar8 from "./images/Hades.png";
import avatar9 from "./images/Hefesto.png";
import avatar10 from "./images/Hera.png";
import avatar11 from "./images/Hestia.png";
import avatar12 from "./images/Poseidon.png";
import avatar13 from "./images/Zeus.png";
import avatar14 from "./images/Medusa.png";
import defaultPhoto from "./images/default_photo.jpg";

const NavbarPrincipal = () => {  

  //almacenar modals por nombres
  const [modals, setModals] = useState({
    modal: false
  });

  //imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(defaultPhoto);

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

  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
    handleCloseModal('modal');
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

  return (
    <div className="fixed-top">
      <nav className="navbarPrincipal">
        <ul className="navbarList2Principal">
          <li className="navbarItemPrincipal">
            {isLogged && (
              <a href=" " className="navbarLink2Principal navbar-home">
                Hola, &nbsp;{getUsername()}
              </a>
            )}
          </li>
          <li className="navbarItemPrincipal">
            {isLogged && (
              <a
                href="/Home"
                className="navbarLinkPrincipal navbar-home"
                onClick={handleLogout}
              >
                Cerrar sesión
              </a>
            )}
          </li>
          <li className="navbarItemPrincipal">
            {isLogged && (
              <div className="userImageContainer">
                <Link>
                  <img
                    onClick={() => handleOpenModal("modal")}
                    src={selectedImage}
                    alt="Imagen"
                    className="userImage"
                  />
                </Link>
                <div>
                <Modal show={modals.modal} onHide={() => handleCloseModal('modal')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Escoge el avatar deseado :D</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body style={{ display: "grid", gridTemplateColumns: "repeat(7, 2fr)", gap: "10px" }}>
                                        <Link onClick={() => handleImageSelect(avatar1)}><img src={avatar1} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar2)}><img src={avatar2} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar3)}><img src={avatar3} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar4)}><img src={avatar4} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar5)}><img src={avatar5} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar6)}><img src={avatar6} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar7)}><img src={avatar7} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar8)}><img src={avatar8} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar9)}><img src={avatar9} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar10)}><img src={avatar10} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar11)}><img src={avatar11} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar12)}><img src={avatar12} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar13)}><img src={avatar13} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        <Link onClick={() => handleImageSelect(avatar14)}><img src={avatar14} alt="Imagen" style={{width: "100%",height: "100%", margin: "auto", borderRadius: "20%"}}/></Link>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="secondary" onClick={() => handleCloseModal('modal')}>
                                            Cerrar
                                        </Button>
                            </Modal.Footer>
                      </Modal>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
      <nav className="navbar2Principal">
        <ul className="navbarListPrincipal">
          <li className="navbarItemPrincipal">
            <a href="/Principal" className="navbarLinkPrincipal navbar-home">
              Página principal
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href="/Lecciones" className="navbarLinkPrincipal navbar-home ">
              Lecciones
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href="/Temas" className="navbarLinkPrincipal navbar-home">
              Temas
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarPrincipal;