
import "../../style/css/styleLecciones.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import botonEmpezar from "../../style/botones/empezar.png";
import titulo from "../../style/lecciones_init.png";

const LeccionesArte = () => {

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
            <div className="carousel-container abs-center" >
                <Carousel interval={null} controls={true} indicators={false}>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title >Lección 1</Card.Title>
                                <Card.Text className="card-title">
                                    Introducción a la cultura griega y su influencia artística
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Breve descripción de la cultura y la importancia del arte en la sociedad griega.
                                    <br />
                                    • Mención de los períodos artísticos clave, como el arte arcaico, clásico y helenístico.
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
                                    Arquitectura griega
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Explicación de los elementos arquitectónicos griegos, como el orden dórico, jónico y corintio.
                                    <br />
                                    • Descripción de los principales tipos de edificios, como los templos y teatros.
                                    <br />
                                    • Ejemplos destacados de la arquitectura griega, como el Partenón.
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
                                    Escultura griega
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Descripción de los estilos y técnicas escultóricas griegas, como el estilo kouros y el estilo contrapposto.
                                    <br />
                                    • Mención de los temas y motivos comunes en la escultura griega, como los dioses y atletas.
                                    <br />
                                    • Ejemplos destacados de esculturas griegas, como la Venus de Milo y el Discóbolo.
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
                                    Pintura y cerámica griega
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Explicación de la pintura y la cerámica griega y su importancia en la vida cotidiana.
                                    <br />
                                    • Descripción de los estilos y técnicas de pintura, como el estilo de figuras rojas y el estilo de figuras negras.
                                    <br />
                                    • Ejemplos destacados de pinturas y cerámicas griegas, como las ánforas y las vasijas de figuras rojas.
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Vestimenta/Leccion4" class="btn-empezar">
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
                                    Literatura y teatro griego
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Resumen de la importancia de la literatura y el teatro en la cultura griega.
                                    <br />
                                    • Mención de los principales géneros literarios, como la épica y la tragedia.
                                    <br />
                                    • Ejemplos destacados de obras literarias y teatrales griegas, como la Ilíada, la Odisea y las tragedias de Sófocles.
                                </Card.Text>
                                <Card.Text className="card-title">
                                    <Link to="/Temas/Vestimenta/Leccion4" class="btn-empezar">
                                        <img src={botonEmpezar} alt="Imagen" class="button-image" />
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <Card.Body>
                                <Card.Title>Lección 6</Card.Title>
                                <Card.Text className="card-title">
                                    Danza y música griega
                                </Card.Text>
                                <Card.Text className="card-text">
                                    • Descripción de la danza y la música en la cultura griega y su relación con el arte.
                                    <br />
                                    • Mención de los tipos de danzas y los instrumentos musicales utilizados.
                                    <br />
                                    • Ejemplos de danzas y melodías griegas.
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

export default LeccionesArte;
