import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navbar2";
import anterior from "../../../style/botones/anterior.png";
import lecGastronomia from "../../../style/titulos/gastronomia.png";
import siguiente from "../../../style/botones/siguiente.png";
import mariscos from "./images/mariscos.webp";
import parrilla from "./images/parrilla.jpg";
import vino from "./images/vino.png";
import imagen1 from "./images/plato.png";
import imagen2 from "./images/plato2.webp";
import imagen3 from "./images/plato3.jpg";
import imagen4 from "./images/mediterraneo.jpg";
import imagen5 from "./images/gente.jpg";
import imagen6 from "./images/gente2.png";

const LeccionGastronomia3 = () => {
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
    <div className="contenedorLeccionesGastro">
      <NavbarPrincipal />
      <div class="titulo-empezar">
        <img src={lecGastronomia} class="img-fluid" alt="Imagen" />
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
                        src={imagen6}
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
                    <Card.Title>Lección 3: Platos principales</Card.Title>
                    <Card.Text>
                      Hablaremos sobre el vino y ciertas bebidas relacionados a
                      esta civilización.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Gastronomia/Leccion3">
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
                            Lección 3: Platos principales
                          </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                          <h2 class="text-center">Vino y bebidas</h2>
                          <img
                            src={vino}
                            alt="Imagen"
                            style={{
                              width: "25%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "40%",
                            }}
                          />
                          <p>
                            El vino desempeñó un papel importante en la antigua
                            cultura griega. Era considerado una bebida divina y
                            estaba asociado con la celebración de rituales
                            religiosos y festividades. Los griegos cultivaban
                            vides y producían vino en todo el territorio, desde
                            las islas del Egeo hasta la región de Macedonia. En
                            la antigua Grecia, se creían que los dioses tenían
                            su propio vino y Dioniso, el dios del vino, era
                            venerado como una figura central.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Algunas uvas especiales para los vinos:
                          </h2>
                          <p>
                            <b>Agiorgitiko: </b>
                            Esta uva tinta es originaria de la región de Nemea,
                            en el Peloponeso. Produce vinos tintos de cuerpo
                            medio a completo, con sabores a frutas negras
                            maduras y especias.
                          </p>
                          <p>
                            <b> Assyrtiko: </b>
                            Es una uva blanca que se cultiva principalmente en
                            la isla de Santorini. Produce vinos blancos secos y
                            refrescantes, con acidez elevada, notas cítricas y
                            minerales distintivos.
                          </p>
                          <p>
                            <b>Moschofilero: </b>
                            Es una uva blanca que se cultiva en la región de
                            Mantinia, en el Peloponeso. Produce vinos blancos
                            aromáticos y florales, con notas de cítricos y
                            hierbas, y una acidez fresca.
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
                    <Card.Title>Lección 3: Platos principales</Card.Title>
                    <Card.Text>
                      Hablaremos sobre el Souvlaki y otras carnes a la parrilla.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Gastronomia/Leccion3">
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
                            Lección 3: Platos principales
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">
                            Souvlaki y otras carnes a la parrilla.
                          </h2>
                          <img
                            src={parrilla}
                            alt="Imagen"
                            style={{
                              width: "25%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "40%",
                            }}
                          />
                          <p>
                            El souvlaki es uno de los platos principales más
                            populares de la cocina griega, pero hay otras carnes
                            a la parrilla igualmente deliciosas y apreciadas.
                            Aquí tienes algunos ejemplos:
                          </p>
                          <br></br>
                          <p>
                            <b>Souvlaki: </b>
                            El souvlaki es un plato de carne a la parrilla que
                            se prepara con trozos de carne, generalmente de
                            cerdo, pollo o cordero, ensartados en brochetas y
                            asados a la parrilla. El souvlaki se sirve
                            tradicionalmente envuelto en pan de pita, acompañado
                            de tzatziki (salsa de yogur y pepino), tomate y
                            cebolla. Es un plato muy popular y se encuentra en
                            toda Grecia.
                          </p>
                          <p>
                            <b>Gyros: </b>
                            El gyros es similar al souvlaki, pero en lugar de
                            trozos de carne ensartados en brochetas, se utiliza
                            carne de cerdo o pollo marinada y asada en un asador
                            vertical. La carne se corta en finas rebanadas y se
                            sirve en pan de pita con salsa tzatziki, tomate y
                            cebolla. El gyros es una opción popular para llevar
                            y se encuentra en numerosos establecimientos de
                            comida rápida en Grecia.
                          </p>
                          <p>
                            <b>Biftekia: </b>
                            Las biftekia son hamburguesas griegas a la parrilla,
                            hechas con carne picada de res o cordero mezclada
                            con especias, cebolla y hierbas. Las biftekia se
                            sazonan y se cocinan a la parrilla, generalmente se
                            sirven en pan de pita o acompañadas de ensalada
                            griega. Son una opción sabrosa y jugosa para
                            aquellos que prefieren carne molida en lugar de
                            trozos de carne en brochetas.
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
                    <Card.Title>Lección 3: Platos principales</Card.Title>
                    <Card.Text>
                      Hablaremos sobre los platos de pescado y mariscos.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Gastronomia/Leccion3">
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
                            Lección 3: Platos principales
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">
                            Platos de pescado y mariscos
                          </h2>
                          <img
                            src={mariscos}
                            alt="Imagen"
                            style={{
                              width: "25%",
                              height: "25%",
                              display: "block", // Añadimos esta línea para que la imagen sea un bloque
                              margin: "auto",
                              borderRadius: "40%",
                            }}
                          />
                          <p>
                            La cocina griega tiene una gran tradición en platos
                            de pescado y mariscos debido a su ubicación
                            geográfica en el Mediterráneo. Aquí tienes algunos
                            ejemplos de platos principales de pescado y
                            mariscos:
                          </p>
                          <br></br>
                          <p>
                            <b>Psari Plaki: </b>
                            El Psari Plaki es un plato de pescado al horno que
                            se prepara con una variedad de pescados frescos,
                            como el lenguado, la dorada o la lubina. El pescado
                            se cubre con una salsa de tomate, cebolla, ajo,
                            hierbas y aceite de oliva, y se hornea hasta que
                            esté tierno y dorado. Se sirve caliente con una
                            guarnición de patatas o arroz.
                          </p>
                          <p>
                            <b>Calamari: </b>
                            Los calamares son muy populares en la cocina griega.
                            Se pueden preparar de varias formas, como a la
                            parrilla, fritos o rellenos. Los calamares fritos se
                            sirven con rodajas de limón y suelen ser un
                            aperitivo o un plato principal ligero.
                          </p>
                          <p>
                            <b>Kakavia: </b>
                            La kakavia es una sopa de pescado tradicional
                            griega. Se prepara con una variedad de pescados y
                            mariscos, como pescado blanco, langostinos,
                            mejillones y calamares. Se cuece a fuego lento con
                            verduras, hierbas y especias para crear un caldo
                            rico y sabroso.
                          </p>
                          <p>
                            <b>Garides Saganaki: </b>
                            Este plato consiste en camarones o langostinos
                            salteados con tomate, ajo, pimientos, hierbas y
                            queso feta. Se hornea en el horno hasta que el queso
                            se derrita y se dore. Se sirve caliente y se puede
                            disfrutar como plato principal o como aperitivo.
                          </p>
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
        <Link to="/Temas/Gastronomia/Leccion2">
          <img src={anterior} class="img-fluid" alt="Imagen" />
        </Link>
        <Link to="/Temas/Gastronomia/Leccion4">
          <img src={siguiente} class="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionGastronomia3;
