import { StatusCodes } from "http-status-codes"
import { testeServer } from "../jest.setup"


describe('Pessoas -- GetAll', () => {

    it('Buscar todos os registro da tabela Pessoa', async () => {

        const test1 = await testeServer
            .get('/pessoas')
            .set('Authorization', `Bearer teste.teste.teste`)

        expect(test1.status).toEqual(StatusCodes.OK)    

    })

})