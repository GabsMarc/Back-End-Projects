import { Request, Response } from "express"
import { PessoasProvider } from "../../database/providers/pessoas"
import { validation } from "../../shared/middleware"
import * as yup from 'yup'
import { StatusCodes } from "http-status-codes"


export const updateByIdValidation = validation({
    params: yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }),
    body: yup.object().shape({
        nome: yup.string().required().min(3)
    })
})



export const updateById = async (req: Request, res: Response) => {

    const result = await PessoasProvider.updateById(Number(req.params.id), req.body.nome)

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: {
                default: result.message
            }
        })
        return
    }

    res.status(StatusCodes.OK).json({
        status: 'Atualizado com sucesso.'
    })

}