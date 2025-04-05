import { ETableNames } from "../../ETableName"
import { Knex } from "../../Knex"


export const updateById = async (id: number, nome: string): Promise<void | Error> => {

    try {

        await Knex(ETableNames.pessoa).where('id', '=', id).update('nome', nome)

    } catch (error) {
        return new Error('Não foi possível atualizar o cadastro desse usuário.')
    }

}