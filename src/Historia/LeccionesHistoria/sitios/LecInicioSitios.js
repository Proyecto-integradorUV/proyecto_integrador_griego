import "bootstrap/dist/css/bootstrap.min.css";
import "../../../style/css/contenedores.css";
import "../sitios/leccionesSitios.css"
import React from "react";
import { Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import botonEmpezar from "../../../style/botones/empezar.png";
import titulo from "../../../style/titulos/lecciones_init.png";
import NavbarPrincipal from "../../../components/navbar2";

const LeccionesSitio = () => {

    return (
        <div className="contenedorLecciones-sitios">
            <NavbarPrincipal/>
            <div class="titulo-lecciones-sitios">
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
                                    Introducción a Grecia
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Breve introducción al país, su ubicación geográfica y su importancia histórica y cultural
                                    <br />
                                    • Presentación de la rica historia de Grecia y su influencia en la civilización occidental
                                    <br />
                                    • Destacar la importancia de los sitios característicos en la comprensión de la historia y la cultura griega
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/SitiosCaracteristicos/Leccion1" class="btn-empezar">
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
                                    Atenas y la Acrópolis
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Presentación de la ciudad de Atenas, su importancia como capital y centro cultural
                                    <br />
                                    • Exploración de la Acrópolis y sus principales estructuras, incluyendo el Partenón, el Erecteión y el Templo de Atenea Niké
                                    <br />
                                    • Discusión sobre el estilo arquitectónico de los templos griegos y su significado cultural
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/SitiosCaracteristicos/Leccion2" class="btn-empezar">
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
                                    Delfos y el Oráculo
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Introducción a Delfos y su importancia como centro religioso y oracular en la antigua Grecia
                                    <br />
                                    • Exploración de los restos arqueológicos en Delfos, como el Templo de Apolo y el Teatro
                                    <br />
                                    • Explicación del papel del oráculo de Delfos en la toma de decisiones políticas y religiosas en la antigüedad
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/SitiosCaracteristicos/Leccion3" class="btn-empezar">
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
                                    Las Islas Griegas
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Presentación de las islas griegas como destinos turísticos populares y únicos
                                    <br />
                                    • Destacar algunas de las islas más conocidas, como Santorini, Mykonos y Creta
                                    <br />
                                    • Discusión sobre la arquitectura tradicional de las islas, las playas, la gastronomía y las actividades culturales y recreativas disponibles
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/SitiosCaracteristicos/Leccion4" class="btn-empezar">
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

export default LeccionesSitio;