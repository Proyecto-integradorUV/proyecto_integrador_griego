import { OrbitControls, Html, Text, Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import Model3 from './model';
import Floor from './Floor';
import Image from './Image';
import fondo from '../../Images/grecia.jpg';
import { Link } from "react-router-dom";
import regresar from "../../../style/botones/regresar.png";
import NavbarPrincipal from "../../../components/navbar2";
import { useNavigate } from 'react-router-dom';

export default function Experience6() {
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
        paddingtop: '100px',
        margintop: '100px',
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Temas/Mitologia');
    };

    const buttonStyles = {
        position: 'fixed',
        zIndex: 1,
        background: 'none',
        border: 'none',
        bottom: '10px',
        left: '10px',
        padding: '8px 16px',
    };

    return <>
     <NavbarPrincipal />
         <div ref={containerRef} className="contenedorLeccionesMito">
         {/* <img src={regresar} className="img-fluid" alt="Imagen" /> */}
         <button onClick={handleClick} style={buttonStyles}><img src={regresar} className="img-fluid" alt="Imagen" /></button>
            <Canvas
                style={canvasStyles}
                shadows
                camera={{
                    fov: 70,
                    near: 0.3,
                    far: 250,
                    position: [10, 13,30]
                }}
            >
                <OrbitControls makeDefault />

                <spotLight castShadow position={[0, 3, -6]} intensity={1.5} />

                <ambientLight intensity={0.5} />
                <Html position={[10, 15, 0]} wrapperClass="label" style={{ fontSize: '36px', fontWeight: 'bold', color: 'red' }}>
                    MITOLOGIA GRIEGA
                </Html>
                <Floor />
                <Model3 position-y={-2} scale={2.8} position-z={2} rotation-y={-0.5} castShadow />
                <Image />
                <Float
                    speed={2}
                    rotationIntensity={2}
                >
                    <Text
                        font="./bangers-v20-latin-regular.woff"
                        fontSize={2}
                        color="black"
                        position-y={13}
                        position-x={-15}
                        maxWidth={8}
                        textAlign="center"
                    >
                        Pase el mouse por la pared de imagenes
                    </Text>
                </Float>
            </Canvas>
        </div>
    </>
}