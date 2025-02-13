import React from 'react';
import { Box, Card, CardContent, Typography, Grid, LinearProgress } from '@mui/material';

export const Skills = () => {
  const skillCategories = {
    "Languages": [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 85 }
    ],
    "Web Technologies": [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 90 }
    ],
    "Tools & Platforms": [
      { name: "Google Cloud Platform", level: 75 },
      { name: "Git", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 }
    ]
  };

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom align="center">
        Skills & Technologies
      </Typography>
      <Grid container spacing={4}>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <Grid item xs={12} md={4} key={category}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {category}
                </Typography>
                {skills.map((skill) => (
                  <Box key={skill.name} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">{skill.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level}
                      sx={{ height: 6, borderRadius: 3 }}
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};