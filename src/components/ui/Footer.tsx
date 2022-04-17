import React from 'react'
import { Box, Container, Grid, Link } from '@mui/material';

export const Footer = () => {
  return (
    <footer>
        <Box sx={{ bgcolor:'#333333'}}>
        <Container>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', marginBottom:"20px"}}>
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
        </Box>
    </footer>
  )
}
