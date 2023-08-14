# Página de Produto com Gerenciamento de Estado (Context API) e Carrinho de Compras

Este projeto consiste em uma página de produto desenvolvida com o Create React App, que inclui funcionalidades de gerenciamento de estado utilizando Context API e um carrinho de compras que ajusta o valor final conforme a quantidade de itens adicionados. Além disso, apresenta um teste end-to-end (E2E) implementado com o framework Cypress para verificar a correta funcionalidade das características desenvolvidas.

## Funcionalidades

- Exibição de um produto com detalhes, como nome, imagem, descrição e preço.
- Utilização da Context API para gerenciamento de estado global.
- Carrinho de compras que atualiza automaticamente o valor total com base na quantidade de itens adicionados.

## Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org) instalado em sua máquina.

## Como Executar o Projeto

1. Clone este repositório para sua máquina local:

```bash
git clone git@github.com:raquelnmach/product-cart.git 
```

2. Navegue até o diretório do projeto:

```bash
cd product-cart
```
3. Instale as dependências:

```bash
npm install
```

4. Execute a aplicação:

```bash
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Como Executar os testes E2E com Cypress

5. Abra um novo terminal e navegue até o diretório do projeto novamente.

6. Execute o Cypress para os testes end-to-end:

```bash
npm run e2e:test
```

O Cypress abrirá uma janela separada exibindo o navegador controlado pelo teste, permitindo que você acompanhe a execução dos testes interagindo com a página.

## Tecnologias Utilizadas

- React (Create React App)
- Context API para gerenciamento de estado
- Cypress para testes end-to-end

## Testes End-to-End

Este projeto inclui um teste end-to-end (E2E) utilizando o framework de teste Cypress para garantir que as funcionalidades implementadas estejam funcionando corretamente. Certifique-se de executar o projeto e o Cypress simultaneamente, como mencionado acima, para ver os testes em ação.

## Considerações Finais

Este projeto demonstra a implementação de uma página de produto com gerenciamento de estado utilizando Context API e um carrinho de compras, juntamente com um teste end-to-end para validar a funcionalidade. 

