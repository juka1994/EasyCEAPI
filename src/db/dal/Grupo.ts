import { Grupo } from '../models'
import { Op } from 'sequelize'
import { GrupoInput, GrupoOutput } from 'db/models/Grupo'
import { GetAllGruposFilters } from './types'


export const create =async (payload: GrupoInput): Promise<GrupoOutput> => {
    const result = await Grupo.create(payload)

    return result
}

export const update =async (id: number, payload: GrupoInput): Promise<GrupoOutput> => {
    const grupo = await Grupo.findByPk(id)

    if(!grupo){
        throw new Error('not found')
    }

    const grupoUpdate = await grupo.update(payload)
    return grupoUpdate
}

export const getById =async (id: number): Promise<GrupoOutput> => {
    const grupo = await Grupo.findByPk(id)
    if(!grupo){
        throw new Error('not found')
    }

    return grupo
}

export const deleteById =async (id: number): Promise<boolean> => {
    const deleteGrupo = await Grupo.destroy({
        where: {idGrupo: id}
    })
    return !!deleteGrupo
}

export const getAll =async (filters: GetAllGruposFilters): Promise<GrupoOutput[]> => {
    return await Grupo.findAll({
        where:{
            ...(filters?.isDeleted && {deleteAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}