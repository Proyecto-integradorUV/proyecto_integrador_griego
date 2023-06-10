import "../../../style/css/styleEmpezar.css"
import "../../../style/css/contenedores.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import derecho1 from "./images/derecho1.jpg";
import derecho2 from "./images/derecho2.jpg";
import derecho3 from "./images/derecho3.jpg";
import derecho4 from "./images/derecho4.jpg";
import derecho5 from "./images/derecho5.jpg";
import derecho6 from "./images/derecho6.jpg";
import derechos from "../../../style/titulos/derechos.png";
import siguiente from "../../../style/botones/siguiente.png";
import anterior from "../../../style/botones/anterior.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navbar2"

const LeccionDerecho1 = () => {

    //almacenar modals por nombres
    const [modals, setModals] = useState({
        modal1: false,
        modal2: false
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

    return (
        <div className="contenedorHistoria">
            <NavbarPrincipal/>
            <div class="titulo-empezar">
                    <img src={derechos} class="img-fluid" alt="Imagen" />
            </div>
            <div className="row align-items-center" style={{ marginTop: '0px' }}>
                <div class="col-sm-5 col-md-6 ">
                <Carousel interval={2000} controls={true} indicators={true} className="fondo-card">
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                            <Card style={{ width: '400px', height: '300px' }}>
                                <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                    <img src={derecho1} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                </Card.Body>
                            </Card>
                        </div> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                            <Card style={{ width: '400px', height: '300px' }}>
                                <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                    <img src={derecho2} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                            <Card style={{ width: '400px', height: '300px' }}>
                                <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                    <img src={derecho3} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                            <Card style={{ width: '400px', height: '300px' }}>
                                <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                    <img src={derecho4} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                            <Card style={{ width: '400px', height: '300px' }}>
                                <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                    <img src={derecho5} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                            <Card style={{ width: '400px', height: '300px' }}>
                                <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                    <img src={derecho6} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                        <Card style={{ width: '400', height: '300px' }}>
                            <Card.Body>
                                <Card.Title>Lección 1: Introducción a los derechos y la historia de Grecia</Card.Title>
                                <Card.Text>
                                    Explicación de los derechos y por qué son importantes
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Derecho/Leccion1">
                                        <img onClick={() => handleOpenModal('modal1')}src={informacion} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Breve descripción de la cultura y la importancia del arte en la sociedad griega.</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <p>
                                        el concepto de derechos y la noción de ciudadanía tenían una importancia fundamental en la vida política y social de las polis (ciudades-estado griegas). 
                                        Aunque el concepto de derechos no era tan amplio ni universal como en las sociedades modernas, existían ciertos principios y privilegios que se asociaban con la ciudadanía y que establecían ciertos límites al poder de los gobernantes.<br/>
                                        Los derechos en la antigua Grecia estaban ligados a la condición de ciudadano, que se obtenía por nacimiento y estaba reservada a los hombres libres y adultos. 
                                        Las mujeres, los esclavos y los extranjeros no tenían los mismos derechos y no eran considerados ciudadanos en pleno sentido.
                                        <br/><br/>
                                        Uno de los derechos más importantes en la antigua Grecia era el derecho a participar en la toma de decisiones políticas. 
                                        Los ciudadanos tenían el derecho y la responsabilidad de asistir a la asamblea ciudadana, donde se discutían y votaban los asuntos públicos. 
                                        Allí podían expresar sus opiniones, proponer leyes y tomar parte en la vida política de su polis.<br/><br/>
                                        <img src={derecho6} alt="Imagen" style={{ width: '50%', height: '50%',  display: "block",margin: "auto" }}/>
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
                    <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                        <Card style={{ width: '400px', height: '300px' }}>
                            <Card.Body>
                                <Card.Title>Lección 1: Introducción e influencia de los derechos.</Card.Title>
                                <Card.Text>
                                    Introducción a la historia de Grecia y su influencia en la concepción de los derechos.
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Derecho/Leccion1">
                                        <img  onClick={() => handleOpenModal('modal2')}src={informacion} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal2} onHide={() => handleCloseModal('modal2')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Mención de los períodos artísticos clave, como el arte arcaico, clásico y helenístico.</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <p> Desde la época arcaica hasta la antigua Grecia, las polis griegas, como Atenas y Esparta, surgieron como ciudades-estado autónomas con sus propias leyes y formas de gobierno. 
                                            Atenas, en particular, es conocida por haber establecido los fundamentos de la democracia directa, donde los ciudadanos participaban activamente en la toma de decisiones políticas.
                                        <br/><br/>
                                        En la antigua Grecia, se desarrolló la noción de ciudadanía, que otorgaba derechos y privilegios a los hombres libres y adultos. 
                                        Estos ciudadanos tenían derecho a participar en la asamblea ciudadana, donde se discutían y votaban los asuntos públicos, y también tenían derecho a ser juzgados por sus pares en los tribunales. Además, se reconocía el derecho a la propiedad privada y a participar en la economía.
                                        <br/><br/>
                                        Estos conceptos de ciudadanía y participación política sentaron las bases para la concepción de los derechos en la historia occidental. 
                                        La idea de que los ciudadanos tienen derechos inherentes y que deben tener la oportunidad de participar en la toma de decisiones políticas se convirtió en un aspecto fundamental de la democracia moderna.
                                        <br/><br/>
                                        La influencia de la cultura griega se extendió más allá de su territorio y se transmitió a través de la expansión del imperio de Alejandro Magno y la posterior dominación romana. 
                                        Los romanos adoptaron muchos aspectos de la cultura griega, incluidas sus ideas sobre la ciudadanía y los derechos.
                                        <br/><br/>
                                        A medida que las ideas y los conocimientos de la antigua Grecia se transmitieron a través de los siglos, influyeron en los 
                                        filósofos y pensadores de la Ilustración en Europa, quienes retomaron y desarrollaron conceptos como la igualdad, la libertad y la justicia, que se convirtieron en pilares de los derechos humanos modernos.
                                        <br/><br/>
                                        <img src={derecho4} alt="Imagen" style={{ width: '50%', height: '50%',  display: "block",margin: "auto" }}/>
                                        </p>                                        
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="secondary" onClick={() => handleCloseModal('modal2')}>
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
        <div class="titulo-empezar">
            <Link to="/Temas/Derecho/Lecciones">
            <img src={anterior} class="img-fluid" alt="Imagen" />
            </Link>
            <Link to="/Temas/Derecho/Leccion2">
            <img src={siguiente} class="img-fluid" alt="Imagen" />
            </Link>     
        </div>
    </div>
    );
};

export default LeccionDerecho1;