import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/static/gastronomia3D.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stereo_textured_mesh_Material0_0.geometry}
            material={materials.Material0}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/gastronomia3D.glb");