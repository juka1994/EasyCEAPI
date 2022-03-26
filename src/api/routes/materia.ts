import { Request, Response, Router} from 'express'
import  * as materiaController from '../controllers/materia'
import { CreateMateriaDTO } from 'api/dto/materia.dto'


const materiaRouter = Router()

materiaRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreateMateriaDTO = req.body
   
    const result = await materiaController.create(payload)

    return res.status(200).send(result)
})

materiaRouter.put('/:id',async (req: Request, res: Response) => {
    const idMateria = Number(req.params.id)
    const payload: CreateMateriaDTO = req.body

    const result = await materiaController.update(idMateria, payload)
    return res.status(201).send(result)

})

materiaRouter.get('/:id' ,async (req: Request, res: Response) => {
    const idMateria = Number(req.params.id)

    const result = await materiaController.getById(idMateria)
    res.status(200).send(result)
})

materiaRouter.get('/',async (req: Request, res: Response) => {
    const result = await materiaController.getAll()

    res.status(200).send(result)
})
export default materiaRouter