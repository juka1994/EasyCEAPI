import { Ciclo } from '../../interface/ciclo.interface'
import { CicloOutput } from 'db/models/Ciclo'

export const toCiclo = (ciclo: CicloOutput): Ciclo =>{
    return{
        idCiclo: ciclo.idCiclo,
        FechaInicio: ciclo.FechaInicio,
        FechaFinal: ciclo.FechaFinal
    }
}