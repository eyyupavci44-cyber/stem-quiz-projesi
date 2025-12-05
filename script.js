
/*******************************************************************************
 * STEM Quiz Projesi
 * Telif Hakkı (c) [Yıl], [Telif Hakkı Sahibi Adı]
 * Tüm hakları saklıdır.
 *
 * Bu kod, MIT Lisansı koşulları altında dağıtılmaktadır.
 * Ayrıntılar için lütfen LICENSE dosyasını inceleyiniz.
 ******************************************************************************/
const quizzes = [
    {
        topic: "Temel Bilimler (Fizik & Kimya)",
        threshold: 70,
        questions: [
            {
                question: "Suyun kimyasal formülü nedir?",
                options: ["H2O", "CO2", "O2", "NaCl"],
                correctIndex: 0,
                explanation: "Su, iki hidrojen ve bir oksijen atomundan oluşur (H2O)."
            },
            {
                question: "Hangi gezegen 'Kızıl Gezegen' olarak bilinir?",
                options: ["Venüs", "Mars", "Jüpiter", "Satürn"],
                correctIndex: 1,
                explanation: "Mars, yüzeyindeki demir oksit (pas) nedeniyle kırmızımsı bir görünüme sahiptir."
            },
            {
                question: "Işık hızı yaklaşık olarak saniyede kaç kilometredir?",
                options: ["100,000 km", "300,000 km", "500,000 km", "1,000,000 km"],
                correctIndex: 1,
                explanation: "Işık boşlukta saniyede yaklaşık 299,792,458 metre (yaklaşık 300,000 km) yol alır."
            },
            {
                question: "Atomun merkezinde ne bulunur?",
                options: ["Elektron", "Proton ve Nötron", "Sadece Proton", "Sadece Nötron"],
                correctIndex: 1,
                explanation: "Atomun çekirdeği proton ve nötronlardan oluşur, elektronlar ise yörüngede bulunur."
            }
        ]
    },
    {
        topic: "Teknoloji ve Yazılım",
        threshold: 70,
        questions: [
            {
                question: "Python dilinde ekrana yazı yazdırmak için hangi fonksiyon kullanılır?",
                options: ["echo()", "write()", "print()", "log()"],
                correctIndex: 2,
                explanation: "Python'da standart çıktı fonksiyonu print()'tir."
            },
            {
                question: "Yapay Zeka'nın kısaltması nedir?",
                options: ["AI", "ML", "VR", "AR"],
                correctIndex: 0,
                explanation: "Artificial Intelligence (Yapay Zeka) kısaltması AI'dır."
            },
            {
                question: "Hangi bileşen bilgisayarın 'beyni' olarak kabul edilir?",
                options: ["RAM", "Hard Disk", "CPU", "GPU"],
                correctIndex: 2,
                explanation: "CPU (Central Processing Unit - Merkezi İşlem Birimi) bilgisayarın beyni olarak kabul edilir."
            }
        ]
    }
];

let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let totalScore = 0;
let levelScore = 0;
let totalQuestionsAsked = 0;
let wrongAnswers = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackArea = document.getElementById('feedback-area');
const feedbackText = document.getElementById('feedback-text');
const explanationText = document.getElementById('explanation-text');
const levelIndicator = document.getElementById('level-indicator');
const scoreIndicator = document.getElementById('score-indicator');
const progressBar = document.getElementById('progress');
const finalScoreElement = document.getElementById('final-score');
const wrongAnswersList = document.getElementById('wrong-answers-list');
const wrongAnswersContainer = document.getElementById('wrong-answers-container');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', resetQuiz);

function startQuiz() {
    startScreen.classList.add('hidden');
    startScreen.classList.remove('active');
    quizScreen.classList.remove('hidden');
    quizScreen.classList.add('active');
    loadLevel(0);
}

function loadLevel(index) {
    currentLevelIndex = index;
    currentQuestionIndex = 0;
    levelScore = 0;
    levelIndicator.textContent = `Bölüm ${index + 1}: ${quizzes[index].topic}`;
    loadQuestion();
}

