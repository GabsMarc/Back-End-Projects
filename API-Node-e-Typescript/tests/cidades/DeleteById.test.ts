import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";


describe('Cidades - DeleteByID', () => {

    it('Apagar registro que não existe', async () => {

        const res1 = await testeServer
            .delete('/cidades/1000')
            .set('Authorization', `Bearer teste.teste.teste`)
            .send()

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
    })
}) 