import { Partes } from '../types/monigote';


export const arrayArguments = ( objeto:Partes ): string[] => {
    let args: string[] = [];

    for (const elemento of Object.entries(objeto)) {
      if(elemento[1]) {
        args.push( elemento[0] );
      };
    };

    return args;
}

