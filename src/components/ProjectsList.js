import React, { useState } from 'react';
import Project from './Project';
import eat from '../images/eating.svg';
import sleep from '../images/sleep.svg';
import code from '../images/code.svg';
import repeat from '../images/repeat.svg';
import styled from 'styled-components';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  width: 40rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  padding: 1rem;
`;

const ProjectsList = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <div className='proj'>
      <h2>My Skills Responsive grid</h2>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <span>I am a modal!</span>
        <button onClick={toggleModal}>Close me</button>
      </StyledModal>
      <Grid>
        <Project
          onClick={toggleModal}
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={eat}
          title='Eating'
        />
        <Project
          onClick={toggleModal}
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={sleep}
          title='Sleeping'
        />
        <Project
          onClick={toggleModal}
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={code}
          title='Coding'
        />
        <Project
          onClick={toggleModal}
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={repeat}
          title='Repeating'
        />
      </Grid>
    </div>
  );
};

export default ProjectsList;
