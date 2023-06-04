import "./LecInicioFilosofía.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import botonEmpezar from "../../../style/botones/empezar.png";
import titulo from "../../../style/lecciones_init.png";

const LeccionFilosofia = () => {
  return (
    <div className="contenedorLeccionesFilo">
      <nav className="navbarPrincipal">
        <ul className="navbarList2Principal">
          <li className="navbarItemPrincipal">
            <a href=" " className="navbarLink2Principal">
              Usuario
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href="/Home" className="navbarLink2Principal">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navbar2Principal">
        <ul className="navbarListPrincipal">
          <li className="navbarItemPrincipal">
            <a href="/Principal" className="navbarLinkPrincipal">
              Página principal
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href=" " className="navbarLink3Temas">
              Lecciones
            </a>
          </li>
          <li className="navbarItemPrincipal">
            <a href="/Temas" className=" navbarLinkPrincipal">
              Temas
            </a>
          </li>
        </ul>
      </nav>
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
                  Período preocrático
                </Card.Text>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Escuelas
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Filosofia/Leccion1" class="btn-empezar">
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
                <Card.Text className="card-title">
                  El período platónico y aristotélico
                </Card.Text>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Principales carácteristicas del período platónico
                  <br />• Principales carácteristicas del período aristotélico
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Filosofia/Leccion2" class="btn-empezar">
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
                  Período helenístico
                </Card.Text>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Principales carácteristicas
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Filosofia/Leccion3" class="btn-empezar">
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
                  El período neoplatónico
                </Card.Text>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Principales carácteristicas
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Filosofia/Leccion4" class="btn-empezar">
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
                <Card.Text className="card-title">
                  La liada y la odisea
                </Card.Text>
                <Card.Text className="card-text">
                  • Introducción
                  <br />• Fragmentos y explicaciónes
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Filosofia/Leccion5" class="btn-empezar">
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

export default LeccionFilosofia;
