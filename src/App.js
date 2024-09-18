import './App.css';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className='App'>
      <Canvas>
        <ambientLight intensity={Math.PI / 2}/>
        <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI}/>
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color={'hotpink'} />
        </mesh>
      </Canvas> 
    </div>
  );
}

export default App;
