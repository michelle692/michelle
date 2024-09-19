import '../css/FeaturedThree.css'

function FeaturedThree() {
  return (
    <div className='f-three'>
        <img src="../images/pixiedust.png" alt='PixieDust, a 3D music visualizer' className="pixie-img" />
        <h2><a href="https://pixiedust.vercel.app/" target="_blank" rel="noopener noreferrer">PixieDust</a></h2>
        <p>For this project, I was inspired by the visuals that musicians might play during their live sets. This a 3D audio visualizer takes the frequencies from the user's mic input and utilizes those values to displace the pixels of any given image and scale it's color intensity.<br/> <br/>
        <a href="https://github.com/michelle692/PixieDust" target="_blank" rel="noopener noreferrer">Github Repo</a></p>

      </div>
  );
}

export default FeaturedThree;