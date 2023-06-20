import { OrbitControls, Html, Text, Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Model7 from './model';
import Floor from './Floor';
import Image from './Image';
import fondo from '../../Images/grecia.jpg'

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
        position: 'absolute',
        top: '20px',
        zIndex: 1,
        fontSize: '18px',
        padding: '8px 16px',
        backgroundColor: '#E07A5F',
        color: 'black',
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Temas/Derechos');
    };

    return <>
         <div ref={containerRef} style={containerStyles}>
            <button onClick={handleClick} style={buttonStyles}>Regresar</button>
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
                    DERECHOS EN GRECIA
                </Html>
                <Floor />
                <Model7 position-y={-2.4} position-x={-60} scale={10} position-z={110} rotation-y={-0.5} castShadow />
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