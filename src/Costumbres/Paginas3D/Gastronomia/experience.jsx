import "../../../style/css/model.css"
import { OrbitControls, Html} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Model from './model';
import Floor from './Floor';
import Image from './Image';
import fondo from '../../Images/grecia.jpg';
import regresar from "../../../style/botones/regresar.png";
import Navbar4 from "../../../components/navbar4";

export default function Experience5() {
    const url1 = "/Temas/Gastronomia/Leccion1";
  const url2 = "/Temas/Gastronomia/Leccion2";
  const url3 = "/Temas/Gastronomia/Leccion3";
  const url4 = "/Temas/Gastronomia/Leccion4";

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        container.style.backgroundImage = `url("${fondo}")`;
        container.style.backgroundSize = 'cover';
      }, []);

    const canvasStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    };

    const buttonStyles = {
        position: 'fixed',
        zIndex: 1,
        background: 'none',
        border: 'none',
        bottom: '10px',
        left: '10px',
        padding: '8px 16px',
        transition: 'transform 0.3s',
        transformOrigin: 'top left',
    };

    const divStyles = {
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        background: '#E07A5F',
        borderRadius: '8px',
        padding: '8px',
        color: 'white',
      };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Temas/Gastronomia');
    };

    return (
        <>
        <Navbar4
        tituloTema="Gastronomia"
        url1={url1}
        tituloLeccion1="Leccion1"
        url2={url2}
        tituloLeccion2="Leccion2"
        url3={url3}
        tituloLeccion3="Leccion3"
        url4={url4}
        tituloLeccion4="Leccion4"
      />
        <div ref={containerRef} className="contenedorLeccionesGastro">
            <button onClick={handleClick} style={buttonStyles} className="regresar-button"><img src={regresar} className="img-fluid" alt="Imagen" /></button>
            <div style={divStyles}> Pasa el mouse por la pared de imágenes </div>
            <Canvas
                style={canvasStyles}
                shadows
                camera={{
                    fov: 70,
                    near: 0.9,
                    far: 250,
                    position: [10, 10,40]
                }}
            >
                <OrbitControls makeDefault />

                <spotLight castShadow position={[0, 3, -6]} intensity={1.5} />

                <ambientLight intensity={0.5} />
                <Html position={[10, 7, 0]} wrapperClass="label" style={{ fontSize: '36px', fontWeight: 'bold', color: 'BLACK' }}>
                    GASTRONOMÍA GRIEGA
                </Html>
                <Floor />
                <Model position-y={-9.8} scale={25} position-z={1} rotation-y={30} castShadow />
                <Image />
            </Canvas>
        </div>
        </>
    );
}
