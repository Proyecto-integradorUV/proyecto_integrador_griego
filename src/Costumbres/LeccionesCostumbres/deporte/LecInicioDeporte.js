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
            <div className="titulo-lecciones-deporte">
                <img src={titulo} className="img-fluid" alt="Imagen" />
            </div>
            {/* Carrusel de lecciones */}
            <div className="carousel-container" >
                <Carousel interval={null} controls={true} indicators={false}>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title >Lección 1: Juegos olimpicos</Card.Title>
                                <Card.Text className="card-text">
                                    • Breve introducción
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Deporte/Leccion1" className="btn-empezar">
                                        <img src={botonEmpezar} alt="Imagen" className="button-image" />
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title>Lección 2: Juegos panhelenicos</Card.Title>
                                <Card.Text className="card-text">
                                    • Breve introducción
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Deporte/Leccion2" className="btn-empezar">
                                        <img src={botonEmpezar} alt="Imagen" className="button-image" />
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title >Lección 3: Carreras y competiciones atleticas</Card.Title>
                                <Card.Text className="card-text">
                                    • Breve introducción
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Deporte/Leccion3" className="btn-empezar">
                                        <img src={botonEmpezar} alt="Imagen" className="button-image" />
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title>Lección 4: Gimnasia entrenamiento fisico</Card.Title>
                                <Card.Text className="card-text">
                                    • Breve introducción
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Deporte/Leccion4" className="btn-empezar">
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

export default LeccionesDeporte;
