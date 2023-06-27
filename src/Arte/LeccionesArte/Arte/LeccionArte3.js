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
import escultura1 from "./images/escultura1.png";
import escultura2 from "./images/escultura2.png";
import escultura3 from "./images/escultura3.jpg";
import escultura4 from "./images/escultura4.jpg";
import escultura5 from "./images/escultura5.jpg";
import arte from "../../../style/titulos/arte.png";
import inicio from "../../../style/botones/inicio.png";
import informacion from "../../../style/botones/informacion.png";
import NavbarArte from "../../../components/navArte";

const LeccionArte3 = () => {

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
        <div className="contenedorArte">
            <NavbarArte/>
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
                                <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                                    3.1
                                </span>{" "}
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
                                        <h2 class="text-center">
                                            <b>3.1 </b>Descripción
                                        </h2>
                                        <p>La escultura griega antigua se caracteriza por su enfoque en la representación idealizada de la forma humana y su habilidad para capturar la belleza y el realismo. 
                                        A continuación, describiré dos estilos y técnicas escultóricas griegas destacadas: el estilo kouros y el estilo contrapposto.<br/><br/>
                                        <h6>Estilo Kouros</h6> El estilo kouros se refiere a la representación de figuras masculinas jóvenes en la escultura griega arcaica. 
                                        Estas esculturas, también conocidas como "kouroi", se caracterizan por su rigidez y frontalidad. Los kouroi están de pie, con los brazos pegados al cuerpo y las piernas juntas. 
                                        Son figuras estilizadas, con formas musculares y anatómicas simplificadas. Los rostros suelen tener una sonrisa arcaica, con una expresión facial rígida y hierática. 
                                        Los kouroi fueron esculpidos en mármol y se usaron como ofrendas votivas en los santuarios y tumbas griegas.<br/><br/>
                                        <img src={escultura1} alt="Imagen" style={{ width: '60%', height: '60%',  display: "block",margin: "auto" }}/><br/>
                                        <h6>Estilo Contrapposto</h6> El estilo contrapposto, desarrollado en la escultura griega clásica, representa un cambio significativo en la representación de la figura humana. 
                                        Se refiere a una técnica en la que el peso del cuerpo se distribuye asimétricamente, creando una postura natural y relajada. En el contrapposto, una pierna se flexiona ligeramente, mientras que la otra permanece recta. 
                                        Esto crea una tensión y relajación en el cuerpo, generando una postura más dinámica y realista. La técnica del contrapposto no solo implica una posición física, sino también una disposición de la columna vertebral y una relación entre las partes del cuerpo. 
                                        Esta técnica permitía a los escultores representar la figura humana de manera más natural y expresiva, dando una sensación de movimiento y vida a las esculturas.</p>
                                        <img src={escultura2} alt="Imagen" style={{ width: '60%', height: '60%',  display: "block",margin: "auto" }}/>
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
                                <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                                    3.2
                                </span>{" "}
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
                                        <h2 class="text-center">
                                            <b>3.2 </b>Temas
                                        </h2>
                                        <img src={escultura3} alt="Imagen" style={{ width: '40%', height: '40%',  display: "block",margin: "auto" }}/><br/>
                                        <p>La escultura griega abarcó una amplia gama de temas y motivos a lo largo de su historia. A continuación, mencionaré algunos de los temas y motivos más comunes en la escultura griega:<br/><br/>
                                        <h6>Dioses y diosas</h6> Los dioses y diosas del panteón griego fueron una fuente recurrente de inspiración para los escultores griegos. Estas esculturas representaban a deidades como Zeus, Atenea, Apolo, Afrodita y Poseidón, entre otros. 
                                        Los escultores buscaban capturar la belleza, el poder y la divinidad de estas figuras divinas, a menudo retratándolos en poses majestuosas y con rasgos idealizados.<br/><br/>
                                        <h6>Atletas y guerreros</h6> La representación de atletas y guerreros también fue un tema popular en la escultura griega. Las esculturas de atletas mostraban cuerpos musculosos y atléticos, representando la dedicación y la perfección física del mundo griego antiguo. 
                                        Por otro lado, las esculturas de guerreros reflejaban el heroísmo y la valentía en la batalla, a menudo retratando a guerreros en poses dinámicas y con armaduras.<br/><br/>
                                        <h6>Retratos</h6> La escultura griega también se destacó en la creación de retratos realistas. Tanto los retratos de figuras prominentes como de ciudadanos comunes eran una parte importante de la producción escultórica griega. 
                                        Estas esculturas buscaban capturar los rasgos individuales y la personalidad de los sujetos, ofreciendo una representación verosímil de las personas.<br/><br/>
                                        <h6>Mitología y leyendas</h6> Los mitos y las leyendas griegas proporcionaron un vasto repertorio de historias y personajes que fueron representados en esculturas. 
                                        Escenas mitológicas, como la lucha de Teseo contra el Minotauro o la historia de Prometeo, se representaron en relieves y grupos escultóricos, brindando una narrativa visual atractiva.<br/><br/>
                                        <h6>Escenas cotidianas</h6> Además de los temas mitológicos y heroicos, la escultura griega también exploró la representación de escenas cotidianas. 
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
                    <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                        <Card style={{ width: '400px', height: '300px' }}>
                            <Card.Body>
                                <Card.Title>Lección 3: Escultura griega</Card.Title>
                                <Card.Text>
                                <span style={{ fontWeight: "bold", color: "#bd795c" }}>
                                    3.3
                                </span>{" "}
                                    Figuras destacadas de la escultura griega
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Link to="/Temas/Arte/Leccion3">
                                        <img  onClick={() => handleOpenModal('modal3')}src={informacion} alt="Imagen" />
                                    </Link>
                                </div>
                                <div>
                                    <Modal show={modals.modal3} onHide={() => handleCloseModal('modal3')} scrollable={true} size="lg">
                                        <Modal.Header closeButton>
                                        <Modal.Title>Figuras destacadas de la escultura griega.</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <h2 class="text-center">
                                            <b>3.3 </b>Figuras
                                        </h2>
                                        <p>
                                        <h6>Venus de Milo</h6> La Afrodita de Milo, más conocida como Venus de Milo, es una de las estatuas más representativas del periodo helenístico de la escultura griega, y una de las más famosas esculturas de la antigua Grecia. 
                                        Fue creada en algún momento entre los años 130 a. C. y 100 a. C., y se cree que representa a Afrodita (denominada Venus en la mitología romana), diosa del amor y la belleza;2​ mide, aproximadamente, 211 cm de alto.<br/>
                                        <img src={escultura4} alt="Imagen" style={{ width: '40%', height: '40%',  display: "block",margin: "auto" }}/><br/>
                                        <h6>Discóbolo</h6> Discóbolo es la denominación convencional de una icónica escultura griega de bulto redondo realizada por Mirón de Eléuteras en torno al 450 a. C.. 
                                        Se enmarca en el inicio del periodo griego clásico, entre el arcaico y el clásico.​ La obra representa a un joven atleta desnudo en el instante anterior al lanzamiento de un disco. 
                                        Obedece a los preceptos de belleza de la época, suponiendo un gran avance hacia el naturalismo, el dinamismo, la serenidad, el equilibrio y hacia un estudio anatómico más completo<br/>
                                        </p>
                                        <img src={escultura5} alt="Imagen" style={{ width: '20%', height: '20%',  display: "block",margin: "auto" }}/>
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
            <Link to="/Temas/Arte">
            <img src={inicio} class="img-fluid" alt="Imagen" />
            </Link>
        </div>
    </div>
    );
};

export default LeccionArte3;