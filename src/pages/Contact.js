// // import React from "react";
// // import PhoneIcon from "@mui/icons-material/Phone";
// // import MailIcon from "@mui/icons-material/Mail";
// // import { Box, Container, List, ListItem, Typography } from "@mui/material";
// // import { ThemeProvider, createTheme } from '@mui/material/styles';

// // const theme = createTheme({
// //   palette: {
// //     primary: {
// //       main: '#7C142B',
// //     },
// //     secondary: {
// //       main: '#FFE96E',
// //     },
// //   },
// // });r

// // function Contact() {
// //   return (
// //     <ThemeProvider theme={theme}>
// //     <Container sx={{ mt: 4, mb: 4 }}>
// //       <div>
// //       <Box>
// //         <Typography>
// //           Your Garden Needs a Bit of Love?{' '}
// //           <Typography component="span" color="primary">
// //             Contact Us Now!
// //           </Typography>
// //         </Typography>
// //       </Box> 
// //            <List>
// //       <ListItem>
// //         <PhoneIcon /> : 0793988988
// //       </ListItem>
// //       <ListItem>
// //         <MailIcon /> :
// //         <Box ml={2}>
// //           <Typography>celestialdesignsafrica@gmail.com</Typography>
// //           <Typography>info@celestialdesigns.co.ke</Typography>
// //         </Box>
// //       </ListItem>
// //     </List>
// //       </div>
// //     </Container>
// //     </ThemeProvider>
// //   );
// // }

// // export default Contact;

// import React from "react";
// import PhoneIcon from "@mui/icons-material/Phone";
// import MailIcon from "@mui/icons-material/Mail";
// import { Box, Container, Divider, List, ListItem, Typography } from "@mui/material";
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#7C142B',
//     },
//     secondary: {
//       main: '#FFE96E',
//     },
//   },
// });

// function Contact() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container sx={{ mt: 4, mb: 4 }}>
//         <Box>
//         <Divider orientation="horizontal">
//               <Typography  gutterBottom>
//                 Contact Us
//               </Typography>
//             </Divider>
//           <Typography>
//             Your Garden Needs a Bit of Love?{' '}
//             <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true" >            <Typography component="span" color="primary">
//               Contact Us Now!
//             </Typography>
//             </a>
//             {/* <Typography component="span" color="primary">
//               Contact Us Now!
//             </Typography> */}
//           </Typography>
//         </Box>
//         <List>
//           <ListItem>
//             <PhoneIcon /> :  0793988988
//           </ListItem>
//           <ListItem>
//             <MailIcon /> :
//             <Box ml={2}>
//               <Typography>celestialdesignsafrica@gmail.com</Typography>
//               <Typography>info@celestialdesigns.co.ke</Typography>
//             </Box>
//           </ListItem>
//         </List>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default Contact;

import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Container, Divider, List, ListItem, Typography, Grid } from "@mui/material";
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

function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 4, mb: 4, minHeight: '100vh', }}>
        <Box>
          <Divider orientation="horizontal">
            <Typography gutterBottom>
              Contact Us
            </Typography>
          </Divider>
          <Typography>
            Your Garden Needs a Bit of Love?{' '}
            {/* <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true"> */}
              <Typography component="span" color="primary" a href="#" data-bs-toggle="button">
                Contact Us Now!
              </Typography>
            {/* </a> */}
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Box>
            <List>
            <Typography variant="h6" gutterBottom>
                Contacts
              </Typography>
              <ListItem>
                <PhoneIcon /> :  0793988988
              </ListItem>
              <ListItem>
                <MailIcon /> :
                <Box ml={2}>
                  <Typography>celestialdesignsafrica@gmail.com</Typography>
                  <Typography>info@celestialdesigns.co.ke</Typography>
                </Box>
              </ListItem>
            </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Working Hours
              </Typography>
              <Typography>
                Monday-Friday: 8.00am-5.00pm
              </Typography>
              <Typography>
                Saturday: 9.00am-3.00pm
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Contact;
