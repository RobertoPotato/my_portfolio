import React, { useState } from 'react';
import Nav from './components/Nav';
import NavMobile from './components/NavMobile';
import Hero from './Hero';
import SkillsList from './components/SkillsList';
import { ModalProvider } from 'styled-react-modal';
import GlobalStyle from './GlobalStyles';

function App() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className='App'>
      <GlobalStyle />
      <ModalProvider>
        {/*    */}
        {showMobileNav ? (
          <NavMobile hideNav={() => setShowMobileNav(!showMobileNav)} />
        ) : (
          <Nav showNav={() => setShowMobileNav(!showMobileNav)} />
        )}
        <Hero />
        <SkillsList />
      </ModalProvider>
    </div>
  );
}

export default App;
