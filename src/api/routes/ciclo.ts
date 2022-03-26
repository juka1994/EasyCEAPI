import { Router, Request, Response } from "express";
import { CreateCicloDTO } from "api/dto/ciclo.dto";
import * as cicloController  from '../controllers/ciclo'


const cicloRouter = Router()

cicloRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreateCicloDTO = req.body

    const result = await cicloController.create(payload)
    return res.status(200).send(result)
})

cicloRouter.get('/',async (req: Request, res: Response) => {
    const result = await cicloController.getAll()

    return res.status(200).send(result)
})


export default cicloRouter