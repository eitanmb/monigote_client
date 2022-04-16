
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

export interface Partes {
    head: boolean,
    body: boolean,
    lArm: boolean,
    rArm: boolean,
    lLeg: boolean,
    rLeg: boolean
}

export interface MiembrosProps {
    valores: Partes,
}

export interface DrawMonigoteProps {
    valores: Miembro[],
}


export interface GetMiembrosQuery {
    miembros: Miembro[]
}