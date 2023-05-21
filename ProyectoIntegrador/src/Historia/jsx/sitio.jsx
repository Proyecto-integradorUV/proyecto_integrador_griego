import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("./model/greek_temple.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-10.72, 202.68, -14.7]}
            rotation={[-1.56, -0.01, 0.08]}
          >
            <group position={[338.16, 755.26, -201.08]}>
              <mesh
                geometry={nodes["Building_Material_#108_0"].geometry}
                material={materials.Material_108}
              />
              <mesh
                geometry={nodes["Building_Material_#109_0"].geometry}
                material={materials.Material_109}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./model/greek_temple.glb");

