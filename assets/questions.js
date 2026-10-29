// Questões autorais inspiradas nos conteúdos das imagens de referência.
// Cada alternativa traz uma explicação própria para apoiar a revisão.
export const exams = [
  {
    "id": "simulado-1",
    "number": 1,
    "title": "Simulado 01",
    "subtitle": "Uma primeira volta por todos os fundamentos da prova.",
    "questions": [
      {
        "id": "s1-q1",
        "topics": [
          "padroes",
          "estrutura"
        ],
        "context": "Uma equipe quer criar uma página interoperável e organiza o documento com um elemento raiz, uma área de metadados e uma área de conteúdo.",
        "prompt": "Qual alternativa relaciona corretamente a padronização da Web e a estrutura básica do HTML?",
        "options": [
          {
            "text": "A Microsoft define sozinha os padrões da Web, e <body> é a raiz do documento.",
            "explanation": "A Microsoft participa do ecossistema, mas não define sozinha os padrões. A raiz de um documento HTML é <html>."
          },
          {
            "text": "O W3C é um navegador, e <head> deve ficar dentro de <body>.",
            "explanation": "W3C é um consórcio de padrões. <head> e <body> são elementos irmãos dentro de <html>."
          },
          {
            "text": "O W3C é um consórcio ligado aos padrões da Web, e <html> contém <head> e <body>.",
            "explanation": "Correto: W3C significa World Wide Web Consortium; <html> é o elemento raiz que contém <head> e <body>."
          },
          {
            "text": "A ABNT é o único órgão internacional da Web, e <head> contém todo o conteúdo visível.",
            "explanation": "A ABNT é a entidade brasileira de normalização. No HTML, os metadados ficam em <head>; o conteúdo da página fica em <body>."
          },
          {
            "text": "O W3C substitui o HTML, e o elemento raiz deve ser <html5>.",
            "explanation": "W3C é uma organização, não uma linguagem substituta. A tag <html5> não é a raiz padrão do HTML."
          }
        ],
        "correct": 2,
        "explanation": "O W3C reúne organizações e pessoas na criação de padrões para a Web. Na estrutura básica, <html> é a raiz; <head> reúne metadados, como o título da aba, e <body> contém o conteúdo da página. O HTML atual é mantido pelo WHATWG, em colaboração com o W3C.",
        "tip": "Pense em <html> como a casa: <head> guarda informações sobre ela e <body> reúne seu conteúdo."
      },
      {
        "id": "s1-q2",
        "topics": [
          "titulos",
          "espacos"
        ],
        "context": "Considere o fragmento abaixo, sem outras regras CSS que alterem os espaços do parágrafo. A largura disponível é suficiente para o texto caber em uma linha.",
        "prompt": "Qual interpretação está correta?",
        "code": "<h1>Fundamentos Web</h1>\n<h2>HTML</h2>\n<p style=\"white-space: normal\">Revisão    de\n\nHTML</p>",
        "options": [
          {
            "text": "<h2> é sempre mais importante que <h1>, e os espaços do código serão preservados.",
            "explanation": "A hierarquia vai de <h1> a <h6>. Com white-space: normal, sequências de espaços são colapsadas."
          },
          {
            "text": "<h1> e <h2> são apenas tamanhos de fonte, e cada quebra do código gera um <br>.",
            "explanation": "Esses elementos expressam níveis de títulos. Quebras de linha no código não criam elementos <br>."
          },
          {
            "text": "Somente <header1> pode criar um título principal, e os espaços desaparecem entre todas as palavras.",
            "explanation": "<header1> não é um elemento HTML padrão. Os espaços entre palavras são colapsados, não removidos indiscriminadamente."
          },
          {
            "text": "<h1> é um título, mas a linha vazia no código cria obrigatoriamente um novo parágrafo.",
            "explanation": "Uma linha vazia no código, por si só, não cria outro elemento <p>."
          },
          {
            "text": "<h1> e <h2> indicam níveis de títulos; no parágrafo, espaços e quebras do código são colapsados em separação normal entre palavras.",
            "explanation": "Correto: os títulos organizam a hierarquia, e o parágrafo exibe “Revisão de HTML” com espaçamento normal."
          }
        ],
        "correct": 4,
        "explanation": "Os elementos <h1> a <h6> representam seis níveis de títulos. No processamento normal de espaços, várias ocorrências de espaço e quebras de linha no texto não preservam a diagramação do arquivo: o texto do parágrafo aparece como “Revisão de HTML”.",
        "tip": "Use os títulos pela hierarquia do conteúdo; para preservar espaços de um exemplo de código, considere <pre>."
      },
      {
        "id": "s1-q3",
        "topics": [
          "links",
          "tabelas"
        ],
        "context": "Uma página de estudos apresenta notas em uma tabela e oferece um link para o material de apoio.",
        "prompt": "Qual alternativa descreve corretamente os elementos e atributos envolvidos?",
        "options": [
          {
            "text": "<tr> cria uma linha, <th> uma célula de cabeçalho, <td> uma célula de dados; em <a>, href informa o destino.",
            "explanation": "Correto: cada elemento tem uma função na tabela, e href fornece o endereço do link."
          },
          {
            "text": "<td> cria uma tabela inteira, e o atributo to define o endereço de um link HTML.",
            "explanation": "<table> cria a tabela. No elemento <a>, o destino é definido por href, não por to."
          },
          {
            "text": "<th> cria uma linha, e target=\"_self\" abre obrigatoriamente uma nova aba.",
            "explanation": "<tr> cria a linha. _self usa o mesmo contexto de navegação, normalmente a mesma aba."
          },
          {
            "text": "<row> e <column> são as tags padrão de linhas e células, e href define a cor do link.",
            "explanation": "As tags padrão são <tr> para linhas e <th>/<td> para células. href define um endereço, não uma cor."
          },
          {
            "text": "<table-head> é uma célula de cabeçalho, e target=\"_blank\" indica o endereço do material.",
            "explanation": "A célula de cabeçalho é <th>. _blank pede um novo contexto de navegação; o endereço continua em href."
          }
        ],
        "correct": 0,
        "explanation": "Tabelas são formadas por <table>, linhas <tr> e células <th> ou <td>. Um hiperlink usa <a href=\"endereco\">texto</a>. O atributo target controla onde abrir: _self mantém o contexto atual; _blank solicita um novo, geralmente uma aba.",
        "tip": "Tabela: linha = tr; cabeçalho = th; dados = td. Link: destino = href."
      },
      {
        "id": "s1-q4",
        "topics": [
          "funcoes"
        ],
        "context": "Funções permitem agrupar instruções e reutilizá-las. Observe a declaração e a chamada abaixo.",
        "prompt": "Qual é o valor de resultado e qual afirmação sobre a função está correta?",
        "code": "function somar(a, b) {\n  return a + b;\n}\nconst resultado = somar(4, 3);",
        "options": [
          {
            "text": "resultado vale 4; function obriga a usar apenas o primeiro argumento.",
            "explanation": "Os dois argumentos são recebidos. A instrução return soma a e b, produzindo 7."
          },
          {
            "text": "resultado vale 7; a palavra func também poderia substituir function nessa declaração.",
            "explanation": "A soma é 7, mas func não é a palavra-chave JavaScript para uma declaração de função."
          },
          {
            "text": "resultado vale undefined; return só imprime valores na tela.",
            "explanation": "return entrega um valor ao código que chamou a função. Ele não é uma instrução de impressão."
          },
          {
            "text": "resultado vale 7; a e b são parâmetros, e return devolve a soma ao chamador.",
            "explanation": "Correto: os argumentos 4 e 3 são associados aos parâmetros a e b, e o retorno é 7."
          },
          {
            "text": "resultado vale 7; toda função JavaScript precisa obrigatoriamente de dois parâmetros.",
            "explanation": "Essa função tem dois parâmetros, mas funções podem ter zero, um ou vários parâmetros."
          }
        ],
        "correct": 3,
        "explanation": "A palavra-chave function declara essa função. a e b são parâmetros; 4 e 3 são os argumentos da chamada. return encerra a execução da função e devolve 7. Funções não são obrigadas a receber parâmetros nem a ter um retorno explícito.",
        "tip": "Parâmetros aparecem na definição; argumentos são os valores enviados na chamada."
      },
      {
        "id": "s1-q5",
        "topics": [
          "scripts",
          "eventos"
        ],
        "context": "O arquivo app.js define a função mostrarData. Ele é um script clássico, usa defer e encontra o botão já presente no documento.",
        "prompt": "Considerando o código, qual afirmação está correta?",
        "code": "<script src=\"app.js\" defer></script>\n\n// No arquivo app.js:\ndocument.getElementById(\"data\").onclick = mostrarData;",
        "options": [
          {
            "text": "A extensão .js torna desnecessário o elemento <script> no HTML.",
            "explanation": "A extensão identifica o arquivo, mas o navegador precisa de uma referência para carregá-lo, como <script src=\"app.js\" defer>."
          },
          {
            "text": "src carrega um arquivo JavaScript externo, e atribuir mostrarData a onclick registra a função para o clique.",
            "explanation": "Correto: src aponta para o arquivo; onclick recebe a referência da função, que será chamada quando ocorrer o evento."
          },
          {
            "text": "A atribuição a onclick executa imediatamente mostrarData, antes de qualquer clique.",
            "explanation": "Sem parênteses, mostrarData é uma referência à função. A atribuição registra o manipulador; não o executa naquele momento."
          },
          {
            "text": "O evento click indica exclusivamente que o botão ganhou foco.",
            "explanation": "Foco e ativação são eventos diferentes. focus indica ganho de foco; click está ligado à ativação do elemento."
          },
          {
            "text": "JavaScript só pode existir dentro de <head>, e keyup ocorre ao pressionar a tecla.",
            "explanation": "Scripts podem ser inseridos em locais permitidos de <head> ou <body>, ou carregados de arquivo externo. keyup ocorre na liberação da tecla."
          }
        ],
        "correct": 1,
        "explanation": "O elemento <script> pode conter código ou carregar um arquivo por src. Neste script clássico externo, defer adia a execução até o HTML terminar de ser analisado. A linha onclick = mostrarData associa um manipulador ao clique; não dispara o clique. focus corresponde a ganhar foco e keyup à liberação de uma tecla.",
        "tip": "mostrarData é a função; mostrarData() é uma chamada à função."
      },
      {
        "id": "s1-q6",
        "topics": [
          "dom"
        ],
        "context": "O DOM representa o documento como uma árvore de nós. Uma página contém um parágrafo <p id=\"aviso\">Aguarde</p> e outros parágrafos.",
        "prompt": "Qual trecho troca apenas o texto do elemento com id=\"aviso\" por “Pronto”?",
        "options": [
          {
            "text": "document.getElementById(\"aviso\").html5 = \"Pronto\";",
            "explanation": "html5 não é a propriedade padrão para modificar o conteúdo textual de um elemento."
          },
          {
            "text": "document.getElementsByTagName(\"aviso\").textContent = \"Pronto\";",
            "explanation": "getElementsByTagName procura pelo nome da tag e devolve uma coleção. “aviso” é um id, e a coleção não é um único parágrafo."
          },
          {
            "text": "document.getElementById(\"p\").textContent = \"Pronto\";",
            "explanation": "getElementById procura o valor de id, não o nome da tag. O id informado no cenário é “aviso”."
          },
          {
            "text": "document.getElementById(\"aviso\").textContent = \"Pronto\";",
            "explanation": "Correto: getElementById seleciona esse elemento e textContent substitui seu conteúdo por texto."
          },
          {
            "text": "document.getElementsByTagName(\"p\").style = \"Pronto\";",
            "explanation": "O método devolve uma coleção de parágrafos. style controla declarações CSS de um elemento; não define seu texto."
          }
        ],
        "correct": 3,
        "explanation": "getElementById(\"aviso\") devolve o elemento que tem esse id, ou null se ele não existir. textContent permite ler ou substituir texto. getElementsByTagName(\"p\") devolve uma coleção de parágrafos; para alterar um deles, é preciso acessar um elemento da coleção. Para estilo, usa-se, por exemplo, elemento.style.color = \"blue\".",
        "tip": "Id → um elemento. Nome de tag → coleção. textContent → texto. style → apresentação."
      },
      {
        "id": "s1-q7",
        "topics": [
          "css-externo",
          "seletores"
        ],
        "context": "Uma equipe separou os estilos do documento HTML em um arquivo chamado estilo.css. O objetivo é aplicar uma regra aos parágrafos.",
        "prompt": "Qual alternativa contém a associação externa e a sintaxe CSS corretas?",
        "options": [
          {
            "text": "No HTML: <link rel=\"stylesheet\" href=\"estilo.css\">. No CSS: p { color: blue; }.",
            "explanation": "Correto: link usa rel=\"stylesheet\" e href; a regra CSS reúne seletor, chaves e declaração propriedade: valor."
          },
          {
            "text": "No HTML: <link rel=\"stylesheet\" src=\"estilo.css\">. No CSS: p { color: blue; }.",
            "explanation": "A regra CSS é válida, mas o endereço de uma folha externa no elemento <link> é informado em href, não em src."
          },
          {
            "text": "No HTML: <style src=\"estilo.css\"></style>. No CSS: p { color: blue; }.",
            "explanation": "<style> contém CSS incorporado. Esse elemento não importa uma folha externa pelo atributo src."
          },
          {
            "text": "No HTML: <link rel=\"stylesheet\" href=\"estilo.css\">. No CSS: p(color = blue).",
            "explanation": "A associação externa está correta, mas a regra CSS precisa de chaves e de dois-pontos entre propriedade e valor."
          },
          {
            "text": "No HTML: <css href=\"estilo.css\">. No CSS: p { color: blue; }.",
            "explanation": "<css> não é o elemento padrão para associar uma folha de estilos. Usa-se <link rel=\"stylesheet\" href=\"...\">."
          }
        ],
        "correct": 0,
        "explanation": "A folha externa é ligada ao HTML por <link rel=\"stylesheet\" href=\"estilo.css\">, normalmente em <head>. Na regra p { color: blue; }, p é o seletor, color é a propriedade e blue é o valor. As declarações ficam entre chaves.",
        "tip": "CSS externo usa link + href; JavaScript externo usa script + src."
      },
      {
        "id": "s1-q8",
        "topics": [
          "cor",
          "fontes",
          "seletores"
        ],
        "context": "Um desenvolvedor quer que os parágrafos tenham texto azul e usem Arial, com uma família genérica como alternativa.",
        "prompt": "Qual regra atende ao pedido?",
        "options": [
          {
            "text": "p { font-color: blue; font-family: Arial, sans-serif; }",
            "explanation": "font-family está correta, mas font-color não é a propriedade CSS padrão para cor do texto."
          },
          {
            "text": "p { color: blue; font-size: Arial; }",
            "explanation": "color está correta. font-size espera um tamanho, não o nome de uma fonte."
          },
          {
            "text": "p { color: blue; font-family: Arial, sans-serif; }",
            "explanation": "Correto: color define a cor do texto e font-family fornece uma lista de fontes em ordem de preferência."
          },
          {
            "text": "p { colour: blue; font-family: 16px; }",
            "explanation": "A grafia CSS é color. 16px é um tamanho e não uma família de fontes."
          },
          {
            "text": "p { background-color: blue; font-weight: Arial; }",
            "explanation": "background-color colore o fundo, e font-weight define o peso da fonte; nenhuma dessas declarações atende ao pedido."
          }
        ],
        "correct": 2,
        "explanation": "A propriedade color define a cor do texto. font-family aceita nomes de fontes, como Arial, e famílias genéricas, como sans-serif ou serif, em uma lista de alternativas. O navegador tenta usar a primeira disponível. Tamanho e peso são controlados por font-size e font-weight.",
        "tip": "Texto: color. Família: font-family. Tamanho: font-size. Peso: font-weight."
      },
      {
        "id": "s1-q9",
        "topics": [
          "fundo",
          "posicionamento"
        ],
        "context": "Um cartão contém um selo. Considere somente as regras abaixo, sem transform, filter, contain ou outros recursos que criem um bloco de referência. O selo tem margin: 0.",
        "prompt": "Qual interpretação está correta?",
        "code": ".cartao {\n  position: relative;\n  background-image: url(\"fundo.png\");\n}\n.selo { position: absolute; top: 0; left: 0; margin: 0; }",
        "options": [
          {
            "text": "background-image define a cor do texto, e o selo permanece no fluxo normal.",
            "explanation": "background-image aplica uma imagem de fundo. position: absolute retira a caixa do selo do fluxo normal."
          },
          {
            "text": "O arquivo deve ser indicado por bg-image, e o selo será alinhado à janela.",
            "explanation": "A propriedade é background-image. Neste cenário, o cartão posicionado com relative fornece a referência ao selo."
          },
          {
            "text": "top: 0 e left: 0 são sempre relativos ao pai imediato, mesmo se ele for static.",
            "explanation": "Um pai static não estabelece essa referência apenas por ser pai. Procura-se o ancestral que estabelece o bloco de referência."
          },
          {
            "text": "background-size é a propriedade que carrega fundo.png, e relative impede filhos absolutos.",
            "explanation": "background-size dimensiona uma imagem já definida. relative pode estabelecer a referência para descendentes absolutos."
          },
          {
            "text": "background-image aplica o fundo ao cartão; o selo absoluto usa o cartão com position: relative como referência.",
            "explanation": "Correto: url() fornece a imagem, e o ancestral posicionado mais próximo é o cartão."
          }
        ],
        "correct": 4,
        "explanation": "background-image: url(\"fundo.png\") define a imagem de fundo. No cenário descrito, o cartão com position: relative estabelece o bloco de referência do selo absoluto. Com margens zero, top: 0 e left: 0 alinham o selo ao canto superior esquerdo da caixa de preenchimento desse ancestral. Sem um ancestral que estabeleça essa referência, usa-se o bloco de referência inicial.",
        "tip": "Para posicionar um selo dentro de um cartão: cartão relative, selo absolute."
      },
      {
        "id": "s1-q10",
        "topics": [
          "usabilidade"
        ],
        "context": "Um sistema de estudos precisa ser fácil de aprender, permitir que a pessoa conclua as tarefas e ajudar na recuperação de erros.",
        "prompt": "Qual alternativa NÃO representa, por si só, uma qualidade de usabilidade?",
        "options": [
          {
            "text": "Permitir que a pessoa realize uma tarefa com pouco esforço desnecessário.",
            "explanation": "Isso se relaciona à eficiência: o usuário consegue realizar a tarefa usando bem seu tempo e esforço."
          },
          {
            "text": "Eliminar instruções e informações importantes apenas para deixar a tela com menos texto.",
            "explanation": "Correto: reduzir informação sem considerar as necessidades pode dificultar a tarefa. Uma tela curta não garante boa usabilidade."
          },
          {
            "text": "Facilitar que a pessoa aprenda a usar os controles principais.",
            "explanation": "A facilidade de aprendizado é uma qualidade importante de usabilidade."
          },
          {
            "text": "Ajudar a pessoa a lembrar como utilizar o sistema depois de algum tempo.",
            "explanation": "A facilidade de memorização contribui para que o usuário retome o uso com menos dificuldade."
          },
          {
            "text": "Apresentar mensagens claras que ajudem a corrigir um erro.",
            "explanation": "Mensagens compreensíveis e recuperação de erros melhoram a usabilidade."
          }
        ],
        "correct": 1,
        "explanation": "Usabilidade envolve conseguir realizar objetivos, eficiência, aprendizado, memorização, tratamento de erros e satisfação no contexto de uso. UX considera a experiência de forma mais ampla. Simplificar pode ajudar, mas remover informações necessárias só para reduzir texto pode piorar essa experiência.",
        "tip": "Boa usabilidade ajuda a concluir a tarefa; não se mede apenas pela quantidade de informação na tela."
      }
    ]
  },
  {
    "id": "simulado-2",
    "number": 2,
    "title": "Simulado 02",
    "subtitle": "Novos cenários para reconhecer as diferenças que caem na prova.",
    "questions": [
      {
        "id": "s2-q1",
        "topics": [
          "padroes",
          "estrutura"
        ],
        "context": "Uma questão apresenta três afirmações: I. O W3C participa do desenvolvimento de padrões da Web. II. <head> contém metadados e <body> reúne o conteúdo da página. III. O elemento raiz de um documento HTML é <body>.",
        "prompt": "Quais afirmações estão corretas?",
        "options": [
          {
            "text": "Apenas I.",
            "explanation": "I está correta, mas II também está: <head> e <body> têm essas funções distintas."
          },
          {
            "text": "Apenas II e III.",
            "explanation": "II está correta, mas III está errada: o elemento raiz é <html>. I também está correta."
          },
          {
            "text": "I, II e III.",
            "explanation": "III torna a opção incorreta: <body> é descendente de <html>, não a raiz."
          },
          {
            "text": "Apenas I e II.",
            "explanation": "Correto: o W3C atua na padronização, e <head>/<body> organizam metadados e conteúdo; a raiz é <html>."
          },
          {
            "text": "Apenas III.",
            "explanation": "III está errada. <html> é a raiz; I e II estão corretas."
          }
        ],
        "correct": 3,
        "explanation": "O W3C é um consórcio internacional associado aos padrões da Web, e não um navegador ou uma linguagem. A estrutura básica do documento tem <html> como raiz, contendo <head> e <body>. O HTML Living Standard é mantido pelo WHATWG, em colaboração com o W3C.",
        "tip": "Quando a questão perguntar pela raiz do documento HTML, procure <html>."
      },
      {
        "id": "s2-q2",
        "topics": [
          "titulos",
          "espacos"
        ],
        "context": "Um aluno tenta criar um subtítulo e alinhar palavras digitando muitos espaços no arquivo HTML. Considere o comportamento padrão, com white-space: normal.",
        "prompt": "Qual orientação está correta?",
        "options": [
          {
            "text": "Use um nível apropriado entre <h1> e <h6> para o título; vários espaços no código não garantem esse alinhamento visual.",
            "explanation": "Correto: títulos expressam hierarquia e espaços colapsados não substituem recursos de layout."
          },
          {
            "text": "Use <header2> e pressione Enter para criar automaticamente um novo título.",
            "explanation": "<header2> não é um elemento HTML padrão, e Enter no código não cria um elemento de título."
          },
          {
            "text": "Use <h7> para subtítulos e tabulações para preservar toda a diagramação.",
            "explanation": "Há seis níveis de títulos, de <h1> a <h6>. Tabulações também são processadas como espaços no comportamento normal."
          },
          {
            "text": "Use sempre <h6> para o texto mais importante, pois 6 indica prioridade máxima.",
            "explanation": "<h1> representa o nível mais alto; <h6> representa o sexto nível. O número não indica prioridade crescente."
          },
          {
            "text": "Use <h2> apenas para aumentar a fonte, pois ele não possui significado estrutural.",
            "explanation": "<h2> tem significado de título de segundo nível. O aspecto visual pode ser ajustado por CSS sem abandonar a hierarquia."
          }
        ],
        "correct": 0,
        "explanation": "Escolha <h1> a <h6> de acordo com a organização do conteúdo. Para posicionar elementos, utilize CSS. Em texto com white-space: normal, sequências de espaços, tabulações e quebras de linha são processadas e colapsadas; a indentação do arquivo não se transforma em um layout equivalente na tela.",
        "tip": "Semântica organiza o documento; CSS organiza sua apresentação."
      },
      {
        "id": "s2-q3",
        "topics": [
          "links",
          "tabelas"
        ],
        "context": "O trecho abaixo apresenta uma linha de uma tabela com um título de coluna e um link para uma revisão.",
        "prompt": "Sobre esse trecho, assinale a alternativa INCORRETA.",
        "code": "<table>\n  <tr>\n    <th>Material</th>\n    <td><a href=\"revisao.html\" target=\"_self\">Revisar</a></td>\n  </tr>\n</table>",
        "options": [
          {
            "text": "O elemento <tr> representa a linha da tabela.",
            "explanation": "Essa afirmação está correta: <tr> é o elemento que delimita uma linha. A pergunta pede a incorreta."
          },
          {
            "text": "O elemento <th> representa uma célula de cabeçalho.",
            "explanation": "Essa afirmação está correta: <th> fornece semântica de cabeçalho de tabela."
          },
          {
            "text": "O atributo href informa o endereço revisao.html.",
            "explanation": "Essa afirmação está correta: href define a URL de destino do link."
          },
          {
            "text": "target=\"_self\" usa o contexto de navegação atual, normalmente a mesma aba.",
            "explanation": "Essa afirmação está correta: _self indica o próprio contexto em que está o link."
          },
          {
            "text": "O atributo target define o endereço do link, enquanto href determina a cor do texto.",
            "explanation": "Correto, esta é a afirmação incorreta: target escolhe o contexto de navegação, href define o endereço e CSS pode definir a cor."
          }
        ],
        "correct": 4,
        "explanation": "Cada linha usa <tr>; suas células podem ser <th> para cabeçalhos ou <td> para dados. No link, href indica para onde navegar, enquanto target informa onde abrir. _self corresponde ao contexto atual. A apresentação do texto, como a cor, é responsabilidade do CSS.",
        "tip": "Em perguntas com INCORRETA, identifique a frase falsa antes de marcar."
      },
      {
        "id": "s2-q4",
        "topics": [
          "funcoes"
        ],
        "context": "Uma função sem parâmetros é usada para fornecer uma mensagem fixa ao programa.",
        "prompt": "O que será armazenado em mensagem?",
        "code": "function obterMensagem() {\n  return \"Bons estudos!\";\n}\nconst mensagem = obterMensagem();",
        "options": [
          {
            "text": "O texto function, pois funções sem parâmetros não podem retornar valores.",
            "explanation": "Funções sem parâmetros podem retornar valores normalmente. O retorno neste código é “Bons estudos!”."
          },
          {
            "text": "A string “Bons estudos!”, pois a chamada executa a função e recebe seu retorno.",
            "explanation": "Correto: obterMensagem() executa a função e return fornece a string para a atribuição."
          },
          {
            "text": "undefined, porque toda função precisa receber pelo menos um argumento.",
            "explanation": "Argumentos não são obrigatórios. O return explícito determina o valor retornado nessa chamada."
          },
          {
            "text": "O número de caracteres da mensagem, porque return conta automaticamente o texto.",
            "explanation": "return devolve o valor da expressão escrita depois dele; aqui, uma string, sem contagem automática."
          },
          {
            "text": "A própria função, porque os parênteses impedem sua execução.",
            "explanation": "Os parênteses fazem a chamada. Sem os parênteses, obterMensagem seria uma referência à função."
          }
        ],
        "correct": 1,
        "explanation": "Uma função pode não ter parâmetros, como obterMensagem. A expressão obterMensagem() chama essa função. Ao executar return, ela devolve a string “Bons estudos!”, que é armazenada em mensagem. Já obterMensagem, sem parênteses, representa a própria função.",
        "tip": "A presença dos parênteses diferencia uma chamada de uma simples referência."
      },
      {
        "id": "s2-q5",
        "topics": [
          "scripts",
          "eventos"
        ],
        "context": "Um formulário carrega interacoes.js por <script src=\"interacoes.js\" defer></script>. Depois da análise do HTML, esse script registra ouvintes para focus e keyup em um campo de texto.",
        "prompt": "Qual alternativa descreve corretamente o carregamento e os eventos?",
        "options": [
          {
            "text": "O arquivo é CSS, e focus ocorre quando o campo perde o foco.",
            "explanation": "<script> carrega JavaScript. focus corresponde ao ganho de foco; blur corresponde à perda."
          },
          {
            "text": "O arquivo precisa estar escrito dentro do HTML, e keyup ocorre antes de a tecla ser pressionada.",
            "explanation": "O atributo src referencia um arquivo externo. keyup é associado à liberação da tecla."
          },
          {
            "text": "O JavaScript está em arquivo externo; focus indica ganho de foco e keyup indica liberação de uma tecla.",
            "explanation": "Correto: o carregamento usa src e os dois eventos representam essas interações distintas."
          },
          {
            "text": "O atributo href carrega o script, e click significa que qualquer tecla foi liberada.",
            "explanation": "O elemento <script> usa src para um arquivo externo. click não é o evento de liberação de tecla; esse é keyup."
          },
          {
            "text": "addEventListener é a única forma possível de associar um manipulador a um elemento HTML.",
            "explanation": "Além de addEventListener, existem propriedades como onclick e atributos de evento. Não há essa exclusividade."
          }
        ],
        "correct": 2,
        "explanation": "O atributo src de <script> permite separar o JavaScript do HTML. focus ocorre quando o elemento recebe foco; keyup ocorre ao liberar uma tecla. click está associado à ativação de um elemento. addEventListener é uma forma de registrar ouvintes; propriedades como onclick também permitem associar manipuladores.",
        "tip": "focus = ganhou foco; blur = perdeu foco; keyup = liberou a tecla."
      },
      {
        "id": "s2-q6",
        "topics": [
          "dom"
        ],
        "context": "Uma página tem três parágrafos. O código precisa tornar vermelho somente o primeiro deles, sem alterar seu texto.",
        "prompt": "Qual trecho realiza essa tarefa?",
        "options": [
          {
            "text": "document.getElementsByTagName(\"p\").color = \"red\";",
            "explanation": "O método devolve uma coleção; é preciso acessar um elemento e sua propriedade style.color."
          },
          {
            "text": "document.getElementById(\"p\").textContent = \"red\";",
            "explanation": "Isso procuraria um id igual a “p” e alteraria texto. O pedido é selecionar por tag e modificar a cor."
          },
          {
            "text": "document.getElementsByTagName(\"p\")[1].style.color = \"red\";",
            "explanation": "O índice 1 seleciona o segundo parágrafo, pois os índices começam em zero."
          },
          {
            "text": "document.getElementsByTagName(\"p\")[0].textContent = \"red\";",
            "explanation": "O primeiro parágrafo é selecionado, mas textContent troca o texto por “red”; não altera a cor."
          },
          {
            "text": "document.getElementsByTagName(\"p\")[0].style.color = \"red\";",
            "explanation": "Correto: a coleção é indexada em zero e style.color altera a cor do primeiro parágrafo."
          }
        ],
        "correct": 4,
        "explanation": "getElementsByTagName(\"p\") recupera uma coleção de elementos <p>. O acesso [0] obtém o primeiro item. A propriedade style dá acesso às declarações CSS do próprio elemento, e style.color = \"red\" define sua cor de texto. textContent teria outra finalidade: modificar o conteúdo textual.",
        "tip": "Coleções começam no índice zero: [0] é o primeiro item, [1] é o segundo."
      },
      {
        "id": "s2-q7",
        "topics": [
          "css-externo",
          "seletores"
        ],
        "context": "O arquivo tema.css contém a regra .aviso { color: blue; }. O HTML precisa carregar essa folha externa.",
        "prompt": "Qual associação e interpretação estão corretas?",
        "options": [
          {
            "text": "Use <script src=\"tema.css\"></script>; .aviso seleciona apenas o elemento de id aviso.",
            "explanation": "<script> carrega JavaScript, não uma folha CSS. O ponto seleciona classe, enquanto # seleciona id."
          },
          {
            "text": "Use <link rel=\"stylesheet\" href=\"tema.css\">; .aviso seleciona elementos com a classe aviso.",
            "explanation": "Correto: a folha externa usa <link>, e o seletor com ponto corresponde a uma classe."
          },
          {
            "text": "Use <style href=\"tema.css\"></style>; color é o seletor e .aviso é o valor.",
            "explanation": "<style> não usa href para carregar a folha. Na regra, .aviso é o seletor e color é a propriedade."
          },
          {
            "text": "Use <link rel=\"stylesheet\" href=\"tema.css\">; .aviso é uma tag obrigatória do HTML.",
            "explanation": "A associação está correta, mas .aviso é um seletor de classe, não uma tag HTML."
          },
          {
            "text": "Use <link src=\"tema.css\">; os valores CSS devem aparecer antes de suas propriedades.",
            "explanation": "<link> precisa de href e rel=\"stylesheet\" para esse uso. A declaração segue propriedade: valor."
          }
        ],
        "correct": 1,
        "explanation": "A folha externa é associada por <link rel=\"stylesheet\" href=\"tema.css\">. Na regra .aviso { color: blue; }, .aviso seleciona todos os elementos com class=\"aviso\", color é a propriedade e blue é o valor. Para selecionar um id, a sintaxe seria #aviso.",
        "tip": "Ponto seleciona classe; cerquilha (#) seleciona id."
      },
      {
        "id": "s2-q8",
        "topics": [
          "cor",
          "fontes"
        ],
        "context": "Um site precisa mostrar o texto em azul e tentar usar uma fonte chamada Open Sans. Se ela não estiver disponível, deve tentar Arial e, depois, uma fonte sem serifa.",
        "prompt": "Qual regra expressa corretamente essa preferência?",
        "options": [
          {
            "text": "p { color: blue; font-family: \"Open Sans\" + Arial + sans-serif; }",
            "explanation": "A lista de fontes deve ser separada por vírgulas, não por sinais de adição."
          },
          {
            "text": "p { text-color: blue; font-family: \"Open Sans\", Arial, sans-serif; }",
            "explanation": "A lista de fontes está correta, mas text-color não é a propriedade CSS padrão para a cor do texto."
          },
          {
            "text": "p { color: blue; font-weight: \"Open Sans\", Arial, sans-serif; }",
            "explanation": "font-weight controla peso, como normal ou bold. A lista de fontes deve ser atribuída a font-family."
          },
          {
            "text": "p { color: blue; font-family: \"Open Sans\", Arial, sans-serif; }",
            "explanation": "Correto: color define a cor e font-family apresenta a sequência de fontes e a alternativa genérica."
          },
          {
            "text": "p { background-color: blue; font-size: \"Open Sans\"; }",
            "explanation": "background-color modifica o fundo, enquanto font-size espera um tamanho, não uma família."
          }
        ],
        "correct": 3,
        "explanation": "color define a cor do texto. A lista de font-family é ordenada e separada por vírgulas; o navegador tenta usar as fontes disponíveis nessa ordem. Nomes com espaços podem ser escritos entre aspas. sans-serif é uma família genérica de fallback. Apenas citar uma fonte não a baixa automaticamente.",
        "tip": "Uma lista em font-family oferece alternativas quando uma fonte não está disponível."
      },
      {
        "id": "s2-q9",
        "topics": [
          "fundo",
          "posicionamento"
        ],
        "context": "Um bloco .externo tem position: relative. Dentro dele há um .interno com position: static e, dentro deste, um .selo com position: absolute; top: 0; left: 0; margin: 0. Não há transform, filter, contain ou outro recurso que estabeleça bloco de referência.",
        "prompt": "Para usar imagem de fundo em .interno e posicionar o selo, qual afirmação está correta?",
        "options": [
          {
            "text": "Use background-image: url(\"papel.png\") em .interno; o selo usa .externo como bloco de referência.",
            "explanation": "Correto: .interno é static, então, neste cenário, o ancestral posicionado mais próximo é .externo."
          },
          {
            "text": "Use bg-image: \"papel.png\"; o selo usa obrigatoriamente .interno por ser seu pai imediato.",
            "explanation": "bg-image não é a propriedade padrão, e o pai static não se torna referência apenas pelo parentesco."
          },
          {
            "text": "Use background-size: url(\"papel.png\"); o selo sempre usa a janela.",
            "explanation": "background-size recebe dimensões, não carrega a imagem. O ancestral relative fornece a referência neste cenário."
          },
          {
            "text": "Use color: url(\"papel.png\"); o selo fica no fluxo normal porque top vale zero.",
            "explanation": "color não define imagens de fundo. top: 0 não desfaz position: absolute nem devolve o elemento ao fluxo normal."
          },
          {
            "text": "Use background-image: url(\"papel.png\"); se .externo virasse static e nenhum ancestral estabelecesse referência, o selo ficaria relativo a .interno.",
            "explanation": "A imagem está correta, mas, sem um ancestral que estabeleça o bloco de referência, o absoluto usa o bloco de referência inicial, não qualquer pai static."
          }
        ],
        "correct": 0,
        "explanation": "A imagem de fundo é definida por background-image com url(). No cenário, .interno é static e não estabelece um bloco de referência para o selo absoluto. A busca chega a .externo, que tem position: relative. Sem ancestral que estabeleça essa referência, o posicionamento absoluto usa o bloco de referência inicial.",
        "tip": "O ancestral de referência nem sempre é o pai imediato."
      },
      {
        "id": "s2-q10",
        "topics": [
          "usabilidade"
        ],
        "context": "Um usuário volta a um sistema após um mês e consegue lembrar como concluir uma tarefa. Outro conclui a mesma tarefa rapidamente, sem etapas desnecessárias.",
        "prompt": "Quais qualidades de usabilidade aparecem, respectivamente, nos dois casos?",
        "options": [
          {
            "text": "Quantidade de telas e identidade visual.",
            "explanation": "O cenário fala de recordar o uso e realizar a tarefa com eficiência, não de contar telas ou avaliar identidade visual."
          },
          {
            "text": "Peso da fonte e tamanho do arquivo.",
            "explanation": "Esses são aspectos de apresentação e desempenho técnico; não descrevem diretamente as duas qualidades relatadas."
          },
          {
            "text": "Facilidade de memorização e eficiência de uso.",
            "explanation": "Correto: lembrar depois de um intervalo corresponde à memorização; concluir sem esforço desnecessário se relaciona à eficiência."
          },
          {
            "text": "Obrigação de memorizar comandos e ausência de qualquer informação.",
            "explanation": "Boa memorização não significa exigir comandos decorados, e a eficiência não depende de eliminar informações necessárias."
          },
          {
            "text": "Ter poucas informações e usar mais animações.",
            "explanation": "Essas escolhas visuais não garantem que alguém lembre do fluxo ou realize a tarefa eficientemente."
          }
        ],
        "correct": 2,
        "explanation": "A facilidade de memorização permite retomar o uso após um intervalo. A eficiência se relaciona aos recursos empregados para atingir um objetivo, como tempo e esforço. Ambas contribuem para a usabilidade, ao lado de aprendizado, eficácia, tratamento de erros e satisfação no contexto de uso.",
        "tip": "Lembrar como fazer = memorização; fazer com bom uso de tempo e esforço = eficiência."
      }
    ]
  },
  {
    "id": "simulado-3",
    "number": 3,
    "title": "Simulado 03",
    "subtitle": "Leia trechos de código e conecte os conceitos da revisão.",
    "questions": [
      {
        "id": "s3-q1",
        "topics": [
          "funcoes"
        ],
        "context": "Uma função recebe uma nota e devolve o valor acrescido de um ponto. O programa guarda a função em uma variável antes de chamá-la.",
        "prompt": "Qual análise está correta?",
        "code": "function acrescentar(nota) {\n  return nota + 1;\n}\nconst calcular = acrescentar;\nconst notaFinal = calcular(6);",
        "options": [
          {
            "text": "calcular recebe imediatamente 7, pois atribuir uma função a uma variável sempre a executa.",
            "explanation": "A atribuição sem parênteses guarda a referência à função. A execução só ocorre em calcular(6)."
          },
          {
            "text": "calcular recebe a função acrescentar; notaFinal recebe 7 após a chamada com o argumento 6.",
            "explanation": "Correto: funções podem ser tratadas como valores. O argumento 6 chega ao parâmetro nota e o retorno é 7."
          },
          {
            "text": "notaFinal recebe 6, porque o parâmetro e o retorno precisam ter valores idênticos.",
            "explanation": "O retorno depende da expressão indicada. nota + 1 transforma 6 em 7."
          },
          {
            "text": "O código falha porque function só permite funções sem parâmetros.",
            "explanation": "function permite declarar funções com ou sem parâmetros. A declaração apresentada é válida."
          },
          {
            "text": "O código só seria válido se return fosse substituído por alert.",
            "explanation": "return é a instrução adequada para devolver um valor à chamada. alert tem outra finalidade: mostrar uma caixa de diálogo."
          }
        ],
        "correct": 1,
        "explanation": "Funções JavaScript são valores que podem ser atribuídos a variáveis. calcular aponta para acrescentar; calcular(6) executa essa função, passando 6 para nota. A instrução return entrega 7 à atribuição de notaFinal.",
        "tip": "Guardar uma função permite executá-la mais tarde, inclusive em resposta a um evento."
      },
      {
        "id": "s3-q2",
        "topics": [
          "links",
          "tabelas"
        ],
        "context": "Uma tabela precisa ter o cabeçalho “Apostila” e, na linha seguinte, um link para guia.html. O link deve solicitar um novo contexto de navegação, normalmente uma nova aba.",
        "prompt": "Qual fragmento atende aos requisitos?",
        "options": [
          {
            "text": "<table><row><th>Apostila</th></row><row><td><a href=\"guia.html\" target=\"_blank\">Guia</a></td></row></table>",
            "explanation": "O link está correto, mas a tag HTML de linha é <tr>, não <row>."
          },
          {
            "text": "<table><tr><td>Apostila</td></tr><tr><td><a to=\"guia.html\" target=\"_blank\">Guia</a></td></tr></table>",
            "explanation": "O cabeçalho deve usar <th>, e o endereço do link deve estar em href, não em to."
          },
          {
            "text": "<table><tr><th>Apostila</th></tr><tr><td><a href=\"guia.html\" target=\"_self\">Guia</a></td></tr></table>",
            "explanation": "A tabela está adequada, mas _self usa o contexto atual. O requisito pede um novo contexto."
          },
          {
            "text": "<table><th><tr>Apostila</tr></th><td><tr><a href=\"guia.html\" target=\"_blank\">Guia</a></tr></td></table>",
            "explanation": "A hierarquia foi invertida: linhas <tr> contêm células <th> ou <td>, e não o contrário."
          },
          {
            "text": "<table><tr><th>Apostila</th></tr><tr><td><a href=\"guia.html\" target=\"_blank\">Guia</a></td></tr></table>",
            "explanation": "Correto: as linhas usam <tr>, o cabeçalho usa <th>, os dados usam <td> e o link combina href com target=\"_blank\"."
          }
        ],
        "correct": 4,
        "explanation": "A estrutura correta é tabela → linhas → células. <th> marca o cabeçalho e <td> marca os dados. Para o link, href indica guia.html e target=\"_blank\" solicita outro contexto de navegação. A decisão de abrir aba ou janela depende do navegador e das preferências do usuário.",
        "tip": "Leia HTML de fora para dentro para conferir quem contém quem."
      },
      {
        "id": "s3-q3",
        "topics": [
          "padroes",
          "estrutura"
        ],
        "context": "Ao revisar uma página, um aluno propõe quatro afirmações: I. W3C significa World Wide Web Consortium. II. <html> é a raiz do documento. III. <title>, em <head>, pode definir o título da aba. IV. <body> deve ficar dentro de <title>.",
        "prompt": "Qual conjunto contém apenas as afirmações corretas e inclui todas elas?",
        "options": [
          {
            "text": "I e IV.",
            "explanation": "I está correta, mas IV inverte a estrutura: <title> fica em <head>; <body> é irmão de <head> em <html>."
          },
          {
            "text": "II, III e IV.",
            "explanation": "II e III estão corretas; IV está errada e I também deveria estar no conjunto."
          },
          {
            "text": "I, II e III.",
            "explanation": "Correto: o nome do consórcio, a raiz do documento e o papel de <title> estão corretos. IV é falsa."
          },
          {
            "text": "Apenas II.",
            "explanation": "Além de II, I e III também estão corretas."
          },
          {
            "text": "I, II, III e IV.",
            "explanation": "IV é falsa: o conteúdo de <body> não pertence ao elemento <title>."
          }
        ],
        "correct": 2,
        "explanation": "O W3C é o World Wide Web Consortium, que atua no desenvolvimento de padrões para a Web. No HTML, <html> é a raiz e contém <head> e <body>. O elemento <title> fica em <head> e fornece o título do documento, normalmente mostrado na aba do navegador.",
        "tip": "<title> dá nome ao documento na aba; um título visível na página usa, por exemplo, <h1>."
      },
      {
        "id": "s3-q4",
        "topics": [
          "css-externo",
          "seletores"
        ],
        "context": "O documento contém <p id=\"lembrete\" class=\"nota\">Revise hoje</p>. Uma folha externa chamada estudo.css deve ser carregada e incluir uma regra que selecione esse elemento pelo id.",
        "prompt": "Qual alternativa está correta?",
        "options": [
          {
            "text": "<link rel=\"stylesheet\" href=\"estudo.css\"> e #lembrete { color: blue; }.",
            "explanation": "Correto: a folha usa link com href, e #lembrete é um seletor de id."
          },
          {
            "text": "<link rel=\"stylesheet\" href=\"estudo.css\"> e .lembrete { color: blue; }.",
            "explanation": "A folha é carregada corretamente, mas .lembrete selecionaria uma classe. O id deve ser selecionado por #lembrete."
          },
          {
            "text": "<script src=\"estudo.css\"></script> e #lembrete { color: blue; }.",
            "explanation": "O seletor está correto, mas <script> carrega JavaScript. A folha CSS deve ser associada por <link rel=\"stylesheet\" href=\"...\">."
          },
          {
            "text": "<link rel=\"stylesheet\" src=\"estudo.css\"> e #lembrete { color = blue; }.",
            "explanation": "O endereço precisa estar em href; a declaração CSS usa dois-pontos, não sinal de igualdade."
          },
          {
            "text": "<style href=\"estudo.css\"></style> e lembrete { blue: color; }.",
            "explanation": "<style> não carrega a folha por href. O seletor de id precisa de #, e a ordem correta da declaração é color: blue."
          }
        ],
        "correct": 0,
        "explanation": "A folha externa é associada ao documento com <link rel=\"stylesheet\" href=\"estudo.css\">. #lembrete seleciona o elemento por seu id. Um seletor .nota também alcançaria o elemento pela classe, mas o enunciado pede seleção pelo id. Dentro das chaves, uma declaração usa propriedade: valor.",
        "tip": "Id é identificado no seletor por #; classe, por ponto."
      },
      {
        "id": "s3-q5",
        "topics": [
          "titulos",
          "espacos"
        ],
        "context": "Um aluno usa <h1> para o título da página, <h2> para o título da seção e digita o parágrafo do código abaixo. Não há CSS que preserve espaços e a largura é suficiente para o texto caber em uma linha.",
        "prompt": "Qual resultado é esperado para o parágrafo e para a hierarquia dos títulos?",
        "code": "<p>Foco      na\n\nrevisão.</p>",
        "options": [
          {
            "text": "O parágrafo terá uma linha em branco, e <h2> é o nível mais alto de título.",
            "explanation": "A linha em branco no código não produz uma linha vazia com white-space: normal; <h1> tem nível mais alto que <h2>."
          },
          {
            "text": "O parágrafo mostrará seis espaços entre “Foco” e “na”, e <h1> deve ser substituído por <header1>.",
            "explanation": "Espaços comuns repetidos são colapsados. <h1> é válido e <header1> não é o elemento padrão."
          },
          {
            "text": "O parágrafo não será exibido, porque uma quebra de linha no código fecha automaticamente o elemento <p>.",
            "explanation": "Uma quebra de linha no texto não fecha o parágrafo nem impede sua exibição."
          },
          {
            "text": "O parágrafo mostrará “Foco na revisão.” com espaçamento normal; <h1> e <h2> representam níveis diferentes de títulos.",
            "explanation": "Correto: a formatação do arquivo não preserva espaços extras e os elementos de título organizam semanticamente o conteúdo."
          },
          {
            "text": "O parágrafo mostrará “Foconarevisão.”, e <h1> e <h2> são apenas nomes de classes CSS.",
            "explanation": "O processamento normal preserva a separação entre palavras. <h1> e <h2> são elementos HTML, não classes CSS."
          }
        ],
        "correct": 3,
        "explanation": "Os níveis de título vão de <h1> a <h6> e indicam organização do conteúdo. O espaçamento visual não acompanha automaticamente a indentação do arquivo. Com white-space: normal, as sequências de espaços e as quebras presentes neste exemplo são colapsadas em separação comum entre as palavras.",
        "tip": "Uma linha vazia no arquivo não equivale a um novo parágrafo na página."
      },
      {
        "id": "s3-q6",
        "topics": [
          "dom",
          "eventos"
        ],
        "context": "O elemento <p id=\"status\">Pendente</p> e um botão com id=\"concluir\" já existem no DOM. A função deve alterar o texto do parágrafo quando o botão for ativado.",
        "prompt": "Qual alternativa descreve corretamente o efeito do código?",
        "code": "function concluir() {\n  document.getElementById(\"status\").textContent = \"Concluído\";\n}\ndocument.getElementById(\"concluir\").onclick = concluir;",
        "options": [
          {
            "text": "O texto muda no instante da atribuição a onclick, porque concluir está sem parênteses.",
            "explanation": "Sem parênteses, concluir é passada como referência. A atribuição registra o manipulador e não executa a função imediatamente."
          },
          {
            "text": "O código altera todos os parágrafos, pois getElementById seleciona pelo nome da tag.",
            "explanation": "getElementById seleciona pelo id informado. O código altera o elemento de id status, não todos os parágrafos."
          },
          {
            "text": "A função concluir é registrada para click; quando executada, textContent troca o texto de status por “Concluído”.",
            "explanation": "Correto: o evento do botão chama a função registrada, que seleciona o parágrafo pelo id e altera seu texto."
          },
          {
            "text": "onclick indica exclusivamente ganho de foco, e textContent altera uma propriedade CSS.",
            "explanation": "Ganho de foco corresponde a focus. textContent altera conteúdo textual, não estilo CSS."
          },
          {
            "text": "O método correto seria getElementsByTagName(\"status\"), pois ids e nomes de tags são a mesma coisa.",
            "explanation": "Id é um identificador de elemento; nome de tag é outro critério. getElementsByTagName(\"status\") procuraria tags <status> e devolveria uma coleção."
          }
        ],
        "correct": 2,
        "explanation": "O DOM permite acessar e modificar objetos que representam os elementos. getElementById seleciona por id; textContent define texto. Atribuir concluir a onclick registra essa função como resposta ao evento click. Para buscar todos os parágrafos por tag, seria usado getElementsByTagName(\"p\").",
        "tip": "Registre a referência da função para que ela seja chamada quando o evento ocorrer."
      },
      {
        "id": "s3-q7",
        "topics": [
          "cor",
          "fontes"
        ],
        "context": "Uma regra foi escrita como p { colour: blue; font-family: 14px; }. A intenção é ter texto azul com a fonte Verdana e uma alternativa sem serifa.",
        "prompt": "Qual correção atende exatamente ao objetivo?",
        "options": [
          {
            "text": "p { color: blue; font-size: Verdana; }",
            "explanation": "color está correta, mas font-size espera um tamanho. A família deve ser indicada em font-family e falta o fallback."
          },
          {
            "text": "p { font-color: blue; font-family: Verdana, sans-serif; }",
            "explanation": "A lista de fontes está correta, mas a propriedade de cor do texto é color, não font-color."
          },
          {
            "text": "p { color: blue; font-family: 14px, Verdana; }",
            "explanation": "14px é um tamanho, não uma família de fonte. A regra também não informa a família genérica solicitada."
          },
          {
            "text": "p { background-color: blue; font-family: serif, Verdana; }",
            "explanation": "A regra colore o fundo, não o texto. Ela também prioriza serif, contrariando a preferência por Verdana com fallback sem serifa."
          },
          {
            "text": "p { color: blue; font-family: Verdana, sans-serif; }",
            "explanation": "Correto: usa a grafia color e uma lista de famílias com Verdana como primeira opção e sans-serif como reserva."
          }
        ],
        "correct": 4,
        "explanation": "A propriedade CSS padronizada é color, com a grafia americana. font-family recebe nomes de fontes e famílias genéricas, e não tamanhos em pixels. Na lista Verdana, sans-serif, o navegador tenta Verdana antes de recorrer a uma alternativa sem serifa.",
        "tip": "Não confunda família (Verdana), tamanho (14px) e peso (bold)."
      },
      {
        "id": "s3-q8",
        "topics": [
          "scripts",
          "eventos"
        ],
        "context": "Uma página quer executar código JavaScript externo depois da análise do HTML e reagir à liberação de uma tecla em um campo. O arquivo treino.js registra o ouvinte no campo existente.",
        "prompt": "Qual combinação atende ao cenário?",
        "options": [
          {
            "text": "<link rel=\"javascript\" href=\"treino.js\"> e evento keydown.",
            "explanation": "<link> não é a forma padrão de carregar JavaScript executável. Além disso, keydown corresponde à pressão, não à liberação da tecla."
          },
          {
            "text": "<script src=\"treino.js\" defer></script> e evento keyup.",
            "explanation": "Correto: o script clássico externo usa src e defer; keyup corresponde à liberação de uma tecla."
          },
          {
            "text": "<script href=\"treino.js\"></script> e evento focus.",
            "explanation": "O atributo de arquivo externo em <script> é src. focus indica ganho de foco, não liberação de tecla."
          },
          {
            "text": "<style src=\"treino.js\"></style> e evento click.",
            "explanation": "<style> contém CSS. click não é o evento específico de liberação de uma tecla."
          },
          {
            "text": "<js src=\"treino.js\"></js> e evento keyup.",
            "explanation": "keyup é adequado, mas <js> não é o elemento HTML padrão para associar código JavaScript à página."
          }
        ],
        "correct": 1,
        "explanation": "O JavaScript externo é associado por <script src=\"treino.js\" defer></script>. Em scripts clássicos externos, defer faz a execução aguardar a análise do HTML. keyup sinaliza liberação da tecla; keydown, pressão; focus, ganho de foco. Scripts também podem conter código diretamente no documento.",
        "tip": "Para JavaScript externo, lembre o par script + src."
      },
      {
        "id": "s3-q9",
        "topics": [
          "fundo",
          "posicionamento"
        ],
        "context": "O código aplica uma imagem a um painel e posiciona um aviso dentro dele. Considere margens zero e nenhum transform, filter, contain ou outro recurso que estabeleça bloco de referência.",
        "prompt": "Qual análise está correta?",
        "code": ".painel { position: relative; background-image: url(\"caderno.png\"); }\n.aviso { position: absolute; top: 12px; left: 12px; margin: 0; }",
        "options": [
          {
            "text": "background-image muda a fonte, e top: 12px mede a distância até o topo da janela em qualquer situação.",
            "explanation": "background-image define uma imagem de fundo. O painel relative estabelece a referência do aviso, portanto top não é necessariamente relativo à janela."
          },
          {
            "text": "O aviso precisa de position: static para respeitar top e left.",
            "explanation": "top e left não deslocam um elemento com position: static. O aviso absoluto usa o painel como referência neste cenário."
          },
          {
            "text": "position: relative no painel é herdado automaticamente pelo aviso e anula absolute.",
            "explanation": "position não é herdada automaticamente. O aviso tem sua própria declaração absolute e o painel fornece sua referência."
          },
          {
            "text": "background-image define o fundo do painel; o aviso é posicionado em relação ao painel, com deslocamentos top e left de 12px.",
            "explanation": "Correto: a imagem é definida por url(), e o painel relative é o ancestral posicionado mais próximo."
          },
          {
            "text": "background-attachment deveria substituir background-image, pois é a propriedade que recebe a URL da imagem.",
            "explanation": "background-attachment controla o comportamento do fundo na rolagem; background-image é a propriedade que recebe a imagem."
          }
        ],
        "correct": 3,
        "explanation": "background-image recebe a imagem usada no fundo. No cenário, position: relative no painel estabelece o bloco de referência do aviso absoluto, e top/left definem seus deslocamentos em relação a esse bloco. As propriedades CSS não são todas herdadas: position, por exemplo, não é herdada automaticamente. Sem ancestral que estabeleça essa referência, usa-se o bloco de referência inicial.",
        "tip": "Não generalize a herança: algumas propriedades, como color, normalmente são herdadas; outras, como position, não."
      },
      {
        "id": "s3-q10",
        "topics": [
          "usabilidade"
        ],
        "context": "Uma pessoa seleciona a alternativa errada em um simulado. A interface precisa ajudá-la a entender o resultado e continuar estudando com autonomia.",
        "prompt": "Qual solução favorece a usabilidade e a experiência de aprendizagem?",
        "options": [
          {
            "text": "Indicar o erro com texto claro, mostrar a alternativa correta, explicar o motivo e oferecer um próximo passo compreensível.",
            "explanation": "Correto: o retorno ajuda a entender a ação, aprender com o erro e continuar a tarefa."
          },
          {
            "text": "Exibir apenas um símbolo vermelho sem texto, deixando o usuário descobrir o significado.",
            "explanation": "Um símbolo ou uma cor isolada pode ser ambíguo e não explica como interpretar ou corrigir a resposta."
          },
          {
            "text": "Apagar todo o progresso assim que houver um erro para obrigar a recomeçar.",
            "explanation": "Uma perda de progresso sem necessidade aumenta o esforço e prejudica a recuperação de erros."
          },
          {
            "text": "Ocultar a explicação para reduzir ao máximo a quantidade de informação na tela.",
            "explanation": "A explicação é uma informação necessária para essa tarefa de aprendizagem; removê-la não garante simplicidade útil."
          },
          {
            "text": "Trocar os botões de posição a cada questão para estimular a memorização.",
            "explanation": "Mudar controles sem motivo aumenta a carga de aprendizado e dificulta previsibilidade e memorização."
          }
        ],
        "correct": 0,
        "explanation": "Uma interface utilizável oferece retorno claro e permite reconhecer, entender e superar erros. Neste contexto, a correção comentada apoia o objetivo do aluno. Consistência, linguagem compreensível, facilidade de aprendizado e eficiência favorecem a experiência; pouca informação, isoladamente, não é um objetivo suficiente.",
        "tip": "A qualidade da interface deve ser avaliada pela tarefa que a pessoa precisa concluir."
      }
    ]
  },
  {
    "id": "simulado-4",
    "number": 4,
    "title": "Simulado 04",
    "subtitle": "Pratique conceitos e interprete situações de uma página Web.",
    "questions": [
      {
        "id": "s4-q1",
        "topics": [
          "css-externo",
          "seletores"
        ],
        "context": "Um site mantém sua apresentação em revisao.css e quer aplicar a mesma regra a todos os parágrafos.",
        "prompt": "Qual par de trechos associa corretamente o arquivo CSS à página e define uma regra válida?",
        "options": [
          {
            "text": "<script href=\"revisao.css\"></script> e p(color: blue)",
            "explanation": "<script> carrega JavaScript, não associa uma folha CSS com href. A regra CSS exige chaves e dois-pontos."
          },
          {
            "text": "<style src=\"revisao.css\"></style> e p { blue: color; }",
            "explanation": "<style> não usa src para carregar uma folha externa; além disso, propriedade e valor foram invertidos."
          },
          {
            "text": "<link rel=\"stylesheet\" href=\"revisao.css\"> e p { color: blue; }",
            "explanation": "<link> com rel=\"stylesheet\" e href associa a folha. Na regra, p é o seletor, color a propriedade e blue o valor."
          },
          {
            "text": "<link rel=\"stylesheet\" src=\"revisao.css\"> e p { color = blue; }",
            "explanation": "O atributo necessário é href, não src; uma declaração CSS usa dois-pontos, não sinal de igualdade."
          },
          {
            "text": "<css href=\"revisao.css\"> e <p color=\"blue\">",
            "explanation": "<css> não é uma tag padrão para importar folhas; o par também não apresenta uma regra CSS válida."
          }
        ],
        "correct": 2,
        "explanation": "A ligação de uma folha externa usa <link rel=\"stylesheet\" href=\"arquivo.css\">, usualmente dentro de <head>. Uma regra CSS tem seletor e um bloco de declarações no formato propriedade: valor.",
        "tip": "CSS externo: link + stylesheet + href."
      },
      {
        "id": "s4-q2",
        "topics": [
          "padroes",
          "estrutura"
        ],
        "context": "Uma equipe deseja criar documentos interoperáveis e consulta recomendações de tecnologias Web. Ao revisar a página, verifica também sua estrutura básica.",
        "prompt": "Qual alternativa associa corretamente uma organização de padronização e a estrutura de um documento HTML?",
        "options": [
          {
            "text": "ABNT; o elemento <body> deve conter o elemento <head>.",
            "explanation": "A ABNT não é a organização internacional de padrões Web pedida, e <head> não fica dentro de <body>."
          },
          {
            "text": "Google; <head> e <body> devem ficar fora de <html>.",
            "explanation": "Google é uma empresa; os elementos <head> e <body> pertencem ao elemento raiz <html>."
          },
          {
            "text": "W3C; <head> e <body> são elementos contidos em <html>.",
            "explanation": "O W3C desenvolve padrões e recomendações para a Web; <html> contém a estrutura principal formada por <head> e <body>."
          },
          {
            "text": "W3C; <body> é o elemento raiz e contém <html>.",
            "explanation": "A organização está correta, mas a hierarquia foi invertida: <html> é a raiz do documento."
          },
          {
            "text": "Microsoft; <html5> é o elemento raiz dos documentos atuais.",
            "explanation": "Microsoft não é a organização pedida e não existe um elemento raiz HTML padrão chamado <html5>."
          }
        ],
        "correct": 2,
        "explanation": "O W3C é uma organização internacional voltada a padrões da Web. Na estrutura usual de um documento HTML, <html> é a raiz; <head> reúne metadados e <body>, o conteúdo da página.",
        "tip": "Lembre a árvore: html → head e body."
      },
      {
        "id": "s4-q3",
        "topics": [
          "scripts",
          "eventos"
        ],
        "context": "Uma página carrega app.js por um elemento <script defer src=\"app.js\"></script>. No arquivo externo, o código abaixo associa uma função a um botão existente na página.",
        "prompt": "O que a configuração realiza?",
        "options": [
          {
            "text": "Executa mostrar automaticamente na linha do addEventListener, antes de qualquer interação.",
            "explanation": "A função é passada como referência; não há parênteses chamando mostrar nessa linha."
          },
          {
            "text": "Usa o atributo href para localizar app.js e espera o botão receber foco.",
            "explanation": "O arquivo de script é indicado por src. O evento registrado é click, não focus."
          },
          {
            "text": "Impede qualquer JavaScript dentro do documento HTML.",
            "explanation": "É possível usar scripts externos e scripts com código no próprio documento; a presença de um não proíbe o outro."
          },
          {
            "text": "Carrega JavaScript externo com src e registra mostrar para ser executada quando ocorrer click no botão.",
            "explanation": "src identifica o arquivo externo; addEventListener registra a função para o evento click, sem executá-la naquele instante."
          },
          {
            "text": "Registra um evento keyup, que ocorre antes de a tecla ser pressionada.",
            "explanation": "O evento registrado é click. keyup se refere à liberação de uma tecla, não ao instante anterior à pressão."
          }
        ],
        "correct": 3,
        "explanation": "O elemento <script> associa JavaScript à página, podendo conter código ou apontar um arquivo por src. addEventListener(\"click\", mostrar) registra uma função para o clique. O atributo defer faz um script externo clássico executar após a análise do HTML.",
        "tip": "Registrar uma função como resposta a um evento é diferente de chamá-la agora.",
        "code": "function mostrar() {\n  alert(\"Bom estudo!\");\n}\ndocument.getElementById(\"iniciar\")\n  .addEventListener(\"click\", mostrar);"
      },
      {
        "id": "s4-q4",
        "topics": [
          "links",
          "tabelas"
        ],
        "context": "Um portal apresenta uma tabela com um link para o material de estudo.",
        "prompt": "Considerando o trecho, assinale a alternativa correta.",
        "options": [
          {
            "text": "O atributo target define o endereço, e href define em qual janela abrir.",
            "explanation": "As funções estão invertidas: href informa o destino, enquanto target escolhe o contexto de navegação."
          },
          {
            "text": "O elemento <tr> cria uma célula e <td> cria uma linha.",
            "explanation": "<tr> cria uma linha; <td> cria uma célula de dados dentro dela."
          },
          {
            "text": "O elemento <th> deve ser substituído por <table-head>, pois essa é a tag padrão de cabeçalho.",
            "explanation": "<th> é uma célula de cabeçalho válida. <table-head> não é a tag padrão; <thead> agrupa linhas de cabeçalho."
          },
          {
            "text": "O valor _self obriga o navegador a abrir uma nova aba.",
            "explanation": "_self utiliza o mesmo contexto de navegação; o valor normalmente usado para outro contexto é _blank."
          },
          {
            "text": "O href informa o destino; _self usa o mesmo contexto de navegação; <th> e <td> são células de uma linha <tr>.",
            "explanation": "Cada função está correta: href é o endereço, _self mantém o contexto atual e <tr> contém as células da tabela."
          }
        ],
        "correct": 4,
        "explanation": "Links são criados com <a> e têm o destino indicado por href. Em tabelas, <tr> representa uma linha, <th> uma célula de cabeçalho e <td> uma célula de dados. O target _self abre no contexto atual.",
        "tip": "TR = linha; TH = cabeçalho; TD = dados.",
        "code": "<table>\n  <tr><th>Material</th></tr>\n  <tr><td><a href=\"revisao.html\" target=\"_self\">Revisão</a></td></tr>\n</table>"
      },
      {
        "id": "s4-q5",
        "topics": [
          "usabilidade"
        ],
        "context": "Depois de um teste de uso, uma equipe quer melhorar a experiência de estudantes em um simulado online.",
        "prompt": "Qual mudança contribui diretamente para eficiência, prevenção de erros e satisfação?",
        "options": [
          {
            "text": "Esconder os rótulos dos botões para deixar a tela mais vazia.",
            "explanation": "Rótulos ajudam a compreender as ações. Reduzir conteúdo a qualquer custo pode aumentar dúvidas e erros."
          },
          {
            "text": "Mudar a posição de todos os comandos a cada questão.",
            "explanation": "A inconsistência prejudica a memorização e faz a pessoa reaprender a interface durante o uso."
          },
          {
            "text": "Mostrar apenas uma nota final, sem qualquer indicação do que foi respondido.",
            "explanation": "A falta de retorno reduz a clareza sobre o resultado das ações e dificulta revisar os próprios erros."
          },
          {
            "text": "Usar comandos claros, informar o progresso e explicar respostas erradas para apoiar a revisão.",
            "explanation": "Essas medidas tornam a tarefa compreensível, oferecem retorno e ajudam a pessoa a corrigir equívocos."
          },
          {
            "text": "Exigir que o estudante memorize a ordem de todas as questões antes de começar.",
            "explanation": "Essa exigência impõe carga de memória sem ajudar a realizar a tarefa de estudar e responder."
          }
        ],
        "correct": 3,
        "explanation": "Usabilidade envolve realizar objetivos com clareza e eficiência, aprender a usar a interface, lembrar como ela funciona e lidar com erros. Pouca informação, isoladamente, não garante uma boa experiência; a informação precisa ser adequada à tarefa.",
        "tip": "Uma interface útil mostra o próximo passo e dá retorno sobre cada ação."
      },
      {
        "id": "s4-q6",
        "topics": [
          "dom"
        ],
        "context": "No documento existe um elemento <p id=\"aviso\">Aguardando</p>. O JavaScript executa o trecho a seguir depois que esse elemento foi criado no DOM.",
        "prompt": "Qual afirmação descreve corretamente os métodos e as propriedades utilizados?",
        "options": [
          {
            "text": "getElementById busca um elemento pelo id; textContent altera o texto; style.color altera o estilo de cor.",
            "explanation": "O método retorna o elemento com o id informado. As duas atribuições mudam seu conteúdo textual e seu estilo inline de cor."
          },
          {
            "text": "getElementById busca todos os parágrafos e devolve uma coleção.",
            "explanation": "Esse método busca por um id e devolve um elemento ou null. getElementsByTagName(\"p\") é que devolve uma coleção de parágrafos."
          },
          {
            "text": "textContent interpreta o texto atribuído como novas tags HTML.",
            "explanation": "textContent trata a atribuição como texto, sem interpretar marcação; isso o diferencia de innerHTML."
          },
          {
            "text": "style.color muda a classe CSS do elemento para uma classe chamada blue.",
            "explanation": "style.color atribui diretamente uma cor ao estilo inline; classes seriam gerenciadas por className ou classList."
          },
          {
            "text": "getElementsByTagName(\"p\") e getElementById(\"aviso\") sempre retornam o mesmo tipo de resultado.",
            "explanation": "O primeiro retorna uma coleção de elementos; o segundo retorna um elemento individual ou null."
          }
        ],
        "correct": 0,
        "explanation": "O DOM representa os elementos da página como objetos que JavaScript pode acessar. getElementById seleciona pelo identificador; textContent define texto; style dá acesso a declarações CSS inline do elemento.",
        "tip": "Id seleciona um elemento; nome de tag pode selecionar vários.",
        "code": "const aviso = document.getElementById(\"aviso\");\naviso.textContent = \"Pode começar\";\naviso.style.color = \"blue\";"
      },
      {
        "id": "s4-q7",
        "topics": [
          "titulos",
          "espacos"
        ],
        "context": "O trecho abaixo não recebe CSS que altere o espaço em branco; vale o comportamento normal do HTML.",
        "prompt": "Qual será a interpretação correta do trecho?",
        "options": [
          {
            "text": "O título é de nível 2, e os espaços e a quebra de linha do parágrafo não produzem separações extras visíveis.",
            "explanation": "<h2> indica um título de nível 2. Com white-space: normal, sequências de espaços e quebras de linha colapsam, sem criar uma linha vazia."
          },
          {
            "text": "O título é de nível 1, pois é o primeiro título escrito no arquivo.",
            "explanation": "O nível é determinado pela tag <h2>, não pela posição em que o título aparece."
          },
          {
            "text": "A quebra de linha no código força uma nova linha visual no parágrafo.",
            "explanation": "Uma quebra de linha no texto fonte não equivale a <br> quando white-space é normal."
          },
          {
            "text": "Cada espaço entre as palavras será preservado na tela.",
            "explanation": "Sequências de espaços comuns são colapsadas no modo normal de tratamento de espaços."
          },
          {
            "text": "O elemento <h2> é inválido; títulos só podem ser criados com <header2>.",
            "explanation": "<h2> é uma tag válida; <header2> não é um elemento HTML padrão para títulos."
          }
        ],
        "correct": 0,
        "explanation": "Os elementos <h1> a <h6> indicam níveis de títulos. No parágrafo comum, espaços repetidos e quebras de linha do código são colapsados; para preservar a formatação, seria necessário outro tratamento, como <pre> ou CSS adequado.",
        "tip": "Quebra de linha no código fonte não é a tag <br>.",
        "code": "<h2>Conteúdo da revisão</h2>\n<p>Estudar    HTML\ncom atenção.</p>"
      },
      {
        "id": "s4-q8",
        "topics": [
          "fundo",
          "posicionamento"
        ],
        "context": "Um cartão tem position: relative e contém um selo com position: absolute. Não há transform, filter, contain ou outro recurso que crie um bloco de referência diferente. O selo tem margin: 0.",
        "prompt": "Onde ficará o selo e qual propriedade insere uma imagem de fundo no cartão?",
        "options": [
          {
            "text": "No canto superior esquerdo da janela; background-size insere a imagem.",
            "explanation": "O cartão posicionado fornece a referência do selo. background-size ajusta o tamanho de uma imagem, sem indicar qual arquivo usar."
          },
          {
            "text": "No canto superior esquerdo do bloco de referência estabelecido pelo cartão; background-image indica a imagem.",
            "explanation": "O ancestral posicionado mais próximo, neste cenário, é o cartão. background-image com url() define o arquivo usado no fundo."
          },
          {
            "text": "Na posição normal do texto; bg-image insere a imagem.",
            "explanation": "position: absolute retira o selo do fluxo normal. bg-image não é uma propriedade CSS padrão."
          },
          {
            "text": "Sempre no canto da página, mesmo que exista um ancestral relative; background-attachment indica o arquivo.",
            "explanation": "Um ancestral relative pode estabelecer a referência do descendente absolute; background-attachment controla como o fundo se comporta na rolagem."
          },
          {
            "text": "No canto inferior direito do cartão; background-color recebe url().",
            "explanation": "top: 0 e left: 0 indicam o canto superior esquerdo da referência. background-color recebe cores, não imagens via url()."
          }
        ],
        "correct": 1,
        "explanation": "No cenário apresentado, o selo absoluto é posicionado em relação ao cartão com position: relative. Sem um ancestral que estabeleça esse bloco, a referência seria o bloco de contenção inicial. background-image: url(...) define a imagem de fundo.",
        "tip": "Absolute procura um bloco de referência; relative no contêiner é o caso básico mais comum.",
        "code": ".cartao {\n  position: relative;\n  background-image: url(\"papel.png\");\n}\n.selo { position: absolute; top: 0; left: 0; margin: 0; }"
      },
      {
        "id": "s4-q9",
        "topics": [
          "funcoes"
        ],
        "context": "Uma função JavaScript calcula o dobro de um número e seu retorno é guardado em uma variável.",
        "prompt": "Qual valor será armazenado em resultado?",
        "options": [
          {
            "text": "4, porque return devolve sempre o argumento original.",
            "explanation": "return devolve a expressão que o acompanha; aqui essa expressão multiplica o argumento por 2."
          },
          {
            "text": "8, porque n recebe 4 e return devolve n * 2.",
            "explanation": "A chamada dobro(4) passa 4 para o parâmetro n; a expressão 4 * 2 resulta em 8."
          },
          {
            "text": "2, porque o parâmetro n não pode receber valores de fora da função.",
            "explanation": "Parâmetros recebem os argumentos fornecidos na chamada. Portanto n recebe 4."
          },
          {
            "text": "undefined, porque uma função com parâmetro não pode retornar um valor.",
            "explanation": "Funções com parâmetros podem retornar valores normalmente; existe um return explícito nesse código."
          },
          {
            "text": "O código é inválido, pois funções devem ser declaradas com func.",
            "explanation": "A palavra-chave da declaração apresentada é function; func não substitui function em JavaScript."
          }
        ],
        "correct": 1,
        "explanation": "Na declaração function dobro(n), n é um parâmetro. A chamada fornece o argumento 4. O comando return encerra essa execução da função e devolve 8, que é atribuído a resultado.",
        "tip": "Parâmetro aparece na definição; argumento aparece na chamada.",
        "code": "function dobro(n) {\n  return n * 2;\n}\nconst resultado = dobro(4);"
      },
      {
        "id": "s4-q10",
        "topics": [
          "cor",
          "fontes"
        ],
        "context": "Uma revisão de estilo precisa deixar o texto azul e escolher Arial como primeira opção de fonte, com uma família genérica de reserva.",
        "prompt": "Qual declaração satisfaz os dois requisitos?",
        "options": [
          {
            "text": "p { font-color: blue; font-family: 16px; }",
            "explanation": "A propriedade de cor é color, não font-color. 16px representa tamanho e não uma família de fonte."
          },
          {
            "text": "p { colour: blue; font-family: bold; }",
            "explanation": "CSS usa a grafia color. bold é valor típico de font-weight, não o nome de uma família genérica."
          },
          {
            "text": "p { background-color: blue; font-size: Arial; }",
            "explanation": "background-color muda o fundo, e font-size recebe um tamanho, não o nome Arial."
          },
          {
            "text": "p { color: blue; font-family: sans-serif, Arial; }",
            "explanation": "A ordem importa: essa lista prioriza a família genérica antes de Arial, contrariando o requisito de usar Arial como primeira opção."
          },
          {
            "text": "p { color: blue; font-family: Arial, sans-serif; }",
            "explanation": "color define a cor do texto; font-family lista Arial primeiro e sans-serif como alternativa genérica."
          }
        ],
        "correct": 4,
        "explanation": "color controla a cor do texto. font-family aceita uma lista ordenada de famílias; o navegador tenta a primeira disponível e pode recorrer às seguintes. A família genérica ao final fornece uma alternativa.",
        "tip": "Família escolhe o desenho; size escolhe o tamanho; weight escolhe o peso."
      }
    ]
  },
  {
    "id": "simulado-5",
    "number": 5,
    "title": "Simulado 05",
    "subtitle": "Consolide a revisão com cenários e leitura de código.",
    "questions": [
      {
        "id": "s5-q1",
        "topics": [
          "dom"
        ],
        "context": "Um documento possui três elementos <p>, e apenas um tem id=\"resumo\". O script roda depois da criação desses elementos.",
        "prompt": "Qual alternativa descreve corretamente os resultados do código?",
        "options": [
          {
            "text": "paragrafos é um único elemento, pois getElementsByTagName sempre retorna só o primeiro encontrado.",
            "explanation": "O método retorna uma coleção com os elementos da tag informada, não apenas o primeiro."
          },
          {
            "text": "resumo é uma coleção com os três parágrafos, pois id e nome da tag são equivalentes.",
            "explanation": "Id e nome da tag são critérios diferentes. getElementById busca um elemento pelo identificador informado."
          },
          {
            "text": "A atribuição a textContent cria um elemento HTML chamado Revise.",
            "explanation": "textContent define texto. Ela não interpreta a string como marcação nem cria uma tag com esse nome."
          },
          {
            "text": "paragrafos é uma coleção com os três <p>; resumo é o elemento de id \"resumo\", cujo texto e estilo são alterados.",
            "explanation": "Cada seleção usa o critério correto. textContent modifica o texto do elemento e style.color define sua cor inline."
          },
          {
            "text": "style.color altera todos os parágrafos porque resumo foi selecionado pelo nome da tag.",
            "explanation": "resumo foi selecionado por id. A alteração atua nesse elemento, não em todos os membros da coleção paragrafos."
          }
        ],
        "correct": 3,
        "explanation": "getElementsByTagName(\"p\") retorna uma coleção de parágrafos. getElementById(\"resumo\") retorna o elemento correspondente ou null. Como o cenário garante sua existência, textContent e style.color podem alterar seu conteúdo e sua apresentação.",
        "tip": "O plural em getElements sugere uma coleção.",
        "code": "const paragrafos = document.getElementsByTagName(\"p\");\nconst resumo = document.getElementById(\"resumo\");\nresumo.textContent = \"Revise os conceitos\";\nresumo.style.color = \"green\";"
      },
      {
        "id": "s5-q2",
        "topics": [
          "usabilidade"
        ],
        "context": "Um professor avalia se a interface de estudo é fácil de aprender, eficiente, fácil de lembrar e capaz de ajudar o aluno a lidar com erros.",
        "prompt": "Qual afirmação NÃO é um bom critério de usabilidade?",
        "options": [
          {
            "text": "Uma tela é necessariamente melhor quanto menos informações possuir, mesmo que faltem orientações essenciais.",
            "explanation": "A quantidade isolada de informação não garante usabilidade. Remover instruções essenciais pode tornar o uso confuso e aumentar os erros."
          },
          {
            "text": "Quem usa a interface pela primeira vez deve conseguir entender como começar.",
            "explanation": "Facilidade de aprendizado é um critério pertinente: a pessoa precisa compreender como realizar a tarefa."
          },
          {
            "text": "A pessoa deve conseguir realizar a tarefa sem etapas desnecessárias.",
            "explanation": "Eficiência envolve alcançar o objetivo com esforço adequado e sem passos que não ajudam a tarefa."
          },
          {
            "text": "Depois de um período sem usar a interface, deve ser possível retomar seu uso com facilidade.",
            "explanation": "Essa é a facilidade de memorização, um aspecto relevante da usabilidade."
          },
          {
            "text": "A interface deve dar retorno sobre ações e ajudar a entender e corrigir erros.",
            "explanation": "Retorno e apoio à recuperação de erros ajudam a pessoa a controlar o uso e completar sua tarefa."
          }
        ],
        "correct": 0,
        "explanation": "Uma boa experiência depende de informação suficiente e adequada ao contexto. Clareza, eficiência, facilidade de aprendizado e memorização e tratamento de erros são relevantes. Um resumo que remove informações necessárias pode prejudicar a tarefa.",
        "tip": "Na pergunta com NÃO, identifique a afirmação inadequada, mesmo que as outras sejam verdadeiras."
      },
      {
        "id": "s5-q3",
        "topics": [
          "funcoes"
        ],
        "context": "O código declara uma função sem parâmetros, guarda a própria função em uma variável e depois a chama.",
        "prompt": "Qual é a interpretação correta?",
        "options": [
          {
            "text": "O código é inválido porque toda função precisa receber pelo menos um parâmetro.",
            "explanation": "Uma função pode ser declarada com uma lista de parâmetros vazia, como mensagem()."
          },
          {
            "text": "A variável acao guarda o texto \"Olá\" logo na atribuição, pois funções são executadas ao serem referenciadas.",
            "explanation": "Sem parênteses, mensagem é uma referência à função. Sua execução ocorre na chamada acao()."
          },
          {
            "text": "A palavra function é opcional nesse tipo de declaração; func teria o mesmo significado.",
            "explanation": "Na forma de declaração exibida, a palavra-chave é function. func não tem esse significado em JavaScript."
          },
          {
            "text": "acao recebe uma referência à função, e texto recebe \"Olá\" depois da chamada acao().",
            "explanation": "Funções são valores que podem ser atribuídos a variáveis. A chamada com parênteses executa a função e recebe o valor retornado."
          },
          {
            "text": "return apenas mostra uma mensagem na tela e não produz valor para a chamada.",
            "explanation": "return devolve um valor para quem chamou a função; exibir na tela exigiria outra ação, como alterar o DOM."
          }
        ],
        "correct": 3,
        "explanation": "JavaScript permite tratar funções como valores: atribuí-las a variáveis e passá-las como argumentos. Aqui, acao aponta para a função mensagem; acao() executa essa função e seu return fornece a string \"Olá\".",
        "tip": "Nome sem parênteses: referência. Nome com parênteses: chamada.",
        "code": "function mensagem() {\n  return \"Olá\";\n}\nconst acao = mensagem;\nconst texto = acao();"
      },
      {
        "id": "s5-q4",
        "topics": [
          "padroes",
          "estrutura"
        ],
        "context": "Uma documentação apresenta três afirmações sobre HTML e padrões da Web. I. O W3C participa do desenvolvimento de padrões Web. II. <head> reúne metadados e <body> contém o conteúdo da página. III. <body> deve ser colocado dentro de <head>.",
        "prompt": "Quais afirmações estão corretas?",
        "options": [
          {
            "text": "Somente I.",
            "explanation": "I está correta, mas II também descreve corretamente as funções de <head> e <body>."
          },
          {
            "text": "Somente II e III.",
            "explanation": "II está correta, porém III está errada: <head> e <body> são irmãos dentro de <html>."
          },
          {
            "text": "Somente III.",
            "explanation": "III está errada. O corpo não é descendente do elemento <head> na estrutura usual do documento."
          },
          {
            "text": "I, II e III.",
            "explanation": "I e II estão corretas; III contradiz a estrutura HTML, que separa metadados e corpo."
          },
          {
            "text": "Somente I e II.",
            "explanation": "O W3C trabalha com padrões Web, e a divisão entre metadados em <head> e conteúdo em <body> está correta. III inverte a hierarquia."
          }
        ],
        "correct": 4,
        "explanation": "O documento HTML tem <html> como elemento raiz e, em sua estrutura usual, contém <head> e <body>. O W3C é uma organização internacional associada ao desenvolvimento de padrões para tecnologias Web.",
        "tip": "Head descreve o documento; body abriga o conteúdo."
      },
      {
        "id": "s5-q5",
        "topics": [
          "cor",
          "fontes"
        ],
        "context": "A regra deve deixar o texto verde e preferir uma fonte com nome composto, usando uma família genérica se ela não estiver disponível.",
        "prompt": "Qual regra expressa corretamente essa intenção?",
        "options": [
          {
            "text": "p { text-color: green; font-family: \"Times New Roman\", serif; }",
            "explanation": "A lista de fontes está adequada, mas text-color não é a propriedade CSS padrão para a cor do texto."
          },
          {
            "text": "p { color: green; font-family: 18px, serif; }",
            "explanation": "A cor está correta; 18px é um tamanho e não uma família válida na lista de font-family."
          },
          {
            "text": "p { color: green; font-family: \"Times New Roman\", serif; }",
            "explanation": "color muda o texto; a fonte preferida aparece primeiro, e serif é a família genérica de reserva."
          },
          {
            "text": "p { background-image: green; font-family: \"Times New Roman\"; }",
            "explanation": "background-image não define a cor do texto e green não é uma imagem. A declaração também omite a família genérica solicitada."
          },
          {
            "text": "p { colour: green; font-weight: \"Times New Roman\", serif; }",
            "explanation": "A grafia da propriedade é color. font-weight controla peso; a seleção de famílias usa font-family."
          }
        ],
        "correct": 2,
        "explanation": "A propriedade color usa a grafia inglesa americana e controla a cor do texto. font-family define uma lista de famílias em ordem de preferência. Nomes compostos podem ser escritos entre aspas; uma família genérica, como serif, oferece uma alternativa.",
        "tip": "Color cuida da cor; font-family cuida da família tipográfica."
      },
      {
        "id": "s5-q6",
        "topics": [
          "links",
          "tabelas"
        ],
        "context": "Uma lista de horários deve ser apresentada em tabela. Dentro de uma célula de dados haverá um link que abre um material em outro contexto de navegação, normalmente uma nova aba.",
        "prompt": "Qual alternativa usa os elementos e atributos adequados?",
        "options": [
          {
            "text": "<row><column><a to=\"aula.html\" target=\"_self\">Aula</a></column></row>",
            "explanation": "<row> e <column> não são as tags HTML para linha e célula, to não define o destino de <a> e _self usa o contexto atual."
          },
          {
            "text": "<tr><td><a href=\"aula.html\" target=\"_blank\">Aula</a></td></tr>, com cabeçalhos definidos por <th>.",
            "explanation": "<tr> contém a linha, <td> a célula de dados e <th> marca células de cabeçalho. href define o destino e _blank solicita outro contexto."
          },
          {
            "text": "<tr><th><a src=\"aula.html\">Aula</a></th></tr>, pois src define o destino do link.",
            "explanation": "O destino de <a> é definido por href, não src. Além disso, o cenário pede uma célula de dados, representada por <td>."
          },
          {
            "text": "<td><tr><a href=\"aula.html\" target=\"_self\">Aula</a></tr></td>, com linhas dentro das células.",
            "explanation": "A hierarquia está invertida: a linha <tr> contém células <td>. _self também não solicita outro contexto."
          },
          {
            "text": "<table-head><table-body><a href=\"aula.html\">Aula</a></table-body></table-head>.",
            "explanation": "Essas tags não são os elementos padrão para grupos da tabela. Os nomes corretos são <thead> e <tbody>, com linhas e células dentro deles."
          }
        ],
        "correct": 1,
        "explanation": "A estrutura de uma tabela utiliza linhas <tr> e células <th> ou <td>. O link é criado por <a href=\"...\">. O target _blank solicita um novo contexto de navegação; o navegador e as preferências do usuário determinam se será uma aba ou janela.",
        "tip": "Href é o endereço; target é onde navegar."
      },
      {
        "id": "s5-q7",
        "topics": [
          "fundo",
          "posicionamento"
        ],
        "context": "Um selo absoluto está dentro de uma seção static. Não há ancestral posicionado, transform, filter, contain nem outro recurso que estabeleça um bloco de referência para ele.",
        "prompt": "Qual análise é correta para o selo e para a imagem de fundo?",
        "options": [
          {
            "text": "O selo sempre usa a seção static como referência, e bg-image indica a imagem de fundo.",
            "explanation": "Um ancestral static, por si só, não estabelece a referência de um descendente absoluto nesse cenário. A propriedade padrão é background-image."
          },
          {
            "text": "top e left são ignorados quando position é absolute; background-size escolhe o arquivo.",
            "explanation": "top e left participam do posicionamento absoluto. background-size controla dimensões do fundo, sem escolher seu arquivo."
          },
          {
            "text": "O selo usa o último elemento irmão como referência, e background-color recebe a imagem.",
            "explanation": "Irmãos não fornecem automaticamente o bloco de referência do absoluto. background-color define cor, não imagem."
          },
          {
            "text": "O selo usa a posição normal do texto, e background-attachment substitui background-image.",
            "explanation": "O absoluto sai do fluxo normal. background-attachment controla o comportamento do fundo na rolagem, não o endereço da imagem."
          },
          {
            "text": "O selo usa o bloco de contenção inicial; background-image: url(\"grade.png\") define a imagem de fundo.",
            "explanation": "Sem um ancestral que crie outro bloco de referência, o absoluto usa o bloco de contenção inicial. A declaração background-image com url() indica a imagem."
          }
        ],
        "correct": 4,
        "explanation": "Na situação restrita descrita, não há ancestral que estabeleça um bloco de contenção para o selo absoluto; ele se refere ao bloco de contenção inicial. Se a seção passasse a position: relative, ela normalmente se tornaria sua referência. background-image define a imagem usada no fundo.",
        "tip": "Um ancestral static não vira referência de absolute apenas por ser o pai.",
        "code": ".secao {\n  position: static;\n  background-image: url(\"grade.png\");\n}\n.selo { position: absolute; top: 0; left: 0; }"
      },
      {
        "id": "s5-q8",
        "topics": [
          "scripts",
          "eventos"
        ],
        "context": "Um campo já existe no DOM. O trecho abaixo pode estar dentro de <script> ou em um arquivo JavaScript externo corretamente carregado.",
        "prompt": "O que acontece ao executar a atribuição campo.onfocus = destacar?",
        "options": [
          {
            "text": "A função destacar é registrada para quando o campo receber foco; a atribuição não a executa imediatamente.",
            "explanation": "onfocus recebe a referência da função. Ela será chamada pelo mecanismo de eventos quando o evento focus ocorrer no campo."
          },
          {
            "text": "A função é chamada imediatamente, porque o sinal de igualdade dispara o evento focus.",
            "explanation": "A atribuição apenas associa a função ao evento; ela não dispara focus nem chama destacar naquele instante."
          },
          {
            "text": "A função é registrada para click, pois onfocus e onclick são nomes equivalentes.",
            "explanation": "focus significa receber foco; click corresponde à ativação por clique. São eventos diferentes."
          },
          {
            "text": "O código só pode funcionar em um arquivo externo, pois <script> não aceita código JavaScript.",
            "explanation": "<script> pode conter JavaScript diretamente. Também pode apontar um arquivo externo pelo atributo src."
          },
          {
            "text": "A atribuição espera uma tecla ser liberada, pois onfocus equivale a onkeyup.",
            "explanation": "keyup ocorre quando uma tecla é liberada. focus é o recebimento de foco pelo elemento."
          }
        ],
        "correct": 0,
        "explanation": "Propriedades como onfocus e onclick podem receber uma função tratadora. addEventListener é outra forma de registrar eventos, mas não é a única. Código JavaScript pode ser escrito no documento com <script> ou carregado de um arquivo com src.",
        "tip": "Focus = recebeu foco; click = clique; keyup = tecla liberada.",
        "code": "const campo = document.getElementById(\"nome\");\nfunction destacar() {\n  campo.style.color = \"blue\";\n}\ncampo.onfocus = destacar;"
      },
      {
        "id": "s5-q9",
        "topics": [
          "css-externo",
          "seletores"
        ],
        "context": "Uma folha externa chamada tema.css contém a regra .aviso { color: blue; }. O desenvolvedor deseja aplicá-la à página.",
        "prompt": "Qual alternativa está correta?",
        "options": [
          {
            "text": "A folha deve ser incluída com <script src=\"tema.css\">, e .aviso seleciona uma tag <aviso>.",
            "explanation": "Folhas CSS são associadas por <link rel=\"stylesheet\">. O ponto indica seletor de classe, não de tag."
          },
          {
            "text": "Usa-se <link rel=\"stylesheet\" href=\"tema.css\">; .aviso seleciona elementos da classe aviso e color: blue é uma declaração.",
            "explanation": "A ligação externa está correta. Na regra, .aviso é o seletor de classe e color: blue associa uma propriedade a um valor."
          },
          {
            "text": "Usa-se <style href=\"tema.css\">; a propriedade é blue e o valor é color.",
            "explanation": "<style> não usa href para importar uma folha. A declaração tem propriedade color e valor blue, nessa ordem."
          },
          {
            "text": "Usa-se <link src=\"tema.css\">; .aviso seleciona somente o elemento cujo id é aviso.",
            "explanation": "A ligação pede href e rel=\"stylesheet\". Um id seria selecionado por #aviso, enquanto .aviso é uma classe."
          },
          {
            "text": "Não é possível reutilizar uma folha CSS em mais de uma página HTML.",
            "explanation": "Uma vantagem do CSS externo é justamente permitir que várias páginas usem o mesmo arquivo de estilos."
          }
        ],
        "correct": 1,
        "explanation": "O CSS externo pode ser compartilhado por várias páginas por meio de <link rel=\"stylesheet\" href=\"tema.css\">. A sintaxe básica da regra é seletor { propriedade: valor; }. O prefixo ponto seleciona uma classe; cerquilha seleciona um id.",
        "tip": "Ponto para classe, # para id; propriedade vem antes dos dois-pontos."
      },
      {
        "id": "s5-q10",
        "topics": [
          "titulos",
          "espacos"
        ],
        "context": "Uma página usa <h1> para o título geral e <h3> para um título de seção. Um parágrafo contém diversos espaços e quebras de linha no código fonte, com white-space: normal.",
        "prompt": "Qual análise é correta?",
        "options": [
          {
            "text": "<h3> é mais importante semanticamente do que <h1>, pois 3 é maior que 1.",
            "explanation": "A numeração indica níveis: <h1> é o nível mais alto e <h3> é um nível inferior."
          },
          {
            "text": "As tags de título definem apenas o tamanho da fonte, sem significado estrutural.",
            "explanation": "Os títulos têm significado na organização do documento; sua aparência pode ser alterada com CSS."
          },
          {
            "text": "<h1> e <h3> indicam níveis de título, e os espaços repetidos do parágrafo são colapsados na exibição normal.",
            "explanation": "As tags expressam uma hierarquia. Com white-space: normal, sequências de espaços e quebras de linha não preservam a formatação do arquivo."
          },
          {
            "text": "Cada linha do código fonte cria automaticamente um novo parágrafo.",
            "explanation": "Novos parágrafos são marcados com elementos como <p>; linhas no código fonte não fazem isso automaticamente."
          },
          {
            "text": "É obrigatório usar <header1> e <header3> para que a hierarquia seja reconhecida.",
            "explanation": "Os elementos padrão são <h1> a <h6>. <header1> e <header3> não são as tags de título HTML."
          }
        ],
        "correct": 2,
        "explanation": "Títulos organizam o conteúdo semanticamente e não devem ser escolhidos apenas pelo tamanho visual. Já o espaço em branco comum é colapsado no comportamento normal; para controlar linhas e parágrafos, usam-se marcação ou CSS apropriados.",
        "tip": "Número menor em h1–h6 corresponde a nível de título mais alto."
      }
    ]
  }
];
