import React from 'react';
import styled from 'styled-components';
import { mediumDevices } from '../breakpoints';

const NavItemsContainer = styled.ul`
  transition: 0.4s all;

  @media (max-width: ${mediumDevices}px) {
  }
`;

const NavItem = styled.li`
  display: block;
  margin: 22px;
`;

const NavMobile = () => {
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
    </NavItemsContainer>
  );
};

export default NavMobile;
