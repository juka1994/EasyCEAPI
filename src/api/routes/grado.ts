import { Router, Request, Response } from "express"
import * as gradoController from '../controllers/grado'
import { CreateGradoDTO, FilterGradoDTO } from "api/dto/grado.dto"

const gradoRouter = Router()

gradoRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreateGradoDTO = req.body

    const result = await gradoController.create(payload)
    return res.status(200).send(result)
})

gradoRouter.get('/',async (req:Request, res: Response) => {
    const filter: FilterGradoDTO = req.query

    const result = await gradoController.getAll(filter)

    return res.status(200).send(result)
})

gradoRouter.put('/:id',async (req:Request, res: Response) => {
    const idGrado =  Number(req.params.id)
    const payload: CreateGradoDTO= req.body
    
    const result = await gradoController.update(idGrado, payload)
    return res.status(201).send(result)
})

gradoRouter.get('/:id',async (req: Request, res: Response) => {
    const idGrado = Number(req.params.id)

    const result = await gradoController.getById(idGrado)
    return res.status(200).send(result)
})

gradoRouter.delete('/:id',async (req: Request, res: Response) => {
    const idGrado = Number(req.params.id)

    const result = await gradoController.deleteById(idGrado)
    return res.status(201).send({
        success: result
    })

})
export default gradoRouter