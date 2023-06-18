import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/static/greek_tholos.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[3.05, 1.29, 6.04]}
          rotation={[-0.27, 0.6, 1.93]}
          scale={0.75}
        />
        <group
          position={[-0.01, 3.44, 8.15]}
          rotation={[0, 0, 0.53]}
          scale={1.17}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Top_0.geometry}
            material={materials.material}
          />
        </group>
        <group
          position={[9.28, 14.12, 4.75]}
          rotation={[0, 0, 2.01]}
          scale={1.69}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock_02_0.geometry}
            material={materials.Rock_B}
          />
        </group>
        <group
          position={[0.5, 15.19, 6.6]}
          rotation={[-0.13, -0.22, 0.72]}
          scale={0.1}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock_01_0.geometry}
            material={materials.Rock_A}
          />
        </group>
        <group
          position={[12.95, 10.34, 2.01]}
          rotation={[0.24, 0.07, 3.14]}
          scale={0.13}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock_04_0.geometry}
            material={materials.Rock_A}
          />
        </group>
        <group
          position={[-7.86, 13.04, 6.11]}
          rotation={[0, 0, 0.52]}
          scale={1.69}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock_03_0.geometry}
            material={materials.Rock_B}
          />
        </group>
        <group position={[1.35, 6.6, 7.11]} rotation={[0, 0, -0.39]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Column_0.geometry}
            material={materials.Column}
          />
        </group>
        <group position={[0, 3.41, 3.1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stairs_Small_0.geometry}
            material={materials.Base}
          />
        </group>
        <group position={[0.01, 3.41, 4.8]} rotation={[0, 0, 0.84]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brazier_Bowl_0.geometry}
            material={materials.Column}
          />
        </group>
        <group position={[-7.52, 8.3, 3.29]} rotation={[0, 0, 0.49]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree_0.geometry}
            material={materials.tree}
          />
        </group>
        <group position={[-4.27, -3.15, 1.29]} scale={0.67}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lilypad_01_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[-10.49, 7.03, 1.28]}
          rotation={[0, 0, 2.18]}
          scale={0.71}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LilyPad_02_0.geometry}
            material={materials.Water}
          />
        </group>
        <group position={[-3.21, 4.74, 7.07]} rotation={[0, 0, 1.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Column001_0.geometry}
            material={materials.Column}
          />
        </group>
        <group position={[3.2, 2.07, 7.11]} rotation={[0, 0, 1.18]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Column002_0.geometry}
            material={materials.Column}
          />
        </group>
        <group position={[3.19, 4.72, 7.07]} rotation={[0, 0, 1.96]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Column003_0.geometry}
            material={materials.Column}
          />
        </group>
        <group position={[-1.28, 6.58, 7.11]} rotation={[0, 0, 0.39]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Column004_0.geometry}
            material={materials.Column}
          />
        </group>
        <group position={[1.29, 0.17, 7.11]} rotation={[0, 0, -2.75]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Column005_0.geometry}
            material={materials.Column}
          />
        </group>
        <group
          position={[11.35, 5.64, 1.27]}
          rotation={[0, 0, -2.6]}
          scale={0.7}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LilyPad_02001_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[5.96, -4.69, 1.31]}
          rotation={[0, 0, -1.11]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lilypad_01001_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[-5.93, -4.57, 1.28]}
          rotation={[0, 0, 1.05]}
          scale={0.52}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LilyPad_02002_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[-6.88, 2.88, 1.32]}
          rotation={[0, 0, 0.25]}
          scale={0.69}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lilypad_01002_0.geometry}
            material={materials.Water}
          />
        </group>
        <group position={[7.4, 0.77, 1.3]} rotation={[0, 0, -1.11]} scale={0.8}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lilypad_01003_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[8.79, 1.89, 1.29]}
          rotation={[0, 0, 0.8]}
          scale={0.39}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LilyPad_02003_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[6.03, 16.69, 0.63]}
          rotation={[1.98, -1.48, -1.23]}
          scale={0.12}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock_04001_0.geometry}
            material={materials.Rock_A}
          />
        </group>
        <group
          position={[-3.24, 10.44, 1.68]}
          rotation={[-0.47, -0.34, -0.49]}
          scale={0.05}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock_04002_0.geometry}
            material={materials.Rock_A}
          />
        </group>
        <group position={[-0.03, 4.43, 0.97]} rotation={[0, 0, -0.74]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[0.04, 3.35, 2.29]}
          rotation={[0, 0, 0.96]}
          scale={0.97}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_0.geometry}
            material={materials.Base}
          />
        </group>
        <group
          position={[-4.99, 9.64, 1.34]}
          rotation={[-0.18, -0.53, -0.37]}
          scale={0.03}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock_05003_0.geometry}
            material={materials.Rock_A}
          />
        </group>
        <group
          position={[7.19, 9.4, 1.17]}
          rotation={[0.33, 0.2, -2.33]}
          scale={0.06}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock_05001_0.geometry}
            material={materials.Rock_A}
          />
        </group>
        <group
          position={[-12.18, 11.5, 1.84]}
          rotation={[0.12, -0.07, -0.34]}
          scale={1.23}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock_05000_0.geometry}
            material={materials.Rock_A}
          />
        </group>
        <group
          position={[-9.25, 9.48, 1.28]}
          rotation={[0.59, -0.37, 1.61]}
          scale={0.03}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock_05002_0.geometry}
            material={materials.Rock_A}
          />
        </group>
        <group position={[0.01, 4, 3.5]} rotation={[0, 0, 1.57]} scale={0.11}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brazier_Stand000_0.geometry}
            material={materials.Column}
          />
        </group>
        <group
          position={[0.49, 3.13, 3.5]}
          rotation={[0, 0, -0.62]}
          scale={0.11}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brazier_Stand004_0.geometry}
            material={materials.Column}
          />
        </group>
        <group position={[0.05, 3.38, 0.66]} rotation={[0, 0, 0.92]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bigstairs_0.geometry}
            material={materials.Base}
          />
        </group>
        <group position={[-3.31, 2.13, 7.11]} rotation={[0, 0, 1.99]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Column006_0.geometry}
            material={materials.Column}
          />
        </group>
        <group position={[-0.98, -3.34, 1.34]} scale={1.12}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_0.geometry}
            material={materials.Base}
          />
        </group>
        <group
          position={[0.6, -3.77, 1.33]}
          rotation={[0, 0, -0.44]}
          scale={0.7}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_0.geometry}
            material={materials.Base}
          />
        </group>
        <group
          position={[-1.02, -5.18, 1.28]}
          rotation={[0, 0, 0.46]}
          scale={0.79}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_0.geometry}
            material={materials.Base}
          />
        </group>
        <group
          position={[0.86, -5.64, 1.38]}
          rotation={[0, 0, -1.58]}
          scale={1.28}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_0.geometry}
            material={materials.Base}
          />
        </group>
        <group
          position={[-1.14, -6.86, 1.33]}
          rotation={[0, 0, 1.57]}
          scale={1.28}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_0.geometry}
            material={materials.Base}
          />
        </group>
        <group
          position={[0.55, -7.9, 1.18]}
          rotation={[0, 0, -2.07]}
          scale={1.29}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_0.geometry}
            material={materials.Base}
          />
        </group>
        <group
          position={[-0.92, -8.29, 1.3]}
          rotation={[0, 0, 1.05]}
          scale={0.42}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_0.geometry}
            material={materials.Base}
          />
        </group>
        <group position={[-1.46, 0.17, 7.11]} rotation={[0, 0, -0.45]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Column007_0.geometry}
            material={materials.Column}
          />
        </group>
        <group
          position={[-0.02, 4.01, 3.5]}
          rotation={[0, 0, 1.54]}
          scale={0.11}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brazier_Stand001_0.geometry}
            material={materials.Column}
          />
        </group>
        <group
          position={[0.46, 3.11, 3.5]}
          rotation={[0, 0, -0.67]}
          scale={0.11}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brazier_Stand002_0.geometry}
            material={materials.Column}
          />
        </group>
        <group
          position={[-0.41, 3.07, 3.5]}
          rotation={[0, 0, -2.45]}
          scale={0.11}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brazier_Stand003_0.geometry}
            material={materials.Column}
          />
        </group>
        <group
          position={[-0.39, 3.04, 3.5]}
          rotation={[0, 0, -2.4]}
          scale={0.11}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brazier_Stand005_0.geometry}
            material={materials.Column}
          />
        </group>
        <group position={[-0.03, 4.43, -0.95]} rotation={[0, 0, 0.77]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[9.79, -0.12, 1.37]}
          rotation={[0, 0, 0.83]}
          scale={0.69}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[-8.56, 5.41, 1.35]}
          rotation={[0.07, -0.02, 0.71]}
          scale={1.07}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[-10.54, -0.64, 1.36]}
          rotation={[0, 0, -1.92]}
          scale={1.07}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[5.99, 8.12, 1.37]}
          rotation={[0, 0, -1.11]}
          scale={0.56}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[-3.52, 0.14, 1.61]}
          rotation={[0, 0, 0.43]}
          scale={1.39}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane018_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.05, -1.13, 1.96]}
          rotation={[-0.12, -0.09, -1.99]}
          scale={0.25}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_0.geometry}
            material={materials.Water}
          />
        </group>
        <group position={[0.07, 3.4, 2.17]} rotation={[0, 0, -1.02]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_0.geometry}
            material={materials.Water}
          />
        </group>
        <group position={[-1.45, 0.17, 2.6]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[-1.45, 0.17, 4.24]} rotation={[0, 0, 0.58]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[-1.45, 0.17, 2.56]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder016_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[-1.45, 0.17, 4.74]} rotation={[0, 0, 0.17]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder017_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.45, 0.17, -0.81]}
          rotation={[0, 0, -1.19]}
          scale={1.09}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.45, 0.17, 3.55]}
          rotation={[0, 0, -2.13]}
          scale={1.05}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[-1.45, 0.17, 5.19]} rotation={[0, 0, -2.36]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-4.99, 18.08, 1.81]}
          rotation={[-0.2, -0.15, 0.33]}
          scale={0.11}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock_04003_0.geometry}
            material={materials.Rock_A}
          />
        </group>
        <group
          position={[-11.21, 13.08, 1.51]}
          rotation={[-0.01, -0.21, -0.73]}
          scale={0.12}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rock_04004_0.geometry}
            material={materials.Rock_A}
          />
        </group>
        <group
          position={[-3.31, 2.14, 3.55]}
          rotation={[0, 0, 0.88]}
          scale={[-1.05, 1.05, 1.05]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder023_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.31, 2.14, -0.46]}
          rotation={[0, 0, -3.04]}
          scale={1.09}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.31, 2.14, 3.77]}
          rotation={[0, 0, -1.74]}
          scale={[-1.04, 1.04, 1.04]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.31, 2.14, 2.56]}
          rotation={[0, 0, -0.29]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.31, 2.14, 5.14]}
          rotation={[0, 0, -1.82]}
          scale={[-1.09, 1.09, 1.09]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[-3.31, 2.11, 4.48]} rotation={[0, 0, 0.58]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[3.17, 4.71, 3.76]}
          rotation={[0, 0, 2.23]}
          scale={1.05}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[3.21, 4.71, -0.81]}
          rotation={[0, 0, 2.5]}
          scale={1.09}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[3.19, 4.71, 4.74]} rotation={[0, 0, -2.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[3.2, 4.71, 2.56]} rotation={[0, 0, -2.6]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder031_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[3.2, 4.71, 4.04]} rotation={[0, 0, -0.34]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder032_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[-1.3, 6.59, 3.2]} rotation={[0, 0, -1.98]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder033_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.3, 6.57, 2.56]}
          rotation={[0, 0, -2.23]}
          scale={[-1, 1, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder035_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.3, 6.56, 3.77]}
          rotation={[0, 0, 2.97]}
          scale={[-1.04, 1.04, 1.04]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder036_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[-3.54, 1.79, 5.8]} rotation={[1.11, -0.54, 2.83]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.56, 1.81, 4.62]}
          rotation={[-1.96, 0.65, 0.25]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.76, 2.1, 2.53]}
          rotation={[2.74, 1.23, 2]}
          scale={0.9}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.59, 1.74, 2.47]}
          rotation={[1.02, -0.52, 2.79]}
          scale={0.98}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.09, 0.3, 3.5]}
          rotation={[2.01, -1.12, -2.61]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.02, 0.18, 3.76]}
          rotation={[-0.12, 1.18, -1.5]}
          scale={0.82}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane023_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[-1.38, -0.23, 5.69]} rotation={[1.33, -0.05, 2.64]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane024_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.78, -0.2, 2.36]}
          rotation={[-2.56, 0.62, 0.62]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane025_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[-1.8, -0.07, 4.5]} rotation={[1.13, -0.99, 2.28]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane026_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[3.13, 4.29, 2.74]}
          rotation={[-1.81, 0.3, -0.04]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane027_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[3.06, 4.29, 3.88]} rotation={[1.33, -0.05, 2.64]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane028_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.55, 1.82, 3.23]}
          rotation={[-1.87, 0.71, -0.64]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.29, 0.51, 1.96]}
          rotation={[0, 0, 0.29]}
          scale={1.39}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[3.87, -0.98, 1.36]}
          rotation={[0, 0, 0.34]}
          scale={1.39}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-0.68, -1.64, 1.74]}
          rotation={[0, 0, 0.29]}
          scale={1.39}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane013_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[2.62, 3.87, 2.25]}
          rotation={[0, 0, 1.16]}
          scale={1.39}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane014_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[2.65, 3.17, 2.21]}
          rotation={[0, 0, 2.08]}
          scale={0.9}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[4.33, 4.39, 1.96]}
          rotation={[0, 0, 2.95]}
          scale={1.39}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane015_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[2.77, 6.99, 1.81]}
          rotation={[0, 0, 2.09]}
          scale={1.39}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane016_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-2.87, 6.79, 2]}
          rotation={[0, 0, -1.27]}
          scale={[0.88, 0.88, 1.55]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane017_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.73, 6.27, 1.71]}
          rotation={[0, 0, -2.88]}
          scale={0.87}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.27, 1.64, 2.26]}
          rotation={[0, 0, -1.06]}
          scale={0.72}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane020_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.91, 1.77, 2.21]}
          rotation={[0, 0, -0.47]}
          scale={0.72}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-0.81, 1.12, 2.2]}
          rotation={[-Math.PI, 0, 2.77]}
          scale={0.59}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-2.24, 6.61, 2.21]}
          rotation={[0, 0, -1.57]}
          scale={0.98}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane030_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.92, 6.09, 2.22]}
          rotation={[0, 0, -1.46]}
          scale={0.63}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane031_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[2.51, -1.83, 1.51]}
          rotation={[1.6, 0.45, 0.37]}
          scale={0.99}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane032_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.42, -0.24, 2.5]}
          rotation={[-1.88, 0, -0.07]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane033_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[2.84, 2.2, 2.77]}
          rotation={[2.01, 1.01, 2.65]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane034_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[3.22, 2.06, 2.55]} rotation={[0, 0, 1.91]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[3.22, 2.07, -0.87]}
          rotation={[0, 0, 0.72]}
          scale={1.09}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[3.21, 2.06, 3.79]}
          rotation={[0, 0, 0.44]}
          scale={0.96}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-15.2, 6.37, 17.86]}
          rotation={[-0.09, 0.74, -0.4]}
          scale={1.18}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane044_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[-1.62, -0.23, 3.1]} rotation={[1.32, -0.31, 2.57]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane048_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-5.62, -3.72, 1.38]}
          rotation={[0.68, 0.16, -2.99]}
          scale={0.18}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[-13.2, 6.51, 12.58]}
          rotation={[-0.06, -0.14, 2.16]}
          scale={2.26}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane133_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-6.71, 7.42, 13.62]}
          rotation={[0, 0, 2.54]}
          scale={1.24}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane139_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[11, 5.94, 14.88]}
          rotation={[-0.26, -0.71, 2.22]}
          scale={1.07}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane037_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[10.52, 7.33, 11.15]}
          rotation={[0, 0, 2.84]}
          scale={0.87}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree001_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[7.42, 22.83, 18.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={7.63}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-1.86, 0.11, 6.39]}
          rotation={[0.74, -1.25, 1.85]}
          scale={0.85}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane035_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-2.91, 2.14, 2.88]}
          rotation={[3.04, -1.24, -1.71]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane039_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-2.97, 2.36, 3.62]}
          rotation={[2.01, -0.71, -2.88]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane040_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.5, 2.53, 3.12]}
          rotation={[1.95, 0.6, 2.92]}
          scale={0.9}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane041_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-3.56, 2.44, 4.32]}
          rotation={[1.8, 0.69, 3]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane042_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.26, 0.55, 4.11]}
          rotation={[-1.33, 0, -0.49]}
          scale={0.8}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane043_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[3.61, 1.95, 3.7]} rotation={[0.71, 1.35, -2.46]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane045_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[3.58, 2.3, 2.5]}
          rotation={[-1.21, 0.85, -0.45]}
          scale={0.79}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane046_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[3.44, 5.05, 2.86]} rotation={[-1.36, 0.65, -0.29]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane047_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1, 6.82, 3.69]}
          rotation={[1.96, -0.93, -2.94]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane049_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.61, 6.26, 2.59]}
          rotation={[-1.98, 0.7, 0.27]}
          scale={0.9}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane050_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-0.95, 6.76, 4.45]}
          rotation={[1.72, -0.76, -2.46]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane051_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[2.84, 4.97, 4.13]} rotation={[-1.05, -1.08, -0.02]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[2.74, 4.6, 2.49]} rotation={[0.78, -1.23, 1.89]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane052_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[0.01, 3.41, 5.16]} scale={0.31}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[5.46, 4.86, 5.43]}
          rotation={[-Math.PI / 2, 1.25, -Math.PI]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane053_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-0.36, 3.52, 5.52]}
          rotation={[Math.PI / 2, -0.49, 0]}
          scale={0.03}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane054_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[0.22, 3.02, 5.28]}
          rotation={[Math.PI / 2, 0.36, 0]}
          scale={0.04}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-0.07, 2.96, 5.03]}
          rotation={[Math.PI / 2, 0.21, 0]}
          scale={0.03}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-7.64, 1.94, 10]}
          rotation={[-Math.PI / 2, 1.25, -Math.PI]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane058_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-3.95, -1.84, 7.3]}
          rotation={[-Math.PI / 2, 1.25, -Math.PI]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane059_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[3.05, -4.14, 13]}
          rotation={[-Math.PI / 2, 1.25, -Math.PI]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane060_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[5.51, 1.29, 9.79]}
          rotation={[-Math.PI / 2, 1.25, -Math.PI]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane061_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[9.31, -1.75, 10]}
          rotation={[-Math.PI / 2, 1.25, -Math.PI]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane062_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[2.7, 9.16, 10]}
          rotation={[-Math.PI / 2, 1.25, -Math.PI]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane063_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-8.82, -1.23, 4.63]}
          rotation={[-Math.PI / 2, 1.25, -Math.PI]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane140_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[1.65, -4.25, 3.9]}
          rotation={[Math.PI / 2, 1.49, 0]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane141_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[10.82, 2.81, 2.4]}
          rotation={[Math.PI / 2, 1.49, 0]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane142_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-1.51, 0.64, 2.36]}
          rotation={[2.32, 0.02, 3.02]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane143_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[-1.7, 6.62, 3.04]}
          rotation={[-1.98, 1.29, 0.97]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane144_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group position={[3.62, 4.58, 3.99]} rotation={[0.49, 1.38, -2.24]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane145_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[3.04, 1.7, 3.72]}
          rotation={[-1.82, 0.36, -0.03]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane146_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[3.14, 1.64, 2.61]}
          rotation={[-1.96, 0.2, -0.07]}
          scale={0.86}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane147_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[4.52, 4.91, 1.96]}
          rotation={[0.01, 0.15, 2.05]}
          scale={0.34}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane148_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[1.92, 4.45, 2.4]}
          rotation={[0.15, 0.05, 0.83]}
          scale={0.18}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane149_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[-1.31, 1.59, 2.26]}
          rotation={[0, -0.15, -1.06]}
          scale={0.13}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane150_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[-4.15, 0.84, 1.93]}
          rotation={[0.09, -0.12, -0.4]}
          scale={0.34}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_0.geometry}
            material={materials.Water}
          />
        </group>
        <group
          position={[6.03, 5.71, 4.94]}
          rotation={[-Math.PI / 2, 0.75, -Math.PI]}
          scale={0.08}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[2.45, -6.06, 12.35]}
          rotation={[Math.PI / 2, 0.94, 0]}
          scale={0.09}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane151_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-8.78, 3.53, 8.85]}
          rotation={[-Math.PI / 2, 0.61, Math.PI]}
          scale={0.09}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane152_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[11.82, 6.4, 10.46]}
          rotation={[0.13, -0.08, -2.74]}
          scale={2.26}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane036_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[6.85, 8.7, 11.2]}
          rotation={[0, 0, -1.04]}
          scale={1.24}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane038_0.geometry}
            material={materials.leaves}
          />
        </group>
        <group
          position={[0.33, 3.52, 5.89]}
          rotation={[Math.PI / 2, -0.42, 0]}
          scale={0.03}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane000_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[0.22, 3.29, 6.76]}
          rotation={[-Math.PI / 2, 1.55, -Math.PI]}
          scale={0.03}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane153_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[0.2, 3.77, 6.43]}
          rotation={[-Math.PI / 2, 1.4, -Math.PI]}
          scale={0.04}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane154_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-0.12, 3.06, 6.23]}
          rotation={[Math.PI / 2, 0.89, 0]}
          scale={0.05}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane155_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-0.45, 3.42, 4.98]}
          rotation={[Math.PI / 2, 0.38, 0]}
          scale={0.05}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane156_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[0.07, 2.94, 5.65]}
          rotation={[Math.PI / 2, 0.36, 0]}
          scale={0.04}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane157_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[0.39, 3.24, 5.02]}
          rotation={[Math.PI / 2, 0.89, 0]}
          scale={0.04}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane158_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[0.26, 3.78, 5.09]}
          rotation={[-Math.PI / 2, 0.42, -Math.PI]}
          scale={0.04}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane159_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[0.11, 3.84, 6.01]}
          rotation={[-Math.PI / 2, -0.8, -Math.PI]}
          scale={0.03}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane160_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[0.39, 3.55, 5.2]}
          rotation={[-Math.PI / 2, 0.58, -Math.PI]}
          scale={0.03}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane161_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[0.1, 3.94, 5.47]}
          rotation={[-Math.PI / 2, 0.42, -Math.PI]}
          scale={0.04}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane162_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-0.25, 3.08, 5.26]}
          rotation={[Math.PI / 2, 0.96, 0]}
          scale={0.03}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane163_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-0.07, 3.82, 5.11]}
          rotation={[Math.PI / 2, -1.14, 0]}
          scale={0.05}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane164_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-7.49, -1.77, 8.85]}
          rotation={[Math.PI / 2, -1.55, 0]}
          scale={0.09}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane055_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-6, 5.31, 3.12]}
          rotation={[-Math.PI / 2, -0.95, Math.PI]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane165_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-5.94, 0.09, 12.94]}
          rotation={[-Math.PI / 2, -0.95, Math.PI]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane166_0.geometry}
            material={materials.tree}
          />
        </group>
        <group
          position={[-3.36, -7.1, 2.48]}
          rotation={[-Math.PI / 2, 1.25, -Math.PI]}
          scale={0.14}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane167_0.geometry}
            material={materials.tree}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/greek_tholos.glb");
