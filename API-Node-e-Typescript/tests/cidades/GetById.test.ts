import { StatusCodes } from "http-status-codes"
import { testeServer } from "../jest.setup"


describe('Cidades -- GetById', () => {

    it('Solicitar cidade por ID', async () => {

        const test1 = await testeServer
            .get('/cidades')
            .set('Authorization', `Bearer teste.teste.teste`)

        expect(test1.status).toEqual(StatusCodes.OK)
    })
})