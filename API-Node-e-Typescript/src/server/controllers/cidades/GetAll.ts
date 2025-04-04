import { Request, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middleware"
import { StatusCodes } from "http-status-codes";
import { CidadesProvider } from "../../database/providers/cidades";


export const GetAllValidation = validation({
    query: yup.object().shape({
        page: yup.number().notRequired().moreThan(0),
        limit: yup.number().notRequired().moreThan(0),
        id: yup.number().integer().notRequired().default(0),
        filter: yup.string().notRequired(),
    })
});





export async function getAll(req: Request, res: Response) {

    const result = await CidadesProvider.GetAll(Number(req.query.page) || 1, Number(req.query.limit) || 7, req.params.filter || '', Number(req.query.id))

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: {
                default: result.message
            }
        })
    }


    res.status(StatusCodes.OK).json(result)

}