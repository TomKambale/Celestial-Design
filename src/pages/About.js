import { Container, Divider } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Container sx={{ mt: 4, mb: 4, minHeight: '100vh', }}>
    <div>
              <Divider orientation="horizontal">Welcome to Celestial Designs!</Divider>

        {/* Welcome to Celestial Designs! */}

    Founded in 1983 by our owner and director, Lamiyah Gitonga, Celestial Designs began as a dedicated interior design company. Over the years, we have grown and expanded our services to include construction, interior design, and landscaping, making us your go-to partner for all your design and building needs.
    
    <p>We specialize in a comprehensive range of services, starting with property acquisition for our diaspora clients, followed by bespoke house designs and plans. Our expertise extends to construction, where we build homes tailored to your specifications, and interior design, where we bring your vision to life with meticulous execution.</p>
    
    <p>Our landscaping services ensure that the exterior of your home is as beautifully designed as the interior, covering everything from car parking and driveways to fencing, walkways, and lush greenery.</p>
    
    <p>In addition to new builds, we offer renovation services to update and enhance existing spaces. Our consultation services provide expert advice on furniture layouts and supply, ensuring every detail of your home reflects your unique style.</p>
    
    <p>At Celestial Designs, we cater to a variety of design preferences, including Contemporary, Rustic, Mid Century, Classic, and more. We also offer house and site visits as needed to ensure every project meets our high standards of quality and excellence.</p>
    
    Discover the difference with Celestial Designs, where your dream home becomes a reality.</div>
    </Container>
  )
}

export default About