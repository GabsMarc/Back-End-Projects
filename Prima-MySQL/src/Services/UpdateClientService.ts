import { Request, Response } from 'express';
import prismaClient from '../../prisma';

export class UpdateClientService {
    
    async execute(request: Request, response: Response) {

        const { id, param } = request.body

        
        const update = prismaClient.client.update({
            where: {
                id: parseInt(id as string)
            },
            data: {
                name: param
            }
        })
        
        return update
    } 
}