import { useQuery, gql } from '@apollo/client';
import { IGetMiembrosQuery } from '../../types/monigote.d.';

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

export const GetMiembrosQuery = (listaMiembrosVisibles:string[]) => {

  return useQuery<IGetMiembrosQuery>(GET_MIEMBROS, {
    variables: { nombre: listaMiembrosVisibles },
  });
}
