# simiansDetector
Para executar o projeto localmente, clone o repositório, e execute o seguinte comando na pasta raíz do projeto <br>
<b> node server.js </b>

Utilizando alguma ferramenta de requisição, como postman, arc etc..., faça um post para o endpoint /simian para a url  <br>
<b> http://localhost:3000 </b>

O objeto enviado deverá conter uma key nomeada como **dna** e o seu valor deverá ser um **array de strings**, caso contraŕio , a aplicação retornará erros para a requisição. 

Para utilizar o serviço de stats, faça uma requisição **/get** para o endpoint <b> http://localhost:3000/stats </b>

Executando o projeto em produção: 

Foi feito deploy no serviço gratuito pelo heroku, para fazer a checagem de dna, faça o post para **https://simian-detector.herokuapp.com/simian** e para acessar o serviço stats **https://simian-detector.herokuapp.com/stats**


