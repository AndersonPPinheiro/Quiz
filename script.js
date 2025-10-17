 document.addEventListener("DOMContentLoaded", () => {
// =====================
// VARIÁVEIS GLOBAIS
// =====================
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const usernameInput = document.getElementById("username");
const userSection = document.getElementById("user-section");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const userResult = document.getElementById("user-result");

let currentQuestion = 0;
let correctAnswers = 0;
let userName = "";

let selectedOptionIndex = null;

const questions = [
  {
    question: "Pergunta 1: Os padrões arquiteturais de software estão ligados a aspectos amplos sobre o funcionamento e a operação da aplicação. Dessa forma, envolve fatores como: hardware, disponibilidade, tecnologias de comunicação, portabilidade e riscos. Analise a imagem a seguir: Trata-se da seguinte arquitetura de software:  ",
    options: ["Pipeline.", " Peer to Peer.", "Cliente-Servidor", "MVC Model-View-Controller"],
    correct: 3,
  },
  {
    question: "Pergunta 2: Existem diversas técnicas utilizadas para se obter um design responsivo de aplicações web e também diversos motivos para que se procure essa responsividade. Um dos pontos principais é que as pessoas já acessam a internet mais em dispositivos móveis do que em computadores desktops e notebooks. Sobre esse design responsivo e as aplicações móveis, assinale a alternativa correta. ",
    options: [" A técnica Mobile First é muito eficiente: começar projetando para mobile e depois projetar com melhoramento progressivo permite abranger todos os devices", "Uma das principais técnicas adotadas é o desenvolvimento de aplicações em grandes dispositivos, para então pensar nos menores. Do maior para o menor.", "Projetar levando em conta Mobile Last requer uma revisão profunda e fundamental de um site e, mais importante, requer uma revisão mental. ", " Projetar usando Mobile Last requer um planejamento cuidadoso, tempo e execução séria e com disciplina"],
    correct: 0,
  },
  {
     question: " Pergunta 3: HTML é uma linguagem de marcação que faz uso de tags para estruturar o seu conteúdo. Em uma página HTML, para que é utilizada a tag abaixo? ",
    options: ["Inserção de imagem", "Inserção de link", "Definição de parágrafo", "Definição de título "],
    correct: 1,
},
{
    question: " Pergunta 4: HyperText Markup Language HTML) é uma linguagem que nos permite criar conteúdo na web que pode ser renderizado por navegadores como o Google Chrome, Microsoft Edge e o Safari. A respeito dessa linguagem, analise as afirmativas abaixo e marque a alternativa correta  I. Documentos HTML são formados por marcadores tags que são delimitados pelos caracteres '<' e '>'. Além dos marcadores, temos nos documentos HTML os elementos. Eles são formados pelos marcadores que podem possuir atributos valores e elementos filhos.II.Os marcadores em HTML são case sensitive.III.Em sua versão 5, o HTML trouxe uma série de novos marcadores para elementos. São exemplos destes novos marcadores:",
    options: ["Apenas as afirmativas I e III estão corretas.", "Apenas a afirmativa I está correta.", "Apenas a afirmativa III está correta.", "Apenas as afirmativas II e III estão corretas."],
    correct: 0
},
{
    question: "Pergunta 5: A propriedade e o valor da regra de estilo CSS que estabelecem a distância de 16px entre o conteúdo de um elemento HTML e a sua borda, no contexto do modelo CSS Box, é:",
    options: [" margin: 16px; ", "border-width: 16px;", "word-spacing: 16px; ", "padding: 16px;"],
    correct: 3,
},
{
    question: "Pergunta 6 :Com relação às Ferramentas de desenvolvimento Web: CSS, assinale a alternativa que completa a sentença: A Cascading Style Sheets CSS) é uma linguagem de folha de estilo criada para ...: ",
    options: ["Separar a forma e o conteúdo em arquivos distintos de maneira a reduzir o tempo de carregamento de uma página web.", "Descrever a apresentação de arquivos no formato HTML, utilizando definições de exibição dos elementos deste arquivo.", " Permitir elaborar e executar, a partir do código HTML, funções matemáticas complexas.", " Simplificar a diagramação em HTML com elementos definidos em estruturas hierárquicas. Programação de alto nível em roteadores e switches. "],
    correct: 1,
},
{
    question: "Pergunta 7 :  Com a utilização de CSS, podemos manipular as cores dos elementos HTML. Assinale a alternativa que apresenta apenas padrões válidos para a definição de cores em CSS. ",
    options: ["RGB- RGB com porcentagem - LAB", "Palavras-chave - RGB com porcentagem - números hexadecimais com canal alpha.", "CMYK-RGB - palavraschave.", "HSL-RGB - números hexadecimais."],
     correct: 3
},
{
    question: "Pergunta 8 : JavaScript é uma linguagem de programação interpretada estruturada de script muito usada para programação FrontEnd. Selecione o método em JavaScript que remove de um vetor o primeiro elemento e o retorna como resultado. ",
     options: ["push()", "shift()", "pop()", "join()"],
    correct: 1,
},
{
    question: "Pergunta 9 : Como resposta a uma requisição AJAX, o script executando no servidor envia para o cliente a cadeia de caracteres seguinte, no formato JSON{nome:Rodrigo,id:8723,v:[-1,2] }que é recebida no seguinte campo do objeto XMLHttpRequest, em Javascript:",
    options: ["responseString ", "ServerResponse", "ResponseText ", "JSONResponse "],
    correct: 2,
},
{
    question: "Pergunta 10: .Qual instrução apresenta o conteúdo do primeiro elemento do vetor ou array declarado em PHP na forma: $estados = array(AM, AP,DF, PR, SP,SC,RS);",
    options: ["echo $estados[1; ", "print( $estados[1 );", "print_r( $estados[1 );", "echo $estados[0]"],
    correct: 3,
},
{
    question: "Pergunta 11:Com relação ao PHP Hypertext Preprocessor), há um comando para criar um conjunto (array) ou vetor associativo. Indique a alternativa que contém o uso correto desse comando.",
    options: [" $cadastro =array(''CPF'':''1234567890'',''Nome'':''Pedro'' ,''Cidade'':''Cascavel'');  ", "$cadastro =array(''CPF'':=''1234567890'',''Nome'':=''Pedro'' ,''Cidade'':=''Cascavel'';", "$cadastro =array(''CPF''=''1234567890'', ''Nome''=''Pedro'' , ''Cidade''=''Cascavel''); ", ")$cadastro =array(''CPF''''1234567890'',''Nome''''Pedro'' ,''Cidade''''Cascavel'');  "],
    correct: 3,
},
{
    question: "Pergunta 12:PHP é uma tecnologia que disponibiliza um comando para uso nas estruturas foreach, while, do-while ou switch. No seu funcionamento, ao ser detectado entre os comandos inseridos em um loop, faz com que ocorra o término imediato da execução do loop. Esse comando é conhecido por:",
    options: ["Exit. ", "Quit", "Break.", "halt."],
    correct: 2,
},
{
    question: "Pergunta 13: Segundo Beighley e Morrison 2010, quando um formulário HTML envia dados a um script PHP, utiliza-se um conjunto de variáveis superglobais (superglobais são variáveis pré-definidas pelo interpretador PHP e que estão sempre disponíveis em todos os escopos) para acessar os dados enviados pelo formulário HTML. Assinale a alternativa que apresenta os identificadores/nomes de variáveis superglobais corretos para a tarefa de acessar dados enviados por um formulário  ",
    options: ["HTML $_FORM, $_HTTP ", "$_GET, $_POST ", "$_SUPER_GET, $_SUPER_POST", "$_FORM, $_RESPONSE"],
    correct: 1,
},
{
    question: "Pergunta 14:Qual é a forma correta de conectar o PHP a um banco de dados MySQL? ",
    options: ["$conecta = mysql(HOST, LOGIN, SENHA) or print (mysql_error());", " $conecta = mysql_connect(HOST, LOGIN, SENHA) or print (mysql_error());", "$conecta = connect(HOST, LOGIN, SENHA) or print (error()); ", "$conecta = mysql_connect(HOST, LOGIN, SENHA) or print (error());"],
    correct: 1,
},
{
    question: "Pergunta 15: Para receber, em um arquivo PHP no servidor, os valores enviados em campos texto de um formulário HTML, utilizam-se variáveis predefinidas. Se o elemento form do formulário contiver method=get, a variável utilizada será ..I.. . Caso contenha method=post, a variável utilizada será ..II.. . Pode-se também utilizar a variável ..III.. que recebe os valores tanto se method=get quanto se method=post. As lacunas I, II e III da frase acima são preenchidas, correta e respectivamente, com:", 
    options:["GET, POST e DATAREQUEST", "doGet, doPost e processRequest ", "$GET_DATA, $POST_DATA e $REQUEST_DATA", "$_DOGET, $_DOPOST e $_DOREQUEST "],
    correct: 1,
},
];

// =====================
// INICIAR O QUIZ
// =====================
startBtn.addEventListener("click", () => {
  userName = usernameInput.value.trim();
  if (userName === "") {
    alert("Por favor, digite seu nome antes de começar.");
    return;
  }

  userSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  currentQuestion = 0;
  correctAnswers = 0;
  showQuestion();
});

// =====================
// EXIBIR QUESTÕES
// =====================
function showQuestion() {
  selectedOptionIndex = null;
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(btn);
  });

  nextBtn.disabled = true;
}

