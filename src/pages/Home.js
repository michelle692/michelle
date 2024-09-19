import FeaturedOne from '../components/FeaturedOne';
import FeaturedThree from '../components/FeaturedThree';
import FeaturedTwo from '../components/FeaturedTwo';
import Welcome from '../components/Welcome';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>
        <Welcome />
        <FeaturedOne />
        <FeaturedTwo />
        <FeaturedThree />
      </div>

      <div style={{ position: 'relative', height: '50vh' }}>
      <Link to="/projects" style={{ textDecoration: 'none' }}>
        <h2
          style={{
            position: 'absolute',
            top: '55%',
            right: '7%',
            fontStyle: 'italic',
            textDecoration: 'underline',
            color: 'black',
            cursor: 'pointer' 
          }}
        >
          View More {'\u2192'}
        </h2>
      </Link>
    </div>
    </div>
    
  );
}

export default Home;
