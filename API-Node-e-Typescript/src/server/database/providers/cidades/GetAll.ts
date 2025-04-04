import { Knex } from "../../Knex"
import { ICidade } from "../../models"


export const GetAll = async (page: number, limit: number, filter: string, id: number): Promise<ICidade[] | Error> => {

    try {

        const result = await Knex.select('*').from('cidade').limit(limit)

        return result

    } catch (error) {
        return new Error("Erro ao fazer a consulta.")
    }

}