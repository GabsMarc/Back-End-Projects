import { ETableNames } from "../../ETableName"
import { Knex } from "../../Knex"
import { IPessoa } from "../../models"


export const getAll = async (): Promise<IPessoa[] | Error> => {

    try {

        const result = await Knex(ETableNames.pessoa).select('*')

        return result

    } catch (error) {
        return new Error('Erro ao fazer a consulta.')
    }


}