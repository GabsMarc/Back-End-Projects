import { Knex } from "../../Knex"
import { IPessoa } from "../../models"


export const getById = async (id: number): Promise<IPessoa | Error> => {

    try {

        const result = await Knex
            .select('pessoa.*', 'cidade.nome as nomeCidade')
            .from('pessoa')
            .leftJoin('cidade', 'cidade.id', 'pessoa.idCidade')
            .where('pessoa.id', '=', id)
            .first()

        if (result) return result

        return new Error('Não foi possivel encontrar o usuário.')

    } catch (error) {
        console.log(error)
        return new Error('Erro ao fazer a consulta.')
    }


}