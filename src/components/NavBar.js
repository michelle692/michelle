import { Link } from 'react-router-dom';
import '../css/NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <Link to="/" className='logo-link'>
        <img src='../images/homeicon.png' alt='home' className='logo'/>
      </Link>

      <div className='nav-links'>
        <Link to="/projects" className='nav-link'>
          projects
        </Link>
        <Link to="/about" className='nav-link'>
          about
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;