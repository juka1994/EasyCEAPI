import * as gradoDal from '../dal/Grado'
import { GetAllGradosFilters } from 'db/dal/types'
import { GradoInput, GradoOutput } from '../models/Grado'

export const create =async (payload: GradoInput): Promise<GradoOutput> => {
    return await gradoDal.create(payload)
}

export const updadate =async (id: number, payload: GradoInput): Promise<GradoOutput> => {
    return await gradoDal.update(id,payload)
}

export const getById = (id:number): Promise<GradoOutput> => {
    return gradoDal.getById(id)
}

export const deleteById = (id:number): Promise<boolean> => {
    return gradoDal.deleteById(id)
}

export const findAll = (filters:GetAllGradosFilters): Promise<GradoOutput[]> => {
    return gradoDal.getAll(filters)
}