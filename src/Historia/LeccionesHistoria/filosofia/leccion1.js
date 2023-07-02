import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lecHistoria from "../../../style/titulos/filosofia.png";
import informacion from "../../../style/botones/informacion.png";
import Navbar4 from "../../../components/navbar4";
import imagen1 from "./Images/filo.jpg";
import imagen2 from "./Images/filo2.png";
import imagen3 from "./Images/filo3.webp";
import imagen4 from "./Images/filo4.jpg";
import imagen5 from "./Images/filo5.webp";
import inicio from "../../../style/botones/inicio.png";
import escuela from "./Images/escuelapreo.png";
const LeccionFilosofia1 = () => {
  const [modals, setModals] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
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

  const url1 = "/Temas/Filosofia/Leccion1";
  const url2 = "/Temas/Filosofia/Leccion2";
  const url3 = "/Temas/Filosofia/Leccion3";
  const url4 = "/Temas/Filosofia/Leccion4";

  // const videoId = 'ioVG56GyvfI'; // ID del video de YouTube que deseas reproducir

  return (
    <div className="contenedorHistoria">
      <Navbar4
        tituloTema="Filosofía"
        url1={url1}
        tituloLeccion1="Leccion1"
        url2={url2}
        tituloLeccion2="Leccion2"
        url3={url3}
        tituloLeccion3="Leccion3"
        url4={url4}
        tituloLeccion4="Leccion4"
      />
      <div className="titulo-empezar">
        <img src={lecHistoria} className="img-fluid" alt="Imagen" />
      </div>
      <div className="row align-items-center" style={{ marginTop: "0px" }}>
        <div className="col-sm-5 col-md-6 ">
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
                        src={imagen1}
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
                        src={imagen2}
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
                        src={imagen3}
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
                        src={imagen4}
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
                        src={imagen5}
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
            controls={true}
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
                    <Card.Title>Lección 1: Período presocrático</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.1
                      </span>{" "}
                      Hablaremos sobre la <b>introducción </b> al periodo
                      presocrático
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Filosofia/Leccion1">
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
                            1.1 Introducción al periodo presocrático
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Introducción</h2>
                          <p>
                            El período presocrático, también conocido como
                            período prefilosófico, abarca desde el siglo VI a.C.
                            hasta mediados del siglo V a.C. Fue una etapa
                            importante en el desarrollo de la filosofía griega,
                            ya que sentó las bases para la posterior filosofía
                            clásica. Durante este período, los filósofos
                            presocráticos se centraron principalmente en la
                            explicación racional y naturalista del mundo, en
                            contraste con las explicaciones míticas y religiosas
                            prevalecientes en la época. Su objetivo era
                            comprender la naturaleza fundamental del universo y
                            los principios que lo gobiernan.
                          </p>
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
                    <Card.Title>Lección 1: Período presocrático</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.2
                      </span>{" "}
                      Hablaremos sobre algunas <b>escuelas </b> de este periodo
                      presocrático
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Filosofia/Leccion1">
                        <img
                          onClick={() => handleOpenModal("modal2")}
                          src={informacion}
                          alt="Imagen"
                        />
                      </Link>
                    </div>
                    <div>
                      <Modal
                        show={modals.modal2}
                        onHide={() => handleCloseModal("modal2")}
                        scrollable={true}
                        size="lg"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            1.2 Escuelas del periodo presocrático
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Escuelas</h2>
                          <p>
                            Los filósofos presocráticos plantearon una variedad
                            de teorías y enfoques, pero algunas de las escuelas
                            y figuras más destacadas incluyen:
                          </p>
                          <img
                            src={escuela}
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "40%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "15%",
                            }}
                          />
                          <br></br>
                          <p>
                            <b>Escuela jónica: </b>
                            Tales de Mileto, Anaximandro y Anaxímenes,
                            originarios de Mileto, propusieron explicaciones
                            naturales para los fenómenos del mundo. Tales
                            argumentaba que el agua era el principio básico de
                            todas las cosas, Anaximandro postulaba la existencia
                            de un principio indeterminado llamado "ápeiron", y
                            Anaxímenes sostenía que el aire era el elemento
                            fundamental.
                          </p>
                          <br></br>
                          <p>
                            <b>Heráclito: </b>
                            Considerado uno de los filósofos más influyentes del
                            período, Heráclito enfatizó el cambio constante y el
                            flujo como la naturaleza fundamental del universo.
                            Propuso la noción del "logos" como el principio
                            organizador que subyace en el cambio.
                          </p>
                          <br></br>
                          <p>
                            <b>Empédocles: </b>
                            Este filósofo propuso que la realidad está compuesta
                            por cuatro elementos básicos: tierra, aire, fuego y
                            agua. Estos elementos se combinan y se separan
                            mediante dos fuerzas opuestas: el amor (atracción) y
                            el odio (repulsión).
                          </p>
                          <br></br>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => handleCloseModal("modal2")}
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
      <div className="botones-lecciones">
        <Link to="/Temas/Filosofia">
          <img src={inicio} className="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionFilosofia1;
