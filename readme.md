# 📚 DevQuiz CLI

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Inquirer.js](https://img.shields.io/badge/Inquirer.js-FF69B4?style=for-the-badge&logo=npm&logoColor=white)

Um quiz de programação simples e interativo para o terminal, construído com **TypeScript** e **Node.js**. Este projeto consome uma API externa para buscar perguntas e oferece uma experiência de quiz diretamente na linha de comando.

---

## 🌟 Sobre o Projeto

O **DevQuiz CLI** foi criado como um projeto de estudo para aprofundar conhecimentos em:

* **Consumo de APIs RESTful**: Integrando dados de uma API externa de forma assíncrona.
* **Programação Assíncrona**: Utilizando `async/await` para um fluxo de código mais limpo.
* **Estrutura de Projeto**: Aplicando princípios de separação de responsabilidades (Service, Controller, CLI).
* **Tipagem com TypeScript**: Garantindo maior segurança e clareza no código.
* **Interação com o Usuário**: Desenvolvendo uma interface de linha de comando amigável com `Inquirer.js`.

---

## ✨ Funcionalidades

* Busca de perguntas de programação de uma API externa.
* Múltiplas opções de resposta para cada pergunta.
* Feedback instantâneo sobre acerto ou erro.
* Contagem de pontuação final.
* Perguntas e opções embaralhadas para maior dinamismo.

---

## 🚀 Como Executar

Para rodar este projeto em sua máquina, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão 18 ou superior recomendada) e o [npm](https://www.npmjs.com/) (ou Yarn) instalados em seu sistema.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/marcosmvr/DevQuiz.git](https://github.com/marcosmvr/DevQuiz.git)
    cd devquiz
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

### Execução

Para iniciar o quiz, utilize o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

O quiz será iniciado no seu terminal, apresentando as perguntas uma a uma.

---

## 📁 Estrutura do Projeto

O projeto segue uma arquitetura modular para facilitar a manutenção e o entendimento:

```
devquiz/
├── src/
│   ├── cli/
│   │   └── quiz-cli.ts           # Lógica principal da interface de linha de comando.
│   ├── controllers/
│   │   └── quiz-controller.ts    # Orquestra a lógica de negócio do quiz.
│   ├── services/
│   │   └── quiz-service.ts       # Lida com a comunicação com a API externa e formatação dos dados.
│   └── utils/
│       └── shuffle.ts            # Funções utilitárias, como embaralhar arrays.
├── package.json                  # Dependências e scripts do projeto.
├── tsconfig.json                 # Configurações do TypeScript.
└── README.md                     # Este arquivo.
```

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Se você tiver sugestões, encontrar um bug ou quiser adicionar novas funcionalidades, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---


## 📞 Contato

Se você tiver alguma dúvida ou sugestão, pode entrar em contato através do meu perfil no GitHub.

---

✨ Feito com ❤️ por [Marcos]
```