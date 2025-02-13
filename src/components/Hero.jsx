import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Mail, GitHub, LinkedIn } from '@mui/icons-material';

export const Hero = ({ onContactClick }) => (
  <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
    <Box>
      <Typography variant="h2" gutterBottom>
        Full Stack Developer & AI Enthusiast
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Transforming ideas into elegant, scalable solutions
      </Typography>
      <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
        <Button variant="contained" startIcon={<Mail />} onClick={onContactClick}>
          Contact Me
        </Button>
        <Button 
          variant="outlined" 
          startIcon={<GitHub />}
          href="https://github.com/Haniish/"
          target="_blank"
        >
          GitHub
        </Button>
        <Button 
          variant="outlined" 
          startIcon={<LinkedIn />}
          href="https://www.linkedin.com/in/hanish-kaprani/"
          target="_blank"
        >
          LinkedIn
        </Button>
      </Box>
    </Box>
  </Container>
);
