import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./leccionesSitios.css";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lecSitios from "../../../style/titulos/sitios.png";
import informacion from "../../../style/botones/informacion.png";
import Navbar4 from "../../../components/navbar4";
import inicio from "../../../style/botones/inicio.png";
import imagenModal1 from "./images/delfos.webp";
import imagenModal2 from "./images/TemploApolo.jpg";
import imagenModal3 from "./images/teatroDelfos.gif";
import imagenModal4 from "./images/oraculo.jpg";

const LeccionSitios3 = () => {
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

  // const videoId = 'ioVG56GyvfI'; // ID del video de YouTube que deseas reproducir
  const url1 = "/Temas/SitiosCaracteristicos/Leccion1";
  const url2 = "/Temas/SitiosCaracteristicos/Leccion2";
  const url3 = "/Temas/SitiosCaracteristicos/Leccion3";
  const url4 = "/Temas/SitiosCaracteristicos/Leccion4";
  return (
    <div className="contenedorHistoria">
      <Navbar4
        tituloTema="Sitios caracteristicos"
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
        <img src={lecSitios} className="img-fluid" alt="Imagen" />
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
                        src={imagenModal4}
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
                    <Card.Title>Lección 3: Delfos y el Oráculo</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        3.1
                      </span>{" "}
                      <b>Introducción</b> a Delfos y su importancia como centro
                      religioso y oracular en la antigua Grecia
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/SitiosCaracteristicos/Leccion3">
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
                            3.1 Introducción a Delfos y su importancia como
                            centro religioso y oracular en la antigua Grecia
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Introducción</h2>
                          <p>
                            Delfos es un sitio arqueológico ubicado en la ladera
                            sur del monte Parnaso, en Grecia. Durante la
                            antigüedad, fue uno de los lugares más importantes y
                            sagrados de la civilización griega. Se creía que en
                            Delfos residía el oráculo de Apolo, dios de la
                            profecía, la música y la luz. La importancia de
                            Delfos radicaba en su conexión con el mundo divino y
                            su papel como centro religioso y oracular.
                          </p>
                          <img
                            src={imagenModal1}
                            className="img-fluid center"
                            alt="Imagen"
                            style={{
                              width: "50%",
                              height: "50%",
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
                    <Card.Title>Lección 3: Delfos y el Oráculo</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        3.2
                      </span>{" "}
                      <b>Exploración</b> de los restos arqueológicos en Delfos,
                      como el Templo de Apolo y el Teatro
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/SitiosCaracteristicos/Leccion3">
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
                            3.2 Exploración de los restos arqueológicos en
                            Delfos, como el Templo de Apolo y el Teatro
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Restos arqueológicos</h2>
                          <p>
                            Al explorar los restos arqueológicos de Delfos, los
                            visitantes pueden maravillarse con el Templo de
                            Apolo, que era el principal santuario del sitio. El
                            templo fue construido en honor a Apolo y se
                            caracteriza por su elegante estilo arquitectónico
                            dórico. Aunque en su mayoría se encuentra en ruinas,
                            aún se pueden apreciar los cimientos y algunas
                            columnas, lo que permite imaginar su grandeza
                            original.
                          </p>
                          <img
                            src={imagenModal2}
                            className="img-fluid center"
                            alt="Imagen"
                            style={{
                              width: "50%",
                              height: "50%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                          <p>
                            Otro destacado es el Teatro de Delfos, que se
                            encuentra en una posición privilegiada con vistas al
                            valle. Este antiguo teatro al aire libre fue
                            escenario de festivales y eventos culturales, y su
                            construcción aprovecha la pendiente natural del
                            terreno. Aún se pueden apreciar las gradas y el
                            escenario, que brindan una idea de la experiencia
                            teatral en la antigua Grecia.
                          </p>
                          <img
                            src={imagenModal3}
                            className="img-fluid center"
                            alt="Imagen"
                            style={{
                              width: "50%",
                              height: "50%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
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
                    <Card.Title>Lección 3: Delfos y el Oráculo</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        3.3
                      </span>{" "}
                      <b>Explicación</b> del papel del oráculo de Delfos en la
                      toma de decisiones políticas y religiosas en la antigüedad
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/SitiosCaracteristicos/Leccion3">
                        <img
                          onClick={() => handleOpenModal("modal3")}
                          src={informacion}
                          alt="Imagen"
                        />
                      </Link>
                    </div>
                    <div>
                      <Modal
                        show={modals.modal3}
                        onHide={() => handleCloseModal("modal3")}
                        scrollable={true}
                        size="lg"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            3.3 Explicación del papel del oráculo de Delfos en
                            la toma de decisiones políticas y religiosas en la
                            antigüedad
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Oráculo</h2>
                          <p>
                            El oráculo de Delfos desempeñó un papel fundamental
                            en la toma de decisiones políticas y religiosas en
                            la antigua Grecia. Se creía que las sacerdotisas,
                            conocidas como pitonisas, eran capaces de
                            comunicarse con Apolo y recibir sus respuestas y
                            profecías. Tanto líderes políticos como individuos
                            comunes buscaban las respuestas del oráculo antes de
                            tomar decisiones importantes, como la declaración de
                            guerras, la fundación de colonias o la elección de
                            líderes.
                          </p>
                          <p>
                            Las respuestas del oráculo eran enigmáticas y se
                            presentaban en forma de versos ambiguos que
                            requerían interpretación. El papel de los sacerdotes
                            y sacerdotisas en la interpretación de estas
                            respuestas era fundamental. Sus palabras tenían un
                            gran impacto en la toma de decisiones y en la
                            formación de políticas en la antigua Grecia.
                          </p>
                          <p>
                            La influencia del oráculo de Delfos se extendió más
                            allá de la política, ya que también desempeñaba un
                            papel importante en la esfera religiosa. Muchos
                            peregrinos acudían a Delfos en busca de guía
                            espiritual y consejo divino en asuntos personales y
                            religiosos.
                          </p>
                          <img
                            src={imagenModal4}
                            className="img-fluid center"
                            alt="Imagen"
                            style={{
                              width: "50%",
                              height: "50%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                          {/* <YouTube videoId={videoId} opts={{ width: '100%', height: '100%' }} /> */}
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => handleCloseModal("modal3")}
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
        <Link to="/Temas/SitiosCaracteristicos">
          <img src={inicio} className="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionSitios3;
