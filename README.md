# simiansDetector
Para executar o projeto localmente, clone o repositório, e execute o seguinte comando na pasta raíz do projeto <br>
**node server.js **

Utilizando alguma ferramenta de requisição, como postman, arc etc..., faça um post para o endpoint /simian para a url  <br>
**http://localhost:3000**

O objeto enviado deverá conter uma key nomeada como **dna** e o seu valor deverá ser um **array de strings**, caso contraŕio , a aplicação retornará erros para a requisição. 

Para rodar os testes, execute o comando **npm test **na raíz do projeto. <br>

Para rodar os testes + coverage execute **npm test -- --coverage** <br> 

Para utilizar o serviço de stats, faça uma requisição **/get** para o endpoint** http://localhost:3000/stats**

Executando o projeto em produção: 

Foi feito deploy no serviço gratuito pelo heroku, para fazer a checagem de dna, faça o post para **https://simian-detector.herokuapp.com/simian** e para acessar o serviço stats **https://simian-detector.herokuapp.com/stats**


