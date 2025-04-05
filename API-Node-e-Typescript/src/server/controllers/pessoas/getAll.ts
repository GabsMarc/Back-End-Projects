import { Request, Response } from "express"
import { PessoasProvider } from "../../database/providers/pessoas"
import { StatusCodes } from "http-status-codes"



export const getAll = async (req: Request, res: Response) => {


    const result = await PessoasProvider.getAll()


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