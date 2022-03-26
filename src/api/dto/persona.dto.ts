import { Optional } from 'sequelize/types'

export type CreatePersonaDTO = {
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    PrimerNombre: string;
    SegundoNombre: string;
    FechaNacimiento: Date;
    Email: string;
    Telefono: string;
    Direccion: string;
    Curp: string;
}

export type UpdatePersonaDTO = Optional<CreatePersonaDTO, 'Curp'>

export type FilterPersonasDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}