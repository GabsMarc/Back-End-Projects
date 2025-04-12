import { StatusCodes } from "http-status-codes"
import { testeServer } from "../jest.setup"



describe('Usuarios --- SignUp', () => {

    it('Teste de cadatro do usuario', async () => {

        const test = await testeServer
            .post('/cadastrar')
            .send({
                nome: "Gabriel",
                email: "gamarcucci@gmail.com",
                senha: "123456"
            })

            expect(test.status).toEqual(StatusCodes.CREATED)

    })

})