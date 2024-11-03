import { Request, Response } from "express"
import { PostNewClientService } from "../Services/PostNewClientService"


export class PostNewClientController {

    async handle(request: Request, response: Response) {

        
        const postNewService = new PostNewClientService()
        const service = await postNewService.execute(request, response)

        return response.json(service)
    }
}