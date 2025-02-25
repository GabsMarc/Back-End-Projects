import { Request, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middleware"
import { StatusCodes } from "http-status-codes";



export const GetByIdValidation = validation({
    params: yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    })
});





export async function getById(req: Request, res: Response) {


    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!')

}