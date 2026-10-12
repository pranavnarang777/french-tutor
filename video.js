// ============================================================
// CLASSROOM VIDEO PLAYER
// ============================================================
//
// Lessons are taught as board lectures: a teacher's voice explains
// while the board fills in, beat by beat. Scripts live in videos.js.
//
// Narration is spoken with the browser's speech engine. English and
// French use separate voices, so [[French]] inside a sentence is
// pronounced by a native French voice.
//
// ============================================================

// ------------------------------------------------------------
// VOICES — shared with app.js (speak())
// ------------------------------------------------------------

const Voices = {
  list: [],
  prefs: {},

  load() {
    if (!window.speechSynthesis) return;
    this.list = window.speechSynthesis.getVoices();
  },

  // Neural/cloud voices sound far more natural than the old desktop ones.
  score(v) {
    const n = v.name.toLowerCase();
    let s = 0;
    if (/natural|neural|premium|enhanced/.test(n)) s += 4;
    if (/online|google/.test(n)) s += 2;
    if (v.localService === false) s += 1;
    return s;
  },

  candidates(lang) {
    return this.list.filter(v => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith(lang));
  },

  pick(lang) {
    const cands = this.candidates(lang);
    const pref = this.prefs[lang];
    if (pref) {
      const v = cands.find(c => c.name === pref);
      if (v) return v;
    }
    const regional = lang === 'fr' ? 'fr-fr' : null;
    const rank = v => this.score(v) + (regional && v.lang.toLowerCase().replace('_', '-') === regional ? 1 : 0);
    return cands.slice().sort((a, b) => rank(b) - rank(a))[0] || null;
  },

  setPref(lang, name) {
    this.prefs[lang] = name;
    try { localStorage.setItem('frenchVoicePrefs', JSON.stringify(this.prefs)); } catch (err) { /* private mode */ }
  }
};

try { Voices.prefs = JSON.parse(localStorage.getItem('frenchVoicePrefs') || '{}'); } catch (err) { Voices.prefs = {}; }
if (window.speechSynthesis) {
  Voices.load();
  window.speechSynthesis.addEventListener('voiceschanged', () => Voices.load());
}

// ------------------------------------------------------------
// TEXT HELPERS
// ------------------------------------------------------------

// [[French]] → French styling; {{x}} → gold highlight (endings, key letters).
function vpRich(s) {
  return escapeHtml(s || '')
    .replace(/\[\[(.+?)\]\]/g, '<span class="vp-french">$1</span>')
    .replace(/\{\{(.+?)\}\}/g, '<span class="vp-hl">$1</span>');
}

// Split narration into voice segments: [{ lang: 'en'|'fr', text }]
function vpSegments(say) {
  const out = [];
  String(say || '').split(/\[\[(.+?)\]\]/).forEach((chunk, i) => {
    const text = chunk.replace(/\{\{|\}\}/g, '').trim();
    if (/[\p{L}\p{N}]/u.test(text)) out.push({ lang: i % 2 ? 'fr' : 'en', text });
  });
  return out;
}

const VP_RATE = { en: 1.0, fr: 0.9 };
const VP_WPS = { en: 2.7, fr: 2.3 };   // words per second at rate 1
const VP_GAP = 0.45;                   // pause between beats, seconds

function vpSegSeconds(seg) {
  return seg.text.split(/\s+/).length / VP_WPS[seg.lang] + 0.25;
}

function vpFmt(sec) {
  sec = Math.max(0, Math.round(sec));
  return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
}

const VP_ICONS = {
  play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>',
  prev: '<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zM9.5 12 18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  replay: '<svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z"/></svg>',
  full: '<svg viewBox="0 0 24 24"><path d="M5 5h5v2H7v3H5zm9 0h5v5h-2V7h-3zM5 14h2v3h3v2H5zm12 0h2v5h-5v-2h3z"/></svg>',
  voice: '<svg viewBox="0 0 24 24"><path d="M12 15a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v7a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-2.1a7 7 0 0 0 6-6.9z"/></svg>'
};

// ------------------------------------------------------------
// BOARD ELEMENTS
// ------------------------------------------------------------

