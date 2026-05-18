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
let currentPhase = 0;          // 0=theory, 1=examples, 2=exercises
let exerciseAnswers = {};      // { qIndex: { picked, correct } }
let currentCategory = 'Essentials';
let cachedVoices = [];
let activeEpisodeLineEl = null;
let episodePlayState = { stopped: true };

// ============================================================
// SPEECH (Web Speech API)
// ============================================================

function loadVoices() {
  cachedVoices = window.speechSynthesis.getVoices();
}
if (typeof speechSynthesis !== 'undefined') {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

function speak(text, rate = 0.85, onEnd) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'fr-FR';
  utter.rate = rate;
  const voices = cachedVoices.length ? cachedVoices : window.speechSynthesis.getVoices();
  const frVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('fr'));
  if (frVoice) utter.voice = frVoice;
  if (onEnd) utter.onend = onEnd;
  window.speechSynthesis.speak(utter);
}

function stopSpeech() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  episodePlayState.stopped = true;
  if (activeEpisodeLineEl) {
    activeEpisodeLineEl.classList.remove('active');
    activeEpisodeLineEl = null;
  }
}

// Wire all .play-btn elements (delegated)
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.play-btn');
  if (!btn) return;
  e.preventDefault();
  const text = btn.dataset.text;
  if (!text) return;
  document.querySelectorAll('.play-btn.playing').forEach(b => b.classList.remove('playing'));
  btn.classList.add('playing');
  speak(text, 0.85, () => btn.classList.remove('playing'));
});

// ============================================================
// ROUTING / NAVIGATION
// ============================================================

const PAGES = ['home', 'lesson', 'vocabulary', 'audio-lessons', 'login'];

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
// SIDEBAR — lesson list
// ============================================================

function renderSidebarLessons() {
  const ul = document.getElementById('lessonNav');
  ul.innerHTML = '';
  LESSONS.forEach((l, i) => {
    const li = document.createElement('li');
    li.dataset.lessonId = l.id;
    li.classList.toggle('completed', completedLessons.has(l.id));
    li.innerHTML = `
      <span class="nav-check"></span>
      <span>${i + 1}. ${l.title.replace(/^The /, '')}</span>
    `;
    li.addEventListener('click', () => {
      showPage('lesson', { lessonId: l.id });
      location.hash = l.id;
    });
    ul.appendChild(li);
  });
}

// ============================================================
// HOME — curriculum list and progress
// ============================================================

function renderCurriculum() {
  const wrap = document.getElementById('curriculumList');
  wrap.innerHTML = '';
  LESSONS.forEach((l, i) => {
    const item = document.createElement('div');
    item.className = 'curriculum-item';
    const done = completedLessons.has(l.id);
    item.innerHTML = `
      <div class="curriculum-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="curriculum-body">
        <div class="curriculum-title">${l.title}</div>
        <div class="curriculum-sub">${l.subtitle}</div>
      </div>
      <div class="curriculum-status ${done ? '' : 'incomplete'}">
        ${done ? '✓ Complete' : 'Not started'}
      </div>
    `;
    item.addEventListener('click', () => {
      showPage('lesson', { lessonId: l.id });
      location.hash = l.id;
    });
    wrap.appendChild(item);
  });
}

// ============================================================
// PROGRESS UI
// ============================================================

function updateProgressUI() {
  const total = LESSONS.length;
  const done = completedLessons.size;
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
  const lesson = LESSONS.find(l => l.id === lessonId);
  if (!lesson) return;
  currentLessonId = lessonId;
  currentPhase = 0;
  exerciseAnswers = {};

  const idx = LESSONS.findIndex(l => l.id === lessonId);
  document.getElementById('lessonEyebrow').textContent = `Lesson ${idx + 1} of ${LESSONS.length}`;
  document.getElementById('lessonTitle').textContent = lesson.title;
  document.getElementById('lessonSubtitle').textContent = lesson.subtitle;
  renderPhase();
}

