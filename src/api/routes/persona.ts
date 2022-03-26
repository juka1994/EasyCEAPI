import { Router, Request, Response } from "express";
import * as personaController from '../controllers/persona'
import { CreatePersonaDTO, FilterPersonasDTO, UpdatePersonaDTO } from "api/dto/persona.dto";
import { checkCache } from '../../lib/check-cache';

const personaRouter = Router()

personaRouter.post('/',async (req:Request, res: Response) => {
    const payload: CreatePersonaDTO = req.body

    const result = await personaController.create(payload)
    return res.status(200).send(result)
})

personaRouter.get('/', checkCache,async (req: Request, res: Response) => {
    const filters: FilterPersonasDTO = req.query
    
    const result = await personaController.getAll(filters)
    return res.status(200).send(result)
})

personaRouter.put('/:id',async (req:Request, res: Response) => {
    const idPersona = Number(req.params.id)
    const payload:UpdatePersonaDTO = req.body

    const result = await personaController.update(idPersona, payload)

    return res.status(201).send(result)
    
})

personaRouter.get('/:id',async (req:Request, res: Response) => {
    const idPersona = Number(req.params.id)

    const result = await personaController.getById(idPersona)
    return res.status(200).send(result)
    
})

personaRouter.delete('/:id',async (req: Request, res: Response) => {
    const idPersona = Number(req.params.id)
    const result = await personaController.deleteById(idPersona)
    return res.status(204).send({
        success: result
    })
})

export default personaRouter