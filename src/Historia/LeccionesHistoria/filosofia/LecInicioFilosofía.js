import "./LecInicioFilosofía.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import botonEmpezar from "../../../style/botones/empezar.png";
import titulo from "../../../style/titulos/lecciones_init.png";
import NavbarPrincipal from "../../../components/navbar2";

const LeccionFilosofia = () => {
  return (
    <div className="contenedorHistoria">
      <NavbarPrincipal />
      <div className="titulo-lecciones">
        <img src={titulo} className="img-fluid" alt="Imagen" />
      </div>
      {/* Carrusel de lecciones */}
      <div className="carousel-container">
        <Carousel interval={null} controls={true} indicators={false}>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Lección 1: Período preocrático</Card.Title>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Escuelas
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Filosofia/Leccion1" className="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" className="button-image" />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Lección 2: El período platónico y aristotélico</Card.Title>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Principales carácteristicas del período platónico
                  <br />• Principales carácteristicas del período aristotélico
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Filosofia/Leccion2" className="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" className="button-image" />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Lección 3: Período helenístico</Card.Title>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Principales carácteristicas
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Filosofia/Leccion3" className="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" className="button-image" />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Lección 4: El período neoplatónico</Card.Title>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Principales carácteristicas
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Filosofia/Leccion4" className="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" className="button-image" />
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

export default LeccionFilosofia;
