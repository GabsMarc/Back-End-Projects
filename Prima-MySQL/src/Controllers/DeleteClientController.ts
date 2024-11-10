import { Request, Response } from "express";
import { DeleteClientService } from "../Services/DeleteClientService";


export class DeleteClientController {

    async handle(request: Request, response: Response){

        const deleteClientController = new DeleteClientService() 
        const Del = await deleteClientController.execute(request, response)

        return response.send(Del)

    }

}