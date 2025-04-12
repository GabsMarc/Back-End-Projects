import { Request, Response } from "express"
import { UsuariosProvider } from "../../database/providers/usuarios"
import { validation } from "../../shared/middleware"
import * as yup from 'yup'
import { StatusCodes } from "http-status-codes"



export const signUpValidation = validation({
    body: yup.object().shape({
        nome: yup.string().required().min(3),
        email: yup.string().required().email().min(5),
        senha: yup.number().required().min(6)
    })
})



export const signUp = async (req: Request, res: Response)  => {


    const result = await UsuariosProvider.create(req.body)

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