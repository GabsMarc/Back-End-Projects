import { Knex } from "../../Knex"
import { ICidade } from "../../models"




export const getById = async (id: number): Promise<ICidade | Error> => {

    try {

        const [result] = await Knex.select('*').from('cidade').where('id', '=', id)

        return result 


    } catch (error) {
        return new Error("Erro ao fazer a consulta.")
    }

     
}