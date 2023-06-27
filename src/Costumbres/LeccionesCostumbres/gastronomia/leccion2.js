import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import informacion from "../../../style/botones/informacion.png";
import Navbar4 from "../../../components/navbar4";
import imagen1 from "./images/almuerzo.jpg";
import imagen2 from "./images/griego2.webp";
import imagen3 from "./images/mediterraneo.jpg";
import imagen4 from "./images/griegos.jpg";
import imagen5 from "./images/plato2.webp";
import inicio from "../../../style/botones/inicio.png";
import lecGastronomia from "../../../style/titulos/gastronomia.png";

const LeccionGastronomia2 = () => {
  const url1 = "/Temas/Gastronomia/Leccion1";
  const url2 = "/Temas/Gastronomia/Leccion2";
  const url3 = "/Temas/Gastronomia/Leccion3";
  const url4 = "/Temas/Gastronomia/Leccion4";

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
      <Navbar4
        tituloTema="Gastronomia"
        url1={url1}
        tituloLeccion1="Leccion1"
        url2={url2}
        tituloLeccion2="Leccion2"
        url3={url3}
        tituloLeccion3="Leccion3"
        url4={url4}
        tituloLeccion4="Leccion4"
      />
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
                    <Card.Title>
                      Lección 2: Ingredientes y productos básicos
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        2.1
                      </span>{" "}
                      Hablaremos sobre los productos agrícolas los cuales son la
                      clave en la cocina griega (aceite de oliva, aceitunas,
                      hierbas, verduras, etc.)
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Gastronomia/Leccion2">
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
                            2.1 Productos clave en la cocina griega
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">
                            Productos agrícolas clave en la cocina griega
                          </h2>
                          <p>
                            La cocina griega utiliza una amplia variedad de
                            ingredientes agrícolas clave que son fundamentales
                            para sus sabores distintivos. Algunos de los
                            productos agrícolas más destacados en la cocina
                            griega incluyen:
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Aceitunas:
                          </h2>
                          <p>
                            Las aceitunas son otro ingrediente clave en la
                            cocina griega. Se utilizan en ensaladas, como
                            aperitivo y como parte de muchos platos
                            tradicionales. Las variedades griegas de aceitunas,
                            como las Kalamata y las verdes Halkidiki, son muy
                            populares.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Hierbas y especias:
                          </h2>
                          <p>
                            Grecia es rica en hierbas y especias aromáticas que
                            agregan sabor y fragancia a los platos griegos.
                            Algunas hierbas comunes utilizadas incluyen el
                            orégano, el tomillo, el perejil, la menta y la
                            albahaca. Estas hierbas se usan tanto frescas como
                            secas en la cocina.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Miel:
                          </h2>
                          <p>
                            La miel es un endulzante natural utilizado en muchos
                            postres y pasteles griegos. Grecia es conocida por
                            producir miel de alta calidad, con una variedad de
                            sabores y aromas dependiendo de las flores y
                            regiones de donde se obtiene.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Legumbres:
                          </h2>
                          <p>
                            Las legumbres, como los frijoles (frijoles blancos,
                            frijoles gigantes) y las lentejas, son ingredientes
                            comunes en la cocina griega. Se utilizan en sopas,
                            guisos y ensaladas, y aportan nutrición y sabor a
                            los platos.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Queso feta:
                          </h2>
                          <p>
                            El queso feta es uno de los ingredientes más
                            reconocibles de la cocina griega. Se elabora con
                            leche de oveja o de cabra y se caracteriza por su
                            sabor salado y textura crujiente. El queso feta se
                            utiliza en ensaladas, platos de queso feta al horno
                            (como el saganaki) y se consume como aperitivo.
                          </p>
                          <br></br>
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
                    <Card.Title>
                      Lección 2: Ingredientes y productos básicos
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        2.2
                      </span>{" "}
                      Hablaremos sobre los productos lácteos y quesos griegos
                      (feta, yogur, etc.).
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Gastronomia/Leccion2">
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
                          <Modal.Title>2.2 Quesos, leche y más</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2>Productos lácteos y quesos griegos</h2>
                          <p>
                            Los productos lácteos y quesos desempeñan un papel
                            destacado en la cocina griega. Estos son algunos de
                            los productos lácteos y quesos griegos más
                            destacados:
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Yóghurt griego:
                          </h2>
                          <p>
                            El yogur griego es otro producto lácteo icónico de
                            Grecia. Se elabora a partir de leche de vaca o una
                            combinación de leche de vaca y oveja. El yogur
                            griego tiene una textura cremosa y espesa, y es
                            conocido por su sabor suave y ligeramente ácido. Se
                            consume como desayuno, postre o se utiliza en salsas
                            y aderezos.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            QGraviera:
                          </h2>
                          <p>
                            El graviera es un queso griego semiduro que se
                            produce principalmente en la isla de Creta. Se
                            elabora con leche de oveja y se envejece durante un
                            período de tiempo, lo que le da un sabor rico y
                            distintivo. El graviera se utiliza en platos
                            gratinados, salsas y como aperitivo.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Manouri:
                          </h2>
                          <p>
                            El manouri es un queso blanco y suave, similar al
                            queso fresco. Se elabora a partir de suero de leche
                            de oveja y cabra, y tiene un sabor delicado y
                            cremoso. El manouri se utiliza en platos dulces y
                            salados, como postres y ensaladas.
                          </p>
                          <br></br>
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
                    <Card.Title>
                      Lección 2: Ingredientes y productos básicos
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        2.3
                      </span>{" "}
                      Hablaremos sobre el pan y otros productos de panadería
                      griegos.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Gastronomia/Leccion2">
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
                            2.3 Pan y otros productos de panadería griegos
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>
                            El pan y los productos de panadería tienen una larga
                            tradición en la cocina griega. Estos son algunos de
                            los ingredientes y productos de panadería más
                            destacados en Grecia:
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Pan de pita:
                          </h2>
                          <p>
                            El pan de pita es uno de los panes más conocidos y
                            utilizados en la cocina griega. Es un pan plano y
                            redondo que se hornea a alta temperatura para
                            obtener una textura esponjosa. Se utiliza para
                            envolver gyros, souvlaki y otros platos, o se sirve
                            como acompañamiento.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Tiropita:
                          </h2>
                          <p>
                            La tiropita es una especie de pastel o empanada
                            rellena de queso feta y otros quesos griegos. La
                            masa se prepara con harina, aceite de oliva y yogur
                            griego, lo que le da una textura ligera y crujiente.
                            Las tiropitas se sirven como aperitivo, entrante o
                            como parte de una comida completa.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Melomakarona:
                          </h2>
                          <p>
                            Los melomakarona son galletas de aceite de oliva,
                            nueces y miel, tradicionales en la época navideña.
                            Estas galletas se hacen con harina, aceite de oliva,
                            jugo de naranja, nueces y se bañan en una mezcla de
                            miel y agua de azahar. Son dulces, aromáticas y muy
                            apreciadas durante las festividades.
                          </p>
                          <br></br>
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
        <Link to="/Temas/Gastronomia">
          <img src={inicio} class="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionGastronomia2;
