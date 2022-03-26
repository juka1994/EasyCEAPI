import { Grupo } from '../../interface/grupo.interface'
import { GrupoOutput } from 'db/models/Grupo'

export const toGrupo = (grupo: GrupoOutput): Grupo => {
    return{
        idGrupo: grupo.idGrupo,
        Nombre: grupo.Nombre,
        createdAt: grupo.createdAt,
        updatedAt: grupo.updatedAt,
        deletedAt: grupo.deleteAt
    }
}