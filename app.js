const state = {
  currentQuestion: 0,
  solutionVisible: false,
  completed: JSON.parse(localStorage.getItem('completedQuestions') || '[]')
};

function saveState() {
  localStorage.setItem('completedQuestions', JSON.stringify(state.completed));
}

function updateProgress() {
  const count = state.completed.length;
  const total = questions.length;
  const pct = (count / total) * 100;

  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressText').textContent = count + ' / ' + total + ' soru cozuldu';
  document.getElementById('progressBadge').textContent = count + '/' + total;
}

function renderQuestionList() {
  const list = document.getElementById('questionList');
  list.innerHTML = '';

  questions.forEach((q, i) => {
    const isCompleted = state.completed.includes(q.id);
    const item = document.createElement('div');
    item.className = 'question-item' + (isCompleted ? ' completed' : '');
    item.innerHTML = `
      <div class="q-number">${q.id}</div>
      <div class="q-info">
        <h3>${q.title}</h3>
        <p>${q.topic}</p>
      </div>
      <div class="q-status"></div>
    `;
    item.addEventListener('click', () => openQuestion(i));
    list.appendChild(item);
  });
}

function openQuestion(index) {
  state.currentQuestion = index;
  state.solutionVisible = false;
  renderQuestion();
  showView('questionView');
}

function renderQuestion() {
  const q = questions[state.currentQuestion];
  const isCompleted = state.completed.includes(q.id);

  document.getElementById('questionCounter').textContent = (state.currentQuestion + 1) + '/' + questions.length;

  const card = document.getElementById('questionCard');
  card.innerHTML = `
    <div class="q-header">
      <div class="q-num">${q.id}</div>
      <div>
        <div class="q-topic">${q.topic}</div>
        <div class="q-title">${q.title}</div>
      </div>
    </div>
    <div class="q-body">
      <h4>Soru</h4>
      <p>${q.question}</p>
    </div>
    <div class="solution-section ${state.solutionVisible ? 'visible' : ''}" id="solutionSection">
      <div class="q-body">
        <h4>Cozum</h4>
      </div>
      ${q.steps.map(step => `
        <div class="step">
          <div class="step-number">${step.title}</div>
          <p>${step.content}</p>
        </div>
      `).join('')}
      <div class="result-box">
        <div class="result-label">Sonuc</div>
        <div class="result-value">${q.result}</div>
      </div>
    </div>
  `;

  const btnCheck = document.getElementById('btnCheck');
  if (state.solutionVisible || isCompleted) {
    btnCheck.textContent = 'Cozuldu';
    btnCheck.className = 'btn-check completed';
  } else {
    btnCheck.textContent = 'Cozumu Gor';
    btnCheck.className = 'btn-check';
  }

  document.getElementById('btnPrev').disabled = state.currentQuestion === 0;
  document.getElementById('btnNext').disabled = state.currentQuestion === questions.length - 1;

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([card]).catch(function(err) {
      console.log('MathJax typeset error:', err);
    });
  }
}

function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('btnBack').addEventListener('click', () => {
  showView('homeView');
  renderQuestionList();
  updateProgress();
});

document.getElementById('btnCheck').addEventListener('click', () => {
  const q = questions[state.currentQuestion];
  state.solutionVisible = true;

  if (!state.completed.includes(q.id)) {
    state.completed.push(q.id);
    saveState();
  }

  renderQuestion();
});

document.getElementById('btnPrev').addEventListener('click', () => {
  if (state.currentQuestion > 0) {
    state.currentQuestion--;
    state.solutionVisible = false;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

document.getElementById('btnNext').addEventListener('click', () => {
  if (state.currentQuestion < questions.length - 1) {
    state.currentQuestion++;
    state.solutionVisible = false;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

renderQuestionList();
updateProgress();
