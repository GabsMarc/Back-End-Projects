import { Request, Response, Router } from 'express'
import { CidadesController } from './../controllers'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Olá Dev!')
})


router.get('/cidades', CidadesController.GetAllValidation, CidadesController.getAll)
router.get('/cidades/:id', CidadesController.GetByIdValidation, CidadesController.getById)
router.post('/cidades', CidadesController.createValidation, CidadesController.create)
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById)
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById)




export { router }
