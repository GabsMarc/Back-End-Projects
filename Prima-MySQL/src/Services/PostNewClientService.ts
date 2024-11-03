
import { Response, Request } from "express";
import prismaClient from "../../prisma";

export class PostNewClientService {


    async execute(request: Request, response: Response) { 

        const { name, lastname, age, email} = request.body

        try {

            if (!name || !lastname || !age || !email) {
                return "Todos os campos precisam ser preenchidos!"
            }
            
            const controller = await prismaClient.client.create({
                data: {
                    name: name,
                    lastname: lastname,
                    age: age,
                    email: email
                }
            })
    
            return controller


        } catch (error) {
            response.status(400).send('Não foi possivel criar o usuário.')
        }


    }
}