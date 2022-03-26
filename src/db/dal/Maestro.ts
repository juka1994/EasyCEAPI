import { Maestro } from '../models'
import { MaestroInput, MaestroOutput } from '../models/Maestro'

export const create =async (payload: MaestroInput): Promise<MaestroOutput> => {
    const maestro = await Maestro.create(payload);

    return maestro
}

export const update =async (id: number, payload: Partial<MaestroInput>): Promise<MaestroOutput> => {
    const maestro = await Maestro.findByPk(id)

    if(!maestro){
        throw new Error('not found')
    }

    const maestroUpdate = await maestro.update(payload)

    return maestroUpdate
    
}

export const getById =async (id: number): Promise<MaestroOutput> => {
    const maestro = await Maestro.findByPk(id)

    if(!maestro){
        throw new Error('not found')
    }
    return maestro
}

export const getAll =async (): Promise<MaestroOutput[]>=> {
    return await Maestro.findAll()
}