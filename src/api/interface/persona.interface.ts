export interface Persona{
    idPersona: number
    ApellidoPaterno: string
    ApellidoMaterno: string
    PrimerNombre: string
    SegundoNombre?: string
    FechaNacimiento: Date
    Email: string
    Telefono: string
    Direccion: string
    Curp: string
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}