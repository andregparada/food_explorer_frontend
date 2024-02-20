<h1 align="center" font-family="Roboto, sans-serif">food explorer - frontend</h1>

![Captura de tela 2024-02-20 133405](https://github.com/andregparada/food_explorer_frontend/assets/113139448/3e672adf-c933-4f5e-8f0d-b0fb61066532)

!(https://img.shields.io/badge/React.js-blue)

Este projeto é um menu interativo de um restaurante fictício desenvolvido como desafio final para validação do certificado de web-designer oferecido pelo curso Explorer da Rocketseat.

A aplicação é é composta por dois tipos de usuários: clientes e administradores. Os clientes podem buscar pratos e visualizar e os administradores, adcionar e editar os pratos.
 
Stack:
  O projeto utiliza Node.js e React.js

Estrutura:
  Frontend: na pasta src
    main.jsx reúne a estrutura final
    routes reúne as rotas de autenticação para exibição das páginas
    hooks/auth.jsx reúne a lógica de autenticação e cadastro de usuário. A autenticação como admin é dada direta no banco de dados
    pages e components reúnem a estrutura das páginas

Como rodar em dev:
  fazer download do arquivo
  Baixar o node.js
  Rodar em usando comando: npm install
  rodar: npm run dev
  O arquivo estará rodando no laclhoast

 Link do deploy:
  https://foodexplorer-agparada.netlify.app/
