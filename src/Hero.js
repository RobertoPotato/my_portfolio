import React from 'react';
import profilePic from './images/man.svg';

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <h1>Hello, I'm Rob</h1>
        <img className='profile-pic' src={profilePic} alt='robert-wabuti-img' />
        <h2>A Mobile and Web developer</h2>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
        </p>
      </div>
    </div>
  );
};

export default Hero;
