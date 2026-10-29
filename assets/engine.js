export const STORAGE_KEY = 'webnapratica:v1';
export const TOPICS = {
  padroes: 'Padrões da Web', estrutura: 'Estrutura HTML', titulos: 'Títulos', espacos: 'Espaços no HTML',
  links: 'Links', tabelas: 'Tabelas', funcoes: 'Funções', scripts: 'JavaScript no HTML', dom: 'DOM',
  eventos: 'Eventos', 'css-externo': 'CSS externo', seletores: 'Seletores CSS', cor: 'Cor do texto',
  fontes: 'Fontes', fundo: 'Imagem de fundo', posicionamento: 'Posicionamento CSS', usabilidade: 'Usabilidade',
};

export function createSession(exam, now = Date.now()) {
  return { examId: exam.id, current: 0, startedAt: now, completedAt: null,
    answers: exam.questions.map(() => ({ selected: null, checked: false })) };
}

export function scoreSession(exam, session) {
  const checked = session.answers.filter(a => a.checked).length;
  const correct = session.answers.reduce((sum, a, i) => sum + Number(a.checked && a.selected === exam.questions[i].correct), 0);
  return { checked, correct, wrong: checked - correct, total: exam.questions.length,
    percent: Math.round(correct / exam.questions.length * 100), complete: checked === exam.questions.length };
}

export function selectAnswer(exam, session, index, selected) {
  if (!Number.isInteger(index) || !Number.isInteger(selected) || !exam.questions[index]?.options[selected] || session.answers[index].checked) return false;
  session.answers[index].selected = selected;
  return true;
}

export function checkAnswer(exam, session, index) {
  const answer = session.answers[index];
  if (!answer || answer.checked || !Number.isInteger(answer.selected) || !exam.questions[index]?.options[answer.selected]) return false;
  answer.checked = true;
  return true;
}

export function finishSession(exam, session, history, now = Date.now()) {
  if (!scoreSession(exam, session).complete) return false;
  if (!session.completedAt) {
    session.completedAt = now;
    history.push({ examId: exam.id, score: scoreSession(exam, session).correct, completedAt: now });
    if (history.length > 100) history.splice(0, history.length - 100);
  }
  return true;
}

export function restoreState(raw, exams) {
  const clean = { sessions: {}, history: [] };
  if (!raw || typeof raw !== 'object') return clean;
  for (const exam of exams) {
    const s = raw.sessions?.[exam.id];
    if (!s || s.examId !== exam.id || !Array.isArray(s.answers) || s.answers.length !== exam.questions.length || !Number.isFinite(s.startedAt) || s.startedAt <= 0) continue;
    if (!s.answers.every((a, i) => a && typeof a.checked === 'boolean' && (a.selected === null || Number.isInteger(a.selected) && a.selected >= 0 && a.selected < exam.questions[i].options.length) && (!a.checked || a.selected !== null))) continue;
    const current = Number.isInteger(s.current) && s.current >= 0 && s.current < exam.questions.length ? s.current : 0;
    const completedAt = s.answers.every(a => a.checked) && Number.isFinite(s.completedAt) && s.completedAt >= s.startedAt ? s.completedAt : null;
    clean.sessions[exam.id] = { examId: exam.id, current, startedAt: s.startedAt, completedAt, answers: s.answers.map(a => ({ selected: a.selected, checked: a.checked })) };
  }
  if (Array.isArray(raw.history)) clean.history = raw.history.filter(h => h && exams.some(e => e.id === h.examId && Number.isInteger(h.score) && h.score >= 0 && h.score <= e.questions.length) && Number.isFinite(h.completedAt)).slice(-100);
  return clean;
}

export function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
