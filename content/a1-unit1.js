// ============================================================
// A1 · UNIT 1 · PREMIERS PAS (First steps)
// ============================================================
//
// Lesson shape (see course.js for ids and order):
//   title, subtitle, goal
//   video      board-lecture script (format documented in videos.js)
//   notes      study notes, HTML — the written version of the video
//   vocab      [{ fr, en, g: 'm' | 'f', note }]
//   dialogue   { title, setting, cast: { name: voiceIndex }, lines: [{ who, fr, en, say? }] }
//   exercises  choice | listen | type | order (see renderExercises in app.js)
//   tutor      things to practise in a live tutoring session
//
// ============================================================

(() => {
  // A French phrase with a play button. `audio` overrides what is spoken.
  const fr = (text, audio) =>
    `<span class="fr">${text}</span> <button class="play-btn" data-text="${(audio || text.replace(/<[^>]+>/g, '')).replace(/"/g, '&quot;')}">▶</button>`;
  const silent = s => `<span class="silent">${s}</span>`;
  const table = (head, rows) =>
    '<table class="notes-table">' +
    (head ? `<thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead>` : '') +
    `<tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;

  // Dialogue grid on the video board: speaker | line.
  const scene = rows => ({ t: 'grid', fr: [1], widths: 'minmax(0, 0.28fr) minmax(0, 1fr)', rows });

  const lessons = [

    // ----------------------------------------------------------
    // LESSON 1 — BONJOUR !
    // ----------------------------------------------------------
    {
      id: 'a1-u1-l1',
      title: 'Bonjour !',
      subtitle: 'Greetings, goodbyes, and when to say tu or vous.',
      goal: 'Greet anyone politely, ask how they are, and say goodbye.',

      video: {
        title: 'Bonjour !',
        kicker: 'A1 · Unit 1 · Lesson 1',
        scenes: [
          {
            chapter: 'Bienvenue',
            beats: [
              { say: '[[Bonjour !]] Welcome to your very first French lesson.',
                write: { t: 'h', text: 'Bonjour !' } },
              { say: "Today you'll learn to greet people, ask how they are, and say goodbye — politely, in any situation.",
                write: { t: 'sub', text: 'Greetings, goodbyes, and [[tu]] or [[vous]]' } },
              { say: "Let's start by listening. Léa arrives at work and meets her boss, Monsieur Martin.",
                write: scene([
                  ['Léa', 'Bonjour, monsieur Martin.'],
                  ['M. Martin', 'Bonjour, Léa. Comment allez-vous ?'],
                  ['Léa', 'Très bien, merci. Et vous ?'],
                  ['M. Martin', 'Bien, merci.']
                ]) },
              { say: '[[Bonjour, monsieur Martin.]] [[2:Bonjour, Léa. Comment allez-vous ?]] [[Très bien, merci. Et vous ?]] [[2:Bien, merci.]]' },
              { say: "By the end of this video, you'll understand every word of that. Let's break it down." }
            ]
          },
          {
            chapter: 'Saying hello',
            beats: [
              { say: "There are three ways to say hello. The choice depends on the time of day, and on who you're talking to.",
                write: { t: 'h2', text: 'Dire bonjour' } },
              { say: '[[Bonjour]] is the all-purpose greeting. It means hello, or good morning, and you can use it all day, with anyone.',
                write: { t: 'grid', id: 'g', fr: [0], rows: [
                  ['bonjour', 'hello · good morning', 'all day, with anyone'],
                  ['bonsoir', 'good evening', 'from about 6 p.m.'],
                  ['salut', 'hi', 'friends and family']
                ] },
                mark: 'g:0' },
              { say: 'In the evening, from about six o’clock, switch to [[bonsoir]]: good evening.',
                mark: 'g:1' },
              { say: "And [[salut]] means hi. It's casual, so keep it for friends, family, and people your own age.",
                mark: 'g:2' },
              { say: "Now, an important culture tip. In France, you say [[bonjour]] every time you walk into a shop, a café, or a waiting room. Skipping it is considered rude. Add [[madame]] or [[monsieur]] to be extra polite. [[Bonjour, madame.]] [[Bonjour, monsieur.]]",
                write: { t: 'rule', text: 'Entering a shop or café? Always: [[Bonjour, madame]] / [[Bonjour, monsieur]].' } }
            ]
          },
          {
            chapter: 'Tu or vous?',
            beats: [
              { say: 'Next, something that makes French different from English. English has one word for you. French has two: [[tu]] and [[vous]].',
                write: { t: 'h2', text: '[[Tu]] ou [[vous]] ?' } },
              { say: '[[Tu]] is informal. You use it with friends, family, children, and people your own age in relaxed settings.',
                write: { t: 'pair', id: 'tv', items: [
                  { fr: 'tu', note: 'friends · family · children · people your age' },
                  { fr: 'vous', note: 'strangers · older people · work · shops — and any group' }
                ] },
                mark: 'tv:0' },
              { say: "[[Vous]] is formal. It's for strangers, older people, your boss, and anyone serving you in a shop or a restaurant. [[Vous]] is also the plural: you use it for any group of people, even friends.",
                mark: 'tv:1' },
              { say: "The golden rule: when in doubt, use [[vous]]. It's never rude to be too polite. If someone wants to be informal, they'll switch to [[tu]], or they'll ask you: [[On peut se tutoyer ?]] Can we say tu to each other?",
                write: { t: 'rule', text: 'When in doubt, say [[vous]]. Switch to [[tu]] when the other person does.' } }
            ]
          },
          {
            chapter: 'How are you?',
            beats: [
              { say: "Now, asking how someone is. Again, there's a formal way and an informal way.",
                write: { t: 'h2', text: 'Ça va ?' } },
              { say: "Formally, you say [[Comment allez-vous ?]] That's what Monsieur Martin said to Léa.",
                write: { t: 'grid', id: 'q', fr: [0], widths: 'minmax(0, 1.2fr) minmax(0, 1fr)', rows: [
                  ['Comment allez-vous ?', 'How are you? · formal'],
                  ['Ça va ?', "How's it going? · informal"]
                ] },
                mark: 'q:0' },
              { say: "With friends, just say [[Ça va ?]] It literally means, it goes? And the answer can be the very same words, without the question: [[Ça va.]]",
                mark: 'q:1' },
              { say: 'Here are three answers, from best to good enough. [[Très bien, merci.]] [[Ça va bien.]] [[Pas mal.]]',
                write: { t: 'grid', fr: [0], widths: 'minmax(0, 1.2fr) minmax(0, 1fr)', rows: [
                  ['Très bien, merci.', 'Very well, thanks.'],
                  ['Ça va bien.', "I'm good."],
                  ['Pas mal.', 'Not bad.']
                ] } },
              { say: "Then, politely, return the question. [[Et vous ?]] And you? Or, informally, [[Et toi ?]] Notice it's [[toi]], not [[tu]], after [[et]]. Learn [[et toi]] as one block for now.",
                write: { t: 'p', text: 'Then return the question: [[Et vous ?]] · [[Et toi ?]]' } }
            ]
          },
          {
            chapter: 'Saying goodbye',
            beats: [
              { say: 'Finally, saying goodbye.',
                write: { t: 'h2', text: 'Dire au revoir' } },
              { say: '[[Au revoir]] works with everyone. With friends, [[salut]] means bye, as well as hi.',
                write: { t: 'grid', id: 'b', fr: [0], widths: 'minmax(0, 1fr) minmax(0, 1fr)', rows: [
                  ['Au revoir.', 'Goodbye.'],
                  ['Salut !', 'Bye! · friends'],
                  ['À bientôt !', 'See you soon!'],
                  ['À demain !', 'See you tomorrow!'],
                  ['Bonne journée !', 'Have a good day!'],
                  ['Bonne soirée !', 'Have a good evening!']
                ] },
                mark: 'b:0' },
              { say: "If you'll see the person again, use [[à]]: [[À bientôt !]] See you soon. [[À demain !]] See you tomorrow.",
                mark: 'b:2' },
              { say: "And as you leave a shop, it's very common to wish someone a good day, or a good evening. [[Bonne journée !]] [[Bonne soirée !]] Careful: [[bonsoir]] is hello in the evening. [[Bonne soirée]] is goodbye.",
                mark: 'b:4' }
            ]
          },
          {
            chapter: 'Le son du jour',
            beats: [
              { say: 'Now, your sound of the day. In French, most letters at the end of a word are silent.',
                write: { t: 'h2', text: 'Le son du jour · silent final letters' } },
              { say: 'Listen. [[salut.]] No T. [[vous.]] No S. [[comment.]] No T. [[très.]] No S. [[Paris.]] No S.',
                write: { t: 'group', label: 'silent', items: ['salu((t))', 'vou((s))', 'commen((t))', 'trè((s))', 'Pari((s))'] } },
              { say: "But four consonants are often pronounced at the end: C, R, F, and L. To remember them, think of the English word, careful. [[avec.]] [[bonjour.]] [[neuf.]] [[il.]]",
                write: { t: 'group', label: 'often pronounced · c r f l — “careful”', items: ['ave{{c}}', 'bonjou{{r}}', 'neu{{f}}', 'i{{l}}'] } },
              { say: "One famous exception: [[monsieur]]. Despite the R at the end, you don't pronounce it. [[monsieur.]]",
                write: { t: 'rule', text: 'Exception: [[monsieu((r))]] — the r is silent.' } }
            ]
          },
          {
            chapter: 'À vous !',
            beats: [
              { say: "Your turn. I'll describe a situation. Say the French out loud before the answer appears.",
                write: { t: 'h2', text: 'À vous !' } },
              { say: "It's nine in the morning, and you walk into a bakery.", think: 5,
                write: { t: 'quiz', id: 'q1', n: '1', q: '9 a.m., entering a bakery', a: 'Bonjour, madame !' } },
              { say: '[[Bonjour, madame !]] Never forget the [[bonjour]].', reveal: 'q1' },
              { say: 'Ask a stranger how they are.', think: 5,
                write: { t: 'quiz', id: 'q2', n: '2', q: 'Ask a stranger how they are', a: 'Comment allez-vous ?' } },
              { say: '[[Comment allez-vous ?]] A stranger, so [[vous]].', reveal: 'q2' },
              { say: 'Your friend says: [[Salut, ça va ?]] Answer, and return the question.', think: 5,
                write: { t: 'quiz', id: 'q3', n: '3', q: 'A friend: « Salut, ça va ? »', a: 'Ça va bien, et toi ?' } },
              { say: '[[Ça va bien, et toi ?]] A friend, so [[toi]].', reveal: 'q3' },
              { say: "You're leaving a café at eight in the evening.", think: 5,
                write: { t: 'quiz', id: 'q4', n: '4', q: 'Leaving a café at 8 p.m.', a: 'Au revoir, bonne soirée !' } },
              { say: '[[Au revoir, bonne soirée !]]', reveal: 'q4' }
            ]
          },
          {
            chapter: 'En résumé',
            beats: [
              { say: "Let's sum up.",
                write: { t: 'h2', text: 'En résumé' } },
              { say: 'One. [[Bonjour]] all day. [[Bonsoir]] in the evening. [[Salut]] with friends.',
                write: { t: 'li', text: '[[bonjour]] all day · [[bonsoir]] in the evening · [[salut]] with friends' } },
              { say: 'Two. [[Vous]] for strangers and groups, [[tu]] for friends. When in doubt, [[vous]].',
                write: { t: 'li', text: '[[vous]] for strangers and groups · [[tu]] for friends' } },
              { say: 'Three. [[Comment allez-vous ?]] or [[Ça va ?]] And always return the question.',
                write: { t: 'li', text: '[[Comment allez-vous ?]] · [[Ça va ?]] → [[Et vous ?]] · [[Et toi ?]]' } },
              { say: 'Four. Most final letters are silent, except often C, R, F, and L.',
                write: { t: 'li', text: 'Most final letters are silent — except often c, r, f, l' } },
              { say: "Next, read the notes, learn the words, and listen to the full dialogue. Then practise. [[À bientôt !]]" }
            ]
          }
        ]
      },

      notes: `
        <h3>Saying hello</h3>
        ${table(['French', 'Meaning', 'When'], [
          [fr('bonjour'), 'hello, good morning', 'all day, with anyone'],
          [fr('bonsoir'), 'good evening', 'from about 6 p.m.'],
          [fr('salut'), 'hi — and bye', 'friends, family, people your age']
        ])}
        <div class="rule-box"><strong>Culture:</strong> say ${fr('Bonjour, madame.')} or ${fr('Bonjour, monsieur.')} every time you walk into a shop, café, office, or waiting room. Not greeting people is seen as rude — in France it matters more than any grammar mistake.</div>

        <h3>Tu or vous?</h3>
        <p>French has two words for <em>you</em>.</p>
        ${table(null, [
          [fr('tu'), '<strong>Informal.</strong> Friends, family, children, people your age in relaxed settings.'],
          [fr('vous'), '<strong>Formal.</strong> Strangers, older people, your boss, shop and restaurant staff. <strong>Also the plural:</strong> any group, even of friends.']
        ])}
        <div class="rule-box"><strong>When in doubt, use vous.</strong> Let the other person switch to tu first — or ask ${fr('On peut se tutoyer ?')} (“Can we say tu to each other?”).</div>

        <h3>How are you?</h3>
        ${table(['Ask', 'Meaning', ''], [
          [fr('Comment allez-vous ?'), 'How are you?', 'formal'],
          [fr('Ça va ?'), 'How’s it going?', 'informal']
        ])}
        ${table(['Answer', 'Meaning'], [
          [fr('Très bien, merci.'), 'Very well, thanks.'],
          [fr('Ça va bien.'), 'I’m good.'],
          [fr('Pas mal.'), 'Not bad.'],
          [fr('Comme ci, comme ça.'), 'So-so.']
        ])}
        <p>Then return the question: ${fr('Et vous ?')} (formal) or ${fr('Et toi ?')} (informal). After <em>et</em> it is <span class="fr">toi</span>, not <span class="fr">tu</span> — learn <span class="fr">et toi</span> as one block for now.</p>

        <h3>Saying goodbye</h3>
        ${table(['French', 'Meaning'], [
          [fr('Au revoir.'), 'Goodbye. (anyone)'],
          [fr('Salut !'), 'Bye! (friends)'],
          [fr('À bientôt !'), 'See you soon!'],
          [fr('À demain !'), 'See you tomorrow!'],
          [fr('À ce soir !'), 'See you tonight!'],
          [fr('Bonne journée !'), 'Have a good day!'],
          [fr('Bonne soirée !'), 'Have a good evening!']
        ])}
        <div class="rule-box"><strong>Don't mix these up:</strong> ${fr('bonsoir')} is <em>hello</em> in the evening. ${fr('Bonne soirée !')} is <em>goodbye</em> — “have a good evening”.</div>

        <h3>Sound of the lesson: silent final letters</h3>
        <p>Most consonants at the end of a French word are silent: ${fr('salu' + silent('t'), 'salut')}, ${fr('vou' + silent('s'), 'vous')}, ${fr('commen' + silent('t'), 'comment')}, ${fr('trè' + silent('s'), 'très')}, ${fr('Pari' + silent('s'), 'Paris')}.</p>
        <p>Four consonants are often pronounced at the end: <strong>c, r, f, l</strong> — the consonants of the English word <em>CaReFuL</em>. ${fr('avec')} ${fr('bonjour')} ${fr('neuf')} ${fr('il')}</p>
        <div class="rule-box"><strong>Exception:</strong> ${fr('monsieu' + silent('r'), 'monsieur')} — the final r is silent: “muh-syuh”.</div>
      `,

      vocab: [
        { fr: 'bonjour', en: 'hello, good morning' },
        { fr: 'bonsoir', en: 'good evening (hello)' },
        { fr: 'salut', en: 'hi / bye (informal)' },
        { fr: 'madame', en: 'madam, Mrs', g: 'f' },
        { fr: 'monsieur', en: 'sir, Mr', g: 'm', note: 'the final r is silent' },
        { fr: 'Comment allez-vous ?', en: 'How are you? (formal)' },
        { fr: 'Ça va ?', en: "How's it going? (informal)" },
        { fr: 'Ça va bien.', en: "I'm good." },
        { fr: 'très bien', en: 'very well' },
        { fr: 'pas mal', en: 'not bad' },
        { fr: 'Et vous ?', en: 'And you? (formal)' },
        { fr: 'Et toi ?', en: 'And you? (informal)' },
        { fr: 'merci', en: 'thank you' },
        { fr: 'merci beaucoup', en: 'thank you very much' },
        { fr: "s'il vous plaît", en: 'please (formal)' },
        { fr: "s'il te plaît", en: 'please (informal)' },
        { fr: 'oui', en: 'yes' },
        { fr: 'non', en: 'no' },
        { fr: 'au revoir', en: 'goodbye' },
        { fr: 'à bientôt', en: 'see you soon' },
        { fr: 'à demain', en: 'see you tomorrow' },
        { fr: 'à ce soir', en: 'see you tonight' },
        { fr: 'bonne journée', en: 'have a good day' },
        { fr: 'bonne soirée', en: 'have a good evening' },
        { fr: 'vous aussi', en: 'you too' }
      ],

      dialogue: {
        title: 'Au bureau',
        setting: 'Monday morning. Léa arrives at the office, greets her boss, then runs into her friend Hugo.',
        cast: { 'Léa': 0, 'M. Martin': 1, 'Hugo': 1 },
        lines: [
          { who: 'Léa', fr: 'Bonjour, monsieur Martin.', en: 'Good morning, Mr Martin.' },
          { who: 'M. Martin', fr: 'Bonjour, Léa. Comment allez-vous ?', en: 'Good morning, Léa. How are you?' },
          { who: 'Léa', fr: 'Très bien, merci. Et vous ?', en: 'Very well, thank you. And you?' },
          { who: 'M. Martin', fr: 'Bien, merci. Bonne journée !', en: 'Fine, thanks. Have a good day!' },
          { who: 'Léa', fr: 'Merci, vous aussi !', en: 'Thanks, you too!' },
          { who: 'Hugo', fr: 'Salut, Léa ! Ça va ?', en: "Hi, Léa! How's it going?" },
          { who: 'Léa', fr: 'Ça va bien, et toi ?', en: "I'm good, and you?" },
          { who: 'Hugo', fr: 'Pas mal. À ce soir ?', en: 'Not bad. See you tonight?' },
          { who: 'Léa', fr: 'Oui, à ce soir ! Salut !', en: 'Yes, see you tonight! Bye!' }
        ]
      },

      exercises: [
        { q: "It's 8 p.m. You walk into a restaurant. What do you say?",
          options: ['Bonsoir, madame.', 'Salut !', 'Bonne soirée !', 'À demain !'], correct: 0,
          explanation: 'From about 6 p.m., the greeting is bonsoir. « Bonne soirée » is what you say when you leave.' },
        { q: 'Which greeting is only for friends and family?',
          options: ['Salut', 'Bonjour', 'Bonsoir', 'Au revoir'], correct: 0,
          explanation: 'Salut is informal. Bonjour, bonsoir and au revoir work with anyone.' },
        { q: 'You meet your new manager. How do you ask how they are?',
          options: ['Comment allez-vous ?', 'Ça va, toi ?', 'Et toi ?', 'Salut, ça va ?'], correct: 0,
          explanation: 'A manager you have just met calls for the formal question: Comment allez-vous ?' },
        { type: 'listen', audio: 'À demain !', q: 'What does it mean?',
          options: ['See you tomorrow!', 'See you soon!', 'Have a good day!', 'Good evening!'], correct: 0,
          explanation: 'À demain — demain means tomorrow.' },
        { type: 'listen', audio: 'Très bien, merci. Et vous ?', q: 'What does it mean?',
          options: ['Very well, thanks. And you?', 'Not bad. And you?', 'Thank you very much.', 'Goodbye, see you soon.'], correct: 0,
          explanation: 'Très bien = very well. Et vous ? = and you? (formal)' },
        { q: 'Your friend asks « Ça va ? ». Which reply fits best?',
          options: ['Ça va bien, et toi ?', 'Très bien, et vous ?', 'Bonsoir, monsieur.', 'Au revoir.'], correct: 0,
          explanation: 'Between friends, return the question with « et toi ? », not « et vous ? ».' },
        { type: 'type', q: 'Write in French: Thank you very much.',
          answers: ['merci beaucoup'],
          explanation: 'Merci beaucoup.' },
        { type: 'type', q: 'Write in French: See you soon!',
          answers: ['à bientôt'],
          explanation: 'À bientôt — with a grave accent on à and a circumflex on ô.' },
        { type: 'order', q: 'Build the sentence: “Hello, how are you?” (formal)',
          words: ['Bonjour', 'comment', 'allez-vous'], answer: 'Bonjour, comment allez-vous ?',
          explanation: 'Bonjour, comment allez-vous ?' },
        { q: 'When should you use « vous »?',
          options: ['With strangers, older people, and any group', 'Only with your family', 'Only in writing', 'Only with children'], correct: 0,
          explanation: 'Vous is formal — and it is also the plural, for any group of people.' },
        { type: 'listen', audio: 'Bonne soirée !', q: 'When would someone say this?',
          options: ['When leaving, in the evening', 'When arriving, in the evening', 'When arriving, in the morning', 'When going to bed'], correct: 0,
          explanation: 'Bonne soirée = have a good evening — a goodbye. To say hello in the evening, use bonsoir.' },
        { q: 'In which word is the final consonant pronounced?',
          options: ['bonjour', 'salut', 'vous', 'comment'], correct: 0,
          explanation: 'R is one of the “careful” letters (c, r, f, l) that are often pronounced at the end of a word.' },
        { q: 'How is « monsieur » pronounced?',
          options: ['The final r is silent: “muh-syuh”', 'The final r is pronounced: “muh-syur”'], correct: 0,
          explanation: 'Monsieur is a famous exception to the “careful” rule: its final r is silent.' }
      ],

      tutor: [
        'Greet your tutor formally: « Bonjour, madame / monsieur. Comment allez-vous ? »',
        'When they ask how you are, answer and return the question.',
        'Ask « On peut se tutoyer ? » and switch to tu.',
        'End the session with two different goodbyes.'
      ]
    },

    // ----------------------------------------------------------
    // LESSON 2 — JE M'APPELLE…
    // ----------------------------------------------------------
    {
      id: 'a1-u1-l2',
      title: "Je m'appelle…",
      subtitle: 'Your name, your nationality, where you live, and the languages you speak.',
      goal: 'Introduce yourself and ask someone about themselves.',

      video: {
        title: "Je m'appelle…",
        kicker: 'A1 · Unit 1 · Lesson 2',
        scenes: [
          {
            chapter: 'Bienvenue',
            beats: [
              { say: "[[Bonjour !]] In this lesson, you'll learn to introduce yourself: your name, your nationality, where you live, and the languages you speak.",
                write: [{ t: 'h', text: "Je m'appelle…" }, { t: 'sub', text: 'Introducing yourself' }] },
              { say: 'Listen first. Camille and Sam meet at a language-exchange evening in Paris.',
                write: scene([
                  ['Camille', "Bonsoir ! Je m'appelle Camille."],
                  ['Sam', "Enchanté. Moi, c'est Sam."],
                  ['Camille', 'Vous êtes anglais ?'],
                  ['Sam', 'Non, je suis américain.']
                ]) },
              { say: "[[Bonsoir ! Je m'appelle Camille.]] [[2:Enchanté. Moi, c'est Sam.]] [[Vous êtes anglais ?]] [[2:Non, je suis américain.]]" }
            ]
          },
          {
            chapter: 'Your name',
            beats: [
              { say: "Let's start with your name. You say [[je m'appelle]], followed by your name.",
                write: { t: 'h2', text: "Je m'appelle…" } },
              { say: "[[Je m'appelle Sam.]] My name is Sam. Literally, it means: I call myself. Don't worry about the grammar for now. Learn [[je m'appelle]] as one block.",
                write: { t: 'fr', fr: "Je m'appelle Sam.", en: 'My name is Sam.' } },
              { say: "To ask a stranger's name, the formal way: [[Comment vous appelez-vous ?]]",
                write: { t: 'grid', id: 'n', fr: [0], widths: 'minmax(0, 1.25fr) minmax(0, 1fr)', rows: [
                  ['Comment vous appelez-vous ?', "What's your name? · formal"],
                  ["Tu t'appelles comment ?", "What's your name? · informal"]
                ] },
                mark: 'n:0' },
              { say: "With friends, or with someone your age: [[Tu t'appelles comment ?]] In casual French, question words like [[comment]] often go at the end.",
                mark: 'n:1' },
              { say: "You'll also hear a relaxed way to give your name: [[Moi, c'est Sam.]] And when you meet someone, say [[enchanté]]: nice to meet you. A woman writes it with an extra E, but it sounds exactly the same: [[enchantée.]]",
                write: { t: 'p', text: "[[Moi, c'est Sam.]] — I'm Sam. · [[Enchanté(e) !]] — Nice to meet you." } }
            ]
          },
          {
            chapter: 'Nationalities',
            layout: 'split',
            beats: [
              { say: 'Next, your nationality. You say [[je suis]], I am, followed by the nationality.',
                write: { t: 'h2', col: 1, text: 'Je suis…' } },
              { say: '[[Je suis américain.]] I am American.',
                write: { t: 'fr', col: 1, fr: 'Je suis américain.', en: 'I am American.' } },
              { say: "Two things are different from English. No capital letter: [[américain]] is written with a small A. And no article: you don't say, I am an American. Just: [[je suis américain.]]",
                write: { t: 'rule', col: 1, text: 'No capital letter, no article.' } },
              { say: 'Nationalities change for a woman. Usually, you add an E. [[anglais. anglaise.]] [[français. française.]] [[américain. américaine.]]',
                write: { t: 'grid', id: 'nat', col: 2, fr: [0, 1], head: ['he', 'she', ''], rows: [
                  ['anglais', 'anglai{{se}}', 'English'],
                  ['français', 'françai{{se}}', 'French'],
                  ['américain', 'américai{{ne}}', 'American'],
                  ['indien', 'indie{{nne}}', 'Indian'],
                  ['canadien', 'canadie{{nne}}', 'Canadian']
                ] } },
              { say: 'Some double the N before the E. [[indien. indienne.]] [[canadien. canadienne.]]',
                mark: 'nat:3' },
              { say: 'Notice what the E does. In [[anglais]], the S is silent. In [[anglaise]], you hear it, as a Z. Adding an E wakes up the consonant before it. You will see this pattern all over French.',
                write: { t: 'p', col: 1, text: 'The -e wakes up the consonant: [[anglai((s))]] → [[anglai{{s}}e]]' } }
            ]
          },
          {
            chapter: 'Where you live',
            beats: [
              { say: "Now, where you live, and where you're from.",
                write: { t: 'h2', text: "J'habite à…" } },
              { say: "[[J'habite à Paris.]] I live in Paris. With a city, in is [[à]].",
                write: { t: 'fr', fr: "J'habite à Paris.", en: 'I live in Paris.' } },
              { say: "Notice that [[je]] shortens to [[j']] in front of a vowel, or a silent H. The H in [[habite]] is silent, so it's [[j'habite]]. Never, je habite.",
                write: { t: 'rule', text: "[[je]] → [[j']] before a vowel or a silent h: [[j'habite]]" } },
              { say: 'To say where you come from: [[Je viens de Chicago.]] I come from Chicago.',
                write: { t: 'fr', fr: 'Je viens de Chicago.', en: 'I come from Chicago.' } },
              { say: "And [[de]] also shortens before a vowel. [[Je viens d'Oxford.]]",
                write: { t: 'p', text: "[[de]] → [[d']] before a vowel: [[Je viens d'Oxford.]]" } }
            ]
          },
          {
            chapter: 'Languages',
            beats: [
              { say: 'Finally, languages. [[Je parle anglais.]] I speak English.',
                write: [{ t: 'h2', text: 'Je parle…' }, { t: 'fr', fr: 'Je parle anglais.', en: 'I speak English.' }] },
              { say: 'And the most useful sentence for you right now: [[Je parle un peu français.]] I speak a little French.',
                write: { t: 'fr', fr: 'Je parle un peu français.', en: 'I speak a little French.' } },
              { say: 'The name of a language is the same as the masculine nationality, again with no capital letter. [[anglais. français. espagnol.]]',
                write: { t: 'rule', text: 'Language = masculine nationality, no capital: [[anglais]] · [[français]] · [[espagnol]]' } }
            ]
          },
          {
            chapter: 'Le son du jour',
            beats: [
              { say: "Your sound of the day: the French R. It's one of the most recognisable sounds in French, and it's made in a completely different place from the English R.",
                write: { t: 'h2', text: 'Le son du jour · the French R' } },
              { say: 'The English R is made with the tip of the tongue. The French R is made at the back of the throat, close to where you make a G — like a very soft, gentle gargle.',
                write: { t: 'rule', text: 'Made at the back of the throat — like a soft, gentle gargle.' } },
              { say: "A trick: keep the tip of your tongue down, touching your bottom teeth, so it can't make an English R. Then say ga, and relax the sound until air flows through.",
                write: { t: 'li', text: 'Tip: keep the tip of your tongue down, behind your bottom teeth.' } },
              { say: 'Listen and repeat. [[rue.]] [[Paris.]] [[très.]] [[merci.]] [[français.]] [[bonjour.]]',
                write: { t: 'group', label: 'listen and repeat', items: ['{{r}}ue', 'Pa{{r}}is', 't{{r}}ès', 'me{{r}}ci', 'f{{r}}ançais', 'bonjou{{r}}'] } }
            ]
          },
          {
            chapter: 'À vous !',
            beats: [
              { say: 'Your turn. Say the French out loud before the answer appears.',
                write: { t: 'h2', text: 'À vous !' } },
              { say: 'Ask a stranger their name.', think: 5,
                write: { t: 'quiz', id: 'q1', n: '1', q: 'Ask a stranger their name', a: 'Comment vous appelez-vous ?' } },
              { say: '[[Comment vous appelez-vous ?]]', reveal: 'q1' },
              { say: "Emma is from England. She says: I'm English.", think: 5,
                write: { t: 'quiz', id: 'q2', n: '2', q: 'Emma: “I’m English.”', a: 'Je suis anglaise.' } },
              { say: '[[Je suis anglaise.]] Emma is a woman, so [[anglaise]], with an E — and no capital letter.', reveal: 'q2' },
              { say: 'I live in London.', think: 5,
                write: { t: 'quiz', id: 'q3', n: '3', q: 'I live in London.', a: "J'habite à Londres." } },
              { say: "[[J'habite à Londres.]] London is [[Londres]] in French.", reveal: 'q3' },
              { say: 'I speak a little French.', think: 5,
                write: { t: 'quiz', id: 'q4', n: '4', q: 'I speak a little French.', a: 'Je parle un peu français.' } },
              { say: '[[Je parle un peu français.]]', reveal: 'q4' }
            ]
          },
          {
            chapter: 'En résumé',
            beats: [
              { say: "Let's sum up.",
                write: { t: 'h2', text: 'En résumé' } },
              { say: "Your name: [[je m'appelle]]. To ask: [[Comment vous appelez-vous ?]] or [[Tu t'appelles comment ?]]",
                write: { t: 'li', text: "[[Je m'appelle…]] · [[Comment vous appelez-vous ?]] · [[Tu t'appelles comment ?]]" } },
              { say: '[[Je suis]], plus a nationality: no capital, no article, and women usually add an E.',
                write: { t: 'li', text: '[[Je suis]] + nationality — no capital, no article; women usually add -e' } },
              { say: "[[J'habite à]], plus a city. [[Je viens de]], plus a city.",
                write: { t: 'li', text: "[[J'habite à]] + city · [[Je viens de]] + city" } },
              { say: 'And: [[Je parle un peu français.]]',
                write: { t: 'li', text: '[[Je parle un peu français.]]' } },
              { say: 'Next: the notes, the words, and the full conversation between Camille and Sam. [[À bientôt !]]' }
            ]
          }
        ]
      },

      notes: `
        <h3>Your name</h3>
        ${table(['French', 'Meaning'], [
          [fr("Je m'appelle Sam."), 'My name is Sam. (literally: I call myself Sam)'],
          [fr("Moi, c'est Sam."), "I'm Sam. (relaxed)"],
          [fr('Comment vous appelez-vous ?'), "What's your name? (formal)"],
          [fr("Tu t'appelles comment ?"), "What's your name? (informal)"],
          [fr('Enchanté. / Enchantée.'), 'Nice to meet you.']
        ])}
        <p>A woman writes <span class="fr">enchantée</span> with an extra <em>e</em>. It sounds exactly the same.</p>

        <h3>Nationality: je suis…</h3>
        <p>${fr('Je suis américain.')} — I am American. Two differences from English: <strong>no capital letter</strong> and <strong>no article</strong> (not “un américain”).</p>
        ${table(['He', 'She', 'Meaning'], [
          [fr('anglais'), fr('anglaise'), 'English'],
          [fr('français'), fr('française'), 'French'],
          [fr('américain'), fr('américaine'), 'American'],
          [fr('espagnol'), fr('espagnole'), 'Spanish'],
          [fr('indien'), fr('indienne'), 'Indian'],
          [fr('canadien'), fr('canadienne'), 'Canadian'],
          [fr('australien'), fr('australienne'), 'Australian']
        ])}
        <div class="rule-box"><strong>The extra -e changes the sound.</strong> It wakes up the consonant before it: in ${fr('anglai' + silent('s'), 'anglais')} the s is silent; in ${fr('anglaise')} you hear it as a z. In ${fr('américain')} the ending is nasal; in ${fr('américaine')} you hear a clear n.</div>

        <h3>Where you live, where you're from</h3>
        ${table(['French', 'Meaning'], [
          [fr("J'habite à Paris."), 'I live in Paris.'],
          [fr('Je viens de Chicago.'), 'I come from Chicago.'],
          [fr("Je viens d'Oxford."), 'I come from Oxford.']
        ])}
        <p>With cities: <span class="fr">à</span> = in, <span class="fr">de</span> = from. Countries work differently — that comes in Unit 6.</p>
        <div class="rule-box"><strong>Elision:</strong> small words lose their vowel before a vowel or a silent h. <span class="fr">je</span> → <span class="fr">j'</span> (${fr("j'habite")}), <span class="fr">de</span> → <span class="fr">d'</span> (${fr("d'Oxford")}).</div>

        <h3>Languages</h3>
        <p>${fr('Je parle anglais.')} — I speak English. ${fr('Je parle un peu français.')} — I speak a little French.</p>
        <p>A language has the same name as the masculine nationality, with no capital: <span class="fr">anglais, français, espagnol</span>.</p>

        <h3>Sound of the lesson: the French R</h3>
        <p>The French R is made at the <strong>back of the throat</strong>, near where you say a <em>g</em> — like a soft, gentle gargle. Keep the tip of your tongue down behind your bottom teeth so it can't make an English R.</p>
        <p>Practise: ${fr('rue')} ${fr('Paris')} ${fr('très')} ${fr('merci')} ${fr('français')} ${fr('bonjour')}</p>
      `,

      vocab: [
        { fr: "je m'appelle", en: 'my name is' },
        { fr: 'Comment vous appelez-vous ?', en: "What's your name? (formal)" },
        { fr: "Tu t'appelles comment ?", en: "What's your name? (informal)" },
        { fr: "Moi, c'est…", en: "I'm… (relaxed)" },
        { fr: 'enchanté / enchantée', en: 'nice to meet you' },
        { fr: 'je suis', en: 'I am' },
        { fr: 'vous êtes', en: 'you are (formal)' },
        { fr: "j'habite à", en: 'I live in (+ city)' },
        { fr: 'je viens de', en: 'I come from' },
        { fr: 'je parle', en: 'I speak' },
        { fr: 'un peu', en: 'a little' },
        { fr: 'anglais / anglaise', en: 'English' },
        { fr: 'français / française', en: 'French' },
        { fr: 'américain / américaine', en: 'American' },
        { fr: 'indien / indienne', en: 'Indian' },
        { fr: 'canadien / canadienne', en: 'Canadian' },
        { fr: 'la ville', en: 'the city, the town', g: 'f' },
        { fr: 'le pays', en: 'the country', g: 'm' },
        { fr: 'maintenant', en: 'now' },
        { fr: 'aussi', en: 'also, too' },
        { fr: 'mais', en: 'but' },
        { fr: 'bien sûr', en: 'of course' },
        { fr: 'Londres', en: 'London' }
      ],

      dialogue: {
        title: 'Un échange linguistique',
        setting: 'A language-exchange evening in Paris. Camille meets Sam, who has just moved to the city.',
        cast: { 'Camille': 0, 'Sam': 1 },
        lines: [
          { who: 'Camille', fr: "Bonsoir ! Je m'appelle Camille. Et vous ?", en: "Good evening! My name's Camille. And you?" },
          { who: 'Sam', fr: "Bonsoir. Moi, c'est Sam. Enchanté.", en: "Good evening. I'm Sam. Nice to meet you." },
          { who: 'Camille', fr: 'Enchantée ! Vous êtes anglais ?', en: 'Nice to meet you! Are you English?' },
          { who: 'Sam', fr: 'Non, je suis américain. Je viens de Chicago.', en: "No, I'm American. I'm from Chicago." },
          { who: 'Camille', fr: 'Ah, Chicago ! Et vous habitez à Paris ?', en: 'Oh, Chicago! And do you live in Paris?' },
          { who: 'Sam', fr: "Oui, j'habite à Paris maintenant.", en: 'Yes, I live in Paris now.' },
          { who: 'Camille', fr: 'Vous parlez très bien français !', en: 'You speak French very well!' },
          { who: 'Sam', fr: 'Oh, merci ! Je parle un peu. Et vous, vous parlez anglais ?', en: 'Oh, thank you! I speak a little. And you, do you speak English?' },
          { who: 'Camille', fr: 'Oui, un peu. On peut se tutoyer ?', en: 'Yes, a little. Shall we say tu?' },
          { who: 'Sam', fr: 'Oui, bien sûr !', en: 'Yes, of course!' }
        ]
      },

      exercises: [
        { q: "How do you ask a stranger's name?",
          options: ['Comment vous appelez-vous ?', "Tu t'appelles comment ?", "Je m'appelle comment ?", 'Vous êtes comment ?'], correct: 0,
          explanation: 'With a stranger, use the formal question: Comment vous appelez-vous ?' },
        { q: 'Emma is English. She says: « Je suis … »',
          options: ['anglaise', 'anglais', 'Anglaise', "l'anglaise"], correct: 0,
          explanation: 'A woman adds -e: anglaise. No capital letter and no article.' },
        { q: 'Which sentence is correct?',
          options: ["J'habite à Londres.", 'Je habite à Londres.', "J'habite de Londres.", "J'habite Londres à."], correct: 0,
          explanation: "Je becomes j' before a vowel or silent h, and « in + city » is à." },
        { type: 'listen', audio: 'Je viens de Chicago.', q: 'What does it mean?',
          options: ["I'm from Chicago.", 'I live in Chicago.', "I'm going to Chicago.", 'I love Chicago.'], correct: 0,
          explanation: 'Je viens de… = I come from…' },
        { type: 'listen', audio: 'Enchantée !', q: 'What does it mean?',
          options: ['Nice to meet you!', 'Good evening!', 'Of course!', 'See you soon!'], correct: 0,
          explanation: 'Enchanté / enchantée = nice to meet you.' },
        { type: 'type', q: 'Write in French: My name is Sam.',
          answers: ["je m'appelle sam"],
          explanation: "Je m'appelle Sam." },
        { type: 'type', q: 'Write in French: I speak a little French.',
          answers: ['je parle un peu français', 'je parle un peu le français'],
          explanation: 'Je parle un peu français.' },
        { type: 'order', q: 'Build the question: “What’s your name?” (informal)',
          words: ['Tu', "t'appelles", 'comment'], answer: "Tu t'appelles comment ?",
          explanation: "Tu t'appelles comment ? — in casual French, comment often goes at the end." },
        { type: 'order', q: 'Build the sentence: “I live in Paris now.”',
          words: ["J'habite", 'à', 'Paris', 'maintenant'], answer: "J'habite à Paris maintenant.",
          explanation: "J'habite à Paris maintenant." },
        { q: 'Sam is a man from the US. Which sentence is correct?',
          options: ['Je suis américain.', 'Je suis Américain.', 'Je suis un américain.', 'Je suis américaine.'], correct: 0,
          explanation: 'No capital, no article, and no -e for a man: je suis américain.' },
        { q: 'How does « enchantée » sound compared with « enchanté »?',
          options: ['Exactly the same', 'The final e is pronounced', 'It has an extra syllable', 'The t becomes silent'], correct: 0,
          explanation: 'The extra -e after é is silent — the difference is only in writing.' },
        { q: 'Where is the French R made?',
          options: ['At the back of the throat', 'With the tip of the tongue', 'Exactly like the English R', 'It is always silent'], correct: 0,
          explanation: 'The French R is made at the back of the throat, like a soft gargle.' },
        { type: 'type', q: 'A woman says, in French: I am French.',
          answers: ['je suis française'],
          explanation: 'Je suis française — with a cédille under the c, and -e for a woman.' }
      ],

      tutor: [
        'Introduce yourself fully: name, nationality, city, and the languages you speak.',
        'Ask your tutor the same questions using vous.',
        'Ask them to correct your R in: Paris, très, merci, français.'
      ]
    },

    // ----------------------------------------------------------
    // LESSON 3 — L'ALPHABET ET LES NOMBRES
    // ----------------------------------------------------------
    {
      id: 'a1-u1-l3',
      title: "L'alphabet et les nombres",
      subtitle: 'Spelling your name, counting to twenty, and understanding prices.',
      goal: 'Spell your name and email address, and use the numbers 0–20.',

      video: {
        title: "L'alphabet et les nombres",
        kicker: 'A1 · Unit 1 · Lesson 3',
        scenes: [
          {
            chapter: 'Bienvenue',
            beats: [
              { say: '[[Bonjour !]] Today: the French alphabet, so you can spell your name, and the numbers up to twenty.',
                write: [{ t: 'h', text: "L'alphabet et les nombres" }, { t: 'sub', text: 'Spelling and counting to twenty' }] },
              { say: 'Listen first. Priya is checking into a hotel.',
                write: scene([
                  ['Réceptionniste', "Votre nom, s'il vous plaît ?"],
                  ['Priya', 'Nair. N – A – I – R.'],
                  ['Réceptionniste', 'Merci. Chambre quinze.']
                ]) },
              { say: "[[2:Votre nom, s'il vous plaît ?]] [[Nair. N, A, I, R.]] [[2:Merci. Chambre quinze.]] [[Votre nom]]: your name. [[Chambre quinze]]: room fifteen. Let's learn how to do that." }
            ]
          },
          {
            chapter: 'The vowels',
            beats: [
              { say: "Let's start with the vowels, because they're where English speakers trip up most.",
                write: { t: 'h2', text: "L'alphabet · the vowels" } },
              { say: 'Listen. [[A.]] [[E.]] [[I.]] [[O.]] [[U.]] And [[Y]], which is called [[i grec]]: Greek I.',
                write: { t: 'group', id: 'v', label: 'the vowels', items: ['A · ah', 'E · uh', 'I · ee', 'O · oh', 'U · ü', 'Y · ee-grek'] } },
              { say: 'Careful: the French E sounds like uh, and the French I sounds like ee. Your English instinct will want to swap them, so practise these two.',
                write: { t: 'rule', text: 'E sounds like “uh”, I sounds like “ee” — almost the reverse of English.' },
                mark: 'v:1' },
              { say: "And [[U]] is a sound English doesn't have. We'll practise it at the end of this video.",
                mark: 'v:4' }
            ]
          },
          {
            chapter: 'Tricky consonants',
            beats: [
              { say: 'Most consonants sound close to English. [[B. D. F. L. M. N. P. S. T. V.]] But watch out for these.',
                write: { t: 'h2', text: "L'alphabet · tricky consonants" } },
              { say: "[[G]] and [[J]] are swapped compared to English. [[G]] sounds like zhay, and [[J]] sounds like zhee. Get these wrong when you spell your name, and the hotel won't find your booking!",
                write: { t: 'group', label: 'swapped!', items: ['G · zhay', 'J · zhee'] } },
              { say: 'A few more. [[C.]] [[H.]] [[K.]] [[Q.]] [[R.]] [[W]] — literally, double V. [[X.]] And [[Z.]]',
                write: { t: 'group', label: 'also different', items: ['C · say', 'H · ash', 'K · kah', 'Q · kü', 'R · air', 'W · double vé', 'X · eeks', 'Z · zed'] } }
            ]
          },
          {
            chapter: 'Spelling',
            layout: 'split',
            beats: [
              { say: "When someone wants you to spell a word, they ask: [[Ça s'écrit comment ?]] How is it written?",
                write: { t: 'h2', col: 1, text: "Ça s'écrit comment ?" } },
              { say: "To spell, you'll need a few extra words. [[e accent aigu.]] [[e accent grave.]] [[c cédille.]] For a double letter, say [[deux]], two: [[deux l.]] And for email addresses: [[arobase]] for the at sign, and [[point]] for the dot.",
                write: { t: 'grid', col: 1, fr: [1], widths: 'minmax(0, 0.25fr) minmax(0, 1fr)', rows: [
                  ['é', 'e accent aigu'], ['è', 'e accent grave'], ['ç', 'c cédille'],
                  ['ll', 'deux l'], ['@', 'arobase'], ['.', 'point']
                ] } },
              { say: "So Priya's email address is: [[P, R, I, Y, A, point, N, A, I, R, arobase, mail, point, com.]]",
                write: { t: 'p', col: 2, text: 'priya.nair@mail.com → P-R-I-Y-A · [[point]] · N-A-I-R · [[arobase]] · mail · [[point]] · com' } }
            ]
          },
          {
            chapter: 'Numbers 0–10',
            beats: [
              { say: 'Now, numbers. Listen, and repeat each one. [[zéro. un. deux. trois. quatre. cinq. six. sept. huit. neuf. dix.]]',
                write: [{ t: 'h2', text: 'Les nombres · 0–10' },
                  { t: 'group', items: ['0 · zéro', '1 · un', '2 · deux', '3 · trois', '4 · quatre', '5 · cinq', '6 · six', '7 · sept', '8 · huit', '9 · neuf', '10 · dix'] }] },
              { say: 'A few details. In [[cinq]], you hear the Q, like a K. In [[six]] and [[dix]] on their own, the X sounds like an S. In [[sept]], the P is silent, but the T is pronounced. And in [[huit]] and [[neuf]], you hear the last letter too.',
                write: { t: 'rule', text: 'cin{{q}} · si{{x}} = s · se((p)){{t}} · hui{{t}} · neu{{f}} · di{{x}} = s' } }
            ]
          },
          {
            chapter: 'Numbers 11–20',
            beats: [
              { say: 'From eleven to sixteen, each number has its own word. [[onze. douze. treize. quatorze. quinze. seize.]]',
                write: [{ t: 'h2', text: 'Les nombres · 11–20' },
                  { t: 'group', label: 'one word each', items: ['11 · onze', '12 · douze', '13 · treize', '14 · quatorze', '15 · quinze', '16 · seize'] }] },
              { say: 'Then French builds them from blocks: ten-seven, ten-eight, ten-nine. [[dix-sept. dix-huit. dix-neuf.]]',
                write: { t: 'group', label: 'ten + seven, eight, nine', items: ['17 · dix-sept', '18 · dix-huit', '19 · dix-neuf'] } },
              { say: 'And twenty: [[vingt.]] The G and the T are both silent.',
                write: { t: 'group', label: 'twenty', items: ['20 · vin((gt))'] } }
            ]
          },
          {
            chapter: "C'est combien ?",
            beats: [
              { say: "Let's use numbers for something practical: prices.",
                write: { t: 'h2', text: "C'est combien ?" } },
              { say: "To ask the price: [[C'est combien ?]] How much is it?",
                write: { t: 'fr', fr: "C'est combien ?", en: 'How much is it?' } },
              { say: "And the answer: [[C'est douze euros.]] It's twelve euros.",
                write: { t: 'fr', fr: "C'est douze euros.", en: "It's twelve euros." } },
              { say: "Listen to how numbers link to the word [[euros]]. [[deux euros. trois euros. dix euros.]] The silent S or X wakes up as a Z sound, because [[euros]] starts with a vowel. That's called liaison. You'll meet it again and again.",
                write: { t: 'p', text: 'Before a vowel, numbers link with a z sound: [[deux‿euros]] · [[trois‿euros]] · [[dix‿euros]]' } }
            ]
          },
          {
            chapter: 'Le son du jour',
            beats: [
              { say: 'Your sound of the day: U versus OU. English speakers mix them up, and they change the meaning of words.',
                write: { t: 'h2', text: 'Le son du jour · [[u]] or [[ou]]' } },
              { say: 'Listen to the pairs. [[tu. tout.]] [[vu. vous.]] [[rue. roue.]] You, all. Seen, you. Street, wheel.',
                write: { t: 'grid', fr: [0, 1], head: ['u', 'ou'], rows: [['t{{u}} · you', 't{{ou}}t · all'], ['v{{u}} · seen', 'v{{ou}}s · you'], ['r{{u}}e · street', 'r{{ou}}e · wheel']] } },
              { say: "[[ou]] is easy: it's the oo in food. The French [[u]] doesn't exist in English. Here's how to find it. Say ee, as in see. Keep your tongue exactly where it is, and round your lips, as if to whistle. [[u. tu. rue. salut.]]",
                write: { t: 'rule', text: 'OU = the “oo” in food. U = say “ee”, keep your tongue still, and round your lips.' } }
            ]
          },
          {
            chapter: 'À vous !',
            beats: [
              { say: 'Your turn. Say it out loud before the answer appears.',
                write: { t: 'h2', text: 'À vous !' } },
              { say: 'Spell your first name, in French.', think: 8,
                write: { t: 'quiz', id: 'q1', n: '1', q: 'Spell your first name', a: 'Watch E, I, G and J!' } },
              { say: 'Did you remember? E is uh, I is ee, G is zhay, and J is zhee.', reveal: 'q1' },
              { say: 'Say these numbers: seven, fifteen, twenty.', think: 5,
                write: { t: 'quiz', id: 'q2', n: '2', q: '7 · 15 · 20', a: 'sept · quinze · vingt' } },
              { say: '[[sept. quinze. vingt.]]', reveal: 'q2' },
              { say: 'Ask the price.', think: 5,
                write: { t: 'quiz', id: 'q3', n: '3', q: 'Ask the price', a: "C'est combien ?" } },
              { say: "[[C'est combien ?]]", reveal: 'q3' },
              { say: "It's sixteen euros.", think: 5,
                write: { t: 'quiz', id: 'q4', n: '4', q: '“It’s sixteen euros.”', a: "C'est seize euros." } },
              { say: "[[C'est seize euros.]]", reveal: 'q4' }
            ]
          },
          {
            chapter: 'En résumé',
            beats: [
              { say: "Let's sum up.",
                write: { t: 'h2', text: 'En résumé' } },
              { say: 'The vowel traps: E is uh, and I is ee. And the swapped consonants: G is zhay, J is zhee.',
                write: { t: 'li', text: 'E = “uh”, I = “ee” · G = “zhay”, J = “zhee”' } },
              { say: "To ask for a spelling: [[Ça s'écrit comment ?]] And for emails: [[arobase]] and [[point]].",
                write: { t: 'li', text: "[[Ça s'écrit comment ?]] · [[accent aigu]] · [[arobase]] · [[point]]" } },
              { say: 'From [[onze]] to [[seize]], single words. Then [[dix-sept, dix-huit, dix-neuf]], and [[vingt]].',
                write: { t: 'li', text: '[[onze]] → [[seize]] are single words, then [[dix-sept]], [[dix-huit]], [[dix-neuf]]' } },
              { say: "And prices: [[C'est combien ?]]",
                write: { t: 'li', text: "[[C'est combien ?]] → [[C'est … euros.]]" } },
              { say: 'Next: the notes, the words, and the full hotel conversation. [[À bientôt !]]' }
            ]
          }
        ]
      },

      notes: `
        <h3>The alphabet</h3>
        <p>Tap a letter to hear it. The hint shows roughly how it sounds to an English speaker.</p>
        <div class="alpha-grid">
          ${[['A', 'ah'], ['B', 'bay'], ['C', 'say'], ['D', 'day'], ['E', 'uh'], ['F', 'eff'], ['G', 'zhay'], ['H', 'ash'], ['I', 'ee'],
             ['J', 'zhee'], ['K', 'kah'], ['L', 'ell'], ['M', 'emm'], ['N', 'enn'], ['O', 'oh'], ['P', 'pay'], ['Q', 'kü'], ['R', 'air'],
             ['S', 'ess'], ['T', 'tay'], ['U', 'ü'], ['V', 'vay'], ['W', 'doo-bluh-vay'], ['X', 'eeks'], ['Y', 'ee-grek'], ['Z', 'zed']]
            .map(([l, h]) => `<button class="alpha-card" data-text="${l}"><span class="alpha-letter">${l}</span><span class="alpha-hint">${h}</span></button>`).join('')}
        </div>
        <div class="rule-box"><strong>The four traps:</strong> E = “uh” and I = “ee” (the reverse of what English suggests). G = “zhay” and J = “zhee” (swapped compared to English).</div>

        <h3>Spelling</h3>
        ${table(['Ask', 'Meaning'], [
          [fr("Ça s'écrit comment ?"), 'How do you spell it? (literally: how is it written?)'],
          [fr("Vous pouvez répéter plus lentement, s'il vous plaît ?"), 'Can you repeat more slowly, please?']
        ])}
        ${table(['Symbol', 'Say', ''], [
          ['é', fr('e accent aigu'), 'acute accent'],
          ['è', fr('e accent grave'), 'grave accent'],
          ['ê', fr('e accent circonflexe'), 'circumflex'],
          ['ç', fr('c cédille'), 'cedilla — makes c sound like s'],
          ['ll', fr('deux l'), 'double letter'],
          ['@', fr('arobase'), 'at'],
          ['.', fr('point'), 'dot'],
          ['-', fr('tiret'), 'dash']
        ])}

        <h3>Numbers 0–20</h3>
        ${table(null, [
          ['0', fr('zéro'), '7', fr('sept'), '14', fr('quatorze')],
          ['1', fr('un'), '8', fr('huit'), '15', fr('quinze')],
          ['2', fr('deux'), '9', fr('neuf'), '16', fr('seize')],
          ['3', fr('trois'), '10', fr('dix'), '17', fr('dix-sept')],
          ['4', fr('quatre'), '11', fr('onze'), '18', fr('dix-huit')],
          ['5', fr('cinq'), '12', fr('douze'), '19', fr('dix-neuf')],
          ['6', fr('six'), '13', fr('treize'), '20', fr('vingt')]
        ])}
        <div class="rule-box"><strong>Pronunciation:</strong> cin<strong>q</strong> (q sounds like k) · si<strong>x</strong> and di<strong>x</strong> end in an s sound on their own · se${silent('p')}t (p silent, t pronounced) · hui<strong>t</strong> and neu<strong>f</strong> (last letter pronounced) · vin${silent('gt')} (g and t silent).</div>

        <h3>Prices</h3>
        ${table(['French', 'Meaning'], [
          [fr("C'est combien ?"), 'How much is it?'],
          [fr("C'est douze euros."), "It's twelve euros."],
          [fr('Ça fait neuf euros.'), 'That comes to nine euros.']
        ])}
        <p>Before <span class="fr">euros</span>, a silent final s or x wakes up as a z: ${fr('deux euros')} ${fr('trois euros')} ${fr('dix euros')}. This linking is called <em>liaison</em>.</p>

        <h3>Sound of the lesson: u or ou?</h3>
        ${table(['u', 'ou'], [
          [fr('tu') + ' you', fr('tout') + ' all'],
          [fr('vu') + ' seen', fr('vous') + ' you'],
          [fr('rue') + ' street', fr('roue') + ' wheel']
        ])}
        <p><strong>ou</strong> is the “oo” in <em>food</em>. <strong>u</strong> has no English equivalent: say “ee”, keep your tongue exactly there, and round your lips as if to whistle.</p>
      `,

      vocab: [
        { fr: "l'alphabet", en: 'the alphabet', g: 'm' },
        { fr: 'une lettre', en: 'a letter', g: 'f' },
        { fr: "Ça s'écrit comment ?", en: 'How do you spell it?' },
        { fr: 'Vous pouvez répéter ?', en: 'Can you repeat?' },
        { fr: 'plus lentement', en: 'more slowly' },
        { fr: 'le nom', en: 'the name, surname', g: 'm' },
        { fr: 'le prénom', en: 'the first name', g: 'm' },
        { fr: 'arobase', en: '@ (at)' },
        { fr: 'point', en: '. (dot)' },
        { fr: "C'est combien ?", en: 'How much is it?' },
        { fr: 'Ça fait…', en: 'That comes to…' },
        { fr: 'un euro', en: 'one euro', g: 'm' },
        { fr: 'la chambre', en: 'the room (hotel), the bedroom', g: 'f' },
        { fr: "d'accord", en: 'OK, agreed' },
        { fr: 'Je vous en prie.', en: "You're welcome. (formal)" },
        { fr: 'zéro', en: '0' }, { fr: 'un', en: '1' }, { fr: 'deux', en: '2' }, { fr: 'trois', en: '3' },
        { fr: 'quatre', en: '4' }, { fr: 'cinq', en: '5' }, { fr: 'six', en: '6' }, { fr: 'sept', en: '7' },
        { fr: 'huit', en: '8' }, { fr: 'neuf', en: '9' }, { fr: 'dix', en: '10' }, { fr: 'onze', en: '11' },
        { fr: 'douze', en: '12' }, { fr: 'treize', en: '13' }, { fr: 'quatorze', en: '14' }, { fr: 'quinze', en: '15' },
        { fr: 'seize', en: '16' }, { fr: 'dix-sept', en: '17' }, { fr: 'dix-huit', en: '18' }, { fr: 'dix-neuf', en: '19' },
        { fr: 'vingt', en: '20' }
      ],

      dialogue: {
        title: "À l'hôtel",
        setting: 'Priya Nair arrives at a small hotel in Lyon and checks in.',
        cast: { 'Priya': 0, 'Réceptionniste': 1 },
        lines: [
          { who: 'Réceptionniste', fr: 'Bonsoir, madame. Bienvenue !', en: 'Good evening, madam. Welcome!' },
          { who: 'Priya', fr: "Bonsoir. J'ai une réservation.", en: 'Good evening. I have a reservation.' },
          { who: 'Réceptionniste', fr: "Votre nom, s'il vous plaît ?", en: 'Your name, please?' },
          { who: 'Priya', fr: 'Nair. N – A – I – R.', say: 'Nair. N, A, I, R.', en: 'Nair. N – A – I – R.' },
          { who: 'Réceptionniste', fr: 'Et votre prénom ?', en: 'And your first name?' },
          { who: 'Priya', fr: 'Priya. P – R – I – Y – A.', say: 'Priya. P, R, I, Y, A.', en: 'Priya. P – R – I – Y – A.' },
          { who: 'Réceptionniste', fr: 'Merci. Et votre adresse e-mail ?', en: 'Thank you. And your email address?' },
          { who: 'Priya', fr: 'priya.nair@mail.com', say: 'Priya, point, Nair, arobase, mail, point, com.', en: 'priya.nair@mail.com' },
          { who: 'Réceptionniste', fr: "Pardon ? Vous pouvez répéter plus lentement, s'il vous plaît ?", en: 'Sorry? Could you repeat more slowly, please?' },
          { who: 'Priya', fr: 'Priya – point – Nair – arobase – mail – point – com.', say: 'Priya… point… Nair… arobase… mail… point… com.', en: 'Priya – dot – Nair – at – mail – dot – com.' },
          { who: 'Réceptionniste', fr: "Parfait. Vous êtes dans la chambre quinze. Le petit-déjeuner, c'est douze euros.", en: "Perfect. You're in room fifteen. Breakfast is twelve euros." },
          { who: 'Priya', fr: "Douze euros… D'accord. Merci beaucoup !", en: 'Twelve euros… OK. Thank you very much!' },
          { who: 'Réceptionniste', fr: 'Je vous en prie. Bonne soirée !', en: "You're welcome. Have a good evening!" }
        ]
      },

      exercises: [
        { q: 'Which letter is called “zhay” in French?',
          options: ['G', 'J', 'Z', 'H'], correct: 0,
          explanation: 'G = “zhay”, and J = “zhee” — swapped compared to English.' },
        { q: 'The French letter E sounds like…',
          options: ['“uh”', '“ee”', '“ay”', '“eh”'], correct: 0,
          explanation: 'E = “uh”. It is I that sounds like “ee”.' },
        { type: 'listen', audio: 'quinze', q: 'Which number do you hear?',
          options: ['15', '14', '5', '50'], correct: 0,
          explanation: 'quinze = 15' },
        { type: 'listen', audio: 'treize', q: 'Which number do you hear?',
          options: ['13', '3', '30', '16'], correct: 0,
          explanation: 'treize = 13. Trois is 3.' },
        { type: 'listen', audio: "C'est seize euros.", q: 'How much is it?',
          options: ['€16', '€6', '€60', '€17'], correct: 0,
          explanation: 'seize = 16. Six is 6, and dix-sept is 17.' },
        { type: 'type', q: 'Write the number 7 in French.',
          answers: ['sept'],
          explanation: 'sept — the p is silent.' },
        { type: 'type', q: 'Write the number 12 in French.',
          answers: ['douze'],
          explanation: 'douze' },
        { type: 'type', q: 'Write in French: How much is it?',
          answers: ["c'est combien", 'ça coûte combien', 'combien ça coûte'],
          explanation: "C'est combien ?" },
        { q: 'In « sept », which letter is silent?',
          options: ['p', 't', 's', 'e'], correct: 0,
          explanation: 'Sept is pronounced “set”: the p is silent and the t is pronounced.' },
        { q: 'How do you say « @ » in an email address?',
          options: ['arobase', 'point', 'tiret', 'à'], correct: 0,
          explanation: '@ = arobase. A dot is point, and a dash is tiret.' },
        { type: 'listen', audio: 'tu', q: 'Which word do you hear?',
          options: ['tu', 'tout'], correct: 0,
          explanation: 'tu — lips rounded, tongue forward for “ee”.' },
        { type: 'listen', audio: 'vous', q: 'Which word do you hear?',
          options: ['vu', 'vous'], correct: 1,
          explanation: 'vous — the “oo” sound of food.' },
        { type: 'order', q: 'Build the question: “How do you spell it?”',
          words: ['Ça', "s'écrit", 'comment'], answer: "Ça s'écrit comment ?",
          explanation: "Ça s'écrit comment ?" },
        { type: 'type', q: 'Write the number 19 in French.',
          answers: ['dix-neuf'],
          explanation: 'dix-neuf — ten-nine, with a hyphen.' }
      ],

      tutor: [
        'Spell your full name and your email address.',
        'Ask your tutor to say random numbers from 0 to 20 while you write them down.',
        "Practise asking « Vous pouvez répéter plus lentement, s'il vous plaît ? »."
      ]
    },

    // ----------------------------------------------------------
    // LESSON 4 — UN, UNE, LE, LA
    // ----------------------------------------------------------
    {
      id: 'a1-u1-l4',
      title: 'Un, une, le, la',
      subtitle: 'Every French noun has a gender — here is how to live with it.',
      goal: 'Name everyday things with the right article, and ask what something is.',

      video: {
        title: 'Un, une, le, la',
        kicker: 'A1 · Unit 1 · Lesson 4',
        scenes: [
          {
            chapter: 'Bienvenue',
            beats: [
              { say: "[[Bonjour !]] This is the last lesson of Unit 1, and it's about one of the most important ideas in French: gender.",
                write: [{ t: 'h', text: 'Un, une, le, la' }, { t: 'sub', text: 'Nouns and gender' }] },
              { say: 'Listen first. Inès orders at a café.',
                write: scene([
                  ['Serveur', 'Bonjour ! Vous désirez ?'],
                  ['Inès', "Un café et une eau, s'il vous plaît."]
                ]) },
              { say: "[[2:Bonjour ! Vous désirez ?]] [[Un café et une eau, s'il vous plaît.]] Did you notice? [[un café]], but [[une eau]]. Both mean, a. So why two different words?" }
            ]
          },
          {
            chapter: 'Masculin, féminin',
            beats: [
              { say: 'In French, every noun is either masculine or feminine. Not just people: every object, and every idea.',
                write: { t: 'h2', text: 'Masculin · féminin' } },
              { say: "A book is masculine: [[un livre.]] A table is feminine: [[une table.]] There's nothing masculine about a book. It's simply grammar.",
                write: { t: 'pair', items: [
                  { fr: '{{un}} livre', note: 'masculine · a book' },
                  { fr: '{{une}} table', note: 'feminine · a table' }
                ] } },
              { say: "So here's the golden rule: never learn a noun on its own. Always learn it with the little word in front. Not, livre: [[un livre.]] Not, table: [[une table.]]",
                write: { t: 'rule', text: 'Never learn a noun alone — learn it with its article: [[un livre]], [[une table]].' } }
            ]
          },
          {
            chapter: 'A, an — un, une',
            beats: [
              { say: '[[un]] goes with masculine nouns. [[un livre]], a book. [[un stylo]], a pen. [[un sac]], a bag. [[un téléphone]], a phone.',
                write: [{ t: 'h2', text: '[[un]] · [[une]] = a, an' },
                  { t: 'grid', fr: [0, 1], head: ['masculine · un', 'feminine · une'], rows: [
                    ['un livre', 'une table'], ['un stylo', 'une chaise'], ['un sac', 'une clé'], ['un téléphone', 'une porte']
                  ] }] },
              { say: 'And [[une]] goes with feminine nouns. [[une table]], a table. [[une chaise]], a chair. [[une clé]], a key. [[une porte]], a door.' }
            ]
          },
          {
            chapter: "The — le, la, l'",
            beats: [
              { say: 'For the, it is [[le]] with masculine nouns, and [[la]] with feminine nouns. [[le livre. la table. le stylo. la clé.]]',
                write: [{ t: 'h2', text: "[[le]] · [[la]] · [[l']] = the" },
                  { t: 'grid', fr: [0, 1], head: ['masculine · le', 'feminine · la'], rows: [['le livre', 'la table'], ['le stylo', 'la clé']] }] },
              { say: "Before a vowel or a silent H, both shorten to [[l']], just like [[je]] became [[j']] in the last lesson. [[l'eau]], the water. [[l'ami]], the friend. [[l'hôtel]], the hotel.",
                write: { t: 'rule', text: "Before a vowel or silent h: [[l']] — [[l'eau]] · [[l'ami]] · [[l'hôtel]]" } },
              { say: "The catch: with [[l']], you can no longer hear whether the word is masculine or feminine. So learn these words with [[un]] or [[une]]: [[une eau]], [[un hôtel]].",
                write: { t: 'p', text: "With [[l']] the gender disappears — so learn [[une eau]], [[un hôtel]]." } }
            ]
          },
          {
            chapter: 'Plural',
            beats: [
              { say: "Now the plural. And there's good news: it's simple.",
                write: { t: 'h2', text: 'Plural · [[les]] · [[des]]' } },
              { say: 'For the, both [[le]] and [[la]] become [[les]]. [[les livres. les tables.]]',
                write: { t: 'arrow', label: 'the', from: 'le livre · la table', to: '{{les}} livre((s)) · {{les}} table((s))' } },
              { say: 'And [[un]] and [[une]] become [[des]], meaning some. [[des livres. des tables.]]',
                write: { t: 'arrow', label: 'a → some', from: 'un livre · une table', to: '{{des}} livre((s)) · {{des}} table((s))' } },
              { say: "Here's the key for listening. The S at the end of [[livres]] is silent. [[le livre]]. [[les livres]]. The noun sounds exactly the same. You only hear the plural in the little word in front: [[le]], [[les]].",
                write: { t: 'rule', text: 'The plural -s is silent. You hear the plural in the article: [[le]] (“luh”) → [[les]] (“lay”).' } }
            ]
          },
          {
            chapter: "Qu'est-ce que c'est ?",
            beats: [
              { say: "Here's a question you can use straight away.",
                write: { t: 'h2', text: "Qu'est-ce que c'est ?" } },
              { say: "[[Qu'est-ce que c'est ?]] What is it? It looks long, but it's said quickly, in one breath. [[Qu'est-ce que c'est ?]]",
                write: { t: 'fr', fr: "Qu'est-ce que c'est ?", en: 'What is it?' } },
              { say: "To answer, use [[c'est]], it is, plus the noun with its article. [[C'est un croissant.]]",
                write: { t: 'fr', fr: "C'est un croissant.", en: "It's a croissant." } },
              { say: "[[C'est une chouquette.]] A chouquette is a little pastry with sugar on top. Try one if you're ever in France.",
                write: { t: 'fr', fr: "C'est une chouquette.", en: "It's a chouquette — a little sugar-topped pastry." } }
            ]
          },
          {
            chapter: 'Gender clues',
            beats: [
              { say: "Can you guess a noun's gender? Sometimes. Some endings are reliable clues.",
                write: { t: 'h2', text: 'Gender clues' } },
              { say: 'Words ending like [[fromage]], [[moment]], and [[bateau]] are usually masculine. Words ending like [[station]], [[liberté]], and [[baguette]] are usually feminine.',
                write: { t: 'grid', fr: [0, 1], head: ['usually masculine', 'usually feminine'], rows: [
                  ['le from{{age}}', 'la sta{{tion}}'], ['le mo{{ment}}', 'la liber{{té}}'], ['le bat{{eau}}', 'la bagu{{ette}}']
                ] } },
              { say: 'These clues help, but there are exceptions, like [[la plage]], the beach. So the article is still your safest bet.',
                write: { t: 'rule', text: 'Clues help, but there are exceptions ([[la plage]], [[l’eau]]). The article is your safest bet.' } }
            ]
          },
          {
            chapter: 'Le son du jour',
            layout: 'split',
            beats: [
              { say: "Your sound of the day: nasal vowels. They're a signature sound of French, and you've already met one, in [[un]].",
                write: { t: 'h2', col: 1, text: 'Le son du jour · nasal vowels' } },
              { say: "When a vowel is followed by N or M at the end of a syllable, you don't pronounce the N. Instead, the vowel itself goes through your nose.",
                write: { t: 'rule', col: 1, text: 'Vowel + n or m at the end of a syllable: no n sound — the vowel goes through the nose.' } },
              { say: 'There are three main nasal sounds. [[blanc. enfant.]] [[bon. maison.]] [[vin. pain. un.]] In most of France today, [[un]] sounds the same as [[vin]].',
                write: { t: 'grid', col: 1, fr: [1], widths: 'minmax(0, 0.8fr) minmax(0, 1.3fr)', rows: [
                  ['an · en', 'bl{{an}}c · {{en}}f{{an}}t'], ['on', 'b{{on}} · mais{{on}}'], ['in · ain · un', 'v{{in}} · p{{ain}} · {{un}}']
                ] } },
              { say: 'Now compare [[un]] and [[une]]. In [[un]], the vowel is nasal, with no N sound. In [[une]], the E after the N cancels the nasal: you say the vowel, then a clear N. [[un. une.]]',
                write: { t: 'pair', col: 2, items: [
                  { fr: 'u{{n}}', note: 'nasal — no n sound' },
                  { fr: 'u{{ne}}', note: 'not nasal — a clear n' }
                ] } },
              { say: 'The same thing happens in [[bon, bonne]], and in [[américain, américaine]]. Remember lesson two?',
                write: { t: 'p', col: 2, text: 'Same pattern: [[bo{{n}}]] → [[bo{{nne}}]] · [[américai{{n}}]] → [[américai{{ne}}]]' } }
            ]
          },
          {
            chapter: 'À vous !',
            beats: [
              { say: 'Your turn. Say it out loud, with the right article.',
                write: { t: 'h2', text: 'À vous !' } },
              { say: 'A book. A table.', think: 5,
                write: { t: 'quiz', id: 'q1', n: '1', q: 'a book · a table', a: 'un livre · une table' } },
              { say: '[[un livre. une table.]]', reveal: 'q1' },
              { say: 'The water.', think: 5,
                write: { t: 'quiz', id: 'q2', n: '2', q: 'the water', a: "l'eau" } },
              { say: "[[l'eau.]] [[eau]] starts with a vowel, so [[l']].", reveal: 'q2' },
              { say: 'Ask: what is it?', think: 5,
                write: { t: 'quiz', id: 'q3', n: '3', q: 'Ask: What is it?', a: "Qu'est-ce que c'est ?" } },
              { say: "[[Qu'est-ce que c'est ?]]", reveal: 'q3' },
              { say: 'The keys.', think: 5,
                write: { t: 'quiz', id: 'q4', n: '4', q: 'the keys', a: 'les clés' } },
              { say: '[[les clés.]] And the S is silent.', reveal: 'q4' }
            ]
          },
          {
            chapter: 'En résumé',
            beats: [
              { say: "Let's sum up.",
                write: { t: 'h2', text: 'En résumé' } },
              { say: 'Every noun is masculine or feminine, so learn every noun with its article.',
                write: { t: 'li', text: 'Every noun is masculine or feminine — learn it with its article' } },
              { say: "A: [[un]] or [[une]]. The: [[le]], [[la]], or [[l']].",
                write: { t: 'li', text: "a: [[un]] · [[une]] — the: [[le]] · [[la]] · [[l']]" } },
              { say: 'Plural: [[les]] and [[des]]. And the final S is silent.',
                write: { t: 'li', text: 'plural: [[les]] · [[des]] — and the final -s is silent' } },
              { say: "And: [[Qu'est-ce que c'est ?]] [[C'est un…]] [[C'est une…]]",
                write: { t: 'li', text: "[[Qu'est-ce que c'est ?]] → [[C'est un… / C'est une…]]" } },
              { say: "That's the end of Unit 1. You can now greet people, introduce yourself, spell, count to twenty, and name the things around you. [[Bravo !]] Before moving on, review the words and practise with your tutor. [[À bientôt !]]" }
            ]
          }
        ]
      },

      notes: `
        <h3>Every noun has a gender</h3>
        <p>Every French noun is <strong>masculine</strong> or <strong>feminine</strong> — objects and ideas too. It is grammar, not meaning: there is nothing masculine about ${fr('un livre')} (a book) or feminine about ${fr('une table')}.</p>
        <div class="rule-box"><strong>Golden rule:</strong> never learn a noun alone. Learn <span class="fr">une table</span>, not just <span class="fr">table</span>. The word lists in this course show gender with a coloured dot: <span class="gender-key m"></span> masculine, <span class="gender-key f"></span> feminine.</div>

        <h3>The articles</h3>
        ${table(['', 'Masculine', 'Feminine', 'Plural'], [
          ['a, an / some', fr('un livre'), fr('une table'), fr('des livres')],
          ['the', fr('le livre'), fr('la table'), fr('les livres')],
          ['the + vowel or silent h', fr("l'hôtel"), fr("l'eau"), fr('les hôtels')]
        ])}
        <p><span class="fr">le</span> and <span class="fr">la</span> become <span class="fr">l'</span> before a vowel or a silent h (just like <span class="fr">je</span> → <span class="fr">j'</span>). With <span class="fr">l'</span> you can't hear the gender, so learn those words with <span class="fr">un / une</span>: <span class="fr">une eau, un hôtel, un ami, une amie</span>.</p>

        <h3>The plural</h3>
        <p>Add <strong>-s</strong> to the noun — but it is <strong>silent</strong>. ${fr('le livre')} and ${fr('les livres')} sound the same except for the article: <em>le</em> (“luh”) versus <em>les</em> (“lay”). Listen to the article to hear the plural.</p>

        <h3>What is it?</h3>
        ${table(['French', 'Meaning'], [
          [fr("Qu'est-ce que c'est ?"), 'What is it?'],
          [fr("C'est un croissant."), "It's a croissant."],
          [fr("C'est une chouquette."), "It's a chouquette (a small sugar-topped pastry)."],
          [fr('Ce sont des clés.'), 'They are keys.']
        ])}

        <h3>Gender clues</h3>
        ${table(['Usually masculine', 'Usually feminine'], [
          [fr('le fromage') + ' -age', fr('la station') + ' -tion'],
          [fr('le moment') + ' -ment', fr('la liberté') + ' -té'],
          [fr('le bateau') + ' -eau', fr('la baguette') + ' -ette']
        ])}
        <p>Useful, but with exceptions: ${fr('la plage')} (the beach), ${fr("l'eau")} (feminine), ${fr("l'été")} (summer, masculine). The article is always the safest bet.</p>

        <h3>Sound of the lesson: nasal vowels</h3>
        <p>When a vowel is followed by <strong>n</strong> or <strong>m</strong> at the end of a syllable, you don't pronounce the n — the vowel goes through your nose.</p>
        ${table(['Spelling', 'Examples'], [
          ['an, en', `${fr('blanc')} ${fr('enfant')}`],
          ['on', `${fr('bon')} ${fr('maison')}`],
          ['in, ain, un', `${fr('vin')} ${fr('pain')} ${fr('un')}`]
        ])}
        <p>An <strong>e</strong> after the n cancels the nasal: ${fr('un')} → ${fr('une')}, ${fr('bon')} → ${fr('bonne')}, ${fr('américain')} → ${fr('américaine')}. You then hear a clear n.</p>
      `,

      vocab: [
        { fr: 'un livre', en: 'a book', g: 'm' },
        { fr: 'un stylo', en: 'a pen', g: 'm' },
        { fr: 'un sac', en: 'a bag', g: 'm' },
        { fr: 'un téléphone', en: 'a phone', g: 'm' },
        { fr: 'un ordinateur', en: 'a computer', g: 'm' },
        { fr: 'un café', en: 'a coffee, a café', g: 'm' },
        { fr: 'un croissant', en: 'a croissant', g: 'm' },
        { fr: 'un hôtel', en: 'a hotel', g: 'm' },
        { fr: 'un ami', en: 'a friend (male)', g: 'm' },
        { fr: 'une amie', en: 'a friend (female)', g: 'f' },
        { fr: 'une table', en: 'a table', g: 'f' },
        { fr: 'une chaise', en: 'a chair', g: 'f' },
        { fr: 'une clé', en: 'a key', g: 'f' },
        { fr: 'une porte', en: 'a door', g: 'f' },
        { fr: 'une fenêtre', en: 'a window', g: 'f' },
        { fr: 'une bouteille', en: 'a bottle', g: 'f' },
        { fr: 'une eau', en: 'a (bottle of) water', g: 'f' },
        { fr: 'une chouquette', en: 'a small sugar-topped pastry', g: 'f' },
        { fr: "c'est", en: 'it is, this is' },
        { fr: "Qu'est-ce que c'est ?", en: 'What is it?' },
        { fr: 'Vous désirez ?', en: 'What would you like? (staff to customer)' },
        { fr: 'voilà', en: 'here you are, there you go' },
        { fr: 'alors', en: 'so, then' }
      ],

      dialogue: {
        title: 'Au café',
        setting: 'Inès and Tom stop at a café counter. Tom spots something he does not recognise.',
        cast: { 'Inès': 0, 'Serveur': 1, 'Tom': 2 },
        lines: [
          { who: 'Serveur', fr: 'Bonjour ! Vous désirez ?', en: 'Hello! What would you like?' },
          { who: 'Tom', fr: "Bonjour. Un café et un croissant, s'il vous plaît.", en: 'Hello. A coffee and a croissant, please.' },
          { who: 'Serveur', fr: 'Et pour madame ?', en: 'And for madam?' },
          { who: 'Inès', fr: "Une eau, s'il vous plaît.", en: 'A water, please.' },
          { who: 'Tom', fr: "Et ça, qu'est-ce que c'est ?", en: 'And that — what is it?' },
          { who: 'Serveur', fr: "Ça ? C'est une chouquette.", en: "That? It's a chouquette." },
          { who: 'Tom', fr: "Une chouquette ? Alors, deux chouquettes, s'il vous plaît !", en: 'A chouquette? Then two chouquettes, please!' },
          { who: 'Serveur', fr: 'Très bien. Un café, un croissant, une eau et deux chouquettes… Ça fait neuf euros.', en: 'Very good. A coffee, a croissant, a water and two chouquettes… That comes to nine euros.' },
          { who: 'Tom', fr: 'Voilà. Merci !', en: 'Here you go. Thanks!' },
          { who: 'Serveur', fr: 'Merci à vous. Bonne journée !', en: 'Thank you. Have a good day!' }
        ]
      },

      exercises: [
        { q: '« table » is feminine. How do you say “a table”?',
          options: ['une table', 'un table'], correct: 0,
          explanation: 'Feminine nouns take une: une table.' },
        { q: 'How do you say “the key”? (clé is feminine)',
          options: ['la clé', 'le clé', "l'clé", 'les clé'], correct: 0,
          explanation: 'Feminine + consonant: la clé.' },
        { q: 'How do you say “the water”?',
          options: ["l'eau", 'la eau', 'le eau', 'leau'], correct: 0,
          explanation: "Eau starts with a vowel, so la becomes l': l'eau." },
        { type: 'listen', audio: 'une', q: 'Which word do you hear?',
          options: ['une', 'un'], correct: 0,
          explanation: 'une — you hear a clear n. In un, the vowel is nasal and there is no n sound.' },
        { type: 'listen', audio: 'un', q: 'Which word do you hear?',
          options: ['une', 'un'], correct: 1,
          explanation: 'un — nasal, with no n sound.' },
        { type: 'listen', audio: "C'est un stylo.", q: 'What does it mean?',
          options: ["It's a pen.", "It's a book.", "It's a bag.", "It's a key."], correct: 0,
          explanation: 'un stylo = a pen' },
        { type: 'type', q: 'Write in French: a coffee',
          answers: ['un café'],
          explanation: 'un café — café is masculine.' },
        { type: 'type', q: 'Write in French: the books',
          answers: ['les livres'],
          explanation: 'les livres — the -s is written but not pronounced.' },
        { type: 'type', q: "Write in French: It's a chair. (chaise is feminine)",
          answers: ["c'est une chaise"],
          explanation: "C'est une chaise." },
        { type: 'order', q: 'Build the question: “What is it?”',
          words: ["Qu'est-ce", 'que', "c'est"], answer: "Qu'est-ce que c'est ?",
          explanation: "Qu'est-ce que c'est ? — said quickly, in one breath." },
        { q: '« le livre » and « les livres » — what changes in the sound?',
          options: ['Only the article: le → les', 'The final -s of livres is pronounced', 'Both words change', 'Nothing — they sound identical'], correct: 0,
          explanation: 'The plural -s is silent, so you hear the plural only in the article.' },
        { q: 'Which word contains a nasal vowel?',
          options: ['pain', 'une', 'table', 'eau'], correct: 0,
          explanation: 'pain — the ai + n is nasal, and the n is not pronounced.' },
        { q: 'Which ending usually signals a feminine noun?',
          options: ['-tion', '-age', '-ment', '-eau'], correct: 0,
          explanation: 'Nouns ending in -tion are feminine: la station, la nation.' },
        { type: 'type', q: 'Write in French: some keys',
          answers: ['des clés'],
          explanation: 'des clés — un/une become des in the plural.' }
      ],

      tutor: [
        'Point at things around you and name them: « C\'est un… / C\'est une… ».',
        'Ask « Qu\'est-ce que c\'est ? » about objects your tutor shows you.',
        'Role-play ordering at a café — then ask how much it is.'
      ]
    }
  ];

  LESSONS.push(...lessons);
})();
