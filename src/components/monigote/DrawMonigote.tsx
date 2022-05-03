import { Grid, Box } from '@mui/material';
import { IMiembrosEstilos, IDrawMonigoteProps } from '../../types/monigote.d.';


export const DrawMonigote = (props:IDrawMonigoteProps) => {
  
  const estilos: IMiembrosEstilos = {
    body: undefined,
    head: undefined,
    lArm: undefined,
    rArm: undefined,
    lLeg: undefined,
    rLeg: undefined
  }
  
  const miembros = props.valores;

  miembros.forEach( miembro => {
    estilos[miembro.nombre] = miembro.estilos;
  });

  return (
      <Grid container spacing={1} >
        
        <Grid item xs={12} >
        <Box sx={ { display:"flex", justifyContent:"center"} }>
            <div style={ estilos.head } className="headBox"></div>
        </Box>
        </Grid>

        <Grid item xs={5}>
        <Box sx={ 
          { display:"flex", justifyContent:"end"}
        }>
          <div style={ estilos.lArm } className="armBox mr"></div>
          </Box>
        </Grid>

        <Grid item xs={2}>
        <Box sx={ 
            { display:"flex", justifyContent:"center" }
        }>
          <div style={ estilos.body } className="bodyBox"></div>
          </Box>

        </Grid>

        <Grid item xs={5}>
        <Box sx={ 
          { display:"flex", justifyContent:"start" }
        }>
          <div style={ estilos.rArm } className="armBox ml"></div>
          </Box>
        </Grid>

        <Grid item xs={6}>
        <Box sx={ { display:"flex", justifyContent:"end" } }>
          <div style={ estilos.lLeg } className="legBox mr"></div>
          </Box>
        </Grid>
       
        <Grid item xs={6}>
        <Box sx={ { display:"flex", justifyContent:"start"} }>
          <div style={ estilos.rLeg } className="legBox ml"></div>
          </Box>
        </Grid>
      </Grid>
  )
}