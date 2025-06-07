import { buscarPerguntas } from '@/services/quiz-service'

export async function iniciarQuiz(qtd: number) {
  const perguntas = await buscarPerguntas(qtd)
  return perguntas
}
