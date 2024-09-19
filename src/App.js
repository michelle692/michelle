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
        <h1>Featured <br/>Projects</h1>
        <img src="../images/solar.png" alt='personal solar system' className="solar-img" />
        <h2><a href="https://personal-solar-system.vercel.app/" target="_blank" rel="noopener noreferrer">3D Watch History Visualization</a></h2>
        <p>I wanted to visualize all the movies and mini tv series I watched in the past eight months and decided to display it as a solar system. I used React Three Fiber to build the website, so the solar system components are all 3D! Click the planets to view all the movies I watched and listen to my favorite track from each movie. The center sphere has a shader that visualizes the audio frequencies of each song. <br/> <br/>
        <a href="https://github.com/michelle692/personal-solar-system" target="_blank" rel="noopener noreferrer">Github Repo</a></p>

      </div>
    </div>
    
  );
}

export default App;
