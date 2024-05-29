// import React from "react";
// import PhoneIcon from "@mui/icons-material/Phone";
// import MailIcon from "@mui/icons-material/Mail";
// import { Box, Container, List, ListItem, Typography } from "@mui/material";
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
//     <Container sx={{ mt: 4, mb: 4 }}>
//       <div>
//       <Box>
//         <Typography>
//           Your Garden Needs a Bit of Love?{' '}
//           <Typography component="span" color="primary">
//             Contact Us Now!
//           </Typography>
//         </Typography>
//       </Box> 
//            <List>
//       <ListItem>
//         <PhoneIcon /> : 0793988988
//       </ListItem>
//       <ListItem>
//         <MailIcon /> :
//         <Box ml={2}>
//           <Typography>celestialdesignsafrica@gmail.com</Typography>
//           <Typography>info@celestialdesigns.co.ke</Typography>
//         </Box>
//       </ListItem>
//     </List>
//       </div>
//     </Container>
//     </ThemeProvider>
//   );
// }

// export default Contact;

import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Container, List, ListItem, Typography } from "@mui/material";
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
      <Container sx={{ mt: 4, mb: 4 }}>
        <Box>
          <Typography>
            Your Garden Needs a Bit of Love?{' '}
            <Typography component="span" color="primary">
              Contact Us Now!
            </Typography>
          </Typography>
        </Box>
        <List>
          <ListItem>
            <PhoneIcon /> : 0793988988
          </ListItem>
          <ListItem>
            <MailIcon /> :
            <Box ml={2}>
              <Typography>celestialdesignsafrica@gmail.com</Typography>
              <Typography>info@celestialdesigns.co.ke</Typography>
            </Box>
          </ListItem>
        </List>
      </Container>
    </ThemeProvider>
  );
}

export default Contact;
