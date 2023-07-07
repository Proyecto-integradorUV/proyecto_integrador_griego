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
import pintura1 from "./images/pintura1.jpeg";
import pintura2 from "./images/pintura2.png";
import pintura3 from "./images/pintura3.jpg";
import pintura4 from "./images/pintura4.jpg";
import ceramica from "./images/ceramica.jpg";
import pintura5 from "./images/pintura5.jpg";
import arte from "../../../style/titulos/arte.png";
import inicio from "../../../style/botones/inicio.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarArte from "../../../components/navArte";

const LeccionArte4 = () => {
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
    <div className="contenedor-inicial-arte">
      <NavbarArte />
      <div className="titulo-empezar">
        <img src={arte} class="img-fluid" alt="Imagen" />
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
                      Lección 4: Pintura y cerámica griega
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        4.1
                      </span>{" "}
                      Explicación de la pintura y la cerámica griega y su
                      importancia en la vida cotidiana.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Arte/Leccion4">
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
                            4.1 Explicación de la pintura y la cerámica griega y
                            su importancia en la vida cotidiana.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Explicación</h2>
                          <p>
                            La pintura y la cerámica griega tuvieron una gran
                            importancia en la vida cotidiana de la antigua
                            Grecia. Estas formas de arte se utilizaron para
                            decorar diversos objetos y también desempeñaron un
                            papel significativo en la expresión cultural y
                            religiosa de la época. Aquí hay una explicación más
                            detallada sobre la pintura y la cerámica griega y su
                            importancia:
                            <br />
                            <br />
                            <img
                              src={pintura1}
                              alt="Imagen"
                              style={{
                                width: "40%",
                                height: "40%",
                                display: "block",
                                margin: "auto",
                              }}
                            />
                            <br />
                            <h6>Pintura griega</h6>
                            La pintura griega antigua se desarrolló
                            principalmente en los períodos arcaico y clásico,
                            aproximadamente entre los siglos VIII y IV a.C. Sin
                            embargo, la mayoría de las pinturas antiguas no han
                            sobrevivido hasta nuestros días, por lo que gran
                            parte de nuestro conocimiento se basa en
                            descripciones y representaciones en vasijas y otros
                            objetos. La pintura griega se utilizó principalmente
                            en la decoración de espacios públicos, como templos
                            y edificios públicos, así como en la decoración de
                            vasijas de cerámica. Los temas de las pinturas
                            variaban, pero a menudo representaban escenas
                            mitológicas, históricas o de la vida cotidiana. Los
                            artistas griegos se esforzaron por capturar la
                            belleza y la armonía en sus obras, utilizando
                            técnicas como la perspectiva y la representación de
                            figuras humanas en proporciones equilibradas. Sin
                            embargo, debido a la naturaleza efímera de la
                            pintura mural y la fragilidad de los pigmentos
                            utilizados, no quedan muchos ejemplos de pinturas
                            griegas antiguas. Aún así, la pintura griega influyó
                            en gran medida en el arte posterior, especialmente
                            durante el Renacimiento, cuando los artistas
                            redescubrieron y se inspiraron en las técnicas y los
                            ideales estéticos de los antiguos griegos.
                            <br />
                            <br />
                            <img
                              src={pintura2}
                              alt="Imagen"
                              style={{
                                width: "60%",
                                height: "60%",
                                display: "block",
                                margin: "auto",
                              }}
                            />
                            <br />
                            <h6>Cerámica griega</h6>
                            La cerámica griega fue una forma de arte muy
                            importante y una parte integral de la vida cotidiana
                            en la antigua Grecia. Los griegos produjeron una
                            amplia variedad de vasijas y recipientes cerámicos
                            que se utilizaron para diferentes propósitos, como
                            almacenar, transportar y servir alimentos y
                            líquidos. La cerámica griega se caracteriza por su
                            calidad artística y su variedad de formas y estilos.
                            Los alfareros griegos desarrollaron técnicas
                            avanzadas para la fabricación de cerámica, como el
                            uso del torno de alfarero y la aplicación de
                            esmaltes y decoraciones pintadas. Las vasijas de
                            cerámica griegas a menudo estaban decoradas con
                            hermosas pinturas que representaban escenas
                            mitológicas, de la vida cotidiana, deportes,
                            rituales y otros temas. Estas decoraciones no solo
                            eran estéticamente agradables, sino que también
                            servían como medio de comunicación visual,
                            transmitiendo mensajes e ideas a través de imágenes.
                            La cerámica griega también desempeñó un papel
                            importante en la economía, ya que las vasijas se
                            exportaban a diferentes partes del mundo antiguo y
                            se convirtieron en un producto comercial importante.
                            Además, se utilizaban como ofrendas en rituales
                            religiosos y funerarios.
                          </p>
                          <br />
                          <img
                            src={ceramica}
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
                <Card style={{ width: "400px", height: "300px" }}>
                  <Card.Body>
                    <br></br>
                    <Card.Title>
                      Lección 4: Pintura y cerámica griega
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        4.2
                      </span>{" "}
                      Descripción de los estilos y técnicas de pintura, como el
                      estilo de figuras rojas y el estilo de figuras negras.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Arte/Leccion4">
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
                            4.2 Descripción de los estilos y técnicas de
                            pintura, como el estilo de figuras rojas y el estilo
                            de figuras negras.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Descripción</h2>
                          <p>
                            El arte de la cerámica griega se caracteriza por dos
                            estilos distintivos: el estilo de figuras rojas
                            (red-figure) y el estilo de figuras negras
                            (black-figure). Estos estilos se desarrollaron en
                            Atenas durante el período arcaico (siglos VII-VI
                            a.C.) y continuaron siendo utilizados en el período
                            clásico (siglos V-IV a.C.). Ahora una breve
                            descripción de cada uno:
                            <br />
                            <br />
                            <h6>Estilo de figuras rojas (red-figure)</h6>
                            El estilo de figuras rojas es una técnica de pintura
                            cerámica en la cual los detalles y las figuras se
                            dibujan en color negro sobre el fondo rojo natural
                            de la vasija. Este estilo fue una innovación
                            importante en la cerámica griega y permitió una
                            mayor expresividad y realismo en la representación
                            de figuras humanas y escenas. Para lograr este
                            efecto, los artistas comenzaban cubriendo la vasija
                            con una fina capa de arcilla roja. Luego, utilizando
                            un pincel fino, dibujaban los contornos de las
                            figuras y los detalles internos con una mezcla de
                            arcilla diluida. Posteriormente, se aplicaba una
                            capa de barniz negro en el fondo y en las áreas que
                            debían ser negras. Finalmente, se agregaban detalles
                            adicionales y se realzaban los rasgos y las texturas
                            mediante incisiones y la aplicación de pigmentos
                            blancos y rojos. El estilo de figuras rojas permitió
                            a los artistas lograr un mayor grado de naturalismo
                            y detalle en la representación de las figuras, así
                            como una mayor capacidad para representar sombras y
                            volúmenes. Esto contribuyó a la creación de obras de
                            arte más realistas y expresivas.
                            <br />
                            <img
                              src={pintura3}
                              alt="Imagen"
                              style={{
                                width: "20%",
                                height: "20%",
                                display: "block",
                                margin: "auto",
                                borderRadius: "20%",
                              }}
                            />
                            <br />
                            <h6>Estilo de figuras negras (black-figure)</h6>
                            El estilo de figuras negras es una técnica anterior
                            al estilo de figuras rojas y se caracteriza por
                            tener figuras y detalles en color negro sobre un
                            fondo rojo. Esta técnica fue ampliamente utilizada
                            en el período arcaico de la cerámica griega. En este
                            estilo, los artistas aplicaban una mezcla de arcilla
                            diluida con óxido de hierro para dibujar las figuras
                            y los detalles sobre el fondo de arcilla roja.
                            Luego, utilizando herramientas punzantes o
                            incisores, se realizaban incisiones en la arcilla
                            para agregar detalles y rasgos. El estilo de figuras
                            negras permitía un mayor contraste entre las figuras
                            y el fondo, lo que resultaba en un efecto visual
                            llamativo. Sin embargo, debido a las limitaciones
                            técnicas de la técnica, la representación de
                            detalles finos y de sombreado era más difícil de
                            lograr en comparación con el estilo de figuras
                            rojas.
                          </p>
                          <img
                            src={pintura4}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "20%",
                              display: "block",
                              margin: "auto",
                              borderRadius: "20%",
                            }}
                          />
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
                      Lección 4: Pintura y cerámica griega
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        4.3
                      </span>{" "}
                      Pintura griega antigua
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Arte/Leccion4">
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
                          <Modal.Title>4.3 Pintura griega antigua</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 className="text-center">Pintura griega antigua</h2>
                          <p>
                            Algunas características distintivas de la pintura
                            antigua griega incluyen:
                            <br />
                            Naturalismo y proporción: Los artistas griegos se
                            esforzaban por capturar la belleza y la armonía en
                            sus obras. Buscaban representar las figuras humanas
                            y los objetos de manera realista, con proporciones
                            equilibradas y cuidado en los detalles anatómicos.
                            <br />
                            Uso del color: Los artistas griegos utilizaban una
                            paleta de colores variada, aunque se ha perdido la
                            mayoría de los pigmentos originales. Se cree que los
                            colores más comunes eran el rojo, el negro, el
                            blanco, el ocre y el azul. Los colores se aplicaban
                            en capas superpuestas para crear efectos de
                            sombreado y profundidad.
                            <br />
                            Perspectiva y profundidad: Aunque la perspectiva
                            lineal como la conocemos hoy no se desarrolló
                            plenamente en la antigua Grecia, los artistas
                            empleaban diferentes técnicas para dar la ilusión de
                            profundidad y espacio en sus composiciones.
                            Utilizaban superposición de figuras, escalas
                            jerárquicas y la colocación de objetos en diferentes
                            planos para crear una sensación de
                            tridimensionalidad.
                            <br />
                            Narrativa y simbolismo: Muchas pinturas griegas
                            tenían un propósito narrativo, ya que representaban
                            escenas mitológicas o históricas. A menudo, estas
                            pinturas eran utilizadas para transmitir mensajes y
                            enseñanzas morales, así como para honrar a los
                            dioses y héroes de la mitología griega.
                          </p>
                          <br />
                          <img
                            src={pintura5}
                            alt="Imagen"
                            style={{
                              width: "20%",
                              height: "20%",
                              display: "block",
                              margin: "auto",
                              borderRadius: "20%",
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
      <div className="botones-lecciones">
        <Link to="/Temas/Arte">
          <img src={inicio} className="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionArte4;
