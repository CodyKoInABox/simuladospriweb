import { exams } from './questions.js';
import { STORAGE_KEY, TOPICS, createSession, scoreSession, selectAnswer, checkAnswer, finishSession, restoreState, escapeHTML as esc } from './engine.js';

const main = document.querySelector('#main');
const dialog = document.querySelector('#reset-dialog');
document.querySelector('.skip-link').addEventListener('click', event => {
  event.preventDefault();
  main.focus({ preventScroll: true });
  main.scrollIntoView({ behavior: 'instant' });
});
const letters = ['A', 'B', 'C', 'D', 'E'];
let state = { sessions: {}, history: [] };
let storageOK = true;
let pendingReset = null;
let resultFilter = 'all';
const icons = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 6c-3-3-7-3-9-2v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-2-1-6-1-9 2Zm0 0v14"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/></svg>',
};

try { state = restoreState(JSON.parse(localStorage.getItem(STORAGE_KEY)), exams); }
catch { storageOK = false; }

function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch { storageOK = false; }
  document.querySelector('#storage-notice').hidden = storageOK;
}

function announce(message) { document.querySelector('#announcer').textContent = message; }
function focusTitle() { main.querySelector('[data-focus]')?.focus({ preventScroll: true }); }
function moveToTop() { window.scrollTo({ top: 0, behavior: 'instant' }); focusTitle(); }
function getExam(id) { return exams.find(e => e.id === id); }
function getSession(exam) {
  if (!state.sessions[exam.id]) { state.sessions[exam.id] = createSession(exam); save(); }
  return state.sessions[exam.id];
}

function navigate(hash) {
  if (location.hash === hash) render();
  else location.hash = hash;
}

function examCard(exam) {
  const session = state.sessions[exam.id];
  const score = session ? scoreSession(exam, session) : null;
  const attempts = state.history.filter(h => h.examId === exam.id);
  const best = attempts.length || session?.completedAt ? Math.max(score?.correct || 0, ...attempts.map(a => a.score)) : null;
  const isDone = !!session?.completedAt;
  const started = !!score?.checked || session?.answers.some(a => a.selected !== null);
  const action = isDone ? 'Ver resultado' : started ? 'Continuar simulado' : 'Começar simulado';
  return `<article class="exam-card ${isDone ? 'is-done' : ''}">
    <div class="card-top"><span class="exam-number">${String(exam.number).padStart(2, '0')}</span><span class="status-badge ${isDone ? 'done' : started ? 'ongoing' : ''}">${isDone ? 'Concluído' : started ? 'Em andamento' : 'Pronto para começar'}</span></div>
    <h3>Simulado ${String(exam.number).padStart(2, '0')}</h3><p class="card-description">${esc(exam.subtitle)}</p>
    <div class="card-meta"><span>${icons.book} 10 questões</span><span>${icons.clock} No seu ritmo</span></div>
    <div class="card-bottom"><span class="card-progress">${isDone ? `Última nota <strong>${score.correct}/10</strong>${best !== null ? ` <span class="best-score">· melhor: ${best}/10</span>` : ''}` : started ? `<strong>${score.checked} de 10</strong> corrigidas` : 'Todo o conteúdo, em um só treino'}</span><div class="mini-progress" aria-hidden="true"><span style="width:${(score?.checked || 0) * 10}%"></span></div><a class="card-start" href="#${exam.id}">${action}${icons.arrow}</a></div>
  </article>`;
}

