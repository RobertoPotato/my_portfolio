import React from 'react';
import styled from 'styled-components';
import profilePic from './images/man.svg';

const StyledHero = styled.div`
  margin-top: 4rem;
  padding: 4rem 4rem 0 4rem;

  p {
    margin: 0 3rem;
    text-align: left;
  }
`;

const Hero = () => {
  return (
    <div>
      <StyledHero>
        <h1>Hello, I'm Rob</h1>
        <img className='profile-pic' src={profilePic} alt='robert-wabuti-img' />
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
