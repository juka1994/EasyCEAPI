import { Estudiante } from '../models'
import { EstudianteInput, EstudianteOutput } from '../models/Estudiante'

export const create =async (payload: EstudianteInput): Promise<EstudianteOutput> => {
    const estudiante = await Estudiante.create(payload)

    return estudiante
}

export const update =async (id: number, payload: Partial<EstudianteInput>): Promise<EstudianteOutput> => {
    const estudiante = await Estudiante.findByPk(id)

    if(!estudiante){
        throw new Error('not found')
    }

    const estudianteUpdate = await estudiante.update(payload)

    return estudianteUpdate
    
}

export const getById =async (id: number): Promise<EstudianteOutput> => {
    const estudiante = await Estudiante.findByPk(id)

    if(!estudiante){
        throw new Error('not found')
    }
    return estudiante
}

export const getAll =async (): Promise<EstudianteOutput[]>=> {
    return await Estudiante.findAll()
}