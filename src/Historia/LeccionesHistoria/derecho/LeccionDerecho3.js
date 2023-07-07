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
import inicio from "../../../style/botones/inicio.png";
import informacion from "../../../style/botones/informacion.png";
import Navbar4 from "../../../components/navbar4";

const LeccionDerecho3 = () => {
  const url1 = "/Temas/Derecho/Leccion1";
  const url2 = "/Temas/Derecho/Leccion2";
  const url3 = "/Temas/Derecho/Leccion3";
  const url4 = "/Temas/Derecho/Leccion4";

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
      <Navbar4
        tituloTema="Derecho"
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
        <img src={derechos} className="img-fluid" alt="Imagen" />
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
                    <br></br>
                    <Card.Title>
                      Lección 3: Los derechos durante la dominación extranjera
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        3.1
                      </span>{" "}
                      Impacto de la dominación romana, bizantina y otomana en
                      los derechos de los griegos
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Derecho/Leccion3">
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
                            3.1 Impacto de la dominación romana, bizantina y
                            otomana en los derechos de los griegos.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Impacto</h2>
                          <p>
                            La dominación romana, bizantina y otomana tuvo un
                            impacto significativo en los derechos de los griegos
                            a lo largo de la historia.
                            <br />
                            <br />
                            Dominación romana: Cuando Roma conquistó Grecia en
                            el siglo II a.C., se produjo una fusión de las
                            culturas griega y romana. En términos de derechos,
                            los romanos reconocieron la condición de ciudadanía
                            a algunos griegos, lo que les permitió acceder a
                            ciertos derechos y privilegios romanos. Sin embargo,
                            no todos los griegos fueron considerados ciudadanos
                            romanos y continuaron existiendo diferencias en
                            cuanto a los derechos y la ciudadanía.
                            <br />
                            <br />
                            Dominación bizantina: Después de la caída del
                            Imperio Romano de Occidente, el Imperio Bizantino
                            asumió el control en la región. Durante este
                            período, los derechos de los griegos se vieron
                            influenciados por el sistema legal y político
                            bizantino, que tenía sus propias leyes y estructuras
                            de gobierno. En general, los griegos en el Imperio
                            Bizantino disfrutaron de una relativa autonomía
                            local y conservaron algunos de sus derechos y
                            tradiciones culturales, aunque la administración
                            imperial ejercía un control centralizado.
                            <br />
                            <br />
                            Dominación otomana: A partir del siglo XV, los
                            otomanos conquistaron Grecia y establecieron su
                            dominio sobre la región. Durante el período otomano,
                            los derechos de los griegos se vieron
                            significativamente limitados. Los otomanos
                            implementaron un sistema legal y administrativo
                            basado en la ley islámica, que discriminaba a los no
                            musulmanes. Los griegos ortodoxos, en su mayoría, se
                            consideraban dhimmis, es decir, comunidades
                            religiosas protegidas pero con derechos limitados.
                            Aunque existían comunidades griegas autónomas y se
                            permitía cierto grado de autogobierno local, los
                            griegos estaban sujetos a impuestos especiales y
                            restricciones en el ejercicio de sus derechos
                            políticos y religiosos.
                            <br />
                            <br />
                            <img
                              src={derecho6}
                              alt="Imagen"
                              style={{
                                width: "50%",
                                height: "50%",
                                display: "block",
                                margin: "auto",
                              }}
                            />
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
                      Lección 3: Los derechos durante la dominación extranjera
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        3.2
                      </span>{" "}
                      Cambios y las restricciones impuestas durante estos
                      períodos.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Derecho/Leccion3">
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
                            3.2 Cambios y las restricciones impuestas durante
                            estos períodos.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Cambios</h2>
                          <p>
                            Durante los períodos de dominación romana, bizantina
                            y otomana en Grecia, se impusieron varios cambios y
                            restricciones que afectaron los derechos de los
                            griegos. Estos cambios reflejaron las diferentes
                            normas y estructuras legales de cada imperio
                            dominante. A continuación, se destacan algunos de
                            los cambios y restricciones más significativos:
                            <br />
                            <br />
                            Dominación romana: Concesión de la ciudadanía
                            romana: Algunos griegos fueron reconocidos como
                            ciudadanos romanos, lo que les otorgaba ciertos
                            derechos y privilegios. Sin embargo, este estatus no
                            se extendió a todos los griegos y existieron
                            diferencias en cuanto a los derechos y la
                            ciudadanía. Imposición de leyes y costumbres
                            romanas: Los romanos impusieron su sistema legal y
                            cultural en la región, lo que llevó a cambios en las
                            prácticas y normas griegas existentes.
                            <br />
                            <br />
                            Dominación bizantina: Estructura centralizada del
                            Imperio Bizantino: Bajo el gobierno bizantino, se
                            estableció una administración centralizada que
                            ejercía un control más directo sobre las regiones
                            griegas. Esto limitó la autonomía local y tuvo
                            implicaciones en los derechos de los griegos.
                            Influencia del derecho romano y las leyes
                            bizantinas: El sistema legal y las leyes bizantinas
                            reemplazaron en gran medida las antiguas leyes
                            griegas. Esto resultó en cambios en la aplicación de
                            los derechos y las normas legales.
                            <br />
                            <br />
                            Dominación otomana: Implementación del sistema legal
                            islámico: Los otomanos impusieron un sistema legal
                            basado en la ley islámica, que discriminaba a los no
                            musulmanes. Los griegos ortodoxos fueron
                            considerados dhimmis y estuvieron sujetos a
                            restricciones en el ejercicio de sus derechos
                            políticos, religiosos y sociales. Impuestos
                            especiales y limitaciones económicas: Los griegos en
                            el Imperio Otomano estaban sujetos a impuestos
                            especiales y a restricciones económicas que
                            afectaban su capacidad de prosperar y ejercer
                            plenamente sus derechos económicos.
                            <br />
                            <br />
                            Limitaciones en la participación política: Los
                            griegos no tenían una representación s ignificativa
                            en la administración otomana y se les negaba el
                            acceso a altos cargos políticos. Su participación en
                            la política estaba restringida y su voz era
                            limitada.
                            <br />
                            <br />
                            <img
                              src={derecho4}
                              alt="Imagen"
                              style={{
                                width: "50%",
                                height: "50%",
                                display: "block",
                                margin: "auto",
                              }}
                            />
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
        <Link to="/Temas/Derecho">
          <img src={inicio} className="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionDerecho3;
