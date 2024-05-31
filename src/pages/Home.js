// import * as React from 'react';
// import { Container, Grid, Paper, Box, Typography } from '@mui/material';
// import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
// import TaskTwoToneIcon from '@mui/icons-material/TaskTwoTone';
// import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
// import image from "../assets/compound.jpg";


// const content = [
//   {
//     title: 'Experience',
//     description:
//       'With over 40 years of experience, Celestial Designs brings a wealth of expertise to every project, ensuring exceptional results.',
//     icon: <AccessTimeTwoToneIcon color="primary" />,
//   },
//   {
//     title: 'Quality',
//     description:
//       'We are committed to delivering the highest quality in design, construction, and customer service, exceeding expectations at every step.',
//     icon: <TaskTwoToneIcon color="secondary" />,
//   },
//   {
//     title: 'Personalized Service',
//     description:
//       'At Celestial Designs, we prioritize personalized service, tailoring our approach to meet the unique needs and preferences of each client.',
//     icon: <ManageAccountsTwoToneIcon color="primary" />,
//   },
// ];

// function Home() {
//   return (
//     <Box
//     sx={{
//       backgroundImage:`url(${image})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       py: 8, // Adjust padding as needed
//     }}
//   >
//     <Container sx={{ mt: 4, mb: 4 }}>
//       <Grid container spacing={2}>
//         {content.map((item, index) => (
//           <Grid item xs={12} md={4} key={index}>
//             <Paper elevation={3}>
//               <Box p={2}>
//                 <Box display="flex" alignItems="center" mb={2}>
//                   {item.icon}
//                   <Typography variant="h6" gutterBottom sx={{ ml: 1 }}>
//                     {item.title}
//                   </Typography>
//                 </Box>
//                 <Typography variant="body1">
//                   {item.description}
//                 </Typography>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//     </Box>
//   );
// }

// export default Home;

import React from 'react';
import { Container, Grid, Paper, Box, Typography, Button, Divider, ImageList, ImageListItem } from '@mui/material';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import TaskTwoToneIcon from '@mui/icons-material/TaskTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import image from '../assets/compound.jpg';

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

function Hero() {
  return (
    <Box
      sx={{
        // backgroundImage: `url(${image})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // py: 8, // Adjust padding as needed
        // color: '#fff',
        // textAlign: 'center',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Ensure it covers the full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        py: 8,
      }}
    >
      <Container sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Celestial Designs
        </Typography>
        <Typography variant="h5" paragraph>
          Transforming Spaces, Creating Experiences
        </Typography>
        <Button variant="contained" color="primary" href="#contact">
          Contact Us Now!
        </Button>
      </Container>
      <Content />

    </Box>
  );
}

function Content() {
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
                <Typography variant="body1">{item.description}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
  ]

  function WorkingHours() {
    return (
      <Container sx={{ mt: 4, mb: 4, minHeight: '100vh' }}>
      <div style= {{ width: '100%'}}>
        {/* <Divider orientation="horizontal">Projects</Divider> */}
        <ImageList sx={{ width: '100%', height: 'auto', overflow: 'hidden' }} variant="quilted" cols={4} rowHeight={121}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      </Container>
    );
}

function Home() {
  return (
    <div>
      <Hero />
      {/* <Content /> */}
      <WorkingHours />
    </div>
  );
}

export default Home;
