// ============================================================
// LESSON VIDEOS — board-lecture scripts, keyed by lesson id
// ============================================================
//
// A video is a list of scenes; each scene is one chapter and starts
// on a clean board. A scene is a list of beats — one thing the
// teacher says, plus what appears on the board while they say it.
//
//   say     narration. [[French]] is read by the French voice,
//           everything else by the English voice.
//   write   element or array of elements added to the board.
//   mark    highlight an element: "id", or "id:n" for its nth part
//           (table row, formula box, chip).
//   reveal  uncover a quiz answer by id.
//   think   seconds of silent countdown after the narration.
//
// Board elements (t = type):
//   h, sub, h2, p, li, rule      { text }
//   fr                           { fr, en, big }
//   formula                      { parts: ['a', '+', { text, sub }] }
//   table                        { rows: [[left, right, note?]] }
//   arrow                        { label, from, to }
//   group                        { label, items: [] }
//   pair                         { items: [{ fr, note }] }
//   contrast                     { wrong, right, note }
//   quiz                         { n, q, a }
// Any element takes `id`; in a split scene, `col: 1 | 2`.
// Board text supports [[French]] and {{highlight}}.
// ============================================================

const VIDEOS = {

  'lesson-6': {
    title: 'Le passé composé avec [[avoir]]',
    kicker: 'A2 · Unit 7 · Lesson 23',
    scenes: [
      {
        chapter: 'Bienvenue',
        beats: [
          { say: "[[Bonjour à tous.]] Today we're learning the most useful past tense in spoken French.",
            write: { t: 'h', text: 'Le passé composé' } },
          { say: "It's called [[le passé composé]], the compound past. In this lesson, we build it with the verb [[avoir]].",
            write: { t: 'sub', text: 'avec [[avoir]]' } },
          { say: 'By the end of this video, you will be able to say sentences like these.',
            write: [
              { t: 'fr', fr: "Hier, j'ai travaillé.", en: 'Yesterday, I worked.' },
              { t: 'fr', fr: "Ce week-end, j'ai vu un film.", en: 'This weekend, I saw a film.' }
            ] },
          { say: "[[Hier, j'ai travaillé.]] [[Ce week-end, j'ai vu un film.]] Let's see how they work." }
        ]
      },

      {
        chapter: 'One tense, three translations',
        beats: [
          { say: "Let's start with one short sentence. [[J'ai mangé.]]",
            write: { t: 'fr', fr: "J'ai mangé.", big: true } },
          { say: "How would you translate it? It can mean, I ate.",
            write: { t: 'li', text: 'I ate.' } },
          { say: 'It can mean, I have eaten.',
            write: { t: 'li', text: 'I have eaten.' } },
          { say: 'And it can mean, I did eat.',
            write: { t: 'li', text: 'I did eat.' } },
          { say: "English makes you choose between three forms. In everyday French, one form covers all three. That's why the passé composé is so important.",
            write: { t: 'rule', text: 'English: three past forms. Spoken French: one — [[le passé composé]].' } }
        ]
      },

      {
        chapter: 'The recipe',
        beats: [
          { say: "So how is it built? It has two parts. That's why it's called [[composé]], compound.",
            write: { t: 'formula', id: 'f', parts: [
              { text: 'sujet', sub: 'subject' }, '+',
              { text: '[[avoir]]', sub: 'present tense' }, '+',
              { text: 'participe passé', sub: 'past participle' }
            ] } },
          { say: 'Part one: the verb [[avoir]], conjugated in the present tense.',
            mark: 'f:2' },
          { say: 'Part two: the past participle of the verb you actually want to use.',
            mark: 'f:4' },
          { say: "If that looks familiar, it should. It's the same shape as the English, I have eaten: have, plus a past participle. French simply uses it for, I ate, as well.",
            write: { t: 'p', text: "[[J'ai]] + [[mangé]]  =  I have + eaten" } }
        ]
      },

      {
        chapter: 'Step 1 — avoir',
        layout: 'split',
        beats: [
          { say: "Step one. You already know [[avoir]] in the present tense. Let's review it, and listen carefully to the sounds.",
            write: { t: 'h2', col: 1, text: '1 · [[avoir]] au présent' } },
          { say: "[[j'ai.]] [[tu as.]] [[il a.]] [[nous avons.]] [[vous avez.]] [[ils ont.]]",
            write: { t: 'table', id: 'av', col: 1, rows: [
              ["j'", 'ai'], ['tu', 'as'], ['il / elle / on', 'a'],
              ['nous', 'avons'], ['vous', 'avez'], ['ils / elles', 'ont']
            ] } },
          { say: "Notice the first line. [[je]] becomes [[j']] in front of a vowel. It's never, je ai. It's always [[j'ai.]]",
            mark: 'av:0' },
          { say: 'With [[nous]], [[vous]], and [[ils]], the final S links to the vowel and sounds like a Z. [[nous avons.]] [[vous avez.]] [[ils ont.]]',
            mark: 'av:3' },
          { say: "That Z sound really matters. [[ils ont]], with a Z, means they have. [[ils sont]], with an S, means they are. Two different verbs.",
            write: { t: 'pair', col: 2, items: [
              { fr: 'ils{{‿}}ont', note: '[z] — they have · [[avoir]]' },
              { fr: 'ils {{s}}ont', note: '[s] — they are · [[être]]' }
            ] } },
          { say: "So [[ils ont mangé]] means they ate. Keep that Z.",
            write: { t: 'fr', col: 2, fr: 'Ils ont mangé.', en: 'They ate.' } }
        ]
      },

      {
        chapter: 'Step 2 — the past participle',
        beats: [
          { say: 'Step two: the past participle. For regular verbs there are three patterns, one for each verb family.',
            write: { t: 'h2', text: '2 · le participe passé' } },
          { say: 'Verbs ending in E, R: swap the ending for an E with an accent, [[é.]] [[parler]] becomes [[parlé]].',
            write: { t: 'arrow', label: '-er', from: 'parl{{er}}', to: 'parl{{é}}' } },
          { say: 'Verbs ending in I, R: drop the R. [[finir]] becomes [[fini]].',
            write: { t: 'arrow', label: '-ir', from: 'fin{{ir}}', to: 'fin{{i}}' } },
          { say: 'And verbs ending in R, E: drop the ending and add U. [[vendre]] becomes [[vendu]].',
            write: { t: 'arrow', label: '-re', from: 'vend{{re}}', to: 'vend{{u}}' } },
          { say: "Good news for your ears: [[parlé]] and [[parler]] sound exactly the same. The difference is only on paper.",
            write: { t: 'rule', text: '[[parlé]] and [[parler]] sound identical — only the spelling changes.' } }
        ]
      },

      {
        chapter: 'Putting it together',
        beats: [
          { say: "Now let's put the two steps together.",
            write: { t: 'h2', text: 'Ensemble' } },
          { say: "[[J'ai parlé avec Marie.]] I spoke with Marie.",
            write: { t: 'fr', fr: "J'ai parlé avec Marie.", en: 'I spoke with Marie.' } },
          { say: "[[Tu as fini ton café ?]] Did you finish your coffee? In speech, the question is just your voice going up at the end.",
            write: { t: 'fr', fr: 'Tu as fini ton café ?', en: 'Did you finish your coffee?' } },
          { say: "[[Nous avons attendu le bus.]] We waited for the bus. [[attendre]] ends in R, E, so its participle is [[attendu.]]",
            write: { t: 'fr', fr: 'Nous avons attendu le bus.', en: 'We waited for the bus.' } }
        ]
      },

      {
        chapter: 'The irregular verbs',
        layout: 'split',
        beats: [
          { say: "Of course, French has irregular verbs, and they're the ones you'll use most. The trick is to learn them by sound, in families.",
            write: { t: 'h2', col: 1, text: 'Les participes irréguliers' } },
          { say: "First, the U family. [[j'ai eu.]] [[j'ai vu.]] [[j'ai bu.]] [[j'ai lu.]] [[j'ai pu.]] [[j'ai voulu.]] [[j'ai su.]]",
            write: { t: 'group', id: 'gu', col: 1, label: 'sound: [y]', items: [
              'avoir → {{eu}}', 'voir → v{{u}}', 'boire → b{{u}}', 'lire → l{{u}}',
              'pouvoir → p{{u}}', 'vouloir → voul{{u}}', 'savoir → s{{u}}'
            ] } },
          { say: "Careful with the first one. [[eu]] is pronounced like the French letter [[u.]] [[j'ai eu]], I had.",
            mark: 'gu:0' },
          { say: "Next, the I, S family. [[j'ai pris.]] [[j'ai mis.]] The S is silent.",
            write: { t: 'group', col: 2, label: 'sound: [i]', items: ['prendre → pr{{is}}', 'mettre → m{{is}}'] } },
          { say: "Then a family ending in I, T. [[j'ai fait.]] [[j'ai écrit.]] [[j'ai dit.]] The T is silent too, so [[fait]] rhymes with [[mais.]]",
            write: { t: 'group', col: 2, label: 'silent t', items: ['faire → fa{{it}}', 'écrire → écr{{it}}', 'dire → d{{it}}'] } },
          { say: "And finally, [[être]] becomes [[été.]] [[j'ai été]], I have been.",
            write: { t: 'group', col: 2, label: 'on its own', items: ['être → {{été}}'] } }
        ]
      },

      {
        chapter: 'Two classic mistakes',
        beats: [
          { say: 'Now, two mistakes that almost every English speaker makes.',
            write: { t: 'h2', text: 'Attention !' } },
          { say: "Mistake number one: forgetting [[avoir]]. [[Je mangé]] is not French. You need both parts. [[J'ai mangé.]]",
            write: { t: 'contrast', wrong: 'Je mangé.', right: "J'ai mangé." } },
          { say: "Mistake number two: making the participle agree with the subject. With [[avoir]], the participle never changes. No extra E for a woman, no extra S for a group.",
            write: { t: 'contrast', wrong: 'Elle a mang{{ée}}.', right: 'Elle a mang{{é}}.', note: 'Both sound the same — this one is a spelling mistake.' } },
          { say: "[[Elle a mangé.]] [[Ils ont mangé.]] [[Nous avons mangé.]] Always the same participle." }
        ]
      },

      {
        chapter: 'À vous !',
        beats: [
          { say: "Your turn. I'll give you an English sentence. Say it in French, out loud if you can, before the answer appears.",
            write: { t: 'h2', text: 'À vous !' } },
          { say: 'I took the metro.', think: 5,
            write: { t: 'quiz', id: 'q1', n: '1', q: 'I took the metro.', a: "J'ai pris le métro." } },
          { say: "[[J'ai pris le métro.]] [[prendre]] becomes [[pris.]]", reveal: 'q1' },
          { say: 'We saw a good film.', think: 5,
            write: { t: 'quiz', id: 'q2', n: '2', q: 'We saw a good film.', a: 'Nous avons vu un bon film.' } },
          { say: '[[Nous avons vu un bon film.]] With a Z sound: [[nous avons.]]', reveal: 'q2' },
          { say: 'She finished her work.', think: 5,
            write: { t: 'quiz', id: 'q3', n: '3', q: 'She finished her work.', a: 'Elle a fini son travail.' } },
          { say: '[[Elle a fini son travail.]] And no agreement with [[elle]]: the participle stays [[fini.]]', reveal: 'q3' }
        ]
      },

      {
        chapter: 'En résumé',
        beats: [
          { say: "Let's sum up.",
            write: { t: 'h2', text: 'En résumé' } },
          { say: 'One. The passé composé is [[avoir]] in the present, plus a past participle.',
            write: { t: 'li', text: '[[avoir]] (present) + past participle' } },
          { say: 'Two. Regular participles: E, R becomes [[é.]] I, R becomes I. R, E becomes U.',
            write: { t: 'li', text: '-er → -{{é}}  ·  -ir → -{{i}}  ·  -re → -{{u}}' } },
          { say: 'Three. Learn the irregular ones by sound, in families.',
            write: { t: 'li', text: 'Irregulars by sound: {{-u}}, {{-is}}, {{-it}}, {{été}}' } },
          { say: 'Four. With [[avoir]], the participle does not agree with the subject.',
            write: { t: 'li', text: 'With [[avoir]]: no agreement with the subject' } },
          { say: "That's it for this video. Next, read the theory, listen to the examples, and try the exercises. [[À bientôt !]]" }
        ]
      }
    ]
  }

};

window.VIDEOS = VIDEOS;
