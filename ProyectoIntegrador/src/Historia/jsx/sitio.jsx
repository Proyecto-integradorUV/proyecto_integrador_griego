import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("./model/templo.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.building.geometry}
        material={materials.white}
        position={[14.5, 16.95, 12.86]}
        scale={[10.27, 10.27, 8.48]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.staircase.geometry}
        material={materials.white}
        position={[-0.07, -0.16, 0]}
        scale={[35.19, 1.08, 39.72]}
      />
    </group>
  );
}

useGLTF.preload("./model/templo.glb");