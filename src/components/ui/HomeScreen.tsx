import { Container, Grid, Box, CssBaseline, ThemeOptions } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Typography from '@mui/material/Typography';

import { Footer } from './Footer';
import { GetMiembros } from '../monigote/GetMiembros';
import { MonigoteControllers } from '../monigote/MonigoteControllers';
import MiembrosProvider from '../../context/MiembrosContext';
import NavBar from './NavBar';

const light:ThemeOptions = {
  palette: {
    mode: "light",
  },
};

const dark:ThemeOptions = {
  palette: {
    mode: "dark",
  },
};

export const HomeScreen = () => {

 const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);


  return (
    <MiembrosProvider>
      <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Box sx={{ display:'flex', flexDirection:'column', height:'100vh'}}>
        <NavBar tema={ isDarkTheme } setTema={ setIsDarkTheme } /> 
        <Container>
          <Grid container spacing={0} sx={{ height:'85vh', display:'flex',flexDirection:'row',  alignItems:'center'}}>  
            <Grid item xs={4} sx={{ display:'flex',flexDirection:'column', alignItems:'start'}}>
              <Box sx={{ width: 500 }}>
                <Typography color='text.secondary' variant="h5" component="div" align='left' sx={{ marginBottom:2}}>
                        ¿Qué miembro quitarás al Monigote?
                </Typography>
                <MonigoteControllers />
              </Box>
            </Grid>
            <Grid item xs={8} sx={{ display:'flex', alignItems:'center' }}>
              <GetMiembros />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
      </ThemeProvider>
    </MiembrosProvider>
  )
}
