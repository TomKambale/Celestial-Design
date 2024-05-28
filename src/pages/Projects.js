import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'



function Projects() {
  return (
    <div>Projects
              <Divider orientation="horizontal">Projects</Divider>

<Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={8}>

      <Typography>Filled</Typography>      </Grid>
      <Grid xs={4}>
      <Typography>Filled</Typography>      </Grid>
      <Grid xs={4}>
      <Typography>Filled</Typography>      </Grid>
      <Grid xs={8}>
      <Typography>Filled</Typography>      </Grid>
    </Grid>

<Typography>Filled</Typography>
    </div>
  )
}

export default Projects