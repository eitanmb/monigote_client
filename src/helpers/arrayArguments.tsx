import { IVisibilidadMiembros } from '../@types/monigote.d.';


export const arrayArguments = ( objeto:IVisibilidadMiembros ): string[] => {
    let args: string[] = [];

    for (const elemento of Object.entries(objeto)) {
      if(elemento[1]) {
        args.push( elemento[0] );
      };
    };

    return args;
}

