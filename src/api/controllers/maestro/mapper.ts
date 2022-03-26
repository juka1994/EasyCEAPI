import { Maestro } from '../../interface/maestro.interface'
import { MaestroOutput } from '../../../db/models/Maestro'

export const toMaestro = (maestro: MaestroOutput): Maestro => {
    return{
        idMaestro: maestro.idMaestro,
        Codigo: maestro.Codigo,
        Especialidad: maestro.Especialidad,
        idPersonaRol: maestro.idPersonaRol,
        createdAt: maestro.createdAt,
        updatedAt: maestro.updatedAt
    }
}