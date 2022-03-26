import {Persona } from '../../interface/persona.interface'
import { PersonaOutput } from 'db/models/Persona'

export const toPersona = (persona: PersonaOutput): Persona =>{
    return{
        idPersona: persona.idPersona,
        ApellidoPaterno: persona.ApellidoPaterno,
        ApellidoMaterno: persona.ApellidoMaterno,
        PrimerNombre: persona.PrimerNombre,
        SegundoNombre: persona.SegundoNombre,
        FechaNacimiento: persona.FechaNacimiento,
        Email: persona.Email,
        Telefono: persona.Telefono,
        Direccion: persona.Direccion,
        Curp: persona.Curp,
        createdAt: persona.createdAt,
        updatedAt: persona.updatedAt,
        deletedAt: persona.deletedAt
    }
}