function renderHome() {
  document.title = 'Web na prática · Simulados';
  const completed = exams.filter(e => state.sessions[e.id]?.completedAt).length;
  const answered = exams.reduce((n, e) => n + (state.sessions[e.id] ? scoreSession(e, state.sessions[e.id]).checked : 0), 0);
  const allCorrect = exams.reduce((n, e) => n + (state.sessions[e.id] ? scoreSession(e, state.sessions[e.id]).correct : 0), 0);
  main.innerHTML = `<div class="home-shell">
    <section class="hero" aria-labelledby="home-title"><div class="hero-copy"><p class="eyebrow"><span class="tiny-dot"></span> SEU LABORATÓRIO DE ESTUDOS</p><h1 id="home-title" data-focus tabindex="-1">Sua próxima prova.<br><span>Você mais preparado.</span></h1><p class="hero-description">Um pouco de prática faz toda a diferença. Treine desenvolvimento web com questões no estilo da prova e entenda o porquê de cada resposta.</p><a href="#simulados" class="button button-primary hero-cta">Escolher meu simulado ${icons.arrow}</a><div class="hero-caption"><span class="small-check">✓</span> Sem cronômetro. Sem pressão. Com explicação.</div></div>
    <div class="hero-art" aria-hidden="true"><div class="art-dots"></div><div class="code-window"><div class="window-top"><div class="window-dots"><i></i><i></i><i></i></div><span>seu-proximo-passo.html</span><span>⌘</span></div><div class="code-content"><div><span class="line-no">01</span><span class="syntax-purple">&lt;seu-futuro&gt;</span></div><div><span class="line-no">02</span><span class="code-indent">prática <span class="syntax-orange">+</span> curiosidade</span></div><div><span class="line-no">03</span><span class="code-indent syntax-comment">// é assim que se aprende</span></div><div><span class="line-no">04</span><span class="syntax-purple">&lt;/seu-futuro&gt;</span></div><div class="code-cursor"></div></div><div class="window-footer"><span class="tiny-dot"></span> aprendendo um pouco mais a cada questão</div></div><div class="art-sticker">${icons.spark}<span>De dúvida<br><strong>a descoberta.</strong></span></div><div class="art-tag"><span>✓</span> Você consegue!</div></div></section>
    <section class="overview" aria-label="Visão geral"><div><span class="overview-icon violet">${icons.book}</span><p><strong>5 simulados completos</strong><span>Escolha por onde começar</span></p></div><div><span class="overview-icon peach">${icons.spark}</span><p><strong>50 questões comentadas</strong><span>Aprenda com cada alternativa</span></p></div><div><span class="overview-icon mint">${icons.check}</span><p><strong>Seu progresso fica salvo</strong><span>Continue neste navegador</span></p></div></section>
    <section id="simulados" class="exams-section" aria-labelledby="exams-title"><div class="section-heading"><div><p class="eyebrow">PRATICAR É O PRÓXIMO PASSO</p><h2 id="exams-title">Qual vai ser o de hoje?</h2><p>Todos misturam HTML, CSS, JavaScript, DOM e usabilidade.</p></div><div class="study-progress"><span class="progress-orbit" style="--progress:${completed * 20}%" aria-hidden="true">${completed}<small>/5</small></span><span><strong>${completed ? `${completed} ${completed === 1 ? 'simulado concluído' : 'simulados concluídos'}` : 'Seu ponto de partida'}</strong><small>${answered ? `${answered} questões corrigidas · ${Math.round(allCorrect / answered * 100)}% de acertos` : 'Um treino de cada vez'}</small></span></div></div><div class="exam-grid">${exams.map(examCard).join('')}<aside class="practice-note"><span class="note-star" aria-hidden="true">✳</span><h3>Errar também <br>é aprender.</h3><p>A cada resposta, uma explicação para conectar os conceitos. Volte quantas vezes precisar.</p><span class="note-label">É TREINO, NÃO É JULGAMENTO.</span></aside></div></section>
    <section id="como-funciona" class="how-section" aria-labelledby="how-title"><div class="how-intro"><p class="eyebrow">SIMPLES ASSIM</p><h2 id="how-title">Do primeiro clique<br>ao “agora entendi”.</h2></div><ol class="how-steps"><li><span>01</span><div><h3>Escolha um simulado</h3><p>10 questões, cinco alternativas e o conteúdo todo misturado.</p></div></li><li><span>02</span><div><h3>Responda e descubra</h3><p>Confira sua resposta e leia a explicação antes de seguir.</p></div></li><li><span>03</span><div><h3>Revise e tente de novo</h3><p>Veja sua nota, reveja os erros e repita o treino para fixar.</p></div></li></ol></section>
    <p class="material-note">Questões de prática inspiradas no material enviado. Os enunciados e comentários foram adaptados para explicar os conceitos com precisão. Seu progresso é guardado apenas neste navegador.</p>
  </div>`;
  document.querySelector('.header-help').href = '#como-funciona';
}

