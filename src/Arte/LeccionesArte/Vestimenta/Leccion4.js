import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import vestimenta1 from "./images/vestimenta1.jpg";
import vestimenta5 from "./images/vestimenta5.jpg";
import lecVestimenta from "../../../style/titulos/vestimenta.png";
import informacion from "../../../style/botones/informacion.png";
import inicio from "../../../style/botones/inicio.png";
import Navbar4 from "../../../components/navbar4";
import quiz from "../../../style/botones/quiz.png";
import imagenModal1 from "./images/img7.png";
import imagenModal2 from "./images/img8.jpg";
import imagenModal3 from "./images/img9.jpg";
import imagenModal4 from "./images/img10.jpg";

const LeccionVestimenta4 = () => {
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
  const url1 = "/Temas/Vestimenta/Leccion1";
  const url2 = "/Temas/Vestimenta/Leccion2";
  const url3 = "/Temas/Vestimenta/Leccion3";
  const url4 = "/Temas/Vestimenta/Leccion4";
  return (
    <div className="contenedorArte">
      <Navbar4
        tituloTema="Vestimenta"
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
        <img src={lecVestimenta} className="img-fluid" alt="Imagen" />
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
              <img src={vestimenta1} alt="Imagen" className="img-fluid" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={vestimenta5} alt="Imagen" className="img-fluid" />
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
                      Lección 4: Accesorios y detalles de la vestimenta griega
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        4.1
                      </span>{" "}
                      <b>Explicación</b> de los accesorios utilizados en la
                      cultura griega, como joyas, cinturones y sandalias.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Vestimenta/Leccion4">
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
                            4.1 Explicación de los accesorios utilizados en la
                            cultura griega, como joyas, cinturones y sandalias
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Explicación</h2>
                          <p>
                            En la cultura griega, tanto hombres como mujeres
                            complementaban su vestimenta con diversos accesorios
                          </p>

                          <p>
                            Las joyas eran populares entre las mujeres griegas y
                            se utilizaban para realzar su belleza y estatus. Las
                            joyas incluían collares, pulseras, brazaletes,
                            pendientes y anillos. Estas piezas estaban hechas de
                            oro, plata, bronce y piedras preciosas como ágata,
                            amatista y perlas. Las joyas griegas a menudo
                            presentaban motivos inspirados en la mitología y la
                            naturaleza, como serpientes, delfines y flores.
                          </p>
                          <img
                            src={imagenModal1}
                            className="img-fluid center"
                            alt="Imagen"
                            style={{
                              width: "30%",
                              height: "30%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                          <p>
                            Los cinturones eran accesorios importantes tanto
                            para hombres como para mujeres. Estaban hechos de
                            cuero, tela o metal y se usaban para ajustar la
                            túnica en la cintura.
                          </p>
                          <img
                            src={imagenModal2}
                            className="img-fluid center"
                            alt="Imagen"
                            style={{
                              width: "30%",
                              height: "30%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
                          <p>
                            {" "}
                            Las sandalias eran el calzado común en la antigua
                            Grecia. Estaban hechas de cuero y tenían correas que
                            se envolvían alrededor del pie y se ataban en el
                            tobillo.
                          </p>
                          <img
                            src={imagenModal3}
                            className="img-fluid center"
                            alt="Imagen"
                            style={{
                              width: "30%",
                              height: "30%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
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
                      Lección 4: Accesorios y detalles de la vestimenta griega
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        4.2
                      </span>{" "}
                      Significado <b>simbólico</b> de estos accesorios y cómo
                      complementaban la vestimenta
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Vestimenta/Leccion4">
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
                            4.2 Significado simbólico de estos accesorios y cómo
                            complementaban la vestimenta
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Significado</h2>
                          <p>
                            Los accesorios en la cultura griega tenían un
                            significado simbólico y complementaban la vestimenta
                            de varias maneras.
                          </p>

                          <p>
                            • Las joyas, además de su función estética, también
                            simbolizaban estatus y riqueza. Las piezas más
                            elaboradas y costosas eran utilizadas por la
                            aristocracia y reflejaban su poder y posición
                            social. Las joyas también podían tener un
                            significado religioso o mítico, representando
                            dioses, símbolos de protección o amuletos de buena
                            suerte.
                          </p>

                          <p>
                            • Los cinturones, además de su función práctica de
                            ajustar la ropa, también podían ser un símbolo de
                            estatus y poder. Los cinturones decorados con
                            hebillas y diseños elaborados eran utilizados por
                            personas de alto estatus social, mientras que los
                            cinturones simples eran más comunes entre las clases
                            más bajas.
                          </p>

                          <p>
                            • Las sandalias, aparte de ser un calzado práctico,
                            también tenían un simbolismo cultural. En la antigua
                            Grecia, caminar descalzo era considerado inapropiado
                            y señalaba a una persona como pobre o esclava. El
                            uso de sandalias, por lo tanto, era un indicador de
                            estatus y respetabilidad.
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
                      Lección 4: Accesorios y detalles de la vestimenta griega
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        4.3
                      </span>{" "}
                      Detalles <b>adicionales</b> en la cultura griega
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Vestimenta/Leccion4">
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
                            4.3 Detalles adicionales en la cultura griega
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Detalles</h2>
                          <p>
                            En la cultura griega, los peinados y el maquillaje
                            también eran importantes para complementar la
                            vestimenta y realzar la apariencia.
                          </p>

                          <p>
                            Las mujeres griegas solían llevar el cabello largo y
                            lo peinaban de diversas maneras, como trenzas, moños
                            y rizos. El estilo y la elaboración de los peinados
                            podían variar según la ocasión y la moda de la
                            época. También solían utilizar horquillas, cintas y
                            diademas para decorar su cabello.
                          </p>
                          <p>
                            En cuanto al maquillaje, las mujeres griegas usaban
                            diferentes productos para realzar su belleza.
                            Utilizaban polvos de talco para aclarar su tez y
                            resaltar sus rasgos faciales. También utilizaban
                            productos como el kohl para oscurecer y definir sus
                            ojos, y coloretes para resaltar las mejillas.
                          </p>
                          <p>
                            Los hombres también podían utilizar peinados y
                            ciertos productos de cuidado personal, aunque de
                            manera más sencilla en comparación con las mujeres.
                          </p>
                          <p>
                            Estos detalles adicionales en la vestimenta, como
                            los peinados y el maquillaje, ayudaban a crear un
                            aspecto completo y armonioso, y contribuían a la
                            belleza y la presentación personal en la cultura
                            griega.
                          </p>
                          <img
                            src={imagenModal4}
                            className="img-fluid center"
                            alt="Imagen"
                            style={{
                              width: "30%",
                              height: "30%",
                              display: "block",
                              margin: "auto",
                            }}
                          />
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
      <div className="botones-lecciones">
        <Link to="/Temas/Vestimenta">
          <img src={inicio} className="img-fluid" alt="Imagen" />
        </Link>
        <Link to="/Temas/Vestimenta/Quiz">
          <img src={quiz} className="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionVestimenta4;
