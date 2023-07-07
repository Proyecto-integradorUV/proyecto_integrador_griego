import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lecHistoria from "../../../style/titulos/filosofia.png";
import informacion from "../../../style/botones/informacion.png";
import Navbar4 from "../../../components/navbar4";
import inicio from "../../../style/botones/inicio.png";
import imagen1 from "./Images/filo.jpg";
import imagen2 from "./Images/filo2.png";
import imagen3 from "./Images/filo3.webp";
import imagen4 from "./Images/filo4.jpg";
import imagen5 from "./Images/filo5.webp";
import helenistico from "./Images/helenistico.jpg";

const LeccionFilosofia3 = () => {
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
                    <Card.Title>Lección 3: Período helenístico</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        3.1
                      </span>{" "}
                      Hablaremos sobre la <b>introducción </b> al período
                      helenístico
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Filosofia/Leccion3">
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
                          <Modal.Title>3.1 Período helenístico</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Introducción</h2>
                          <p>
                            Abarca aproximadamente desde la muerte de Alejandro
                            Magno en el año 323 a.C. hasta el dominio romano
                            sobre Grecia en el año 146 a.C. Este período se
                            caracteriza por la difusión de la cultura griega y
                            el sincretismo cultural que tuvo lugar en las
                            regiones conquistadas por Alejandro y sus sucesores,
                            conocidos como los reyes helenísticos.
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
                    <Card.Title>Lección 3: Período helenístico</Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        3.2
                      </span>{" "}
                      Hablaremos sobre las principales <b>características</b> de
                      este periodo helenístico
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Filosofia/Leccion3">
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
                            3.2 principales características y escuelas de este
                            periodo helenístico
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>
                            Durante el período helenístico, la filosofía griega
                            experimentó cambios significativos y se
                            desarrollaron diversas corrientes de pensamiento.
                            Algunas de las características y figuras más
                            destacadas del período helenístico son:
                          </p>
                          <img
                            src={helenistico}
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
                            <b>Eclecticismo filosófico: </b>
                            Debido a la diversidad cultural y filosófica que
                            existía en el mundo helenístico, surgieron escuelas
                            y filósofos que adoptaron enfoques eclécticos,
                            combinando elementos de diferentes tradiciones
                            filosóficas. Esto se reflejó en escuelas como el
                            estoicismo medio, el eclecticismo académico y el
                            pirronismo.
                          </p>
                          <br></br>
                          <p>
                            <b>Estoicismo: </b>
                            Fundada por Zenón de Citio, la escuela estoica
                            enfatizaba la búsqueda de la virtud, la aceptación
                            de la naturaleza y la importancia de vivir en
                            armonía con el orden cósmico. Los estoicos promovían
                            la idea de vivir de acuerdo con la razón y la
                            moralidad, y creían en la importancia de cultivar la
                            tranquilidad interior.
                          </p>
                          <br></br>
                          <p>
                            <b>Escepticismo: </b>
                            La escuela escéptica, representada principalmente
                            por Pirrón de Elis, sostenía que no se podía
                            alcanzar el conocimiento absoluto o la verdad
                            definitiva. Los escépticos cuestionaban la
                            posibilidad de llegar a conclusiones seguras y
                            abogaban por la suspensión del juicio y la búsqueda
                            de la tranquilidad mental a través de la suspensión
                            del asentimiento.
                          </p>
                          <br></br>
                          <p>
                            Además de la filosofía, el período helenístico
                            también fue una época de grandes avances
                            científicos, literarios y culturales. Se produjo una
                            sinergia entre la tradición griega y las culturas
                            locales, como la egipcia y la persa, lo que dio
                            lugar a nuevas formas de arte, literatura y
                            pensamiento.
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
      <div className="botones-lecciones">
        <Link to="/Temas/Filosofia">
          <img src={inicio} className="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionFilosofia3;
