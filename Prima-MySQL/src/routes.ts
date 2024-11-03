import Express, { Request, Response } from 'express'
import { PostNewClientController } from './Controllers/PostNewClientController'
import { UpdateClientController } from './Controllers/UpdateClientController'



const router = Express.Router()


router.get('/client', (request: Request, response: Response) => {
    return response.json('Entrou na rota /client')
})


router.post('/newClient', async (request: Request, response: Response) => {
    return await new PostNewClientController().handle(request, response)
})


router.put('/updateClient', async (request: Request, response: Response) => {
    return await new UpdateClientController().handle(request, response)
})




export { router }