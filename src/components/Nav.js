import React from 'react';
import styled from 'styled-components';
import logo from '../images/crab.svg';
import { mediumDevices } from '../breakpoints';

const NavBar = styled.div`
  position: relative;
  padding: 20px;
`;

const Logo = styled.img`
  float: left;
  width: 60px;
  height: 60px;
`;

const HamburgerMenu = styled.div`
  float: right;
  width: 60px;
  height: 60px;
  @media (min-width: ${mediumDevices}px) {
    display: none;
  }
`;

const HamburgerSlice = styled.div`
  width: 2.5rem;
  height: 5px;
  background-color: #f64c72;
  margin: 0.7rem;
`;

const NavItemsContainer = styled.ul`
  position: absolute;
  top: 40px;
  right: 40px;
  transition: 0.4s all;

  @media (max-width: ${mediumDevices}px) {
    display: none;
  }
`;

const NavItem = styled.li`
  display: inline;
  margin: 22px;
`;

const Nav = ({ showNav }) => {
  return (
    <div>
      <NavBar>
        <Logo id='logo' src={logo} alt='logo-img' />
        <button onClick={showNav}>
          <HamburgerMenu>
            <HamburgerSlice />
            <HamburgerSlice />
            <HamburgerSlice />
          </HamburgerMenu>
        </button>
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
      </NavBar>
    </div>
  );
};

export default Nav;
