import "../../style/css/styleLecciones.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import botonEmpezar from "../../style/botones/empezar.png";
import titulo from "../../style/lecciones_init.png";

const Lecciones = (props) => {
  return (
    <div className="contenedorLecciones">
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
                <Card.Text className="card-title">{props.title}</Card.Text>
                <Card.Text className="card-text">{props.text}</Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Deporte/Leccion1" class="btn-empezar">
                    <img src={botonEmpezar} alt="Imagen" class="button-image" />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <Card.Title>Leccion 2</Card.Title>
                <Card.Text className="card-title">{props.title}</Card.Text>
                <Card.Text className="card-text">{props.text}</Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Deporte/Leccion2" class="btn-empezar">
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
                  Carreras y competiciones atleticas
                </Card.Text>
                <Card.Text className="card-text">
                  • Breve introducción
                </Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Deporte/Leccion3" class="btn-empezar">
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
                <Card.Text className="card-title">{props.title}</Card.Text>
                <Card.Text className="card-text">{props.text}</Card.Text>
                <Card.Text className="card-title">
                  <Link to="/Temas/Deporte/Leccion4" class="btn-empezar">
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

export default Lecciones;