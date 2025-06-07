import { obterPerguntasController } from '@/controllers/quiz-controller'

export async function quizRoutes(app: any) {
  app.get('/quiz', obterPerguntasController)
}
