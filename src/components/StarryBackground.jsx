import React from 'react';
import { Box, keyframes } from '@mui/material';

const twinkle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const StarryBackground = () => {
  // Generate random star positions
  const stars = Array.from({ length: 50 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
  }));

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundColor: '#0a1929',
        overflow: 'hidden',
      }}
    >
      {stars.map((star, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            left: star.left,
            top: star.top,
            animation: `${twinkle} 3s infinite`,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </Box>
  );
};