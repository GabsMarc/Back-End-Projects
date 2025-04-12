import { StatusCodes } from "http-status-codes"
import { testeServer } from "../jest.setup"



describe('Pessoas - Create', () => {

    it('Criar um registro na tabela Pessoas', async () => {

        const test1 = await testeServer
            .post('/pessoas')
            .set('Authorization', `Bearer teste.teste.teste`)
            .send({
                nome: "Lais",
                sobrenome: "Zerbo",
                email: "laislindinha@gmail.com",
                idCidade: 40
            })

        expect(test1.status).toEqual(StatusCodes.CREATED)
    })

}) 