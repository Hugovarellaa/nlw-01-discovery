<h1 align="center">
    <img alt="Ecoleta" title="Ecoleta" src=".github/ecoleta.svg" width="220px" />
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Sugestão de plugin para vscode</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sugestão-de-plugin-para-vscode">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />
</p>

<br>

<p align="center">
  <img alt="Ecoleta" src=".github/ecoleta.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [SQLite](https://www.sqlite.org/index.html)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

## 💻 Projeto

O Ecoleta é um marketplace que ajuda pessoas a encontrarem pontos de coleta de resíduos de forma eficiente.

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Hugovarellaa/nlw-01-discovery
$ cd nlw-01-discovery
```

Para iniciá-lo, siga os passos abaixo:

```bash
# Instalar as dependências
$ yarn ou npm

# Iniciar o projeto
$ yarn start
ou
$ npm start

# Inicia o banco de dados
$ cd src/database/db.js
$ tire o comentário da função db.serialize

# Rode
node src/database/db.js

```

## 🔖 Sugestão de plugin para vscode

- Nunjucks Template

#### Configuração

```
 "files.associations": {
  "\*.html": "njk"
  },
```

```
  "emmet.includeLanguages": {
"njk": "html"
},
```

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](<https://www.figma.com/file/Byw4X5etg8VCmezueyhzkC/Ecoleta-(Starter)?node-id=136%3A546>). Lembrando que você precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo.

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
