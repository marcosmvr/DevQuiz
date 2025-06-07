import inquirer from 'inquirer'
import { iniciarQuiz } from '@/controllers/quiz-controller'

export async function quiz() {
  try {
    const perguntas = await iniciarQuiz(5)
    let pontuacao = 0

    console.log('⏳ Carregando perguntas...')

    for (const pergunta of perguntas) {
      const { resposta } = await inquirer.prompt([
        {
          type: 'list',
          name: 'resposta',
          message: pergunta.question,
          choices: pergunta.options,
        },
      ])

      if (resposta.toLowerCase() === pergunta.correct_answer.toLowerCase()) {
        pontuacao++
        console.log('✔️ Acertou!')
      } else {
        console.log(`❌ Errou! Resposta correta: ${pergunta.correct_answer}`)
      }
    }

    console.log(
      `\n🎉 Quiz finalizado! Pontuação: ${pontuacao} de ${perguntas.length}`,
    )
  } catch (error) {
    console.error('Ocorreu um erro inesperado ao iniciar o quiz')
  }
}

quiz()
