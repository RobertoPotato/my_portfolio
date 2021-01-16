import React from 'react';
import styled from 'styled-components';

const StyledProjectCard = styled.div`
  border-radius: 0.5rem;
  background-color: #1f325c;
  padding: 0.5rem;
  min-width: 70%;
  transition: all 0.4s;

  &:hover {
    background-color: #29437a;
  }
`;

const ProjectImage = styled.img`
  width: 80%;
`;

const Title = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: #f64c72;
`;

const Button = styled.button`
  border: none;
  background-color: #1f325c;
  border-radius: 0.5rem;
  cursor: pointer;

  &:active {
    border: none;
  }
`;

const Project = ({ image, title, text, onClick }) => {
  return (
    <div styles='width: 100%; height: 100%;'>
      <Button onClick={onClick}>
        <StyledProjectCard>
          <ProjectImage src={image} />
          <h3>{title}</h3>
          <p>{text}</p>
        </StyledProjectCard>
      </Button>
    </div>
  );
};

export default Project;
