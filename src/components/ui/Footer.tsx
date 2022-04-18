import { Copyright } from '@mui/icons-material';
import { Box, Container, Grid, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <footer>
        <Toolbar sx={ { bgcolor:'text.secondary', position:'static', color:'#f4f4f4', height:'7vh' } }>
        <Container>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
                    <Copyright />
                    <Typography color='text.primary' variant="caption" component="div" sx={{ marginLeft:1}}>
                        Todos los derechos reservados para el Monigote.com 2022
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        </Container>
        </Toolbar>
    </footer>
  )
}
