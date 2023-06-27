import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import literatura1 from "./images/literatura1.jpg";
import literatura2 from "./images/literatura2.jpg";
import literatura3 from "./images/literatura3.jpg";
import literatura4 from "./images/literatura4.jpg";
import literatura5 from "./images/literatura5.jpg";
import literatura6 from "./images/literatura6.jpg";
import literatura9 from "./images/literatura9.jpeg";
import literatura10 from "./images/literatura10.jpg";
import literatura12 from "./images/literatura12.jpg";
import literatura from "../../../style/titulos/literatura.png";
import inicio from "../../../style/botones/inicio.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarLite from "../../../components/navLite";
import quiz from "../../../style/botones/quiz.png";

const LeccionLiteratura2 = () => {
  //almacenar modals por nombres
  const [modals, setModals] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
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

  return (
    <div className="contenedorArte">
      <NavbarLite />
      <div class="titulo-empezar">
        <img src={literatura} class="img-fluid" alt="Imagen" />
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
                <Card style={{ width: "400px", height: "300px" }}>
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
                        src={literatura2}
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
                <Card style={{ width: "400px", height: "300px" }}>
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
                        src={literatura1}
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
                <Card style={{ width: "400px", height: "300px" }}>
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
                        src={literatura3}
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
                <Card style={{ width: "400px", height: "300px" }}>
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
                        src={literatura4}
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
                <Card style={{ width: "400px", height: "300px" }}>
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
                        src={literatura5}
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
                <Card style={{ width: "400px", height: "300px" }}>
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
                        src={literatura6}
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
                <Card style={{ width: "400px", height: "300px" }}>
                  <Card.Body>
                    <Card.Title>
                      Lección 2: Generos literarios en la antigua grecia (épica)
                    </Card.Title>
                    <Card.Text>
                    <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                      2.1
                    </span>{" "}
                      Breve introducción a la poesía épica</Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Literatura/Leccion2">
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
                            Poesía épica en la antigua grecia.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <h2 class="text-center">
                          <b>2.1 </b>Poesía épica
                        </h2>
                          <img
                            src={literatura2}
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "40%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                          <br />
                          <p>
                            La poesía épica es uno de los géneros más antiguos
                            de la literatura griega y está representada por
                            obras como la "Ilíada" y la "Odisea" de Homero.
                            Estos poemas épicos narran las hazañas de héroes y
                            dioses en la Guerra de Troya y las aventuras de
                            Odiseo en su viaje de regreso a casa.
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
                <Card style={{ width: "400px", height: "300px" }}>
                  <Card.Body>
                    <Card.Title>
                      Lección 2: Generos literarios en la antigua grecia
                      (tragedia)
                    </Card.Title>
                    <Card.Text>
                    <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                      2.2
                    </span>{" "}
                      Breve introducción a la tragedia
                      </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Literatura/Leccion2">
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
                            Tragedia en la antigua grecia.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <h2 class="text-center">
                          <b>2.2 </b>Tragedia
                        </h2>
                          <img
                            src={literatura9}
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "40%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                          <br />
                          <p>
                            El teatro griego antiguo fue una forma de expresión
                            artística y cultural muy importante. Los dramaturgos
                            trágicos como Esquilo, Sófocles y Eurípides
                            escribieron obras que exploraban temas como el
                            destino, el honor, el poder y los dilemas éticos.
                            Obras famosas incluyen "Los persas", "Edipo Rey" y
                            "Medea".
                          </p>
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
                <Card style={{ width: "400px", height: "300px" }}>
                  <Card.Body>
                    <Card.Title>
                      Lección 2: Generos literarios en la antigua grecia
                      (comedia)
                    </Card.Title>
                    <Card.Text>
                    <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                      2.3
                    </span>{" "}
                      Breve introducción a la comedia
                      </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Literatura/Leccion2">
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
                            Comedia en la antigua grecia.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <h2 class="text-center">
                          <b>2.3 </b>Comedia
                        </h2>
                          <img
                            src={literatura10}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "20%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                          <br />
                          <p>
                            {" "}
                            La comedia griega, representada principalmente por
                            las obras de Aristófanes, satirizaba y se burlaba de
                            los aspectos de la sociedad y la política griega.
                            Sus comedias, como "Las avispas" y "Lisístrata",
                            eran ingeniosas y divertidas, y a menudo presentaban
                            críticas sociales y políticas.
                          </p>
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
                <Card style={{ width: "400px", height: "300px" }}>
                  <Card.Body>
                    <Card.Title>
                      Lección 2: Generos literarios en la antigua grecia
                      (filosofía)
                    </Card.Title>
                    <Card.Text>
                    <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                      2.4
                    </span>{" "}
                      Breve introducción a la filosofía
                      </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Literatura/Leccion2">
                        <img
                          onClick={() => handleOpenModal("modal4")}
                          src={informacion}
                          alt="Imagen"
                        />
                      </Link>
                    </div>
                    <div>
                      <Modal
                        show={modals.modal4}
                        onHide={() => handleCloseModal("modal4")}
                        scrollable={true}
                        size="lg"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            Filosofía en la antigua grecia.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <h2 class="text-center">
                          <b>2.4 </b>Filosofía
                        </h2>
                          <img
                            src={literatura3}
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "40%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                          <br />
                          <p>
                            La filosofía griega, desarrollada por filósofos como
                            Sócrates, Platón y Aristóteles, influyó en gran
                            medida en la literatura y el pensamiento griego. Sus
                            escritos filosóficos abordaban temas como la ética,
                            la metafísica, la política y la epistemología. Las
                            obras de Platón, como los diálogos socráticos, y las
                            de Aristóteles, como "La política" y "Ética a
                            Nicómaco", siguen siendo relevantes en el campo de
                            la filosofía.
                          </p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => handleCloseModal("modal4")}
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
                <Card style={{ width: "400px", height: "300px" }}>
                  <Card.Body>
                    <Card.Title>
                      Lección 2: Generos literarios en la antigua grecia
                      (historia)
                    </Card.Title>
                    <Card.Text>
                    <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                      2.5
                    </span>{" "}
                      Breve introducción a la historia
                      </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Literatura/Leccion2">
                        <img
                          onClick={() => handleOpenModal("modal5")}
                          src={informacion}
                          alt="Imagen"
                        />
                      </Link>
                    </div>
                    <div>
                      <Modal
                        show={modals.modal5}
                        onHide={() => handleCloseModal("modal5")}
                        scrollable={true}
                        size="lg"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            Historia en la antigua grecia.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <h2 class="text-center">
                          <b>2.5 </b>Historia
                        </h2>
                          <img
                            src={literatura5}
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "40%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                          <br />
                          <p>
                            Los historiadores griegos, como Heródoto y
                            Tucídides, escribieron relatos detallados de eventos
                            históricos. Heródoto, conocido como el "Padre de la
                            Historia", escribió sobre las Guerras Médicas,
                            mientras que Tucídides se centró en la Guerra del
                            Peloponeso. Sus obras proporcionan valiosos
                            registros históricos y analizan causas y
                            consecuencias.
                          </p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => handleCloseModal("modal5")}
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
                <Card style={{ width: "400px", height: "300px" }}>
                  <Card.Body>
                    <Card.Title>
                      Lección 2: Generos literarios en la antigua grecia
                      (lirica)
                    </Card.Title>
                    <Card.Text>
                    <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                      2.6
                    </span>{" "}
                      Breve introducción a la lirica
                      </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Literatura/Leccion2">
                        <img
                          onClick={() => handleOpenModal("modal6")}
                          src={informacion}
                          alt="Imagen"
                        />
                      </Link>
                    </div>
                    <div>
                      <Modal
                        show={modals.modal6}
                        onHide={() => handleCloseModal("modal6")}
                        scrollable={true}
                        size="lg"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            Poesía lírica en la antigua grecia.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <h2 class="text-center">
                          <b>2.6 </b>Poesía lírica
                        </h2>
                          <img
                            src={literatura12}
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "40%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                          <br />
                          <p>
                            La poesía lírica griega incluye obras de poetas como
                            Safo, Píndaro y Anacreonte. Estos poemas líricos
                            expresan emociones personales, exploran temas como
                            el amor, la belleza y la naturaleza, y emplean
                            formas poéticas y estilos diversos.
                          </p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => handleCloseModal("modal6")}
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
        <Link to="/Temas/Literatura">
          <img src={inicio} class="img-fluid" alt="Imagen" />
        </Link>
        <Link to="/Temas/Literatura/Quiz">
          <img src={quiz} class="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionLiteratura2;