function questionNav(exam, session) {
  return exam.questions.map((q, i) => {
    const a = session.answers[i];
    const status = a.checked ? a.selected === q.correct ? 'correct' : 'wrong' : a.selected !== null ? 'selected' : '';
    const name = a.checked ? a.selected === q.correct ? 'correta' : 'incorreta' : a.selected !== null ? 'resposta selecionada' : 'não respondida';
    return `<button type="button" class="question-dot ${status} ${i === session.current ? 'current' : ''}" data-question="${i}" ${i === session.current ? 'aria-current="step"' : ''} aria-label="Questão ${i + 1}, ${name}">${String(i + 1).padStart(2, '0')}</button>`;
  }).join('');
}

function renderFeedback(question, answer) {
  const correct = answer.selected === question.correct;
  return `<section class="answer-feedback ${correct ? 'feedback-correct' : 'feedback-wrong'}" aria-labelledby="feedback-title"><div class="feedback-heading"><span class="feedback-symbol" aria-hidden="true">${correct ? '✓' : '↗'}</span><div><p class="eyebrow">${correct ? 'RESPOSTA CORRETA' : 'HORA DE APRENDER'}</p><h3 id="feedback-title" tabindex="-1">${correct ? 'Isso aí! Mais um conceito fixado.' : 'Essa ainda não. Vamos entender?'}</h3></div></div>${!correct ? `<p class="correct-answer">Resposta correta: <strong>${letters[question.correct]}. ${esc(question.options[question.correct].text)}</strong></p>` : ''}<p>${esc(question.explanation)}</p>${!correct ? `<div class="your-choice"><strong>Por que a sua resposta não se aplica?</strong><p>${esc(question.options[answer.selected].explanation)}</p></div>` : ''}<details class="alternatives-details"><summary>Entenda ${correct ? 'as outras' : 'todas as'} alternativas</summary><div>${question.options.map((o, i) => `<p><strong>${letters[i]}. ${i === question.correct ? 'Correta' : 'Incorreta'}</strong> — ${esc(o.explanation)}</p>`).join('')}</div></details><div class="memory-tip">${icons.spark}<p><strong>Guarde essa ideia</strong>${esc(question.tip)}</p></div></section>`;
}

