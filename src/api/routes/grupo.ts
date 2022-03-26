import { Request, Response, Router } from "express";
import * as grupoController from '../controllers/grupo'
import { CreateGrupoDTO, FilterGrupoDTO } from "api/dto/grupo.dto";

const grupoRouter = Router()

grupoRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreateGrupoDTO = req.body

    const result = await grupoController.create(payload)
    return res.status(200).send(result)
})

grupoRouter.get('/',async (req: Request, res: Response) => {
     const filter: FilterGrupoDTO = req.query
     
     const result = await grupoController.getAll(filter)
     return res.status(200).send(result)
})

grupoRouter.put('/:id',async (req: Request, res: Response) => {
    const idGrupo = Number(req.params.id)
    const payload: CreateGrupoDTO = req.body
    
    const result = await grupoController.update(idGrupo, payload)
    return res.status(201).send(result)
    
})

grupoRouter.get('/:id',async (req: Request, res: Response) => {
    const idGrupo = Number(req.params.id)

    const result = await grupoController.getById(idGrupo)

    return res.status(200).send(result)
})

grupoRouter.delete('/:id',async (req: Request, res: Response ) => {
    const idGrupo = Number(req.params.id)

    const result = await grupoController.deleteById(idGrupo)
    return res.status(201).send({
        success: result
    })
})

export default grupoRouter