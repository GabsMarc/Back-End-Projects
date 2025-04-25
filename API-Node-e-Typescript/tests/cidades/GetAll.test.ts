import { StatusCodes } from "http-status-codes"
import { testeServer } from "../jest.setup"


describe('Cidades -- GetAll', () => {

    let accessToken = ''
    beforeAll(async () => {

        await testeServer.post('/cadastrar').send({ nome: 'Teste', email: 'teste@email.com', senha: '123456' })
        const signInRes = await testeServer.post('/entrar').send({ email: 'teste@email.com', senha: '123456' })

        accessToken = signInRes.body.accessToken
    })


    it('Solicitar todos os registros da tabela cidade', async () => {

        const test1 = await testeServer
            .get('/cidades')
            .set('Authorization', `Bearer ${accessToken}`)

        expect(test1.statusCode).toEqual(StatusCodes.OK)
    })
})