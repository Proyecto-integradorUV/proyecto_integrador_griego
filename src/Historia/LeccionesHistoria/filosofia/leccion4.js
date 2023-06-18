import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lecHistoria from "../../../style/titulos/filosofia.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navbar2";
import anterior from "../../../style/botones/anterior.png";
import imagen1 from "./Images/filo.jpg";
import imagen2 from "./Images/filo2.png";
import imagen3 from "./Images/filo3.webp";
import imagen4 from "./Images/filo4.jpg";
import imagen5 from "./Images/filo5.webp";
import neoplatonismo from "./Images/Neoplatonismo.jpg";
import cosmos from "./Images/cosmos.jpg";

const LeccionFilosofia4 = () => {
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

  return (
    <div className="contenedorHistoria">
      <NavbarPrincipal />
      <div class="titulo-empezar">
        <img src={lecHistoria} class="img-fluid" alt="Imagen" />
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
                    <Card.Title>Leccion4: El período neoplatónico</Card.Title>
                    <Card.Text>
                      Daremos una breve <b>introducción</b> del período
                      neoplatónico
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Filosofia/Leccion4">
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
                            Leccion4: El período neoplatónico
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">Introducción</h2>
                          <br></br>
                          <img
                            src={neoplatonismo}
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
                            También conocido como platonismo tardío, fue una
                            corriente filosófica que se desarrolló durante los
                            siglos III al VI d.C. Su nombre deriva de su
                            relación con la filosofía de Platón, ya que los
                            neoplatónicos se inspiraron y se basaron en las
                            enseñanzas platónicas.
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
                    <Card.Title>Leccion4: El período neoplatónico</Card.Title>
                    <Card.Text>
                      Hablaremos sobre las principales <b>características</b>{" "}
                      del período neoplatónico
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Filosofia/Leccion4">
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
                            Leccion4: El período neoplatónico
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">
                            Características del período neoplatónico
                          </h2>
                          <br></br>
                          <img
                            src={neoplatonismo}
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "40%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "15%",
                              marginBottom: "2%",
                            }}
                          />
                          <p>
                            Algunos aspectos destacados del período neoplatónico
                            son los siguientes:
                          </p>
                          <p>
                            <b>Plotino (205-270 d.C.):</b>
                            Plotino fue el fundador y figura central del
                            neoplatonismo. Sus enseñanzas se recopilaron en las
                            "Enéadas", una serie de tratados filosóficos.
                            Plotino enfatizó la idea de que la realidad última
                            es una entidad suprema e incomprensible llamada Uno
                            o el Bien. Para él, el objetivo de la filosofía era
                            la contemplación y la unión con el Uno a través de
                            un proceso de ascenso intelectual y místico.
                          </p>
                          <br></br>
                          <img
                            src={cosmos}
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "40%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "15%",
                              marginBottom: "2%",
                            }}
                          />
                          <p>
                            <b>Metafísica y cosmología: </b>Los neoplatónicos
                            consideraban que el universo era un sistema
                            jerárquico de emanaciones que procedían del Uno.
                            Estas emanaciones incluían el Nous (intelecto), el
                            Alma Mundial y la materia. El mundo sensible era
                            considerado como una manifestación inferior de la
                            realidad, y el objetivo era ascender a través de la
                            contemplación y la purificación del alma hacia la
                            unión con el Uno.
                          </p>
                          <br></br>
                          <p>
                            <b>Teología y misticismo: </b>
                            El neoplatonismo tenía una fuerte dimensión
                            religiosa y mística. Los neoplatónicos creían en la
                            existencia de un principio divino y consideraban que
                            la unión con lo divino era el propósito último del
                            ser humano. El éxtasis místico y la contemplación
                            extática eran vistos como medios para alcanzar esta
                            unión.
                          </p>
                          <br></br>
                          <p>
                            <b>Influencia y legado: </b>
                            El neoplatonismo tuvo un impacto significativo en la
                            filosofía, la teología y la espiritualidad de la
                            época. Su influencia se extendió más allá del mundo
                            griego y se fusionó con diferentes tradiciones
                            religiosas, como el cristianismo y el gnosticismo.
                            Filósofos cristianos como San Agustín se vieron
                            influenciados por el neoplatonismo y lo integraron
                            en su pensamiento.
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
                <Card style={{ width: "1000px", height: "300px" }}>
                  <Card.Body>
                    <Card.Title>Lección 1</Card.Title>
                    <Card.Text>
                      Descripción de los materiales utilizados en la ropa griega
                      y su simbolismo.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Filosofia/Leccion4">
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
                            Descripción de los materiales utilizados en la ropa
                            griega y su simbolismo.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>dws</p>
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
      <div class="botones-lecciones">
        <Link to="/Temas/Filosofia/Leccion3">
          <img src={anterior} class="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionFilosofia4;
