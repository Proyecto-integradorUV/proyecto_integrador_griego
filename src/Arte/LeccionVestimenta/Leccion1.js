import "../../style/css/styleEmpezar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./leccionesVestimenta.css"
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import informacion from "../../style/botones/informacion.png";
import NavbarPrincipal from "../../components/navbar2"
import imagenVestimenta1 from "./images/vestimenta1.jpg"
import imagenVestimenta2 from "./images/vestimenta2.jpg"
import imagenVestimenta3 from "./images/vestimenta3.png"
import imagenVestimenta4 from "./images/vestimenta4.png"
import imagenVestimenta5 from "./images/vestimenta5.webp"

const LeccionVestimenta1 = () => {

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
                                    src={imagenVestimenta2}
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
                                    src={imagenVestimenta4}
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
                        </Carousel>
                    </div>
                    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0" >
                        <Carousel interval={null} controls={true} indicators={false}>
                            <Carousel.Item>
                                <Card>
                                    <Card.Body>
                                        <Card.Text className="card-title">
                                            Breve historia de la antigua Grecia y su influencia en la moda
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
                                            Conceptos básicos de la vestimenta griega, como la toga y el peplo
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
                                            Descripción de los materiales utilizados en la ropa griega y su simbolismo
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

export default LeccionVestimenta1;