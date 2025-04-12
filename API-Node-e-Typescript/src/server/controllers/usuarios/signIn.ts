import { Request, Response } from "express"
import { UsuariosProvider } from "../../database/providers/usuarios"
import { validation } from "../../shared/middleware"
import * as yup from 'yup'
import { StatusCodes } from "http-status-codes"
import { PasswordCrypto } from "../../shared/services"



export const signInValidation = validation({
    body: yup.object().shape({
        email: yup.string().required().email().min(5),
        senha: yup.string().required().min(6)
    })
})



export const signIn = async (req: Request, res: Response) => {

    const { email, senha } = req.body




    const result = await UsuariosProvider.getByEmail(email)

    if (result instanceof Error) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            error: {
                default: 'Email ou senha são inválidos'
            }
        })
        return
    }


    const passwordMatch = await PasswordCrypto.verifyPassword(senha, result.senha)

    if (!passwordMatch) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            error: {
                default: 'Email ou senha são inválidos'
            }
        })
        return
    } else {
        res.status(StatusCodes.OK).json({
            accessToken: 'teste.teste.teste'
        })
        return
    }


    // res.status(StatusCodes.CREATED).json(result)

}