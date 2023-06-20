import { useTexture } from "@react-three/drei"
import { DoubleSide } from "three"
import { useState, useEffect } from "react";

export default function Image() {

    const PATH = "/static/fondos/sitios/"
    const imagenes = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
    const [textureUrl, setTextureUrl] = useState(imagenes[0]);
    const [canChangeImage, setCanChangeImage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCanChangeImage(true);
        }, 1000); // Tiempo de espera en milisegundos antes de permitir cambiar la imagen nuevamente

        return () => clearTimeout(timer);
    }, [textureUrl]);

    const props = useTexture({
        map: PATH + textureUrl
    });

    const changeImage = () => {
        if (canChangeImage) {
            setCanChangeImage(false);

            let idAnterior = textureUrl;
            let idImage;
            do {
                idImage = Math.floor(Math.random() * imagenes.length);
            } while (idAnterior === imagenes[idImage]);

            setTextureUrl(imagenes[idImage]);
        }
    };

    return (
        <mesh receiveShadow position-z={-18} position-y={16} rotation-z={-Math.PI * 2} onPointerMove={changeImage} scale={2}>
            <planeGeometry args={[18, 18]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    );
}