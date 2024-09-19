import { Link } from 'react-router-dom';
import '../css/NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <Link to="/projects" className='nav-link'>
        projects
      </Link>
      <Link to="/about" className='nav-link'>
        about
      </Link>
    </nav>
  );
}

export default NavBar;