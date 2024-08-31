// Bringing in the required import from 'react-router-dom'
// Including functionality to add styles to the active link
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

export default function Nav() {
  // The Navbar component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <NavLink 
        key={1} 
        className="nav-link" 
        to="/" 
        style={({ isActive }) => ({
          color: isActive ? 'lightBlue' : 'white', // Change color based on active state
        })}
        >
          Home
        </NavLink>,
        <NavLink 
        key={2} 
        className="nav-link" 
        to="/portfolio"
        style={({ isActive }) => ({
          color: isActive ? 'lightBlue' : 'white',
        })}
        >
          Portfolio
        </NavLink>,
        <NavLink 
        key={3} 
        className="nav-link" 
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? 'lightBlue' : 'white',
        })}
        >
        Contact
      </NavLink>,
      <a 
      key={4} 
      className="nav-link" 
      href="/assets/rory-dowse-resume.pdf" download
      style={{ color: 'white' }}
      >
        Resume
      </a>,
      ]}
    />
  );
}
