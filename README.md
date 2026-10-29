# Web na prática · Simulados

Uma plataforma de estudo em português para revisar os fundamentos de desenvolvimento web. Feita com HTML, CSS e JavaScript, sem servidor de aplicação ou etapa de compilação.

## O que você encontra

- Cinco simulados independentes, com dez questões e cinco alternativas por questão.
- Conteúdo misturado em todos os simulados: HTML, CSS, JavaScript, DOM, eventos, padrões da Web e usabilidade.
- Correção comentada, com a resposta correta e explicações das alternativas.
- Interface responsiva para estudar pelo celular ou pelo computador.
- Progresso salvo automaticamente neste navegador, navegação entre questões e retomada de tentativas.
- Resultado com nota, melhor desempenho, assuntos para revisar e filtro das questões erradas.
- Possibilidade de refazer os simulados mantendo o histórico de notas.

As questões são inspiradas no estilo e no conteúdo das imagens de referência. O material usa formulações tecnicamente precisas, inclusive nos pontos em que as imagens simplificam conceitos: associar um manipulador a `onclick` não dispara o evento, nem todas as propriedades CSS são herdadas e o posicionamento absoluto depende do bloco de referência do elemento.

## Executar localmente

Na pasta do projeto, execute:

```sh
python -m http.server 4173
```

Abra [http://localhost:4173](http://localhost:4173). Como os scripts usam módulos JavaScript, utilize um servidor HTTP em vez de abrir o HTML diretamente como arquivo. Se você usa Node.js, `npm run dev` inicia o mesmo servidor Python, restrito a `127.0.0.1`.

## Verificar o projeto

Para instalar as ferramentas de desenvolvimento, é necessário Node.js com npm:

```sh
npm ci
npm test
```

Os testes unitários verificam o banco de questões e a lógica de correção e persistência. Para os testes de navegação e interação no navegador:

```sh
npx playwright install chromium
npm run test:e2e
```

As dependências são usadas apenas no desenvolvimento. O site publicado continua sendo composto por arquivos estáticos.

## Publicar no GitHub Pages

O workflow em [`.github/workflows/pages.yml`](.github/workflows/pages.yml) verifica a sintaxe dos scripts e executa os testes do banco de questões e do motor da aplicação antes de publicar a cada push na branch `main`. Ele também pode ser iniciado manualmente pela aba **Actions**, em **Publicar no GitHub Pages → Run workflow**.

Este repositório já está configurado para publicar pelo GitHub Actions. Ao criar um fork, configure **Settings → Pages → Build and deployment → Source → GitHub Actions**. O workflow prepara uma pasta `_site` com apenas `index.html`, `assets/` e `.nojekyll`, envia o artefato e publica no ambiente `github-pages`.

Endereço esperado após a primeira publicação:

[https://codykoinabox.github.io/simuladospriweb/](https://codykoinabox.github.io/simuladospriweb/)

O site usa caminhos relativos para funcionar no subdiretório do repositório. Não há dependências de produção nem chaves de API para configurar.

Referências do workflow: [fluxos personalizados do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) e [configuração da fonte de publicação](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Fontes do conteúdo

As explicações seguem as referências oficiais de [HTML (WHATWG Living Standard)](https://html.spec.whatwg.org/multipage/), [DOM (WHATWG Living Standard)](https://dom.spec.whatwg.org/) e [posicionamento CSS (W3C)](https://www.w3.org/TR/css-position-3/).
