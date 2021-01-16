import React from 'react';
import Project from './Project';
import eat from './images/eating.svg';
import sleep from './images/sleep.svg';
import code from './images/code.svg';
import repeat from './images/repeat.svg';
import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  padding: 1rem;
`;

const ProjectsList = () => {
  return (
    <div className='proj'>
      <h2>My Skills Responsive grid</h2>
      <Grid>
        <Project
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={eat}
          title='Eating'
        />
        <Project
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={sleep}
          title='Sleeping'
        />
        <Project
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={code}
          title='Coding'
        />
        <Project
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={repeat}
          title='Repeating'
        />
        <Project
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={eat}
          title='Eating'
        />
        <Project
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={sleep}
          title='Sleeping'
        />
        <Project
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={code}
          title='Coding'
        />
        <Project
          text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
          image={repeat}
          title='Repeating'
        />
      </Grid>
    </div>
  );
};

export default ProjectsList;
