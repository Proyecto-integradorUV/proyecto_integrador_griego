import "../../../style/css/styleEmpezar.css"
import "../../../style/css/contenedores.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import vestimenta1 from "./images/vestimenta1.jpg";
import vestimenta5 from "./images/vestimenta5.jpg";
import lecVestimenta from "../../../style/titulos/vestimenta.png";
import informacion from "../../../style/botones/informacion.png";
// import video from "../../../style/botones/ver_video.png";
import NavbarPrincipal from "../../../components/navbar2"
// import YouTube from 'react-youtube';
import siguiente from "../../../style/botones/siguiente.png";
import anterior from "../../../style/botones/anterior.png";
import imagenModal1 from "./images/img4.png";
import imagenModal2 from "./images/img5.png";

const LeccionVestimenta2 = () => {

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
        <div className="contenedorArte">
            <NavbarPrincipal />
            <div class="titulo-empezar">
                <img src={lecVestimenta} class="img-fluid" alt="Imagen" />
            </div>
            <div className="row align-items-center" style={{ marginTop: '0px' }}>
                <div class="col-sm-5 col-md-6 ">
                    <Carousel interval={2000} controls={true} indicators={true} className="fondo-card">
                        <Carousel.Item >
                            <img src={vestimenta1} alt="Imagen" className="img-fluid" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={vestimenta5} alt="Imagen" className="img-fluid" />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0" >
                    <Carousel interval={null} controls={true} indicators={false} className="fondo-card">
                        <Carousel.Item>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                <Card style={{ width: '1000px', height: '300px' }}>
                                    <Card.Body>
                                        <Card.Title>Lección 2: Ropa masculina en la cultura griega</Card.Title>
                                        <Card.Text>
                                            <b>Descripción</b> detallada de las prendas utilizadas por los hombres griegos.
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/Vestimenta/Leccion2">
                                                <img onClick={() => handleOpenModal('modal1')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Descripción detallada de las prendas utilizadas por los hombres griegos</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>En la antigua Grecia, los hombres utilizaban principalmente dos prendas principales: el himation y el chiton.</p>
                                                    <img src={imagenModal1} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto", borderRadius: "40%" }} />
                                                    <br />
                                                    <p>El himation era una especie de manto o capa que se llevaba sobre el chiton. Era una prenda rectangular de tela,
                                                        generalmente de lana, que se envolvía alrededor del cuerpo de diversas formas. Podía llevarse suelto o sujetarse
                                                        en el hombro con un broche. El himation proporcionaba protección contra el frío y también podía usarse para cubrir
                                                        la cabeza o el rostro en caso de necesidad.</p>
                                                    <p>
                                                        El chiton era una túnica larga y simple, generalmente de lino o lana, que se llevaba debajo del himation. Consistía en
                                                        dos piezas de tela cosidas juntas en los hombros y abiertas en los lados. El chiton podía ser de manga corta o sin mangas,
                                                        y su longitud variaba según la ocasión y la clase social. Se sujetaba en la cintura con una faja o cinturón llamado zoster.
                                                    </p>
                                                    <p>
                                                        Además del himation y el chiton, los hombres griegos también usaban otras prendas como la chlamys, una capa corta usada por soldados
                                                        y viajeros, y el petaso, un sombrero de ala ancha utilizado para protegerse del sol.
                                                    </p>
                                                    <img src={imagenModal2} class="img-fluid center" alt="Imagen" style={{ width: "80%", height: "80%", display: "block", margin: "auto" }} />
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
                                        <Card.Title>Lección 2: Ropa masculina en la cultura griega</Card.Title>
                                        <Card.Text>
                                            Explicación de <b>cómo se usaban</b> estas prendas y cómo variaban según la clase social.
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/Vestimenta/Leccion2">
                                                <img onClick={() => handleOpenModal('modal2')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal2} onHide={() => handleCloseModal('modal2')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Explicación de cómo se usaban estas prendas y cómo variaban según la clase social</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>La forma de llevar estas prendas podía variar según la ocasión y la clase social.</p>

                                                    <p>Los hombres de clase alta solían llevar el himation de manera más elaborada y estilizada, con pliegues y drapeados sofisticados. Podían llevarlo sobre el hombro izquierdo o
                                                        derecho, o incluso sobre ambos hombros. Este estilo de llevar el himation era conocido como "himation anatólico".</p>

                                                    <p> Por otro lado, los hombres de clase baja y los trabajadores llevaban el himation de forma más sencilla, enrollándolo
                                                        alrededor del cuerpo de manera más práctica y funcional.</p>

                                                    <p>En cuanto al chiton, su longitud y estilo también variaban según la clase social. Los hombres de clase alta solían llevar un
                                                        chiton más largo, que llegaba hasta los tobillos, mientras que los hombres de clase baja usaban un chiton más corto, que llegaba
                                                        hasta las rodillas.</p>
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
                <Link to="/Temas/Vestimenta/Leccion1">
                    <img src={anterior} class="img-fluid" alt="Imagen" />
                </Link>
                <Link to="/Temas/Vestimenta/Leccion3">
                    <img src={siguiente} class="img-fluid" alt="Imagen" />
                </Link>
            </div>
        </div>
    );
};

export default LeccionVestimenta2;