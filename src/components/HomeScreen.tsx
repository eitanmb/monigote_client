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
        <NavBar />
        <Container sx={ { marginY:15 }}>
          <Grid container spacing={1}>
            <MonigoteControllers />
            <GetMiembros />
          </Grid>
        </Container>
        <Footer />
    </MiembrosProvider>
      
  )
}
