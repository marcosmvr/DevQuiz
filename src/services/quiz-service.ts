import { shuffleArray } from '@/utils/shuffle'
import axios from 'axios'
import { randomUUID } from 'crypto'
import 'dotenv/config'

const API_BASE_URL = process.env.API_QUIZ_URL

type PerguntaDaAPI = {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

type PerguntaFormatada = {
  id: string
  question: string
  options: string[]
  correct_answer: string
}

interface buscarPerguntasResponse {
  results: PerguntaFormatada[]
}

export async function buscarPerguntas(
  qtd: number,
): Promise<PerguntaFormatada[]> {
  try {
    const response = await axios.get(
      `<span class="math-inline">\{API\_BASE\_URL\}?amount\=</span>{qtd}&category=18&type=multiple`,
    )

    const perguntasBrutas: PerguntaDaAPI[] = response.data.results

    const perguntasFormatadas: PerguntaFormatada[] = perguntasBrutas.map(
      pergunta => {
        const todasAsOpcoes = shuffleArray([
          ...pergunta.incorrect_answers,
          pergunta.correct_answer,
        ])

        return {
          id: randomUUID(),
          question: pergunta.question,
          options: todasAsOpcoes,
          correct_answer: pergunta.correct_answer,
        }
      },
    )

    return shuffleArray(perguntasFormatadas)
  } catch (err) {
    console.error('Erro ao buscar perguntas da API')
    return []
  }
}
