import "../../../style/css/styleEmpezar.css"
import "../../../style/css/contenedores.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Arte1 from "./images/Arte1.jpg";
import Arte2 from "./images/Arte2.jpg";
import Arte3 from "./images/Arte3.jpg";
import Arte4 from "./images/Arte4.jpg";
import Arte5 from "./images/Arte5.jpg";
import Arte6 from "./images/Arte6.png";
import teatro1 from "./images/teatro1.jpg";
import teatro2 from "./images/teatro2.jpg";
import arte from "../../../style/titulos/arte.png";
import siguiente from "../../../style/botones/siguiente.png";
import anterior from "../../../style/botones/anterior.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navbar2"

const LeccionArte5 = () => {

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
        <div className="contenedorArte">
            <NavbarPrincipal/>
            <div class="titulo-empezar">
                    <img src={arte} class="img-fluid" alt="Imagen" />
            </div>
            <div className="row align-items-center" style={{ marginTop: '0px' }}>
                <div class="col-sm-5 col-md-6 ">
                <Carousel interval={2000} controls={true} indicators={true} className="fondo-card">
                    <Carousel.Item>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                            <Card style={{ width: '400px', height: '300px' }}>
                                <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                    <img src={Arte5} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                    <img src={Arte2} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                    <img src={Arte3} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                    <img src={Arte4} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                    <img src={Arte1} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                    <img src={Arte6} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                            <Card style={{ width: '400px', height: '300px' }}>
                            <Card.Body>
                                <Card.Title>Lección 5: introduccion al teatro griego</Card.Title>
                                <Card.Text>
                                    Importancia del teatro antiguo griego.
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Arte/Leccion5">
                                        <img onClick={() => handleOpenModal('modal1')}src={informacion} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Importancia del teatro antiguo griego.</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <p>El teatro griego antiguo desempeñó un papel significativo en la sociedad griega y tuvo una gran importancia en varios aspectos. 
                                        Aquí están algunas de las razones por las cuales el teatro griego antiguo fue importante:
                                        <br/>
                                        <img src={teatro1} alt="Imagen" style={{ width: '30%', height: '30%',  display: "block",margin: "auto", borderRadius: "20%"}}/><br/>
                                        Expresión cultural: El teatro griego fue una forma de expresión artística y cultural que permitía a los ciudadanos griegos explorar y reflexionar sobre temas importantes de la vida humana, como el destino, la moralidad, la política, la religión y la condición humana en general. Las obras de teatro eran una plataforma para la discusión y el debate sobre cuestiones sociales y filosóficas, lo que ayudaba a definir la identidad y los valores de la sociedad griega.
                                        <br/><br/>
                                        Entretenimiento y escapismo: Las representaciones teatrales proporcionaban entretenimiento y esparcimiento para los ciudadanos griegos. Los festivales teatrales, como las Dionisias en Atenas, eran eventos populares y esperados, donde la gente podía disfrutar de obras de teatro, música y danza. 
                                        Estas representaciones brindaban una forma de escapar de la rutina diaria y sumergirse en la narrativa y el drama.
                                        <br/><br/>
                                        Preservación de la mitología y la historia: Muchas de las obras de teatro griegas se basaban en mitos y leyendas de la mitología griega, así como en eventos históricos. 
                                        Estas obras ayudaron a preservar y transmitir las historias y tradiciones de la antigua Grecia a través de generaciones. También desempeñaron un papel en la educación, ya que las representaciones teatrales eran una forma de enseñanza y transmisión de conocimientos y valores culturales.
                                        <br/><br/>
                                        Influencia política y social: El teatro griego tenía una dimensión política y social importante. 
                                        Las tragedias, en particular, a menudo trataban temas políticos y morales, cuestionando el poder y la autoridad, y explorando las consecuencias de las acciones humanas. 
                                        Estas obras podían tener un impacto en la opinión pública y en la reflexión crítica sobre el gobierno y la sociedad en general.
                                        <br/><br/>
                                        Innovación artística: El teatro griego antiguo fue un lugar de experimentación y desarrollo artístico. 
                                        Introdujo nuevas formas de expresión dramática, como el diálogo, los coros y el uso de máscaras, y sentó las bases para la dramaturgia y el teatro posterior. 
                                        También se exploraron técnicas escénicas, el uso de la música y la danza, y la creación de decorados y vestuarios.</p><br/>
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
                                <Card.Title>Lección 5: introduccion al teatro griego</Card.Title>
                                <Card.Text>
                                    Antiguas obras teatrales de grecia
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Arte/Leccion5">
                                        <img  onClick={() => handleOpenModal('modal2')}src={informacion} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal2} onHide={() => handleCloseModal('modal2')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Antiguas obras teatrales de grecia</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <p>Existen varias obras teatrales antiguas de la Grecia clásica que son consideradas pilares fundamentales en la historia del teatro. Aquí hay algunas de las más destacadas:
                                        <br/><br/>
                                        "La Orestíada" de Esquilo: Es una trilogía de tragedias compuesta por "Agamenón", "Las Coéforas" y "Las Euménides". 
                                        La obra narra la historia de la familia maldita de los Atridas, centrándose en los temas de la venganza, la justicia y la reconciliación.
                                        <br/><br/>
                                        "Edipo Rey" de Sófocles: Es una tragedia que cuenta la historia del rey Edipo, quien sin saberlo, mata a su padre y se casa con su madre. 
                                        La obra explora temas como el destino, la identidad y la búsqueda de la verdad.<br/>
                                        <img src={teatro2} alt="Imagen" style={{ width: '30%', height: '30%',  display: "block",margin: "auto", borderRadius: "20%"}}/><br/>
                                        <br/>
                                        "Medea" de Eurípides: Esta tragedia sigue la historia de Medea, una mujer traicionada por su esposo, Jasón. 
                                        Medea toma venganza de manera despiadada, cometiendo actos terribles. La obra explora temas como la venganza, el amor y la posición de la mujer en la sociedad.
                                        <br/><br/>
                                        "Las Nubes" de Aristófanes: Es una comedia satírica que critica la filosofía y la educación de la época. 
                                        La obra se burla de Sócrates y los sofistas, utilizando el humor para cuestionar las ideas y las creencias establecidas.
                                        <br/><br/>
                                        "Las avispas" de Aristófanes: Otra comedia de Aristófanes, se burla de la adicción de Atenas a los juicios legales. 
                                        La obra presenta a un personaje que se obsesiona con los juicios y satiriza el sistema judicial de la época.
                                        <br/><br/>
                                        "Las ranas" de Aristófanes: Una comedia en la que Dioniso, el dios del teatro, baja al inframundo para rescatar a Esquilo y Eurípides, y juzgar quién es el mejor poeta trágico. 
                                        La obra critica a los poetas contemporáneos y aborda temas de la calidad artística.</p>
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
        <div class="botones-lecciones">
            <Link to="/Temas/Arte/Leccion4">
            <img src={anterior} class="img-fluid" alt="Imagen" />
            </Link>
            <Link to="/Temas/Arte/Leccion6">
            <img src={siguiente} class="img-fluid" alt="Imagen" />
            </Link>     
        </div>
    </div>
    );
};

export default LeccionArte5;