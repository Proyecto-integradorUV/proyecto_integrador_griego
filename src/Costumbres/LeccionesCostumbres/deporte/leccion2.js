import "../../../style/css/styleEmpezar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navbar2"
import "./leccionesDeporte.css"
import lecDeporte from "../../../style/titulos/deporte.png";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import siguiente from "../../../style/botones/siguiente.png";
import anterior from "../../../style/botones/anterior.png";
import imagenModal1 from "./images/piticos.jpg";
import imagenModal2 from "./images/Ístmicos.jpg";
import imagenModal3 from "./images/Nemeos.jpg";

const LeccionDeporte2 = () => {

    const [modals, setModals] = useState({
        modal1: false
    });

    // Funciones de manejo para abrir/cerrar cada modal
    const handleOpenModal = (modalName) => {
        setModals((prevState) => ({
            ...prevState,
            [modalName]: true,
        }));
    };

    const handleCloseModal = (modalName) => {
        setModals((prevState) => ({
            ...prevState,
            [modalName]: false,
        }));
    };

    // const videoId = 'ioVG56GyvfI'; // ID del video de YouTube que deseas reproducir

    return (
        <div className="container-leccionDeporte">
            <NavbarPrincipal />
            <div class="titulo-empezar">
                <img src={lecDeporte} class="img-fluid" alt="Imagen" />
            </div>
            <div className="row align-items-center" style={{ marginTop: '0px' }}>
                <div class="col-sm-5 col-md-6 ">
                    <Carousel interval={2000} controls={true} indicators={true} className="fondo-card">
                        <Carousel.Item>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                <Card style={{ width: '800px', height: '300px' }}>
                                    <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                            <img src={imagenModal1} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                <Card style={{ width: '800px', height: '300px' }}>
                                    <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                            <img src={imagenModal2} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                <Card style={{ width: '1000px', height: '300px' }}>
                                    <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                            <img src={imagenModal3} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0" >
                    <Carousel interval={null} controls={true} indicators={false} className="fondo-card">
                        <Carousel.Item>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                <Card style={{ width: '1000px', height: '300px' }}>
                                    <Card.Body>
                                        <Card.Title>Lección 2</Card.Title>
                                        <Card.Text>
                                            Juegos <b>panhelenicos</b>
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/Deporte/Leccion2">
                                                <img onClick={() => handleOpenModal('modal1')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Juegos panhelenicos</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>Además de los Juegos Olímpicos, existían otros juegos panhelénicos que se llevaban a cabo en diferentes lugares de Grecia.</p>
                                                    <p>
                                                        Estos incluían los Juegos Píticos
                                                    </p>
                                                    <img src={imagenModal1} class="img-fluid" alt="Imagen" style={{ width: "40%", height: "40%", display: "block", margin: "auto" }} />
                                                    <p>
                                                        Los Juegos Ístmicos 
                                                    </p>
                                                    <img src={imagenModal2} class="img-fluid" alt="Imagen" style={{ width: "40%", height: "40%", display: "block", margin: "auto" }} />
                                                    <p>
                                                        Los Juegos Nemeos, entre otros.
                                                    </p>
                                                    <img src={imagenModal3} class="img-fluid" alt="Imagen" style={{ width: "40%", height: "40%", display: "block", margin: "auto" }} />
                                                    <p>
                                                        Cada uno de estos eventos tenía su propia importancia y atraía a competidores de toda Grecia
                                                    </p>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={() => handleCloseModal('modal1')}>
                                                        Cerrar
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div class="botones-lecciones">
                <Link to="/Temas/Deporte/Leccion1">
                    <img src={anterior} class="img-fluid" alt="Imagen" />
                </Link>
                <Link to="/Temas/Deporte/Leccion3">
                    <img src={siguiente} class="img-fluid" alt="Imagen" />
                </Link>
            </div>
        </div>
    );
};

export default LeccionDeporte2;