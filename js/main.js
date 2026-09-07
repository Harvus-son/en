// Interactive Trainers & Tests Logic (English)

// 1. Alphabet & Phonetics Trainer
function checkAlphabet() {
    const answer = document.getElementById("alphabet-input").value.trim().toLowerCase();
    const resultDiv = document.getElementById("alphabet-result");
    if (answer === "th" || answer.includes("th")) {
        resultDiv.className = "result-feedback correct";
        resultDiv.innerText = "Правильно! Звуки [θ] и [ð] передаются буквосочетанием 'th' (например, 'think', 'this').";
    } else {
        resultDiv.className = "result-feedback incorrect";
        resultDiv.innerText = "Не совсем верно. Межзубные звуки образуются буквосочетанием 'th'. Попробуйте еще раз!";
    }
}

// 2. Article Trainer (a/an/the)
function checkArticles() {
    const q1 = document.getElementById("art1").value;
    const q2 = document.getElementById("art2").value;
    const q3 = document.getElementById("art3").value;
    const resultDiv = document.getElementById("articles-result");

    let score = 0;
    if (q1 === "a") score++;
    if (q2 === "an") score++;
    if (q3 === "the") score++;

    if (score === 3) {
        resultDiv.className = "result-feedback correct";
        resultDiv.innerText = "Отлично! Все артикли верны: a cat (согласный звук), an apple (гласный звук), the Sun (уникальный объект).";
    } else {
        resultDiv.className = "result-feedback incorrect";
        resultDiv.innerText = `Вы ответили правильно на ${score} из 3. Запомните: перед согласной — a, перед гласной — an, перед уникальными объектами — the.`;
    }
}

// 3. Sentence Structure Trainer
function checkSentence() {
    const word1 = document.getElementById("sent-w1").value;
    const word2 = document.getElementById("sent-w2").value;
    const word3 = document.getElementById("sent-w3").value;
    const resultDiv = document.getElementById("sentence-result");

    if (word1 === "I" && word2 === "learn" && word3 === "English") {
        resultDiv.className = "result-feedback correct";
        resultDiv.innerText = "Замечательно! 'I learn English' — Подлежащее (I) + Сказуемое (learn) + Дополнение (English).";
    } else {
        resultDiv.className = "result-feedback incorrect";
        resultDiv.innerText = "Ошибка в порядке слов. В английском прямой порядок: Подлежащее (I) -> Глагол (learn) -> Дополнение (English).";
    }
}

// 4. Grammar Tenses Trainer (Present Perfect)
function checkTense() {
    const answer = document.getElementById("tense-input").value.trim().toLowerCase();
    const resultDiv = document.getElementById("tense-result");

    if (answer === "bought") {
        resultDiv.className = "result-feedback correct";
        resultDiv.innerText = "Правильно! I have bought a book. (3-я форма глагола buy = bought).";
    } else {
        resultDiv.className = "result-feedback incorrect";
        resultDiv.innerText = "Неверно. 3-я форма (Past Participle) глагола 'buy' — 'bought'.";
    }
}

// 5. Global Micro-Test
function submitMicroTest() {
    let score = 0;
    const total = 5;

    const t1 = document.querySelector('input[name="q1"]:checked');
    const t2 = document.querySelector('input[name="q2"]:checked');
    const t3 = document.querySelector('input[name="q3"]:checked');
    const t4 = document.querySelector('input[name="q4"]:checked');
    const t5 = document.querySelector('input[name="q5"]:checked');

    if (t1 && t1.value === "a") score++;
    if (t2 && t2.value === "b") score++;
    if (t3 && t3.value === "b") score++;
    if (t4 && t4.value === "a") score++;
    if (t5 && t5.value === "c") score++;

    const resultCard = document.getElementById("microtest-result");
    resultCard.style.display = "block";

    let level = "";
    if (score === 5) level = "A1-A2 (Отличный результат! Вы прекрасно знаете основы английского)";
    else if (score >= 3) level = "A1 (Хороший балл, но стоит подтянуть некоторые правила)";
    else level = "Beginner (Рекомендуем внимательно изучить теорию на сайте)";

    resultCard.innerHTML = `<h3>Результат Экспресс-Теста: ${score} / ${total}</h3>
                            <p>Ваш текущий уровень знаний: <strong>${level}</strong></p>`;
}

// Dictionary Filter Function
function filterDictionary() {
    const input = document.getElementById("dictSearch").value.toLowerCase();
    const rows = document.querySelectorAll("#dictTable tbody tr");

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}
