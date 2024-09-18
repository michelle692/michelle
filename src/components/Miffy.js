/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Miffy(props) {
  const { nodes, materials } = useGLTF('/miffy.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[0, 0.426, 0]}
        scale={[0.63, 0.563, 0.518]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box.geometry}
        material={nodes.Box.material}
        position={[0.002, 0.283, 0.239]}
        rotation={[0.023, 0.018, 1.093]}
        scale={[1, 1, 1.189]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box_1.geometry}
        material={nodes.Box_1.material}
        position={[0, 0.284, 0.23]}
        rotation={[0.188, -0.063, -1.136]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_4.geometry}
        material={nodes.Sphere_4.material}
        position={[0.148, 0.389, 0.223]}
        scale={[-0.044, 0.072, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_5.geometry}
        material={nodes.Sphere_5.material}
        position={[-0.201, 0.943, 0]}
        rotation={[0, 0, 0.262]}
        scale={[-0.196, 0.719, 0.185]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={nodes.Cylinder_1.material}
        position={[0.086, -0.257, 0]}
        rotation={[-0.003, 0, -0.012]}
        scale={[-0.176, 0.107, 0.131]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone_1_1.geometry}
        material={nodes.Cone_1_1.material}
        position={[0, 0.106, 0]}
        scale={[-0.824, 0.647, 0.698]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_6.geometry}
        material={nodes.Sphere_6.material}
        position={[0.223, 0.094, 0]}
        rotation={[0, 0, 0.715]}
        scale={[-0.142, 0.265, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_1.geometry}
        material={nodes.Sphere_1.material}
        position={[-0.148, 0.389, 0.223]}
        scale={[0.044, 0.072, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_2.geometry}
        material={nodes.Sphere_2.material}
        position={[0.201, 0.943, 0]}
        rotation={[0, 0, -0.262]}
        scale={[0.196, 0.719, 0.185]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[-0.086, -0.257, 0]}
        rotation={[-0.003, 0, 0.012]}
        scale={[0.176, 0.107, 0.131]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone_1.geometry}
        material={nodes.Cone_1.material}
        position={[0, 0.106, 0]}
        scale={[0.824, 0.647, 0.698]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_3.geometry}
        material={nodes.Sphere_3.material}
        position={[-0.223, 0.094, 0]}
        rotation={[0, 0, -0.715]}
        scale={[0.142, 0.265, 0.13]}
      />
    </group>
  )
}

useGLTF.preload('/miffy.glb')