function renderQuiz(exam, allowCompleted = false) {
  const session = getSession(exam);
  if (session.completedAt && !allowCompleted) { navigate(`#${exam.id}/resultado`); return; }
  const score = scoreSession(exam, session);
  const index = session.current;
  const question = exam.questions[index];
  const answer = session.answers[index];
  const isLast = index === exam.questions.length - 1;
  document.title = `Questão ${index + 1} · Simulado ${String(exam.number).padStart(2, '0')} · Web na prática`;
  document.querySelector('.header-help').href = '#como-funciona';
  main.innerHTML = `<div class="quiz-shell"><a href="#" class="back-link">${icons.back} Todos os simulados</a><div class="quiz-heading"><div><p class="eyebrow">UM POUCO DE PRÁTICA, UM GRANDE PASSO</p><h1 data-focus tabindex="-1">Simulado ${String(exam.number).padStart(2, '0')}<span class="mixed-badge">Conteúdo misto</span></h1></div><span class="autosave"><span class="tiny-dot"></span> ${storageOK ? 'Progresso salvo automaticamente' : 'Progresso nesta aba'}</span></div>
    <div class="quiz-layout"><div class="question-column"><article class="question-card"><div class="question-topline"><span class="question-counter">QUESTÃO <strong>${String(index + 1).padStart(2, '0')}</strong> <span>/ ${exam.questions.length}</span></span><span class="question-points">${answer.checked ? (answer.selected === question.correct ? '✓ 1 ponto' : '0 ponto') : 'Vale 1 ponto'}</span></div><div class="question-track" role="progressbar" aria-label="Questões corrigidas" aria-valuemin="0" aria-valuemax="10" aria-valuenow="${score.checked}"><span style="width:${score.checked * 10}%"></span></div><div class="question-body"><p class="question-context">${esc(question.context)}</p>${question.code ? `<pre class="question-code" tabindex="0" aria-label="Código da questão"><code>${esc(question.code)}</code></pre>` : ''}<fieldset class="answer-fieldset"><legend id="question-title">${esc(question.prompt)}</legend><p class="answer-hint">${answer.checked ? 'Resposta conferida. Leia o comentário abaixo.' : 'Escolha uma alternativa e confira sua resposta.'}</p><div class="answer-options">${question.options.map((o, i) => { const selected = answer.selected === i; const correct = answer.checked && i === question.correct; const wrong = answer.checked && selected && !correct; return `<label class="answer-option ${selected ? 'is-selected' : ''} ${correct ? 'is-correct' : ''} ${wrong ? 'is-wrong' : ''} ${answer.checked ? 'is-locked' : ''}"><input type="radio" name="answer" value="${i}" ${selected ? 'checked' : ''} ${answer.checked ? 'disabled' : ''}><span class="option-letter" aria-hidden="true">${letters[i]}</span><span class="option-text">${esc(o.text)}${correct ? '<span class="option-state">Resposta correta</span>' : wrong ? '<span class="option-state">Sua resposta</span>' : ''}</span><span class="option-indicator" aria-hidden="true">${correct ? '✓' : wrong ? '×' : ''}</span></label>`; }).join('')}</div></fieldset>${answer.checked ? renderFeedback(question, answer) : ''}<div class="question-actions"><button type="button" class="button button-quiet" data-action="previous" ${index === 0 ? 'disabled' : ''}>${icons.back} Anterior</button>${answer.checked ? `<button type="button" class="button button-primary" data-action="${score.complete ? 'finish' : 'next'}">${score.complete ? 'Ver meu resultado' : isLast ? 'Ir para questão pendente' : 'Próxima questão'} ${icons.arrow}</button>` : `<button type="button" class="button button-primary" data-action="check" ${answer.selected === null ? 'disabled' : ''}>Conferir resposta ${icons.check}</button>`}</div></div></article><p class="quiz-bottom-note">${icons.spark} A explicação faz parte do treino. Leia com calma antes de seguir.</p></div>
    <aside class="quiz-sidebar"><section class="navigator-card" aria-labelledby="navigator-title"><div class="navigator-heading"><h2 id="navigator-title">Seu caminho</h2><span>${score.checked}/10</span></div><div class="question-navigator">${questionNav(exam, session)}</div><div class="nav-legend"><span><i class="correct"></i>Acertou</span><span><i class="wrong"></i>Revisar</span><span><i></i>Pendente</span></div><div class="sidebar-score"><span>Acertos até aqui</span><strong>${score.correct}<small> / ${score.checked}</small></strong></div>${score.complete ? '<button type="button" class="button button-secondary full-width" data-action="finish">Ver meu resultado</button>' : '<p class="navigator-hint">Você pode tocar nos números para navegar entre as questões.</p>'}</section><section class="encouragement-card">${icons.book}<h3>Entender vale mais<br>que decorar.</h3><p>Os cinco simulados percorrem o conteúdo todo. Cada tentativa é uma nova chance de conectar as ideias.</p><span>VAI NO SEU RITMO ♡</span></section><button type="button" class="restart-link" data-action="restart">↻ Recomeçar este simulado</button></aside></div></div>`;
}

