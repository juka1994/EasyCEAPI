import * as service from '../../../db/services/EstudianteService'
import { CreateEstudianteDTO } from 'api/dto/estudiante.dto'
import { Estudiante } from '../../interface'
import * as mapper from './mapper'

export const create =async (payload:CreateEstudianteDTO): Promise<Estudiante> => {
    return mapper.toEstudiante(await service.create(payload))
}

export const update =async (id: number, payload: CreateEstudianteDTO): Promise<Estudiante> => {
    return mapper.toEstudiante(await service.update(id, payload))
}

export const getById =async (id: number): Promise<Estudiante> => {
    return mapper.toEstudiante(await service.findById(id))
}

export const getAll =async (): Promise<Estudiante[]> => {
    return(await service.findAll()).map(mapper.toEstudiante)
}