// =====================
// SELECIONAR OPÇÃO
// =====================
function selectOption(index) {
  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.classList.remove("selected");
  });

  const buttons = document.querySelectorAll(".option-btn");
  buttons[index].classList.add("selected");

  selectedOptionIndex = index;

  nextBtn.disabled = false;
}

// =====================
// PRÓXIMA QUESTÃO
// =====================
nextBtn.addEventListener("click", () => {
  if (selectedOptionIndex !== null) {
      const q = questions[currentQuestion];
      if (selectedOptionIndex === q.correct) {
          correctAnswers++;
      }
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

// =====================
// MOSTRAR RESULTADOS
// =====================
function showResults() {
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  const total = questions.length;
  const wrongAnswers = total - correctAnswers;
  const scorePercent = ((correctAnswers / total) * 100).toFixed(2);

  let message = "";
  if (scorePercent >= 80) message = "Excelente!";
  else if (scorePercent >= 50) message = "Bom desempenho!";
  else message = "Precisa melhorar";

  userResult.innerHTML = `
    <strong>${userName}</strong>, você acertou ${correctAnswers} de ${total} questões.<br>
    Erros: ${wrongAnswers}<br>
    Aproveitamento: ${scorePercent}%<br>
    <strong>${message}</strong>
  `;

  renderChart(correctAnswers, wrongAnswers);
}

// ==========
// GRÁFICO
// ==========
function renderChart(acertos, erros) {
  const chartElement = document.getElementById("resultChart");
  
  if (Chart.getChart(chartElement)) {
    Chart.getChart(chartElement).destroy();
  }

  const ctx = chartElement.getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Acertos", "Erros"],
      datasets: [
        {
          data: [acertos, erros],
          backgroundColor: ["#10b981", "#ef4444"],
        },
      ],
    },
    options: { 
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#fff'
          }
        }
      }
    }
  });
}

// =====================
// REFAZER QUIZ
// =====================
restartBtn.addEventListener("click", () => {
  resultSection.classList.add("hidden");
  userSection.classList.remove("hidden");
  usernameInput.value = "";
});
});