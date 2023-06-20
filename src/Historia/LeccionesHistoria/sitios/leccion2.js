import "../../../style/css/styleEmpezar.css"
import "../../../style/css/contenedores.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import "./leccionesSitios.css"
import { Carousel, Card, Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import lecSitios from "../../../style/titulos/sitios.png";
import informacion from "../../../style/botones/informacion.png";
// import video from "../../../style/botones/ver_video.png";
import NavbarPrincipal from "../../../components/navbar2"
// import YouTube from 'react-youtube';
import siguiente from "../../../style/botones/siguiente.png";
import anterior from "../../../style/botones/anterior.png";
import imagenModal1 from "./images/atenas.jpg";
import imagenModal2 from "./images/acropolis.jpg";
import imagenModal3 from "./images/partenon.jpg";
import imagenModal4 from "./images/Erecteion.jpg";
import imagenModal5 from "./images/AteneaNike.jpg";
import imagenModal6 from "./images/estiloJonico.jpg";


const LeccionSitios2 = () => {

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

    // const videoId = 'ioVG56GyvfI'; // ID del video de YouTube que deseas reproducir

    return (
        <div className="contenedorHistoria">
            <NavbarPrincipal />
            <div class="titulo-empezar">
                <img src={lecSitios} class="img-fluid" alt="Imagen" />
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
                                        <Card.Title>Lección 2</Card.Title>
                                        <Card.Text>
                                            <b>Presentación</b> de la ciudad de Atenas, su <b>importancia</b> como capital y centro cultural
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/SitiosCaracteristicos/Leccion2">
                                                <img onClick={() => handleOpenModal('modal1')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Presentación de la ciudad de Atenas, su importancia como capital y centro cultural</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>Atenas es la capital de Grecia y una de las ciudades más antiguas del mundo. Tiene una historia que se remonta a más de 3.000 años y es conocida por su importancia cultural y su legado histórico. Atenas fue el epicentro de la antigua Grecia y es considerada la cuna de la civilización occidental. Es famosa por su contribución a la filosofía, la política, el arte y la literatura.
                                                    </p>
                                                    <p>Atenas alberga numerosos sitios históricos y culturales, y es una ciudad moderna que combina el encanto del pasado con una vibrante vida urbana. Sus calles están llenas de vida, con cafeterías, tiendas y restaurantes que ofrecen una mezcla única de tradición y modernidad. Además, la ciudad cuenta con museos de renombre, como el Museo de la Acrópolis y el Museo Arqueológico Nacional, que albergan valiosas colecciones de artefactos antiguos.
                                                    </p>
                                                    <br />
                                                    <img src={imagenModal1} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
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
                                            <b>Exploración</b> de la Acrópolis y sus <b>principales</b> estructuras
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/SitiosCaracteristicos/Leccion2">
                                                <img onClick={() => handleOpenModal('modal2')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal2} onHide={() => handleCloseModal('modal2')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Exploración de la Acrópolis y sus principales estructuras</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>• La Acrópolis es una colina rocosa situada en el centro de Atenas y es uno de los lugares más emblemáticos de la ciudad. Es un sitio arqueológico de gran importancia que alberga varias estructuras antiguas notables. Al explorar la Acrópolis, se pueden visitar distintas construcciones que datan del siglo V a.C.
                                                    </p>
                                                    <img src={imagenModal2} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
                                                    <br />
                                                    <p>• El Partenón es el templo más famoso de la Acrópolis y uno de los ejemplos más importantes de la arquitectura clásica griega. Fue construido en honor a la diosa Atenea y se destaca por su impresionante tamaño y su exquisito detalle. A pesar de su estado actual de ruinas, el Partenón sigue siendo un símbolo duradero de la grandeza de la antigua Grecia.
                                                    </p>
                                                    <img src={imagenModal3} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
                                                    <br />
                                                    <p>• El Erecteión es otro templo importante en la Acrópolis, conocido por su diseño arquitectónico distintivo. Destaca por las Cariátides, columnas esculpidas en forma de mujeres, que sostienen el techo del pórtico del templo. Estas estatuas son una de las imágenes más icónicas de la arquitectura griega.
                                                    </p>
                                                    <img src={imagenModal4} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
                                                    <br />
                                                    <p>• El Templo de Atenea Niké es otro edificio notable en la Acrópolis. Es un pequeño templo dedicado a la diosa de la victoria y es conocido por su elegante diseño. Destaca por su proporción y por su ubicación estratégica en la Acrópolis, ofreciendo vistas panorámicas de la ciudad de Atenas.
                                                    </p>
                                                    <img src={imagenModal5} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
                                                    <br />
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
                                        <Card.Title>Lección 2</Card.Title>
                                        <Card.Text>
                                            Discusión sobre el estilo <b>arquitectónico</b> de los templos griegos y su <b>significado</b> cultural
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/SitiosCaracteristicos/Leccion2">
                                                <img onClick={() => handleOpenModal('modal3')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal3} onHide={() => handleCloseModal('modal3')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Discusión sobre el estilo arquitectónico de los templos griegos y su significado cultural</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>Los templos griegos, incluyendo los ubicados en la Acrópolis, siguen un estilo arquitectónico característico conocido como orden dórico o jónico. Estos estilos arquitectónicos se basaban en principios de proporción y belleza, y tenían un profundo significado cultural y religioso.
                                                    </p>
                                                    <p>El estilo dórico se caracteriza por columnas robustas y sin base, con capiteles sencillos y una frieza lisa. Es un estilo más austero y masculino, que refleja los ideales de la antigua Grecia en cuanto a fortaleza y racionalidad.
                                                    </p>
                                                    <p> Por otro lado, el estilo jónico presenta columnas más delgadas y elegantes, con capiteles ornamentados</p>
                                                    <img src={imagenModal6} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
                                                    <br />
                                                    {/* <YouTube videoId={videoId} opts={{ width: '100%', height: '100%' }} /> */}
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
                <Link to="/Temas/SitiosCaracteristicos/Leccion1">
                    <img src={anterior} class="img-fluid" alt="Imagen" />
                </Link>
                <Link to="/Temas/SitiosCaracteristicos/Leccion3">
                    <img src={siguiente} class="img-fluid" alt="Imagen" />
                </Link>
            </div>
        </div>
    );
};

export default LeccionSitios2;