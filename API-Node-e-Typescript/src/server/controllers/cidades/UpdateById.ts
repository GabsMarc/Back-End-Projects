import { Request, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middleware"
import { StatusCodes } from "http-status-codes";
import { CidadesProvider } from "../../database/providers/cidades";



export const updateByIdValidation = validation({
    params: yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }),
    body: yup.object().shape({
        nome: yup.string().required().min(3)
    })
});





export async function updateById(req: Request, res: Response) {


    if (!req.params.id) {
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id" precisa ser informado.'
            }
        })
    }


    const result = await CidadesProvider.UpdateById(parseInt(req.params.id), req.body)

    if (result instanceof Error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }


    res.status(StatusCodes.NO_CONTENT).json(result)

}