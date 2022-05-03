import { Grid, Box } from '@mui/material';
import { useContext } from 'react';

import { arrayArguments } from '../../helpers/arrayArguments';
import { DrawMonigote } from './DrawMonigote';
import { GetMiembrosQuery } from '../graphql/getMiembrosQuery';
import { IMiembrosContextType } from '../../types/monigote.d.';
import { MiembrosContext} from '../../context/MiembrosContext';
import CircularColor from '../ui/Loading';
import ErrorBox from '../ui/Error';

 
export const GetMiembros = () => {

 
  const partes = useContext<IMiembrosContextType | null >(MiembrosContext);

  if (!partes) {
    return <></>
  }

  const { partesVisibles } = partes;

  const  listaMiembrosVisibles = arrayArguments( partesVisibles );
  
  const { error, data } = GetMiembrosQuery(listaMiembrosVisibles)
  
  
  if (error) {
    return (
      <Grid container spacing={1} >
        <Grid item xs={12} >
        <Box sx={ { display:"flex", justifyContent:"center",alignItems:'center' } }>
           <ErrorBox />
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
      <Box sx={ { display:"flex", justifyContent:"center",alignItems:'center'} }>
          <CircularColor />
      </Box>
      </Grid>
    </Grid>
  )
}


  