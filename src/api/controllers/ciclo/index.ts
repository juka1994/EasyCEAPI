import * as service from '../../../db/services/CicloService'
import { CreateCicloDTO } from 'api/dto/ciclo.dto'
import { Ciclo } from '../../interface'
import * as mapper from './mapper'

export const create =async (payload: CreateCicloDTO): Promise<Ciclo> => {
    return mapper.toCiclo( await service.create(payload))
}

export const getAll =async (): Promise<Ciclo[]> => {
    return (await service.findAll()).map(mapper.toCiclo)
}