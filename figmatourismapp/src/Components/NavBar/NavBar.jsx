import React from 'react';
import './NavBar.css';
import myLogo from '../../resources/images/pagelogo.svg';
import Button from '../Button';

 function NavBar() {
  return (
    <div id="navbar">
      <div className="pagelogo">
      <img src={myLogo} alt=""/>
      </div>
      <div className='links'>
        <ul type='none'>
          <li>Home</li>
          <li>About</li>
          <li>Tour Package</li>
          <li>Gallery</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='button-area'><Button name="Sign Up"/></div>
    </div>
  )
}
export default NavBar;
