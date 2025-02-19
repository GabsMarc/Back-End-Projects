import { Request, Response, Router } from 'express'
import { CidadesController } from './../controllers'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Olá Dev!')
})


router.post('/cidades', CidadesController.createValidation, CidadesController.create)





export { router }
