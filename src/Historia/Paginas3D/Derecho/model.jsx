import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model7(props) {
  const { nodes, materials } = useGLTF("/static/derechos.glb");
  return (
    <group {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.08, -12.72]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["Material.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/derechos.glb");
