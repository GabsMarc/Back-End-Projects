import { StatusCodes } from "http-status-codes"
import { testeServer } from "../jest.setup"



describe('Pessoas - Create', () => {


    let accessToken = ''
    beforeAll(async () => {

        await testeServer.post('/cadastrar').send({ nome: 'Teste', email: 'teste@email.com', senha: '123456' })
        const signInRes = await testeServer.post('/entrar').send({ email: 'teste@email.com', senha: '123456' })

        accessToken = signInRes.body.accessToken
    })


    it('Criar um registro na tabela Pessoas', async () => {

        const test1 = await testeServer
            .post('/pessoas')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({
                nome: "Lais",
                sobrenome: "Zerbo",
                email: "laislindinha@gmail.com",
                idCidade: 40
            })

        expect(test1.status).toEqual(StatusCodes.CREATED)
    })

}) 