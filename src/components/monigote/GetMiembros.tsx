import { useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GetMiembrosQuery, MiembrosContextType } from '../../@types/monigote.d.';
import { arrayArguments } from '../../helpers/arrayArguments';
import { DrawMonigote } from './DrawMonigote';
import { MiembrosContext} from '../../context/MiembrosContext';
import { Grid, Box } from '@mui/material';
import CircularStatic from '../ui/ProgresBar';


const GET_MIEMBROS = gql`
  query getMiembrosByName($nombre: [String]) {
    miembros(nombre: $nombre) {
      nombre
      estilos {
        background
        borderRadius
        transform
      }
    }
  }
`;
 
export const GetMiembros = () => {

  const { partesVisibles } = useContext(MiembrosContext) as MiembrosContextType;
  const  listaMiembrosVisibles = arrayArguments( partesVisibles );
  
  const { error, data } = useQuery<GetMiembrosQuery>(GET_MIEMBROS, {
    variables: { nombre: listaMiembrosVisibles },
  });

  
  if (error) {
    return (
      <Grid container spacing={1} >
        <Grid item xs={12} >
        <Box sx={ { display:"flex", justifyContent:"center",alignItems:'center', minHeight:'591px'} }>
            <div>Ocurrio un error</div>
        </Box>
        </Grid>
      </Grid>
      
    )
  }
 
  if (data ) {
    return (
        <DrawMonigote valores={ data.miembros } />
    )
  }
  
  return (
    
      <Grid container spacing={1} >
        <Grid item xs={12} >
        <Box sx={ { display:"flex", justifyContent:"center",alignItems:'center', minHeight:'591px'} }>
            <CircularStatic />
        </Box>
        </Grid>
      </Grid>
  )
}


  