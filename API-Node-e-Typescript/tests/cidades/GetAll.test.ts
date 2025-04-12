import { StatusCodes } from "http-status-codes"
import { testeServer } from "../jest.setup"


describe('Cidades -- GetAll', () => {

    it('Solicitar todos os registros da tabela cidade', async () => {

        const test1 = await testeServer
            .get('/cidades')
            .set('Authorization', `Bearer teste.teste.teste`)

        expect(test1.statusCode).toEqual(StatusCodes.OK)
    })
})