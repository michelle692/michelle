import React, { useRef, useState } from 'react';
import '../css/Display.css'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';
import { usePromptContext } from '../PromptContext';

function Plane({ position, rotation, texture }) {
  console.log("in plane", texture.source)
  const myTexture = useLoader(THREE.TextureLoader, texture.source);
  console.log("plane texture ", myTexture)
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[1.7, 1]} />
      <meshStandardMaterial map={myTexture} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Carousel({ planeCount, targetRotation, textures }) {
  const groupRef = useRef();
  const baseRadius = 0.6;
  const exponentFactor = 1.17;
  const radius = baseRadius * Math.pow(exponentFactor, planeCount);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (targetRotation - groupRef.current.rotation.y) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: planeCount }).map((_, i) => {
        const angle = (i / planeCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const rotation = [0, -angle + (Math.PI / 2), 0];
        // const color = i === 0 ? 'black' : getRandomColor();
        console.log(i);
        const texture = textures[i];
        console.log("in carousel text ", texture)
        return <Plane key={i} position={[x, 0, z]} rotation={rotation} texture={texture} />

      })}
    </group>
  );
}

function Display() {
  const { project } = usePromptContext();
  console.log("project ", project.numImgs);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);
  const planeCount = project.numImgs;
  const textures = project.images;
  console.log("t ", textures)

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % planeCount;
    const newTargetRotation = -(newIndex / planeCount) * Math.PI * 2;

    // console.log("newIndex ", newIndex);
    // console.log("targetRotation ", targetRotation);
    // console.log("newTargetRotation ", newTargetRotation);

    let delta = newTargetRotation - targetRotation;
    // console.log("pre delta ", delta)
    while (delta > Math.PI) delta -= Math.PI * 2;
    while (delta < -Math.PI) delta += Math.PI * 2;

    // console.log("post delta ", delta);

    setCurrentIndex(newIndex);
    setTargetRotation(targetRotation + delta);
    // console.log("target + delta ", targetRotation);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + planeCount) % planeCount;
    const newTargetRotation = -(newIndex / planeCount) * Math.PI * 2; 

    let delta = newTargetRotation - targetRotation;
    while (delta > Math.PI) delta -= Math.PI * 2;
    while (delta < -Math.PI) delta += Math.PI * 2;

    setCurrentIndex(newIndex);
    setTargetRotation(targetRotation + delta);
  };

  return (
      <div className='display-container'>
        <Canvas>
          <OrthographicCamera
            makeDefault
            zoom={450}
            near={1}
            far={2000}
            position={[85, 3, 0]}
          />
          <ambientLight intensity={Math.PI / 2}/>
          <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
          <OrbitControls enableZoom={false} autoRotate={false} />

          <Carousel planeCount={planeCount} targetRotation={targetRotation} textures={textures}/>
        </Canvas> 
        <div>
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
  );
}

export default Display;