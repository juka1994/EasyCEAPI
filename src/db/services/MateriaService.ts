import * as materiaDal from '../dal/Materia'
import { MateriaInput, MateriaOutput } from 'db/models/Materia'


export const create =async (payload: MateriaInput): Promise<MateriaOutput> => {
    return await materiaDal.create(payload)
}

export const update =async (id: number, payload: MateriaInput): Promise<MateriaOutput> => {
    return await materiaDal.update(id, payload)
}

export const getById = (id:number): Promise<MateriaOutput> => {
    return materiaDal.getById(id)
}

export const findAll = (): Promise<MateriaOutput[]> => {
    return materiaDal.getAll()
}