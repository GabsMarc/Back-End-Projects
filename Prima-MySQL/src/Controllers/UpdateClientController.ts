import { Request, Response } from "express";
import { UpdateClientService } from "../Services/UpdateClientService";

export class UpdateClientController {

    async handle(request: Request, response: Response){

        const updateClientController = new UpdateClientService()
        const Update = await updateClientController.execute(request, response)

        return response.send(Update)

    }
}