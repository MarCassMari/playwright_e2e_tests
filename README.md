## 🚀 Objetivo do projeto :
  Rodar testes automatizados para os cenários mais estáveis de um fluxo de compras dentro de um E-commerce público. 

## 🛠️ Tecnologias e Ferramentas

| Tecnologia | Descrição | Ícone | Documentação |
| :--- | :--- | :---: | :--- |
| **Playwright** | Framework de automação E2E para UI e API. | 🎭 | [Acessar Doc](https://playwright.dev/) |
| **TypeScript** | Linguagem principal para tipagem e segurança. | 📘 | [Acessar Doc](https://www.typescriptlang.org/) |
| **Node.js** | Ambiente de execução do projeto. | 🟢 | [Acessar Doc](https://nodejs.org/) |
| **GitHub Actions** | Orquestração de CI/CD e execução em nuvem. | 🚀 | [Acessar Doc](https://github.com/features/actions) |
| **Postman** | Documentação e testes manuais de API. | 🟠 | [Acessar Doc](https://learning.postman.com/) |
| **Zod** | Validação de schemas e contratos de API. | 🛡️ | [Acessar Doc](https://zod.dev/) |




## Como Executar o Projeto

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina (recomendo versão 18 ou superior).

### 2. Instalação
Clone o repositório e instale as dependências:
```bash
git clone https://github.com/MarCassMari/playwright_e2e_tests
cd onlyfly
npm install
```

### 3. 🔑 Configuração de Variáveis de Ambiente

Para rodar os testes de API localmente, é necessário configurar as credenciais de acesso. O projeto já conta com um arquivo de base para facilitar esse processo:
  Localize o arquivo **.env.example** na raiz do projeto.

  Duplique-o e renomeie a cópia para apenas **.env**

  Preencha as chaves com seus dados da API GoRest:

```bash
GOREST_BASE_URL=https://gorest.co.in/public/v2
GOREST_TOKEN=insira_seu_token_aqui_sem_aspas
```

Instalando as dependências do projeto:

```bash
npx playwright install
```

### 4.1. Executando os Testes E2E:

```bash
npx playwright test
```
4.2. Modo UI(Interface Visual):
```bash
npx playwright test --ui
```

### 🧪5. Cenários Automatizados(E2E):  
Abordamos cenários que cobrem o Core Business (coração do negócio) do E-commerce SauceDemo

    1. Fluxo de Compra Feliz (Happy Path)
    2. Validação de Regras de Negócio e Cálculos
    3. Gestão de Estado do Carrinho
    4. Testes de Resiliência (Cenários de Erro)



### 📝 Resumo da Entrega Final

Este projeto entrega um **framework de automação E2E robusto e escalável**, desenvolvido com foco em qualidade de software e manutenibilidade. A solução vai além de simples scripts, aplicando conceitos fundamentais de engenharia:

* **Arquitetura Multicamadas**: Implementação rigorosa do padrão **Page Object Model (POM)**, garantindo a separação entre a lógica de teste e a interação com elementos da interface.
* **Programação Orientada a Objetos (POO)**: Utilização de classes e métodos para encapsular comportamentos, facilitando a reutilização de código e a legibilidade dos cenários.
* **Isolamento e Independência**: Testes desenhados para serem independentes, com setups e cleanups que garantem a confiabilidade da execução (evitando estados compartilhados).
* **Qualidade Contínua (CI/CD)**: Pipeline totalmente integrada via GitHub Actions, validando o projeto em múltiplos motores de renderização (Chromium e Firefox) a cada nova alteração.
* **Testes de API com Validação de Contrato**: Além da UI, o projeto integra validações de camada de serviço utilizando **Zod**, garantindo que a comunicação com o backend siga rigorosamente os schemas e status definidos.
