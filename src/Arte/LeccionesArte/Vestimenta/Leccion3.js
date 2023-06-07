import "../../../style/css/styleEmpezar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navbar2"
import "./leccionesVestimenta.css"
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import imagenVestimenta1 from "./images/vestimenta1.jpg"
import imagenVestimenta3 from "./images/vestimenta3.png"
import imagenVestimenta5 from "./images/vestimenta5.jpg"
import imagenVestimenta7 from "./images/vestimenta7.jpg"

const LeccionVestimenta3 = () => {

    return (
        <div className="container-leccionVestimenta">
            <NavbarPrincipal />
            <div class="container text-center" >
                <div class="row align-items-center" style={{ height: '100vh' }}>
                    <div class="col-sm-5 col-md-6 ">
                        <Carousel interval={null} controls={true} indicators={true}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={imagenVestimenta1}
                                    alt="..."
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={imagenVestimenta3}
                                    alt="..."
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={imagenVestimenta5}
                                    alt="..."
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={imagenVestimenta7}
                                    alt="..."
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0" >
                        <Carousel interval={null} controls={true} indicators={false}>
                            <Carousel.Item>
                                <Card>
                                    <Card.Body>
                                        <Card.Text className="card-title">
                                            Descripción de las prendas utilizadas por las mujeres griegas
                                        </Card.Text>
                                        <Card.Text className="card-title">
                                            <Link class="btn-empezar">
                                                <img src={informacion} alt="Imagen" class="button-image" />
                                            </Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card>
                                    <Card.Body>
                                        <Card.Text className="card-title">
                                            Diferencias entre la ropa de las mujeres casadas y las solteras
                                        </Card.Text>
                                        <Card.Text className="card-title">
                                            <Link class="btn-empezar">
                                                <img src={informacion} alt="Imagen" class="button-image" />
                                            </Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card>
                                    <Card.Body>
                                        <Card.Text className="card-title">
                                            Importancia de la vestimenta en la vida de las mujeres griegas y su papel en la sociedad
                                        </Card.Text>
                                        <Card.Text className="card-title">
                                            <Link class="btn-empezar">
                                                <img src={informacion} alt="Imagen" class="button-image" />
                                            </Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeccionVestimenta3;