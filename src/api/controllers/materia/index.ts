import * as service from '../../../db/services/MateriaService'
import { CreateMateriaDTO } from 'api/dto/materia.dto'
import { Materia } from '../../interface'
import * as mapper from './mapper'

export const create =async (payload: CreateMateriaDTO): Promise<Materia> => {
    return mapper.toMateria(await service.create(payload))
}

export const update =async (id:number, payload: CreateMateriaDTO): Promise<Materia> => {
    return mapper.toMateria(await service.update(id, payload))
}

export const getById =async (id: number): Promise<Materia> => {
    return mapper.toMateria(await service.getById(id))
}

export const getAll =async (): Promise<Materia[]> => {
    return (await service.findAll()).map(mapper.toMateria)
}