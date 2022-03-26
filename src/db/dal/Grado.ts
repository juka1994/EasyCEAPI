import { Grado } from '../models'
import { Op } from 'sequelize'
import { GradoInput, GradoOutput } from '../models/Grado'
import { GetAllGradosFilters } from './types'

export const create =async (payload: GradoInput): Promise<GradoOutput> => {
    const result = await Grado.create(payload)

    return result
}

export const update =async (id:number, payload: GradoInput): Promise<GradoOutput> => {
    const grado = await Grado.findByPk(id);

    if(!grado){
        throw new Error('not found')
    }

    const gradoUpdate = await grado.update(payload);
    return gradoUpdate
}

export const getById =async (id: number): Promise<GradoOutput> => {
    const grado = await Grado.findByPk(id);
    if(!grado){
        throw new Error('not fonund')
    }
    return grado
}

export const deleteById =async (id: number): Promise<boolean> => {
    const deleteGrado = await Grado.destroy({
        where:{ idGrado: id}
    })
    return !!deleteGrado
}

export const getAll =async (filters: GetAllGradosFilters): Promise<GradoOutput[]> => {
    return await Grado.findAll({
        where:{
            ...(filters?.isDeleted && {deleteAt: {[Op.not]: null}} )
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
    
}