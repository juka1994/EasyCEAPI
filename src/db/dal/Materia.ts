import { Materia } from "../models";
import { MateriaInput, MateriaOutput } from "../models/Materia";

export const create = async (payload: MateriaInput): Promise<MateriaOutput> => {
    const materia = await Materia.create(payload)

    return materia
}

export const update =async (id: number, payload: MateriaInput): Promise<MateriaOutput> => {
    const materia = await Materia.findByPk(id)

    if(!materia){
        throw new Error('not found')
    }
    const materiaUpdate = await materia.update(payload)
    return materiaUpdate
}

export const getById =async (id: number): Promise<MateriaOutput> => {
    const materia = await Materia.findByPk(id)

    if(!materia){
        throw new Error('not found')
    }
    return materia
}

export const getAll =async (): Promise<MateriaOutput[]> => {
    return await Materia.findAll()
}