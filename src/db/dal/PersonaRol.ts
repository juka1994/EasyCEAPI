import { PersonaRol} from '../models'
import { PersonaRolInput, PersonaRolOutput} from '../models/PersonaRol'

export const create =async (payload: PersonaRolInput): Promise<PersonaRolOutput> => {
    const estudiante = await PersonaRol.create(payload)

    return estudiante
}