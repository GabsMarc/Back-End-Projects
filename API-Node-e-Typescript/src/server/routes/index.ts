import { Request, Response, Router } from 'express'
import { CidadesController, PessoasController, usuariosController } from './../controllers'
import { ensureAuthenticated } from '../shared/middleware'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Olá Dev!')
})

// CIDADES
router.get('/cidades', ensureAuthenticated, CidadesController.GetAllValidation, CidadesController.getAll)
router.get('/cidades/:id', ensureAuthenticated, CidadesController.GetByIdValidation, CidadesController.getById)
router.post('/cidades', ensureAuthenticated, CidadesController.createValidation, CidadesController.create)
router.put('/cidades/:id', ensureAuthenticated, CidadesController.updateByIdValidation, CidadesController.updateById)
router.delete('/cidades/:id', ensureAuthenticated, CidadesController.deleteByIdValidation, CidadesController.deleteById)



// PESSOAS
router.get('/pessoas', ensureAuthenticated, PessoasController.getAll)
router.get('/pessoas/:id', ensureAuthenticated, PessoasController.getByIdValidation, PessoasController.getById)
router.post('/pessoas', ensureAuthenticated, PessoasController.createValidation, PessoasController.create)
router.put('/pessoas/:id', ensureAuthenticated, PessoasController.updateByIdValidation, PessoasController.updateById)
router.delete('/pessoas/:id', ensureAuthenticated, PessoasController.delteByIdValidation, PessoasController.deleteById)




// USUARIOS
router.post('/cadastrar', usuariosController.signUpValidation, usuariosController.signUp)
router.post('/entrar', usuariosController.signInValidation, usuariosController.signIn)













export { router }
