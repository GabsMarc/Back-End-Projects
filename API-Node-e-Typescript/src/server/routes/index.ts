import { Request, Response, Router } from 'express'
import { StatusCodes } from 'http-status-codes'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Olá, Dev!')
})

router.get('/teste', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json(req.query.teste)
})

export { router }
