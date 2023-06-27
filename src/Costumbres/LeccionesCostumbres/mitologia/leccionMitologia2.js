import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lecMitologia from "../../../style/titulos/mitologia.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navMito";
import ImagenCaoursel from "./componenteimagenes";
import zeus from "./imagesLec1/zeus.png";
import hera from "./imagesLec1/hera.png";
import atenea from "./imagesLec1/atenea.png";
import poseidon from "./imagesLec1/poseidon.png";
import artemis from "./imagesLec1/artemis.png";
import afrodita from "./imagesLec1/afrodita.png";
import hermes from "./imagesLec1/hermes.png";
import demetri from "./imagesLec1/otra.png";
import ares from "./imagesLec1/ares.png";
import apolo from "./imagesLec1/apolo.png";
import gordo from "./imagesLec1/el.png";
import hades from "./imagesLec1/hades.png";
import inicio from "../../../style/botones/inicio.png";

const LeccionMitologia2 = () => {
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
                    <ImagenCaoursel imagen="zeus" />
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
                    <ImagenCaoursel imagen="hera" />
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
                    <ImagenCaoursel imagen="hades" />
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
                    <ImagenCaoursel imagen="atenea" />
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
                    <ImagenCaoursel imagen="poseidon" />
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
                    <ImagenCaoursel imagen="afrodita" />
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
                    <ImagenCaoursel imagen="hermes" />
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
                    <ImagenCaoursel imagen="ares" />
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
                    <ImagenCaoursel imagen="apolo" />
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
                    <ImagenCaoursel imagen="artemis" />
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
                    <ImagenCaoursel imagen="el" />
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
                    <ImagenCaoursel imagen="otra" />
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
                    <br></br>
                    <Card.Title>Lección 2: Más sobre Dioses</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        2.1
                      </span>{" "}
                      Conoce mas de los 6 principales dioses que hay en la
                      mitología griega
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Mitologia/Leccion2">
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
                            2.1 Introducción la edad de los dioses y los
                            humanos.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">
                            Dioses importantes de la mitología griega
                          </h2>
                          <br></br>
                          <img
                            src={zeus}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "40%",
                            }}
                          />
                          <br></br>
                          <p>
                            Zeus: Es el rey de los dioses y el dios del cielo y
                            el trueno. Se le representa como un hombre barbudo
                            con un rayo en la mano. Es conocido por su autoridad
                            y poder sobre los demás dioses.
                          </p>
                          <br></br>
                          <img
                            src={hera}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "40%",
                            }}
                          />
                          <br></br>
                          <p>
                            Hera: Es la esposa de Zeus y la diosa del matrimonio
                            y la familia. Se le representa como una mujer
                            majestuosa y poderosa. A menudo se muestra celosa y
                            vengativa hacia las amantes y los hijos ilegítimos
                            de Zeus.
                          </p>
                          <br></br>
                          <img
                            src={afrodita}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "25%",
                            }}
                          />
                          <br></br>
                          <p>
                            Afrodita: Es la diosa del amor, la belleza y la
                            sexualidad. Se le representa como una mujer hermosa
                            y seductora. Se cree que su influencia provoca
                            pasiones y deseos románticos en los dioses y
                            mortales por igual.
                          </p>
                          <br></br>
                          <img
                            src={poseidon}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "25%",
                            }}
                          />
                          <br></br>
                          <p>
                            Poseidon: Poseidón es conocido como el dios del mar
                            y los terremotos. Es hijo de Cronos y Rea, y hermano
                            de Zeus y Hades. Poseidón es una figura poderosa y
                            temida, y su dominio se extiende sobre los océanos,
                            mares, ríos y lagos.
                          </p>
                          <br></br>
                          <img
                            src={hades}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "25%",
                            }}
                          />
                          <br></br>
                          <p>
                            Hades: Hades es el gobernante del inframundo, el
                            reino de los muertos. Aunque no forma parte de los
                            doce dioses olímpicos, desempeña un papel crucial en
                            el panteón griego.Tras la Titanomaquia, la guerra
                            entre los titanes y los dioses olímpicos, los tres
                            hermanos (zeus, poseidon y hades) se repartieron el
                            mundo. Zeus obtuvo el cielo, Poseidón los mares y
                            Hades el inframundo.
                          </p>
                          <br></br>
                          <img
                            src={atenea}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "25%",
                            }}
                          />
                          <br></br>
                          <p>
                            Atenea: Es la diosa de la sabiduría, la estrategia
                            militar y las artes. Se le representa como una
                            guerrera con una armadura y un casco. Es conocida
                            por su astucia y sabiduría, y se considera la
                            protectora de Atenas, la ciudad que lleva su nombre.
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
                    <br></br>
                    <Card.Title>Lección 2: Más sobre Dioses</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        2.2
                      </span>{" "}
                      Abordaremos sobre el resto de historia de los otros 6
                      dioses
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Mitologia/Leccion2">
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
                          <Modal.Title>2.2 Dioses</Modal.Title>
                        </Modal.Header>
                        <h2 class="text-center">
                          Dioses importantes de la mitología griega
                        </h2>
                        <Modal.Body>
                          <br></br>
                          <img
                            src={ares}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "25%",
                            }}
                          />
                          <br></br>
                          <p>
                            Ares: Es el dios de la guerra y la violencia. Se le
                            representa como un guerrero armado con una lanza y
                            un escudo. Aunque es temido por su ferocidad en la
                            batalla, no es muy admirado debido a su carácter
                            violento y sanguinario.
                          </p>
                          <br></br>
                          <img
                            src={apolo}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "30%",
                            }}
                          />
                          <br></br>
                          <p>
                            Apolo: Es el dios de la música, la poesía, la
                            profecía y la medicina. Se le representa como un
                            joven apuesto con un arco y una lira. También es el
                            dios del sol y es adorado por su belleza y
                            habilidades artísticas.
                          </p>
                          <br></br>
                          <img
                            src={artemis}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "35%",
                            }}
                          />
                          <br></br>
                          <p>
                            Artemis: Es la hermana gemela de Apolo y la diosa de
                            la caza y la luna. Se le representa como una
                            cazadora con un arco y flechas. Es protectora de la
                            naturaleza y los animales salvajes, y es conocida
                            por su castidad y feroz independencia.
                          </p>
                          <br></br>
                          <img
                            src={demetri}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "25%",
                            }}
                          />
                          <br></br>
                          <p>
                            Demeter: Es la diosa de la agricultura y las
                            cosechas. Se le atribuye la responsabilidad de la
                            fertilidad de la tierra y la abundancia de los
                            cultivos. Está asociada con la temporada de la
                            primavera y es adorada por los agricultores.
                          </p>
                          <br></br>
                          <img
                            src={gordo}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "25%",
                            }}
                          />
                          <br></br>
                          <p>
                            Dionisio: Es el dios del vino, la fiesta y la
                            fertilidad. Se le representa como un hombre joven
                            con una copa de vino en la mano. Es adorado por su
                            capacidad para inducir el éxtasis y el disfrute, y
                            se le considera el patrón de los festivales y las
                            celebraciones.
                          </p>
                          <br></br>
                          <img
                            src={hermes}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "25%",
                            }}
                          />
                          <br></br>
                          <p>
                            Hermes: Es el mensajero de los dioses y el dios del
                            comercio, los viajes y los ladrones. Se le
                            representa como un joven ágil con alas en sus
                            sandalias. Es conocido por su astucia y rapidez, y
                            es adorado por los comerciantes y los viajeros.
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
        <Link to="/Temas/Mitologia">
          <img src={inicio} class="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionMitologia2;
