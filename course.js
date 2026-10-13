// ============================================================
// COURSE MAP — the whole A1 → B1 course, in teaching order.
// ============================================================
//
// A lesson listed here but not yet written appears on the home page
// as "coming soon". Lesson content lives in content/*.js and is keyed
// by the same id. Ids are permanent: progress is saved against them.
//
// ============================================================

const COURSE = [
  {
    level: 'A1',
    name: 'Découverte',
    en: 'Discovery',
    units: [
      {
        n: 1, name: 'Premiers pas', en: 'First steps',
        lessons: [
          { id: 'a1-u1-l1', title: 'Bonjour !', sub: 'Greetings, goodbyes, and tu vs vous' },
          { id: 'a1-u1-l2', title: "Je m'appelle…", sub: 'Introducing yourself' },
          { id: 'a1-u1-l3', title: "L'alphabet et les nombres", sub: 'Spelling your name, numbers 0–20, prices' },
          { id: 'a1-u1-l4', title: 'Un, une, le, la', sub: 'Nouns and gender' }
        ]
      },
      {
        n: 2, name: 'Qui es-tu ?', en: 'Who are you?',
        lessons: [
          { id: 'a1-u2-l1', title: 'Être', sub: 'I am, you are — nationalities and jobs' },
          { id: 'a1-u2-l2', title: 'Avoir', sub: 'Age, family, and il y a' },
          { id: 'a1-u2-l3', title: 'Regular -er verbs', sub: 'What you do and what you like' },
          { id: 'a1-u2-l4', title: 'Saying no, asking questions', sub: 'ne…pas, est-ce que, intonation' }
        ]
      },
      {
        n: 3, name: 'Ma vie', en: 'My life',
        lessons: [
          { id: 'a1-u3-l1', title: 'Describing people', sub: 'Adjectives: agreement and placement' },
          { id: 'a1-u3-l2', title: 'Mon, ma, mes', sub: 'Family and possessions' },
          { id: 'a1-u3-l3', title: 'Numbers to 100, days, the time', sub: 'Dates, schedules, phone numbers' },
          { id: 'a1-u3-l4', title: 'Question words', sub: 'où, quand, comment, pourquoi, quel' }
        ]
      },
      {
        n: 4, name: 'En ville', en: 'In town',
        lessons: [
          { id: 'a1-u4-l1', title: 'Aller', sub: 'Places in town — au, à la, aux' },
          { id: 'a1-u4-l2', title: 'Finding your way', sub: 'Directions and prepositions of place' },
          { id: 'a1-u4-l3', title: 'Faire, prendre, -ir and -re verbs', sub: 'Transport and activities' },
          { id: 'a1-u4-l4', title: 'Futur proche', sub: "What you're going to do" }
        ]
      },
      {
        n: 5, name: 'À table', en: 'Food and shopping',
        lessons: [
          { id: 'a1-u5-l1', title: 'Du, de la, des', sub: 'Food and quantities' },
          { id: 'a1-u5-l2', title: 'In a shop and a café', sub: 'je voudrais, ce / cette, prices' },
          { id: 'a1-u5-l3', title: 'Vouloir, pouvoir, devoir', sub: 'Wanting, being able to, having to' },
          { id: 'a1-u5-l4', title: 'The weather', sub: 'Expressions with avoir and faire' }
        ]
      },
      {
        n: 6, name: 'Au quotidien', en: 'Daily life',
        lessons: [
          { id: 'a1-u6-l1', title: 'Your daily routine', sub: 'Reflexive verbs' },
          { id: 'a1-u6-l2', title: 'Venir and countries', sub: 'venir de, en / au / aux' },
          { id: 'a1-u6-l3', title: 'The imperative', sub: 'Instructions and advice' },
          { id: 'a1-u6-l4', title: 'Telling your day', sub: 'A1 review' }
        ]
      }
    ]
  },

  {
    level: 'A2',
    name: 'Fondations',
    en: 'Foundations',
    units: [
      {
        n: 7, name: 'Le passé', en: 'The past',
        lessons: [
          { id: 'a2-u7-l1', title: 'Passé composé with avoir', sub: 'What you did' },
          { id: 'a2-u7-l2', title: 'Passé composé with être', sub: 'Movement verbs and agreement' },
          { id: 'a2-u7-l3', title: 'Passé composé in practice', sub: 'Negation, questions, reflexives' },
          { id: 'a2-u7-l4', title: "L'imparfait", sub: 'Habits and descriptions in the past' },
          { id: 'a2-u7-l5', title: 'Passé composé or imparfait?', sub: 'Choosing the right past' }
        ]
      },
      {
        n: 8, name: 'Les pronoms', en: 'Pronouns',
        lessons: [
          { id: 'a2-u8-l1', title: 'Le, la, les', sub: 'Direct object pronouns' },
          { id: 'a2-u8-l2', title: 'Lui, leur', sub: 'Indirect object pronouns' },
          { id: 'a2-u8-l3', title: 'Y and en', sub: 'Places and quantities' },
          { id: 'a2-u8-l4', title: 'Moi, toi, lui', sub: 'Stressed pronouns and pronoun order' }
        ]
      },
      {
        n: 9, name: 'Décrire et comparer', en: 'Describing and comparing',
        lessons: [
          { id: 'a2-u9-l1', title: 'Comparing', sub: 'Comparatives and superlatives' },
          { id: 'a2-u9-l2', title: 'Adverbs', sub: 'Formation and placement' },
          { id: 'a2-u9-l3', title: 'Beyond pas', sub: 'jamais, rien, personne, plus, ne…que' },
          { id: 'a2-u9-l4', title: 'Time markers', sub: 'depuis, il y a, pendant, dans' }
        ]
      },
      {
        n: 10, name: 'Projets', en: 'Plans',
        lessons: [
          { id: 'a2-u10-l1', title: 'Futur simple', sub: 'The future tense' },
          { id: 'a2-u10-l2', title: 'Linking ideas', sub: 'parce que, donc, alors, mais, quand' },
          { id: 'a2-u10-l3', title: 'Qui, que, où', sub: 'Relative pronouns' }
        ]
      },
      {
        n: 11, name: 'Poli et hypothétique', en: 'Polite and hypothetical',
        lessons: [
          { id: 'a2-u11-l1', title: 'Conditionnel présent', sub: 'Polite requests and wishes' },
          { id: 'a2-u11-l2', title: 'Si…', sub: 'si + présent, si + imparfait' },
          { id: 'a2-u11-l3', title: 'Indefinites', sub: "quelque chose, quelqu'un, tout, chaque" },
          { id: 'a2-u11-l4', title: 'Telling a story', sub: 'A2 review' }
        ]
      }
    ]
  },

  {
    level: 'B1',
    name: 'Indépendance',
    en: 'Independence',
    units: [
      {
        n: 12, name: 'Le subjonctif', en: 'The subjunctive',
        lessons: [
          { id: 'b1-u12-l1', title: 'Subjonctif: formation', sub: 'il faut que…' },
          { id: 'b1-u12-l2', title: 'Emotion, wish and doubt', sub: 'When the subjunctive is required' },
          { id: 'b1-u12-l3', title: 'Pour que, bien que, avant que', sub: 'Subjunctive or infinitive?' }
        ]
      },
      {
        n: 13, name: 'Raconter', en: 'Telling stories',
        lessons: [
          { id: 'b1-u13-l1', title: 'Plus-que-parfait', sub: 'The past before the past' },
          { id: 'b1-u13-l2', title: 'Narrating', sub: 'Three past tenses together' },
          { id: 'b1-u13-l3', title: 'Past participle agreement', sub: 'The full picture' },
          { id: 'b1-u13-l4', title: 'Passé simple', sub: 'Recognising it in books' }
        ]
      },
      {
        n: 14, name: 'Phrases complexes', en: 'Complex sentences',
        lessons: [
          { id: 'b1-u14-l1', title: 'Dont, ce qui, ce que', sub: 'More relative pronouns' },
          { id: 'b1-u14-l2', title: 'Lequel, auquel, duquel', sub: 'Relatives after prepositions' },
          { id: 'b1-u14-l3', title: 'Gérondif', sub: 'en faisant — and the present participle' },
          { id: 'b1-u14-l4', title: 'The passive voice', sub: 'être + participle, and alternatives' }
        ]
      },
      {
        n: 15, name: 'Argumenter', en: 'Reporting and arguing',
        lessons: [
          { id: 'b1-u15-l1', title: 'Reported speech', sub: 'il a dit que…' },
          { id: 'b1-u15-l2', title: 'Conditionnel passé', sub: 'Regrets and reproaches' },
          { id: 'b1-u15-l3', title: 'Futur antérieur', sub: 'Will have done' },
          { id: 'b1-u15-l4', title: 'Opinions', sub: 'Agreeing, disagreeing, nuancing' }
        ]
      },
      {
        n: 16, name: 'Le français réel', en: 'Real-world French',
        lessons: [
          { id: 'b1-u16-l1', title: 'Le mien, celui-ci', sub: 'Possessive and demonstrative pronouns' },
          { id: 'b1-u16-l2', title: 'Faire faire', sub: 'The causative' },
          { id: 'b1-u16-l3', title: 'Spoken French', sub: 'Dropped ne, on, everyday slang' }
        ]
      }
    ]
  }
];

window.COURSE = COURSE;
