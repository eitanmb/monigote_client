
export interface IMiembro {
    id: string
    nombre: string
    estilos: IEstilos
}

export interface IEstilos {
    background: string
    borderRadius: string
    transform?: string
}

export interface IVisibilidadMiembros {
    head: boolean,
    body: boolean,
    lArm: boolean,
    rArm: boolean,
    lLeg: boolean,
    rLeg: boolean
}

export interface IGetMiembrosQuery {
    miembros: IMiembro[]
}

export interface IDrawMonigoteProps {
  valores: IMiembro[],
}

export interface INavBarProps {
    tema: boolean,
    setTema: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IMiembrosContextType {
    partesVisibles: IVisibilidadMiembros,
    updatePartesVisibles: (partes: IVisibilidadMiembros, event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ISwitchThemeContext {
    isDarkTheme: boolean,
    setIsDarkTheme: (isDarkTheme:boolean) => void
}

