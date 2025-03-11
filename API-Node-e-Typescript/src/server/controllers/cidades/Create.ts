import { Request, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middleware"
import { StatusCodes } from "http-status-codes";



export const createValidation = validation({
    body: yup.object().shape({
        nome: yup.string().required().min(3)
    })
});





export async function create(req: Request, res: Response) {


    res.status(StatusCodes.CREATED).json(1)

}