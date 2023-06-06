import "../../../style/css/styleEmpezar.css"
import "../../../style/css/contenedores.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import leccionArte1 from "../../Images/leccionArte1.jpg";
import leccionArte2 from "../../Images/leccionArte2.jpg";
import leccionArte3 from "../../Images/leccionArte3.jpg";
import leccionArte4 from "../../Images/leccionArte4.jpg";
import leccionArte5 from "../../Images/leccionArte5.jpg";
import leccionArte6 from "../../Images/leccionArte6.png";
import lecArte from "../../../style/titulos/LecArte.png";
import informacion from "../../../style/botones/informacion.png";
import video from "../../../style/botones/ver_video.png";
import NavbarPrincipal from "../../../components/navbar2"
import YouTube from 'react-youtube';

const LeccionArte = () => {

    const [modals, setModals] = useState({
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false
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

    const videoId = 'ioVG56GyvfI'; // ID del video de YouTube que deseas reproducir

    return (
        <div className="contenedorArte">
            <NavbarPrincipal/>
            <div class="titulo-empezar">
                    <img src={lecArte} class="img-fluid" alt="Imagen" />
            </div>
            <div className="row align-items-center" style={{ marginTop: '0px' }}>
                <div class="col-sm-5 col-md-6 ">
                <Carousel interval={2000} controls={true} indicators={true} className="fondo-card">
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                            <Card style={{ width: '800px', height: '300px' }}>
                                <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                    <img src={leccionArte1} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                    <img src={leccionArte2} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                    <img src={leccionArte3} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                    <img src={leccionArte4} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                    <img src={leccionArte5} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                    <img src={leccionArte6} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                    Introducción a la cultura griega y su influencia artística
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Arte/Leccion1">
                                        <img onClick={() => handleOpenModal('modal1')}src={informacion} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Introducción a la cultura griega y su influencia artística</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <p>La cultura griega ha sido una de las más influyentes en la historia de la humanidad, especialmente en el ámbito artístico. La antigua Grecia, conocida como la cuna de la civilización occidental, floreció desde el siglo VIII a.C. hasta el siglo VI d.C. Durante este período, los griegos dejaron un legado duradero en la literatura, la filosofía, la política, la arquitectura, el teatro y las artes visuales.La influencia de la cultura griega en el arte se puede ver en varios aspectos. Uno de los más destacados es la escultura. Los griegos desarrollaron un estilo único y naturalista, enfocado en representar el cuerpo humano de manera realista y estéticamente equilibrada. Sus esculturas eran famosas por su sentido del movimiento y su atención al detalle anatómico. Un ejemplo destacado de esta influencia es la escultura del Doríforo, creada por el escultor griego Policleto.
                                            Otra forma de arte griego influyente es la arquitectura.</p>
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
                        <Card style={{ width: '1000px', height: '300px' }}>
                            <Card.Body>
                                <Card.Title>Lección 2</Card.Title>
                                <Card.Text>
                                    Arquitectura griega
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Arte/Leccion1">
                                        <img  onClick={() => handleOpenModal('modal2')}src={informacion} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal2} onHide={() => handleCloseModal('modal2')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Arquitectura griega</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <p>El estilo arquitectónico más común en la arquitectura griega antigua es el orden dórico, jónico y corintio, cada uno con sus propias características distintivas. 
                                            El orden dórico es el más antiguo y se caracteriza por sus columnas robustas y sin base, capiteles sencillos y frisos decorados con triglifos y metopas. 
                                            El orden jónico es más ornamental y se distingue por sus columnas delgadas y elegantes, capiteles con volutas y frisos decorados con relieves. 
                                            El orden corintio es el más elaborado y presenta columnas esbeltas, capiteles con hojas de acanto y frisos ricamente decorados.
                                            La arquitectura griega antigua también se destaca por su uso del proporción y la geometría. 
                                            Los arquitectos griegos aplicaban principios matemáticos y estéticos en el diseño de sus estructuras para lograr la armonía visual y la belleza. 
                                            El uso del ángulo de inclinación en las columnas y la proporción áurea son ejemplos de estos principios.
                                            Además de los templos, los teatros también fueron importantes en la arquitectura griega antigua. 
                                            Estos teatros al aire libre tenían una forma semicircular y estaban construidos en laderas de colinas para aprovechar la acústica natural.
                                            El teatro de Epidauro y el teatro de Dionisio en Atenas son ejemplos destacados de teatros griegos antiguos.</p>
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
                    <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                        <Card style={{ width: '1000px', height: '300px' }}>
                            <Card.Body>
                                <Card.Title>Lección 6</Card.Title>
                                <Card.Text>
                                    Danza y música griega antigua
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Arte/Leccion1">
                                        <img  onClick={() => handleOpenModal('modal6')} src={video} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal6} onHide={() => handleCloseModal('modal6')} scrollable={true}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>Introducción a la cultura griega y su influencia artística</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <YouTube videoId={videoId} opts={{ width: '100%', height: '100%' }} />
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="secondary" onClick={() => handleCloseModal('modal6')}>
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
    </div>
    );
};

export default LeccionArte;