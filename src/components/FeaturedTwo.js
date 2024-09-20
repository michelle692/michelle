import '../css/FeaturedTwo.css'

function FeaturedTwo() {
  return (
    <div className='f-two'>
        <img src="../images/raytracer.png" alt='raytracer' className="ray-img" />
        <h2><a href="https://personal-solar-system.vercel.app/" target="_blank" rel="noopener noreferrer" className='f-two-title'>Ray Tracing Renderer</a></h2>
        <p>This project was done for my computer graphics course. I wrote a collection of javascript functions that creates a 3D scene and produces 2D images of the scene. I made 8 different scenes that render different variations of spheres and cylinders in different lighting/shading. I also implemented shadow creation and surface reflections.  <br/> <br/>
        <a href="https://github.com/michelle692/personal-solar-system" target="_blank" rel="noopener noreferrer" className='f-two-desc'>Github Repo</a></p>

      </div>
  );
}

export default FeaturedTwo;