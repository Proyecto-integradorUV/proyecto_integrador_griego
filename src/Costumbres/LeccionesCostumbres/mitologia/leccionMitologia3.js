import "../../../style/css/styleEmpezar.css";
import "../../../style/css/contenedores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lecMitologia from "../../../style/titulos/mitologia.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navMito";
import mitologia from "./imagesLec1/fondo.jpg";
import dioses from "./imagesLec1/dioses2.jpg";
import dragones from "./imagesLec1/dragones.jpg";
import origen from "./imagesLec1/origen.webp";
import anterior from "../../../style/botones/anterior.png";
import caballo from "./imagesLec1/caballoTroya.webp";
import quiz from "../../../style/botones/quiz.png";

const LeccionMitologia3 = () => {
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
    <div className="contenedorLeccionesMito">
      <NavbarPrincipal />
      <div class="titulo-empezar">
        <img src={lecMitologia} class="img-fluid" alt="Imagen" />
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
                        src={mitologia}
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
                        src={dioses}
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
                        src={dragones}
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
                        src={origen}
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
                      Lección 3: Principales mitos de la mitología griega.
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        3.1
                      </span>{" "}
                      Abordaremos sobre el origen del mundo como mito de la
                      mitología griega
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Mitologia/Leccion3">
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
                            Principales mitos de la mitologia griega.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">
                            Mito de la creación según Hesíodo
                          </h2>
                          <p>
                            Según Hesíodo, en un principio solo existía el Caos,
                            un vacío oscuro e indeterminado. Del Caos surgieron
                            Gea (la Tierra), Tártaro (el abismo) y Eros (el amor
                            primordial). Gea dio a luz a Urano (el Cielo
                            estrellado) para que la cubriera, y juntos
                            engendraron a los Titanes, los Cíclopes y los
                            Hecatónquiros. Urano, sin embargo, detestaba a sus
                            hijos y los mantenía encerrados en el interior de
                            Gea. Esto enfureció a Gea, quien instó a sus hijos a
                            rebelarse contra su padre. Solo el titán Cronos se
                            atrevió a hacerlo y, con la ayuda de Gea, castró a
                            Urano, liberando a sus hermanos. A partir de la
                            sangre de Urano que cayó sobre la Tierra, nacieron
                            las Erinias (las Furias) y las Melíades (ninfas de
                            los árboles). Del miembro castrado de Urano,
                            arrojado al mar, surgió Afrodita, la diosa del amor
                            y la belleza. Después de la castración de Urano,
                            Cronos se convirtió en el nuevo rey de los Titanes.
                            Sin embargo, temiendo el mismo destino que su padre,
                            Cronos devoraba a sus hijos al nacer. Pero su esposa
                            Rea logró salvar a su hijo Zeus, quien creció en
                            secreto. Cuando Zeus alcanzó la madurez, se enfrentó
                            a Cronos y a los Titanes en una guerra conocida como
                            la Titanomaquia. Con la ayuda de los Cíclopes y los
                            Hecatónquiros, Zeus derrocó a los Titanes y se
                            convirtió en el nuevo rey de los dioses. Zeus y sus
                            hermanos, Poseidón y Hades, repartieron el mundo
                            entre ellos. Zeus se convirtió en el dios del cielo
                            y el rayo, Poseidón en el dios del mar y Hades en el
                            dios del inframundo. Juntos, gobernaron el cosmos y
                            a los seres humanos.
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
                      Lección 3: Principales mitos de la mitología griega.
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        3.2
                      </span>{" "}
                      Hablaremos sobre la guerra de troya y sucesos relacionados
                      a esta
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Mitologia/Leccion3">
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
                            Principales mitos de la mitologia griega.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">La guerra de troya</h2>
                          <p>
                            La guerra de Troya es uno de los episodios más
                            famosos de la mitología griega y ha sido ampliamente
                            narrado en diferentes obras literarias, siendo la
                            más conocida la "Ilíada" de Homero. La guerra se
                            libró entre los aqueos (griegos) y los troyanos, y
                            se dice que duró diez años. Según la leyenda, todo
                            comenzó cuando el príncipe Paris de Troya se llevó a
                            Helena, la esposa de Menelao, rey de Esparta, lo que
                            provocó un conflicto entre los dos reinos. Los
                            aqueos, liderados por Agamenón, hermano de Menelao y
                            rey de Micenas, organizaron una expedición para
                            rescatar a Helena y vengar la afrenta.
                          </p>
                          <br></br>
                          <p>
                            El asedio de Troya duró una década, con numerosos
                            enfrentamientos y eventos heroicos. Entre los héroes
                            griegos más destacados se encontraban Aquiles, el
                            guerrero más valiente y fuerte, Héctor, el príncipe
                            troyano y defensor de la ciudad, y Odiseo (Ulises),
                            un astuto estratega.
                          </p>
                          <img
                            src={caballo}
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
                            El punto culminante de la guerra fue el famoso
                            episodio del caballo de madera. Después de muchos
                            intentos fallidos por parte de los griegos de
                            conquistar la ciudad, Odiseo ideó un plan astuto.
                            Construyeron un enorme caballo de madera como
                            ofrenda y se lo presentaron a los troyanos como un
                            gesto de rendición o un regalo divino. Los troyanos
                            aceptaron el caballo y lo llevaron dentro de las
                            murallas de la ciudad. Sin embargo, desconocían que
                            dentro del caballo se ocultaban varios guerreros
                            aqueos, incluido Odiseo. Durante la noche, los
                            guerreros salieron del caballo, abrieron las puertas
                            de la ciudad y permitieron la entrada del ejército
                            griego.
                          </p>
                          <br></br>
                          <p>
                            Troya fue saqueada y destruida, y muchos de sus
                            habitantes murieron en la batalla o fueron llevados
                            como esclavos. El rey Príamo de Troya fue asesinado,
                            y la reina Hécuba y sus hijas se convirtieron en
                            prisioneras. El héroe Aquiles también murió durante
                            la guerra, alcanzado por una flecha en el talón, su
                            única debilidad.
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
                      Lección 3: Principales mitos de la mitología griega.
                    </Card.Title>
                    <Card.Text>
                      <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                        3.3
                      </span>{" "}
                      Hablaremos sobre el amor y la tragedia
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link to="/Temas/Mitologia/Leccion3">
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
                            Principales mitos de la mitologia griega.
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h2 class="text-center">Amor y tragedia</h2>
                          <p>
                            El amor y la tragedia son temas recurrentes en los
                            mitos de la mitología griega. Estos relatos
                            mitológicos exploran las complejidades y los
                            desafíos del amor humano, así como las tragedias y
                            las consecuencias que pueden surgir de las pasiones
                            intensas. A continuación, se presentan algunos
                            ejemplos notables:
                          </p>
                          <br></br>
                          <h3 class="text-center">Orfeo y Eurídice</h3>
                          <p>
                            Orfeo era un talentoso músico y poeta, y Eurídice
                            era su amada esposa. Cuando Eurídice murió por una
                            serpiente venenosa, Orfeo descendió al inframundo
                            para intentar recuperarla. Conmovido por su música,
                            Hades permitió que Eurídice regresara con una
                            condición: Orfeo no debía mirarla hasta que
                            estuvieran en la luz del sol. Sin embargo, en un
                            momento de duda, Orfeo se volvió hacia atrás y
                            perdió a Eurídice para siempre.
                          </p>

                          <p>
                            Psique era una princesa mortal conocida por su
                            increíble belleza, esto despertó los celos y la ira
                            de Afrodita, quien decidió tomar represalias y
                            castigar a Psique. Afrodita ordenó a su hijo, Eros
                            (también conocido como Cupido), el dios del amor,
                            que hiciera que Psique se enamorara del ser humano
                            más vil y despreciable que pudiera encontrar. Sin
                            embargo, cuando Eros vio a Psique, quedó cautivado
                            por su belleza y se enamoró perdidamente de ella.
                          </p>
                          <p>
                            Eros visitaba mucho a psique a escondidas en la
                            oscuridad, manteniendo su identidad en secreto.
                            Psique nunca lo vio y no sabía quién era su amante
                            misterioso, pero disfrutaba profundamente de su
                            compañía y su amor hasta que un día esta logra ver a
                            su amado y este desaparece.
                          </p>
                          <br></br>
                          <p>
                            Desesperada por recuperar a Eros, Psique se embarcó
                            en una serie de tareas impuestas por Afrodita. Estas
                            tareas eran peligrosas y mortales, destinadas a
                            destruir a Psique. Sin embargo, con la ayuda de
                            varios dioses y criaturas míticas, Psique logró
                            superar cada desafío.
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
        <Link to="/Temas/Mitologia/Leccion2">
          <img src={anterior} class="img-fluid" alt="Imagen" />
        </Link>
        <Link to="/Temas/Mitologia/Quiz">
          <img src={quiz} class="img-fluid" alt="Imagen" />
        </Link>
      </div>
    </div>
  );
};

export default LeccionMitologia3;
