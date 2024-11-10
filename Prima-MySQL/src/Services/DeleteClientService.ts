import { Request, Response } from "express";
import prismaClient from "../../prisma";


export class DeleteClientService {

    async execute(request: Request, response: Response){

        const {id} = request.body

        const Del = await prismaClient.client.delete({
            where: {
                id: parseInt(id as string)
            }
        })

        return Del

    }
}