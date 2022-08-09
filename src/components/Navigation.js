import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logoImg from './images/logo.png';

function Navigation() {
  return (
    <div className="nav__container">
      <div className="nav__logo">
        <img src={logoImg} alt="Logo" className="nav__logoImg" />
        <div className="nav_logoName">Math magicians</div>
      </div>
      <nav className="nav__links">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quote</Link>
      </nav>
    </div>
  );
}

export default Navigation;
