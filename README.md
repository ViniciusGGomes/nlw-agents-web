# NLW Agents - Web

Interface web desenvolvida em React para o projeto **NLW Agents**, uma plataforma de assistência por IA para live streams. Este projeto representa o lado do cliente (client-side) da aplicação, consumindo a API do https://github.com/ViniciusGGomes/nlw-agents-server.

## 💡 Sobre o Projeto

Esta aplicação fornece a interface para que os usuários possam interagir com o assistente de IA. Através dela, é possível criar "salas" para as transmissões, fazer perguntas, ver o histórico de Q&A e, mais importante, gerenciar a gravação de áudio que alimenta a inteligência artificial do backend.

## 📸 Telas da Aplicação

<p align="center">
<img alt="Página de criação e listagem de salas" width="1910" height="950" alt="Image" src="https://github.com/user-attachments/assets/08488cb5-7be7-4150-9126-62ad1f76fc66" />
<img alt="Página interna da sala de perguntas" width="1911" height="944" alt="Image" src="https://github.com/user-attachments/assets/a9f9636d-c879-4cff-a9c8-9ad702dd022e" />  
<img alt="Página de gravação de áudio" width="1920" height="944" alt="Image" src="https://github.com/user-attachments/assets/aa39d0e7-8d6a-448d-9bf1-aa382941e434" />
</p>

## ✨ Principais Funcionalidades

- **Gerenciamento de Salas**: Crie e visualize salas para organizar as sessões de perguntas e respostas.
- **Histórico de Q&A**: Visualize o histórico de perguntas feitas e as respostas geradas pela IA em cada sala.
- **Criação de Perguntas**: Submeta novas perguntas através de um formulário com validação.
- **Atualizações Otimistas**: Ao criar uma nova pergunta, a UI é atualizada instantaneamente para uma experiência de usuário mais fluida e responsiva.
- **Gravação de Áudio**: Uma página dedicada permite a gravação de áudio, que é enviado em tempo real para o backend em pedaços (chunks) de 5 segundos.

## 🛠️ Tecnologias Utilizadas

- **Framework**: React com Vite
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes de UI**: `shadcn/ui`
- **Roteamento**: React Router DOM
- **Gerenciamento de Estado do Servidor**: TanStack Query (React Query)
- **Formulários e Validação**: React Hook Form & Zod
- **Manipulação de Datas**: Day.js

## 🔌 Conexão com o Backend

Este projeto foi projetado para funcionar em conjunto com o https://github.com/ViniciusGGomes/nlw-agents-server. Todas as chamadas de API (para buscar salas, criar perguntas, fazer upload de áudio, etc.) são feitas para a API RESTful exposta pelo servidor. Portanto, é essencial que o servidor backend esteja em execução para que esta aplicação web funcione corretamente.

## 🚀 Como Começar

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (v20 ou superior)
- Um gerenciador de pacotes ([npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/))
- O **servidor backend** ([NLW Agents - Server](https://www.google.com/search?q=https://github.com/ViniciusGGomes/nlw-agents-server)) deve estar rodando localmente.
