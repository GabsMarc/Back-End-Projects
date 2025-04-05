import { Request, Response } from "express"
import { PessoasProvider } from "../../database/providers/pessoas"
import { validation } from "../../shared/middleware"
import * as yup from 'yup'
import { StatusCodes } from "http-status-codes"


export const getByIdValidation = validation({
    params: yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    })
})



export const getById = async (req: Request, res: Response) => {

    if (!req.params.id) {
        res.status(StatusCodes.BAD_REQUEST).json({
            error: new Error('É necessário infomar o ID para fazer a consulta.')
        })

        return
    }


    const result = await PessoasProvider.getById(Number(req.params.id))

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: {
                default: result.message
            }
        })
        return
    }


    res.status(StatusCodes.ACCEPTED).json(result)

}