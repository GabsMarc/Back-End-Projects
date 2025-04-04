import { StatusCodes } from 'http-status-codes';
import { testeServer } from './../jest.setup';



describe('Cidades - Create', () => {


    it('Cria Registro', async () => {

        const res1 = await testeServer
            .post('/cidades')
            .send({ nome: 'Caxias do Sul' })


        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(typeof res1.body).toEqual('number')
    })

    it('Tenta criar um registro com nome muito curto', async () => {

        const res1 = await testeServer
            .post('/cidades')
            .send({ nome: 'Ca' })


        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('error.body.nome')
    })


})