import MiembrosProvider from '../context/MiembrosContext';
import { MonigoteControllers } from './monigote/MonigoteControllers';
import { GetMiembros } from './monigote/GetMiembros';
import { Container, Grid, Box, CssBaseline, ThemeOptions } from '@mui/material';
import NavBar from './ui/NavBar';
import { Footer } from './ui/Footer';
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";



export const HomeScreen = () => {

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

 // The light theme is used by default
 const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);


  return (
    <MiembrosProvider>
      <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Box sx={{ display:'flex', flexDirection:'column', height:'100vh'}}>
        <NavBar tema={ isDarkTheme } setTema={ setIsDarkTheme } /> 
       
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
      </ThemeProvider>
    </MiembrosProvider>
  )
}
