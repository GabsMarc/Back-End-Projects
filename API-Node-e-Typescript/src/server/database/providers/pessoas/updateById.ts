import { ETableNames } from "../../ETableName"
import { Knex } from "../../Knex"


export const updateById = async (id: number, nome: string): Promise<void | Error> => {

    try {

        const result = await Knex(ETableNames.pessoa).where('id', '=', id).update('nome', nome).returning('id')

        if (result.length > 0) return

        return new Error('Usuário não encontrado.')

    } catch (error) {
        console.log(error)
        return new Error('Não foi possível atualizar o cadastro desse usuário.')
    }


}