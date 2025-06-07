import axios from 'axios'

type Pergunta = {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string
}

interface buscarPerguntasResponse {
  results: Pergunta[]
}

export async function buscarPerguntas(quantidade: number): Promise<Pergunta[]> {
  try {
    const url = `https://opentdb.com/api.php?amount=${quantidade}&category=18&type=multiple`

    const response = await axios.get<buscarPerguntasResponse>(url)

    if (response.data && response.data.results) {
      return response.data.results
    }

    return []
  } catch (error) {
    console.error('Erro ao buscar perguntas: ', error)
    return []
  }
}
