import { NextFunction, Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { CidadesController } from './../controllers'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Olá Dev!')
})


router.post('/cidades', CidadesController.createBodyValidator, CidadesController.create)





export { router }
