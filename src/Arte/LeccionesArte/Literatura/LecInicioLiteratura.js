
import "../../../style/css/styleLecciones.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import botonEmpezar from "../../../style/botones/empezar.png";
import titulo from "../../../style/titulos/lecciones_init.png";
import NavbarPrincipal from "../../../components/navbar2";

const LeccionesLiteratura = () => {

    return (
        <div className="contenedorArte">
            <NavbarPrincipal/>
            <div class="titulo-lecciones">
                <img src={titulo} class="img-fluid" alt="Imagen" />
            </div>
            <div className="carousel-container abs-center" >
                <Carousel interval={null} controls={true} indicators={false}>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title >Lección 1</Card.Title>
                                <Card.Text className="card-title">
                                    La literatura griega en los distintos periodos
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Periodo arcaico.
                                    <br />
                                    • Periodo clasico.
                                    <br />
                                    • Periodo helenistico.
                                    <br />
                                    • Legado
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
                                    Generos literarios en la antigua grecia
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Poesía épica.
                                    <br />
                                    • Tragedia.
                                    <br />
                                    • Comedia.
                                    <br />
                                    • Poesía Lirica
                                    <br />
                                    • Filosofía.
                                    <br />
                                    • Historia.
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Vestimenta/Leccion2" class="btn-empezar">
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

export default LeccionesLiteratura;