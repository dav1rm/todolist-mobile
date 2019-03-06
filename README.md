# TODOList Mobile

Este aplicativo foi desenvolvido utilizando a biblioteca React Native e consumindo a API REST [TODOLIST_BACKEND](https://github.com/davir8/todolist-backend) desenvolvida usando NodeJS. Além da aplicação mobile, foi desenvolvida uma single page application [TODOLIST_FRONTEND](https://github.com/davir8/todolist-frontend) usando a biblioteca ReactJS.

# Como rodar o projeto
**Primeiramente é necessário ter configurado todo o ambiente de desenvolvimento de react native (NodeJS, Android Studio e JAVA).**

Feito isso, vamos baixar o projeto utilizando `git clone git@github.com:davir8/todolist-mobile.git`. Logo após, vamos acessar pasta do projeto com `cd todolist-mobile/` e instalar todas as dependências através do comando `npm install`. 

Depois de instaladas as dependências, é necessário abrir o emulador android ou conectar um dispositivo android com a depuração usb ativada e rodar o servidor nodejs usando `react-native start` e, em seguida, rodar o aplicativo com `react-native run-android` ou `react-native run-ios` (caso esteja no mac). Se tudo ocorrer bem, será possível visualizar o funcionamento do aplicativo consumindo a api hospedada no Heroku.


## O que foi feito no Projeto TODO List

- No backend:
	- CRUD de TODOs usando NodeJS;
	- Utilização do [socketio](https://github.com/socketio/socket.io) para uso do real time nas funcionalidades de cadastro, edição e remoção de TODO;
	- Utilização do banco de dados noSQL [MongoDB](https://www.mongodb.com/) para persistir os dados;
	- Boas práticas no código usando [prettier](https://prettier.io/) e [eslint](https://eslint.org/);
	- Hospedagem no [Heroku](https://todolist-backend-node.herokuapp.com/).

- No frontend:
	- CRUD de TODOs usando ReactJS;
	- Utilização do [cliente socketio](https://github.com/socketio/socket.io-client) para uso do real time nas funcionalidades de cadastro, edição e remoção de TODO;
	- Filtragem do número total de TODOs e de TODOs finalizadas;
	- Boas práticas no codigo usando [prettier](https://prettier.io/) e [eslint](https://eslint.org/);
	- Hospedagem no [Heroku](https://todolist-frontend-react.herokuapp.com/).

- No mobile:
	- CRUD de TODOs usando ReactNative;
	- Utilização do [cliente socketio](https://github.com/socketio/socket.io-client) para uso do real time nas funcionalidades de cadastro, edição e remoção de TODO;
	- Filtragem do número total de TODOs e de TODOs finalizadas;
	- Boas práticas no codigo usando [prettier](https://prettier.io/) e [eslint](https://eslint.org/).
	

## O que não foi feito no Projeto TODO List
Dos itens obrigatórios (item A, B e K) não foram feitos os seguintes itens:
- Não foi utilizado JSF (item A), pois pelo que foi pesquisado é uma tecnologia para desenvolver interface web e não api rest. Dessa forma foi escolhido o NodeJS como backend, pois já utiliza uma linguagem conhecida: o javascript.
- Não foi criado o aplicativo mobile usando flutter (item K), pois é uma tecnologia nova que utiliza uma linguagem de programação nova e seria inviável estudá-la e construir o projeto a tempo. Deste modo, optou-se por usar o ReactNative visto que já seria utilizado ReactJS no frontend e assim, seria possível reaproveitar bastante conhecimento entre as ferramentas.
- Além disso, não foi feito a funcionalidade avançada de filtragem de TODOs.
