import { Materia } from '../../interface/materia.interface'
import { MateriaOutput } from 'db/models/Materia'

export const toMateria = (materia: MateriaOutput): Materia =>{
    return{
        idMateria: materia.idMateria,
        Nombre: materia.Nombre,
        Descripcion: materia.Descripcion,
        Creditos: materia.Creditos,
        Horas: materia.Horas,
        Estado: materia.Estado,
        idGrado: materia.idGrado,
        createdAt: materia.createdAt,
        updatedAt: materia.updatedAt
    }
}