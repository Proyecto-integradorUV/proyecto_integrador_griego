import "../../../style/css/styleLecciones.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./leccionesDeporte.css"
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import botonEmpezar from "../../../style/botones/empezar.png";
import titulo from "../../../style/titulos/lecciones_init.png";
import NavbarPrincipal from "../../../components/navbar2";

const LeccionesDeporte = () => {

    return (
        <div className="contenedorLecciones-deporte">
            <NavbarPrincipal/>
            <div class="titulo-lecciones-deporte">
                <img src={titulo} class="img-fluid" alt="Imagen" />
            </div>
            {/* Carrusel de lecciones */}
            <div className="carousel-container" >
                <Carousel interval={null} controls={true} indicators={false}>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title >Lección 1</Card.Title>
                                <Card.Text className="card-title">
                                    Juegos olimpicos
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Breve introducción
                                </Card.Text>
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
                                <Card.Title>Lección 2</Card.Title>
                                <Card.Text className="card-title">
                                    Juegos panhelenicos
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Breve introducción
                                </Card.Text>
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
                                <Card.Title >Lección 3</Card.Title>
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
                                <Card.Text className="card-title">
                                    Gimnasia entrenamiento fisico
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Breve introducción
                                </Card.Text>
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

export default LeccionesDeporte;
