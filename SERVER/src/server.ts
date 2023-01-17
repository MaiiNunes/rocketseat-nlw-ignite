import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

/**
 * Método HTTP: Get(buscar informação), Post(criar algo), Put(atualizar algo), Patch(atualizar informação especifica), Delete(deletar recurso )
*/

app.register(cors)

app.get('/', async () => {
    const habits = await prisma.habit.findMany()

    return habits
})

/**Rota no navegador(localhost:3333) */
app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})
