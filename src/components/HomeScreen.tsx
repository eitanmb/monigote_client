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
        <Container sx={ { border:'1px solid black', height:'80vh', marginY:'10px' }}>
          <Grid container spacing={0} sx={{border:'1px solid black', height:'80vh' }}>
            <Grid item xs={4} sx={{ display:'flex', alignItems:'center'}}>
              <MonigoteControllers />
            </Grid>
            <Grid item xs={8} sx={{border:'1px solid black', display:'flex', alignItems:'center'}}>
              <GetMiembros />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </MiembrosProvider>
  )
}
