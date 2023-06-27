import "../../../style/css/styleEmpezar.css"
import "../../../style/css/contenedores.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import "./leccionesSitios.css"
import { Carousel, Card, Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import lecSitios from "../../../style/titulos/sitios.png";
import informacion from "../../../style/botones/informacion.png";
import Navbar4 from "../../../components/navbar4";
import inicio from "../../../style/botones/inicio.png";
import imagenModal1 from "./images/mapa_grecia.gif";
import imagenModal2 from "./images/civilizacion.jpg";
import imagenModal3 from "./images/filosofia.webp";
import imagenModal4 from "./images/arte.jpg";
import imagenModal5 from "./images/acropolis.jpg";
import imagenModal6 from "./images/delos.jpg";
import imagenModal7 from "./images/delfos.webp";
import imagenModal8 from "./images/olympia.jpg";

const LeccionSitios1 = () => {

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
    const url1 = "/Temas/SitiosCaracteristicos/Leccion1";
    const url2 = "/Temas/SitiosCaracteristicos/Leccion2";
    const url3 = "/Temas/SitiosCaracteristicos/Leccion3";
    const url4 = "/Temas/SitiosCaracteristicos/Leccion4";
    return (
        <div class="contenedorHistoria">
            <Navbar4
                tituloTema="Sitios caracteristicos"
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
                                            <img src={imagenModal4} alt="Imagen" style={{ width: '50%', height: '50%', objectFit: 'contain', justifyContent: 'center' }} />
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
                        <Carousel.Item>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                <Card style={{ width: '1000px', height: '300px' }}>
                                    <Card.Body style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ maxWidth: 'auto', maxHeight: 'auto' }}>
                                            <img src={imagenModal7} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                            <img src={imagenModal8} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
                                        <Card.Title>Lección 1: Introducción a Grecia</Card.Title>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                                                1.1
                                            </span>{" "}
                                            Breve <b>introducción</b> al país, su <b>ubicación</b> geográfica y su <b>importancia</b> histórica y cultural
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/SitiosCaracteristicos/Leccion1">
                                                <img onClick={() => handleOpenModal('modal1')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Breve introducción al país, su ubicación geográfica y su importancia histórica y cultural</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <h2 class="text-center">
                                                        <b>1.1 </b>Introducción
                                                    </h2>
                                                    <p>Grecia es un país ubicado en el sureste de Europa, en la península de los Balcanes. Limita al norte con Albania, Macedonia del Norte y Bulgaria, al este con Turquía,
                                                        al sur con el mar Mediterráneo y al oeste con el mar Jónico. Su posición geográfica estratégica lo ha convertido en un puente entre Europa, Asia y África, lo que ha tenido un
                                                        impacto significativo en su historia y desarrollo cultural.</p>
                                                    <img src={imagenModal1} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto" }} />
                                                    <br />
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
                                        <Card.Title>Lección 1: Introducción a Grecia</Card.Title>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                                                1.2
                                            </span>{" "}
                                            Presentación de la <b>rica historia</b> de Grecia y su <b>influencia</b> en la civilización occidental
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/SitiosCaracteristicos/Leccion1">
                                                <img onClick={() => handleOpenModal('modal2')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal2} onHide={() => handleCloseModal('modal2')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Presentación de la rica historia de Grecia y su influencia en la civilización occidental</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <h2 class="text-center">
                                                        <b>1.2 </b>Historia
                                                    </h2>
                                                    <p>La historia de Grecia es una de las más antiguas y ricas del mundo. Se remonta a la época de la civilización minoica en Creta,
                                                        alrededor del segundo milenio a.C. Sin embargo, es el período clásico griego el que ha dejado una huella duradera en la
                                                        civilización occidental. Durante los siglos V y IV a.C., la antigua Grecia fue el epicentro de grandes logros en la filosofía,
                                                        la política, las artes y las ciencias.
                                                    </p>
                                                    <img src={imagenModal2} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto" }} />
                                                    <br />
                                                    <p>En términos de filosofía, figuras como Sócrates, Platón y Aristóteles sentaron las bases del pensamiento racional y la búsqueda
                                                        de la verdad. La política también tuvo un papel importante en la antigua Grecia, especialmente en Atenas, donde se desarrolló
                                                        la democracia, un sistema de gobierno basado en la participación ciudadana.
                                                    </p>
                                                    <img src={imagenModal3} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto" }} />
                                                    <br />
                                                    <p>Las artes también florecieron en la antigua Grecia, con la creación de esculturas icónicas, arquitectura monumental como
                                                        el Partenón en Atenas y obras de teatro trágicas y cómicas que aún se representan en la actualidad. En ciencias, matemáticas
                                                        y medicina, destacaron figuras como Pitágoras, Arquímedes e Hipócrates, quienes sentaron las bases para futuros avances en estos
                                                        campos.
                                                    </p>
                                                    <img src={imagenModal4} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto" }} />
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
                                        <Card.Title>Lección 1: Introducción a Grecia</Card.Title>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                                                1.3
                                            </span>{" "}
                                            Destacar la <b>importancia</b> de los sitios característicos en la <b>comprensión</b> de la historia y la cultura griega
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/SitiosCaracteristicos/Leccion1">
                                                <img onClick={() => handleOpenModal('modal3')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal3} onHide={() => handleCloseModal('modal3')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Destacar la importancia de los sitios característicos en la comprensión de la historia y la cultura griega</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <h2 class="text-center">
                                                        <b>1.3 </b>Importancia
                                                    </h2>
                                                    <p>Grecia está repleta de sitios históricos y culturales que ofrecen una visión profunda de su historia. Algunos de los lugares más emblemáticos incluyen:
                                                    </p>
                                                    <p>• Acrópolis de Atenas: Este sitio arqueológico alberga el Partenón y otros templos antiguos. Es un símbolo de la antigua Atenas y una muestra impresionante de la arquitectura griega clásica.
                                                    </p>
                                                    <img src={imagenModal5} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto" }} />
                                                    <br />
                                                    <p>• Delos: Situada en el mar Egeo, Delos es una isla sagrada y uno de los yacimientos arqueológicos más importantes de Grecia. Fue un importante centro religioso y comercial en la antigüedad.
                                                    </p>
                                                    <img src={imagenModal6} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto" }} />
                                                    <br />
                                                    <p>• Delfos: Ubicada en el monte Parnaso, Delfos fue considerada el centro del mundo en la antigua Grecia. Allí se encontraba el famoso Oráculo de Delfos, un lugar de consulta divina.
                                                    </p>
                                                    <img src={imagenModal7} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto" }} />
                                                    <br />
                                                    <p>• Olympia: Famosa por ser el lugar de nacimiento de los Juegos Olímpicos de la antigüedad, Olympia cuenta con ruinas de antiguos templos y estadios.
                                                    </p>
                                                    <img src={imagenModal8} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto" }} />
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
                <Link to="/Temas/SitiosCaracteristicos">
                    <img src={inicio} class="img-fluid" alt="Imagen" />
                </Link>
            </div>
        </div>
    );
};

export default LeccionSitios1;