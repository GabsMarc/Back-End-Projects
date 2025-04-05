import { Request, Response } from "express"
import { PessoasProvider } from "../../database/providers/pessoas"
import { validation } from "../../shared/middleware"
import * as yup from 'yup'
import { StatusCodes } from "http-status-codes"


export const delteByIdValidation = validation({
    params: yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    })
})



export const deleteById = async (req: Request, res: Response) => {


    const result = PessoasProvider.deleteById(Number(req.params.id))


    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: {
                default: result.message
            }
        })
        return
    }

    res.status(StatusCodes.OK).json(result)
}