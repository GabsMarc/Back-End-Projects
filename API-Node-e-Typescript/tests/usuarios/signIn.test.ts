import { StatusCodes } from "http-status-codes"
import { testeServer } from "../jest.setup"



describe('Usuarios --- SignIn', () => {

    it('Tentar fazer o login', async () => {


        await testeServer
            .post('/cadastrar')
            .send({
                nome: "Gabriel",
                email: "gamarcucc@gmail.com",
                senha: "123456"
            })


        const test = await testeServer
            .post('/entrar')
            .send({
                email: "gamarcucc@gmail.com",
                senha: "123456"
            })

        expect(test.status).toEqual(StatusCodes.OK)

    })



    it('Entrar com um email errado', async () => {

        await testeServer
            .post('/cadastrar')
            .send({
                nome: "Gabriel",
                email: "marcucci@gmail.com",
                senha: "123456"
            })


        const test = await testeServer
            .post('/entrar')
            .send({
                email: "marcucc@gmail.com",
                senha: "123456"
            })

        expect(test.status).toEqual(StatusCodes.UNAUTHORIZED)


    })

})