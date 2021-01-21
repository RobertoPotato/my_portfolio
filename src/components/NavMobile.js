import React from 'react';
import styled from 'styled-components';
import { mediumDevices } from '../breakpoints';
import { accentColorLight } from './constants';

const NavItemsContainer = styled.ul`
  margin: 0;
  transition: 0.4s all;
  background-color: ${accentColorLight};
  border-radius: 0 0 10px 10px;
  @media (max-width: ${mediumDevices}px) {
  }
`;

const NavItem = styled.li`
  display: block;
  margin: 22px;
  margin-top: 0;
`;

const NavMobile = ({ hideNav }) => {
  return (
    <NavItemsContainer className='nav-items-container'>
      <NavItem>
        <a href='#'>Home</a>
      </NavItem>
      <NavItem>
        <a href='#'>Skills</a>
      </NavItem>
      <NavItem>
        <a href='#'>Education</a>
      </NavItem>
      <NavItem>
        <a href='#'>Portfolio</a>
      </NavItem>
      <NavItem>
        <a href='#'>Contact Me</a>
      </NavItem>
      <NavItem>
        <button onClick={hideNav}>x</button>
      </NavItem>
    </NavItemsContainer>
  );
};

export default NavMobile;
