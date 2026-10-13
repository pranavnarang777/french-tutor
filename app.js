// ============================================================
// FRANÇAIS — A structured French curriculum
// ============================================================
//
// Supabase setup — paste your project URL and anon key below.
// Get these from: app.supabase.com → your project → Settings → API
//
// SQL to run in the Supabase SQL editor:
//
//   create table progress (
//     id uuid default gen_random_uuid() primary key,
//     user_id uuid references auth.users on delete cascade,
//     lesson_id text not null,
//     completed_at timestamp default now(),
//     unique(user_id, lesson_id)
//   );
//
//   alter table progress enable row level security;
//
//   create policy "Users can manage own progress"
//   on progress for all
//   using (auth.uid() = user_id);
//
// ============================================================

const SUPABASE_URL = 'https://ilcjdzrpydyptrswxkfp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsY2pkenJweWR5cHRyc3d4a2ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5ODk2OTgsImV4cCI6MjA5NDU2NTY5OH0.jHJUmGLUA2s64VbU5xXhatfLJFwlMg5xy4FlTQwS77g';

let supabaseClient = null;
const supabaseConfigured =
  SUPABASE_URL && SUPABASE_URL !== 'YOUR_SUPABASE_URL' &&
  SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY';

if (supabaseConfigured && window.supabase && window.supabase.createClient) {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// ============================================================
// STATE
// ============================================================

let session = null;
let completedLessons = new Set();
let currentLessonId = null;
let currentPhase = 0;          // index into lessonPhases(lesson)
let exerciseAnswers = {};      // { qIndex: { picked, correct } }
let currentCategory = 'Essentials';
let activeEpisodeLineEl = null;
let episodePlayState = { stopped: true };
let activeVideo = null;

// ============================================================
// SPEECH (Web Speech API — voice choice lives in video.js)
// ============================================================

let currentUtterance = null;   // kept so Chrome doesn't garbage-collect it mid-speech

// speaker: 0 = main French voice, 1 = second voice (the other person in a dialogue)…
function speak(text, rate = 0.85, onEnd, speaker = 0) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'fr-FR';
  utter.rate = rate;
  const { voice, pitch } = Voices.forSpeaker(speaker);
  if (voice) utter.voice = voice;
  utter.pitch = pitch;
  if (onEnd) utter.onend = onEnd;
  currentUtterance = utter;
  window.speechSynthesis.speak(utter);
}

function stopVideo() {
  if (activeVideo) activeVideo.destroy();
  activeVideo = null;
}

function stopSpeech() {
  stopVideo();
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  episodePlayState.stopped = true;
  if (activeEpisodeLineEl) {
    activeEpisodeLineEl.classList.remove('active');
    activeEpisodeLineEl = null;
  }
}

// Wire every play button (delegated). Optional data-rate and data-voice.
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.play-btn, .alpha-card, .listen-btn');
  if (!btn) return;
  e.preventDefault();
  const text = btn.dataset.text;
  if (!text) return;
  document.querySelectorAll('.playing').forEach(b => b.classList.remove('playing'));
  btn.classList.add('playing');
  speak(text, parseFloat(btn.dataset.rate) || 0.85, () => btn.classList.remove('playing'), +(btn.dataset.voice || 0));
});

// ============================================================
// ROUTING / NAVIGATION
// ============================================================

const PAGES = ['home', 'lesson', 'vocabulary', 'audio-lessons', 'podcasts', 'login'];

function showPage(page, opts = {}) {
  stopSpeech();
  PAGES.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.classList.toggle('active', p === page);
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });
  if (page === 'lesson' && opts.lessonId) {
    openLesson(opts.lessonId);
  }
  if (window.innerWidth <= 900) {
    document.getElementById('sidebar').classList.remove('open');
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Global click handler for [data-page]
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-page]');
  if (!link) return;
  const page = link.dataset.page;
  const lessonId = link.dataset.lessonId;
  if (page === 'lesson' && lessonId) {
    e.preventDefault();
    showPage('lesson', { lessonId });
    location.hash = lessonId;
  } else if (page) {
    e.preventDefault();
    showPage(page);
    location.hash = page === 'home' ? '' : page;
  }
});

