import{ createContext, ReactNode, useState, FC } from 'react';
import { MiembrosContextType, VisibilidadMiembros } from '../@types/monigote.d.';


export const MiembrosContext = createContext<MiembrosContextType | null>( null );

const MiembrosProvider:FC<ReactNode> = ({ children }) => {

    const [partesVisibles, setPartesVisibles] = useState<VisibilidadMiembros>({
        head: true,
        body: true,
        lArm: true,
        rArm: true,
        lLeg: true,
        rLeg: true
    });

    
    const updatePartesVisibles = (partes: VisibilidadMiembros, event: React.ChangeEvent<HTMLInputElement>) => {
        setPartesVisibles({
            ...partes,
            [event.target.name]: event.target.checked,
        });
    }

    return <MiembrosContext.Provider value={{ partesVisibles, updatePartesVisibles }}>{children}</MiembrosContext.Provider>;
};

export default MiembrosProvider;