import { server } from './server/server'

server.listen(process.env.PORT || 3333, () =>
  console.log(`Entrou na rota ${process.env.PORT || 3333}`),
)
