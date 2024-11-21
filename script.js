const questions = [
    {
        question: "O que é um smartphone?",
        options: ["  Um computador de mesa", "Um telefone móvel com acesso à internet e aplicativos", "Um tipo de câmera digital", "Um dispositivo de armazenamento"],           
        answer: "Um telefone móvel com acesso à internet e aplicativos",
        image: "img/smart.jpg"
    },
 {
        question: "O que significa Wi-Fi?",
        options: ["  Uma tecnologia de impressão", "Um sistema de armazenamento em nuvem", "Tecnologia que permite conexão sem fio à internet", "Um tipo de software de segurança"],           
        answer: "Tecnologia que permite conexão sem fio à internet",
        image: "img/wifi.jpg"
    },
 {
        question: "Qual é a função de um sistema operacional?",
        options: ["Gerar gráficos em 3D", "Gerenciar hardware e recursos de dispositivos", "Aumentar a velocidade da internet", "Criar jogos"],           
        answer: "Gerenciar hardware e recursos de dispositivos",
        image: "img/sistem.jpg"
    },
{
        question: "Para que serve um navegador de internet?",
        options: ["Acessar e visualizar páginas da web", "Armazenar dados", "Programar software", "Editar fotos"],           
        answer: "Acessar e visualizar páginas da web",
        image: "img/ch.jpg"
    },
{
        question: "O que é a nuvem (cloud computing)?",
        options: ["Armazenamento em dispositivos locais", "Processamento de dados em servidores remotos acessíveis pela internet", "Um tipo de software de edição", "Tecnologia de videoconferência"],           
        answer: "Processamento de dados em servidores remotos acessíveis pela internet",
        image: "img/nuvem.jpg"
    },
{
        question: "Qual é a função de um antivírus?",
        options: ["Melhorar a qualidade do vídeo", "Proteger contra vírus e malware", "Gerenciar redes sociais", "Editar áudio"],           
        answer: "Proteger contra vírus e malware",
        image: "img/ant.jpg"
    },
{
        question: "O que é um aplicativo (app)?",
        options: ["Um software para funções específicas em dispositivos", "Um tipo de sistema operacional", "Um dispositivo de hardware", "Um protocolo de internet"],           
        answer: "Um software para funções específicas em dispositivos",
        image: "img/app.jpg"
    },
{
        question: "Qual é a função de um roteador?",
        options: ["Conectar dispositivos e gerenciar o tráfego de dado", "Armazenar arquivos", "Editar documentos", "Criar gráficos"],           
        answer: "Conectar dispositivos e gerenciar o tráfego de dados",
        image: "img/rot.jpg"
    },
{
        question: "O que é HTML?",
        options: ["Um tipo de software de edição", "Linguagem de marcação para criar e estruturar conteúdo na web", "Um sistema operacional", "Um dispositivo de armazenamento"],           
        answer: "Linguagem de marcação para criar e estruturar conteúdo na web",
        image: "img/html.jpg"
    },
{
        question: "O que é um drive USB?",
        options: ["Um dispositivo de rede", "Um dispositivo de armazenamento portátil conectado via USB", "Um tipo de smartphone", "Um software de segurança"],           
        answer: "Um dispositivo de armazenamento portátil conectado via USB",
        image: "img/drive.jpg"
    },
{
        question: "O que é streaming?",
        options: ["Download de arquivos", "Transmissão de áudio ou vídeo pela internet em tempo real", "Gravação de músicas", "Armazenamento de dados"],           
        answer: "Transmissão de áudio ou vídeo pela internet em tempo real",
        image: "img/stream.jpg"
    },
{
        question: "O que é a realidade aumentada (AR)?",
        options: ["Uma forma de videoconferência", "Tecnologia que sobrepõe informações digitais ao mundo real", "Um tipo de aplicativo", "Um software de edição"],           
        answer: "Tecnologia que sobrepõe informações digitais ao mundo real",
        image: "img/ar.jpg"
    },
{
        question: "Qual é a função de um assistente virtual como a Siri?",
        options: ["Realizar tarefas por comandos de voz", "Editar vídeos", "Criar gráficos", "Proteger dispositivos contra vírus"],           
        answer: "Realizar tarefas por comandos de voz",
        image: "img/brasilia.jpg"
    },
{
        question: "O que é um código QR?",
        options: ["Um tipo de cartão de memória", "Código de barras bidimensional que pode ser escaneado para acessar informações", "Um software de edição", "Um tipo de aplicativo"],           
        answer: "Código de barras bidimensional que pode ser escaneado para acessar informações",
        image: "img/brasilia.jpg"
    },
{
        question: "O que é Bluetooth?",
        options: ["Uma tecnologia de transmissão de rádio", "Tecnologia sem fio para troca de dados entre dispositivos próximos", "Um tipo de sistema operacional", "Um software de segurança"],           
        answer: "Tecnologia sem fio para troca de dados entre dispositivos próximos",
        image: "img/brasilia.jpg"
    },
{
        question: "O que são redes sociais?",
        options: ["Plataformas para edição de fotos", "Dispositivos de armazenamento", "Plataformas online para interação e compartilhamento de conteúdo", "Sistemas de segurança"],           
        answer: "Plataformas online para interação e compartilhamento de conteúdo",
        image: "img/brasilia.jpg"
    },
{
        question: "O que é um algoritmo?",
        options: ["Um tipo de software", "Um dispositivo de hardware", "Conjunto de instruções para resolver problemas ou realizar tarefas", "Uma tecnologia de comunicação"],           
        answer: "Conjunto de instruções para resolver problemas ou realizar tarefas",
        image: "img/brasilia.jpg"
    },
{
        question: "O que significa open source?",
        options: ["Um tipo de antivírus", "Um dispositivo de armazenamento", "Software com código-fonte disponível publicamente para uso e modificação", "Um sistema operacional"],           
        answer: "Software com código-fonte disponível publicamente para uso e modificação",
        image: "img/brasilia.jpg"
    },
{
        question: "O que é e-commerce?",
        options: ["Venda de produtos em lojas físicas", "Um tipo de aplicativo", "Um sistema de segurança", "Compra e venda de produtos ou serviços pela internet"],           
        answer: "Compra e venda de produtos ou serviços pela internet",
        image: "img/brasilia.jpg"
    },
{
        question: "O que é um firewall?",
        options: ["Um software de edição", "Um dispositivo de armazenamento", "Uma tecnologia de comunicação", "Sistema de segurança que controla o tráfego de rede"],           
        answer: "Sistema de segurança que controla o tráfego de rede",
        image: "img/brasilia.jpg"
    },

{
        question: "O que é um sistema operacional?",
        options: ["Um tipo de hardware que controla os componentes de um computador.", "Um conjunto de programas que permitem a comunicação entre o usuário e o hardware do computador.", "Um software que serve apenas para criar documentos de texto.", "Sistema de segurança que controla o tráfego de rede"],           
        answer: "Um conjunto de programas que permitem a comunicação entre o usuário e o hardware do computador.",
        image: "img/brasilia.jpg"
    },

{
        question: "Qual das alternativas abaixo é um exemplo de software de segurança?",
        options: ["Windows 10", " Microsoft Word", "Norton Antivirus", "Google Chrome"],           
        answer: "Norton Antivirus",
        image: "img/brasilia.jpg"
    },
{
        question: "Qual é a principal vantagem de utilizar a computação em nuvem?",
        options: ["Armazenamento de dados apenas no computador local.", "Acesso aos dados e aplicativos de qualquer lugar e a qualquer hora, usando a internet.", "Exigir a instalação de softwares pesados nos dispositivos locais.", "Conexão apenas entre computadores que estão fisicamente próximos."],           
        answer: "Acesso aos dados e aplicativos de qualquer lugar e a qualquer hora, usando a internet.",
        image: "img/brasilia.jpg"
    },
{
        question: "O que é um vírus de computador?",
        options: ["Um software que melhora o desempenho de um computador.", " Um programa que se propaga automaticamente e pode prejudicar o sistema.", "Um tipo de hardware utilizado para proteger dados.", "Um aplicativo de edição de fotos."],           
        answer: "Um programa que se propaga automaticamente e pode prejudicar o sistema.",
        image: "img/brasilia.jpg"
    },
{
        question: "Qual é a diferença principal entre uma rede LAN e uma rede WAN?",
        options: ["A LAN conecta dispositivos em uma área local, enquanto a WAN conecta dispositivos em uma área geograficamente ampla.", " A LAN usa a internet para se conectar, enquanto a WAN usa apenas cabos de fibra ótica.", "A LAN é usada apenas em empresas, e a WAN apenas em residências.", " A LAN é mais lenta do que a WAN em termos de transmissão de dados."],           
        answer: "A LAN conecta dispositivos em uma área local, enquanto a WAN conecta dispositivos em uma área geograficamente ampla.",
        image: "img/brasilia.jpg"
    },














       
    
];


