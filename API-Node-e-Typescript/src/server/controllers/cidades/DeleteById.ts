import { Request, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middleware"
import { StatusCodes } from "http-status-codes";
import { CidadesProvider } from "../../database/providers/cidades";



export const deleteByIdValidation = validation({
    params: yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    })
});






export async function deleteById(req: Request, res: Response): Promise<void> {

    
    if (!req.params.id) {
        res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id" precisa ser informado.'
            }
        })
        return
    }


    const result = await CidadesProvider.deleteByID(parseInt(req.params.id))

    if (result instanceof Error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })

        return
    }



    res.status(StatusCodes.NO_CONTENT).json(result)

}