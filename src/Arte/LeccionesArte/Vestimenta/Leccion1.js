import "../../../style/css/styleEmpezar.css"
import "../../../style/css/contenedores.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./leccionesVestimenta.css"
import React, { useState } from "react";
import { Carousel, Card, Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import vestimenta1 from "./images/vestimenta1.jpg";
import vestimenta5 from "./images/vestimenta5.jpg";
import imagenModal1 from "./images/img1.jpg";
import imagenModal2 from "./images/img2.png";
import imagenModal3 from "./images/img3.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navbar2"
import lecVestimenta from "../../../style/titulos/vestimenta.png";
import siguiente from "../../../style/botones/siguiente.png";

const LeccionVestimenta1 = () => {

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
                {/* Card de imagenes */}
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
                {/* Card de lecciones */}
                <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0" >
                    <Carousel interval={null} controls={true} indicators={false} className="fondo-card">
                        <Carousel.Item>
                            {/* Leccion 1 */}
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                <Card style={{ width: '1000px', height: '300px' }}>
                                    <Card.Body>
                                        <Card.Title>Lección 1: Introducción a la cultura griega y la vestimenta</Card.Title>
                                        <Card.Text>
                                            Breve <b>historia</b> de la antigua Grecia y su influencia en la moda
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/Vestimenta/Leccion1">
                                                <img onClick={() => handleOpenModal('modal1')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Breve historia de la antigua Grecia y su influencia en la moda</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p> La antigua Grecia, conocida como la cuna de la civilización occidental, floreció desde el siglo VIII a.C. hasta el siglo IV a.C. </p>
                                                    <p> Durante este período, los griegos hicieron numerosas contribuciones significativas a la filosofía, el arte, la política, la ciencia y también a la moda.</p>
                                                    <img src={imagenModal1} class="img-fluid center" alt="Imagen" style={{ width: "50%", height: "50%", display: "block", margin: "auto", borderRadius: "40%" }} />
                                                    <br />
                                                    <p>En la antigua Grecia, la moda no solo se trataba de vestirse, sino que también tenía un profundo significado cultural y simbólico. La ropa y el estilo eran
                                                        una forma de expresión personal y social. Los griegos valoraban la belleza y la armonía, y esto se reflejaba en su forma de vestir.</p>
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
                            {/* Leccion 1 */}
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                <Card style={{ width: '1000px', height: '300px' }}>
                                    <Card.Body>
                                        <Card.Title>Lección 1: Introducción a la cultura griega y la vestimenta</Card.Title>
                                        <Card.Text>
                                            Conceptos <b>básicos</b> de la vestimenta griega
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/Vestimenta/Leccion1">
                                                <img onClick={() => handleOpenModal('modal2')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal2} onHide={() => handleCloseModal('modal2')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Conceptos básicos de la vestimenta griega: Introducción a la cultura griega y la vestimenta </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>Dos prendas destacadas en la vestimenta griega son la toga y el peplo.</p>
                                                    <img src={imagenModal2} class="img-fluid" alt="Imagen" style={{ width: "80%", height: "80%", display: "block", margin: "auto", borderRadius: "40%" }} />
                                                    <br />
                                                    <p>La toga era una prenda usada principalmente por los hombres. Era una prenda grande y rectangular hecha de lana, que se envolvía alrededor del cuerpo.</p>
                                                    <p>El peplo era una prenda usada principalmente por las mujeres. Consistía en un rectángulo de tela que se envolvía alrededor del cuerpo y se aseguraba en la cintura con una faja.</p>
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
                            {/* Leccion 1 */}
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                <Card style={{ width: '1000px', height: '300px' }}>
                                    <Card.Body>
                                        <Card.Title>Lección 1: Introducción a la cultura griega y la vestimenta</Card.Title>
                                        <Card.Text>
                                            Descripción de los <b>materiales</b> utilizados en la ropa griega y su simbolismo
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link to="/Temas/Vestimenta/Leccion1">
                                                <img onClick={() => handleOpenModal('modal3')} src={informacion} alt="Imagen" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Modal show={modals.modal3} onHide={() => handleCloseModal('modal3')} scrollable={true} size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Descripción de los materiales utilizados en la ropa griega y su simbolismo</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>En la antigua Grecia, la ropa se hacía principalmente de lana, lino y seda. </p>
                                                    <img src={imagenModal3} class="img-fluid" alt="Imagen" style={{ width: "80%", height: "80%", display: "block", margin: "auto", borderRadius: "40%" }} />
                                                    <br />
                                                    <p>• La lana era el material más común y se utilizaba tanto para prendas interiores como exteriores. </p>
                                                    <p>• El lino era apreciado por su frescura y se usaba especialmente en climas más cálidos.  </p>
                                                    <p>• La seda, aunque más rara y costosa, también se utilizaba en prendas de lujo.</p>
                                                    <p> Los materiales utilizados en la ropa griega tenían un simbolismo particular.</p>
                                                    <p>• La lana, por ejemplo, era considerada un material sagrado y se asociaba con la divinidad y la protección. La lana también era un símbolo de estatus.</p>
                                                    <p>• El lino simbolizaba la pureza, la frescura y la conexión con lo divino</p>
                                                    <p>• La seda representaba el lujo, la belleza, la sofisticación y la conexión con lo divino.</p>
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
                <Link to="/Temas/Vestimenta/Leccion2">
                    <img src={siguiente} class="img-fluid" alt="Imagen" />
                </Link>
            </div>
        </div>
    );
};

export default LeccionVestimenta1;