let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;
const maxQuestions = 20;

const usernameInput = document.getElementById('username');
const startButton = document.getElementById('startButton');
const quizScreen = document.getElementById('quizScreen');
const questionTitle = document.getElementById('questionTitle');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('options');
const timerDisplay = document.getElementById('timeLeft');
const nextButton = document.getElementById('nextButton');
const resultScreen = document.getElementById('resultScreen');
const finalScoreDisplay = document.getElementById('finalScore');
const userNameDisplay = document.getElementById('userNameDisplay');
const userNameDisplayResult = document.getElementById('userNameDisplayResult');
const restartButton = document.getElementById('restartButton');
const questionImage = document.getElementById('questionImage');
const currentScoreDisplay = document.getElementById('currentScore');

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', loadNextQuestion);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    const username = usernameInput.value.trim();
    if (username === "") {
        alert("Por favor, insira seu nome.");
        return;
    }
    document.getElementById('welcomeScreen').classList.add('hidden');
    quizScreen.classList.remove('hidden');
    userNameDisplay.textContent = username;
    userNameDisplayResult.textContent = username;
    score = 0;
    currentQuestionIndex = 0;
    loadNextQuestion();
}

function loadNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = `Pergunta ${currentQuestionIndex + 1}`;
    questionText.textContent = currentQuestion.question;
    questionImage.src = currentQuestion.image;
    optionsContainer.innerHTML = '';
    timeLeft = 10;
    timerDisplay.textContent = timeLeft;

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            checkAnswer(null); // Se o tempo esgotar, passa a questão sem resposta
        }
    }, 1000);
}

function checkAnswer(selectedOption) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score += 10 + timeLeft; // Calcula pontos com base no tempo restante
    }
    currentScoreDisplay.textContent = score;
    nextButton.classList.remove('hidden');
    currentQuestionIndex++;
}

function endQuiz() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreDisplay.textContent = score;
}

function restartQuiz() {
    resultScreen.classList.add('hidden');
    document.getElementById('welcomeScreen').classList.remove('hidden');
    usernameInput.value = '';
    currentScoreDisplay.textContent = 0;
}
