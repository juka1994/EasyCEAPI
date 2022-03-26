import * as rolDal from '../dal/Rol'
import { RolInput, RolOutput } from 'db/models/Rol'


export const create =async (payload: RolInput): Promise<RolOutput> => {
    return await rolDal.create(payload)
}

export const findAll = (): Promise<RolOutput[]> => {
    return rolDal.getAll()
}