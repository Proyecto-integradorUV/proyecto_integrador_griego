import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lecGastronomia from "../../../style/titulos/gastronomia.png";
import informacion from "../../../style/botones/informacion.png";
import Navbar4 from "../../../components/navbar4";
import imagen1 from "./images/almuerzo.jpg";
import imagen2 from "./images/griego2.webp";
import imagen3 from "./images/mediterraneo.jpg";
import imagen4 from "./images/griegos.jpg";
import imagen5 from "./images/plato2.webp";
import imagen6 from "./images/griego3.jpg";
import inicio from "../../../style/botones/inicio.png";

const LeccionGastronomia1 = () => {
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
      <div className="titulo-empezar">
        <img src={lecGastronomia} className="img-fluid" alt="Imagen" />
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
                    <Card.Title>
                      Lección 1: Introducción a la gastronomía griega
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.1
                      </span>{" "}
                      Mencionaremos sobre como ha sido la gastronomía griega.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Gastronomia/Leccion1">
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
                            1.1 Introducción a la gastronomía girega
                          </Modal.Title>
                        </Modal.Header>
                        <br></br>
                        <h2 className="text-center">
                          Breve historia de la cocina griega
                        </h2>
                        <Modal.Body>
                          <p>
                            Sus raíces se encuentran en la antigua Grecia, una
                            civilización que tuvo una gran influencia en la
                            cultura y la gastronomía de la región mediterránea.
                            La cocina griega se caracteriza por su sencillez, el
                            uso de ingredientes frescos y la combinación de
                            sabores distintivos. Los griegos valoran los
                            productos de temporada y el consumo de alimentos
                            locales, lo que ha llevado a una dieta basada en
                            frutas, verduras, aceite de oliva, pescado,
                            legumbres y productos lácteos.
                          </p>
                          <br></br>
                          <p>
                            La cocina griega ha evolucionado a lo largo de los
                            siglos, pero ha mantenido su esencia y sus
                            ingredientes característicos. Hoy en día, los
                            restaurantes griegos son populares en todo el mundo
                            y ofrecen a los comensales una experiencia culinaria
                            única y sabrosa.
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
                    <Card.Title>
                      Lección 1: Introducción a la gastronomía griega
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.2
                      </span>{" "}
                      Mencionaremos la influencia cultural y geográficas en la
                      cocina griega.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Gastronomia/Leccion1">
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
                            1.2 la influencia cultural y geográfica
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">
                            Influencias culturales y geográficas en la cocina
                            griega.
                          </h2>
                          <p>
                            La cocina griega ha sido influenciada por diversas
                            culturas y factores geográficos a lo largo de su
                            historia. Estas influencias han enriquecido y
                            moldeado su gastronomía única.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Influencia mediterranea
                          </h2>
                          <p>
                            Grecia se encuentra en la región mediterránea y
                            comparte similitudes culinarias con otros países de
                            la zona. La dieta mediterránea, conocida por ser
                            saludable, se caracteriza por el consumo de aceite
                            de oliva, frutas, verduras, pescado y legumbres. La
                            cocina griega comparte estos elementos y ha adoptado
                            muchas de las prácticas culinarias de la región.
                          </p>
                          <br></br>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Influencia del imperio romano
                          </h2>
                          <p>
                            Durante el periodo de dominio romano, se
                            introdujeron nuevos ingredientes y técnicas de
                            cocina en Grecia. Los romanos aportaron nuevas
                            variedades de frutas y verduras, así como técnicas
                            de preparación y conservación de alimentos. Además,
                            la práctica de utilizar especias en la cocina se
                            volvió más común durante este periodo.
                          </p>
                          <br></br>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Influencia balcánica
                          </h2>
                          <p>
                            La ubicación geográfica de Grecia en la región de
                            los Balcanes ha influido en su cocina. Comparte
                            ciertos elementos y platos con países vecinos como
                            Bulgaria, Albania y Turquía. Por ejemplo, el plato
                            griego moussaka tiene similitudes con el plato
                            búlgaro musaka.
                          </p>
                          <br></br>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Influencia otomana
                          </h2>
                          <p>
                            Durante el periodo otomano, que duró varios siglos,
                            Grecia estuvo bajo el dominio del Imperio Otomano.
                            Esta influencia ha dejado una marca significativa en
                            la cocina griega. Platos como el moussaka y los
                            dolmades tienen raíces otomanas. Además, se
                            introdujeron nuevos ingredientes y técnicas de
                            cocina, como el uso de especias como la canela y el
                            comino.
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
                    <br></br>
                    <Card.Title>
                      Lección 1: Introducción a la gastronomía griega
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        1.3
                      </span>{" "}
                      Hablaremos sobre aquellas características principales de
                      la gastronomía griega
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Gastronomia/Leccion1">
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
                            1.3 Características principales
                          </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                          <h2 className="text-center">
                            Características principales de la gastronomía griega
                          </h2>
                          <p>
                            La gastronomía griega se caracteriza por varias
                            características distintivas que la hacen única y
                            reconocible:
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Ingredientes frescos y de calidad:
                          </h2>
                          <p>
                            La cocina griega se basa en el uso de ingredientes
                            frescos y de alta calidad. Las frutas, verduras,
                            pescados, mariscos y carnes utilizados en los platos
                            griegos suelen ser de origen local y se prioriza la
                            temporada de cada producto.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Influencia de la dieta mediterránea:
                          </h2>
                          <p>
                            La cocina griega se enmarca en la reconocida dieta
                            mediterránea, que se caracteriza por ser saludable y
                            equilibrada. Esta dieta se basa en el consumo
                            abundante de frutas, verduras, legumbres, granos
                            enteros, pescados y aceite de oliva, mientras limita
                            el consumo de carnes rojas y productos lácteos.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Platos a base de verduras y legumbres:
                          </h2>
                          <p>
                            La cocina griega cuenta con una amplia variedad de
                            platos vegetarianos y veganos. Las verduras, como
                            las berenjenas, tomates, espinacas y pimientos, se
                            utilizan en muchos platos, tanto como platos
                            principales como acompañamientos. Las legumbres,
                            como los frijoles y las lentejas, también son
                            ingredientes populares en la cocina griega.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Especias y hierbas aromáticas:
                          </h2>
                          <p>
                            Las especias y hierbas aromáticas juegan un papel
                            importante en la cocina griega, añadiendo sabores
                            distintivos a los platos. Algunas de las especias y
                            hierbas comunes utilizadas incluyen el orégano, el
                            tomillo, el comino, el perejil y el ajo.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Platos a base de mariscos y pescados:
                          </h2>
                          <p>
                            Dado que Grecia tiene una extensa costa y una rica
                            tradición pesquera, los mariscos y pescados frescos
                            son fundamentales en la cocina griega. Desde el
                            famoso plato de pescado a la parrilla hasta los
                            calamares rellenos y los mejillones al vapor, los
                            sabores del mar se celebran en la cocina griega.
                          </p>
                          <br></br>
                          <h2
                            style={{
                              fontSize: "20px",
                              alignItems: "flex-start",
                              color: "#58939B",
                            }}
                          >
                            Uso prominente del aceite de oliva:
                          </h2>
                          <p>
                            El aceite de oliva es un elemento central en la
                            cocina griega. Se utiliza en la mayoría de los
                            platos como base para cocinar, aderezos de ensaladas
                            y salsas. Los griegos tienen una larga tradición de
                            cultivo y producción de aceite de oliva de alta
                            calidad.
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
      <div className="botones-lecciones">
        <Link to="/Temas/Gastronomia">
          <img src={inicio} className="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionGastronomia1;
