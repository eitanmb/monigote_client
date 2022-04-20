import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, FormGroup, FormControlLabel } from "@mui/material";
import { INavBarProps } from '../../types/monigote.d.'


export default function NavBar( props: INavBarProps ) {
  
  const isDarkTheme = props.tema;
  const setIsDarkTheme = props.setTema;

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    console.log('change-isDark',isDarkTheme);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Monigote
          </Typography>

            <FormGroup>
              <FormControlLabel
                control={
                  <Switch checked={isDarkTheme} onChange={changeTheme} />
                }
                label="Modo Oscuro"
              />
            </FormGroup>
          </Toolbar>
        </AppBar>
      </Box>
  );
}
