import { ETableNames } from "../../ETableName"
import { Knex } from "../../Knex"
import { IUsuario } from "../../models"


export const getByEmail = async (email: string): Promise<IUsuario | Error> => {

    try {

        const result = await Knex(ETableNames.usuario)
        .select('*')
        .where('email', '=', email)
        .first()

        if (result) return result

        return new Error('Registro não encontrado.')
    } catch (error) {
        return new Error('Erro ao encontrar o registro.')
    }

}