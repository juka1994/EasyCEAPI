import * as maestroDal from '../dal/Maestro'
import { MaestroInput, MaestroOutput } from '../models/Maestro'

export const create = async (payload : MaestroInput): Promise<MaestroOutput> => {
    return await maestroDal.create(payload)
}

export const update = async (id:number, payload: Partial<MaestroInput>): Promise<MaestroOutput> => {
    return await maestroDal.update(id, payload);
}

export const findById = (id: number): Promise<MaestroOutput> => {
    return maestroDal.getById(id)
}

export const findAll = (): Promise<MaestroOutput[]> => {
    return maestroDal.getAll()
}