function applyHash() {
  const h = location.hash.replace(/^#/, '');
  if (!h || h === 'home') return showPage('home');
  if (LESSONS.find(l => l.id === h)) return showPage('lesson', { lessonId: h });
  if (PAGES.includes(h)) return showPage(h);
  showPage('home');
}
window.addEventListener('hashchange', applyHash);

// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

// ============================================================
// COURSE — the map in course.js, joined with the written lessons
// ============================================================
//
// Course lessons are numbered 1…N across the whole map. Lessons in
// LESSONS that aren't on the map are the earlier drafts ("archive"),
// kept readable until they've been rebuilt into the course.

const COURSE_LESSONS = COURSE.flatMap(level =>
  level.units.flatMap(unit =>
    unit.lessons.map(l => ({ ...l, level: level.level, unit }))));
const COURSE_IDS = new Set(COURSE_LESSONS.map(l => l.id));

function lessonById(id) { return LESSONS.find(l => l.id === id); }
function courseEntry(id) { return COURSE_LESSONS.find(l => l.id === id); }
function builtCourseLessons() { return COURSE_LESSONS.filter(l => lessonById(l.id)); }
function archiveLessons() { return LESSONS.filter(l => !COURSE_IDS.has(l.id)); }

// The ids a lesson's "Next lesson" button walks through.
function lessonSequence(id) {
  return COURSE_IDS.has(id) ? builtCourseLessons().map(l => l.id) : archiveLessons().map(l => l.id);
}

function goToLesson(id) {
  showPage('lesson', { lessonId: id });
  location.hash = id;
}

// ============================================================
// SIDEBAR — lesson list
// ============================================================

function navItem(id, label) {
  return `<li data-lesson-id="${id}" class="${completedLessons.has(id) ? 'completed' : ''}">
    <span class="nav-check"></span><span>${escapeHtml(label)}</span></li>`;
}

function renderSidebarLessons() {
  const ul = document.getElementById('lessonNav');
  const built = builtCourseLessons();
  const units = [...new Set(built.map(l => l.unit))];
  const archive = archiveLessons();

  ul.innerHTML = units.map(unit => `
    <li class="nav-unit">Unit ${unit.n} · ${escapeHtml(unit.name)}</li>
    ${built.filter(l => l.unit === unit)
      .map(l => navItem(l.id, `${COURSE_LESSONS.indexOf(l) + 1}. ${l.title}`)).join('')}
  `).join('') + (archive.length ? `
    <li class="nav-archive">
      <details>
        <summary>Earlier lessons (${archive.length})</summary>
        <ul class="nav-list">${archive.map((l, i) => navItem(l.id, `${i + 1}. ${l.title.replace(/^The /, '')}`)).join('')}</ul>
      </details>
    </li>` : '');

  ul.querySelectorAll('li[data-lesson-id]').forEach(li => {
    li.addEventListener('click', () => goToLesson(li.dataset.lessonId));
  });
}

// ============================================================
// HOME — the course map and progress
// ============================================================

function curriculumItem(num, title, sub, id) {
  const built = id && lessonById(id);
  const done = id && completedLessons.has(id);
  const status = !built ? 'Coming soon' : done ? '✓ Complete' : 'Not started';
  return `
    <div class="curriculum-item ${built ? '' : 'planned'}" ${built ? `data-lesson-id="${id}"` : ''}>
      <div class="curriculum-num">${String(num).padStart(2, '0')}</div>
      <div class="curriculum-body">
        <div class="curriculum-title">${escapeHtml(title)}</div>
        <div class="curriculum-sub">${escapeHtml(sub)}</div>
      </div>
      <div class="curriculum-status ${done ? '' : 'incomplete'}">${status}</div>
    </div>`;
}

function renderCurriculum() {
  const wrap = document.getElementById('curriculumList');
  const archive = archiveLessons();

  wrap.innerHTML = COURSE.map(level => {
    const ids = level.units.flatMap(u => u.lessons.map(l => l.id));
    const done = ids.filter(id => completedLessons.has(id)).length;
    return `
      <div class="level-block">
        <div class="level-head">
          <span class="level-badge">${level.level}</span>
          <span class="level-name">${escapeHtml(level.name)} <em>· ${escapeHtml(level.en)}</em></span>
          <span class="level-count">${done} / ${ids.length}</span>
        </div>
        ${level.units.map(unit => {
          const anyBuilt = unit.lessons.some(l => lessonById(l.id));
          return `
            <details class="unit-block" ${anyBuilt ? 'open' : ''}>
              <summary class="unit-head">
                <span>Unit ${unit.n} · ${escapeHtml(unit.name)}</span>
                <span class="unit-en">${escapeHtml(unit.en)}</span>
              </summary>
              ${unit.lessons.map(l => curriculumItem(COURSE_LESSONS.findIndex(c => c.id === l.id) + 1, l.title, l.sub, l.id)).join('')}
            </details>`;
        }).join('')}
      </div>`;
  }).join('') + (archive.length ? `
    <details class="unit-block archive-block">
      <summary class="unit-head">
        <span>Earlier lessons</span>
        <span class="unit-en">The first draft — being rebuilt into the course above</span>
      </summary>
      ${archive.map((l, i) => curriculumItem(i + 1, l.title, l.subtitle, l.id)).join('')}
    </details>` : '');

  wrap.querySelectorAll('.curriculum-item[data-lesson-id]').forEach(item => {
    item.addEventListener('click', () => goToLesson(item.dataset.lessonId));
  });
}

// ============================================================
// PROGRESS UI
// ============================================================

function updateProgressUI() {
  const total = COURSE_LESSONS.length;
  const done = COURSE_LESSONS.filter(l => completedLessons.has(l.id)).length;
  const pct = total ? (done / total) * 100 : 0;

  document.getElementById('sidebarProgressFill').style.width = pct + '%';
  document.getElementById('homeProgressFill').style.width = pct + '%';
  const txt = `${done} of ${total} lessons complete`;
  document.getElementById('sidebarProgressText').textContent = txt;
  document.getElementById('homeProgressText').textContent = txt;

  document.querySelectorAll('#lessonNav li').forEach(li => {
    li.classList.toggle('completed', completedLessons.has(li.dataset.lessonId));
  });
  renderCurriculum();
}

// ============================================================
// LESSON PAGE
// ============================================================

function openLesson(lessonId) {
  const lesson = lessonById(lessonId);
  if (!lesson) return;
  currentLessonId = lessonId;
  currentPhase = 0;
  exerciseAnswers = {};

  const entry = courseEntry(lessonId);
  const archive = archiveLessons();
  document.getElementById('lessonEyebrow').textContent = entry
    ? `${entry.level} · Unit ${entry.unit.n} · Lesson ${COURSE_LESSONS.indexOf(entry) + 1} of ${COURSE_LESSONS.length}`
    : `Earlier lesson ${archive.indexOf(lesson) + 1} of ${archive.length}`;
  document.getElementById('lessonTitle').textContent = lesson.title;
  document.getElementById('lessonSubtitle').textContent = lesson.subtitle;
  const goal = document.getElementById('lessonGoal');
  goal.hidden = !lesson.goal;
  goal.innerHTML = lesson.goal ? `<strong>By the end:</strong> ${escapeHtml(lesson.goal)}` : '';
  renderPhase();
}

const PHASE_LABELS = {
  watch: 'Watch', notes: 'Notes', theory: 'Theory', words: 'Words',
  dialogue: 'Dialogue', examples: 'Examples', practice: 'Practice'
};

function lessonVideo(lesson) {
  return lesson.video || (window.VIDEOS && VIDEOS[lesson.id]) || null;
}

// A lesson's steps in teaching order, built from whichever parts it has.
function lessonPhases(lesson) {
  return [
    lessonVideo(lesson) && 'watch',
    lesson.notes ? 'notes' : lesson.theory && 'theory',
    lesson.vocab && 'words',
    lesson.dialogue && 'dialogue',
    lesson.examples && 'examples',
    lesson.exercises && 'practice'
  ].filter(Boolean);
}

function renderPhase() {
  const lesson = lessonById(currentLessonId);
  if (!lesson) return;
  const content = document.getElementById('phaseContent');
  const phases = lessonPhases(lesson);
  const phase = phases[currentPhase];

  document.getElementById('phaseBar').innerHTML = phases.map((p, i) => `
    <div class="phase-pip ${i === currentPhase ? 'active' : ''} ${i < currentPhase ? 'done' : ''}" data-phase="${i}">
      <span class="phase-pip-num">${i + 1}</span><span class="phase-pip-label">${PHASE_LABELS[p]}</span>
    </div>
  `).join('');

  stopSpeech();
  const nextLabel = phases[currentPhase + 1] && PHASE_LABELS[phases[currentPhase + 1]].toLowerCase();
  if (phase === 'watch') {
    content.innerHTML = `
      <div id="videoMount"></div>
      <p class="video-note">Prefer to read? You can skip to the ${nextLabel} — they cover the same ground.</p>
    `;
    activeVideo = new LessonVideo(document.getElementById('videoMount'), lessonVideo(lesson), {
      onComplete: () => goToPhase(currentPhase + 1),
      nextLabel: `Continue to ${nextLabel}`
    });
  } else if (phase === 'notes' || phase === 'theory') {
    content.innerHTML = `<div class="theory">${lesson.notes || lesson.theory}</div>`;
  } else if (phase === 'words') {
    renderWords(lesson, content);
  } else if (phase === 'dialogue') {
    renderDialogue(lesson.dialogue, content);
  } else if (phase === 'examples') {
    content.innerHTML = renderExamples(lesson);
  } else if (phase === 'practice') {
    exerciseAnswers = {};
    renderExercises(lesson, content);
  }

  // footer buttons
  const prev = document.getElementById('prevPhaseBtn');
  const next = document.getElementById('nextPhaseBtn');
  const nextPhase = phases[currentPhase + 1];
  prev.style.visibility = currentPhase === 0 ? 'hidden' : 'visible';
  next.style.display = nextPhase ? '' : 'none';
  if (nextPhase) next.textContent = `Continue to ${PHASE_LABELS[nextPhase].toLowerCase()}`;
}

function goToPhase(i) {
  const lesson = lessonById(currentLessonId);
  if (!lesson || i < 0 || i >= lessonPhases(lesson).length) return;
  currentPhase = i;
  renderPhase();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function renderExamples(lesson) {
  const rows = lesson.examples.map(ex => `
    <tr>
      <td class="fr-cell">
        <em>${escapeHtml(ex.fr)}</em>
        <button class="play-btn" data-text="${escapeAttr(ex.fr)}">▶</button>
      </td>
      <td class="en-cell">${escapeHtml(ex.en)}</td>
      <td class="note-cell">${escapeHtml(ex.note)}</td>
    </tr>
  `).join('');
  return `
    <p>Listen to each line and read it aloud. The sentences below are useful in real situations — not toy examples.</p>
    <div class="examples-wrap">
      <table class="examples-table">
        <thead>
          <tr><th>French</th><th>English</th><th>Note</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// ------------------------------------------------------------
// WORDS — the lesson's vocabulary
// ------------------------------------------------------------

// "anglais / anglaise" → "anglais, anglaise" so the voice doesn't read the slash.
function speakable(s) {
  return s.replace(/\s*\/\s*/g, ', ').replace(/[()]/g, '');
}

function renderWords(lesson, content) {
  const cards = lesson.vocab.map(v => `
    <div class="vocab-card">
      <div class="vc-top">
        ${v.g ? `<span class="vc-gender-dot ${v.g}"></span>` : ''}
        <span class="vc-fr">${escapeHtml(v.fr)}</span>
        <button class="play-btn" data-text="${escapeAttr(speakable(v.fr))}">▶</button>
      </div>
      <div class="vc-en">${escapeHtml(v.en)}</div>
      ${v.note ? `<div class="vc-ipa">${escapeHtml(v.note)}</div>` : ''}
    </div>`).join('');
  content.innerHTML = `
    <p>The words of this lesson. Say each one out loud after you hear it. Nouns show their gender:
      <span class="gender-key m"></span> masculine, <span class="gender-key f"></span> feminine.</p>
    <div class="episode-controls">
      <button class="btn btn-gold" data-seq="play">▶ Listen to all</button>
      <button class="btn btn-ghost" data-seq="stop">Stop</button>
    </div>
    <div class="cat-grid lesson-words">${cards}</div>`;

  const cardEls = content.querySelectorAll('.vocab-card');
  content.querySelector('[data-seq="play"]').addEventListener('click', () =>
    playLines(lesson.vocab.map((v, i) => ({ text: speakable(v.fr), el: cardEls[i] })), 0.8, 900));
  content.querySelector('[data-seq="stop"]').addEventListener('click', stopSpeech);
}

// ------------------------------------------------------------
// DIALOGUE — the lesson's language in a real conversation
// ------------------------------------------------------------

function renderDialogue(d, content) {
  const cast = d.cast || {};
  const voiceOf = who => cast[who] || 0;
  content.innerHTML = `
    <div class="episode lesson-dialogue">
      <h3 class="episode-title">${escapeHtml(d.title)}</h3>
      <div class="episode-desc">${escapeHtml(d.setting)}</div>
      <div class="episode-controls">
        <button class="btn btn-gold" data-seq="play" data-rate="0.85">▶ Play</button>
        <button class="btn btn-ghost" data-seq="play" data-rate="0.65">▶ Slowly</button>
        <button class="btn btn-ghost" data-seq="stop">Stop</button>
        <button class="btn btn-ghost" data-seq="english">Hide English</button>
      </div>
      <div class="episode-dialogue">
        ${d.lines.map(l => `
          <div class="dialogue-line">
            <div class="dialogue-who">${escapeHtml(l.who)}</div>
            <div class="dialogue-fr">${escapeHtml(l.fr)}
              <button class="play-btn" data-text="${escapeAttr(l.say || l.fr)}" data-voice="${voiceOf(l.who)}">▶</button>
            </div>
            <div class="dialogue-en">${escapeHtml(l.en)}</div>
          </div>`).join('')}
      </div>
    </div>
    <p class="video-note">Listen once with the English. Then hide it and listen again — how much can you follow?</p>`;

  const card = content.querySelector('.lesson-dialogue');
  const lineEls = card.querySelectorAll('.dialogue-line');
  card.querySelectorAll('[data-seq]').forEach(btn => btn.addEventListener('click', () => {
    const act = btn.dataset.seq;
    if (act === 'stop') return stopSpeech();
    if (act === 'english') {
      const hidden = card.classList.toggle('hide-en');
      btn.textContent = hidden ? 'Show English' : 'Hide English';
      return;
    }
    playLines(d.lines.map((l, i) => ({ text: l.say || l.fr, el: lineEls[i], voice: voiceOf(l.who) })), parseFloat(btn.dataset.rate));
  }));
}

// ------------------------------------------------------------
// PRACTICE — exercise engine
// ------------------------------------------------------------
//
// Exercise types (`type` defaults to 'choice'):
//   choice  { q, options, correct, explanation }
//   listen  { audio, q, options, correct, explanation } — hear French, then choose
//   type    { q, answers: [accepted…], explanation }    — write the French
//   order   { q, words: [in order], answer, explanation } — build the sentence
// Options are shuffled on screen; `correct` indexes the original list.
// Explanations for type/order start with the model answer.

const ACCENT_KEYS = ['é', 'è', 'ê', 'à', 'â', 'ç', 'ù', 'û', 'î', 'ï', 'ô', 'ë', 'œ'];

function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Lowercase, unify apostrophes, drop punctuation and hyphens:
// "Bonjour, madame !" matches "bonjour madame".
function normAnswer(s) {
  return s.toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[.,!?;:«»"()\-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripAccents(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/œ/g, 'oe');
}

function renderExercises(lesson, content) {
  const kinds = { choice: 'Choose', listen: 'Listen', type: 'Write', order: 'Build' };
  const items = lesson.exercises.map((ex, i) => {
    const type = ex.type || 'choice';
    let body = '';
    if (type === 'choice' || type === 'listen') {
      body = (type === 'listen' ? `
        <div class="listen-row">
          <button class="listen-btn" data-text="${escapeAttr(ex.audio)}">▶ Listen</button>
          <button class="listen-btn slow" data-text="${escapeAttr(ex.audio)}" data-rate="0.6">Slowly</button>
        </div>` : '') + `
        <div class="exercise-options">
          ${shuffled(ex.options.map((_, oi) => oi)).map(oi =>
            `<button class="exercise-option" data-opt="${oi}">${escapeHtml(ex.options[oi])}</button>`).join('')}
        </div>`;
    } else if (type === 'type') {
      body = `
        <div class="type-row">
          <input class="type-input" type="text" lang="fr" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type in French…">
          <button class="btn btn-primary type-check">Check</button>
        </div>
        <div class="accent-keys">${ACCENT_KEYS.map(k => `<button class="accent-key" tabindex="-1">${k}</button>`).join('')}</div>`;
    } else if (type === 'order') {
      const order = shuffled(ex.words.map((_, wi) => wi));
      if (order.length > 1 && order.every((w, k) => w === k)) order.push(order.shift()); // never start solved
      body = `
        <div class="order-answer"></div>
        <div class="order-pool">${order.map(wi => `<button class="order-word" data-w="${wi}">${escapeHtml(ex.words[wi])}</button>`).join('')}</div>
        <button class="btn btn-primary order-check" disabled>Check</button>`;
    }
    return `
      <div class="exercise" data-q="${i}" data-type="${type}">
        <div class="exercise-kind">${kinds[type]}</div>
        <div class="exercise-q">${i + 1}. ${escapeHtml(ex.q)}</div>
        ${body}
        <div class="exercise-explanation" hidden></div>
      </div>`;
  }).join('');

  content.innerHTML = `
    <p>Recognise first, then produce. Every question gives you feedback straight away.</p>
    <div class="practice">${items}</div>
    <div id="exerciseSummary"></div>`;

  const practice = content.querySelector('.practice');
  practice.addEventListener('click', e => onPracticeClick(e, lesson));
  // Accent keys must not steal focus from the text box.
  practice.addEventListener('mousedown', e => { if (e.target.closest('.accent-key')) e.preventDefault(); });
  practice.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.classList.contains('type-input')) {
      e.preventDefault();
      checkTyped(e.target.closest('.exercise'), lesson);
    }
  });
}

function onPracticeClick(e, lesson) {
  const exEl = e.target.closest('.exercise');
  if (!exEl) return;
  const i = +exEl.dataset.q;
  if (exerciseAnswers[i]) return;
  const ex = lesson.exercises[i];

  const opt = e.target.closest('.exercise-option');
  if (opt) {
    const correct = +opt.dataset.opt === ex.correct;
    exEl.querySelectorAll('.exercise-option').forEach(el => {
      el.classList.add('disabled');
      if (+el.dataset.opt === ex.correct) el.classList.add('correct');
      if (el === opt && !correct) el.classList.add('wrong');
    });
    const heard = ex.audio ? `You heard « ${ex.audio} ». ` : '';
    return answerExercise(exEl, i, correct, heard + ex.explanation, lesson);
  }

  const key = e.target.closest('.accent-key');
  if (key) {
    const input = exEl.querySelector('.type-input');
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? start;
    input.value = input.value.slice(0, start) + key.textContent + input.value.slice(end);
    input.setSelectionRange(start + 1, start + 1);
    input.focus();
    return;
  }

  if (e.target.closest('.type-check')) return checkTyped(exEl, lesson);

  const word = e.target.closest('.order-word');
  if (word) {
    const pool = exEl.querySelector('.order-pool');
    const built = exEl.querySelector('.order-answer');
    (word.parentElement === pool ? built : pool).appendChild(word);
    exEl.querySelector('.order-check').disabled = pool.children.length > 0;
    return;
  }

  if (e.target.closest('.order-check')) {
    const built = [...exEl.querySelectorAll('.order-answer .order-word')].map(w => ex.words[+w.dataset.w]);
    const correct = normAnswer(built.join(' ')) === normAnswer(ex.words.join(' '));
    exEl.querySelectorAll('.order-word, .order-check').forEach(b => { b.disabled = true; });
    exEl.querySelector('.order-answer').classList.add(correct ? 'correct' : 'wrong');
    return answerExercise(exEl, i, correct, (correct ? '' : 'The answer: ') + ex.explanation, lesson);
  }
}

function checkTyped(exEl, lesson) {
  const i = +exEl.dataset.q;
  if (exerciseAnswers[i]) return;
  const ex = lesson.exercises[i];
  const input = exEl.querySelector('.type-input');
  const given = normAnswer(input.value);
  if (!given) return input.focus();

  const accepted = ex.answers.map(normAnswer);
  const exact = accepted.includes(given);
  // Right words, wrong or missing accents: counts, with a nudge.
  const almost = !exact && accepted.map(stripAccents).includes(stripAccents(given));
  input.disabled = true;
  exEl.querySelector('.type-check').disabled = true;
  input.classList.add(exact ? 'correct' : almost ? 'almost' : 'wrong');
  const msg = exact ? ex.explanation
    : almost ? `Almost — check the accents. ${ex.explanation}`
    : `The answer: ${ex.explanation}`;
  answerExercise(exEl, i, exact || almost, msg, lesson, almost);
}

function answerExercise(exEl, i, correct, message, lesson, almost = false) {
  exerciseAnswers[i] = { correct };
  exEl.classList.add('answered', correct ? (almost ? 'is-almost' : 'is-correct') : 'is-wrong');
  const exp = exEl.querySelector('.exercise-explanation');
  exp.textContent = (correct ? (almost ? '≈ ' : '✓ ') : '✗ ') + message;
  exp.hidden = false;
  checkExercisesComplete(lesson);
}

function checkExercisesComplete(lesson) {
  if (Object.keys(exerciseAnswers).length < lesson.exercises.length) return;
  const correctCount = Object.values(exerciseAnswers).filter(a => a.correct).length;
  const total = lesson.exercises.length;
  const summary = document.getElementById('exerciseSummary');
  const alreadyComplete = completedLessons.has(lesson.id);
  const seq = lessonSequence(lesson.id);
  const nextId = seq[seq.indexOf(lesson.id) + 1];
  const ratio = correctCount / total;
  const verdict = ratio === 1 ? 'A clean run. You earned it.'
    : ratio >= 0.7 ? 'Good work. Read the explanations for the ones you missed.'
    : 'Worth another pass: rewatch the video or reread the notes, then try again.';

  summary.innerHTML = `
    <div class="exercise-summary">
      <div class="score">${correctCount} / ${total}</div>
      <div class="sub">${verdict}</div>
      <div style="display:flex; gap:0.6rem; justify-content:center; flex-wrap:wrap;">
        ${alreadyComplete ? '' : `<button class="btn btn-gold" id="completeBtn">Complete lesson</button>`}
        ${alreadyComplete && nextId ? `<button class="btn btn-primary" id="nextLessonBtn">Next lesson →</button>` : ''}
        ${alreadyComplete && !nextId ? `<button class="btn btn-ghost" id="backHomeBtn">Back home</button>` : ''}
        <button class="btn btn-ghost" id="retryBtn">Try again</button>
      </div>
    </div>
    ${lesson.tutor ? `
      <div class="tutor-box">
        <div class="tutor-label">With your tutor</div>
        <p>Take these into your next live session:</p>
        <ul>${lesson.tutor.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul>
      </div>` : ''}
  `;

  document.getElementById('retryBtn').addEventListener('click', () => {
    exerciseAnswers = {};
    renderExercises(lesson, document.getElementById('phaseContent'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  });

  const completeBtn = document.getElementById('completeBtn');
  if (completeBtn) {
    completeBtn.addEventListener('click', async () => {
      completeBtn.disabled = true;
      completeBtn.textContent = 'Saving...';
      try {
        await markComplete(lesson.id);
      } catch (err) {
        console.warn('markComplete failed:', err);
      } finally {
        completeBtn.disabled = false;
        completeBtn.textContent = 'Complete lesson';
        checkExercisesComplete(lesson); // always re-render summary
      }
    });
  }
  const nextLessonBtn = document.getElementById('nextLessonBtn');
  if (nextLessonBtn) nextLessonBtn.addEventListener('click', () => goToLesson(nextId));
  const backHomeBtn = document.getElementById('backHomeBtn');
  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', () => {
      showPage('home');
      location.hash = '';
    });
  }
}

document.getElementById('nextPhaseBtn').addEventListener('click', () => goToPhase(currentPhase + 1));
document.getElementById('prevPhaseBtn').addEventListener('click', () => goToPhase(currentPhase - 1));

// ============================================================
// VOCABULARY PAGE
// ============================================================

const CATEGORIES = ['Essentials', 'Greetings', 'Numbers', 'Days & Months', 'Food & Drink', 'Travel', 'Work', 'Body & Health', 'Adjectives', 'Verbs'];

function renderCategoryTabs() {
  const wrap = document.getElementById('catTabs');
  wrap.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-tab' + (cat === currentCategory ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      currentCategory = cat;
      renderCategoryTabs();
      renderCategoryGrid();
    });
    wrap.appendChild(btn);
  });
}

function renderCategoryGrid() {
  const wrap = document.getElementById('catGrid');
  wrap.innerHTML = '';
  const items = VOCAB_DB.filter(v => v.cat === currentCategory);
  items.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    const dot = v.gender ? `<span class="vc-gender-dot ${v.gender}"></span>` : '';
    card.innerHTML = `
      <div class="vc-top">
        ${dot}
        <span class="vc-fr">${escapeHtml(v.fr)}</span>
        <button class="play-btn" data-text="${escapeAttr(v.fr)}">▶</button>
      </div>
      <div class="vc-en">${escapeHtml(v.en)}</div>
      <div class="vc-ipa">${escapeHtml(v.ipa)}</div>
    `;
    wrap.appendChild(card);
  });
}

function vocabSearch(query) {
  const result = document.getElementById('searchResult');
  if (!query.trim()) { result.innerHTML = ''; return; }
  const q = query.toLowerCase().trim();
  const match = VOCAB_DB.find(v =>
    v.fr.toLowerCase().includes(q) || v.en.toLowerCase().includes(q)
  );
  if (!match) {
    result.innerHTML = `<div class="vocab-result-card"><div class="vr-en">No match for "${escapeHtml(query)}". Try a different word.</div></div>`;
    return;
  }
  const genderBadge = match.gender ? `<span class="vr-gender">${match.gender === 'm' ? 'masculine' : 'feminine'}</span>` : '';
  const examples = (match.examples || []).map(ex => `
    <div class="vr-ex">
      ${escapeHtml(ex)}
      <button class="play-btn" data-text="${escapeAttr(ex)}">▶</button>
    </div>
  `).join('');
  result.innerHTML = `
    <div class="vocab-result-card">
      <div class="vr-top">
        <div class="vr-word">${escapeHtml(match.fr)}</div>
        <button class="play-btn" data-text="${escapeAttr(match.fr)}">▶</button>
        <span class="vr-ipa">${escapeHtml(match.ipa)}</span>
        ${genderBadge}
      </div>
      <div class="vr-en">${escapeHtml(match.en)}</div>
      <div class="vr-examples">${examples}</div>
    </div>
  `;
}

document.getElementById('vocabSearch').addEventListener('input', (e) => {
  vocabSearch(e.target.value);
});

// ============================================================
// AUDIO EPISODES
// ============================================================

function renderEpisodes() {
  const wrap = document.getElementById('episodeList');
  wrap.innerHTML = '';
  EPISODES.forEach(ep => {
    const card = document.createElement('div');
    card.className = 'episode';
    card.dataset.epId = ep.id;

    const lines = ep.dialogue.map((l, i) => `
      <div class="dialogue-line" data-line="${i}">
        <div class="dialogue-fr">
          ${escapeHtml(l.fr)}
          <button class="play-btn" data-text="${escapeAttr(l.fr)}">▶</button>
        </div>
        <div class="dialogue-en">${escapeHtml(l.en)}</div>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="episode-meta">
        <span>Episode ${ep.number}</span>
        <span class="episode-level">${ep.level}</span>
      </div>
      <h3 class="episode-title">${escapeHtml(ep.title)}</h3>
      <div class="episode-desc">${escapeHtml(ep.description)}</div>
      <div class="episode-controls">
        <button class="btn btn-gold" data-action="play" data-rate="0.85">▶ Play episode</button>
        <button class="btn btn-ghost" data-action="play" data-rate="0.65">▶ Play slow</button>
        <button class="btn btn-ghost" data-action="stop">Stop</button>
      </div>
      <div class="episode-dialogue">${lines}</div>
    `;

    wrap.appendChild(card);
  });

  wrap.querySelectorAll('.episode').forEach(card => {
    const epId = card.dataset.epId;
    const episode = EPISODES.find(e => e.id === epId);
    card.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        if (action === 'stop') return stopSpeech();
        const rate = parseFloat(btn.dataset.rate) || 0.85;
        playEpisode(episode, card, rate);
      });
    });
  });
}

function playEpisode(episode, cardEl, rate) {
  const lineEls = cardEl.querySelectorAll('.dialogue-line');
  playLines(episode.dialogue.map((l, i) => ({ text: l.fr, el: lineEls[i] })), rate);
}

// Speak items one after another, highlighting each one's element.
// items: [{ text, el, voice }]; gapMs: pause between items.
function playLines(items, rate = 0.85, gapMs = 250) {
  stopSpeech();
  const state = episodePlayState = { stopped: false };

  function step(i) {
    if (state.stopped) return;
    if (activeEpisodeLineEl) activeEpisodeLineEl.classList.remove('active');
    if (i >= items.length) {
      activeEpisodeLineEl = null;
      return;
    }
    activeEpisodeLineEl = items[i].el;
    activeEpisodeLineEl.classList.add('active');
    activeEpisodeLineEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    speak(items[i].text, rate, () => setTimeout(() => step(i + 1), gapMs), items[i].voice || 0);
  }
  step(0);
}

// ============================================================
// PODCASTS
// ============================================================

function renderPodcasts() {
  const wrap = document.getElementById('podcastList');
  if (!wrap) return;
  const list = (window.PODCASTS || []);
  wrap.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'podcast';
    const episodes = (p.episodes || []).map(ep => `
      <li><a href="${escapeAttr(ep.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(ep.title)}</a></li>
    `).join('');
    card.innerHTML = `
      <div class="podcast-meta">
        <span class="podcast-level">${escapeHtml(p.level)}</span>
        <span>${escapeHtml(p.host)}</span>
      </div>
      <h3 class="podcast-title">${escapeHtml(p.name)}</h3>
      <p class="podcast-desc">${escapeHtml(p.description)}</p>
      ${episodes ? `<div class="podcast-section-label">Recommended episodes</div><ul class="podcast-episodes">${episodes}</ul>` : ''}
      <div class="podcast-actions">
        <a class="btn btn-gold" href="${escapeAttr(p.url)}" target="_blank" rel="noopener noreferrer">Visit ${escapeHtml(p.site)} ↗</a>
      </div>
    `;
    wrap.appendChild(card);
  });
}

// ============================================================
// AUTH & PROGRESS (Supabase + localStorage fallback)
// ============================================================

function saveProgressLocal(lessonId) {
  try {
    const p = JSON.parse(localStorage.getItem('frenchProgress') || '{}');
    p[lessonId] = true;
    localStorage.setItem('frenchProgress', JSON.stringify(p));
  } catch (err) {
    console.warn('Could not save progress to localStorage:', err);
  }
}

async function markComplete(lessonId) {
  completedLessons.add(lessonId);
  try {
    if (supabaseClient && session) {
      const savePromise = supabaseClient
        .from('progress')
        .upsert({ user_id: session.user.id, lesson_id: lessonId }, { onConflict: 'user_id,lesson_id' });
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Supabase save timed out after 5s')), 5000)
      );
      try {
        await Promise.race([savePromise, timeoutPromise]);
      } catch (err) {
        console.warn('Could not save progress to Supabase, falling back to localStorage:', err);
        saveProgressLocal(lessonId);
      }
    } else {
      saveProgressLocal(lessonId);
    }
  } finally {
    updateProgressUI();
  }
}

async function loadProgress() {
  if (supabaseClient && session) {
    try {
      const { data, error } = await supabaseClient
        .from('progress')
        .select('lesson_id')
        .eq('user_id', session.user.id);
      if (error) throw error;
      completedLessons = new Set((data || []).map(r => r.lesson_id));
    } catch (err) {
      console.warn('Could not load progress from Supabase:', err);
      completedLessons = new Set();
    }
  } else {
    const p = JSON.parse(localStorage.getItem('frenchProgress') || '{}');
    completedLessons = new Set(Object.keys(p));
  }
  updateProgressUI();
}

function updateAuthArea() {
  const wrap = document.getElementById('authArea');
  if (session) {
    wrap.innerHTML = `
      <div class="user-line">
        <span class="user-email">${escapeHtml(session.user.email)}</span>
        <button class="logout-btn" id="logoutBtn">Logout</button>
      </div>
    `;
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
  } else {
    wrap.innerHTML = `<a class="auth-link" data-page="login" href="#login">Login for cross-device sync</a>`;
  }
}

function showAuthMessage(text, kind) {
  const el = document.getElementById('authMessage');
  el.textContent = text;
  el.className = 'auth-message ' + (kind || 'error');
  el.hidden = false;
}
function clearAuthMessage() {
  const el = document.getElementById('authMessage');
  el.hidden = true; el.textContent = '';
}

async function handleLogin(e) {
  e && e.preventDefault();
  clearAuthMessage();
  if (!supabaseClient) {
    showAuthMessage('Supabase is not configured. Add your URL and anon key in app.js.', 'error');
    return;
  }
  const email = document.getElementById('authEmail').value.trim();
  const password = document.getElementById('authPassword').value;
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) return showAuthMessage(error.message, 'error');
  session = data.session;
  updateAuthArea();
  await loadProgress();
  showPage('home');
  location.hash = '';
}

async function handleSignup() {
  clearAuthMessage();
  if (!supabaseClient) {
    showAuthMessage('Supabase is not configured. Add your URL and anon key in app.js.', 'error');
    return;
  }
  const email = document.getElementById('authEmail').value.trim();
  const password = document.getElementById('authPassword').value;
  if (!email || password.length < 6) {
    return showAuthMessage('Enter an email and a password of at least 6 characters.', 'error');
  }
  const { data, error } = await supabaseClient.auth.signUp({ email, password });
  if (error) return showAuthMessage(error.message, 'error');
  if (data.session) {
    session = data.session;
    updateAuthArea();
    await loadProgress();
    showPage('home');
    location.hash = '';
  } else {
    showAuthMessage('Account created. Check your email to confirm, then log in.', 'success');
  }
}

async function handleLogout() {
  if (supabaseClient) await supabaseClient.auth.signOut();
  session = null;
  updateAuthArea();
  await loadProgress();
  showPage('home');
  location.hash = '';
}

document.getElementById('authForm').addEventListener('submit', handleLogin);
document.getElementById('signupBtn').addEventListener('click', handleSignup);

// ============================================================
// UTIL
// ============================================================

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
function escapeAttr(s) {
  return String(s).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ============================================================
// INIT
// ============================================================

async function init() {
  renderSidebarLessons();
  renderCategoryTabs();
  renderCategoryGrid();
  renderEpisodes();
  renderPodcasts();

  if (supabaseClient) {
    try {
      const { data } = await supabaseClient.auth.getSession();
      session = data.session;
      supabaseClient.auth.onAuthStateChange(async (_event, newSession) => {
        session = newSession;
        updateAuthArea();
        await loadProgress();
      });
    } catch (err) {
      console.warn('Supabase session check failed:', err);
    }
  }

  updateAuthArea();
  await loadProgress();
  applyHash();
}

init();
