import { StatusCodes } from "http-status-codes"
import { testeServer } from "../jest.setup"


describe('Cidades -- GetById', () => {

    let accessToken = ''
    beforeAll(async () => {

        await testeServer.post('/cadastrar').send({ nome: 'Teste', email: 'teste@email.com', senha: '123456' })
        const signInRes = await testeServer.post('/entrar').send({ email: 'teste@email.com', senha: '123456' })

        accessToken = signInRes.body.accessToken
    })


    it('Solicitar cidade por ID', async () => {

        const test1 = await testeServer
            .get('/cidades')
            .set('Authorization', `Bearer ${accessToken}`)

        expect(test1.status).toEqual(StatusCodes.OK)
    })
})