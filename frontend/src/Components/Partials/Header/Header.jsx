import React, { useState } from 'react';
// import './Header.scss';
import { Link } from 'react-router-dom'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      
      <button className="header__burger" onClick={toggleMenu}>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
      </button>
      {isOpen && (
        <ul className="header__menu">
         <Link to="/"   className='Links'> <li className="header__menu-item">Home</li></Link>
         <Link to="/Cards"   className='Links'><li className="header__menu-item">Cards</li></Link>
         <Link to="/Products"  className='Links'><li className="header__menu-item">Products</li></Link>
         <Link to="/formvalidation"  className='Links'> <li className="header__menu-item">FormValidation</li></Link>
         <Link to="/login"  className='Links'> <li className="header__menu-item">Login</li></Link>
        </ul>
      )}
    </header>
  );
};

export default Header;
