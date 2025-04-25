import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";


describe('Cidades - DeleteByID', () => {

    let accessToken = ''
    beforeAll(async () => {

        await testeServer.post('/cadastrar').send({ nome: 'Teste', email: 'teste@email.com', senha: '123456' })
        const signInRes = await testeServer.post('/entrar').send({ email: 'teste@email.com', senha: '123456' })

        accessToken = signInRes.body.accessToken
    })


    it('Apagar registro que não existe', async () => {

        const res1 = await testeServer
            .delete('/cidades/1000')
            .set('Authorization', `Bearer ${accessToken}`)
            .send()

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
    })
}) 