import { test, expect } from '@playwright/test';
import { exams } from '../assets/questions.js';
import { STORAGE_KEY } from '../assets/engine.js';

const errors = new WeakMap();
test.beforeEach(async ({ page }) => {
  const captured = [];
  errors.set(page, captured);
  page.on('pageerror', error => captured.push(error.message));
});
test.afterEach(async ({ page }) => expect(errors.get(page)).toEqual([]));

async function selectOption(page, index) {
  await page.locator('.answer-option').nth(index).click();
  await expect(page.locator('input[name="answer"]').nth(index)).toBeChecked();
}

async function confirmOption(page, index) {
  await selectOption(page, index);
  await page.getByRole('button', { name: 'Conferir resposta' }).click();
  await expect(page.locator('#feedback-title')).toBeVisible();
}

async function completeExam(page, exam, wrongCount = 0) {
  await page.goto(`/#${exam.id}`);
  for (let i = 0; i < 10; i++) {
    await expect(page.locator('.question-counter strong')).toHaveText(String(i + 1).padStart(2, '0'));
    const q = exam.questions[i];
    await confirmOption(page, i < wrongCount ? (q.correct + 1) % 5 : q.correct);
    if (i < 9) await page.getByRole('button', { name: 'Próxima questão' }).click();
  }
  await page.locator('.question-actions').getByRole('button', { name: 'Ver meu resultado' }).click();
  await expect(page).toHaveURL(new RegExp(`#${exam.id}/resultado$`));
  await expect(page.locator('.result-score strong')).toHaveText(`${10 - wrongCount}/10`);
}

test('choose a test, preserve an unconfirmed choice, explain a mistake, and resume after reload', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.exam-card')).toHaveCount(5);
  await page.locator('.exam-card').first().getByRole('link', { name: 'Começar simulado' }).click();
  await expect(page.getByRole('button', { name: 'Conferir resposta' })).toBeDisabled();
  const q = exams[0].questions[0];
  const wrong = (q.correct + 1) % 5;
  await selectOption(page, wrong);
  await page.reload();
  await expect(page.locator('input[name="answer"]').nth(wrong)).toBeChecked();
  await expect(page.getByRole('button', { name: 'Conferir resposta' })).toBeEnabled();
  await page.getByRole('button', { name: 'Conferir resposta' }).click();
  await expect(page.locator('.correct-answer')).toContainText(q.options[q.correct].text);
  await expect(page.locator('.your-choice')).toContainText(q.options[wrong].explanation);
  await expect(page.locator('.answer-feedback')).toContainText(q.explanation);
  await expect(page.locator('.answer-options input:disabled')).toHaveCount(5);
  await page.getByText('Entenda todas as alternativas', { exact: true }).click();
  for (const option of q.options) await expect(page.locator('.alternatives-details')).toContainText(option.explanation);
  await page.getByRole('button', { name: 'Próxima questão' }).click();
  await page.reload();
  await expect(page.locator('.question-counter strong')).toHaveText('02');
  await expect(page.locator('.question-dot.wrong')).toHaveCount(1);
  await page.getByRole('link', { name: 'Todos os simulados' }).click();
  await expect(page.locator('.exam-card').first()).toContainText('1 de 10');
  await page.locator('.exam-card').first().getByRole('link', { name: 'Continuar simulado' }).click();
  await expect(page.locator('.question-counter strong')).toHaveText('02');
});

