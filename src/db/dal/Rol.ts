import { Rol } from '../models'
import { RolInput, RolOutput } from 'db/models/Rol'


export const create =async (payload: RolInput): Promise<RolOutput> => {
    const result = await Rol.create(payload)
    return result
}

export const getAll =async (): Promise<RolOutput[]> => {
    const result = await Rol.findAll()
    return result
}