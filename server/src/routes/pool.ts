import { FastifyInstance } from 'fastify'
import ShortUniqueId from 'short-unique-id'
import { z } from 'zod'

import { prisma } from '../lib/prisma'

export async function poolRoutes(fastify: FastifyInstance) {
  fastify.get('/pools/count', async () => {
    const count = await prisma.pool.count()
    return { count }
  })

  fastify.post('/pools', async (request, reply) => {
    const createPollBody = z.object({
      title: z.string(),
    })

    const { title } = createPollBody.parse(request.body)

    const generate = new ShortUniqueId({ length: 6 })
    const code = String(generate()).toUpperCase()

    const ownerId = null

    try {
      await request.jwtVerify()

      // tenho um usuário autenticado
    } catch {
      // nao tenho um usuário autenticado ai eu crio
      await prisma.pool.create({
        data: {
          title,
          code,
          ownerId: request.user.sub,
        },
      })
    }

    return reply.status(201).send({ title, code })
  })
}
