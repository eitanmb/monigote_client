import { useContext } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { MiembrosContextType } from '../../@types/monigote.d.';
import { MiembrosContext} from '../../context/MiembrosContext';
import { Grid } from '@mui/material';


export const MonigoteControllers = () => {

  const { partesVisibles, updatePartesVisibles } = useContext(MiembrosContext) as MiembrosContextType;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updatePartesVisibles( partesVisibles, event );
  };


  const { body, head, lArm, rArm, lLeg, rLeg } = partesVisibles;


  return (
    <Grid item xs={4}>

    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">¿Qué parte del Monigote vas a mutilar?</FormLabel>
        <FormHelperText>Handle it with care!!!!</FormHelperText>
        <FormGroup>
        <FormControlLabel
            control={
            <Checkbox checked={head} onChange={handleChange} name="head" />
            }
            label="Cabeza"
        />
        <FormControlLabel
            control={
            <Checkbox checked={body} onChange={handleChange} name="body" />
            }
            label="Cuerpo"
        />
        <FormControlLabel
            control={
            <Checkbox checked={lArm} onChange={handleChange} name="lArm" />
            }
            label="Brazo Izquierdo"
        />
        <FormControlLabel
            control={
            <Checkbox checked={rArm} onChange={handleChange} name="rArm" />
            }
            label="Brazo Derecho"
        />
        <FormControlLabel
            control={
            <Checkbox checked={lLeg} onChange={handleChange} name="lLeg" />
            }
            label="Pierna Izquierda"
        />
        <FormControlLabel
            control={
            <Checkbox checked={rLeg} onChange={handleChange} name="rLeg" />
            }
            label="Pierna Derecha"
        />
        </FormGroup>
    </FormControl>
    </Grid>
  )
}


