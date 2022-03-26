require('dotenv').config()
import { Persona, Estudiante, Maestro, Grupo, Grado, Materia, Ciclo, Rol, PersonaRol } from './models'


const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([
    Rol.sync({alter: isDev || isTest}),
    Persona.sync({alter: isDev || isTest}),
    Grupo.sync({alter: isDev} || isTest),
    Grado.sync({alter: isDev} || isTest),
    Ciclo.sync({alter: isDev || isTest}),
    //Materia.sync({ alter: isDev || isTest}),
    Maestro.sync({alter: isDev || isTest}),
    //PersonaRol.sync({alter: isDev || isTest})
    //Estudiante.sync({alter: isDev || isTest}),    
]).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})

export default dbInit