function vpRenderEl(el) {
  const d = document.createElement('div');
  d.className = 'vp-el vp-' + el.t;
  if (el.id) d.dataset.vid = el.id;
  const part = (html, i, cls = '') => `<div class="vp-part ${cls}" data-part="${i}" style="--i:${i}">${html}</div>`;

  switch (el.t) {
    case 'h':
    case 'sub':
    case 'h2':
    case 'p':
    case 'li':
      d.innerHTML = vpRich(el.text);
      break;

    case 'fr':
      if (el.big) d.classList.add('vp-big');
      d.innerHTML = `<div class="vp-fr-line">${vpRich(el.fr)}</div>` +
        (el.en ? `<div class="vp-en-line">${vpRich(el.en)}</div>` : '');
      break;

    case 'rule':
      d.innerHTML = vpRich(el.text);
      break;

    case 'formula':
      d.innerHTML = el.parts.map((p, i) => {
        if (p === '+' || p === '=' || p === '→') return part(p, i, 'vp-op');
        const o = typeof p === 'string' ? { text: p } : p;
        return part(`<span class="vp-box-main">${vpRich(o.text)}</span>` +
          (o.sub ? `<span class="vp-box-sub">${vpRich(o.sub)}</span>` : ''), i, 'vp-box');
      }).join('');
      break;

    case 'table':
      d.innerHTML = el.rows.map((r, i) =>
        part(`<span class="vp-cell-a">${vpRich(r[0])}</span><span class="vp-cell-b">${vpRich(r[1])}</span>` +
          (r[2] ? `<span class="vp-cell-c">${vpRich(r[2])}</span>` : ''), i, 'vp-row')
      ).join('');
      break;

    case 'arrow':
      d.innerHTML =
        (el.label ? `<span class="vp-arrow-label">${vpRich(el.label)}</span>` : '') +
        `<span class="vp-arrow-from">${vpRich(el.from)}</span><span class="vp-arrow-sym">→</span>` +
        `<span class="vp-arrow-to">${vpRich(el.to)}</span>`;
      break;

    case 'group':
      d.innerHTML = `<div class="vp-group-label">${vpRich(el.label)}</div>` +
        `<div class="vp-group-items">${el.items.map((it, i) => part(vpRich(it), i, 'vp-chip')).join('')}</div>`;
      break;

    case 'pair':
      d.innerHTML = el.items.map((it, i) =>
        part(`<span class="vp-pair-fr">${vpRich(it.fr)}</span><span class="vp-pair-note">${vpRich(it.note)}</span>`, i, 'vp-pair-item')
      ).join('');
      break;

    case 'contrast':
      d.innerHTML =
        `<div class="vp-wrong"><span class="vp-mark">✗</span><span>${vpRich(el.wrong)}</span></div>` +
        `<div class="vp-right"><span class="vp-mark">✓</span><span>${vpRich(el.right)}</span></div>` +
        (el.note ? `<div class="vp-contrast-note">${vpRich(el.note)}</div>` : '');
      break;

    case 'quiz':
      d.innerHTML =
        `<div class="vp-quiz-q"><span class="vp-quiz-n">${escapeHtml(el.n || '?')}</span>${vpRich(el.q)}</div>` +
        `<div class="vp-quiz-a">${vpRich(el.a)}</div>` +
        `<div class="vp-quiz-timer"><span></span></div>`;
      break;

    default:
      d.textContent = el.text || '';
  }
  return d;
}

// ------------------------------------------------------------
// PLAYER
// ------------------------------------------------------------

class LessonVideo {
  constructor(mount, script, opts = {}) {
    this.mount = mount;
    this.script = script;
    this.opts = opts;
    this.rate = 1;
    this.captions = true;
    this.playing = false;
    this.started = false;
    this.idx = 0;               // current beat in the flat timeline
    this.token = 0;             // bumps on every play/seek to cancel stale callbacks
    this.boardScene = -1;
    this.boardBeat = -1;
    this.timers = [];
    this.beatStartedAt = 0;
    this.raf = null;

    this.buildTimeline();
    this.buildDom();
    this.updateUi();
  }

  // ----- timeline -----

  buildTimeline() {
    this.timeline = [];
    this.sceneStarts = [];
    let t = 0;
    this.script.scenes.forEach((scene, si) => {
      this.sceneStarts.push(this.timeline.length);
      scene.beats.forEach((beat, bi) => {
        const dur = this.beatSeconds(beat);
        this.timeline.push({ si, bi, beat, start: t, dur });
        t += dur;
      });
    });
    this.total = t;
  }

