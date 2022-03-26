import * as cicloDal from '../dal/Ciclo'
import { CicloInput, CicloOutput } from 'db/models/Ciclo'

export const create =async (payload:CicloInput): Promise<CicloOutput> => {
    return await cicloDal.create(payload);
}

export const findAll = (): Promise<CicloOutput[]> => {
    return  cicloDal.getAll()
}