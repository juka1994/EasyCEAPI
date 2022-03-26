import * as service from '../../../db/services/MaestroService'
import { CreateMaestroDTO } from '../../dto/maestro.dto'
import { Maestro } from '../../interface'
import * as mapper from './mapper'

export const create =async (payload: CreateMaestroDTO): Promise<Maestro> => {
    return mapper.toMaestro(await service.create(payload))
}

export const update =async (id: number, payload: CreateMaestroDTO): Promise<Maestro> => {
    return mapper.toMaestro(await service.update(id, payload))
}

export const getById =async (id: number): Promise<Maestro> => {
    return mapper.toMaestro(await service.findById(id))
}

export const getAll =async (): Promise<Maestro[]> => {
    return(await service.findAll()).map(mapper.toMaestro)
}