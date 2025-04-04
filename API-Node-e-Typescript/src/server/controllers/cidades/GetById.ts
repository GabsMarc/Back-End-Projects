import { Request, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middleware"
import { StatusCodes } from "http-status-codes";
import { CidadesProvider } from "../../database/providers/cidades";



export const GetByIdValidation = validation({
    params: yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    })
});





export async function getById(req: Request, res: Response) {

    if (!req.params.id) {
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id" precisa ser informado.'
            }
        })
    }

    const result = await CidadesProvider.getById(parseInt(req.params.id))

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }


    res.status(StatusCodes.OK).json(result)

}