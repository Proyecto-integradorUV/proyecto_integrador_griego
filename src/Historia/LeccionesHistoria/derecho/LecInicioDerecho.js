import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import botonEmpezar from "../../../style/botones/empezar.png";
import titulo from "../../../style/titulos/lecciones_init.png";
import NavbarPrincipal from "../../../components/navbar2";

const LeccionesDerecho = () => {

    return (
        <div className="contenedorHistoria">
            <NavbarPrincipal/>
            <div class="titulo-lecciones">
                <img src={titulo} class="img-fluid" alt="Imagen" />
            </div>
            <div className="carousel-container abs-center" >
                <Carousel interval={null} controls={true} indicators={false}>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title >Lección 1:  Introducción a los derechos y la historia de Grecia</Card.Title>
                                <Card.Text className="card-text">
                                    • Explicar qué son los derechos y por qué son importantes.
                                    <br />
                                    • Presentar una breve introducción a la historia de Grecia y su influencia en la concepción de los derechos.
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Derecho/Leccion1" class="btn-empezar">
                                        <img src={botonEmpezar} alt="Imagen" class="button-image" />
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title>Lección 2: Derechos en la antigua Grecia</Card.Title>
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
                                <Card.Title >Lección 3: Los derechos durante la dominación extranjera</Card.Title>
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
                                <Card.Title>Lección 4: La lucha por la independencia y la formación del estado moderno</Card.Title>
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