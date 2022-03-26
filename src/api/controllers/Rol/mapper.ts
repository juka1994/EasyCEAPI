import { Rol } from '../../interface/rol.interface'
import { RolOutput } from 'db/models/Rol'

export const toRol = (rol: RolOutput): Rol =>{
    return{
        idRol: rol.idRol,
        Nombre: rol.Nombre
    }
}