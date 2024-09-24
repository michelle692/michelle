import React, { useRef, useState } from 'react';
import '../css/Display.css'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useProjectContext } from '../ProjectContext';

function Plane({ position, rotation, texture }) {
  const myTexture = useLoader(THREE.TextureLoader, texture.source);
  // console.log("plane texture ", myTexture)
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
        const texture = textures[i];
        // console.log("in carousel text ", texture)
        return <Plane key={i} position={[x, 0, z]} rotation={rotation} texture={texture} />

      })}
    </group>
  );
}

function Display() {
  const { project } = useProjectContext();
  // console.log("project ", project.numImgs);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);
  const planeCount = project.numImgs;
  const textures = project.images;
  // console.log("t ", textures)

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

    <ImgCount currIndex={currentIndex} total={planeCount}/>
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

  function ArrowButton({ style, label, onClick }) {
    return (
      <Html>
        <button 
          style={{
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '40px',
            padding: '5px 10px',
            fontSize: '20px',
            cursor: 'pointer',
            position: 'absolute',
            ...style,
          }}
          onClick={onClick}
        >
          {label}
        </button>
      </Html>
    );
  }

  function ImgCount({ currIndex, total }) {
    return (
      <Html>
        <div style={{
        position: 'absolute',
        bottom: '-18rem',
        left: '3rem',
        color: 'black',
        fontSize: '20px',
      }}>
        {currIndex} / {total}
      </div>
      </Html>
    );
  }

  return (
      <div className='carousel-container'>
        <Canvas>
          <OrthographicCamera
            makeDefault
            zoom={500}
            near={1}
            far={2000}
            position={[85, 3, 0]}
          />
          <ambientLight intensity={Math.PI / 2}/>
          <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
          <OrbitControls enableZoom={false} autoRotate={false} />

          <Carousel planeCount={planeCount} targetRotation={targetRotation} textures={textures}/>

          <ArrowButton style={{ bottom: '-22rem', right: '2rem' }}  label="&lt;" onClick={handlePrev} />
          <ArrowButton style={{ bottom: '-22rem', left: '2rem' }} label="&gt;" onClick={handleNext} />
        </Canvas> 
        {/* <div>
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div> */}
      </div>
  );
}

export default Display;