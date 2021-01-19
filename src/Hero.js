import React from 'react';
import styled from 'styled-components';
import profilePic from './images/man.svg';
import { mediumDevices, xSmallDevices } from './breakpoints';

const StyledHero = styled.div`
  margin-top: 4rem;
  padding: 4rem 4rem 0 4rem;

  @media (max-width: ${mediumDevices}px) {
    padding: 3rem 3rem 0 3rem;
  }

  @media (max-width: ${xSmallDevices}px) {
    padding: 2rem 2rem 0 2rem;
  }

  p {
    margin: 0 3rem;
    text-align: left;

    @media (max-width: ${mediumDevices}px) {
      margin: 0 0.5rem;
    }

    @media (max-width: ${xSmallDevices}px) {
      margin: 0 0.1rem;
    }
  }
`;

const StyledProfileImage = styled.img`
  border-radius: 100%;
  width: 40%;

  @media (max-width: ${mediumDevices}px) {
    width: 60%;
  }

  @media (max-width: ${xSmallDevices}px) {
    width: 80%;
  }
`;

const Hero = () => {
  return (
    <div>
      <StyledHero>
        <h1>Hello, I'm Rob</h1>
        <StyledProfileImage
          className='profile-pic'
          src={profilePic}
          alt='robert-wabuti-img'
        />
        <h2>A Mobile and Web developer</h2>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
        </p>
      </StyledHero>
    </div>
  );
};

export default Hero;
