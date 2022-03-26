import { Ciclo } from '../models'
import { CicloInput, CicloOutput } from 'db/models/Ciclo'


export const create =async (payload:CicloInput): Promise<CicloOutput> => {
    const result = await Ciclo.create(payload)
    return result
}

export const getAll =async (): Promise<CicloOutput[]> => {
    const result = await Ciclo.findAll()
    return result
}