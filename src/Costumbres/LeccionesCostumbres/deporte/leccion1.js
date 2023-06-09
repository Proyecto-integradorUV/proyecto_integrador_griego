import "../../../style/css/styleEmpezar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navbar2"
import "./leccionesDeporte.css"
import lecCostumbres from "../../../style/titulos/LecCostumbres.png";
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import siguiente from "../../../style/botones/siguiente.png";
import anterior from "../../../style/botones/anterior.png";
import imagenModal1 from "./images/carreras.jpg";
import imagenModal2 from "./images/lanzamiento disco.jpg";
import imagenModal3 from "./images/jabalina.png";
import imagenModal4 from "./images/lucha.jpg";
import imagenModal5 from "./images/pugilato.jpg";
import imagenModal6 from "./images/pentatlon.jpg";

const LeccionDeporte1 = () => {

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
                <img src={lecCostumbres} alt="Imagen" style={{justifyContent: "center"}} />
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
                                            <img src={imagenModal2} alt="Imagen" style={{ width: '70%', height: '70%', objectFit: 'contain' }} />
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
                        <Carousel.Item>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                <Card style={{ width: '1000px', height: '300px' }}>
                                    <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                            <img src={imagenModal4} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                            <img src={imagenModal5} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                            <img src={imagenModal6} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                        <Card.Title>Lección 1</Card.Title>
                                        <Card.Text>
                                            Juegos olimpicos
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/Deporte/Leccion1">
                                                <img onClick={() => handleOpenModal('modal1')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Juegos olimpicos</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>Los Juegos Olímpicos eran el evento deportivo más prestigioso y se celebraban cada cuatro años en la ciudad de Olimpia.
                                                        Durante los juegos, atletas de diferentes ciudades-estado griegas competían en disciplinas como:  </p>
                                                    <p>
                                                        • Carreras.
                                                    </p>
                                                    <img src={imagenModal1} class="img-fluid" alt="Imagen" style={{ width: "40%", height: "40%", display: "block", margin: "auto" }} />
                                                    <p>
                                                        • Lanzamiento de disco y jabalina.
                                                    </p>
                                                    <div>
                                                        <img src={imagenModal2} alt="Imagen" style={{ width: "30%", height: "30%", display: "block", margin: "auto", borderRadius: "40%" }} />
                                                        <img src={imagenModal3} alt="Imagen" style={{ width: "30%", height: "30%", display: "block", margin: "auto", borderRadius: "40%" }} />
                                                    </div>
                                                    <p>
                                                        • Lucha libre.
                                                    </p>
                                                    <img src={imagenModal4} class="img-fluid" alt="Imagen" style={{ width: "30%", height: "30%", display: "block", margin: "auto" }} />
                                                    <p>
                                                        • Pugilato.
                                                    </p>
                                                    <img src={imagenModal5} class="img-fluid" alt="Imagen" style={{ width: "30%", height: "30%", display: "block", margin: "auto"}} />
                                                    <p>
                                                        • Pentatlón.
                                                    </p>
                                                    <img src={imagenModal6} class="img-fluid" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto" }} />
                                                    <p>Los juegos no solo destacaban la habilidad atlética, sino también los valores de la competencia justa y el espíritu deportivo.</p>
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
            <div class="botones-sig-ant">
                <Link to="/Temas/Deporte/Lecciones">
                    <img src={anterior} class="img-fluid" alt="Imagen" />
                </Link>
                <Link to="/Temas/Deporte/Leccion2">
                    <img src={siguiente} class="img-fluid" alt="Imagen" />
                </Link>
            </div>
        </div>
    );
};

export default LeccionDeporte1;