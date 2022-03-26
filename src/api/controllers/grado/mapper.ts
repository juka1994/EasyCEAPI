import { Grado } from '../../interface/grado.interface'
import { GradoOutput } from 'db/models/Grado'

export const toGrado = (grado: GradoOutput): Grado => {
    return{
        idGrado: grado.idGrado,
        Nombre: grado.Nombre,
        createdAt: grado.createdAt,
        updatedAt: grado.updatedAt,
        deletedAt: grado.deleteAt
    }
}