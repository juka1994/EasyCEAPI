import { Request, Response, Router } from "express";
import * as personaController from '../controllers/personaRol'
import { CreatePersonaRolDTO } from "api/dto/personaRol.dto";

const personaRolRouter = Router()

personaRolRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreatePersonaRolDTO = req.body

    const result = await personaController.create(payload)
    return res.status(200).send(result)
})

export default personaRolRouter