import * as estudianteDal from '../dal/Estudiante'
import { EstudianteInput, EstudianteOutput } from 'db/models/Estudiante'

export const create = async (payload: EstudianteInput): Promise<EstudianteOutput> => {
    return await estudianteDal.create(payload)
}

export const update = async (id:number, payload: Partial<EstudianteInput>): Promise<EstudianteOutput> => {
    return await estudianteDal.update(id, payload);
}

export const findById = (id: number): Promise<EstudianteOutput> => {
    return estudianteDal.getById(id)
}

export const findAll = (): Promise<EstudianteOutput[]> => {
    return estudianteDal.getAll()
}