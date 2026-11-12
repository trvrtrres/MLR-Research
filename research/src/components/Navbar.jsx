import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/price-calculator', label: 'Price Calculator' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/legal', label: 'Legal Works' },
  { to: '/tutorial', label: 'Tutorial' },
];

function Navbar({ onTour }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-pill container">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="nav-logo-mark">🌾</span>
          TAMAsang KITA:
        </Link>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button type="button" className="nav-cta" onClick={onTour}>
          <span>How it Works</span>
          <span className="nav-cta-arrow">→</span>
        </button>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
