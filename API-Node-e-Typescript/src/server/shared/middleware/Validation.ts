import { RequestHandler } from "express"
import { StatusCodes } from "http-status-codes"
import { ValidationError, ObjectSchema } from "yup"



type TProperty = 'body' | 'header' | 'params' | 'query'

type TAllSchemas = Record<TProperty, ObjectSchema<any>>

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler




export const validation: TValidation = (schemas) => async (req, res, next) => {

    const errorsResult: Record<string, Record<string, string>> = {}


    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key as TProperty], { abortEarly: false })
        } catch (error) {
            const yupError = error as ValidationError
            const errors: Record<string, string> = {}

            yupError.inner.forEach(error => {
                if (!error.path) return
                errors[error.path] = error.message
            })

            errorsResult[key] = errors

        }
    })

    if (Object.entries(errorsResult).length === 0) {
        return next()
    } else {
        res.status(StatusCodes.BAD_REQUEST).json({
            error: errorsResult
        })
    }

}
