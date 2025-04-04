import { ETableNames } from "../../ETableName"
import { Knex } from "../../Knex"


export const deleteByID = async (id: number): Promise<Error | void> => {
    try {
        const result = await Knex(ETableNames.cidade)
            .where('id', id)
            .del()

        if (result > 0) {
            return
        }

        return new Error('Não foi possível apagar o registro.')

    } catch (error) {
        console.error(error)
        return new Error('Erro ao deletar o registro.')
    }
}