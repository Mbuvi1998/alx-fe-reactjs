// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f4f4f4' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Home</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color: '#000' }}>About</Link></li>
        <li><Link to="/services" style={{ textDecoration: 'none', color: '#000' }}>Services</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none', color: '#000' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
