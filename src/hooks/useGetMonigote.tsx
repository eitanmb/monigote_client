import { gql, useQuery } from '@apollo/client';
import { Miembro } from '../types/monigote';

interface GetMonigote {
    monigote: Miembro[]
}


const GET_MONIGOTE = gql`
  query  {
    monigote {
      nombre
      estilos {
        background
        border_radius
        margin
        transform
      }
    }
  }
`

export const useGetMonigote = () => {

    return useQuery<GetMonigote>(GET_MONIGOTE);
}