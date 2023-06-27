import "../../../style/css/styleEmpezar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import informacion from "../../../style/botones/informacion.png";
import "./leccionesDeporte.css";
import lecDeporte from "../../../style/titulos/deporte.png";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar4 from "../../../components/navbar4";
import inicio from "../../../style/botones/inicio.png";
import imagenModal1 from "./images/carreraApie.webp";
import imagenModal2 from "./images/carreraHorse.webp";
import imagenModal3 from "./images/salto.webp";

const LeccionDeporte3 = () => {
  const [modals, setModals] = useState({
    modal1: false,
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

  // const videoId = 'ioVG56GyvfI'; // ID del video de YouTube que deseas reproducir
  const url1 = "/Temas/Deporte/Leccion1";
  const url2 = "/Temas/Deporte/Leccion2";
  const url3 = "/Temas/Deporte/Leccion3";
  const url4 = "/Temas/Deporte/Leccion4";

  return (
    <div className="container-leccionDeporte">
      <Navbar4
        tituloTema="Deporte"
        url1={url1}
        tituloLeccion1="Leccion1"
        url2={url2}
        tituloLeccion2="Leccion2"
        url3={url3}
        tituloLeccion3="Leccion3"
        url4={url4}
        tituloLeccion4="Leccion4"
      />
      <div class="titulo-empezar">
        <img src={lecDeporte} class="img-fluid" alt="Imagen" />
      </div>
      <div className="row align-items-center" style={{ marginTop: "0px" }}>
        <div class="col-sm-5 col-md-6 ">
          <Carousel
            interval={2000}
            controls={true}
            indicators={true}
            className="fondo-card"
          >
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Card style={{ width: "800px", height: "300px" }}>
                  <Card.Body
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ maxWidth: "auto", maxHeight: "auto" }}>
                      <img
                        src={imagenModal1}
                        alt="Imagen"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Card style={{ width: "800px", height: "300px" }}>
                  <Card.Body
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ maxWidth: "auto", maxHeight: "auto" }}>
                      <img
                        src={imagenModal2}
                        alt="Imagen"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Card style={{ width: "1000px", height: "300px" }}>
                  <Card.Body
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ maxWidth: "auto", maxHeight: "auto" }}>
                      <img
                        src={imagenModal3}
                        alt="Imagen"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
          <Carousel
            interval={null}
            controls={false}
            indicators={false}
            className="fondo-card"
          >
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Card style={{ width: "1000px", height: "300px" }}>
                  <Card.Body>
                    <br></br>
                    <br></br>
                    <Card.Title>
                      Lección 3: Carreras y competiciones atleticas
                    </Card.Title>
                    <Card.Text>
                      Carreras y <b>competiciones</b> atleticas
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Deporte/Leccion3">
                        <img
                          onClick={() => handleOpenModal("modal1")}
                          src={informacion}
                          alt="Imagen"
                        />
                      </Link>
                    </div>
                    <div>
                      <Modal
                        show={modals.modal1}
                        onHide={() => handleCloseModal("modal1")}
                        scrollable={true}
                        size="lg"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            Carreras y competiciones atleticas
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>
                            Las carreras eran una parte central de la cultura
                            deportiva griega.
                          </p>
                          <p>
                            Las carreras a pie eran muy populares y se llevaban
                            a cabo en distancias cortas, medias y largas.
                          </p>
                          <img
                            src={imagenModal1}
                            class="img-fluid"
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "40%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                          <p>
                            También se realizaban carreras de carros y carreras
                            de caballos.
                          </p>
                          <img
                            src={imagenModal2}
                            class="img-fluid"
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "40%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                          <p>
                            Además de las carreras, se practicaban competiciones
                            de salto, lanzamiento y lucha, entre otras
                            disciplinas.
                          </p>
                          <img
                            src={imagenModal3}
                            class="img-fluid"
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "40%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => handleCloseModal("modal1")}
                          >
                            Cerrar
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div class="botones-lecciones">
        <Link to="/Temas/Deporte">
          <img src={inicio} class="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionDeporte3;
