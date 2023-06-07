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
import lecArte from "../../../style/titulos/LecArte.png";
import siguiente from "../../../style/botones/siguiente.png";
import anterior from "../../../style/botones/anterior.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarPrincipal from "../../../components/navbar2"

const LeccionArte3 = () => {

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
                    <img src={lecArte} class="img-fluid" alt="Imagen" />
            </div>
            <div className="row align-items-center" style={{ marginTop: '0px' }}>
                <div class="col-sm-5 col-md-6 ">
                <Carousel interval={2000} controls={true} indicators={true} className="fondo-card">
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
                        <Card style={{ width: '400', height: '300px' }}>
                            <Card.Body>
                                <Card.Title>Lección 3: Escultura griega</Card.Title>
                                <Card.Text>
                                    Descripción de los estilos y técnicas escultóricas griegas, como el estilo kouros y el estilo contrapposto.
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Arte/Leccion3">
                                        <img onClick={() => handleOpenModal('modal1')}src={informacion} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal1} onHide={() => handleCloseModal('modal1')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Descripción de los estilos y técnicas escultóricas griegas, como el estilo kouros y el estilo contrapposto.</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <p>La escultura griega antigua se caracteriza por su enfoque en la representación idealizada de la forma humana y su habilidad para capturar la belleza y el realismo. 
                                        A continuación, describiré dos estilos y técnicas escultóricas griegas destacadas: el estilo kouros y el estilo contrapposto.
                                        Estilo Kouros: El estilo kouros se refiere a la representación de figuras masculinas jóvenes en la escultura griega arcaica. 
                                        Estas esculturas, también conocidas como "kouroi", se caracterizan por su rigidez y frontalidad. Los kouroi están de pie, con los brazos pegados al cuerpo y las piernas juntas. 
                                        Son figuras estilizadas, con formas musculares y anatómicas simplificadas. Los rostros suelen tener una sonrisa arcaica, con una expresión facial rígida y hierática. 
                                        Los kouroi fueron esculpidos en mármol y se usaron como ofrendas votivas en los santuarios y tumbas griegas.
                                        Estilo Contrapposto: El estilo contrapposto, desarrollado en la escultura griega clásica, representa un cambio significativo en la representación de la figura humana. 
                                        Se refiere a una técnica en la que el peso del cuerpo se distribuye asimétricamente, creando una postura natural y relajada. En el contrapposto, una pierna se flexiona ligeramente, mientras que la otra permanece recta. 
                                        Esto crea una tensión y relajación en el cuerpo, generando una postura más dinámica y realista. La técnica del contrapposto no solo implica una posición física, sino también una disposición de la columna vertebral y una relación entre las partes del cuerpo. 
                                        Esta técnica permitía a los escultores representar la figura humana de manera más natural y expresiva, dando una sensación de movimiento y vida a las esculturas.</p>
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
                                <Card.Title>Lección 3: Escultura griega</Card.Title>
                                <Card.Text>
                                    Mención de los temas y motivos comunes en la escultura griega, como los dioses y atletas.
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Arte/Leccion3">
                                        <img  onClick={() => handleOpenModal('modal2')}src={informacion} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal2} onHide={() => handleCloseModal('modal2')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Mención de los temas y motivos comunes en la escultura griega, como los dioses y atletas.</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <p>La escultura griega abarcó una amplia gama de temas y motivos a lo largo de su historia. A continuación, mencionaré algunos de los temas y motivos más comunes en la escultura griega:
                                        Dioses y diosas: Los dioses y diosas del panteón griego fueron una fuente recurrente de inspiración para los escultores griegos. Estas esculturas representaban a deidades como Zeus, Atenea, Apolo, Afrodita y Poseidón, entre otros. 
                                        Los escultores buscaban capturar la belleza, el poder y la divinidad de estas figuras divinas, a menudo retratándolos en poses majestuosas y con rasgos idealizados.
                                        Atletas y guerreros: La representación de atletas y guerreros también fue un tema popular en la escultura griega. Las esculturas de atletas mostraban cuerpos musculosos y atléticos, representando la dedicación y la perfección física del mundo griego antiguo. 
                                        Por otro lado, las esculturas de guerreros reflejaban el heroísmo y la valentía en la batalla, a menudo retratando a guerreros en poses dinámicas y con armaduras.
                                        Retratos: La escultura griega también se destacó en la creación de retratos realistas. Tanto los retratos de figuras prominentes como de ciudadanos comunes eran una parte importante de la producción escultórica griega. 
                                        Estas esculturas buscaban capturar los rasgos individuales y la personalidad de los sujetos, ofreciendo una representación verosímil de las personas.
                                        Mitología y leyendas: Los mitos y las leyendas griegas proporcionaron un vasto repertorio de historias y personajes que fueron representados en esculturas. 
                                        Escenas mitológicas, como la lucha de Teseo contra el Minotauro o la historia de Prometeo, se representaron en relieves y grupos escultóricos, brindando una narrativa visual atractiva.
                                        Escenas cotidianas: Además de los temas mitológicos y heroicos, la escultura griega también exploró la representación de escenas cotidianas. 
                                        Estas esculturas retrataban actividades comunes como la vida familiar, la agricultura, el comercio y el entretenimiento, ofreciendo una visión de la vida diaria en la antigua Grecia.</p>
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
            <Link to="/Temas/Arte/Leccion2">
            <img src={anterior} class="img-fluid" alt="Imagen" />
            </Link>
            <Link to="/Temas/Arte/Leccion4">
            <img src={siguiente} class="img-fluid" alt="Imagen" />
            </Link>     
        </div>
    </div>
    );
};

export default LeccionArte3;