import React from 'react';
import './Header.css';
import logo from './logo-MicahProjects.svg';

function Header() {
  return (
    <header className="header">
      <div className="header-logo-nav">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