function renderPhase() {
  const lesson = LESSONS.find(l => l.id === currentLessonId);
  if (!lesson) return;
  const content = document.getElementById('phaseContent');

  // phase pip state
  document.querySelectorAll('.phase-pip').forEach((pip, i) => {
    pip.classList.toggle('active', i === currentPhase);
    pip.classList.toggle('done', i < currentPhase);
  });

  if (currentPhase === 0) {
    content.innerHTML = `<div class="theory">${lesson.theory}</div>`;
  } else if (currentPhase === 1) {
    content.innerHTML = renderExamples(lesson);
  } else if (currentPhase === 2) {
    content.innerHTML = renderExercises(lesson);
    attachExerciseHandlers(lesson);
  }

  // footer buttons
  const prev = document.getElementById('prevPhaseBtn');
  const next = document.getElementById('nextPhaseBtn');
  prev.style.visibility = currentPhase === 0 ? 'hidden' : 'visible';
  if (currentPhase === 0) next.textContent = 'Continue to examples';
  else if (currentPhase === 1) next.textContent = 'Continue to exercises';
  else next.style.display = 'none';
  if (currentPhase < 2) next.style.display = '';
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

function renderExercises(lesson) {
  const items = lesson.exercises.map((ex, i) => `
    <div class="exercise" data-q="${i}">
      <div class="exercise-q">${i + 1}. ${escapeHtml(ex.q)}</div>
      <div class="exercise-options">
        ${ex.options.map((opt, oi) => `
          <button class="exercise-option" data-q="${i}" data-opt="${oi}">${escapeHtml(opt)}</button>
        `).join('')}
      </div>
      <div class="exercise-explanation" hidden></div>
    </div>
  `).join('');
  return `
    <p>Choose the correct answer. Each question gives you feedback immediately.</p>
    ${items}
    <div id="exerciseSummary"></div>
  `;
}

function attachExerciseHandlers(lesson) {
  document.querySelectorAll('.exercise-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const qIdx = parseInt(btn.dataset.q, 10);
      const optIdx = parseInt(btn.dataset.opt, 10);
      if (exerciseAnswers[qIdx]) return; // already answered

      const ex = lesson.exercises[qIdx];
      const isCorrect = optIdx === ex.correct;
      exerciseAnswers[qIdx] = { picked: optIdx, correct: isCorrect };

      const optionEls = document.querySelectorAll(`.exercise-option[data-q="${qIdx}"]`);
      optionEls.forEach((el, i) => {
        el.classList.add('disabled');
        if (i === ex.correct) el.classList.add('correct');
        if (i === optIdx && !isCorrect) el.classList.add('wrong');
      });

      const exp = document.querySelector(`.exercise[data-q="${qIdx}"] .exercise-explanation`);
      exp.textContent = ex.explanation;
      exp.hidden = false;

      checkExercisesComplete(lesson);
    });
  });
}

function checkExercisesComplete(lesson) {
  if (Object.keys(exerciseAnswers).length < lesson.exercises.length) return;
  const correctCount = Object.values(exerciseAnswers).filter(a => a.correct).length;
  const total = lesson.exercises.length;
  const summary = document.getElementById('exerciseSummary');
  const alreadyComplete = completedLessons.has(lesson.id);
  const idx = LESSONS.findIndex(l => l.id === lesson.id);
  const next = LESSONS[idx + 1];

  summary.innerHTML = `
    <div class="exercise-summary">
      <div class="score">${correctCount} / ${total}</div>
      <div class="sub">${correctCount === total ? 'A clean run. You earned it.' : 'Good. Review the explanations above and try the next lesson.'}</div>
      <div style="display:flex; gap:0.6rem; justify-content:center; flex-wrap:wrap;">
        ${alreadyComplete ? '' : `<button class="btn btn-gold" id="completeBtn">Complete lesson</button>`}
        ${alreadyComplete && next ? `<button class="btn btn-primary" id="nextLessonBtn">Next lesson →</button>` : ''}
        ${alreadyComplete && !next ? `<button class="btn btn-ghost" id="backHomeBtn">Back home</button>` : ''}
      </div>
    </div>
  `;

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
  if (nextLessonBtn) {
    nextLessonBtn.addEventListener('click', () => {
      showPage('lesson', { lessonId: next.id });
      location.hash = next.id;
    });
  }
  const backHomeBtn = document.getElementById('backHomeBtn');
  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', () => {
      showPage('home');
      location.hash = '';
    });
  }
}

document.getElementById('nextPhaseBtn').addEventListener('click', () => {
  if (currentPhase < 2) {
    currentPhase++;
    renderPhase();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
});
document.getElementById('prevPhaseBtn').addEventListener('click', () => {
  if (currentPhase > 0) {
    currentPhase--;
    renderPhase();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
});

// ============================================================
// VOCABULARY PAGE
// ============================================================

const CATEGORIES = ['Essentials', 'Greetings', 'Numbers', 'Days & Months', 'Food & Drink', 'Travel', 'Work', 'Adjectives', 'Verbs'];

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
  stopSpeech();
  episodePlayState = { stopped: false };
  const lineEls = cardEl.querySelectorAll('.dialogue-line');

  function playLine(i) {
    if (episodePlayState.stopped) return;
    if (i >= episode.dialogue.length) {
      if (activeEpisodeLineEl) activeEpisodeLineEl.classList.remove('active');
      activeEpisodeLineEl = null;
      return;
    }
    if (activeEpisodeLineEl) activeEpisodeLineEl.classList.remove('active');
    activeEpisodeLineEl = lineEls[i];
    activeEpisodeLineEl.classList.add('active');
    activeEpisodeLineEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    speak(episode.dialogue[i].fr, rate, () => playLine(i + 1));
  }
  playLine(0);
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
