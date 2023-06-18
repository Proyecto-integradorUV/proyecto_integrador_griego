import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/static/socrates.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[0.11, 0.63, -3.1]}>
        <group position={[-1.64, -2.58, -1.67]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.material_0}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/socrates.glb");