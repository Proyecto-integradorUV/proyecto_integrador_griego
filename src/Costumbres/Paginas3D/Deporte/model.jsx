
import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/static/discobolus.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0.749, 0]}>
        <group position={[-2.85, -14.541, -4.32]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Material_0}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/discobolus.glb");
