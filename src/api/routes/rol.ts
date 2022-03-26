import { Router, Request, Response} from 'express'
import { CreateRolDTO } from 'api/dto/rol.dto'
import * as rolController from '../controllers/Rol'


const rolRouter = Router()

rolRouter.post('/',async (req: Request, res: Response) => {
    const payload: CreateRolDTO = req.body

    const result = await rolController.create(payload)
    return res.status(200).send(result)
})

rolRouter.get('/',async (req: Request, res: Response) => {
    const result = await rolController.getAll()

    res.status(200).send(result)
})
export default rolRouter