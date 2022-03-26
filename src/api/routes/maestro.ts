import { Router, Request, Response } from "express";
import * as maestroController from '../controllers/maestro'
import { CreateMaestroDTO } from '../dto/maestro.dto';
import { checkCache } from '../../lib/check-cache';

const maestroRouter = Router()

maestroRouter.post('/',async (req: Request, res: Response) => {
      const payload: CreateMaestroDTO = req.body;

      const result = await maestroController.create(payload);

      return res.status(200).send(result)
    
})

maestroRouter.put('/:id',async (req: Request, res: Response) => {
      const idMaestro = Number(req.params.id)
      const payload: CreateMaestroDTO = req.body
     
      const result = await maestroController.update(idMaestro, payload)
  
      return res.status(201).send(result)
  })
  
maestroRouter.get('/:id',async (req: Request, res: Response) => {
      const idMaestro = Number(req.params.id)
  
      const result = await maestroController.getById(idMaestro)
  
      return res.status(200).send(result)  
})

maestroRouter.get('/', checkCache, async (req: Request, res: Response) => {
      const result = await maestroController.getAll()
  
      return res.status(200).send(result)
})

export default maestroRouter