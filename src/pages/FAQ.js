// import * as React from 'react';
// import { Divider, Accordion, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#7C142B  '
//     },
//     secondary: {
//       main: '#FFE96E'
//     },
//   },
// });
// function FAQ() {
//   return (
//     <Container sx={{ mt: 4, mb: 4 }}>
//     <ThemeProvider theme={theme}>
//     <div>
//       <Divider orientation="horizontal">FAQs</Divider>
//       <Typography variant="h4" gutterBottom>
//         Possible FAQs for Celestial Designs
//       </Typography>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
//           <Typography color="primary">1. What services does Celestial Designs offer?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Celestial Designs offers a comprehensive range of services including interior design, construction,
//             landscaping, property acquisition for diaspora clients, renovations, and consultation services.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
//           <Typography color="secondary">2. How long has Celestial Designs been in business?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Celestial Designs was founded in 1983 by Lamiyah Gitonga and has been providing high-quality design
//             and construction services since then.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
//           <Typography color="primary">3. Can Celestial Designs help with property acquisition?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Yes, we assist our diaspora clients in purchasing properties. We provide a seamless process from
//             acquiring the property to designing and building your dream home.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header">
//           <Typography color="secondary">4. What styles of interior design does Celestial Designs specialize in?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             We specialize in various styles including Contemporary, Rustic, Mid Century, Classic, and more. We
//             tailor our designs to meet the unique preferences of each client.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5-content" id="panel5-header">
//           <Typography color="primary">5. Does Celestial Designs offer landscaping services?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Yes, our landscaping services include designing and implementing exterior spaces such as car parking
//             areas, driveways, fencing, walkways, and greenery.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6-content" id="panel6-header">
//           <Typography color="secondary">6. What is the typical process for starting a project with Celestial Designs?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Our process typically involves an initial consultation to understand your needs, followed by property
//             acquisition (if needed), bespoke house design and planning, construction, interior design execution,
//             and final landscaping.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7-content" id="panel7-header">
//           <Typography color="primary">7. Can Celestial Designs handle renovations?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Yes, we offer renovation services to update and enhance existing structures. Our team can provide
//             expert advice and execute the renovation to meet your desired outcomes.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel8-content" id="panel8-header">
//           <Typography color="secondary">8. How does Celestial Designs ensure quality in their projects?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             We adhere to high standards of quality and excellence in every project. Our experienced team works
//             meticulously on every detail, from design to execution, ensuring the final result meets our clients’
//             expectations.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel9-content" id="panel9-header">
//           <Typography color="primary">9. Are site visits included in your services?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Yes, we offer house and site visits as part of our services where necessary. This helps us to better
//             understand the space and provide accurate and personalized design solutions.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel10-content" id="panel10-header">
//           <Typography color="secondary">10. How can I get a quote for my project?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             You can get a quote by contacting us through our website, email, or phone. We will arrange an initial
//             consultation to discuss your project requirements and provide a detailed quote.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel11-content" id="panel11-header">
//           <Typography color="primary">11. What are the payment terms for your services?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Our payment terms vary depending on the scope and scale of the project. During the initial consultation,
//             we will discuss and agree upon a payment schedule that works for both parties.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel12-content" id="panel12-header">
//           <Typography color="secondary">12. Do you offer consultation services separately?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Yes, we offer standalone consultation services where we provide ideas on furniture layouts, design
//             styles, and other aspects of interior and exterior design.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel13-content" id="panel13-header">
//           <Typography color="primary">13. Can you work with my existing architect or builder?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Yes, we are happy to collaborate with your existing architect or builder to ensure your project meets
//             your vision and standards.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel14-content" id="panel14-header">
//           <Typography color="secondary">14. What areas do you serve?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             While we are based in Nairobi, we also serve clients from the diaspora and can manage projects in various
//             locations as per the client's needs.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel15-content" id="panel15-header">
//           <Typography color="primary">15. How can I see examples of your past projects?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             You can view our portfolio on our website, which showcases a selection of our completed projects across
//             different service categories. We also have a gallery of images and client testimonials.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//     </ThemeProvider>
//     </Container>
//   );
// }

