# NodeJS - 18MOB
<img src="docs/node-logo.png" alt="drawing" style="width:10px;"/>

## Proposta:

- API em NodeJS:
	- Validação JWT.
	- Integração com Firebase.
	- MVC.

## Requisitos:

- [x] Criação/Validação do Token deverá ser usado JWT;
- [x] O token deve ter validade de 12 horas;
- [x] Endpoint para criação de Token de autenticação;
- [x] Todas as rotas precisam possuir um middleware de validação do Token;
- [x] Rota de 500;
- [x] Rota de 404;
- [x] Deverá ser criado dois recursos, um deverá ser de usuários e outro a sua escolha (ex.: produtos);
- [x] Deverá existir uma organização no projeto, por exemplo, **MVC (Model View Controller)**;
- [x] Deverá existir integração com base de dados, por exemplo, firebase;
- [x] Deverá estar disponível no **Heroku** ([clique para acessar]([https://node-api-18mob-negra1m.herokuapp.com/](https://hangouts.google.com/_/elUi/chat-redirect?dest=https%3A%2F%2Fnode-api-18mob-negra1m.herokuapp.com%2F))).

## Docs

Os testes da API estão disponíveis dentro do `docs` na raíz do projeto.

## API Dependencies 
![Libs](https://image.flaticon.com/icons/png/128/167/167756.png) 
Foram inclusos nessa API: 
- 	**express**
- 	**firebase**
- 	**jsonwebtoken**
- 	**body-parser**

## Heroku

A API está disponível em [`https://node-api-18mob-negra1m.herokuapp.com/suppliers`](https://node-api-18mob-negra1m.herokuapp.com/suppliers)

## [ RUN  ]

Executando o projeto

Previamente, é necessário ter o `Node` e `npm` instalados;

1. Clone o Repositório: 
	`git clone https://github.com/negra1m/18mob-nodeAPI.git`
	
2.  Instale as dependências:
	`npm i`
3. Rode o Projeto:
`npm run start`
