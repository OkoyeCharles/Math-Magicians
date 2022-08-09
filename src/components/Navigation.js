import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const navStyles = {
    display: 'flex',
    padding: '0.5em 0.4em',
    alignItems: 'center',
    boxShadow: '0 0 0.5em rgba(0, 0, 0, 0.204)',
  };

  return (
    <div className="nav__container" style={navStyles}>
      <div className="nav__logo">Math Magicians</div>
      <nav className="nav__links">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quote</Link>
      </nav>
    </div>
  );
}

export default Navigation;
