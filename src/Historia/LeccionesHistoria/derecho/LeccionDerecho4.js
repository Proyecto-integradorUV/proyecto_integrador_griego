import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import derecho1 from "./images/derecho1.jpg";
import derecho2 from "./images/derecho2.jpg";
import derecho3 from "./images/derecho3.jpg";
import derecho4 from "./images/derecho4.jpg";
import derecho5 from "./images/derecho5.jpg";
import derecho6 from "./images/derecho6.jpg";
import derechos from "../../../style/titulos/derechos.png";
import anterior from "../../../style/botones/anterior.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navbar2";
import quiz from "../../../style/botones/quiz.png";

const LeccionDerecho4 = () => {
  //almacenar modals por nombres
  const [modals, setModals] = useState({
    modal1: false,
    modal2: false,
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
    <div className="contenedorHistoria">
      <NavbarPrincipal />
      <div class="titulo-empezar">
        <img src={derechos} class="img-fluid" alt="Imagen" />
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
                        src={derecho1}
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
                        src={derecho2}
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
                        src={derecho3}
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
                        src={derecho4}
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
                        src={derecho5}
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
                        src={derecho6}
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
                <Card style={{ width: "400", height: "300px" }}>
                  <Card.Body>
                    <Card.Title>
                      Lección 4: La lucha por la independencia y la formación del estado moderno
                    </Card.Title>
                    <Card.Text>
                      Movimiento de independencia griego y su influencia en el
                      desarrollo de los derechos
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Derecho/Leccion4">
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
                            Movimiento de independencia griego y su influencia
                            en el desarrollo de los derechos.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>
                            <img
                              src={derecho1}
                              alt="Imagen"
                              style={{
                                width: "50%",
                                height: "50%",
                                display: "block",
                                margin: "auto",
                              }}
                            />
                            <br />
                            El movimiento de independencia griego tuvo varias
                            consecuencias importantes para el desarrollo de los
                            derechos en Grecia:
                            <br />
                            <br />
                            Reconocimiento de la soberanía nacional: El objetivo
                            central del movimiento de independencia era
                            establecer un estado griego independiente y
                            soberano. Esto significaba el reconocimiento de la
                            soberanía nacional y la autodeterminación del pueblo
                            griego. Este principio sentó las bases para el
                            desarrollo de una concepción de ciudadanía y
                            derechos basados en la pertenencia a una nación
                            griega unificada.
                            <br />
                            <br />
                            Influencia de las ideas ilustradas y
                            revolucionarias: El movimiento de independencia
                            griego fue influenciado por las ideas ilustradas y
                            revolucionarias de la época. Los ideales de
                            igualdad, libertad y derechos humanos que surgieron
                            de la Ilustración y la Revolución Francesa tuvieron
                            un impacto en los líderes y participantes del
                            movimiento. Estas ideas se reflejaron en la lucha
                            por la independencia y en el deseo de establecer un
                            sistema político y legal basado en principios
                            democráticos.
                            <br />
                            <br />
                            Constitución de 1822: Tras la declaración de
                            independencia griega en 1822, se redactó una
                            Constitución que estableció los derechos y
                            libertades fundamentales de los ciudadanos griegos.
                            Esta Constitución garantizaba derechos como la
                            libertad de expresión, de religión, de prensa, así
                            como el derecho a la propiedad y a un juicio justo.
                            Aunque esta Constitución fue revisada y modificada a
                            lo largo del tiempo, sentó las bases para el
                            desarrollo de los derechos en Grecia.
                            <br />
                            <br />
                            Influencia en la lucha por la independencia de otros
                            países: El movimiento de independencia griego tuvo
                            un impacto más allá de las fronteras de Grecia.
                            Inspiró a otros pueblos y movimientos de liberación
                            en Europa y en otras partes del mundo que luchaban
                            por su independencia y por el reconocimiento de sus
                            derechos. La lucha de los griegos por la libertad y
                            la autodeterminación se convirtió en un símbolo de
                            resistencia y solidaridad en la lucha contra la
                            opresión.
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
                      Lección 4: La lucha por la independencia y la formación del estado moderno
                    </Card.Title>
                    <Card.Text>
                      La primera constitución de Grecia y los derechos
                      establecidos en ella.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Derecho/Leccion4">
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
                            La primera constitución de Grecia y los derechos
                            establecidos en ella.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>
                            La primera Constitución de Grecia, conocida como la
                            "Constitución de Epidauro", fue promulgada en enero
                            de 1822 durante la Guerra de Independencia griega
                            contra el Imperio Otomano. Aunque tuvo una vigencia
                            limitada y fue modificada en varias ocasiones, sentó
                            las bases para el desarrollo posterior de los
                            derechos y las instituciones democráticas en Grecia.
                            A continuación se presentan algunos de los derechos
                            establecidos en esta primera Constitución:
                            <br />
                            <br />
                            Igualdad ante la ley: La Constitución de Epidauro
                            establecía la igualdad de todos los ciudadanos ante
                            la ley, sin distinción de origen, religión o estatus
                            social.
                            <br />
                            <br />
                            Libertad de expresión y prensa: Reconocía la
                            libertad de expresión y de prensa como derechos
                            fundamentales. Los ciudadanos tenían la libertad de
                            expresar sus opiniones y difundir información sin
                            temor a la censura o la represión.
                            <br />
                            <br />
                            Libertad de religión: Garantizaba la libertad de
                            religión, permitiendo a los ciudadanos practicar su
                            fe y profesar cualquier religión sin persecución o
                            discriminación.
                            <br />
                            <br />
                            Derecho a la propiedad: Establecía el derecho a la
                            propiedad privada y la protección de los bienes
                            individuales. Los ciudadanos tenían el derecho de
                            poseer y disfrutar de sus propiedades sin
                            interferencia indebida.
                            <br />
                            <br />
                            Derecho a un juicio justo: Aseguraba el derecho a un
                            juicio justo y la protección contra detenciones
                            arbitrarias. Los ciudadanos tenían el derecho de ser
                            juzgados por un tribunal imparcial y contar con las
                            garantías procesales adecuadas.
                            <br />
                            <br />
                            Libertad de movimiento: Reconocía el derecho de los
                            ciudadanos a la libertad de movimiento dentro del
                            territorio griego, sin restricciones injustificadas.
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
          </Carousel>
        </div>
      </div>
      <div class="botones-lecciones">
        <Link to="/Temas/Derecho/Leccion3">
          <img src={anterior} class="img-fluid" alt="Imagen" />
        </Link>
        <Link to="/Temas/Derecho/Quiz">
          <img src={quiz} class="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionDerecho4;
