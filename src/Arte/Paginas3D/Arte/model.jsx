import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/static/greek_lyre.glb");
  return (
    <group {...props} dispose={null} scale={10}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.29}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.objHarpquickmaterial2matnetMaterial_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.objHarpquickmaterial2matnetMaterial_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.objHarpquickmaterial2matnetMaterial_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.objHarpquickmaterial2matnetMaterial_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.objHarpquickmaterial2matnetMaterial_2}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/greek_lyre.glb");