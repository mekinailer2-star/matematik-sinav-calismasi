var state = {
    currentQuestion: 0,
    solutionVisible: false,
    completed: JSON.parse(localStorage.getItem('completedQuestions') || '[]')
};

function saveState() {
    localStorage.setItem('completedQuestions', JSON.stringify(state.completed));
}

function updateProgress() {
    var count = state.completed.length;
    var total = questions.length;
    var pct = (count / total) * 100;

    document.getElementById('progressBar').style.width = pct + '%';
    document.getElementById('progressText').textContent = count + ' / ' + total + ' soru cozuldu';
}

function renderQuestionList() {
    var list = document.getElementById('questionList');
    list.innerHTML = '';

    for (var i = 0; i < questions.length; i++) {
        var q = questions[i];
        var isCompleted = state.completed.indexOf(q.id) !== -1;
        var item = document.createElement('div');
        item.className = 'question-item' + (isCompleted ? ' completed' : '');
        item.innerHTML =
            '<div class="question-number">' + q.id + '</div>' +
            '<div class="question-info">' +
                '<h3>' + q.title + '</h3>' +
                '<span class="question-topic">' + q.topic + '</span>' +
            '</div>';
        item.setAttribute('data-index', i);
        item.addEventListener('click', function() {
            openQuestion(parseInt(this.getAttribute('data-index')));
        });
        list.appendChild(item);
    }
}

function openQuestion(index) {
    state.currentQuestion = index;
    state.solutionVisible = false;
    renderQuestion();
    showView('questionView');
}

function renderQuestion() {
    var q = questions[state.currentQuestion];
    var isCompleted = state.completed.indexOf(q.id) !== -1;

    document.getElementById('questionCounter').textContent = (state.currentQuestion + 1) + '/' + questions.length;

    var stepsHtml = '';
    for (var i = 0; i < q.steps.length; i++) {
        var step = q.steps[i];
        stepsHtml +=
            '<div class="step">' +
                '<div class="step-title">' + step.title + '</div>' +
                '<div class="step-content">' + step.content + '</div>' +
            '</div>';
    }

    var card = document.getElementById('questionCard');
    card.innerHTML =
        '<div class="card-header">' +
            '<div class="card-number">' + q.id + '</div>' +
            '<div class="card-meta">' +
                '<h2>' + q.title + '</h2>' +
                '<span class="card-topic">' + q.topic + '</span>' +
            '</div>' +
        '</div>' +
        '<div class="card-question">' + q.question + '</div>' +
        '<div class="card-solution' + ((state.solutionVisible || isCompleted) ? ' visible' : '') + '">' +
            stepsHtml +
            '<div class="result-box">' + q.result + '</div>' +
        '</div>';

    var btnCheck = document.getElementById('btnCheck');
    if (state.solutionVisible || isCompleted) {
        btnCheck.textContent = 'Cozuldu';
        btnCheck.className = 'btn-check completed';
    } else {
        btnCheck.textContent = 'Cozumu Gor';
        btnCheck.className = 'btn-check';
    }

    document.getElementById('btnPrev').disabled = state.currentQuestion === 0;
    document.getElementById('btnNext').disabled = state.currentQuestion === questions.length - 1;

    renderMath();
}

function renderMath() {
    if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('questionCard'), {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '\\(', right: '\\)', display: false}
            ],
            throwOnError: false
        });
    }
}

function showView(viewId) {
    var views = document.querySelectorAll('.view');
    for (var i = 0; i < views.length; i++) {
        views[i].classList.remove('active');
    }
    document.getElementById(viewId).classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.getElementById('btnBack').addEventListener('click', function() {
    showView('homeView');
    renderQuestionList();
    updateProgress();
});

document.getElementById('btnCheck').addEventListener('click', function() {
    var q = questions[state.currentQuestion];
    state.solutionVisible = true;

    if (state.completed.indexOf(q.id) === -1) {
        state.completed.push(q.id);
        saveState();
    }

    renderQuestion();
});

document.getElementById('btnPrev').addEventListener('click', function() {
    if (state.currentQuestion > 0) {
        state.currentQuestion--;
        state.solutionVisible = false;
        renderQuestion();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
});

document.getElementById('btnNext').addEventListener('click', function() {
    if (state.currentQuestion < questions.length - 1) {
        state.currentQuestion++;
        state.solutionVisible = false;
        renderQuestion();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
});

document.addEventListener('DOMContentLoaded', function() {
    renderQuestionList();
    updateProgress();
});
