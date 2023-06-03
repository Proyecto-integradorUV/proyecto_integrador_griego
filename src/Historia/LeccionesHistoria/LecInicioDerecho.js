import "../../style/css/styleLecciones.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import botonEmpezar from "../../style/botones/empezar.png";

const LeccionesDerecho = () => {

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

            <div className="carousel-container abs-center" >
                <Carousel interval={null} controls={true} indicators={false}>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title >Lección 1</Card.Title>
                                <Card.Text className="card-title">
                                    Introducción a los derechos y la historia de Grecia
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Explicar qué son los derechos y por qué son importantes.
                                    <br />
                                    • Presentar una breve introducción a la historia de Grecia y su influencia en la concepción de los derechos.
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Vestimenta/Leccion1" class="btn-empezar">
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
                                    Derechos en la antigua Grecia
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Describir los conceptos de ciudadanía y democracia en la antigua Grecia.
                                    <br />
                                    • Analizar cómo se aplicaban los derechos en la sociedad ateniense.
                                    <br />
                                    • Discutir las limitaciones y exclusiones en los derechos en la antigua Grecia.
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Vestimenta/Leccion2" class="btn-empezar">
                                        <img src={botonEmpezar} alt="Imagen" class="button-image" />
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title >Lección 3</Card.Title>
                                <Card.Text className="card-title">
                                    Los derechos durante la dominación extranjera
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Explorar el impacto de la dominación romana, bizantina y otomana en los derechos de los griegos.
                                    <br />
                                    • Destacar los cambios y las restricciones impuestas durante estos períodos.
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Vestimenta/Leccion3" class="btn-empezar">
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
                                    La lucha por la independencia y la formación del estado moderno
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Examinar el movimiento de independencia griego y su influencia en el desarrollo de los derechos.
                                    <br />
                                    • Presentar la primera constitución de Grecia y los derechos establecidos en ella.                                  
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Vestimenta/Leccion4" class="btn-empezar">
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

export default LeccionesDerecho;