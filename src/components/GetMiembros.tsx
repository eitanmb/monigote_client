import { useQuery, gql } from '@apollo/client';
import { Partes, Miembro } from '../types/monigote';
import { arrayArguments } from '../helpers/arrayArguments';
import { DrawMonigote } from './DrawMonigote';

interface MiembrosProps {
  valores: Partes,
}

interface GetMiembrosQuery {
  miembros: Miembro[]
}

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
 
export const GetMiembros = (props:MiembrosProps) => {

  const { valores } = props;
  const  listaMiembrosVisibles = arrayArguments( valores );
  
  const { error, data } = useQuery<GetMiembrosQuery>(GET_MIEMBROS, {
    variables: { nombre: listaMiembrosVisibles },
  });

  
  if (error) {
    return (
      <div>
        An error occurred
      </div>
    )
  }
 
  if (data ) {
    return (
      <DrawMonigote valores={ data.miembros } />
    )
  }


  return (
    <div>
      Loading...
    </div>
  )

}


  