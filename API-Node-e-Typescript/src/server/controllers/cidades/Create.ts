import { Request, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middleware"


interface ICidade {
    nome: string,
    estado: string
}

interface IFilter {
    filtro: string,
    teste: string
}

export const createValidation = validation({
    body: yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(3)
    }),
    query: yup.object().shape({
        filtro: yup.string().required().min(3)
    })
});



export async function create(req: Request<{}, {}, ICidade>, res: Response) {

    console.log(req.body)

    res.send("Create!")

}