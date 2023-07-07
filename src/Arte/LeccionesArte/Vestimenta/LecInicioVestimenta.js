import "../../../style/css/styleLecciones.css";
import "../../../style/css/contenedores.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./leccionesVestimenta.css"
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import botonEmpezar from "../../../style/botones/empezar.png";
import titulo from "../../../style/titulos/lecciones_init.png";
import NavbarPrincipal from "../../../components/navbar2";

const LeccionesVestimenta = () => {

    return (
        <div className="contenedorLecciones-vestimenta">
            <NavbarPrincipal/>
            <div className="titulo-lecciones-vestimenta">
                <img src={titulo} className="img-fluid" alt="Imagen" />
            </div>
            {/* Carrusel de lecciones */}
            <div className="carousel-container" >
                <Carousel interval={null} controls={true} indicators={false}>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title >Lección 1: Introducción a la cultura griega y la vestimenta</Card.Title>
                                <Card.Text className="card-text">
                                    • Breve historia de la antigua Grecia y su influencia en la moda
                                    <br />
                                    • Conceptos básicos de la vestimenta griega
                                    <br />
                                    • Descripción de los materiales utilizados en la ropa griega y su simbolismo
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Vestimenta/Leccion1" className="btn-empezar">
                                        <img src={botonEmpezar} alt="Imagen" className="button-image" />
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title>Lección 2: Ropa masculina en la cultura griega</Card.Title>
                                <Card.Text className="card-text">
                                    • Descripción detallada de las prendas utilizadas por los hombres griegos
                                    <br />
                                    • Explicación de cómo se usaban estas prendas y cómo variaban según la clase social
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Vestimenta/Leccion2" className="btn-empezar">
                                        <img src={botonEmpezar} alt="Imagen" className="button-image" />
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title >Lección 3: Ropa femenina en la cultura griega</Card.Title>
                                <Card.Text className="card-text">
                                    • Descripción de las prendas utilizadas por las mujeres griegas
                                    <br />
                                    • Diferencias entre la ropa de las mujeres casadas y las solteras
                                    <br />
                                    • Importancia de la vestimenta en la vida de las mujeres griegas y su papel en la sociedad
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Vestimenta/Leccion3" className="btn-empezar">
                                        <img src={botonEmpezar} alt="Imagen" className="button-image" />
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title>Lección 4: Accesorios y detalles de la vestimenta griega</Card.Title>
                                <Card.Text className="card-text">
                                    • Explicación de los accesorios utilizados en la cultura griega
                                    <br />
                                    • Significado simbólico de estos accesorios y cómo complementaban la vestimenta
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Vestimenta/Leccion4" className="btn-empezar">
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

export default LeccionesVestimenta;
