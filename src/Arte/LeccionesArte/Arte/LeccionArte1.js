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
import arte from "../../../style/titulos/arte.png";
import inicio from "../../../style/botones/inicio.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarArte from "../../../components/navArte";

const LeccionArte1 = () => {
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
    <div className="contenedor-inicial-arte">
      <NavbarArte />
      <div className="titulo-empezar">
        <img src={arte} className="img-fluid" alt="Imagen" />
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
                <Card style={{ width: "400", height: "300px" }}>
                  <Card.Body>
                    <br></br>
                    <Card.Title>
                      Lección 1: Introducción a la cultura griega y su
                      influencia artística
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.1
                      </span>{" "}
                      Breve descripción de la cultura y la importancia del arte
                      en la sociedad griega.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Arte/Leccion1">
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
                            {" "}
                            1.1 Breve descripción de la cultura y la importancia
                            del arte en la sociedad griega.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Descripción</h2>
                          <p>
                            La cultura griega antigua se considera una de las
                            civilizaciones más influyentes en la historia
                            occidental. El arte desempeñó un papel fundamental
                            en la sociedad griega, siendo valorado y celebrado
                            en todas las formas de expresión. La importancia del
                            arte en la sociedad griega se puede apreciar en
                            varios aspectos. <br />
                            <br />
                            Primero, el arte era una forma de comunicación y
                            expresión de ideas y emociones. Los griegos creían
                            que el arte debía imitar y reflejar la belleza y la
                            armonía del mundo natural, lo cual se veía plasmado
                            en su arquitectura, escultura y pintura. El arte
                            griego se enfocaba en la representación idealizada
                            de la forma humana y en capturar la esencia y el
                            equilibrio estético. El arte también jugaba un papel
                            importante en la religión y la mitología griega.{" "}
                            <br />
                            <br />
                            Las esculturas y pinturas se utilizaban para honrar
                            a los dioses y representar las historias
                            mitológicas. Los templos y santuarios eran lugares
                            sagrados donde se exhibían obras de arte que servían
                            como medios de conexión entre los humanos y los
                            dioses. Además, el arte en la sociedad griega
                            promovía la educación y la formación cívica. La
                            escultura y la arquitectura se utilizaban para
                            embellecer las ciudades y los espacios públicos,
                            creando un sentido de identidad y orgullo cívico.
                            Los teatros y los festivales de drama eran eventos
                            importantes en los que se representaban obras que
                            exploraban temas éticos, políticos y filosóficos,
                            fomentando la reflexión y el debate entre los
                            ciudadanos.
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
                    <br></br>
                    <Card.Title>
                      Lección 1: Introducción a la cultura griega y su
                      influencia artística
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.2
                      </span>{" "}
                      Mención de los períodos artísticos clave, como el arte
                      arcaico, clásico y helenístico.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Arte/Leccion1">
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
                            1.2 Mención de los períodos artísticos clave, como
                            el arte arcaico, clásico y helenístico.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Períodos artísticos</h2>
                          <p>
                            El arte griego se desarrolló a lo largo de varios
                            períodos, cada uno con sus características
                            distintivas. A continuación, mencionaré los períodos
                            artísticos clave en la historia del arte griego:
                            <br />
                            <br />
                            <h5>
                              Arte Arcaico (siglos VIII a.C. - VI a.C.)
                            </h5>{" "}
                            Durante este período, se establecieron las bases del
                            arte griego. Se caracterizó por esculturas rígidas y
                            frontales, conocidas como kouros (esculturas
                            masculinas) y korai (esculturas femeninas), que
                            reflejaban una influencia egipcia. También se
                            destacaron los frisos decorativos y los vasos de
                            cerámica pintados con escenas mitológicas.
                            <br />
                            <br />
                            <h5>Arte Clásico (siglos V a.C. - IV a.C.)</h5> El
                            arte clásico griego es ampliamente considerado como
                            el punto culminante del arte griego. Durante este
                            período, se desarrollaron la escultura y la
                            arquitectura en su forma más refinada. Se logró una
                            representación más naturalista del cuerpo humano,
                            con una atención meticulosa al detalle anatómico y
                            la expresión emocional. Escultores famosos como
                            Fidias crearon obras maestras como el Partenón en
                            Atenas. El teatro y la poesía también florecieron
                            durante este período, con dramaturgos como Sófocles
                            y Eurípides. <br />
                            <br />
                            <h5>
                              Arte Helenístico (siglos IV a.C. - I a.C.)
                            </h5>{" "}
                            Tras la conquista de Grecia por Alejandro Magno y la
                            expansión de su imperio, el arte griego se extendió
                            a través de diferentes regiones y se mezcló con
                            influencias culturales orientales. El arte
                            helenístico exhibía una mayor expresividad emocional
                            y dramatismo. Las esculturas retrataban una amplia
                            gama de temas, desde dioses y héroes hasta personas
                            comunes en situaciones cotidianas. También se
                            destacaron los mosaicos y la pintura mural.
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
        <Link to="/Temas/Arte">
          <img src={inicio} className="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionArte1;