  beatSeconds(beat) {
    const speech = vpSegments(beat.say).reduce((s, seg) => s + vpSegSeconds(seg) / VP_RATE[seg.lang], 0);
    return Math.max(speech / this.rate + (beat.think || 0) + VP_GAP, 1.2);
  }

  currentTime() {
    const b = this.timeline[this.idx];
    if (!b) return this.total;
    if (!this.playing) return b.start;
    const elapsed = (performance.now() - this.beatStartedAt) / 1000;
    return b.start + Math.min(elapsed, b.dur * 0.97);
  }

  // ----- DOM -----

  buildDom() {
    const s = this.script;
    const root = document.createElement('div');
    root.className = 'vp';
    root.tabIndex = 0;
    root.setAttribute('aria-label', 'Lesson video: ' + s.title);

    const chapters = s.scenes.map((sc, i) => `
      <button class="vp-chapter" data-scene="${i}">
        <span class="vp-chapter-time">${vpFmt(this.timeline[this.sceneStarts[i]].start)}</span>
        <span class="vp-chapter-name">${escapeHtml(sc.chapter)}</span>
      </button>`).join('');

    const ticks = this.sceneStarts.slice(1).map(i =>
      `<span class="vp-tick" style="left:${(this.timeline[i].start / this.total) * 100}%"></span>`).join('');

    root.innerHTML = `
      <div class="vp-stage">
        <div class="vp-board">
          <div class="vp-board-head">
            <span class="vp-kicker">${escapeHtml(s.kicker || '')}</span>
            <span class="vp-speaking" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
            <span class="vp-scene-name"></span>
          </div>
          <div class="vp-board-body"></div>
        </div>
        <div class="vp-caption" aria-live="polite" hidden><span class="vp-caption-text"></span></div>
        <div class="vp-overlay vp-overlay-start">
          <div class="vp-overlay-kicker">${escapeHtml(s.kicker || '')}</div>
          <div class="vp-overlay-title">${vpRich(s.title)}</div>
          <button class="vp-big-play" aria-label="Play">${VP_ICONS.play}</button>
          <div class="vp-overlay-meta">${vpFmt(this.total)} · ${s.scenes.length} chapters</div>
          <div class="vp-overlay-warn" hidden></div>
        </div>
        <div class="vp-overlay vp-overlay-end" hidden>
          <div class="vp-overlay-title">Fin de la vidéo</div>
          <div class="vp-end-actions">
            <button class="vp-pill" data-act="restart">${VP_ICONS.replay} Watch again</button>
            ${this.opts.onComplete ? `<button class="vp-pill vp-pill-gold" data-act="done">Continue to theory →</button>` : ''}
          </div>
        </div>
      </div>

      <div class="vp-bar">
        <div class="vp-progress" role="slider" aria-label="Seek" tabindex="-1">
          <div class="vp-progress-fill"></div>
          ${ticks}
        </div>
        <div class="vp-controls">
          <button class="vp-btn" data-act="prev" aria-label="Previous chapter">${VP_ICONS.prev}</button>
          <button class="vp-btn vp-btn-play" data-act="toggle" aria-label="Play">${VP_ICONS.play}</button>
          <button class="vp-btn" data-act="next" aria-label="Next chapter">${VP_ICONS.next}</button>
          <span class="vp-time"><span class="vp-time-now">0:00</span> / ${vpFmt(this.total)}</span>
          <span class="vp-spacer"></span>
          <button class="vp-btn vp-btn-text" data-act="speed" aria-label="Playback speed">1×</button>
          <button class="vp-btn vp-btn-text vp-on" data-act="cc" aria-label="Captions">CC</button>
          <button class="vp-btn" data-act="voices" aria-label="Voice settings">${VP_ICONS.voice}</button>
          <button class="vp-btn" data-act="full" aria-label="Fullscreen">${VP_ICONS.full}</button>
        </div>
        <div class="vp-voice-panel" hidden>
          <label>French voice <select data-lang="fr"></select></label>
          <label>English voice <select data-lang="en"></select></label>
          <p>Most natural on Microsoft Edge (voices marked “Natural”) or Chrome (Google voices).</p>
        </div>
      </div>

      <div class="vp-chapters">${chapters}</div>
    `;

    this.root = root;
    this.$ = sel => root.querySelector(sel);
    this.body = this.$('.vp-board-body');
    this.mount.innerHTML = '';
    this.mount.appendChild(root);

    root.addEventListener('click', e => this.onClick(e));
    root.addEventListener('keydown', e => this.onKey(e));
    this.$('.vp-progress').addEventListener('click', e => {
      const r = e.currentTarget.getBoundingClientRect();
      this.seekTime(((e.clientX - r.left) / r.width) * this.total);
    });
    this.root.querySelectorAll('.vp-voice-panel select').forEach(sel => {
      sel.addEventListener('change', () => Voices.setPref(sel.dataset.lang, sel.value));
    });
    this.onFsChange = () => this.root.classList.toggle('vp-is-full', document.fullscreenElement === this.root);
    document.addEventListener('fullscreenchange', this.onFsChange);

    this.checkVoices();
  }

