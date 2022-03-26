import * as service from '../../../db/services/GradoService'
import { CreateGradoDTO, FilterGradoDTO } from '../../dto/grado.dto'
import { Grado } from '../../interface'
import * as mapper from './mapper'

export const create =async (payload: CreateGradoDTO): Promise<Grado> => {
    return mapper.toGrado(await service.create(payload))
}

export const update =async (id: number, payload: CreateGradoDTO): Promise<Grado> => {
    return mapper.toGrado(await service.updadate(id, payload))
}

export const getById =async (id: number): Promise<Grado> => {
    return mapper.toGrado(await service.getById(id))
}

export const deleteById =async (id: number): Promise<boolean> => {
    const isDeleted = await service.deleteById(id)

    return isDeleted
}

export const getAll =async (filters: FilterGradoDTO): Promise<Grado[]> => {
    return (await service.findAll(filters)).map(mapper.toGrado)
}