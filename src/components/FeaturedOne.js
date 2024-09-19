import '../css/FeaturedOne.css'

function FeaturedOne() {
  return (
    <div className='page-two'>
        <h1>Featured <br/>Projects</h1>
        <img src="../images/solar.png" alt='personal solar system' className="solar-img" />
        <h2><a href="https://personal-solar-system.vercel.app/" target="_blank" rel="noopener noreferrer">3D Watch History Visualization</a></h2>
        <p>I wanted to visualize all the movies and mini tv series I watched in the past eight months and decided to display it as a solar system. I used React Three Fiber to build the website, so the solar system components are all 3D! Click the planets to view all the movies I watched and listen to my favorite track from each movie. The center sphere has a shader that visualizes the audio frequencies of each song. <br/> <br/>
        <a href="https://github.com/michelle692/personal-solar-system" target="_blank" rel="noopener noreferrer">Github Repo</a></p>

      </div>
  );
}

export default FeaturedOne;