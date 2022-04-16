import React from 'react'
import { Miembro, Estilos } from '../types/monigote';


interface DrawMonigoteProps {
  valores: Miembro[],
}

export const DrawMonigote = (props:DrawMonigoteProps) => {

  
  let bodyStyle:Estilos | undefined = undefined;
  let headStyle:Estilos | undefined = undefined;
  let rArmStyle:Estilos | undefined = undefined;
  let lArmStyle:Estilos | undefined = undefined;
  let rLegStyle:Estilos | undefined = undefined;
  let lLegStyle:Estilos | undefined = undefined;
  
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
    <div>
        <div style={ headStyle } className="headBox"></div>
        <div className="extSup">            
            <div style={ lArmStyle } className="armBox mr"></div>
            <div style={ bodyStyle } className="bodyBox"></div>
            <div style={ rArmStyle } className="armBox ml"></div>
        </div>
        <div className="extInf">
            <div style={ lLegStyle } className="legBox mr"></div>
            <div style={ rLegStyle } className="legBox ml"></div>
        </div>
    </div>
  )
}


