import { Op } from 'sequelize'
import { isEmpty } from 'lodash'
import { Persona } from '../models'
import { GetAllPersonasFilters } from './types'
import { PersonaInput, PersonaOutput } from '../models/Persona'

export const create = async (payload: PersonaInput): Promise<PersonaOutput> =>{
    const persona = await Persona.create(payload)

    return persona
}

export const update = async (id: number, payload: Partial<PersonaInput>): Promise<PersonaOutput> =>{
    const persona = await Persona.findByPk(id)
    if(!persona){
        throw new Error('not found')
    }

    const updatePersona = await persona.update(payload)
    return updatePersona
}

export const getById = async (id: number): Promise<PersonaOutput> => {
    const persona = await Persona.findByPk(id)

    if(!persona){
        throw new Error('not found')
    }
    return persona
}

export const deleteById =async (id: number): Promise<boolean> => {
    const deletePersona = await Persona.destroy({
        where: {idPersona : id}
    })
    return !!deletePersona
}

export const getAll =async (filters?: GetAllPersonasFilters): Promise<PersonaOutput[]> => {
    return await Persona.findAll({
        where:{
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}

export const checkCurpExists = async (Curp: string): Promise<boolean> => {
    const personaCurp = await Persona.findOne({
          where: {
              Curp
          }
    });
    return !isEmpty(personaCurp)
}
