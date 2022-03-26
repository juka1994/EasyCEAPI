import { Estudiante } from "../../interface/estudiante.interface";
import { EstudianteOutput } from "db/models/Estudiante";

export const toEstudiante = (estudiante: EstudianteOutput): Estudiante =>{
    return {
        idEstudiante: estudiante.idEstudiante,
        Codigo: estudiante.Codigo,
        idPersonaRol: estudiante.idPersonaRol,
        createdAt: estudiante.createdAt,
        updatedAt: estudiante.updatedAt
    }
}