<h1 align="center">Tuca Produtos de Limpeza</h1>
<h4 align="center">	
   <a href="https://www.linkedin.com/in/jo%C3%A3oo-vitor" target="blank">
      <img alt="João Vitor" src="https://img.shields.io/badge/-João Vitor-06C1FF?style=flat&logo=Linkedin&logoColor=white" />
   </a>

  <a href="https://github.com/Joaoo1/mkm-produtos-de-limpeza/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Joaoo1/mkm-produtos-de-limpeza?color=06C1FF">
  </a> 
  <img alt="License" src="https://img.shields.io/badge/license-MIT-06C1FF">
</h4>


Esse é um aplicativo desenvolvido em JavaScript com React criado por mim especificamente para gerenciar uma pequena empresa de produtos de limpeza.

![Alt text](/demo/Dashboard.png "Página inicial")

## Conteúdo
* [Features](#features)
* [Tecnologias](#tecnologias)
* [Configuração](#configuração)
* [Demo](#demo)

## Features
* Realize o controle de suas vendas de forma fácil.
* Gere um relatório das suas vendas em um arquivo PDF.
* Acompanhe a quantidade de vendas realizadas nos últimos meses.
* Busque de forma facilitada quais as vendas feitas para determinado cliente.
* Faça o controle de estoque dos seus produtos, com histórico de baixas.
	
## Tecnologias
Nesse projeto foram usadas tecnologias atuais, seguindo o atual padrão do mercado:
* [**ReactJS**](https://pt-br.reactjs.org/) - Uma biblioteca front-end poderosa, atual e enxuta, usada para desenvolver a UI do projeto
* [**styled-components**](https://styled-components.com/) - Ferramenta usada para criar componentes estilizados, juntando *Javascript* com *CSS*, mantendo a estilização da aplicação muito mais concisa e sólida.
* [**Firebase**](https://firebase.google.com) - Plataforma disponibilizada pelo Google onde é fornecido um Back-end completo com uma grande variedade de serviços.
* [**PrimeReact**](http://primefaces.org/primereact/) - Biblioteca de componentes para React.
* [**big.js**](https://mikemcl.github.io/big.js/) - biblioteca de fácil utilização usada para fazer os cálculos matemáticos de forma precisa.
	
## Configuração
Clone este repositório para seu computador e digite `yarn` ou `npm install` para instalar as dependências necessárias para a aplicação.
  P
  Para executar essa aplicação, você precisa criar um projeto no firebase(caso você não saiba fazer isso, siga as etapas 1 e 2 desse [tutorial](https://firebase.google.com/docs/web/setup#aplicativos-node.js).

  Agora na página inicial do seu projeto, vá em configurações do projeto (que se encontra na engrenagem no canto esquerdo), selecione o app que você registrou anteriormente e em *Firebase SDK Snippet*, selecione a opção *Configuração* e copie as informações de configuração do seu projeto. 

  Agora vá na pasta raiz da aplicação onde se encontra o arquivo *.env.template* e remova o *.template* do nome ficando com o nome *.env*, e preencha esse arquivo com as informações de configuração do projeto que foi pego no passo anterior. 
  
  É preciso também fazer o `deploy` das funções que se encontram no repositório [mkm-clouds-function](https://github.com/Joaoo1/mkm-cloud-functions) para o serviço de Cloud functions do firebase. [Tutorial](https://github.com/Joaoo1/mkm-cloud-functions)

  Agora com tudo configurado, execute o comando `yarn start` ou `npm start` para executar a aplicação.
  
  ## Demo
  
  ![Alt text](/demo/Dashboard.png "Página inicial")
  ![Alt text](/demo/Sales.png "Vendas")
  ![Alt text](/demo/Clients.png "Clientes")
  ![Alt text](/demo/Products.png "Produtos")
  ![Alt text](/demo/StockHistory.png "Histórico de estoque")

*Obs: Esta aplicação foi criada em cima de uma banco de dados já existente, por isso as informações como campos e coleções do Firestore estão a grande maioria em português.*
