let questions = [
  {
    numb: 1,
    question: "|O que é computação?|:",
    answer:
      "c) É o estudo sistemático de algoritmos e estruturas de dados, que os computadores podem usar para resolver problemas de informação.",
    options: [
      "a) É o estudo das técnicas e aplicações de elementos e sistemas elétricos.",
      "b) É o estudo de métodos quantitativos para a análise de riscos financeiros.",
      "c) É o estudo sistemático de algoritmos e estruturas de dados, que os computadores podem usar para resolver problemas de informação.",
      "d) É um estudo de computadores e eventos passados.",
    ],
  },
  {
    numb: 2,
    question: "|O que é um sistema operacional?|:",
    answer:
      "a) É um conjunto de programas que gerencia os recursos de hardware do computador e fornece vários serviços para programas de software.",
    options: [
      "a) É um conjunto de programas que gerencia os recursos de hardware do computador e fornece vários serviços para programas de software.",
      "b) É um software que permite a criação de documentos de texto, planilhas e apresentações.",
      "c) É um conjunto de programas que gerencia os recursos de hardware do computador e não fornece serviços para programas de software.",
      "d) É um software que ajuda na renderização de gráficos 3D.",
    ],
  },
  {
    numb: 3,
    question: "|O que faz um programador?|:",
    answer:
      "a) Um programador escreve e testa códigos de computador que permitem que aplicativos e programas de software funcionem corretamente.",
    options: [
      "a) Um programador escreve e testa códigos de computador que permitem que aplicativos e programas de software funcionem corretamente.",
      "b) Um programador é responsável por projetar e construir Dados e codigos de edifícios.",
      "c) Um programador é responsável por criar e editar filmes ou vídeos.",
      "d) A principal habilidade de um programador é somente a capacidade de construir códigos.",
    ],
  },
  {
    numb: 4,
    question:
      "|Qual das seguintes afirmações é verdadeira sobre a criação de um site em HTML/CSS?|:",
    answer:
      "b) HTML é usado para estruturar o conteúdo da web, enquanto CSS é usado para estilizar e layoutar esse conteúdo.",
    options: [
      "a) HTML é usado para adicionar interatividade ao site, enquanto CSS é usado para conectar o site a um banco de dados.",
      "b) HTML é usado para estruturar o conteúdo da web, enquanto CSS é usado para estilizar e layoutar esse conteúdo.",
      "c) HTML é usado para criar gráficos 3D, enquanto CSS é usado para animações complexas.",
      "d) HTML é usado para estilizar e layoutar o conteúdo da web, enquanto CSS é usado para estruturar esse conteúdo.",
    ],
  },
  {
    numb: 5,
    question:
      "|Qual das seguintes afirmações é verdadeira sobre redes de computadores e infraestrutura?|:",
    answer:
      "c) Redes de computadores consistem em um conjunto de dispositivos interconectados que compartilham recursos e informações. A infraestrutura de rede inclui hardware (roteadores, switches, cabos) e software (protocolos, sistemas operacionais de rede) que suportam a comunicação e a transferência de dados entre dispositivos.",
    options: [
      "a) Redes de computadores consistem em um conjunto de dispositivos interconectados que compartilham recursos e informações, e a infraestrutura de rede não inclui hardware nem software.",
      "b) Redes de computadores consistem apenas em roteadores e switches, e a infraestrutura de rede inclui apenas cabos.",
      "c) Redes de computadores consistem em um conjunto de dispositivos interconectados que compartilham recursos e informações. A infraestrutura de rede inclui hardware (roteadores, switches, cabos) e software (protocolos, sistemas operacionais de rede) que suportam a comunicação e a transferência de dados entre dispositivos.",
      "d) Redes de computadores não compartilham recursos nem informações, e a infraestrutura de rede inclui apenas software.",
    ],
  },

  {
    numb: 6,
    question:
      "|Qual das seguintes carreiras na área de computação requer conhecimento especializado em proteger sistemas de informação contra ameaças e vulnerabilidades?|:",
    answer: "c) Analista de Segurança",
    options: [
      "a) Desenvolvedor de Software",
      "b) Cientista de Dados",
      "c) Analista de Segurança",
      "d) Engenheiro de Redes",
    ],
  },
];

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
};

exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
};

continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuetions(0);
  queCounter(1);
  startTimer(25);
  startTimerLine(0);
};

let timeValue = 25;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");
  timeValue = 25;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count);
  queCounter(que_numb);
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(25);
  startTimerLine(widthValue);
  timeText.textContent = "Tempo de Resposta...";
  next_btn.classList.remove("show");
};

quit_quiz.onclick = () => {
  window.location.reload();
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuetions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(25);
    startTimerLine(widthValue);
    timeText.textContent = "Tempo de Resposta...";
    next_btn.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
};

function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  const option = option_list.querySelectorAll(".option");

  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correcAns = questions[que_count].answer;
  const allOptions = option_list.children.length;

  if (userAns == correcAns) {
    userScore += 1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIconTag);
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIconTag);
    console.log("Wrong Answer");

    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correcAns) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.classList.add("show");
}

function showResult() {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3) {
    let scoreTag =
      "<span>Resultado: Ótimo, Parabéns 😊🎉<p>" +
      userScore +
      "</p> de <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 1) {
    let scoreTag =
      "<span> Resultado: BOM 😉<p>" +
      userScore +
      "</p> de <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag =
      "<span> Resultado: Ruim 😐 <p>" +
      userScore +
      "</p> de <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeText.textContent = "Tempo Esgotado😥";
      const allOptions = option_list.children.length;
      let correcAns = questions[que_count].answer;
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
      }
      next_btn.classList.add("show");
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 47);
  function timer() {
    time += 1;
    time_line.style.width = time + "px";
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}

function queCounter(index) {
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> | <p>" +
    questions.length +
    "</p>Questões</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag;
}
