import { Request, Response, Router } from 'express'
import { CidadesController, PessoasController } from './../controllers'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Olá Dev!')
})

// CIDADES
router.get('/cidades', CidadesController.GetAllValidation, CidadesController.getAll)
router.get('/cidades/:id', CidadesController.GetByIdValidation, CidadesController.getById)
router.post('/cidades', CidadesController.createValidation, CidadesController.create)
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById)
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById)



// PESSOAS
router.get('/pessoas', PessoasController.getAll)
router.get('/pessoas/:id', PessoasController.getByIdValidation, PessoasController.getById)
router.post('/pessoas', PessoasController.createValidation, PessoasController.create)
router.put('/pessoas/:id', PessoasController.updateByIdValidation, PessoasController.updateById)
router.delete('/pessoas/:id', PessoasController.delteByIdValidation, PessoasController.deleteById)
















export { router }
