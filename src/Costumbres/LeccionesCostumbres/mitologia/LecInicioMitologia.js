import "./LecInicioMitologia.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import botonEmpezar from "../../../style/botones/empezar.png";
import titulo from "../../../style/titulos/lecciones_init.png";
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
                  Periodos de la mitología griega
                </Card.Text>
                <Card.Text className="card-text">
                  • La edad de los dioses.
                  <br />• La edad de convivencia entre dioses y humanos
                  <br />• La edad heroica griega
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
                <Card.Text className="card-title">Más sobre Dioses</Card.Text>
                <Card.Text className="card-text">
                  • Presentación de los dioses
                  <br />
                  •Resto de dioses
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
                  Principales mitos de la mitología griega
                </Card.Text>
                <Card.Text className="card-text">
                  • El origen del mundo
                  <br />• La guerra de troya
                  <br />• Amor y tragedia
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Mitologia/Leccion4" class="btn-empezar">
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
