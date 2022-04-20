import { Grid, Box } from '@mui/material';
import { IEstilos, IDrawMonigoteProps } from '../../types/monigote.d.';

export const DrawMonigote = (props:IDrawMonigoteProps) => {

  
  let bodyStyle:IEstilos | undefined = undefined;
  let headStyle:IEstilos | undefined = undefined;
  let rArmStyle:IEstilos | undefined = undefined;
  let lArmStyle:IEstilos | undefined = undefined;
  let rLegStyle:IEstilos | undefined = undefined;
  let lLegStyle:IEstilos | undefined = undefined;
  
  const miembros = props.valores;

  miembros.forEach( miembro => {
    switch( miembro.nombre ) {
      case "body":
        bodyStyle = miembro.estilos;
        break;

      case "head":
        headStyle = miembro.estilos;
        break;

      case "rArm":
        rArmStyle = miembro.estilos;
        break;

      case "lArm":
        lArmStyle = miembro.estilos;
        break;

      case "rLeg":
        rLegStyle = miembro.estilos;
        break;

      case "lLeg":
        lLegStyle = miembro.estilos;
        break;
    }
  });

  return (
    
      <Grid container spacing={1} >
        
        <Grid item xs={12} >
        <Box sx={ { display:"flex", justifyContent:"center"} }>
            <div style={ headStyle } className="headBox"></div>
        </Box>
        </Grid>

        <Grid item xs={5}>
        <Box sx={ 
          { display:"flex", justifyContent:"end"}
        }>
          <div style={ lArmStyle } className="armBox mr"></div>
          </Box>
        </Grid>

        <Grid item xs={2}>
        <Box sx={ 
            { display:"flex", justifyContent:"center" }
        }>
          <div style={ bodyStyle } className="bodyBox"></div>
          </Box>

        </Grid>

        <Grid item xs={5}>
        <Box sx={ 
          { display:"flex", justifyContent:"start" }
        }>
          <div style={ rArmStyle } className="armBox ml"></div>
          </Box>
        </Grid>

        <Grid item xs={6}>
        <Box sx={ { display:"flex", justifyContent:"end" } }>
          <div style={ lLegStyle } className="legBox mr"></div>
          </Box>
        </Grid>
       
        <Grid item xs={6}>
        <Box sx={ { display:"flex", justifyContent:"start"} }>
          <div style={ rLegStyle } className="legBox ml"></div>
          </Box>
        </Grid>
      </Grid>
  )
}
