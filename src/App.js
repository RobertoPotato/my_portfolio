import Nav from './components/Nav';
import Hero from './Hero';
import ProjectsList from './components/ProjectsList';
import { ModalProvider } from 'styled-react-modal';

function App() {
  return (
    <div className='App'>
      <ModalProvider>
        <Nav />
        <Hero />
        <ProjectsList />
      </ModalProvider>
    </div>
  );
}

export default App;