  checkVoices() {
    const warn = this.$('.vp-overlay-warn');
    if (!window.speechSynthesis) {
      warn.textContent = 'This browser cannot speak — the video will play with captions only.';
      warn.hidden = false;
      return;
    }
    // Voices load asynchronously; re-check once they arrive.
    const check = () => {
      if (!Voices.list.length) return;
      if (!Voices.candidates('fr').length) {
        warn.textContent = 'No French voice is installed on this device. Add one in Windows Settings → Time & language → Speech, or use Edge/Chrome.';
        warn.hidden = false;
      } else {
        warn.hidden = true;
      }
    };
    check();
    window.speechSynthesis.addEventListener('voiceschanged', check, { once: true });
  }

  fillVoicePanel() {
    ['fr', 'en'].forEach(lang => {
      const sel = this.$(`.vp-voice-panel select[data-lang="${lang}"]`);
      const current = Voices.pick(lang);
      sel.innerHTML = Voices.candidates(lang)
        .sort((a, b) => Voices.score(b) - Voices.score(a))
        .map(v => `<option value="${escapeAttr(v.name)}" ${current && v.name === current.name ? 'selected' : ''}>${escapeHtml(v.name)} (${escapeHtml(v.lang)})</option>`)
        .join('') || '<option>No voices found</option>';
    });
  }

  // ----- board -----

  // Make the board show scene `si` with beats 0..bi applied. Only the
  // last beat animates (when `animate`); earlier ones appear instantly.
  showBoard(i, animate) {
    const { si, bi } = this.timeline[i];
    if (this.boardScene !== si || this.boardBeat > bi) {
      const scene = this.script.scenes[si];
      this.body.innerHTML = '';
      this.body.className = 'vp-board-body' + (scene.layout === 'split' ? ' vp-split' : '');
      if (animate) {
        void this.body.offsetWidth; // restart the fade-in even if the class was already there
        this.body.classList.add('vp-fresh');
      }
      this.$('.vp-scene-name').textContent = scene.chapter;
      this.boardScene = si;
      this.boardBeat = -1;
    }
    while (this.boardBeat < bi) {
      this.boardBeat++;
      this.applyBeat(this.script.scenes[si].beats[this.boardBeat], animate && this.boardBeat === bi);
    }
    this.root.querySelectorAll('.vp-chapter').forEach((c, ci) => c.classList.toggle('active', ci === si));
  }

  applyBeat(beat, animate) {
    if (beat.write || beat.mark) {
      this.body.querySelectorAll('.vp-marked').forEach(m => m.classList.remove('vp-marked'));
    }
    const writes = beat.write ? [].concat(beat.write) : [];
    writes.forEach(el => {
      const node = vpRenderEl(el);
      if (animate) node.classList.add('vp-write');
      const target = el.col === 2 ? this.col(2) : el.col === 1 ? this.col(1) : this.body;
      target.appendChild(node);
    });
    if (beat.mark) {
      const [id, part] = beat.mark.split(':');
      let node = this.body.querySelector(`[data-vid="${id}"]`);
      if (node && part !== undefined) node = node.querySelector(`[data-part="${part}"]`);
      if (node) node.classList.add('vp-marked');
    }
    if (beat.reveal) {
      const node = this.body.querySelector(`[data-vid="${beat.reveal}"]`);
      if (node) node.classList.add('vp-revealed');
    }
  }

