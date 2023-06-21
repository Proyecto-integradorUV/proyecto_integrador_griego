import { OrbitControls, Html, Text, Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Model8 from './model';
import Floor from './Floor';
import Image from './Image';
import fondo from '../../Images/grecia.jpg'
import regresar from "../../../style/botones/regresar.png";
import NavbarPrincipal from "../../../components/navbar2";
import "../../../style/css/model.css"

export default function Experience7() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        container.style.backgroundImage = `url("${fondo}")`;
        container.style.backgroundSize = 'cover';
      }, []);

    const containerStyles = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url("${fondo}")`,
    };

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
        navigate('/Temas/Filosofia');
    };

    return <>
    <NavbarPrincipal/>
         <div ref={containerRef} className="contenedorHistoria">
         <button onClick={handleClick} style={buttonStyles} className="regresar-button"><img src={regresar} className="img-fluid" alt="Imagen" /></button>
         <div style={divStyles}> Pasa el mouse por la pared de imágenes </div>
            <Canvas
                style={canvasStyles}
                shadows
                camera={{
                    fov: 70,
                    near: 0.4,
                    far: 250,
                    position: [10, 10,40]
                }}
            >
                <OrbitControls makeDefault />

                <spotLight castShadow position={[0, 3, -6]} intensity={1.5} />

                <ambientLight intensity={0.5} />
                <Html position={[20, 15, 0]} wrapperClass="label" style={{ fontSize: '36px', fontWeight: 'bold', color: 'black' }}>
                    FILOSOFÍA GRIEGA
                </Html>
                <Floor />
                <Model8 position-y={-4.6} scale={3} position-x={3} position-z={4} rotation-y={6} castShadow />
                <Image />
                {/* <Float
                    speed={2}
                    rotationIntensity={2}
                >
                    <Text
                        font="./bangers-v20-latin-regular.woff"
                        fontSize={4}
                        color="black"
                        position-y={13}
                        position-x={-30}
                        maxWidth={8}
                        textAlign="center"
                    >
                        Pase el mouse por la pared de imagenes
                    </Text>
                </Float> */}
            </Canvas>
        </div>
        
    </>
}