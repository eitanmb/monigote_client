import MiembrosProvider from '../context/MiembrosContext';
import { MonigoteControllers } from './monigote/MonigoteControllers';
import { GetMiembros } from './monigote/GetMiembros';
import { Container, Grid, Box } from '@mui/material';
import NavBar from './ui/NavBar';
import { Footer } from './ui/Footer';

export const HomeScreen = () => {

  return (
    <MiembrosProvider>
      <Box sx={{ display:'flex', flexDirection:'column', height:'100vh'}}>
        <NavBar />
        <Container sx={ { marginY:'7px' }}>
          <Grid container spacing={0} sx={{ height:'80vh' }}>
            <Grid item xs={4} sx={{ display:'flex', alignItems:'center'}}>
              <MonigoteControllers />
            </Grid>
            <Grid item xs={8} sx={{ display:'flex', alignItems:'center' }}>
              <GetMiembros />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </MiembrosProvider>
  )
}
