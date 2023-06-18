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
import anterior from "../../../style/botones/anterior.png";
import quiz from "../../../style/botones/quiz.png";
import imagenModal1 from "./images/islas.webp";
import imagenModal2 from "./images/santorini.webp";
import imagenModal3 from "./images/mykonos.jpg";
import imagenModal4 from "./images/creta.jpg";
import imagenModal5 from "./images/arquitectura.jpg";
import imagenModal6 from "./images/playas.jpg";
import imagenModal7 from "./images/gastronomia.webp";
import imagenModal8 from "./images/actividades.jpg";

const LeccionSitios4 = () => {

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
        <div className="container-leccionSitios">
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
                                        <Card.Title>Lección 4</Card.Title>
                                        <Card.Text>
                                            <b>Presentación</b> de las islas griegas como destinos turísticos populares y únicos
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/SitiosCaracteristicos/Leccion4">
                                                <img onClick={() => handleOpenModal('modal1')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Presentación de las islas griegas como destinos turísticos populares y únicos</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>Las islas griegas son destinos turísticos muy populares y únicos que atraen a millones de visitantes cada año. Estas islas
                                                        ofrecen una combinación perfecta de belleza natural, historia fascinante y una cultura vibrante. Cada isla tiene su propia
                                                        personalidad y encanto, lo que las convierte en destinos únicos y variados.
                                                    </p>
                                                    {/* islas griegas */}
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
                                        <Card.Title>Lección 4</Card.Title>
                                        <Card.Text>
                                            Destacar algunas de las islas <b>más conocidas</b>, como Santorini, Mykonos y Creta
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/SitiosCaracteristicos/Leccion4">
                                                <img onClick={() => handleOpenModal('modal2')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal2} onHide={() => handleCloseModal('modal2')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Destacar algunas de las islas más conocidas, como Santorini, Mykonos y Creta</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>Entre las islas más conocidas de Grecia se encuentran:</p>
                                                    <p>•  Santorini: Famosa por sus impresionantes vistas al mar Egeo, sus pueblos de casas blancas y azules, y sus atardeceres espectaculares. Santorini también es conocida por sus playas de arena volcánica y sus bodegas de vino.
                                                    </p>
                                                    {/* islas griegas */}
                                                    <img src={imagenModal2} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
                                                    <p>• Mykonos: Conocida por su animada vida nocturna y sus playas de aguas cristalinas. Mykonos es famosa por sus casas encaladas con puertas y ventanas de colores vibrantes, sus estrechas calles empedradas y sus emblemáticos molinos de viento.
                                                    </p>
                                                    {/* islas griegas */}
                                                    <img src={imagenModal3} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
                                                    <p>• Creta: La isla más grande de Grecia, ofrece una combinación única de historia, hermosas playas y paisajes impresionantes. Creta alberga el Palacio de Knossos, un importante sitio arqueológico de la civilización minoica, y cuenta con una rica tradición culinaria y festivales culturales.
                                                    </p>
                                                    {/* islas griegas */}
                                                    <img src={imagenModal4} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
                                                    <p>Estas son solo algunas de las muchas islas griegas, cada una con su propia belleza y atractivo.</p>
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
                                        <Card.Title>Lección 4</Card.Title>
                                        <Card.Text>
                                            Discusión sobre la <b>arquitectura tradicional</b> de las islas, las playas, la gastronomía y las actividades culturales y recreativas disponibles
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/SitiosCaracteristicos/Leccion4">
                                                <img onClick={() => handleOpenModal('modal3')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal3} onHide={() => handleCloseModal('modal3')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Discusión sobre la arquitectura tradicional de las islas, las playas, la gastronomía y las actividades culturales y recreativas disponibles</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>La arquitectura tradicional de las islas griegas es reconocible por sus casas encaladas de paredes blancas y puertas y ventanas 
                                                        de colores brillantes, que contrastan con el intenso azul del mar y el cielo. Esta arquitectura distintiva crea un ambiente 
                                                        encantador y pintoresco.
                                                    </p>
                                                    {/* islas griegas */}
                                                    <img src={imagenModal5} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
                                                    <p>Las islas griegas también son conocidas por sus playas impresionantes, con aguas cristalinas y arenas doradas o volcánicas. 
                                                        Desde playas tranquilas y apartadas hasta playas animadas y con deportes acuáticos, hay opciones para todos los gustos.
                                                    </p>
                                                    {/* islas griegas */}
                                                    <img src={imagenModal6} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
                                                    <p>La gastronomía griega es otro atractivo de las islas. Los platos típicos incluyen el souvlaki (brochetas de carne), la moussaka 
                                                        (un pastel de carne y berenjena), el tzatziki (una salsa de yogur y pepino) y los deliciosos postres como el baklava. Además, 
                                                        las islas griegas ofrecen una amplia variedad de restaurantes, tabernas y cafeterías donde se puede disfrutar de la comida local 
                                                        y los sabores frescos del mar.
                                                    </p>
                                                    <img src={imagenModal7} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
                                                    {/* islas griegas */}
                                                    <p> Las islas griegas también ofrecen actividades culturales y recreativas, como visitar antiguos sitios arqueológicos, explorar 
                                                        pintorescos pueblos pesqueros, hacer senderismo por senderos naturales, disfrutar de paseos en barco y participar en festivales 
                                                        locales con música y bailes tradicionales.
                                                    </p>
                                                    {/* islas griegas */}
                                                    <img src={imagenModal8} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto"}} />
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
                <Link to="/Temas/SitiosCaracteristicos/Leccion3">
                    <img src={anterior} class="img-fluid" alt="Imagen" />
                </Link>
                <Link to="/Temas/SitiosCaracteristicos">
                    <img src={quiz} class="img-fluid" alt="Imagen" />
                </Link>
            </div>
        </div>
    );
};

export default LeccionSitios4;