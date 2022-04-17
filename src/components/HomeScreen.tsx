import React from 'react';
import MiembrosProvider from '../context/MiembrosContext';
import { MonigoteControllers } from './monigote/MonigoteControllers';
import { GetMiembros } from './monigote/GetMiembros';
import { Container, Grid, Box } from '@mui/material';
import NavBar from './ui/NavBar';
import { Footer } from './ui/Footer';

export const HomeScreen = () => {

  return (
    <MiembrosProvider>
      <Box sx={{ display:'flex', flexDirection:'column'}}>
        <NavBar />
        <Container sx={ { marginY:15 }}>
          <Grid container spacing={1} sx={{border:'1px solid black'}}>
            <Grid item xs={4}>
              <MonigoteControllers />
            </Grid>
            <Grid item xs={8} sx={{border:'1px solid black'}}>
              <GetMiembros />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </MiembrosProvider>
  )
}
