import { OrbitControls, Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Model3 from './model';
import Floor from './Floor';
import Image from './Image';
import fondo from '../../Images/grecia.jpeg'
import regresar from "../../../style/botones/regresar.png";
import NavbarPrincipal from "../../../components/navbar2";
import "../../../style/css/model.css"

export default function Experience3() {
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
        navigate('/Temas/Vestimenta');
    };

    return <>
    <NavbarPrincipal />
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
                position: [10, 10, 40]
            }}
        >
            <OrbitControls makeDefault />

            <spotLight castShadow position={[0, 3, -6]} intensity={1.5} />

            <ambientLight intensity={0.5} />
            <Html position={[20, 10, 0]} wrapperClass="label" style={{ fontSize: '36px', fontWeight: 'bold', color: 'BLACK' }}>
                    VESTIMENTA GRIEGA
                </Html>
                <Floor />
                <Model3 position-y={2} position-z={2} rotation-y={-0.5} castShadow />
                <Image />
                
            </Canvas>
        </div>
        
    </>
}