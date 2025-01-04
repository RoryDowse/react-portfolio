// Bringing in the required import from 'react-router-dom'
// Including functionality to add styles to the active link
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

export default function Nav() {
  // The Navbar component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <li key={1}>
          <NavLink 
          className="nav-link" 
          to="/" 
          style={({ isActive }) => ({
            color: isActive ? 'var(--tertiary-color)' : 'var(--background-color)', // Change color based on active state
          })}
          >
            About Me
          </NavLink>
        </li>,
        <li key={2}>
          <NavLink 
          className="nav-link" 
          to="/portfolio"
          style={({ isActive }) => ({
            color: isActive ? 'var(--tertiary-color)' : 'var(--background-color)', 
          })}
          >
            Portfolio
          </NavLink>
        </li>,
        <li key={3}>
          <NavLink 
          className="nav-link" 
          to="/videos"
          style={({ isActive }) => ({
            color: isActive ? 'var(--tertiary-color)' : 'var(--background-color)', 
          })}
          >
            Videos
          </NavLink>
        </li>,
        <li key={4}>
          <NavLink 
          className="nav-link" 
          to="/blog"
          style={({ isActive }) => ({
            color: isActive ? 'var(--tertiary-color)' : 'var(--background-color)', 
          })}
          >
          Blog
        </NavLink>
      </li>,
      <li key={5}>
        <NavLink 
        className="nav-link" 
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? 'var(--tertiary-color)' : 'var(--background-color)', 
        })}
        >
        Contact
        </NavLink>
      </li>,
      <li key={6}>
        <NavLink 
          className="nav-link" 
          to="/resume"
          style={({ isActive }) => ({
            color: isActive ? 'var(--tertiary-color)' : 'var(--background-color)', 
          })}
          >
          Resume
        </NavLink>
      </li>,
      ]}
    />
  );
}
