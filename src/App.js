import React from "react";
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, Suspense } from 'react';
import { OrbitControls, Environment } from '@react-three/drei'
import { LayerMaterial, Color, Depth, Fresnel, Noise} from 'lamina'
import { useControls } from 'leva'
import './App.css';

//UI editor
const App = () => {
  const props = useControls({
    base: { value: '#ff4eb8' },
    colorA: { value: '#00ffff' },
    colorB: { value: '#ff8f00' }
  })
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, -0.75, 0.75], fov: 80, near: 0.001 }}>
      <Suspense fallback={null}>
        <Bg {...props} />
        {/* <Flower {...props} />
        <mesh>
          <sphereGeometry args={[0.2, 64, 64]} />
          <meshPhysicalMaterial depthWrite={false} transmission={1} thickness={10} roughness={0.0} />
        </mesh> */}
        <OrbitControls />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} color={props.colorA} />
        <ambientLight intensity={0.4} />
        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  );
};
  
function Bg({ base, colorA, colorB }) {
  const mesh = useRef()
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += delta
  })
  return (
    <mesh ref={mesh} scale={5}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial attach="material" side={THREE.BackSide}>
        <Color color={base} alpha={1} mode="normal" />
        <Depth colorA={colorB} colorB={colorA} alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
        {/* <Noise mode="subtract" alpha={0.3} mapping={"local"} type={"curl"}/> */}
      </LayerMaterial>
    </mesh>
  )
}

function Flower({ base, colorA, colorB }) {
  const mesh = useRef()
  const depth = useRef()
  useFrame((state, delta) => {
    mesh.current.rotation.z += delta / 2
    depth.current.origin.set(-state.mouse.y, state.mouse.x, 0)
  })
  return (
    <mesh rotation-y={Math.PI / 2} scale={[2, 2, 2]} ref={mesh}>
      <torusKnotGeometry args={[0.4, 0.08, 400, 32, 3, 7]} />
      <LayerMaterial>
        <Color color={base} alpha={1} mode="normal" />
        <Depth colorA={colorB} colorB={colorA} alpha={0.5} mode="normal" near={0} far={3} origin={[1, 1, 1]} />
        <Depth ref={depth} colorA={colorB} colorB="black" alpha={1} mode="lighten" near={0.25} far={2} origin={[1, 0, 0]} />
        <Fresnel mode="softlight" color="white" intensity={0.3} power={2} bias={0} />
        <Noise mode="softlight" alpha={0.3} mapping={"world"} type={"curl"}/>
      </LayerMaterial>
    </mesh>
  )
}

export default App;

