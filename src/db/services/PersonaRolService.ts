import * as personRolDal from '../dal/PersonaRol'
import { PersonaRolInput, PersonaRolOutput } from 'db/models/PersonaRol'

export const create = async (payload: PersonaRolInput): Promise<PersonaRolOutput> => {
    return await personRolDal.create(payload)
}