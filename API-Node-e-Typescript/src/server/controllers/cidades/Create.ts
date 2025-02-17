import { NextFunction, Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'


interface ICidade {
    nome: string,
    estado: string
}


const bodyValidation = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
})



export async function createBodyValidator (req: Request, res: Response, next: NextFunction){

    try {
        await bodyValidation.validate(req.body, { abortEarly: false })
        return next()
    } catch (error) {
        const yupError = error as yup.ValidationError
        const errors: Record<string, string> = {}

        yupError.inner.forEach(error => {
            if (!error.path) return
            errors[error.path] = error.message
        })
        res.status(StatusCodes.BAD_REQUEST).json({
            error: errors
        })
    }
}




export async function create(req: Request<{}, {}, ICidade>, res: Response){

    console.log('ebaa')

    res.send(req.body.nome + " entrou no CREATE")

}