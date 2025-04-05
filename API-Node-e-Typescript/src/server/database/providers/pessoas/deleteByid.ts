import { ETableNames } from "../../ETableName"
import { Knex } from "../../Knex"


export const deleteById = async (id: number): Promise<void | Error> => {

    try {
        
        const result = await Knex(ETableNames.pessoa).where('id', '=', id).del()

        if (result > 0) return 

        return new Error('Não foi possivel deletar esse usuário.')

    } catch (error) {
        return new Error('Erro ao deletar o usuário.')
    }

}