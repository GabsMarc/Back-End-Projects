import { Request, Response } from 'express';
import { GetClientService } from '../Services/GetClientService';


export class GetClientController {

    async handle(request: Request, response: Response){

        const getClientService = new GetClientService()
        const get = await getClientService.handle(request, response)

        return response.send(get)

    }
}