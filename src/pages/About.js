import NavBar from '../components/NavBar';
import '../css/About.css'

function About() {
  return (
    <div className="about-container">
      <NavBar />
      <img src='../mish.png' alt='profile' className='profile-circle'/>
      <p>
        Hi! I’m Michelle and I recently graduated from Georgia Tech with a computer science degree. I love creative coding whether it be for websites, games, or fun! I’m currently exploring shaders with GPU programming and I enjoy playing around with different designs, effects and animations. I’m most comfortable with object oriented programming in Java and I’ve made a couple React websites using Javascript, HTML, and CSS. My computer graphics class has greatly influenced my interests and introduced me to p5.js and WebGL. From there I went on to explore three.js and React Three Fiber which is what I use for most of my work.
      </p>
      <h1>About <br /> Me</h1>
    </div>
  );
}

export default About;