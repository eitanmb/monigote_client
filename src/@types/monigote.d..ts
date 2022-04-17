
export interface Miembro {
    id: string
    nombre: string
    estilos: Estilos
}

export interface Estilos {
    background: string
    borderRadius: string
    transform?: string
}

export interface VisibilidadMiembros {
    head: boolean,
    body: boolean,
    lArm: boolean,
    rArm: boolean,
    lLeg: boolean,
    rLeg: boolean
}

export interface GetMiembrosQuery {
    miembros: Miembro[]
}

export interface DrawMonigoteProps {
  valores: Miembro[],
}

export interface MiembrosContextType {
    partesVisibles: VisibilidadMiembros,
    updatePartesVisibles: (partes: VisibilidadMiembros, event: React.ChangeEvent<HTMLInputElement>) => void;
}
 