test('result review filters mistakes and restart preserves history with a cancel path', async ({ page }) => {
  await completeExam(page, exams[0], 3);
  await expect(page.locator('.review-item')).toHaveCount(10);
  await page.getByRole('button', { name: /Para revisar/ }).click();
  await expect(page.locator('.review-item')).toHaveCount(3);
  await page.locator('.review-item summary').first().click();
  await expect(page.locator('.review-item[open] .review-explanation')).toContainText(exams[0].questions[0].explanation);
  await page.reload();
  const historyBefore = await page.evaluate(key => JSON.parse(localStorage.getItem(key)).history, STORAGE_KEY);
  expect(historyBefore).toHaveLength(1);
  await page.getByRole('button', { name: 'Refazer este simulado' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button', { name: 'Continuar estudando' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(page.locator('.result-score strong')).toHaveText('7/10');
  await page.getByRole('button', { name: 'Refazer este simulado' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Refazer simulado', exact: true }).click();
  await expect(page.locator('.question-counter strong')).toHaveText('01');
  await expect(page.locator('.answer-options input:checked')).toHaveCount(0);
  await expect(page.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key)).history, STORAGE_KEY)).toEqual(historyBefore);
});

for (const exam of exams) test(`${exam.title}: all ten questions can be answered and score 10/10`, async ({ page }) => {
  await completeExam(page, exam);
  await expect(page.locator('.review-correct')).toHaveCount(10);
  await page.getByRole('button', { name: /Para revisar/ }).click();
  await expect(page.locator('.empty-review')).toBeVisible();
  await page.getByRole('link', { name: 'Todos os simulados' }).click();
  await expect(page.locator('.exam-card').nth(exam.number - 1)).toContainText('Concluído');
  await page.locator('.exam-card').nth(exam.number - 1).getByRole('link', { name: 'Ver resultado' }).click();
  await expect(page.locator('.result-score strong')).toHaveText('10/10');
});

test('question navigator can skip ahead and returns from the final question to a pending one', async ({ page }) => {
  await page.goto('/#simulado-2');
  await page.getByRole('button', { name: 'Questão 10, não respondida', exact: true }).click();
  await confirmOption(page, exams[1].questions[9].correct);
  await page.getByRole('button', { name: 'Ir para questão pendente' }).click();
  await expect(page.locator('.question-counter strong')).toHaveText('01');
  await page.getByRole('button', { name: 'Questão 10, correta', exact: true }).click();
  await expect(page.locator('.answer-options input:disabled')).toHaveCount(5);
  await expect(page.locator('.feedback-correct')).toBeVisible();
});

for (const width of [320, 390]) test(`mobile ${width}px remains operable without horizontal overflow`, async ({ page }) => {
  await page.setViewportSize({ width, height: 844 });
  await page.goto('/');
  await expect(page.locator('.exam-card')).toHaveCount(5);
  await page.evaluate(() => document.fonts.ready);
  const noOverflow = async () => expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await noOverflow();
  await page.locator('.exam-card').last().getByRole('link', { name: 'Começar simulado' }).click();
  await noOverflow();
  await confirmOption(page, (exams[4].questions[0].correct + 1) % 5);
  await noOverflow();
  await expect(page.locator('.correct-answer')).toBeVisible();
  await page.getByRole('button', { name: 'Próxima questão' }).click();
  await expect(page.locator('.question-counter strong')).toHaveText('02');
  await noOverflow();
});

test('radio choices and confirmation work with the keyboard and focus moves to feedback', async ({ page }) => {
  await page.goto('/#simulado-3');
  const radio = page.locator('input[name="answer"]').nth(exams[2].questions[0].correct);
  await radio.focus();
  await page.keyboard.press('Space');
  await expect(radio).toBeChecked();
  const confirm = page.getByRole('button', { name: 'Conferir resposta' });
  await confirm.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#feedback-title')).toBeFocused();
  await expect(page.locator('.feedback-correct')).toBeVisible();
});

test('blocked local storage warns without preventing the quiz', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Blocked', 'SecurityError'); } });
  });
  await page.goto('/#simulado-4');
  await expect(page.locator('#storage-notice')).toBeVisible();
  await confirmOption(page, exams[3].questions[0].correct);
  await expect(page.locator('.feedback-correct')).toBeVisible();
  await page.getByRole('button', { name: 'Próxima questão' }).click();
  await expect(page.locator('.question-counter strong')).toHaveText('02');
});

test('Escape cancels a later reset dialog after an earlier confirmed reset', async ({ page }) => {
  await page.goto('/#simulado-1');
  await page.getByRole('button', { name: 'Recomeçar este simulado' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Refazer simulado', exact: true }).click();
  await selectOption(page, 1);
  await page.getByRole('button', { name: 'Recomeçar este simulado' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(page.locator('input[name="answer"]').nth(1)).toBeChecked();
  await expect(page.getByRole('button', { name: 'Conferir resposta' })).toBeEnabled();
});

test('skip link focuses the main landmark without discarding the quiz route', async ({ page }) => {
  await page.goto('/#simulado-3');
  const skipLink = page.getByRole('link', { name: 'Pular para o conteúdo' });
  await skipLink.focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#simulado-3$/);
  await expect(page.locator('#main')).toBeFocused();
  await expect(page.locator('.question-counter strong')).toHaveText('01');
});

test('an older saved result keeps its best score when its history entry was pruned', async ({ page }) => {
  const exam = exams[0];
  const oldSession = {
    examId: exam.id, current: 9, startedAt: 1000, completedAt: 2000,
    answers: exam.questions.map((q, i) => ({ selected: i < 3 ? (q.correct + 1) % 5 : q.correct, checked: true })),
  };
  const history = Array.from({ length: 100 }, (_, i) => ({ examId: exams[1].id, score: 2, completedAt: i + 3000 }));
  await page.addInitScript(({ key, value }) => localStorage.setItem(key, JSON.stringify(value)), { key: STORAGE_KEY, value: { sessions: { [exam.id]: oldSession }, history } });
  await page.goto(`/#${exam.id}/resultado`);
  await expect(page.locator('.result-score strong')).toHaveText('7/10');
  await expect(page.locator('.result-pills')).toContainText('Melhor nota: 7/10');
  await page.getByRole('link', { name: 'Todos os simulados' }).click();
  await expect(page.locator('.exam-card').first()).toContainText('melhor: 7/10');
});
