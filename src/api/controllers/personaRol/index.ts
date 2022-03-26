import * as service from '../../../db/services/PersonaRolService'
import { CreatePersonaRolDTO } from 'api/dto/personaRol.dto'
import { PersonaRol } from '../../interface'
import * as mapper from './mapper'

export const create =async (payload: CreatePersonaRolDTO): Promise<PersonaRol> => {
    return mapper.toPersonaRol(await service.create(payload))
}