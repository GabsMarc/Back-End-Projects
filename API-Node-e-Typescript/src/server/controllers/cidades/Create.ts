import { Request, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middleware"
import { StatusCodes } from "http-status-codes";
import { CidadesProvider } from "../../database/providers/cidades";



export const createValidation = validation({
    body: yup.object().shape({
        nome: yup.string().required().min(3)
    })
});





export async function create(req: Request, res: Response) {

    const result = await CidadesProvider.create(req.body)

    if (result instanceof Error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }



    res.status(StatusCodes.CREATED).json(result)

}