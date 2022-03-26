import * as personaDal from '../dal/Persona'
import { GetAllPersonasFilters } from 'db/dal/types'
import { PersonaInput, PersonaOutput } from 'db/models/Persona'


export const create = async (payload: PersonaInput): Promise<PersonaOutput> =>{
    return await personaDal.create(payload)
}

export const update = async (id: number, payload: Partial<PersonaInput>): Promise<PersonaOutput> => {
    return await personaDal.update(id, payload)
}

export const getById = (id: number): Promise<PersonaOutput> =>{
    return personaDal.getById(id)
}

export const deleteById = (id: number): Promise<boolean> =>{
    return personaDal.deleteById(id)
}

export const findAll = (filters: GetAllPersonasFilters): Promise<PersonaOutput[]> =>{
    return personaDal.getAll(filters)
}
