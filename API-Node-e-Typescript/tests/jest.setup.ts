import supertest from "supertest"
import { server } from "../src/server/server"
import { Knex } from "../src/server/database/Knex"


beforeAll(async () => {
    await Knex.migrate.latest()
    await Knex.seed.run()
})

afterAll(async () => {
    await Knex.destroy()
})



export const testeServer = supertest(server)




