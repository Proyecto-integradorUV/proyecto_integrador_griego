
import "../../../style/css/styleLecciones.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import botonEmpezar from "../../../style/botones/empezar.png";
import titulo from "../../../style/titulos/lecciones_init.png";

const LeccionesVestimenta = () => {

    return (
        <div className="contenedorArte">
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
            <div className="carousel-container" >
                <Carousel interval={null} controls={true} indicators={false}>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title >Lección 1</Card.Title>
                                <Card.Text className="card-title">
                                    Introducción a la cultura griega y la vestimenta
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Breve historia de la antigua Grecia y su influencia en la moda.
                                    <br />
                                    • Conceptos básicos de la vestimenta griega, como la toga y el peplo.
                                    <br />
                                    • Descripción de los materiales utilizados en la ropa griega y su simbolismo.
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
                                    Ropa masculina en la cultura griega
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Descripción detallada de las prendas utilizadas por los hombres griegos, como el himation y el chiton.
                                    <br />
                                    • Explicación de cómo se usaban estas prendas y cómo variaban según la clase social.
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
                                    Ropa femenina en la cultura griega
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Descripción de las prendas utilizadas por las mujeres griegas, como el peplo y el chiton.
                                    <br />
                                    • Diferencias entre la ropa de las mujeres casadas y las solteras.
                                    <br />
                                    • Importancia de la vestimenta en la vida de las mujeres griegas y su papel en la sociedad.
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
                                    Accesorios y detalles de la vestimenta griega
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Explicación de los accesorios utilizados en la cultura griega, como joyas, cinturones y sandalias.
                                    <br />
                                    • Significado simbólico de estos accesorios y cómo complementaban la vestimenta.
                                    <br />
                                    • Detalles adicionales, como peinados y maquillaje en la cultura griega.
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

export default LeccionesVestimenta;
