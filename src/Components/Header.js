import React from 'react';
import './Header.css';
function Header() {
  return (
    <header >
   
    <img src={`${process.env.PUBLIC_URL}/Capture.JPG`} alt="Logo" className="logo-image" />
      
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
      

    </header>
  );
}

export default Header;
