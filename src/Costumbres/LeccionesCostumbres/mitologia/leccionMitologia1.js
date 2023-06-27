import "../../../style/css/styleEmpezar.css";
import "../mitologia/lecciones.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lecMitologia from "../../../style/titulos/mitologia.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navMito";
import mitologia from "./imagesLec1/fondo.jpg";
import dioses from "./imagesLec1/dioses2.jpg";
import dragones from "./imagesLec1/dragones.jpg";
import origen from "./imagesLec1/origen.webp";
import dios1 from "./imagesLec1/zeus.png";
import dios5 from "./imagesLec1/atenea.png";
import dios6 from "./imagesLec1/afrodita.png";
import siguiente from "../../../style/botones/siguiente.png";
import diosesHumanos from "./imagesLec1/diosesHumanos.jpeg";

const LeccionMitologia1 = () => {
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

  return (
    <div className="contenedorLeccionesMito">
      <NavbarPrincipal />
      <div class="titulo-empezar">
        <img src={lecMitologia} class="img-fluid" alt="Imagen" />
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
                        src={mitologia}
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
                        src={dioses}
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
                        src={dragones}
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
                        src={origen}
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
                    <Card.Title>
                      Lección 1: Periodos de la mitologia Griega.
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.1
                      </span>{" "}
                      Abordaremos sobre el porqué de la existencia de los
                      objetos o seres vivos y el origen de los primeros Dioses.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Mitologia/Leccion1">
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
                            Los mitos de origen y nacimiento de los dioses.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">El principio del mundo</h2>
                          <p>
                            La edad de los Dioses es el nombre que recibe la
                            primera etapa de la mitología griega, a la que
                            pertenecen las historias y mitos cosmogónicos, sobre
                            cómo fue creado el mundo, el surgimiento de los
                            primeros dioses y los seres humanos.
                          </p>
                          <br></br>
                          <p>
                            <em>
                              “Del Caos surgió Gea, la Madre Tierra, el espacio
                              fértil y seguro para los seres vivientes, el
                              Tártaro, el mundo espectral y Eros, la fuerza
                              vital del amor. Luego surgieron las tinieblas
                              (Erebos) y la noche (Nix). De la unión entre la
                              noche y las tinieblas nacen la luz celeste y el
                              día (Éter y Hemera). Gea engendró al cielo (Urano)
                              y de su unión surgieron otros dioses que
                              completaron la primera dinastía celestial, como
                              los Titanes y las Titánides, entre los que figuran
                              Cronos y Rea. Estos serán los padres de la segunda
                              dinastía que será encabezada por Zeus, quien
                              derrocará a su propio padre por devorar a sus
                              hermanos.” (fragmento)
                            </em>
                          </p>
                          <br></br>
                          <img
                            src={dios1}
                            alt="Imagen"
                            style={{
                              width: "25%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "40%",
                            }}
                          />
                          <br></br>
                          <p>
                            La generación de los dioses olímpicos, encabezada
                            por Zeus, Hera, Poseidón, Hades y otros, es el
                            resultado de la unión entre Cronos (el titán) y Rea
                            (la titánide). Cronos, temiendo ser destronado por
                            sus hijos, devoraba a cada uno de ellos al nacer.
                            Sin embargo, Rea logró salvar a Zeus dándole a
                            Cronos una piedra envuelta en pañales para que la
                            devorara, mientras escondía al verdadero Zeus en
                            Creta. Más tarde, Zeus se rebeló contra Cronos, lo
                            derrocó y liberó a sus hermanos, convirtiéndose en
                            el líder de los dioses.
                          </p>
                          <img
                            src={dios5}
                            alt="Imagen"
                            style={{
                              width: "25%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "35%",
                            }}
                          />
                          <br></br>
                          <p>
                            Atenea es una diosa especial, ya que nació
                            directamente de la cabeza de Zeus. Según la leyenda,
                            Zeus sufrió un terrible dolor de cabeza y pidió a
                            Hefesto que le abriera la cabeza con un hacha. De la
                            cabeza de Zeus surgió Atenea, completamente
                            desarrollada y vestida con su armadura.
                          </p>
                          <img
                            src={dios6}
                            alt="Imagen"
                            style={{
                              width: "25%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "25%",
                            }}
                          />
                          <br></br>
                          <p>
                            Nacimiento de Afrodita: Afrodita, la diosa del amor
                            y la belleza, tiene dos versiones sobre su
                            nacimiento. Según una versión, Afrodita fue
                            engendrada por Urano (el cielo) y surgió del mar
                            cuando los genitales de Urano cayeron al agua
                            después de ser castrado por su hijo Cronos. Según
                            otra versión, Afrodita fue hija de Zeus y Dione, una
                            diosa titánide.
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
                    <Card.Title>
                      Lección 1: Periodos de la mitologia Griega
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.2
                      </span>{" "}
                      Se mencionará sobre la "Edad de Oro" o "Edad de
                      Convivencia" entre dioses y humanos.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Mitologia/Leccion1">
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
                          <Modal.Title>La edad de los Dioses</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">
                            La edad de convivencia entre dioses y humanos.
                          </h2>
                          <br></br>
                          <p>
                            En la mitología griega, existió una época conocida
                            como la "Edad de Oro" o "Edad de Convivencia" entre
                            dioses y humanos. Según la tradición, esta fue la
                            primera y más feliz de las eras de la humanidad.
                            Durante este periodo, los dioses olímpicos caminaban
                            libremente por la Tierra y se relacionaban
                            directamente con los seres humanos. En esta epoca
                            los dioses interactuaban con los mortales de manera
                            más cercana. Se dice que los dioses visitaban
                            regularmente a los humanos, compartían
                            conocimientos, brindaban consejos y, a veces,
                            incluso participaban en sus asuntos cotidianos.
                          </p>
                          <br />
                          <img
                            src={diosesHumanos}
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "30%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "5%",
                            }}
                          />
                          <br></br>
                          <p>
                            En este período, la armonía reinaba en la Tierra, no
                            había guerras ni conflictos, y las cosechas eran
                            abundantes. Los seres humanos vivían en paz y
                            prosperidad, sin enfermedades ni preocupaciones.
                            Además, se creía que los humanos no envejecían, no
                            conocían la vejez ni la muerte, sino que, cuando
                            llegaba el momento, se convertían en espíritus
                            benevolentes.
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
                    <br></br>
                    <Card.Title>
                      Lección 1: Periodos de la mitologia Griega
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.3
                      </span>{" "}
                      Hablaremos sobre la tercer periodo el cual es la edad
                      heroica griega.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Mitologia/Leccion1">
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
                            Periodos de la mitología griega
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">La edad heroica griega.</h2>
                          <p>
                            La Edad Heroica es un período en la mitología griega
                            que se considera posterior a la Edad de Oro. La Edad
                            Heroica es considerada un período de transición
                            entre una era más divina y una época histórica más
                            humana. A medida que los héroes cumplían sus
                            destinos y llevaban a cabo sus gestas, su presencia
                            en la Tierra disminuía gradualmente, y los dioses se
                            volvían menos accesibles para los mortales.
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
          </Carousel>
        </div>
      </div>
      <div class="botones-lecciones">
        <Link to="/Temas/Mitologia/Leccion2">
          <img src={siguiente} class="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionMitologia1;