function reviewItem(q, a, i) {
  const correct = a.selected === q.correct;
  return `<details class="review-item ${correct ? 'review-correct' : 'review-wrong'}"><summary><span class="review-status" aria-hidden="true">${correct ? '✓' : '↗'}</span><span><small>QUESTÃO ${String(i + 1).padStart(2, '0')} · ${correct ? 'ACERTOU' : 'PARA REVISAR'}</small><strong>${esc(q.prompt)}</strong></span><span class="review-expand" aria-hidden="true">+</span></summary><div class="review-content">${q.context ? `<p>${esc(q.context)}</p>` : ''}${q.code ? `<pre class="question-code" tabindex="0"><code>${esc(q.code)}</code></pre>` : ''}<div class="review-options">${q.options.map((o, j) => `<p class="${j === q.correct ? 'correct-review-option' : ''}"><strong>${letters[j]}.</strong> ${esc(o.text)} ${j === q.correct ? '<span>✓ Correta</span>' : j === a.selected ? '<span>← Sua resposta</span>' : ''}<small>${esc(o.explanation)}</small></p>`).join('')}</div><div class="review-explanation"><strong>Entenda o conceito</strong><p>${esc(q.explanation)}</p><p class="review-tip">✦ ${esc(q.tip)}</p></div></div></details>`;
}

function renderResults(exam) {
  const session = getSession(exam);
  const score = scoreSession(exam, session);
  if (!score.complete) { navigate(`#${exam.id}`); return; }
  finishSession(exam, session, state.history);
  save();
  document.title = `Resultado: ${score.correct}/10 · Simulado ${String(exam.number).padStart(2, '0')}`;
  const heading = score.correct >= 8 ? 'Olha o quanto você já sabe!' : score.correct >= 5 ? 'O aprendizado está acontecendo.' : 'Todo começo traz descobertas.';
  const description = score.correct === 10 ? 'Você acertou todas! Continue praticando nos outros simulados para reforçar o conteúdo.' : 'Agora você sabe onde concentrar a revisão. Leia os comentários e transforme cada dúvida em aprendizado.';
  const attempts = state.history.filter(h => h.examId === exam.id);
  const wrongTopics = [...new Set(exam.questions.filter((q, i) => session.answers[i].selected !== q.correct).flatMap(q => q.topics))];
  const nextExam = exams.find(e => e.id !== exam.id && !state.sessions[e.id]?.completedAt) || exams.find(e => e.id !== exam.id);
  main.innerHTML = `<div class="results-shell"><a href="#" class="back-link">${icons.back} Todos os simulados</a><section class="result-hero"><div class="result-score" style="--progress:${score.percent}%"><span><strong>${score.correct}<small>/10</small></strong><span>${score.percent}% de acertos</span></span></div><div class="result-copy"><p class="eyebrow">SIMULADO ${String(exam.number).padStart(2, '0')} · TREINO CONCLUÍDO</p><h1 data-focus tabindex="-1">${heading}</h1><p>${description}</p><div class="result-pills"><span>✓ ${score.correct} ${score.correct === 1 ? 'acerto' : 'acertos'}</span><span>↗ ${score.wrong} para revisar</span><span>Melhor nota: ${Math.max(score.correct, ...attempts.map(a => a.score))}/10</span></div></div></section><div class="result-actions"><button type="button" class="button button-primary" data-action="restart">↻ Refazer este simulado</button><a class="button button-secondary" href="#${nextExam.id}">Tentar outro simulado ${icons.arrow}</a></div>${wrongTopics.length ? `<section class="topics-to-review" aria-labelledby="topics-title"><h2 id="topics-title">Vale dar mais uma olhada em:</h2><div>${wrongTopics.map(t => `<span>${esc(TOPICS[t] || t)}</span>`).join('')}</div><p>Assuntos presentes nas questões que você errou. Os comentários abaixo ajudam a revisar.</p></section>` : '<div class="perfect-note">✦ Você passou por todo o conteúdo com 100% de acerto. Que tal um novo conjunto de questões?</div>'}<section class="review-section" aria-labelledby="review-title"><div class="section-heading"><div><p class="eyebrow">A PARTE QUE FAZ FIXAR</p><h2 id="review-title">Seu gabarito comentado</h2><p>Abra uma questão para entender cada alternativa.</p></div><div class="review-filters" role="group" aria-label="Filtrar questões"><button type="button" data-filter="all" aria-pressed="${resultFilter === 'all'}">Todas <span>10</span></button><button type="button" data-filter="wrong" aria-pressed="${resultFilter === 'wrong'}">Para revisar <span>${score.wrong}</span></button></div></div><div id="review-list">${exam.questions.map((q, i) => resultFilter === 'wrong' && session.answers[i].selected === q.correct ? '' : reviewItem(q, session.answers[i], i)).join('') || '<p class="empty-review">Tudo certo por aqui! Você não errou nenhuma questão.</p>'}</div></section><p class="material-note">Seu resultado é uma orientação para os estudos. As questões foram elaboradas para praticar os conceitos do material de referência.</p></div>`;
}

