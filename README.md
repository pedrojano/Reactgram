# 📖 Sobre o Projeto

O **ReactGram** é uma rede social Full-Stack inspirada no Instagram, desenvolvida para simular e dominar a arquitetura **MERN Stack** (MongoDB, Express, React e Node.js). O foco principal deste projeto foi construir uma aplicação robusta com autenticação segura, persistência de dados e um fluxo de gerenciamento de estado complexo e eficiente.

A aplicação permite que usuários façam login, gerenciem perfis, publiquem fotos, interajam com likes e comentários, e visualizem feeds em tempo real.

## ✨ Conquistas Técnicas e Funcionalidades

| Categoria | Funcionalidades Implementadas |
| :--- | :--- |
| **Arquitetura** | Arquitetura limpa (`backend/frontend`), separação de responsabilidades em `services` e uso do **Redux Toolkit** para estado global. |
| **Segurança** | Autenticação via **JWT** (JSON Web Tokens), criptografia de senhas com **Bcrypt**, e uso de `authGuard` em rotas protegidas. |
| **Dados & API** | CRUD completo de fotos, likes e comentários. Lógica para **exclusão em cascata** (deletar fotos ao deletar usuário) e controle de acesso (curtir, comentar e editar apenas em recursos próprios). |
| **Mídia** | **Upload de Mídias** com **Multer**, manuseio correto do `FormData` no frontend e criação automática de diretórios de upload no backend. |
| **Performance** | Otimização do `useEffect` e `useMemo` para evitar *re-renders* desnecessários e correção de erros de renderização concorrente. |

## 🚀 Tecnologias Utilizadas

### Front-end (`/frontend`)
-   **React:** Biblioteca JavaScript para a UI.
-   **Redux Toolkit (RTK):** Gerenciamento de estado global.
-   **React Router DOM:** Roteamento do lado do cliente.
-   **Custom Hooks:** Para lógica de autenticação e mensagens.

### Back-end (`/back-end`)
-   **Node.js & Express:** Servidor e framework de API.
-   **MongoDB & Mongoose:** Banco de dados NoSQL e modelagem de dados.
-   **JWT:** Geração e validação de tokens de autenticação.
-   **Multer:** Processamento de formulários `multipart/form-data` para uploads.

## ⚙️ Instalação e Execução

### Pré-requisitos
-   Node.js (v16+)
-   Conta no MongoDB Atlas (ou MongoDB local)

### 1. Clonar o Repositório

```
git clone [https://github.com/pedrojano/Reactgram.git](https://github.com/pedrojano/Reactgram.git)
cd Reactgram
```
### 2. Configurar o Back-end
Navegue até a pasta back-end e instale as dependências:

```
cd back-end
npm install
```
### 3. Crie o arquivo .env e insira suas credenciais (o uploads será criado automaticamente):
Snippet de código:
````
PORT=5000
DB_USER=seu_usuario_atlas
DB_PASS=sua_senha_atlas
JWT_SECRET=uma_chave_secreta_longa_e_aleatoria
````
### 4. Inicie o servidor:

```
npm run server
```
O servidor estará rodando em http://localhost:5000

### 5. Configurar o Front-end
Em um novo terminal, navegue até a pasta frontend e instale as dependências:

````
cd ../frontend
npm install
````

### 6. Crie o arquivo .env (na pasta frontend) para a URL da API:
Snippet de código
````
REACT_APP_API=http://localhost:5000/api
Inicie a aplicação React:
````
### 7. No terminal do Front-end rode o comando:
````
npm run start
````
A aplicação estará acessível em http://localhost:3000.

✍️ Autor
Pedro Henrique Janó
