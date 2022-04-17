import React from 'react'
import { Box, Container, Grid, Link, Toolbar } from '@mui/material';

export const Footer = () => {
  return (
    <footer>
        <Toolbar sx={ { bgcolor:'red', position:'static', color:'#f4f4f4', height:'12vh' } }>
        <Container>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <Link href='/'>
                        Inicio
                    </Link>
                    <Link href='/'>
                        Contáctenos
                    </Link>
                    <Link href='/'>
                        Acerca del Monigote
                    </Link>

                </Box>
            </Grid>
        </Grid>
        </Container>
        </Toolbar>
    </footer>
  )
}