function loadQuestion() {
    const currentLevel = quizzes[currentLevelIndex];
    const currentQuestion = currentLevel.questions[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    feedbackArea.classList.add('hidden');
    nextBtn.style.display = 'none'; // Hide next button until answer selected

    // Update progress bar
    const progress = ((currentQuestionIndex) / currentLevel.questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    scoreIndicator.textContent = `Toplam Puan: ${totalScore}`;

    currentQuestion.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.classList.add('option-btn');
        btn.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const currentLevel = quizzes[currentLevelIndex];
    const currentQuestion = currentLevel.questions[currentQuestionIndex];
    const options = optionsContainer.children;

    // Disable all buttons
    for (let btn of options) {
        btn.disabled = true;
    }

    if (selectedIndex === currentQuestion.correctIndex) {
        options[selectedIndex].classList.add('correct');
        feedbackText.textContent = "✅ DOĞRU!";
        feedbackText.style.color = "var(--correct-color)";
        levelScore += 100 / currentLevel.questions.length;
        totalScore++;
    } else {
        options[selectedIndex].classList.add('wrong');
        options[currentQuestion.correctIndex].classList.add('correct');
        feedbackText.textContent = "❌ YANLIŞ!";
        feedbackText.style.color = "var(--wrong-color)";

        wrongAnswers.push({
            question: currentQuestion.question,
            yourAnswer: currentQuestion.options[selectedIndex],
            correctAnswer: currentQuestion.options[currentQuestion.correctIndex],
            explanation: currentQuestion.explanation
        });
    }

    explanationText.textContent = currentQuestion.explanation;
    feedbackArea.classList.remove('hidden');
    nextBtn.style.display = 'inline-block';
    totalQuestionsAsked++;
}

function nextQuestion() {
    const currentLevel = quizzes[currentLevelIndex];
    currentQuestionIndex++;

    if (currentQuestionIndex < currentLevel.questions.length) {
        loadQuestion();
    } else {
        // Level finished
        if (levelScore >= currentLevel.threshold) {
            if (currentLevelIndex < quizzes.length - 1) {
                alert(`Tebrikler! ${levelScore.toFixed(0)} puanla bu bölümü geçtiniz.`);
                loadLevel(currentLevelIndex + 1);
            } else {
                showResults();
            }
        } else {
            alert(`Üzgünüm, bu bölümden geçmek için ${currentLevel.threshold} puan gerekiyordu. Puanınız: ${levelScore.toFixed(0)}`);
            showResults();
        }
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');

    const percentage = totalQuestionsAsked > 0 ? (totalScore / totalQuestionsAsked * 100).toFixed(1) : 0;
    finalScoreElement.textContent = `%${percentage}`;

    wrongAnswersList.innerHTML = '';
    if (wrongAnswers.length > 0) {
        wrongAnswersContainer.style.display = 'block';
        wrongAnswers.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Soru:</strong> ${item.question}<br>
                <strong>Sizin Cevabınız:</strong> ${item.yourAnswer}<br>
                <strong>Doğru Cevap:</strong> ${item.correctAnswer}<br>
                <strong>Çözüm:</strong> ${item.explanation}
            `;
            wrongAnswersList.appendChild(li);
        });
    } else {
        wrongAnswersContainer.style.display = 'none';
        const p = document.createElement('p');
        p.textContent = "Mükemmel! Hiç hatanız yok.";
        wrongAnswersContainer.parentNode.insertBefore(p, wrongAnswersContainer);
    }
}

function resetQuiz() {
    currentLevelIndex = 0;
    currentQuestionIndex = 0;
    totalScore = 0;
    levelScore = 0;
    totalQuestionsAsked = 0;
    wrongAnswers = [];

    resultScreen.classList.add('hidden');
    resultScreen.classList.remove('active');
    startScreen.classList.remove('hidden');
    startScreen.classList.add('active');
}
