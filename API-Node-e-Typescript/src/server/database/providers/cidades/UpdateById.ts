import { Knex } from "../../Knex";
import { ICidade } from "../../models";


export const UpdateById = async (id: number, nome: Omit<ICidade, 'id'>): Promise<void | Error> => {

    try {

        await Knex('cidade').where('id', '=', id).update({nome: nome.nome})

        return
        
    } catch (error) {
        return new Error('Não foi possivel fazer a alteração.')
    }
}