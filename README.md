# food_explorer_frontend e food_explorer_backend

O projeto é um menu interativo para um restaurante fictício.
O objetivo final é que seja uma aplicação com dois tipos de usuários: clientes e administradores. Os clientes podem buscar pratos e visualizar e os administradores, adcionar e editar os pratos.
 
Stack:
  O projeto utiliza Node.js e React.js

Estrutura:
  Frontend: na pasta src
    main.jsx reúne a estrutura final
    routes reúne as rotas de autenticação para exibição das páginas
    hooks/auth.jsx reúne a lógica de autenticação e cadastro de usuário. A autenticação como admin é dada direta no banco de dados
    pages e components reúnem a estrutura das páginas

  Backend: na pasta src
    server.js reúne a lógica dew funcionamento geral do backend
    routes reúne as rotas das requisições
    controllers reúne as lógicas
    database onde se cria e armazena o banco de dados
    o projeto usa knex para lidar com a conexão com o banco

Como rodar:
  fazer download do frontend e backend. 
  Baixar o noje.js
  Rodar em ambos usando comando: npm install
  em ambos rodar: npm run dev
  O backend estará rodando na PORT 3333 e o frontend no localhoast

