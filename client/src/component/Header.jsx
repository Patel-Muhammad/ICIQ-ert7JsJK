import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbarContent">
          <div className="navbarButtons">
            <div className="logo">
              <Link to="/" className="navbarLink">
                <img className='img-logo' src="/Image/logo.png" alt="scan" />
              </Link>
            </div>
          </div>
          <div className="navbarLinks" id="navbar-sticky">
            <ul className="flexCenter">
              <li className="navbarLink">
                <Link to="/">Home</Link>
              </li>
              <li className="navbarLink">
                <Link to="/about">About</Link>
              </li>
              <li className="navbarLink">
                <Link to="/scan">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
