import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Arte1 from "./images/Arte1.jpg";
import Arte2 from "./images/Arte2.jpg";
import Arte3 from "./images/Arte3.jpg";
import Arte4 from "./images/Arte4.jpg";
import Arte5 from "./images/Arte5.jpg";
import Arte6 from "./images/Arte6.png";
import templos from "./images/templos.jpg";
import templo from "./images/templo.jpg";
import teatros from "./images/teatros.jpg";
import arte from "../../../style/titulos/arte.png";
import inicio from "../../../style/botones/inicio.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarArte from "../../../components/navArte";

const LeccionArte2 = () => {
  //almacenar modals por nombres
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
    <div className="contenedorArte">
      <NavbarArte />
      <div class="titulo-empezar">
        <img src={arte} class="img-fluid" alt="Imagen" />
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
                <Card style={{ width: "600px", height: "300px" }}>
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
                        src={Arte2}
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
                <Card style={{ width: "600px", height: "300px" }}>
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
                        src={Arte1}
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
                <Card style={{ width: "600px", height: "300px" }}>
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
                        src={Arte3}
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
                <Card style={{ width: "600px", height: "300px" }}>
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
                        src={Arte4}
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
                <Card style={{ width: "600px", height: "300px" }}>
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
                        src={Arte5}
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
                <Card style={{ width: "600px", height: "300px" }}>
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
                        src={Arte6}
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
                <Card style={{ width: "600px", height: "300px" }}>
                  <Card.Body>
                    <br></br>
                    <Card.Title>Lección 2: Arquitectura griega</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        2.1
                      </span>{" "}
                      Explicación de los elementos arquitectónicos griegos, como
                      el orden dórico, jónico y corintio.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Arte/Leccion2">
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
                            2.1 Explicación de los elementos arquitectónicos
                            griegos, como el orden dórico, jónico y corintio.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">Explicación</h2>
                          <p>
                            La arquitectura griega se caracteriza por la
                            presencia de tres órdenes arquitectónicos
                            principales: el dórico, el jónico y el corintio.
                            Cada uno de estos órdenes tiene características
                            distintivas en cuanto a columnas, capiteles y
                            ornamentación. A continuación, te explicaré cada uno
                            de ellos:
                            <br />
                            <br />
                            <h6>Orden Dórico</h6> El orden dórico es el más
                            antiguo de los tres y se asocia con la arquitectura
                            de la antigua Grecia continental. Las columnas
                            dóricas son robustas y tienen una apariencia simple
                            y pesada. No tienen base, directamente descansan
                            sobre el estilóbato (plataforma) del templo. La
                            columna es estriada y tiene una entasis (ligera
                            hinchazón en el centro para contrarrestar la ilusión
                            óptica). En la parte superior de la columna, el
                            capitel dórico es simple y está formado por una
                            moldura circular llamada equino y un bloque
                            rectangular llamado ábaco. El entablamento dórico se
                            compone de un friso liso, sin esculturas, y un
                            frontón triangular en el frontispicio del templo.
                            <br />
                            <br />
                            <h6>Orden Jónico</h6> El orden jónico es más ligero
                            y decorativo que el dórico. Las columnas jónicas son
                            más delgadas y altas, y tienen una base que les
                            proporciona un mayor soporte visual. El capitel
                            jónico se caracteriza por tener dos volutas en los
                            lados, lo que le da un aspecto más ornamental. El
                            friso jónico generalmente presenta una serie de
                            paneles esculpidos llamados metopas, alternando con
                            tríglifos que tienen tres hendiduras verticales. El
                            frontón también puede estar decorado con esculturas.
                            <br />
                            <br />
                            <h6>Orden Corintio</h6> El orden corintio es el más
                            elaborado y decorativo de los tres. Las columnas
                            corintias son más delgadas que las dóricas y
                            jónicas, y tienen una base similar a las jónicas. El
                            capitel corintio está adornado con hojas de acanto
                            que se despliegan hacia los lados, formando una
                            especie de cesta. Este capitel se considera el rasgo
                            distintivo del orden corintio. El friso corintio
                            puede estar ricamente decorado con esculturas y
                            relieves, y el frontón también puede tener elementos
                            ornamentales.
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
                <Card style={{ width: "600px", height: "300px" }}>
                  <Card.Body>
                    <br></br>
                    <Card.Title>Lección 2: Arquitectura griega</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        2.2
                      </span>{" "}
                      Descripción de los principales tipos de edificios, como
                      los templos y teatros.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Arte/Leccion2">
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
                            2.2 Descripción de los principales tipos de
                            edificios, como los templos y teatros.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">Descripción</h2>
                          <p>
                            La antigua Grecia es conocida por su arquitectura
                            monumental y sus distintos tipos de edificios. A
                            continuación, describiré dos de los principales
                            tipos de edificios griegos: los templos y los
                            teatros.
                            <br />
                            <br />
                            <h6>Templos</h6> Los templos griegos eran
                            estructuras religiosas dedicadas a los dioses y se
                            caracterizaban por su belleza y simetría. Tenían una
                            planta rectangular y estaban elevados sobre una
                            plataforma de varios escalones llamada estilóbato.
                            La parte central del templo era la naos o cella, una
                            sala cerrada que albergaba la estatua de la deidad a
                            la que estaba dedicado. En el exterior, los templos
                            griegos presentaban columnas y frontones. Las
                            columnas se agrupaban en hileras y pertenecían a uno
                            de los tres órdenes arquitectónicos griegos: dórico,
                            jónico o corintio. Los frontones eran triángulos
                            decorativos en la parte frontal y trasera del
                            templo, que podían estar esculpidos con escenas
                            mitológicas. Ejemplos famosos de templos griegos
                            incluyen el Partenón en Atenas y el Templo de Zeus
                            Olímpico en Olimpia.
                          </p>
                          <br />
                          <img
                            src={templo}
                            alt="Imagen"
                            style={{
                              width: "25%",
                              height: "25%",
                              display: "block",
                              margin: "auto",
                              borderRadius: "20%",
                            }}
                          />{" "}
                          <br />
                          <h6>Teatros</h6>{" "}
                          <p>
                            Los teatros griegos eran lugares de actuación y
                            entretenimiento donde se representaban obras de
                            teatro y se realizaban festivales religiosos. Estos
                            teatros al aire libre estaban construidos en laderas
                            de colinas para aprovechar la acústica natural.
                            Tenían una forma semicircular con gradas escalonadas
                            que permitían al público sentarse y tener una buena
                            vista del escenario. El escenario, llamado
                            orchestra, era una plataforma circular donde se
                            llevaban a cabo las actuaciones. Detrás del
                            orchestra se encontraba el edificio escénico,
                            llamado skene, que podía tener varias entradas y
                            servía como telón de fondo para las
                            representaciones. Uno de los teatros griegos más
                            famosos es el Teatro de Epidauro, conocido por su
                            acústica excepcional y su diseño armonioso.
                          </p>
                          <br />
                          <img
                            src={teatros}
                            alt="Imagen"
                            style={{
                              width: "25%",
                              height: "25%",
                              display: "block",
                              margin: "auto",
                              borderRadius: "20%",
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
                <Card style={{ width: "600px", height: "300px" }}>
                  <Card.Body>
                    <br></br>
                    <Card.Title>Lección 2: Arquitectura griega</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        2.3
                      </span>{" "}
                      Ejemplos destacados de la arquitectura griega, como el
                      Partenón.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Arte/Leccion2">
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
                            2.3 Ejemplos destacados de la arquitectura griega,
                            como el Partenón.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">Ejemplos</h2>
                          <p>
                            El Partenón es, sin duda, uno de los ejemplos más
                            destacados de la arquitectura griega. Es un templo
                            ubicado en la Acrópolis de Atenas y se considera una
                            obra maestra del orden dórico. Fue construido entre
                            los años 447 y 432 a.C. durante el apogeo de la
                            civilización griega. Diseñado por los arquitectos
                            Ictinos y Calícrates, y supervisado por el escultor
                            Fidias, el Partenón estaba dedicado a la diosa
                            Atenea Parthenos. El Partenón presenta una planta
                            rectangular con ocho columnas en los extremos cortos
                            y diecisiete columnas en los lados largos. Las
                            columnas dóricas se elevan sobre un estilóbato de
                            tres escalones y están coronadas por capiteles
                            dóricos simples. El friso exterior del Partenón
                            exhibía una procesión de figuras esculpidas que
                            representaban escenas mitológicas y religiosas.
                            Además, el edificio contaba con frontones
                            triangulares decorados con esculturas de mármol. El
                            Partenón ha sido reconocido a lo largo de la
                            historia como un logro arquitectónico y artístico
                            excepcional. A pesar de los daños sufridos a lo
                            largo de los siglos, incluidos los saqueos y los
                            impactos de la guerra, sigue siendo un símbolo
                            icónico de la civilización griega y un importante
                            hito cultural. Otros ejemplos destacados de la
                            arquitectura griega incluyen:
                            <br />
                            <br />
                            El Templo de Zeus Olímpico en Olimpia, uno de los
                            templos más grandes de la antigua Grecia, dedicado
                            al dios Zeus.
                            <br />
                            <br />
                            El Templo de Artemisa en Éfeso, considerado una de
                            las Siete Maravillas del Mundo Antiguo.
                            <br />
                            <br />
                            El Teatro de Epidauro, conocido por su excelente
                            acústica y su diseño armonioso.
                            <br />
                            <br />
                            El Erecteión, un templo en la Acrópolis de Atenas,
                            famoso por su pórtico de Cariátides (columnas con
                            forma de figuras femeninas).
                            <br />
                            <br />
                            El Templo de Apolo en Delfos, uno de los principales
                            santuarios religiosos de la antigua Grecia.
                          </p>
                          <img
                            src={templos}
                            alt="Imagen"
                            style={{
                              width: "80%",
                              height: "80%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
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
        <Link to="/Temas/Arte">
          <img src={inicio} class="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionArte2;
