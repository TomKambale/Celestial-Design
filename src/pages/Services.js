// import { Divider } from '@mui/material'
// import React from 'react'

// function Services() {
//   return (
//     <div>
//               <Divider orientation="horizontal">Services</Divider>

//         Services;
//     Interior Design: Originally their primary service, involving bespoke house designs, furniture layouts, and execution of design plans.
//     Construction: Building houses from the ground up based on custom plans.
//     Landscaping: Designing and implementing exterior spaces including driveways, fencing, walkways, and greenery.
//     Property Acquisition: Purchasing property for clients, particularly those from the diaspora.
//     Renovations: Updating and refurbishing existing structures.
//     Consultation Services: Providing expert advice and ideas in various design styles such as Contemporary, Rustic, Mid Century, and Classic.
//     </div>
//   )
// }

// export default Services
import * as React from 'react';
import { Card, CardContent, Grid, Typography, Container, Divider, Box } from '@mui/material';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import LandscapeTwoToneIcon from '@mui/icons-material/LandscapeTwoTone';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

const services = [
  {
    title: 'Interior Design',
    description: 'We provide bespoke interior design services tailored to your style and preferences.'
    ,
    icon: <DesignServicesTwoToneIcon color="primary" />,
  },
  {
    title: 'Construction',
    description: 'Our construction services ensure high-quality builds from start to finish.'
    ,
    icon: <EngineeringTwoToneIcon color="primary" />,
  },
  {
    title: 'Landscaping',
    description: 'Our landscaping services create beautiful, functional outdoor spaces.'
    ,
    icon: <LandscapeTwoToneIcon color="primary" />,
  },
  {
    title: 'Property Acquisition',
    description: 'We assist our diaspora clients in acquiring properties seamlessly.',
    icon: <AddBusinessTwoToneIcon color="primary" />,
  },
  {
    title: 'Renovations',
    description: 'We offer renovation services to update and enhance existing structures.',
    icon: <HandymanTwoToneIcon color="primary" />,
  },
  {
    title: 'Consultation',
    description: 'Our consultation services provide expert advice on various aspects of design and construction.',
    icon: <DescriptionTwoToneIcon color="primary" />,
  }
];

function Services() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      {/* <Typography variant="h4" gutterBottom>
        Our Services
      </Typography> */}
      <Divider orientation="horizontal">Services</Divider>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                  {service.icon}
                  <Typography variant="h6" gutterBottom sx={{ ml: 1 }}>
                    {service.title}
                  </Typography>
                </Box>
                {/* <Typography variant="h5" component="div" gutterBottom>
                  {service.title}
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;
