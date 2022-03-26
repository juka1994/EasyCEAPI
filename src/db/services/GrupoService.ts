import * as grupoDal from'../dal/Grupo'
import { GetAllGruposFilters } from 'db/dal/types'
import { GrupoInput, GrupoOutput } from 'db/models/Grupo'

export const create =async (payload: GrupoInput): Promise<GrupoOutput> => {
    return await grupoDal.create(payload)
}

export const update =async (id: number, payload: GrupoInput): Promise<GrupoOutput> => {
    return await grupoDal.update(id, payload)
}

export const getById = (id: number): Promise<GrupoOutput> => {
    return grupoDal.getById(id)
}

export const deleteById = (id: number): Promise<boolean> => {
    return grupoDal.deleteById(id)
}

export const findAll = (filters: GetAllGruposFilters): Promise<GrupoOutput[]> => {
    return grupoDal.getAll(filters)
}