import "../../../style/css/styleEmpezar.css"
import "../../../style/css/contenedores.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import vestimenta1 from "./images/vestimenta1.jpg";
import vestimenta5 from "./images/vestimenta5.jpg";
import vestimenta8 from "./images/vestimenta8.jpg";

import lecVestimenta from "../../../style/titulos/vestimenta.png";
import informacion from "../../../style/botones/informacion.png";
// import video from "../../../style/botones/ver_video.png";
import NavbarPrincipal from "../../../components/navbar2"
// import YouTube from 'react-youtube';
import siguiente from "../../../style/botones/siguiente.png";
import anterior from "../../../style/botones/anterior.png";
import imagenModal1 from "./images/img6.jpg";

const LeccionVestimenta3 = () => {

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
                                        <Card.Title>Lección 3: Ropa femenina en la cultura griega</Card.Title>
                                        <Card.Text>
                                            <b>Descripción</b> de las prendas utilizadas por las mujeres griegas
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/Vestimenta/Leccion3">
                                                <img onClick={() => handleOpenModal('modal1')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Descripción de las prendas utilizadas por las mujeres griegas</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>En la antigua Grecia, las mujeres utilizaban principalmente dos prendas principales: el peplo y el chiton.</p>
                                                    <img src={vestimenta8} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto" }} />
                                                    <p>El peplo era una prenda femenina icónica en la antigua Grecia. Era una túnica larga y amplia hecha de tela, generalmente de lana.
                                                        Consistía en un rectángulo de tela que se envolvía alrededor del cuerpo de forma similar a un sarong, y se sujetaba en la cintura
                                                        con una faja llamada zona.</p>

                                                    <p>Las mujeres griegas solían llevar el peplo sobre un chiton.</p>

                                                    <p>El chiton era una túnica más ajustada y simple, similar a la que usaban los hombres. Estaba compuesto por dos piezas de tela
                                                        cosidas en los hombros y abiertas en los costados. El chiton de las mujeres era generalmente más largo que el de los hombres y
                                                        podía tener mangas cortas o ser sin mangas.</p>

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
                                        <Card.Title>Lección 2: Ropa femenina en la cultura griega</Card.Title>
                                        <Card.Text>
                                            <b>Diferencias</b> entre la ropa de las mujeres casadas y las solteras
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/Vestimenta/Leccion3">
                                                <img onClick={() => handleOpenModal('modal2')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal2} onHide={() => handleCloseModal('modal2')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Diferencias entre la ropa de las mujeres casadas y las solteras</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>En la antigua Grecia, la vestimenta de las mujeres casadas y solteras difería en algunos aspectos.</p>

                                                    <p>Las mujeres solteras solían llevar el peplo con un estilo más suelto y desplegado. El peplo se envolvía alrededor del cuerpo de forma más amplia y
                                                        sin muchas restricciones. Además, a menudo llevaban la faja de la zona más alta en la cintura, resaltando la juventud y la belleza.</p>

                                                    <p>Por otro lado, las mujeres casadas llevaban el peplo de manera más ajustada y con menos pliegues. La faja de la zona se colocaba más abajo,
                                                        en la parte inferior del abdomen, y se ajustaba más firmemente. Este estilo de vestimenta era más modesto y reflejaba el estatus de mujer casada y
                                                        la maternidad.</p>

                                                    <img src={vestimenta5} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto" }} />

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
                                        <Card.Title>Lección 3: Ropa femenina en la cultura griega</Card.Title>
                                        <Card.Text>
                                            <b>Importancia</b> de la vestimenta en la vida de las mujeres griegas y su papel en la sociedad
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/Vestimenta/Leccion3">
                                                <img onClick={() => handleOpenModal('modal3')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal3} onHide={() => handleCloseModal('modal3')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Importancia de la vestimenta en la vida de las mujeres griegas y su papel en la sociedad</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>La vestimenta desempeñaba un papel crucial en la vida de las mujeres griegas y tenía una gran importancia social y simbólica.</p>

                                                    <p> La forma en que una mujer se vestía indicaba su estatus social, su estado civil y su rol en la sociedad. Las mujeres de clase alta y
                                                        aristocrática tendían a usar prendas más elaboradas y costosas, con materiales finos y decoraciones detalladas. Su vestimenta
                                                        reflejaba su riqueza y posición social.</p>

                                                    <p>Además, la forma en que se llevaba la ropa podía transmitir mensajes sobre la moralidad y la virtud de una mujer. Las mujeres
                                                        griegas se esforzaban por mantener una apariencia modesta y casta, y la forma en que se ajustaban y llevaban las prendas podía
                                                        comunicar esto a la sociedad.</p>

                                                    <img src={imagenModal1} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto" }} />

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
            <div class="botones-sig-ant">
                <Link to="/Temas/Vestimenta/Leccion2">
                    <img src={anterior} class="img-fluid" alt="Imagen" />
                </Link>
                <Link to="/Temas/Vestimenta/Leccion4">
                    <img src={siguiente} class="img-fluid" alt="Imagen" />
                </Link>
            </div>
        </div>
    );
};

export default LeccionVestimenta3;