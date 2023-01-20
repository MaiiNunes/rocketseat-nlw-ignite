import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

/**Rota no navegador(localhost:3333) */
app.listen({
    port: 3333,
    host: '0.0.0.0',
  }).then(() => {
    console.log('HTTP Server running!')
  })