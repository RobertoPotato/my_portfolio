import React from 'react';

const SkillDetails = ({ image, title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SkillDetails;
