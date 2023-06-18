import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model3(props) {
  const { nodes, materials } = useGLTF("/static/vestimenta.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[7.53, 3.25, 6.06]} rotation={[1.61, 0.16, -1.83]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/vestimenta.glb");
