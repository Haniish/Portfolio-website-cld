import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { StarryBackground } from './components/StarryBackground';
import { theme } from './components/theme';

function App() {
  const contactRef = React.useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StarryBackground />
      <Box sx={{ position: 'relative' }}>
        <Hero onContactClick={scrollToContact} />
        <Experience />
        <Skills />
        <Projects />
        <Box ref={contactRef}>
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;