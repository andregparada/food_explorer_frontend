# food_explorer_frontend

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

Como rodar em dev:
  fazer download do arquivo
  Baixar o node.js
  Rodar em usando comando: npm install
  rodar: npm run dev
  O arquivo estará rodando no laclhoast

 Link do deploy:
  https://foodexplorer-agparada.netlify.app/
