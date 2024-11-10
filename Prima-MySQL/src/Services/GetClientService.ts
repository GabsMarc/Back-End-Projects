import { Request, Response } from 'express';
import prismaClient from '../../prisma';
import { get } from 'http';

export class GetClientService {

    async handle(request: Request, response: Response){

        const get = await prismaClient.client.findMany({

        })


        return get
        
    }
    
}