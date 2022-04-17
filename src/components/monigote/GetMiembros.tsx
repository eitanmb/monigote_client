import { useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GetMiembrosQuery, MiembrosContextType } from '../../@types/monigote.d.';
import { arrayArguments } from '../../helpers/arrayArguments';
import { DrawMonigote } from './DrawMonigote';
import { MiembrosContext} from '../../context/MiembrosContext';
import { Grid } from '@mui/material';


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
      <Grid item xs={8}>
        <div>
        An error occurred
      </div>
      </Grid>
      
    )
  }
 
  if (data ) {
    return (
      <Grid item xs={8}>
        <DrawMonigote valores={ data.miembros } />
      </Grid>
    )
  }
  
  return (
    <Grid item xs={8}>
        <div>
        Loading
      </div>
    </Grid>
  )

}


  