  col(n) {
    let c = this.body.querySelector(`.vp-col-${n}`);
    if (!c) {
      c = document.createElement('div');
      c.className = `vp-col vp-col-${n}`;
      this.body.appendChild(c);
    }
    return c;
  }

  setCaption(beat) {
    const text = beat && beat.say ? vpRich(beat.say) : '';
    this.$('.vp-caption-text').innerHTML = text;
    this.$('.vp-caption').hidden = !text;
  }

  // ----- playback -----

  play() {
    if (this.idx >= this.timeline.length) this.idx = 0;
    this.started = true;
    this.playing = true;
    this.$('.vp-overlay-start').hidden = true;
    this.$('.vp-overlay-end').hidden = true;
    // Replay the current beat's narration; the board is already in place.
    this.playBeat(this.idx, this.boardBeat < this.timeline[this.idx].bi || this.boardScene !== this.timeline[this.idx].si);
    this.tick();
  }

  pause() {
    this.playing = false;
    this.cancel();
    this.updateUi();
  }

  toggle() {
    this.playing ? this.pause() : this.play();
  }

  cancel() {
    this.token++;
    this.timers.forEach(clearTimeout);
    this.timers = [];
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    this.root.classList.remove('vp-talking');
    this.body.querySelectorAll('.vp-thinking').forEach(n => n.classList.remove('vp-thinking'));
  }

  later(fn, ms) {
    this.timers.push(setTimeout(fn, ms));
  }

  playBeat(i, animate) {
    this.cancel();
    const token = this.token;
    this.idx = i;
    const b = this.timeline[i];
    this.showBoard(i, animate);
    this.setCaption(b.beat);
    this.beatStartedAt = performance.now();
    this.updateUi();

    this.speak(vpSegments(b.beat.say), token, () => {
      if (token !== this.token) return;
      const think = (b.beat.think || 0) * 1000;
      if (think) {
        const quizzes = this.body.querySelectorAll('.vp-quiz');
        const q = quizzes[quizzes.length - 1];
        if (q) {
          q.style.setProperty('--think', think + 'ms');
          q.classList.add('vp-thinking');
        }
      }
      this.later(() => {
        if (token !== this.token) return;
        if (i + 1 < this.timeline.length) this.playBeat(i + 1, true);
        else this.finish();
      }, think + VP_GAP * 1000);
    });
  }

