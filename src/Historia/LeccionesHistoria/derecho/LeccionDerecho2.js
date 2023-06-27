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
import inicio from "../../../style/botones/inicio.png";
import informacion from "../../../style/botones/informacion.png";
import Navbar4 from "../../../components/navbar4";

const LeccionDerecho2 = () => {

    const url1 = "/Temas/Derecho/Leccion1";
    const url2 = "/Temas/Derecho/Leccion2";
    const url3 = "/Temas/Derecho/Leccion3";
    const url4 = "/Temas/Derecho/Leccion4";

    //almacenar modals por nombres
    const [modals, setModals] = useState({
        modal1: false,
        modal2: false,
        modal3: false
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
            <Navbar4
                tituloTema="Derecho"
                url1={url1}
                tituloLeccion1="Leccion1"
                url2={url2}
                tituloLeccion2="Leccion2"
                url3={url3}
                tituloLeccion3="Leccion3"
                url4={url4}
                tituloLeccion4="Leccion4"
            />
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
                                <Card.Title>Lección 2: Derechos en la antigua Grecia</Card.Title>
                                <Card.Text>
                                <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                                    2.1
                                </span>{" "}
                                    Breve descripción de los derechos.
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Derecho/Leccion2">
                                        <img onClick={() => handleOpenModal('modal1')}src={informacion} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Breve descripción de los derechos.</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <p>
                                        La ciudadanía y la democracia eran conceptos estrechamente relacionados. La ciudadanía implicaba derechos y deberes hacia la comunidad, incluyendo la participación en la asamblea y en los tribunales. 
                                        La democracia se basaba en la idea de que el poder residía en el pueblo y que los ciudadanos tenían la capacidad y la responsabilidad de participar activamente en la toma de decisiones políticas. 
                                        Estos conceptos sentaron las bases para el desarrollo de los sistemas políticos y los ideales de ciudadanía y democracia en la sociedad moderna.
                                        <br/><br/>
                                        <img src={derecho4} alt="Imagen" style={{ width: '50%', height: '50%',  display: "block",margin: "auto" }}/>
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
                                <Card.Title>Lección 2: Derechos en la antigua Grecia</Card.Title>
                                <Card.Text>
                                <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                                    2.2
                                </span>{" "}
                                    Introducción a la historia de Grecia y su influencia en la concepción de los derechos.
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Derecho/Leccion2">
                                        <img  onClick={() => handleOpenModal('modal2')}src={informacion} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal2} onHide={() => handleCloseModal('modal2')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Introducción a la historia de Grecia y su influencia en la concepción de los derechos.</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <h2 class="text-center">
                                            <b>2.1 </b>Introducción
                                        </h2>
                                           <p> En la sociedad ateniense de la antigua Grecia, los derechos estaban vinculados a la ciudadanía y se aplicaban de manera específica a los ciudadanos varones adultos y libres. Aunque los derechos en Atenas eran más limitados en comparación con las concepciones modernas, todavía se reconocían ciertos privilegios y protecciones para los ciudadanos.
                                           <br/><br/>
                                           <img src={derecho2} alt="Imagen" style={{ width: '50%', height: '50%',  display: "block",margin: "auto" }}/>
                                           <br/>
                                            <h6>Participación política</h6> Uno de los derechos fundamentales en Atenas era el derecho a participar en la asamblea ciudadana. 
                                            Los ciudadanos tenían el derecho y la responsabilidad de asistir a las reuniones de la asamblea, donde se discutían y votaban los asuntos públicos. Esto les permitía expresar sus opiniones, proponer leyes y tomar parte activa 
                                            en la toma de decisiones políticas de la polis.
                                            <br/><br/>
                                            <h6>Derecho a un juicio justo</h6> Los ciudadanos tenían el derecho a ser juzgados por sus pares en los tribunales. Los juicios eran públicos y los ciudadanos tenían la oportunidad de presentar su defensa y argumentar su caso ante un jurado compuesto por otros ciudadanos. 
                                            Esto garantizaba cierto grado de igualdad y participación en el proceso legal.
                                            <br/><br/>
                                            <h6>Derechos de propiedad</h6> Los ciudadanos atenienses tenían el derecho a poseer y heredar propiedades. 
                                            Podían adquirir y administrar tierras, casas y otros bienes. Este derecho a la propiedad privada les permitía 
                                            participar en la economía de la polis a través de actividades comerciales y agrícolas.
                                            <br/><br/>
                                            <h6>Igualdad ante la ley</h6> En Atenas, se reconocía la igualdad ante la ley para los ciudadanos. 
                                            Todos los ciudadanos, sin importar su estatus social o riqueza, tenían los mismos derechos y debían ser tratados de manera justa en los tribunales y en la esfera pública.
                                            <br/><br/>
                                            <img src={derecho1} alt="Imagen" style={{ width: '50%', height: '50%',  display: "block",margin: "auto" }}/>
                                            <br/>
                                            Sin embargo, es importante tener en cuenta que estos derechos se limitaban a los ciudadanos masculinos 
                                            adultos y libres. Las mujeres, los esclavos y los extranjeros no tenían los mismos derechos y no eran 
                                            considerados ciudadanos en pleno sentido. Además, las decisiones políticas y los asuntos públicos en Atenas 
                                            estaban dominados por un número relativamente pequeño de ciudadanos ricos y poderosos, excluyendo a gran parte 
                                            de la población.En la sociedad ateniense, los derechos se aplicaban principalmente a los ciudadanos varones 
                                            adultos y libres, quienes tenían el derecho de participar en la asamblea, ser juzgados por sus pares y poseer 
                                            propiedades. Aunque los derechos eran limitados y excluían a las mujeres, los esclavos y los extranjeros, 
                                            sentaron las bases para futuros conceptos de ciudadanía y derechos en las sociedades posteriores.
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
                    <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                        <Card style={{ width: '400px', height: '300px' }}>
                            <Card.Body>
                                <Card.Title>Lección 2: Derechos en la antigua Grecia.</Card.Title>
                                <Card.Text>
                                <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                                    2.3
                                </span>{" "}
                                    Limitaciones y exclusiones en los derechos en la antigua Grecia.
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Derecho/Leccion2">
                                        <img  onClick={() => handleOpenModal('modal3')}src={informacion} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal3} onHide={() => handleCloseModal('modal3')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Limitaciones y exclusiones en los derechos en la antigua Grecia.</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <h2 class="text-center">
                                            <b>2.2 </b>Limitaciones
                                        </h2>
                                        <p>
                                        En la antigua Grecia, a pesar de la existencia de ciertos derechos para los ciudadanos, también había limitaciones y exclusiones significativas que restringían el acceso a los derechos y privilegios en la sociedad ateniense. Estas limitaciones y exclusiones se basaban en diversos criterios, como el género, la condición de esclavo y la condición de extranjero.
                                        <br/><br/>
                                        Exclusión de las mujeres: Las mujeres en la antigua Grecia estaban excluidas de la ciudadanía y, por lo tanto, carecían de muchos derechos políticos y legales. No podían participar en la asamblea ciudadana ni en los tribunales. Además, tenían limitaciones en cuanto a la propiedad y herencia de bienes. Su papel se centraba en el ámbito doméstico y la crianza de los hijos.
                                        <br/><br/>
                                        Esclavitud: La esclavitud era una realidad en la antigua Grecia, y los esclavos no tenían derechos ni estatus ciudadano. Eran considerados propiedad y carecían de libertad y derechos básicos. No tenían voz en la política y estaban sujetos a la voluntad de sus amos.
                                        <br/><br/>
                                        Extranjeros: Los extranjeros, conocidos como "metecos", tampoco tenían los mismos derechos que los ciudadanos atenienses. Aunque algunos metecos tenían ciertos derechos legales y podían participar en actividades comerciales, no tenían el derecho a la plena ciudadanía ni a participar en la política.
                                        <br/><br/>
                                        Exclusión socioeconómica: Aunque los derechos se otorgaban a los ciudadanos, no todos los ciudadanos tenían los mismos derechos y privilegios. La participación en la política y la toma de decisiones estaba sesgada hacia los ciudadanos ricos y poderosos, excluyendo a gran parte de la población que no tenía los recursos económicos para participar plenamente en la vida política.
                                        </p><br/>
                                        <img src={derecho5} alt="Imagen" style={{ width: '50%', height: '50%',  display: "block",margin: "auto" }}/>                                        
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="secondary" onClick={() => handleCloseModal('modal3')}>
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
            <Link to="/Temas/Derecho">
            <img src={inicio} class="img-fluid" alt="Imagen" />
            </Link>   
        </div>
    </div>
    );
};

export default LeccionDerecho2;