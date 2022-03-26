import { PersonaRol } from '../../interface/personaRol.interface'
import { PersonaRolOutput } from 'db/models/PersonaRol'

export const toPersonaRol = (personaRol: PersonaRolOutput): PersonaRol => {
    return{
       idPersonaRol: personaRol.idPersonaRol,
       idPersona: personaRol.idPersona,
       idRol: personaRol.idRol
    }
}