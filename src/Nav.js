import React from 'react';
import logo from './images/crab.svg';

const Nav = () => {
  return (
    <div>
      <div className='navbar'>
        <img id='logo' src={logo} alt='logo-img' />
        <ul className='nav-items-container'>
          <li className='nav-items'>
            <a href='#'>Home</a>
          </li>
          <li className='nav-items'>
            <a href='#'>Skills</a>
          </li>
          <li className='nav-items'>
            <a href='#'>Education</a>
          </li>
          <li className='nav-items'>
            <a href='#'>Portfolio</a>
          </li>
          <li className='nav-items'>
            <a href='#'>Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
