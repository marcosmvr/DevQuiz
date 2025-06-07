import fastify from 'fastify'
import { quizRoutes } from './routes/quiz-routes'

const app = fastify()

app.register(quizRoutes)

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Servidor rodando em ${address}`)
})
