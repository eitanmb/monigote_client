import { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { Partes } from '../types/monigote';
import { GetMiembros } from './GetMiembros';



export const MonigoteControllers = () => {
  
  const [partesVisibles, setPartesVisibles] = useState<Partes>({
    head: true,
    body: true,
    lArm: true,
    rArm: true,
    lLeg: true,
    rLeg: true
  });

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPartesVisibles({
      ...partesVisibles,
      [event.target.name]: event.target.checked,
    });
  };


  const { body, head, lArm, rArm, lLeg, rLeg } = partesVisibles;


  return (
    <>
    
        <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">¿Qué parte del Monigote va a mutilar?</FormLabel>
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
        </Box>

        <Box sx={{ display: 'flex' }}>
          <GetMiembros valores={partesVisibles} />
        </Box>       
     </>
  )
}



