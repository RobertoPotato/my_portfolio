import React, { useState } from 'react';
import Skill from './Skill';
import eat from '../images/eating.svg';
import sleep from '../images/sleep.svg';
import code from '../images/code.svg';
import repeat from '../images/repeat.svg';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import SkillDetails from './SkillDetails';

const StyledModal = Modal.styled`
  width: 40%;
  min-width: 40rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #19294b;
  border-radius: 5px;

  button{
    position: relative;
    left: 100px;
    bottom: 140px;
    background-color: #1f325c;
    border: none;
    padding: 0.5rem;
    color: white;
    border-radius: 5px;
    transition: all 0.4s;
  }

  button:hover{
    background-color: #29437a;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  padding: 0 6rem 0;
`;

export const StyledSectionTitle = styled.h2`
  margin: 3rem 4rem 1rem;
`;

const SkillsList = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <StyledSectionTitle>My Skills Responsive grid</StyledSectionTitle>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <SkillDetails
          title='Detail Modal'
          description='This shows the details'
        />
        <button onClick={toggleModal}>Close</button>
      </StyledModal>
      <Grid>
        <Skill
          onClick={toggleModal}
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={eat}
          title='Eating'
        />
        <Skill
          onClick={toggleModal}
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={sleep}
          title='Sleeping'
        />
        <Skill
          onClick={toggleModal}
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={code}
          title='Coding'
        />
        <Skill
          onClick={toggleModal}
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={repeat}
          title='Repeating'
        />
      </Grid>
    </div>
  );
};

export default SkillsList;
