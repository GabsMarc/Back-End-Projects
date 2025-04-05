import { validation } from "../../shared/middleware"
import * as yup from "yup"
import { PessoasProvider } from '../../database/providers/pessoas';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";


export const createValidation = validation({
    body: yup.object().shape({
        nome: yup.string().required(),
        sobrenome: yup.string().required(),
        email: yup.string().required(),
        idCidade: yup.number().required()
    })
})


export const create = async (req: Request, res: Response) => {


    const result = await PessoasProvider.create(req.body)

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: {
                default: result.message
            }
        })
        return 
    }

    res.status(StatusCodes.CREATED).json(result)


}