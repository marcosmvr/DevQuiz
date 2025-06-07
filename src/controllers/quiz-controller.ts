import { buscarPerguntas } from '@/services/quiz-service'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function obterPerguntasController(request: FastifyRequest, reply: FastifyReply) {
  const perguntas = await buscarPerguntas(2)
  reply.send(perguntas)
}
