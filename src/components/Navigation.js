import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav__container">
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
