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
import imagen1 from "./images/plato.png";
import imagen2 from "./images/plato2.webp";
import imagen3 from "./images/plato3.jpg";
import imagen4 from "./images/mediterraneo.jpg";
import imagen5 from "./images/gente.jpg";
import imagen6 from "./images/gente2.png";
import rigozalo from "./images/rigozalo.png";
import baklava from "./images/baklava.jpg";
import louku from "./images/louku.webp";
import quiz from "../../../style/botones/quiz.png";

const LeccionGastronomia4 = () => {
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
                    <br></br>
                    <Card.Title>Lección 4: Postres Griegos</Card.Title>
                    <Card.Text>
                      Hablaremos sobre el postre baklava y otros pasteles de
                      nueces y miel.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Gastronomia/Leccion4">
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
                          <Modal.Title>Postres Griegos</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">
                            Baklava y otros pasteles de nueces y miel.
                          </h2>
                          <img
                            src={baklava}
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
                            La cocina griega es conocida por su amplia variedad
                            de postres y dulces, muchos de los cuales se
                            elaboran con nueces y miel. Aquí tienes algunos
                            ejemplos:
                          </p>
                          <br></br>
                          <p>
                            <b>Baklava: </b>
                            El baklava es uno de los postres más emblemáticos de
                            la cocina griega. Consiste en capas de masa filo
                            finamente estirada, rellenas de nueces picadas,
                            especias y endulzadas con jarabe de miel. Se hornea
                            hasta que esté crujiente y luego se rocía con más
                            jarabe de miel. El baklava es dulce, rico y lleno de
                            sabores a nuez y miel.
                          </p>
                          <p>
                            <b>Kataifi: </b>
                            El kataifi es similar al baklava, pero en lugar de
                            capas de masa filo, se utiliza kataifi, que es una
                            masa hilada en forma de hilos muy finos. Los hilos
                            se rellenan con nueces picadas, especias y se bañan
                            en jarabe de miel. El resultado es un postre
                            delicado y sabroso.
                          </p>
                          <p>
                            <b>Galaktoboureko: </b>
                            El galaktoboureko es un pastel de crema que se hace
                            con una capa crujiente de masa filo en la parte
                            inferior, rellena con una crema de sémola
                            aromatizada con vainilla y ralladura de limón, y
                            cubierta con más capas de masa filo. Después de
                            hornearlo, se baña con un jarabe de miel y se sirve
                            frío.
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
                    <Card.Title>Lección 4: Postres Griegos</Card.Title>
                    <Card.Text>
                      Hablaremos sobre el postre Loukoumades y otros dulces
                      fritos.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Gastronomia/Leccion4">
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
                          <Modal.Title>Leccion 4: Postres Griegos</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">
                            Loukoumades y otros dulces fritos.
                          </h2>
                          <img
                            src={louku}
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
                            La cocina griega tiene una variedad de dulces fritos
                            deliciosos, entre ellos se destacan las loukoumades.
                            Aquí tienes algunos ejemplos de dulces fritos en la
                            cocina griega:
                          </p>
                          <br></br>
                          <p>
                            <b>Loukoumades: </b>
                            Las loukoumades son pequeñas bolas de masa frita,
                            similares a los buñuelos, que se sirven calientes y
                            se bañan con jarabe de miel y se espolvorean con
                            canela. Son esponjosas por dentro y crujientes por
                            fuera. A veces, se les añade también nueces picadas
                            o crema batida como adorno.
                          </p>
                          <p>
                            <b>Tulumbakia: </b>
                            Los tulumbakia son tiras de masa frita en forma de
                            tubo, similares a los churros. Después de freírse,
                            se sumergen en jarabe de azúcar aromatizado con
                            limón y se sirven fríos. Son dulces y crujientes, y
                            a menudo se espolvorean con canela.
                          </p>
                          <p>
                            <b>Diples: </b>
                            Los diples son hojas de masa fina enrolladas en
                            forma de tubo y fritas hasta que estén doradas y
                            crujientes. Después de freírlas, se bañan con jarabe
                            de miel y se espolvorean con nueces picadas y
                            canela. Son un dulce tradicional que se sirve en
                            ocasiones especiales.
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
                    <Card.Title>Lección 4: Postres Griegos</Card.Title>
                    <Card.Text>
                      Postres lácteos como el yogur griego y el rizogalo (arroz
                      con leche griego).
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Gastronomia/Leccion4">
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
                          <Modal.Title>Lección 4: Postres Griegos</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">
                            Postres lácteos como el yogur griego y el rizogalo
                          </h2>
                          <img
                            src={rigozalo}
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
                            <b>Rizogalo: </b>
                            El rizogalo es un postre tradicional griego similar
                            al arroz con leche. Consiste en una mezcla de arroz,
                            leche, azúcar y vainilla que se cocina a fuego lento
                            hasta que el arroz esté tierno y el líquido se haya
                            espesado. Se sirve caliente o frío y se espolvorea
                            con canela en polvo. El rizogalo es un postre
                            reconfortante y aromático que se consume durante
                            todo el año.
                          </p>
                          <br></br>
                          <p>
                            Este postre es representativos de la rica tradición
                            de la cocina griega. El rizogalo es apreciado tanto
                            por su sabor delicioso como por su valor
                            nutricional. Es una opción más popular como postre
                            para disfrutar en cualquier momento del día.
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
        <Link to="/Temas/Gastronomia/Leccion3">
          <img src={anterior} class="img-fluid" alt="Imagen" />
        </Link>
        <Link to="/Temas/Gastronomia/Quiz">
          <img src={quiz} class="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionGastronomia4;
