import "./LecInicioGastronomia.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import botonEmpezar from "../../../style/botones/empezar.png";
import titulo from "../../../style/titulos/lecciones_init.png";
import NavbarPrincipal from "../../../components/navbar2";

const LeccionGastronomia = () => {
  return (
    <div className="contenedorLeccionesGastro">
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
                <Card.Title>Lección 1: Introducción a la gastronomía griega</Card.Title>
                <Card.Text className="card-text">
                  • Breve historia de la cocina griega
                  <br />• Influencias culturales y geográficas de la cocina
                  griega
                  <br />• Caracteristícas principales de la gastronomía griega
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Gastronomia/Leccion1" class="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" class="button-image" />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Lección 2: Ingredientes y productos básicos</Card.Title>
                <Card.Text className="card-text">
                  • Productos agrícolas
                  <br />• Productos lácteos y quesos griegos
                  <br />• Productos de panadería griegos
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Gastronomia/Leccion2" class="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" class="button-image" />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Lección 3: Platos principales</Card.Title>
                <Card.Text className="card-text">
                  • Platos de horno
                  <br />• Carnes a las parrilla
                  <br />• Platos de pescado y maríscos
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Gastronomia/Leccion3" class="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" class="button-image" />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Lección 4: Postres Griegos</Card.Title>
                <Card.Text className="card-text">
                  • Baklava y otros pasteles de nueces y miel.
                  <br />• Loukoumades y otros dulces fritos.
                  <br />• Postres lácteos como el rizogalo (arroz con leche
                  griego).
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Gastronomia/Leccion4" class="btn-empezar">
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

export default LeccionGastronomia;
