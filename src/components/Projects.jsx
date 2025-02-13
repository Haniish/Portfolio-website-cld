import React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Grid, Button, Chip } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

export const Projects = () => {
  const projects = [
    {
      title: "Online Movie and TV Show Platform",
      description: "Advanced web application for trading movies and TV shows, with IMDb API integration",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/yourusername/movie-platform",
      demo: "https://movie-platform.demo.com"
    },
    {
      title: "Online Chatting Forum",
      description: "Real-time communication platform supporting 100+ active users",
      technologies: ["PHP", "MySQL", "WebSocket", "Bootstrap"],
      github: "https://github.com/yourusername/chat-forum",
      demo: "https://chat-forum.demo.com"
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom align="center">
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.title}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography paragraph color="text.secondary">
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip key={tech} label={tech} size="small" />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button startIcon={<GitHub />} href={project.github} target="_blank">
                  Code
                </Button>
                <Button startIcon={<Launch />} href={project.demo} target="_blank">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};