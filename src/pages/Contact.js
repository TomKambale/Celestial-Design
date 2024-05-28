import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { List, ListItem } from '@mui/material';

function Contact() {
  return (
    <div>
        <List>
            <ListItem>
    <PhoneIcon/>  : 0793988988
    </ListItem>
    <ListItem>
    <MailIcon/> : <ListItem>celestialdesignsafrica@gmail.com</ListItem>
    info@celestialdesigns.co.ke

             </ListItem>
     </List>        
             </div>
  )
}

export default Contact