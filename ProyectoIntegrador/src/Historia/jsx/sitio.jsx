import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("./model/temple.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fountain_Well_Stone_Tex_0.geometry}
              material={materials.Stone_Tex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fountain_Pillar_Stone_Tex_0.geometry}
              material={materials.Stone_Tex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fountain_Water_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fountain_Vase_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fountain_Lilpad_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fountain_Flower_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Entablature_Base_Stone_Tex_0.geometry}
              material={materials.Stone_Tex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ground_Base_BasesTex_0.geometry}
              material={materials.BasesTex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ivy_Base_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rubble_Pillar_Stone_Tex_0.geometry}
              material={materials.Stone_Tex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rubble_Stones_Stone_Tex_0.geometry}
              material={materials.Stone_Tex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rubble_Grass_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Templebase_Base_BasesTex_0.geometry}
              material={materials.BasesTex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BrokenPillar_Base2_Stone_Tex_0.geometry}
              material={materials.Stone_Tex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ground_Base5_BasesTex_0.geometry}
              material={materials.BasesTex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ground_Base6_BasesTex_0.geometry}
              material={materials.BasesTex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ground_Base7_BasesTex_0.geometry}
              material={materials.BasesTex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pillar_Pillar8_Stone_Tex_0.geometry}
              material={materials.Stone_Tex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pillar_Pillar9_Stone_Tex_0.geometry}
              material={materials.Stone_Tex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pillar_Pillar10_Stone_Tex_0.geometry}
              material={materials.Stone_Tex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pillar_Pillar11_Stone_Tex_0.geometry}
              material={materials.Stone_Tex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pillar_Pillar13_Stone_Tex_0.geometry}
              material={materials.Stone_Tex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Entablature_Base3_Stone_Tex_0.geometry}
              material={materials.Stone_Tex}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base1_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base2_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base3_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base4_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base5_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base6_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base7_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base8_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base9_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base10_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base11_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base12_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base13_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base14_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base15_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base16_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base17_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base18_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base19_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base20_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base21_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base22_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base23_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base24_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed_Base25_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ivy_Base1_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ivy_Base2_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ivy_Base3_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ivy_Base4_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ivy_Base5_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ivy_Base6_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ivy_Base7_Plants_Base_0.geometry}
              material={materials.Plants_Base}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./model/temple.glb");

