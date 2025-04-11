import { StatusCodes } from "http-status-codes"
import { testeServer } from "../jest.setup"



describe('Pessoas - Create', () => {

    it('Criar um registro na tabela Pessoas', async () => {

        const test1 = await testeServer
            .post('/pessoas')
            .send({
                nome: "Lais",
                sobrenome: "Zerbo",
                email: "laislindinha@gmail.com",
                idCidade: 40
            })

        expect(test1.status).toEqual(StatusCodes.CREATED)
    })

}) 