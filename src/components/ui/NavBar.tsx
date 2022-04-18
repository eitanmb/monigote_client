import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, FormGroup, FormControlLabel } from "@mui/material";


export default function NavBar( props: any ) {
  
  const isDarkTheme = props.tema;
  const setIsDarkTheme = props.setTema;
  // const { isDarkTheme, setIsDarkTheme } = props.tema;

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    console.log('change-isDark',isDarkTheme);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            EL MONIGOTE
          </Typography>
         
          <FormGroup>
            <FormControlLabel
              control={
                <Switch checked={isDarkTheme} onChange={changeTheme} />
              }
              label="Dark Theme"
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}