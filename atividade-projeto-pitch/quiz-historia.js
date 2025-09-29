const questions = [
    {
        question: "Em qual ano a Ditadura Militar iniciou no Brasil?",
        options: ["1930", "1945", "1960", "1964"],
        answer: 3
    },
    {
    question: "Em qual ano a Ditadura Militar acabou?",
    options: ["1985", "1970", "1969", "1975"],
    answer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;

const questionEl = document.getElementById("pergunta");
const optionsEl = document.getElementById("alternativas");
const nextBtn = document.getElementById("btn-proxima");
const resultEl = document.getElementById("pontuacao");
const timerEl = document.getElementById("cronometro");

function showQuestion() {
    resetTimer();
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option");
        btn.onclick = () => selectAnswer(index);
        optionsEl.appendChild(btn);
    });

    startTimer();
}

function selectAnswer(index) {
    const q = questions[currentQuestion];
    if (index === q.answer) {
        score++;
    }
    clearInterval(timer);
    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        nextBtn.style.display = "none";
    } else {
        showResult();
    }
};

function showResult() {
    questionEl.textContent = "Fim do Quiz!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    timerEl.style.display = "none";
    resultEl.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

function startTimer() {
    timeLeft = 10;
    timerEl.textContent = `Tempo: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Tempo: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        nextBtn.style.display = "block";
        optionsEl.innerHTML = "<p style='color:red;'>Tempo esgotado!</p>";
    }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 10;
    timerEl.textContent = `Tempo: ${timeLeft}s`;
}

showQuestion();
