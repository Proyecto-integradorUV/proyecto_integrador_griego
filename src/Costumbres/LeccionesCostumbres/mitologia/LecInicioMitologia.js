import "./LecInicioMitologia.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import botonEmpezar from "../../../style/botones/empezar.png";
import titulo from "../../../style/lecciones_init.png";
import NavbarPrincipal from "../../../components/navbar2";

const LeccionesMitologia = () => {
  return (
    <div className="contenedorLeccionesMito">
      <NavbarPrincipal />
      <div class="titulo-lecciones">
        <img src={titulo} class="img-fluid" alt="Imagen" />
      </div>
      {/* Carrusel de lecciones */}
      <div className="carousel-container">
        <Carousel interval={null} controls={true} indicators={false}>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Lección 1</Card.Title>
                <Card.Text className="card-title">
                  Inicio de la mitología griega
                </Card.Text>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Fragmento
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Mitologia/Leccion1" class="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" class="button-image" />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Lección 2</Card.Title>
                <Card.Text className="card-title">Dioses y humanos</Card.Text>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Fragmento
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Mitologia/Leccion2" class="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" class="button-image" />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Lección 3</Card.Title>
                <Card.Text className="card-title">
                  Conoce sobre los Dioses
                </Card.Text>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Datos interesantes
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Mitologia/Leccion3" class="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" class="button-image" />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Lección 4</Card.Title>
                <Card.Text className="card-title">
                  Principales mitos de la mitología griega
                </Card.Text>
                <Card.Text className="card-text">
                  • El origen del mundo
                  <br />• La guerra de troya
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Mitologia/Leccion4" class="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" class="button-image" />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Lección 5</Card.Title>
                <Card.Text className="card-title">La edad heroíca</Card.Text>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Fragmento
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Mitologia/Leccion5" class="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" class="button-image" />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default LeccionesMitologia;
