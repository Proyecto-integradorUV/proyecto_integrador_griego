import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model2(props) {
  const { nodes, materials } = useGLTF("/static/literatura.glb");
  return (
    <group {...props} dispose={null} scale={1.2}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Physics_Book__0.geometry}
              material={materials["Scene_-_Root"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/literatura.glb");
