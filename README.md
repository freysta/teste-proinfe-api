API de teste para o processo seletivo da Proinfe.

## Sobre o Projeto

Esta é uma API desenvolvida com [NestJS](https://nestjs.com/) e [Prisma](https://www.prisma.io/)

- [Node.js](https://nodejs.org/en/) (versão 22.x ou superior)
- [NPM](https://www.npmjs.com/)

1. Clone o repositório:
   git clone https://github.com/seu-usuario/teste-proinfe-api.git
2. Navegue até o diretório do projeto:
   cd teste-proinfe-api
3. Instale as dependências:
   npm install

Este projeto utiliza o [Prisma](https://www.prisma.io/) para o gerenciamento do banco de dados.

    Crie um arquivo `.env` na raiz do projeto e adicione a variável de ambiente `DATABASE_URL` com a string de conexão do seu banco de dados.
    ```
    DATABASE_URL="mysql://user:password@localhost:5432/mydatabase?schema=public"
    ```
    O comando abaixo irá criar as tabelas no seu banco de dados com base no schema do Prisma.
    ```
    prisma db pull
    ```

Para iniciar a aplicação

npm run start:dev

A aplicação estará disponível em `http://localhost:3000`.

O [Swagger](https://swagger.io/) e está disponível em `http://localhost:3000/api` quando a aplicação está em execução.
