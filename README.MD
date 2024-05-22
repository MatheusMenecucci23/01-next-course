Guia de Desenvolvimento:

Instale o npm e o yarn globalmente:
npm install --global yarn
yarn --version

Rodar dentro da pasta do projeto:
yar init -y 
yarn add next react react-dom

copiei pra dentro do package.json:
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}

_app.js é uma página de configuração global


getStaticProps
Essa função busca os dados durante o build. Ou seja, essa função é executada apenas uma vez.
getServerSideProps
Essa função busca os dados do lado do servidor para cada requisição.
Ao modificar o título da página
Com o componente <Head> conseguimos editar os metadados de cada página, como, por exemplo, o título.