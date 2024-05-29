import * as React from 'react';
import { Container, Grid, Paper, Box, Typography } from '@mui/material';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import TaskTwoToneIcon from '@mui/icons-material/TaskTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';

const content = [
  {
    title: 'Experience',
    description:
      'With over 40 years of experience, Celestial Designs brings a wealth of expertise to every project, ensuring exceptional results.',
    icon: <AccessTimeTwoToneIcon color="primary" />,
  },
  {
    title: 'Quality',
    description:
      'We are committed to delivering the highest quality in design, construction, and customer service, exceeding expectations at every step.',
    icon: <TaskTwoToneIcon color="secondary" />,
  },
  {
    title: 'Personalized Service',
    description:
      'At Celestial Designs, we prioritize personalized service, tailoring our approach to meet the unique needs and preferences of each client.',
    icon: <ManageAccountsTwoToneIcon color="primary" />,
  },
];

function Home() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        {content.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3}>
              <Box p={2}>
                <Box display="flex" alignItems="center" mb={2}>
                  {item.icon}
                  <Typography variant="h6" gutterBottom sx={{ ml: 1 }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body1">
                  {item.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
