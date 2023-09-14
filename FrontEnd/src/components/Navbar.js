import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ham from '../images/hamburger.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);  
  const auth=localStorage.getItem("authtoken")  


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`nav ${menuOpen ? 'open' : ''}`}>
        <h3>BookStore</h3>
        <ul className={`menu-items ${menuOpen ? 'open' : ''}`}>
          <li><NavLink exact to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink exact to="/category" onClick={closeMenu}>Categories</NavLink></li>
        
          <li><NavLink exact to="/contactus" onClick={closeMenu}>Contact us</NavLink></li>    
    { 
      auth!== null ?  <li><NavLink exact to="/account" onClick={closeMenu}>My Account</NavLink></li> : null
    }  
     { 
      auth== null ?  <li><NavLink exact to="/login" onClick={closeMenu}>Login?</NavLink></li> : null
    }

         
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <img src={ham} alt="" className={`icons navham ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} />
      </div>
    </>
  );
}
