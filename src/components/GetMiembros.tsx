import { useQuery, gql } from '@apollo/client';
import { MiembrosProps, GetMiembrosQuery } from '../types/monigote';
import { arrayArguments } from '../helpers/arrayArguments';
import { DrawMonigote } from './DrawMonigote';


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
  const { loading, error, data } = useQuery<GetMiembrosQuery>(GET_MIEMBROS, {
    variables: { nombre: listaMiembrosVisibles },
  });

  
  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }


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

  // return (
  //   <DrawMonigote valores={ data.miembros } />
  // )

}


  