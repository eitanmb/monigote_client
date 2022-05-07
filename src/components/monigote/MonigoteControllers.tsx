import { useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';

import { MiembrosContext} from '../../context/MiembrosContext';


export const MonigoteControllers = () => {

  const partesState = useContext(MiembrosContext);

  if (!partesState) return <></>;
  
  const { body, head, lArm, rArm, lLeg, rLeg } = partesState.partesVisibles;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    partesState.updatePartesVisibles( partesState.partesVisibles, event );
  };

  return (
    <Paper elevation={3}>
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Manéjese con cuidado</FormLabel>
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
    </Paper>
  )
}