// export default FAQ;

import * as React from 'react';
import { Divider, Accordion, AccordionSummary, AccordionDetails, Typography, Container, Paper, Grid, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7C142B',
    },
    secondary: {
      main: '#FFE96E',
    },
  },
});

const FAQ = () => {
  const faqs = [
    {
      question: 'What services does Celestial Designs offer?',
      answer: 'Celestial Designs offers a comprehensive range of services including interior design, construction, landscaping, property acquisition for diaspora clients, renovations, and consultation services.',
    },
    {
      question: 'How long has Celestial Designs been in business?',
      answer: 'Celestial Designs was founded in 1983 by Lamiyah Gitonga and has been providing high-quality design and construction services since then.',
    },
    {
      question: 'Can Celestial Designs help with property acquisition?',
      answer: 'Yes, we assist our diaspora clients in purchasing properties. We provide a seamless process from acquiring the property to designing and building your dream home.',
    },
    {
      question: 'What styles of interior design does Celestial Designs specialize in?',
      answer: 'We specialize in various styles including Contemporary, Rustic, Mid Century, Classic, and more. We tailor our designs to meet the unique preferences of each client.',
    },
    {
      question: 'Does Celestial Designs offer landscaping services?',
      answer: 'Yes, our landscaping services include designing and implementing exterior spaces such as car parking areas, driveways, fencing, walkways, and greenery.',
    },
    {
      question: 'What is the typical process for starting a project with Celestial Designs?',
      answer: 'Our process typically involves an initial consultation to understand your needs, followed by property acquisition (if needed), bespoke house design and planning, construction, interior design execution, and final landscaping.',
    },
    {
      question: 'Can Celestial Designs handle renovations?',
      answer: 'Yes, we offer renovation services to update and enhance existing structures. Our team can provide expert advice and execute the renovation to meet your desired outcomes.',
    },
    {
      question: 'How does Celestial Designs ensure quality in their projects?',
      answer: 'We adhere to high standards of quality and excellence in every project. Our experienced team works meticulously on every detail, from design to execution, ensuring the final result meets our clients’ expectations.',
    },
    {
      question: 'Are site visits included in your services?',
      answer: 'Yes, we offer house and site visits as part of our services where necessary. This helps us to better understand the space and provide accurate and personalized design solutions.',
    },
    {
      question: 'How can I get a quote for my project?',
      answer: 'You can get a quote by contacting us through our website, email, or phone. We will arrange an initial consultation to discuss your project requirements and provide a detailed quote.',
    },
    {
      question: 'What are the payment terms for your services?',
      answer: 'Our payment terms vary depending on the scope and scale of the project. During the initial consultation, we will discuss and agree upon a payment schedule that works for both parties.',
    },
    {
      question: 'Do you offer consultation services separately?',
      answer: 'Yes, we offer standalone consultation services where we provide ideas on furniture layouts, design styles, and other aspects of interior and exterior design.',
    },
    {
      question: 'Can you work with my existing architect or builder?',
      answer: 'Yes, we are happy to collaborate with your existing architect or builder to ensure your project meets your vision and standards.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'While we are based in Nairobi, we also serve clients from the diaspora and can manage projects in various locations as per the client\'s needs.',
    },
    {
      question: 'How can I see examples of your past projects?',
      answer: 'You can view our portfolio on our website, which showcases a selection of our completed projects across different service categories. We also have a gallery of images and client testimonials.',
    },
  ];

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <Box p={4}>
            <Divider orientation="horizontal">
              <Typography variant="h4" gutterBottom>
                FAQs
              </Typography>
            </Divider>
            <Grid container spacing={2}>
              {faqs.map((faq, index) => (
                <Grid item xs={12} key={index}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${index + 1}-content`}
                      id={`panel${index + 1}-header`}
                    >
                      <Typography color={index % 2 === 0 ? "primary" : "secondary"}>
                        {`${index + 1}. ${faq.question}`}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </ThemeProvider>
    </Container>
  );
}

export default FAQ;
