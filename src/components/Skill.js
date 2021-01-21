import React from 'react';
import styled from 'styled-components';
import {
  secondaryColor,
  accentColorLight,
  accentColorLighter,
} from './constants';

const StyledSkillCard = styled.div`
  border-radius: 0.5rem;
  background-color: ${accentColorLight};
  padding: 0.5rem;
  min-width: 70%;
  transition: all 0.4s;

  &:hover {
    background-color: ${accentColorLighter};
  }

  p {
    text-align: left;
  }
`;

const SkillImage = styled.img`
  width: 80%;
`;

const Title = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: ${secondaryColor};
`;

const Button = styled.button`
  border: none;
  background-color: ${accentColorLight};
  border-radius: 0.5rem;
  cursor: pointer;

  &:active {
    border: none;
  }
`;

const Skill = ({ image, title, text, onClick }) => {
  return (
    <div styles='width: 100%; height: 100%;'>
      <Button onClick={onClick}>
        <StyledSkillCard>
          <SkillImage src={image} />
          <Title>{title}</Title>
          <p>{text}</p>
        </StyledSkillCard>
      </Button>
    </div>
  );
};

export default Skill;
