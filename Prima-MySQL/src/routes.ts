import Express, { Request, Response } from 'express'
import { PostNewClientController } from './Controllers/PostNewClientController'
import { UpdateClientController } from './Controllers/UpdateClientController'
import { GetClientController } from './Controllers/GetClientController'
import { DeleteClientController } from './Controllers/DeleteClientController'



const router = Express.Router()


router.get('/teste', (request: Request, response: Response) => {
    return response.json('A conexão está funcionando!')
})


router.get('/getClient', async (request: Request, response: Response) => {
    return await new GetClientController().handle(request, response)
})


router.post('/newClient', async (request: Request, response: Response) => {
    return await new PostNewClientController().handle(request, response)
})


router.put('/updateClient', async (request: Request, response: Response) => {
    return await new UpdateClientController().handle(request, response)
})


router.delete('/deleteClient', async (request: Request, response: Response) => {
    return await new DeleteClientController().handle(request, response)
})




export { router }