import {Router, Request, Response} from 'express'
import * as estudianteController from '../controllers/estudiante'
import { CreateEstudianteDTO } from 'api/dto/estudiante.dto'
import { checkCache } from '../../lib/check-cache';

const estudianteRouter = Router()

estudianteRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreateEstudianteDTO = req.body

    const result = await estudianteController.create(payload)
    return res.status(200).send(result)
})

estudianteRouter.put('/:id',async (req: Request, res: Response) => {
    const idEstudiante = Number(req.params.id)
    const payload: CreateEstudianteDTO = req.body
   
    const result = await estudianteController.update(idEstudiante, payload)

    return res.status(201).send(result)
})

estudianteRouter.get('/:id',async (req: Request, res: Response) => {
    const idEstudiante = Number(req.params.id)

    const result = await estudianteController.getById(idEstudiante)

    return res.status(200).send(result)
})

estudianteRouter.get('/', checkCache, async (req: Request, res: Response) => {
    const result = await estudianteController.getAll()

    return res.status(200).send(result)
})
export default estudianteRouter