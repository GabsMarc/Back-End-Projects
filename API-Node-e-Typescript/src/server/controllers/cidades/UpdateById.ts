import { json, Request, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middleware"
import { StatusCodes } from "http-status-codes";



export const updateByIdValidation = validation({
    params: yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }),
    body: yup.object().shape({
        nome: yup.string().required().min(3)
    })
});





export async function updateById(req: Request, res: Response) {


    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(req.params)

}