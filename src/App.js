import './App.css';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Miffy } from './components/Miffy';

function App() {
  return (
    <div>
      <div className='page-one'>
        <div className='text'>
          <h1>Hello!</h1>
          <p>Welcome to my page. I'm Michelle and this is where I share my passions &lt;3</p>
          <p>Scroll down to explore </p>
        </div>

        <div className='canvas-container'>
          <Canvas>
            <OrthographicCamera
                makeDefault
                zoom={100}
                near={1}
                far={2000}
                position={[85, 20, 200]}
              />
            <ambientLight intensity={Math.PI / 2}/>
            <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI}/>
            <OrbitControls enableZoom={false} autoRotate={false}/>
            <Center>
              <Miffy scale={2.2}/>
            </Center>
          </Canvas> 
        </div>
      </div>

      <div className='page-two'>
        <div className='two-title'>
          <h1>Featured <br/>Projects</h1>
        </div>
      </div>
    </div>
    
  );
}

export default App;
