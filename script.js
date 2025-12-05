/*******************************************************************************
 * STEM Quiz Projesi
 * Tüm hakları saklıdır.
 *
 * Bu kod, MIT Lisansı koşulları altında dağıtılmaktadır.
 ******************************************************************************/
const quizzes = [
    {
        topic: "Temel Bilimler (Fizik & Kimya & Biyoloji)",
        threshold: 70,
        questions: [
            {
                question: "Suyun kimyasal formülü nedir?",
                options: ["H2O", "CO2", "O2", "NaCl"],
                correctIndex: 0,
                explanation: "Su, iki hidrojen ve bir oksijen atomundan oluşur (H2O)."
            },
            {
                question: "Elektron dağılımı 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹ olan elementin periyodik tablodaki grubu nedir?",
                options: ["1A (Alkali Metal)", "2A (Toprak Alkali)", "3A", "3B (Geçiş Metali)"],
                correctIndex: 3,
                explanation: "Son elektron 3d orbitaline girdiği için bir geçiş metalidir (3B grubu). Bu elektron dizilimi Skandiyum (Sc) elementine aittir."
            },
            {
                question: "Bir DNA zincirinde Adenin (A) nükleotidi %30 ise, sitozin (C) nükleotidi oranı nedir?",
                options: ["%10", "%20", "%30", "%40"],
                correctIndex: 1,
                explanation: "Chargaff kuralı: A=T ve G=C. A=%30 ise T=%30'dur. Geriye kalan %40, G ve C'ye aittir. Bu durumda G=%20 ve C=%20 olmalıdır."
            },
            {
                question: "Bir cisme etki eden net kuvvet sıfır ise, cisim için aşağıdakilerden hangisi kesinlikle doğrudur?",
                options: ["Hızı sıfırdır.", "İvmesi sıfırdır.", "Durmaktadır.", "Sabit hızla dönmektedir."],
                correctIndex: 1,
                explanation: "Newton'un birinci hareket yasasına göre, net kuvvet sıfır ise ivme de sıfırdır. Cisim duruyor ya da sabit hızla hareket ediyor olabilir."
            },
            {
                question: "Newton'un ikinci yasası hangi formülle ifade edilir?",
                options: ["E = m·c²", "F = m·a", "V = I·R", "p = m·v"],
                correctIndex: 1,
                explanation: "Newton'un ikinci yasası kuvvetin kütle ile ivmenin çarpımı olduğunu söyler (F = m·a)."
            },
            {
                question: "Hücrede enerji üretiminden sorumlu organel hangisidir?",
                options: ["Ribozom", "Mitokondri", "Lizozom", "Golgi aygıtı"],
                correctIndex: 1,
                explanation: "Mitokondri, hücrede enerji üretiminden sorumlu organeldir."
            },
            {
                question: "pH değeri 7 olan çözelti nasıl tanımlanır?",
                options: ["Asidik", "Bazik", "Nötr", "Tuzlu"],
                correctIndex: 2,
                explanation: "pH değeri 7 olan çözeltiler nötrdür."
            },
            {
                question: "Işık hızı yaklaşık kaçtır?",
                options: ["3 × 10^8 m/s", "9.8 m/s²", "1.6 × 10^-19 C", "6.02 × 10^23"],
                correctIndex: 0,
                explanation: "Işık hızı boşlukta yaklaşık 3 × 10^8 m/s'dir."
            },
            {
                question: "Asit yağmurları, atmosferdeki aşağıdaki gazlardan hangilerinin su ile reaksiyona girmesi sonucu oluşur?",
                options: ["CO₂ ve O₂", "SO₂ ve NOₓ", "CH₄ ve O₃", "N₂ ve Ar"],
                correctIndex: 1,
                explanation: "Sanayi kaynaklı kükürt dioksit (SO₂) ve azot oksitler (NOₓ) atmosferde aside dönüşerek asit yağmurlarını oluşturur."
            },
            {
                question: "Mitoz bölünmenin hangi evresinde kromozomlar ekvator düzleminde tek sıra halinde dizilir?",
                options: ["Profaz", "Metafaz", "Anafaz", "Telofaz"],
                correctIndex: 1,
                explanation: "Metafaz evresinde kromozomlar iğ ipliklerine bağlanarak hücrenin ekvator (orta) düzleminde dizilir."
            },
            {
                question: "Tamamen saydam bir ortamdan başka bir saydam ortama geçen ışık ışını için aşağıdakilerden hangisi değişmez?",
                options: ["Hızı", "Frekansı", "Dalga boyu", "Yönü"],
                correctIndex: 1,
                explanation: "Işığın rengini ve enerjisini belirleyen frekansı, ortam değiştirse de sabit kalır. Hızı, dalga boyu ve yönü (kırılma) değişir."
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
            },
            {
                question: "Aşağıdaki programlama dillerinden hangisi öncelikli olarak web tarayıcılarında çalışacak istemci tarafı script'ler yazmak için tasarlanmıştır?",
                options: ["Python", "Java", "JavaScript", "C#"],
                correctIndex: 2,
                explanation: "JavaScript, temel olarak web sayfalarına dinamik ve etkileşimli özellikler eklemek için tarayıcılarda çalıştırılan bir istemci tarafı programlama dilidir."
            },
            {
                question: "Bir web sitesinin görünümünü ve düzenini tanımlamak için kullanılan temel teknoloji hangisidir?",
                options: ["HTML", "CSS", "JavaScript", "SQL"],
                correctIndex: 1,
                explanation: "CSS (Cascading Style Sheets), HTML elemanlarının ekranda nasıl görüneceğini (renk, yazı tipi, boyut, konum vb.) tanımlamak için kullanılır."
            },
            {
                question: "'Open Source' (Açık Kaynak) yazılımın en belirgin özelliği aşağıdakilerden hangisidir?",
                options: ["Ücretsiz olması", "Kaynak kodunun herkese açık ve değiştirilebilir olması", "Sadece akademik kullanım için olması", "Hiçbir lisans gerektirmemesi"],
                correctIndex: 1,
                explanation: "Açık kaynak yazılımın temel prensibi, kaynak kodunun herkes tarafından görülebilmesi, incelenebilmesi, değiştirilebilmesi ve dağıtılabilmesidir. (Ücretsiz olması zorunlu değildir)."
            },
            {
                question: "'API' (Application Programming Interface) terimi neyi tanımlar?",
                options: ["Bir kullanıcı arayüzü tasarımı", "İki yazılım bileşeninin birbirleriyle nasıl iletişim kuracağını belirleyen bir dizi kural", "Bir programlama dilinin derleyicisi", "Bir veritabanı yönetim sistemi"],
                correctIndex: 1,
                explanation: "API, farklı yazılım uygulamalarının birbirleriyle veri ve işlevsellik alışverişi yapabilmesi için tanımlanmış protokoller, araçlar ve tanımlamalardır."
            },
            {
                question: "Bir web sitesinin adres çubuğunda 'https://' ön ekinin, 'http://' yerine görülmesi ne anlama gelir?",
                options: ["Sitenin daha hızlı yüklendiği", "Sunucu ile tarayıcı arasındaki iletişimin şifrelendiği", "Sitenin içeriğinin doğrulandığı", "Sitenin önbelleğe alındığı"],
                correctIndex: 1,
                explanation: "HTTPS (HyperText Transfer Protocol Secure), HTTP'nin SSL/TLS protokolleri ile şifrelenmiş halidir. Bu, verilerin sunucu ve istemci arasında güvenli bir şekilde aktarılmasını sağlar."
            },
            {
                question: "Programlama paradigmalarından 'Object-Oriented Programming' (Nesne Yönelimli Programlama) hangi temel kavram üzerine kuruludur?",
                options: ["İşlevler (Fonksiyonlar)", "Nesneler (Veri ve onu işleyen metodların paketleri)", "Mantıksal kurallar", "Lineer talimat listeleri"],
                correctIndex: 1,
                explanation: "Nesne Yönelimli Programlama, verileri ve bu verileri işleyen prosedürleri (metodlar) bir arada paketleyen 'nesneler' kavramına dayanır. Kalıtım, soyutlama, çok biçimlilik ve paketleme temel prensipleridir."
            },
            {
                question: "'Git' versiyon kontrol sisteminin temel amacı nedir?",
                options: ["Kodu otomatik olarak test etmek", "Yazılım geliştirme sürecindeki kod değişikliklerini takip etmek ve yönetmek", "Programları farklı işletim sistemlerinde çalıştırmak", "Sunuculara kod dağıtmak"],
                correctIndex: 1,
                explanation: "Git, bir yazılım projesinin kaynak kodunda zaman içinde yapılan tüm değişiklikleri izlemek, bu değişiklikleri yönetmek ve farklı geliştiricilerin çalışmalarını birleştirmek için kullanılan dağıtık bir versiyon kontrol sistemidir."
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
const scoreDetails = document.getElementById('score-details');
const perfectScoreElement = document.querySelector('.perfect-score');

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
    nextBtn.style.display = 'none';

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
                alert(`Tebrikler! ${levelScore.toFixed(0)} puanla bu bölümü geçtiniz. Sonraki bölüme geçiliyor...`);
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
    
    // Update score circle
    const scoreCircle = document.querySelector('.score-circle');
    scoreCircle.style.setProperty('--percentage', `${percentage}%`);
    
    // Update score details
    scoreDetails.innerHTML = `
        <p><strong>Toplam Soru:</strong> ${totalQuestionsAsked}</p>
        <p><strong>Doğru Sayısı:</strong> ${totalScore}</p>
        <p><strong>Yanlış Sayısı:</strong> ${wrongAnswers.length}</p>
        <p><strong>Tamamlanan Bölüm:</strong> ${currentLevelIndex + 1}/${quizzes.length}</p>
    `;

    if (wrongAnswers.length > 0) {
        wrongAnswersContainer.style.display = 'block';
        perfectScoreElement.style.display = 'none';
        
        wrongAnswersList.innerHTML = '';
        wrongAnswers.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Soru ${index + 1}:</strong> ${item.question}<br><br>
                <span style="color: var(--wrong-color);"><strong>Sizin Cevabınız:</strong> ${item.yourAnswer}</span><br>
                <span style="color: var(--correct-color);"><strong>Doğru Cevap:</strong> ${item.correctAnswer}</span><br><br>
                <strong>Açıklama:</strong> ${item.explanation}
            `;
            wrongAnswersList.appendChild(li);
        });
    } else {
        wrongAnswersContainer.style.display = 'none';
        perfectScoreElement.style.display = 'block';
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
