import test from 'node:test';
import assert from 'node:assert/strict';
import { exams } from '../assets/questions.js';
import { TOPICS, createSession, scoreSession, selectAnswer, checkAnswer, finishSession, restoreState, escapeHTML } from '../assets/engine.js';

const exam = exams[0];
const answeredSession = () => {
  const session = createSession(exam, 1000);
  exam.questions.forEach((q, i) => {
    selectAnswer(exam, session, i, i < 3 ? (q.correct + 1) % 5 : q.correct);
    checkAnswer(exam, session, i);
  });
  return session;
};

test('each of five distinct exams mixes the full syllabus into ten explained questions', () => {
  assert.equal(exams.length, 5);
  const ids = new Set();
  const prompts = new Set();
  for (const e of exams) {
    assert.equal(e.questions.length, 10, e.id);
    assert.deepEqual([...new Set(e.questions.flatMap(q => q.topics))].sort(), Object.keys(TOPICS).sort(), e.id);
    for (const q of e.questions) {
      assert(!ids.has(q.id), `duplicate ID ${q.id}`);
      ids.add(q.id);
      const signature = `${q.context}\n${q.code || ''}\n${q.prompt}`;
      assert(!prompts.has(signature), `duplicate question ${q.id}`);
      prompts.add(signature);
      assert(q.context.length > 30 && q.prompt.length > 10 && q.explanation.length > 40 && q.tip.length > 10, q.id);
      assert.equal(q.options.length, 5, q.id);
      assert.equal(new Set(q.options.map(o => o.text)).size, 5, q.id);
      assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 5, q.id);
      assert(q.options.every(o => o.text.length > 3 && o.explanation.length > 20), q.id);
    }
  }
  assert.equal(ids.size, 50);
});

test('a fresh session has no checked or scored questions', () => {
  const session = createSession(exam, 1000);
  assert.deepEqual(scoreSession(exam, session), { checked: 0, correct: 0, wrong: 0, total: 10, percent: 0, complete: false });
  assert.equal(session.current, 0);
  assert.equal(session.completedAt, null);
  assert.equal(session.startedAt, 1000);
});

test('selecting an answer does not score it before explicit confirmation', () => {
  const session = createSession(exam);
  assert.equal(selectAnswer(exam, session, 0, exam.questions[0].correct), true);
  assert.equal(scoreSession(exam, session).checked, 0);
  assert.equal(scoreSession(exam, session).correct, 0);
  assert.equal(checkAnswer(exam, session, 0), true);
  assert.equal(scoreSession(exam, session).correct, 1);
});

test('confirmation requires a valid selection and cannot count twice or be changed', () => {
  const session = createSession(exam);
  assert.equal(checkAnswer(exam, session, 0), false);
  for (const invalid of [-1, 5, 1.5, NaN]) assert.equal(selectAnswer(exam, session, 0, invalid), false);
  assert.equal(selectAnswer(exam, session, -1, 0), false);
  assert.equal(selectAnswer(exam, session, 10, 0), false);
  selectAnswer(exam, session, 0, exam.questions[0].correct);
  checkAnswer(exam, session, 0);
  assert.equal(checkAnswer(exam, session, 0), false);
  assert.equal(selectAnswer(exam, session, 0, (exam.questions[0].correct + 1) % 5), false);
  assert.equal(scoreSession(exam, session).checked, 1);
  assert.equal(scoreSession(exam, session).correct, 1);
});

test('a mixed attempt produces an exact score, with unfinished attempts kept out of history', () => {
  const fresh = createSession(exam, 1000);
  const history = [];
  assert.equal(finishSession(exam, fresh, history, 2000), false);
  assert.equal(history.length, 0);
  const session = answeredSession();
  assert.deepEqual(scoreSession(exam, session), { checked: 10, correct: 7, wrong: 3, total: 10, percent: 70, complete: true });
  assert.equal(finishSession(exam, session, history, 2000), true);
  assert.deepEqual(history, [{ examId: exam.id, score: 7, completedAt: 2000 }]);
  assert.equal(finishSession(exam, session, history, 3000), true);
  assert.equal(history.length, 1);
  assert.equal(session.completedAt, 2000);
});

test('history retains the latest 100 completed attempts', () => {
  const history = Array.from({ length: 100 }, (_, i) => ({ examId: exam.id, score: 0, completedAt: i + 1 }));
  finishSession(exam, answeredSession(), history, 2000);
  assert.equal(history.length, 100);
  assert.equal(history[0].completedAt, 2);
  assert.equal(history.at(-1).score, 7);
});

test('saved progress round-trips without references to untrusted stored objects', () => {
  const session = answeredSession();
  session.current = 8;
  const history = [];
  finishSession(exam, session, history, 2000);
  const restored = restoreState({ sessions: { [exam.id]: session }, history }, exams);
  assert.deepEqual(restored, { sessions: { [exam.id]: session }, history });
  restored.sessions[exam.id].answers[0].selected = 0;
  assert.notEqual(session.answers[0].selected, 0);
});

test('bad stored sessions are discarded while unaffected exams survive', () => {
  const good = createSession(exams[1], 1000);
  const bad = createSession(exam, 1000);
  bad.answers[0] = { selected: 99, checked: true };
  const raw = { sessions: { [exam.id]: bad, [good.examId]: good }, history: [{ examId: exam.id, score: 99, completedAt: 2000 }, { examId: 'unknown', score: 2, completedAt: 2000 }, { examId: good.examId, score: 2, completedAt: 2000 }] };
  const restored = restoreState(raw, exams);
  assert.equal(restored.sessions[exam.id], undefined);
  assert.deepEqual(restored.sessions[good.examId], good);
  assert.equal(restored.history.length, 1);
  for (const raw of [null, undefined, false, 'bad', {}]) assert.deepEqual(restoreState(raw, exams), { sessions: {}, history: [] });
});

test('unfinished progress cannot claim completion and invalid navigation is normalized', () => {
  const session = createSession(exam, 1000);
  session.current = -1;
  session.completedAt = 2000;
  const restored = restoreState({ sessions: { [exam.id]: session } }, exams).sessions[exam.id];
  assert.equal(restored.current, 0);
  assert.equal(restored.completedAt, null);
  session.answers[0].checked = true;
  assert.equal(restoreState({ sessions: { [exam.id]: session } }, exams).sessions[exam.id], undefined);
});

test('HTML fragments in teaching material remain text, including quotes and entities', () => {
  assert.equal(escapeHTML('<script src="x">&\'</script>'), '&lt;script src=&quot;x&quot;&gt;&amp;&#39;&lt;/script&gt;');
});