function route() {
  const [id, view] = location.hash.slice(1).split('/');
  return { exam: getExam(id), view };
}

function render() {
  const { exam, view } = route();
  if (!exam) {
    renderHome();
    if (location.hash === '#como-funciona' || location.hash === '#simulados') requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    else moveToTop();
  } else {
    if (view === 'resultado') renderResults(exam);
    else renderQuiz(exam, view === 'revisao');
    moveToTop();
  }
  document.querySelector('#storage-notice').hidden = storageOK;
}

function renderQuestion(exam) { renderQuiz(exam, true); moveToTop(); }

main.addEventListener('change', event => {
  if (!event.target.matches('input[name="answer"]')) return;
  const { exam } = route();
  if (!exam) return;
  const session = getSession(exam);
  if (!selectAnswer(exam, session, session.current, Number(event.target.value))) return;
  save();
  main.querySelectorAll('.answer-option').forEach(label => label.classList.toggle('is-selected', label.querySelector('input').checked));
  main.querySelector('[data-action="check"]').disabled = false;
});

main.addEventListener('click', event => {
  const questionButton = event.target.closest('[data-question]');
  const actionButton = event.target.closest('[data-action]');
  const filterButton = event.target.closest('[data-filter]');
  const { exam } = route();
  if (!exam) return;
  const session = getSession(exam);
  if (questionButton) { session.current = Number(questionButton.dataset.question); save(); renderQuestion(exam); return; }
  if (filterButton) {
    resultFilter = filterButton.dataset.filter;
    const scroll = window.scrollY;
    renderResults(exam);
    main.querySelector(`[data-filter="${resultFilter}"]`).focus({ preventScroll: true });
    window.scrollTo({ top: scroll, behavior: 'instant' });
    announce(resultFilter === 'wrong' ? `${scoreSession(exam, session).wrong} questões para revisar.` : 'Mostrando todas as 10 questões.');
    return;
  }
  if (!actionButton || actionButton.disabled) return;
  switch (actionButton.dataset.action) {
    case 'check':
      if (checkAnswer(exam, session, session.current)) {
        save(); renderQuiz(exam, true);
        const feedback = main.querySelector('#feedback-title');
        feedback.focus({ preventScroll: true });
        feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
        announce(session.answers[session.current].selected === exam.questions[session.current].correct ? 'Resposta correta. Leia a explicação.' : 'Resposta incorreta. A resposta correta e a explicação estão disponíveis.');
      }
      break;
    case 'previous': session.current = Math.max(0, session.current - 1); save(); renderQuestion(exam); break;
    case 'next': session.current = session.current < exam.questions.length - 1 ? session.current + 1 : session.answers.findIndex(a => !a.checked); save(); renderQuestion(exam); break;
    case 'finish': if (finishSession(exam, session, state.history)) { save(); resultFilter = 'all'; navigate(`#${exam.id}/resultado`); } break;
    case 'restart': pendingReset = exam; dialog.returnValue = ''; dialog.showModal(); break;
  }
});

dialog.addEventListener('close', () => {
  if (dialog.returnValue === 'reset' && pendingReset) {
    state.sessions[pendingReset.id] = createSession(pendingReset);
    save(); resultFilter = 'all'; navigate(`#${pendingReset.id}`); moveToTop();
  }
  pendingReset = null;
});
window.addEventListener('hashchange', render);
window.addEventListener('storage', event => {
  if (event.key !== STORAGE_KEY || dialog.open) return;
  try { state = restoreState(JSON.parse(event.newValue), exams); render(); announce('Progresso atualizado a partir de outra aba.'); } catch { /* Ignore malformed external data. */ }
});
render();
