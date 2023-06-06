import "../../../style/css/styleEmpezar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navbar2"
import "./leccionesVestimenta.css"
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import imagenVestimenta2 from "./images/vestimenta2.jpg"
import imagenVestimenta4 from "./images/vestimenta4.png"
import imagenVestimenta6 from "./images/vestimenta6.png"
import imagenVestimenta8 from "./images/vestimenta8.jpg"

const LeccionVestimenta4 = () => {

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
                                    src={imagenVestimenta2}
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
                                    src={imagenVestimenta6}
                                    alt="..."
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={imagenVestimenta8}
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
                                            Explicación de los accesorios utilizados en la cultura griega
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
                                            Significado simbólico de estos accesorios y cómo complementaban la vestimenta
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
                                            Detalles adicionales en la cultura griega
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

export default LeccionVestimenta4;