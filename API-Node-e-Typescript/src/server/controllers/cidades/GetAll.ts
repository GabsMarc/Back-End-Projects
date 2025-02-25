import { Request, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middleware"
import { StatusCodes } from "http-status-codes";



export const GetAllValidation = validation({
    query: yup.object().shape({
        page: yup.number().notRequired().moreThan(0),
        limit: yup.number().notRequired().moreThan(0),
        filter: yup.string().notRequired(),
    })
});





export async function getAll(req: Request, res: Response) {


    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!')

}