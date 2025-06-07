# DevQuiz - Quiz de Programação e Ciência da Computação

## 🧠 Visão Geral

O **DevQuiz** é uma API REST que fornece quizzes sobre ciência da computação, programação e temas relacionados. O sistema permite que o usuário inicie uma sessão de perguntas de múltipla escolha, responda uma a uma e receba validações imediatas sobre acertos e erros.

As perguntas serão obtidas dinamicamente da API pública [Open Trivia Database](https://opentdb.com/) na categoria “Science: Computers”.

---

## 🎯 Objetivo

Criar uma aplicação back-end utilizando **Fastify** e **TypeScript**, aplicando princípios básicos de arquitetura limpa (Clean Architecture) e boas práticas de organização de código, validação e responsabilidade de serviços (princípios SOLID).

---

## 📌 Funcionalidades

- [ ] Obter uma lista de perguntas aleatórias sobre ciência da computação.
- [ ] Responder perguntas individualmente com validação da resposta correta.
- [ ] Controlar sessão de quiz por usuário (simulado via ID).
- [ ] Pontuação acumulativa por sessão.
- [ ] Possibilidade futura de rankings e níveis de dificuldade.

---

## 🔗 Integração externa

A API se conecta à Open Trivia DB com os seguintes parâmetros:

GET https://opentdb.com/api.php?amount=5&category=18&type=multiple

* `amount`: número de perguntas solicitadas.
* `category=18`: categoria "Science: Computers".
* `type=multiple`: somente perguntas de múltipla escolha.

---

## 🛠️ Tecnologias Recomendadas

* **Fastify** (framework HTTP rápido e modular)
* **TypeScript** (para tipagem segura)
* **Axios ou Node Fetch** (para chamadas HTTP)
* **Zod ou similar** (para validações)
* **uuid** (para IDs únicos de sessões)
* **Arquitetura limpa** (leve):

  * `/routes`
  * `/controllers`
  * `/services`
  * `/utils` (validações, formatações)
  * `/entities` (opcional)

---

## 📁 Estrutura Sugerida

```
src/
├── controllers/
│   └── quizController.ts
├── services/
│   └── quizService.ts
├── routes/
│   └── quizRoutes.ts
├── utils/
│   └── responseValidator.ts
├── main.ts
```

---

## 🔄 Fluxo de Uso

1. **Início da sessão:**

   * `GET /quiz?amount=5`
   * Resposta: array com 5 perguntas formatadas.

2. **Envio de resposta:**

   * `POST /quiz/answer`
   * Body:

     ```json
     {
       "sessionId": "abc-123",
       "questionId": "q1",
       "selectedAnswer": "HyperText Transfer Protocol"
     }
     ```
   * Resposta: se acertou, pontuação atual, próxima pergunta (ou fim).

---

## ✅ Regras de Validação

* Uma pergunta só pode ser respondida uma vez por sessão.
* Pontuação: +1 por acerto, 0 por erro.
* Respostas devem ser case-insensitive.
* Não há persistência em banco neste MVP. Sessões podem ser mantidas em memória (por exemplo, via Map).

---

## 🎨 Extras opcionais (não obrigatórios)

* Controle de tempo por pergunta (timer em segundos).
* Níveis de dificuldade (easy, medium, hard).
* Filtro por tipo de pergunta (verdadeiro/falso, múltipla escolha).
* Suporte a múltiplas categorias no futuro.
* Geração de relatório ao fim do quiz.

---

## 👨‍💻 Perfil do Desenvolvedor

Esse projeto é ideal para demonstrar domínio sobre:

* Requisições externas;
* Validações com TypeScript;
* Estruturação limpa de projetos back-end;
* Fastify e manipulação de rotas HTTP REST.

---

## 🧪 Testes (opcional)

* Recomendado utilizar `vitest` ou `jest` para testes unitários das validações de resposta e lógica de pontuação.
* Mocks podem ser utilizados para simular chamadas externas à API do Open Trivia.

