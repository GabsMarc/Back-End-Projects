import Express, { Request, Response } from 'express'



const router = Express.Router()


router.get('/client', (request: Request, response: Response) => {
    return response.json('Entrou na rota /client')
})








export { router }