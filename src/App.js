import Nav from './components/Nav';
import Hero from './Hero';
import SkillsList from './components/SkillsList';
import { ModalProvider } from 'styled-react-modal';

function App() {
  return (
    <div className='App'>
      <ModalProvider>
        <Nav />
        <Hero />
        <SkillsList />
      </ModalProvider>
    </div>
  );
}

export default App;
