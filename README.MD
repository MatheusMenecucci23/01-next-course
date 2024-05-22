#Guia de Desenvolvimento

Este é um guia rápido para iniciar o desenvolvimento com o Botinho, um projeto baseado em Next.js. Siga estas etapas para configurar e começar a desenvolver.

## Pré-requisitos

- Node.js e npm instalados globalmente.
- Yarn instalado globalmente.

## Instalação

1. Instale o npm e o yarn globalmente, se ainda não tiver:
   ```
   npm install --global yarn
   ```

2. Verifique se o Yarn foi instalado corretamente:
   ```
   yarn --version
   ```

## Iniciando o Projeto

1. Na pasta do seu projeto, inicialize um novo projeto yarn:
   ```
   yarn init -y
   ```

2. Adicione as dependências necessárias:
   ```
   yarn add next react react-dom
   ```

## Configuração do Package.json

Copie o seguinte trecho para dentro do seu `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## Arquivo \_app.js

O arquivo `_app.js` é uma página de configuração global em Next.js. Personalize conforme necessário para configurações globais do seu aplicativo.

## Funções de Busca de Dados

- **getStaticProps:** Esta função busca os dados durante o build, sendo executada apenas uma vez.
- **getServerSideProps:** Esta função busca os dados do lado do servidor para cada requisição.

## Modificando o Título da Página

Utilize o componente `<Head>` para editar os metadados de cada página, incluindo o título.

=
