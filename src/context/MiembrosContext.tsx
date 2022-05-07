import{ createContext, ReactNode, useState, FC } from 'react';
import { IMiembrosContextType, IVisibilidadMiembros } from '../types/monigote.d.';


export const MiembrosContext = createContext<IMiembrosContextType | null>( null );

const MiembrosProvider:FC<ReactNode> = ({ children }) => {

    const [partesVisibles, setPartesVisibles] = useState<IVisibilidadMiembros>({
        head: true,
        body: true,
        lArm: true,
        rArm: true,
        lLeg: true,
        rLeg: true
    });

    
    const updatePartesVisibles = (partes: IVisibilidadMiembros, event: React.ChangeEvent<HTMLInputElement>) => {
        setPartesVisibles({
            ...partes,
            [event.target.name]: event.target.checked,
        });
    }

    return <MiembrosContext.Provider value={{ partesVisibles, updatePartesVisibles }}>{children}</MiembrosContext.Provider>;
};

export default MiembrosProvider;