import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  IconButton, 
  Fade,
  Chip
} from '@mui/material';
import { ChevronLeft, ChevronRight, LocationOn } from '@mui/icons-material';

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const experiences = [
    {
      title: "Software Developer",
      company: "Loblaw Companies Limited",
      period: "Sep 2024 - Dec 2024",
      location: "Toronto, ON",
      details: [
        "Developed ML and generative AI solutions",
        "Implemented user-centric frontend applications"
      ],
      technologies: ["React", "TypeScript", "FastAPI", "OpenAI"]
    },
    // Add other experiences...
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <Box sx={{ position: 'relative', py: 8 }}>
      <IconButton 
        sx={{ position: 'absolute', left: 0, top: '50%' }}
        onClick={handlePrev}
      >
        <ChevronLeft />
      </IconButton>
      <Fade in={true} timeout={500}>
        <Card sx={{ mx: 'auto', maxWidth: 600 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {experiences[activeIndex].title}
            </Typography>
            <Typography color="primary" gutterBottom>
              {experiences[activeIndex].company}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {experiences[activeIndex].period}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOn fontSize="small" />
              <Typography variant="subtitle2" color="text.secondary">
                {experiences[activeIndex].location}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              {experiences[activeIndex].details.map((detail, idx) => (
                <Typography key={idx} paragraph>
                  • {detail}
                </Typography>
              ))}
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {experiences[activeIndex].technologies.map((tech) => (
                <Chip key={tech} label={tech} size="small" />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Fade>
      <IconButton 
        sx={{ position: 'absolute', right: 0, top: '50%' }}
        onClick={handleNext}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};