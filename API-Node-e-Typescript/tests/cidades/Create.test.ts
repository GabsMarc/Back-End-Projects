import { StatusCodes } from 'http-status-codes';
import { testeServer } from './../jest.setup';



describe('Cidades - Create', () => {

    let accessToken = ''
    beforeAll(async () => {

        await testeServer.post('/cadastrar').send({ nome: 'Teste', email: 'teste@email.com', senha: '123456' })
        const signInRes = await testeServer.post('/entrar').send({ email: 'teste@email.com', senha: '123456' })

        accessToken = signInRes.body.accessToken
    })

    it('Cria Registro', async () => {

        const res1 = await testeServer
            .post('/cidades')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({ nome: 'Caxias do Sul' })


        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof res1.body).toEqual('number')
    })

    it('Tenta criar um registro com nome muito curto', async () => {

        const res1 = await testeServer
            .post('/cidades')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({ nome: 'Ca' })


        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('error.body.nome')
    })


})