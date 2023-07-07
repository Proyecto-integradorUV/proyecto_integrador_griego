import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import literatura1 from "./images/literatura1.jpg";
import literatura2 from "./images/literatura2.jpg";
import literatura3 from "./images/literatura3.jpg";
import literatura4 from "./images/literatura4.jpg";
import literatura5 from "./images/literatura5.jpg";
import literatura6 from "./images/literatura6.jpg";
import literatura7 from "./images/literatura7.jpg";
import literatura8 from "./images/literatura8.jpg";
import literatura from "../../../style/titulos/literatura.png";
import inicio from "../../../style/botones/inicio.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarLite from "../../../components/navLite";

const LeccionLiteratura1 = () => {
  //almacenar modals por nombres
  const [modals, setModals] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
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
      <NavbarLite />
      <div className="titulo-empezar">
        <img src={literatura} className="img-fluid" alt="Imagen" />
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
                        src={literatura1}
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
                        src={literatura2}
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
                        src={literatura3}
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
                        src={literatura4}
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
                        src={literatura5}
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
                        src={literatura6}
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
                <Card style={{ width: "400px", height: "300px" }}>
                  <Card.Body>
                    <br></br>
                    <Card.Title>
                      Lección 1: La literatura griega en los distintos periodos
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.1
                      </span>{" "}
                      Breve introduccion a la literatura griega en el periodo
                      arcaico
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Literatura/Leccion1">
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
                            1.1 Literatura griega en el periodo arcaico.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Periodo arcaico</h2>
                          <p>
                            Durante el período arcaico, las obras de los poetas
                            se declamaban, como resultado de la tradición oral,
                            en los festivales. Producto de la edad oscura
                            griega, la Ilíada de Homero se centraba en los
                            últimos días de la guerra de Troya, una guerra
                            iniciada por el amor de una hermosa mujer, Helena.
                            Esta épica dotó a los jóvenes griegos una formación
                            de héroes dignos de admirar, como Aquiles, Héctor y
                            Paris. Era un poema que contrastaba a los dioses y
                            los mortales, lo divino y lo humano, la guerra y la
                            paz. Alejandro Magno dormía con una copia del libro
                            debajo de su almohada e incluso creía que era
                            pariente de Aquiles.
                            <br />
                            <br />
                            <img
                              src={literatura7}
                              alt="Imagen"
                              style={{
                                width: "20%",
                                height: "20%",
                                display: "block",
                                margin: "auto",
                                borderRadius: "60px",
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
                      Lección 1: La literatura griega en los distintos periodos
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.2
                      </span>{" "}
                      Breve introduccion a la literatura griega en el periodo
                      clásico.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Literatura/Leccion1">
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
                            1.2 Literatura griega en el periodo clásico.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Período clásico</h2>
                          <img
                            src={literatura6}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "20%",
                              display: "block",
                              margin: "auto",
                              borderRadius: "60px",
                            }}
                          />
                          <p>
                            La declamación de la poesía, y de la poesía lírica,
                            se transformó en teatro. El propósito del teatro no
                            era únicamente el de entretener, sino que buscaba
                            además educar a los ciudadanos griegos, buscaba
                            explorar un problema. Las obras se representaban en
                            teatros al aire libre y normalmente eran parte de
                            festivales religiosos. Junto con un coro que
                            explicaba la acción, se encontraban los actores, que
                            normalmente eran tres y usaban máscaras. De los
                            autores de tragedias, solo hay tres de los que se
                            conservan algunas obras completas: Esquilo,
                            Eurípides y Sófocles. Curiosamente, se les considera
                            de los escritores trágicos más importantes del
                            mundo. Hamilton escribió:
                            <br />
                            <br />
                            <h6>
                              Los grandes dramaturgos del mundo son cuatro y
                              tres de ellos son griegos. Es en la tragedia donde
                              podemos ver con mayor claridad la preeminencia de
                              los griegos. Dejando de un lado a Shakespeare, los
                              tres grandes, Esquilo, Eurípides y Sófocles, se
                              mantienen solos. La tragedia es un logro
                              peculiarmente griego. Ellos fueron los primeros en
                              percibirla y la elevaron a las más altas cumbres.
                            </h6>
                          </p>
                          <br />
                          <br />
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
                <Card style={{ width: "400px", height: "300px" }}>
                  <Card.Body>
                    <br></br>
                    <Card.Title>
                      Lección 1: La literatura griega en los distintos periodos
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.3
                      </span>{" "}
                      Breve introducción a la literatura griega en el periodo
                      helenístico.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Literatura/Leccion1">
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
                            1.3 Literatura griega en el periodo helenístico.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Periodo helenístico</h2>
                          <p>
                            El periodo helenístico produjo poetas, escritores de
                            prosa e historiadores. Entre ellos estaba Calímaco,
                            su estudiante Teócrito, Apolonio de Rodas, y el
                            respetado historiador Plutarco. Desafortunadamente,
                            como en eras pasadas, mucho de lo que se escribió
                            solo se conserva en fragmentos o citado en las obras
                            de otros.
                          </p>
                          <br />
                          <img
                            src={literatura8}
                            alt="Imagen"
                            style={{
                              width: "40%",
                              height: "40%",
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
                      Lección 1: La literatura griega en los distintos periodos
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.4
                      </span>{" "}
                      Legado de la literatura griega.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Literatura/Leccion1">
                        <img
                          onClick={() => handleOpenModal("modal4")}
                          src={informacion}
                          alt="Imagen"
                        />
                      </Link>
                    </div>
                    <div>
                      <Modal
                        show={modals.modal4}
                        onHide={() => handleCloseModal("modal4")}
                        scrollable={true}
                        size="lg"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            1.4 Legado de la literatura griega.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Legado</h2>
                          <p>
                            Después de la muerte de Alejandro Magno y el
                            crecimiento de la cultura helenística a través del
                            Mediterráneo, la literatura y el arte romanos tenían
                            un toque griego característico. La literatura griega
                            se elevó de la tradición oral de Homero y Hesíodo
                            hasta las obras de Sófocles y Aristófanes, y ahora
                            se encontraba en las mesas de ciudadanos y autores
                            romanos. Esta literatura incluía la filosofía de
                            Platón y Aristóteles y las historias de Heródoto y
                            Tucídides. <br />
                            <br />
                            <img
                              src={literatura1}
                              alt="Imagen"
                              style={{
                                width: "40%",
                                height: "40%",
                                display: "block",
                                margin: "auto",
                              }}
                            />
                            <br />
                            Siglos de poesía y prosa han sido transmitidas por
                            generaciones, y han influido a los romanos, al igual
                            que a muchos otros en Europa. Refiriéndose al
                            "fuego" de la poesía griega, Edith Hamilton
                            escribió:{" "}
                            <b>
                              “Uno podrá citar todos los poemas griegos que
                              existen, aunque sean tragedias. Cada uno de ellos
                              demuestra el fuego de la vida ardiendo fuerte.
                              Nunca existió poeta griego que no se calentara las
                              manos en esa llama”.
                            </b>
                            Hoy, las bibliotecas públicas y privadas contienen
                            las obras de los antiguos griegos y un sinnúmero de
                            generaciones venideras podrán leer y disfrutar de la
                            belleza de la literatura griega.
                          </p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={() => handleCloseModal("modal4")}
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
        <Link to="/Temas/Literatura">
          <img src={inicio} className="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionLiteratura1;
