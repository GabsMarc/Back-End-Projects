import { ETableNames } from "../../ETableName"
import { Knex } from "../../Knex"
import { ICidade } from "../../models"



export const create = async (cidade: ICidade): Promise<number | Error> => {

    try {

        const [result] = await Knex(ETableNames.cidade).insert(cidade).returning('id')

        if (typeof result === 'object') {
            return result.id
        } else if (typeof result === 'number') {
            return result
        }

        return new Error('Erro ao cadastrar o registro')
    } catch (error) {
        console.log(error)
        return new Error('Erro ao cadastrar o registro')
    }

}