  speak(segs, token, done) {
    const synth = window.speechSynthesis;
    if (!synth) {
      // Captions-only mode: hold each beat for its estimated length.
      const secs = segs.reduce((s, seg) => s + vpSegSeconds(seg) / VP_RATE[seg.lang], 0) / this.rate;
      this.later(done, secs * 1000);
      return;
    }
    let k = 0;
    const next = () => {
      if (token !== this.token) return;
      if (k >= segs.length) {
        this.root.classList.remove('vp-talking');
        return done();
      }
      const seg = segs[k++];
      const u = new SpeechSynthesisUtterance(seg.text);
      const v = Voices.pick(seg.lang);
      u.lang = v ? v.lang : (seg.lang === 'fr' ? 'fr-FR' : 'en-US');
      if (v) u.voice = v;
      u.rate = VP_RATE[seg.lang] * this.rate;
      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        next();
      };
      u.onend = finish;
      u.onerror = finish;
      // Chrome occasionally never fires onend; don't let the lesson stall.
      this.later(finish, (vpSegSeconds(seg) / (u.rate || 1)) * 2500 + 4000);
      this.utterance = u; // hold a reference — Chrome can GC it mid-speech and drop onend
      this.root.classList.add('vp-talking');
      synth.speak(u);
    };
    synth.cancel();
    if (synth.paused) synth.resume();
    // Chrome silently drops a speak() issued in the same tick as cancel().
    this.later(next, 60);
  }

  finish() {
    this.playing = false;
    this.idx = this.timeline.length;
    this.cancel();
    this.setCaption(null);
    this.$('.vp-overlay-end').hidden = false;
    this.updateUi();
  }

  goTo(i) {
    i = Math.max(0, Math.min(i, this.timeline.length - 1));
    this.started = true;
    this.$('.vp-overlay-start').hidden = true;
    this.$('.vp-overlay-end').hidden = true;
    if (this.playing) {
      this.playBeat(i, true);
    } else {
      this.cancel();
      this.idx = i;
      this.showBoard(i, false);
      this.setCaption(this.timeline[i].beat);
      this.updateUi();
    }
  }

  seekTime(t) {
    const i = this.timeline.findIndex(b => t < b.start + b.dur);
    this.goTo(i === -1 ? this.timeline.length - 1 : i);
  }

  chapter(delta) {
    const cur = Math.min(this.idx, this.timeline.length - 1);
    const si = this.timeline[cur].si;
    let target = si + delta;
    // "Previous" restarts the current chapter unless we're already at its start.
    if (delta < 0 && cur - this.sceneStarts[si] > 1) target = si;
    if (target < 0) target = 0;
    if (target >= this.sceneStarts.length) return this.finish();
    this.goTo(this.sceneStarts[target]);
  }

  setRate(r) {
    this.rate = r;
    this.buildTimeline();
    this.$('[data-act="speed"]').textContent = r + '×';
    if (this.playing) this.playBeat(this.idx, false);
    this.updateUi();
  }

  tick() {
    cancelAnimationFrame(this.raf);
    const loop = () => {
      this.updateProgress();
      if (this.playing) this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }

  updateProgress() {
    const t = this.currentTime();
    this.$('.vp-progress-fill').style.width = (t / this.total) * 100 + '%';
    this.$('.vp-time-now').textContent = vpFmt(t);
  }

  updateUi() {
    const btn = this.$('[data-act="toggle"]');
    btn.innerHTML = this.playing ? VP_ICONS.pause : VP_ICONS.play;
    btn.setAttribute('aria-label', this.playing ? 'Pause' : 'Play');
    this.root.classList.toggle('vp-playing', this.playing);
    this.root.classList.toggle('vp-no-cc', !this.captions);
    this.updateProgress();
  }

  // ----- input -----

  onClick(e) {
    const chapterBtn = e.target.closest('.vp-chapter');
    if (chapterBtn) return this.goTo(this.sceneStarts[+chapterBtn.dataset.scene]);
    if (e.target.closest('.vp-big-play')) return this.play();

    const act = e.target.closest('[data-act]');
    if (!act) {
      // Clicking the board itself toggles playback, like a video.
      if (e.target.closest('.vp-board') && this.started) this.toggle();
      return;
    }
    switch (act.dataset.act) {
      case 'toggle': return this.toggle();
      case 'prev': return this.chapter(-1);
      case 'next': return this.chapter(1);
      case 'restart': this.idx = 0; this.boardScene = -1; return this.play();
      case 'done': this.pause(); return this.opts.onComplete && this.opts.onComplete();
      case 'speed': {
        const speeds = [0.75, 1, 1.25];
        return this.setRate(speeds[(speeds.indexOf(this.rate) + 1) % speeds.length]);
      }
      case 'cc':
        this.captions = !this.captions;
        act.classList.toggle('vp-on', this.captions);
        return this.updateUi();
      case 'voices': {
        const panel = this.$('.vp-voice-panel');
        panel.hidden = !panel.hidden;
        if (!panel.hidden) this.fillVoicePanel();
        return;
      }
      case 'full':
        if (document.fullscreenElement) document.exitFullscreen();
        else if (this.root.requestFullscreen) this.root.requestFullscreen();
        return;
    }
  }

  onKey(e) {
    const k = e.key;
    if (e.target.tagName === 'SELECT') return;
    if (e.target.tagName === 'BUTTON' && (k === ' ' || k === 'Enter')) return; // let the button act
    if (k === ' ' || k === 'k') { e.preventDefault(); this.started ? this.toggle() : this.play(); }
    else if (k === 'ArrowRight') { e.preventDefault(); this.goTo(this.idx + 1); }
    else if (k === 'ArrowLeft') { e.preventDefault(); this.goTo(this.idx - 1); }
    else if (k === 'f') this.$('[data-act="full"]').click();
    else if (k === 'c') this.$('[data-act="cc"]').click();
  }

  destroy() {
    this.playing = false;
    this.cancel();
    cancelAnimationFrame(this.raf);
    document.removeEventListener('fullscreenchange', this.onFsChange);
    if (document.fullscreenElement === this.root) document.exitFullscreen();
    this.root.remove();
  }
}
