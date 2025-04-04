import { Knex } from "knex";
import { ETableNames } from "../ETableName";



export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.pessoa, table => {
            table.bigIncrements('id').primary().index()
            table.string('nome').index().notNullable()
            table.string('sobrenome').index().notNullable()
            table.string('email', 150).unique().notNullable()

            table
                .bigInteger('idCidade')
                .index()
                .notNullable()
                .references('id')
                .inTable(ETableNames.cidade)
                .onUpdate('CASCADE')
                .onDelete('RESTRICT')


            table.comment('Tabela usada para armazenar usuários do sistema.')
        })
        .then(() => {
            console.log(`# Create Table ${ETableNames.pessoa}`)
        })
}


export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(ETableNames.pessoa)
        .then(() => {
            console.log(`# Drop Table ${ETableNames.pessoa}`)
        })
}