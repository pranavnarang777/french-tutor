// ============================================================
// LESSONS
// ============================================================

const LESSONS = [
  {
    id: 'lesson-1',
    title: 'The French Alphabet & Pronunciation',
    subtitle: 'How French sounds — and why it does not look the way it sounds.',
    theory: `
      <p>French uses the same twenty-six letters as English, but the moment you read a word out loud the resemblance disappears. The letters are familiar; the sounds are not. What looks like a casual sister language is, phonetically, an entirely separate machine — and learning that machine is the first real task of learning French.</p>

      <p>Three sounds in particular tend to give new learners trouble. The first is the French <span class="fr">R</span> <button class="play-btn" data-text="R">▶</button>, which is produced at the back of the throat rather than the tip of the tongue — closer to a soft gargle than to the rolled R of Spanish or Italian. The second is the French <span class="fr">U</span> <button class="play-btn" data-text="U">▶</button> in words like <span class="fr">tu</span> <button class="play-btn" data-text="tu">▶</button> or <span class="fr">rue</span> <button class="play-btn" data-text="rue">▶</button>: to produce it, shape your lips as if to say "oo" while your tongue says "ee." It has no English equivalent and is worth practising in isolation. The third is the family of <em>nasal vowels</em> — the sounds spelled <span class="fr">an / en</span>, <span class="fr">in</span>, <span class="fr">on</span>, and <span class="fr">un</span> — where the air passes through the nose as well as the mouth. Think of <span class="fr">pain</span> <button class="play-btn" data-text="pain">▶</button>, <span class="fr">bon</span> <button class="play-btn" data-text="bon">▶</button>, or <span class="fr">blanc</span> <button class="play-btn" data-text="blanc">▶</button>.</p>

      <div class="rule-box">
        <strong>The four nasal vowels</strong><br>
        <span class="fr">an / en</span> — as in <span class="fr">enfant</span> <button class="play-btn" data-text="enfant">▶</button><br>
        <span class="fr">in / ain</span> — as in <span class="fr">pain</span> <button class="play-btn" data-text="pain">▶</button><br>
        <span class="fr">on</span> — as in <span class="fr">bon</span> <button class="play-btn" data-text="bon">▶</button><br>
        <span class="fr">un</span> — as in <span class="fr">un</span> <button class="play-btn" data-text="un">▶</button>
      </div>

      <p>The next thing to absorb is that most final consonants in French are silent. The city <span class="fr">Paris</span> <button class="play-btn" data-text="Paris">▶</button> ends in an "ee" sound, not an "s." The pronoun <span class="fr">vous</span> <button class="play-btn" data-text="vous">▶</button> is pronounced like "voo." The verb form <span class="fr">parlent</span> <button class="play-btn" data-text="ils parlent">▶</button> sounds exactly the same as <span class="fr">parle</span> — the final <em>nt</em> is invisible to the ear. There are four common consonants that often <em>are</em> pronounced at the end of a word — c, r, f, and l (you can remember them with the English word "careful") — but the safe assumption for everything else is silence.</p>

      <p>The catch is that those silent letters can wake up. When a word ending in a silent consonant is followed by a word beginning with a vowel sound, the consonant often slides forward and attaches to the next word. This is called <em>liaison</em>. So <span class="fr">vous</span> alone is "voo," but <span class="fr">vous avez</span> <button class="play-btn" data-text="vous avez">▶</button> becomes "voo-zah-vay." The same happens with <span class="fr">nous avons</span> <button class="play-btn" data-text="nous avons">▶</button> and <span class="fr">les enfants</span> <button class="play-btn" data-text="les enfants">▶</button>. Liaison is what makes spoken French sound like a single flowing stream rather than a sequence of separate words.</p>

      <p>Finally, French dislikes two vowels colliding. When a one-syllable word like <span class="fr">le</span>, <span class="fr">la</span>, or <span class="fr">je</span> meets a word beginning with a vowel, the vowel of the small word is dropped and replaced with an apostrophe. This is called <em>elision</em>. So you get <span class="fr">l'ami</span> <button class="play-btn" data-text="l'ami">▶</button> instead of "le ami," <span class="fr">l'eau</span> <button class="play-btn" data-text="l'eau">▶</button> instead of "la eau," and <span class="fr">j'aime</span> <button class="play-btn" data-text="j'aime">▶</button> instead of "je aime." Liaison and elision are two sides of the same instinct: French wants to keep its mouth moving smoothly from one vowel to the next.</p>
    `,
    examples: [
      { fr: 'une', en: 'a / one (feminine)', note: 'The pure French U — lips rounded, tongue forward.' },
      { fr: 'rue', en: 'street', note: 'Practise the throat R combined with the U.' },
      { fr: 'bonjour', en: 'hello', note: 'The "on" is nasal, the final R is pronounced.' },
      { fr: 'vous', en: 'you (formal/plural)', note: 'Final S is silent — "voo."' },
      { fr: 'enfant', en: 'child', note: 'Two nasal vowels in a row: an + an.' },
      { fr: 'pain', en: 'bread', note: 'Nasal "in" sound — no final N pronounced.' },
      { fr: 'bon', en: 'good', note: 'Nasal "on" — air passes through the nose.' },
      { fr: 'blanc', en: 'white', note: 'Nasal "an" — the final C is silent here.' },
      { fr: 'avec', en: 'with', note: 'The final C is pronounced — one of the "careful" letters.' },
      { fr: 'les amis', en: 'the friends', note: 'Liaison: the silent S of les attaches to amis → "lay-zah-mee."' }
    ],
    exercises: [
      {
        q: 'How is the final S in vous pronounced?',
        options: ['Like English Z', 'Like English S', 'It is silent', 'Like a soft H'],
        correct: 2,
        explanation: 'Final consonants in French are usually silent — vous is pronounced "voo."'
      },
      {
        q: 'Which word contains a nasal vowel?',
        options: ['rue', 'avec', 'bon', 'les'],
        correct: 2,
        explanation: 'The "on" in bon is a nasal vowel — air flows through the nose as you say it.'
      },
      {
        q: 'In the phrase "nous avons," what happens to the S of nous?',
        options: ['It stays silent', 'It is pronounced as Z and links to avons', 'It is dropped from spelling', 'It becomes T'],
        correct: 1,
        explanation: 'This is liaison: the silent S wakes up as a Z sound and links forward — "noo-zah-von."'
      },
      {
        q: 'Why do we say "l\'ami" instead of "le ami"?',
        options: ['To save time', 'Elision — French avoids two vowels colliding', 'It is a regional dialect', 'It is a spelling error'],
        correct: 1,
        explanation: 'Elision drops the vowel of small words like le/la/je before another vowel sound.'
      },
      {
        q: 'Which of these letters is most likely to be pronounced at the end of a word?',
        options: ['T', 'S', 'L', 'D'],
        correct: 2,
        explanation: 'C, R, F, and L (the "careful" letters) are commonly pronounced at the end of French words.'
      },
      {
        q: 'How is the French U in "tu" formed?',
        options: ['Same as English "oo" in food', 'Lips rounded for "oo," tongue placed for "ee"', 'Same as English "uh"', 'Like a German Ü is impossible to make'],
        correct: 1,
        explanation: 'The French U is a unique sound: round your lips as if to say "oo" while your tongue says "ee."'
      }
    ]
  },

  {
    id: 'lesson-2',
    title: 'Accents & How They Change Sounds',
    subtitle: 'Five small marks that change the meaning, the sound, or both.',
    theory: `
      <p>French uses five accent marks, and each one earns its place. They are not decoration. They tell you how to pronounce a vowel, sometimes which consonant rule to apply, and occasionally which word you are actually looking at. Once you understand the five marks, half of French spelling stops being arbitrary.</p>

      <p>The most common accent is the <em>acute accent</em>, written only over the letter E: <span class="fr">é</span>. It produces a closed, tight "ay" sound — though shorter and crisper than the English "ay" in "say." You hear it in <span class="fr">café</span> <button class="play-btn" data-text="café">▶</button>, <span class="fr">étudiant</span> <button class="play-btn" data-text="étudiant">▶</button>, and the past participles of every regular -er verb: <span class="fr">parlé</span> <button class="play-btn" data-text="parlé">▶</button>, <span class="fr">mangé</span> <button class="play-btn" data-text="mangé">▶</button>. Wherever you see é, the e is short, clean, and slightly smiling.</p>

      <p>The <em>grave accent</em> on E — <span class="fr">è</span> — does the opposite. It opens the sound up into something closer to the English "eh" in "bed," but longer and more leaning. Compare <span class="fr">mère</span> <button class="play-btn" data-text="mère">▶</button> ("mehr," mother) with <span class="fr">mer</span> <button class="play-btn" data-text="mer">▶</button> ("mehr," sea). The <em>circumflex</em> — <span class="fr">ê</span> — gives roughly the same open sound, often marking a historical S that has since disappeared from spelling: <span class="fr">fête</span> <button class="play-btn" data-text="fête">▶</button> was once <em>feste</em>, the same root as English "feast." On other vowels, the circumflex usually lengthens or rounds the sound — <span class="fr">pâte</span> <button class="play-btn" data-text="pâte">▶</button>, <span class="fr">côté</span> <button class="play-btn" data-text="côté">▶</button>.</p>

      <div class="rule-box">
        <strong>The five accents at a glance</strong><br>
        <span class="fr">é</span> — acute, closed "ay": <span class="fr">café</span><br>
        <span class="fr">è</span> — grave, open "eh": <span class="fr">mère</span><br>
        <span class="fr">ê / â / ô</span> — circumflex, longer / rounder: <span class="fr">fête, pâte, hôtel</span><br>
        <span class="fr">ç</span> — cedilla, softens C to S: <span class="fr">garçon</span><br>
        <span class="fr">ï / ë</span> — diaeresis, pronounce separately: <span class="fr">Noël, naïf</span>
      </div>

      <p>The <em>cedilla</em> — <span class="fr">ç</span> — only ever appears under a C, and only ever before A, O, or U. Its job is to make the C soft, the way it would be before E or I. Without it, <span class="fr">garçon</span> <button class="play-btn" data-text="garçon">▶</button> would be pronounced "gar-kon"; with it, the C becomes an S sound. The same logic explains <span class="fr">ça</span> <button class="play-btn" data-text="ça va">▶</button> ("that") and <span class="fr">français</span> <button class="play-btn" data-text="français">▶</button> itself. The <em>diaeresis</em> — <span class="fr">ï</span> or <span class="fr">ë</span> — is the rarest mark. It tells you that two vowels which would normally fuse into one sound must instead be pronounced separately. So <span class="fr">Noël</span> <button class="play-btn" data-text="Noël">▶</button> is "No-el," not "Nole," and <span class="fr">naïf</span> <button class="play-btn" data-text="naïf">▶</button> is "nah-eef," not "nafe."</p>

      <p>Finally, the grave accent shows up in two places where it does <em>not</em> change pronunciation at all. It distinguishes words that would otherwise be spelled identically: <span class="fr">a</span> means "has" while <span class="fr">à</span> means "to" or "at"; <span class="fr">ou</span> means "or" while <span class="fr">où</span> means "where." The mark is purely orthographic — your eye uses it; your mouth ignores it. But missing one of these accents in writing is the equivalent, in English, of confusing "its" and "it's." Small, but immediately visible.</p>
    `,
    examples: [
      { fr: 'café', en: 'coffee / café', note: 'é gives the closed "ay" sound.' },
      { fr: 'mère', en: 'mother', note: 'è opens the e to "eh."' },
      { fr: 'fête', en: 'celebration / party', note: 'Circumflex marks an old lost S (feast).' },
      { fr: 'hôtel', en: 'hotel', note: 'Circumflex over o — longer, rounder vowel.' },
      { fr: 'garçon', en: 'boy', note: 'Cedilla makes the c soft before o.' },
      { fr: 'ça va', en: 'how are you / it goes', note: 'Cedilla again — without it, "ka va."' },
      { fr: 'Noël', en: 'Christmas', note: 'Diaeresis — pronounce O and E separately.' },
      { fr: 'naïf', en: 'naive', note: 'Diaeresis splits the a and i into two sounds.' },
      { fr: 'à', en: 'to / at', note: 'No sound change — distinguishes from "a" (has).' },
      { fr: 'où', en: 'where', note: 'No sound change — distinguishes from "ou" (or).' }
    ],
    exercises: [
      {
        q: 'What sound does é (acute) produce?',
        options: ['Open "eh"', 'Closed "ay"', 'Silent E', 'Nasal vowel'],
        correct: 1,
        explanation: 'The acute accent gives a closed, tight "ay" sound — as in café.'
      },
      {
        q: 'Which is correct for "to Paris"?',
        options: ['a Paris', 'à Paris', 'â Paris', 'è Paris'],
        correct: 1,
        explanation: 'À with a grave accent means "to" or "at." Plain "a" means "has."'
      },
      {
        q: 'What does the cedilla under ç do?',
        options: ['Makes the c hard like K', 'Makes the c soft like S', 'Silences the c', 'Doubles the c'],
        correct: 1,
        explanation: 'The cedilla forces the c to be pronounced as S before a, o, or u.'
      },
      {
        q: 'How do you pronounce Noël?',
        options: ['Like English "Knoll"', 'No-el — two separate syllables', 'Nool', 'N-ole'],
        correct: 1,
        explanation: 'The diaeresis on ë tells you to pronounce O and E separately.'
      },
      {
        q: 'Which word means "where"?',
        options: ['ou', 'où', 'oû', 'óu'],
        correct: 1,
        explanation: 'Où with a grave accent means "where." Plain "ou" means "or."'
      },
      {
        q: 'Why is there a circumflex in fête?',
        options: ['It indicates plural', 'It marks an old lost S (originally "feste")', 'It is for stress', 'It softens the F'],
        correct: 1,
        explanation: 'The circumflex often marks an S that historical French dropped — feste became fête.'
      }
    ]
  },

  {
    id: 'lesson-3',
    title: 'Gender & Articles',
    subtitle: 'Why "the table" is feminine — and what that quietly changes about every sentence.',
    theory: `
      <p>Every French noun has a grammatical gender. <span class="fr">Le livre</span> <button class="play-btn" data-text="le livre">▶</button> (the book) is masculine; <span class="fr">la table</span> <button class="play-btn" data-text="la table">▶</button> (the table) is feminine. The choice is not logical and not negotiable. <span class="fr">Le féminisme</span> <button class="play-btn" data-text="le féminisme">▶</button> is masculine; <span class="fr">la masculinité</span> <button class="play-btn" data-text="la masculinité">▶</button> is feminine. Gender is simply a property of the word, the way length is a property of a line — you record it when you first meet the noun, and you carry it with you forever after.</p>

      <p>It matters because gender does not stay inside the noun. It leaks out and dresses every word around it. The article must agree (<span class="fr">le</span> or <span class="fr">la</span>); the adjective must agree (<span class="fr">petit</span> or <span class="fr">petite</span>); and in the past tense, certain past participles must agree too. Get the gender wrong and the whole sentence is quietly wrong in three places at once. This is why learning a noun without its article — memorising "table" instead of <span class="fr">la table</span> — is a small disaster you keep paying for later.</p>

      <p>French has two kinds of articles. <em>Definite articles</em> point to a specific thing, like English "the": <span class="fr">le</span> (masculine singular), <span class="fr">la</span> (feminine singular), <span class="fr">l'</span> (either gender before a vowel — elision again), and <span class="fr">les</span> (plural, both genders). <em>Indefinite articles</em> are closer to "a" or "some": <span class="fr">un</span> (masculine), <span class="fr">une</span> (feminine), and <span class="fr">des</span> (plural). So <span class="fr">un livre</span> <button class="play-btn" data-text="un livre">▶</button> is "a book," <span class="fr">une table</span> <button class="play-btn" data-text="une table">▶</button> is "a table," and <span class="fr">des amis</span> <button class="play-btn" data-text="des amis">▶</button> is "some friends." Notice that French uses an article almost always — far more than English. "I like coffee" is <span class="fr">j'aime le café</span> <button class="play-btn" data-text="j'aime le café">▶</button>, not "j'aime café."</p>

      <div class="rule-box">
        <strong>Useful gender endings</strong><br>
        <strong>Feminine:</strong> -tion, -sion, -ette, -ance, -ence, -ité, -ie<br>
        <em>la nation, la décision, la chouette, la patience, la liberté, la vie</em><br><br>
        <strong>Masculine:</strong> -age, -ment, -eau, -isme, -oir<br>
        <em>le voyage, le moment, le bureau, le tourisme, le miroir</em><br><br>
        These are patterns, not laws — exceptions exist (<em>la plage, la peau</em>) — but knowing them helps you guess correctly most of the time.
      </div>

      <p>French also has a tidy habit of merging certain prepositions with the definite article when they meet. When <span class="fr">à</span> ("to/at") bumps into <span class="fr">le</span>, the two collapse into <span class="fr">au</span>: <span class="fr">au cinéma</span> <button class="play-btn" data-text="au cinéma">▶</button> ("to the cinema"). With <span class="fr">les</span>, they become <span class="fr">aux</span>: <span class="fr">aux États-Unis</span> <button class="play-btn" data-text="aux États-Unis">▶</button>. The same happens with <span class="fr">de</span> ("of/from"): <span class="fr">de + le = du</span>, <span class="fr">de + les = des</span>. So "of the wine" is <span class="fr">du vin</span> <button class="play-btn" data-text="du vin">▶</button> and "from the United States" is <span class="fr">des États-Unis</span>. No contraction happens with <span class="fr">la</span> or <span class="fr">l'</span>: you simply say <span class="fr">à la maison</span> <button class="play-btn" data-text="à la maison">▶</button> and <span class="fr">de l'eau</span> <button class="play-btn" data-text="de l'eau">▶</button>.</p>

      <p>One discipline will save you months of confusion: always learn a new noun together with its article. Not "voiture, car" but <span class="fr">une voiture</span>, car. Not "problème, problem" but <span class="fr">un problème</span>, problem (yes — masculine, despite the final E). The article is part of the word's identity, and trying to bolt it on later is harder than learning it from the start.</p>
    `,
    examples: [
      { fr: 'le livre', en: 'the book', note: 'Masculine — many concrete objects.' },
      { fr: 'la table', en: 'the table', note: 'Feminine — even though the object has no gender.' },
      { fr: "l'ami", en: 'the friend (m.)', note: 'Elision before a vowel — written l\'.' },
      { fr: 'une voiture', en: 'a car', note: 'Feminine — a useful one to remember.' },
      { fr: 'un problème', en: 'a problem', note: 'Masculine — despite ending in -e.' },
      { fr: 'la nation', en: 'the nation', note: '-tion ending → almost always feminine.' },
      { fr: 'le voyage', en: 'the trip', note: '-age ending → usually masculine.' },
      { fr: 'au cinéma', en: 'to the cinema', note: 'à + le contracts to au.' },
      { fr: 'du vin', en: 'some wine / of the wine', note: 'de + le contracts to du.' },
      { fr: 'à la maison', en: 'at home / to the house', note: 'No contraction with la.' }
    ],
    exercises: [
      {
        q: 'Which article goes with "table"?',
        options: ['le', 'la', 'un', "l'"],
        correct: 1,
        explanation: 'Table is feminine in French, so la table.'
      },
      {
        q: 'How do you say "to the cinema"?',
        options: ['à le cinéma', 'au cinéma', 'à la cinéma', 'aux cinéma'],
        correct: 1,
        explanation: 'À + le must contract to au. À le is not allowed.'
      },
      {
        q: 'Which is the correct contraction for "from the wine"?',
        options: ['de le vin', 'du vin', 'des vin', "de l'vin"],
        correct: 1,
        explanation: 'De + le contracts to du. So "du vin" — "of/from the wine."'
      },
      {
        q: 'A noun ending in -tion is almost always:',
        options: ['Masculine', 'Feminine', 'Neuter', 'Unpredictable'],
        correct: 1,
        explanation: 'Endings -tion, -sion, -ance, -ence, -ité are reliably feminine.'
      },
      {
        q: 'A noun ending in -ment is almost always:',
        options: ['Masculine', 'Feminine', 'Plural', 'Verb-only'],
        correct: 0,
        explanation: 'Endings -age, -ment, -eau, -isme tend to be masculine.'
      },
      {
        q: 'Which is correct?',
        options: ['de la maison', 'du maison', 'des maison', 'de le maison'],
        correct: 0,
        explanation: 'No contraction happens with la — de + la stays as "de la."'
      },
      {
        q: 'Why is "l\'ami" written with an apostrophe?',
        options: ['Possession', 'Elision — le drops its e before a vowel', 'Plural marker', 'It is a typo'],
        correct: 1,
        explanation: 'Le and la become l\' before a word starting with a vowel sound.'
      },
      {
        q: 'How do you say "the friends" (mixed group)?',
        options: ['le amis', 'la amis', 'les amis', "l'amis"],
        correct: 2,
        explanation: 'Les is the plural article for both genders — "les amis" (with liaison, "lay-zah-mee").'
      }
    ]
  },

  {
    id: 'lesson-4',
    title: 'Present Tense: être, avoir & Regular -er Verbs',
    subtitle: 'Two irregular verbs and one pattern that unlocks most of spoken French.',
    theory: `
      <p>The French present tense covers more ground than its English cousin. <span class="fr">Je parle français</span> <button class="play-btn" data-text="je parle français">▶</button> can mean "I speak French," "I am speaking French," or even "I do speak French" — context decides. There is no separate continuous form in French. One tense, three English shades. That is good news: you have less to memorise than you might think.</p>

      <p>The complication is that every subject pronoun gets its own ending. English makes life easy: "I speak, you speak, we speak, they speak" — only "he speaks" stands out. French changes the verb six times. The six subject pronouns to know are <span class="fr">je</span> (I), <span class="fr">tu</span> (you, singular informal), <span class="fr">il / elle / on</span> (he / she / one), <span class="fr">nous</span> (we), <span class="fr">vous</span> (you, plural or formal), and <span class="fr">ils / elles</span> (they). <span class="fr">On</span> deserves a note: it formally means "one" or "people in general," but in spoken French it is the default way to say "we." <span class="fr">On va au café</span> <button class="play-btn" data-text="on va au café">▶</button> is heard a hundred times more often than <span class="fr">nous allons au café</span>.</p>

      <p>The two verbs you must memorise first are <span class="fr">être</span> ("to be") and <span class="fr">avoir</span> ("to have"). They are completely irregular, they are everywhere, and they will appear in almost every sentence you produce in your first year. There is no shortcut — learn them by heart, out loud, until they are reflex.</p>

      <div class="rule-box">
        <strong>être — to be</strong><br>
        je suis <button class="play-btn" data-text="je suis">▶</button> &nbsp; tu es <button class="play-btn" data-text="tu es">▶</button> &nbsp; il / elle est <button class="play-btn" data-text="il est">▶</button><br>
        nous sommes <button class="play-btn" data-text="nous sommes">▶</button> &nbsp; vous êtes <button class="play-btn" data-text="vous êtes">▶</button> &nbsp; ils / elles sont <button class="play-btn" data-text="ils sont">▶</button><br><br>
        <strong>avoir — to have</strong><br>
        j'ai <button class="play-btn" data-text="j'ai">▶</button> &nbsp; tu as <button class="play-btn" data-text="tu as">▶</button> &nbsp; il / elle a <button class="play-btn" data-text="il a">▶</button><br>
        nous avons <button class="play-btn" data-text="nous avons">▶</button> &nbsp; vous avez <button class="play-btn" data-text="vous avez">▶</button> &nbsp; ils / elles ont <button class="play-btn" data-text="ils ont">▶</button>
      </div>

      <p>Once those two are solid, the rest is much easier — because most French verbs end in <span class="fr">-er</span> and they all conjugate the same way. Take <span class="fr">parler</span> ("to speak"). Drop the <span class="fr">-er</span> to find the stem <span class="fr">parl-</span>, then add the six endings: <span class="fr">-e, -es, -e, -ons, -ez, -ent</span>. So you get <span class="fr">je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent</span>. The pattern works for thousands of verbs: <span class="fr">aimer</span> (to like), <span class="fr">habiter</span> (to live), <span class="fr">travailler</span> (to work), <span class="fr">manger</span> (to eat), <span class="fr">regarder</span> (to watch), and so on. Master one, master them all.</p>

      <div class="rule-box">
        <strong>Regular -er pattern: parler (to speak)</strong><br>
        je parle <button class="play-btn" data-text="je parle">▶</button> &nbsp; tu parles <button class="play-btn" data-text="tu parles">▶</button> &nbsp; il / elle parle <button class="play-btn" data-text="il parle">▶</button><br>
        nous parlons <button class="play-btn" data-text="nous parlons">▶</button> &nbsp; vous parlez <button class="play-btn" data-text="vous parlez">▶</button> &nbsp; ils / elles parlent <button class="play-btn" data-text="ils parlent">▶</button><br>
        <em>Note: je / tu / il / ils forms all sound identical aloud — the endings -e, -es, -ent are silent.</em>
      </div>

      <p>One more piece of vocabulary worth filing now: French uses <span class="fr">avoir</span> ("to have") where English uses "to be" for several common states. You do not say "I am hungry" — you say <span class="fr">j'ai faim</span> <button class="play-btn" data-text="j'ai faim">▶</button>, literally "I have hunger." You do not say "I am right" — you say <span class="fr">j'ai raison</span> <button class="play-btn" data-text="j'ai raison">▶</button>, "I have reason." The same goes for <span class="fr">avoir soif</span> (to be thirsty), <span class="fr">avoir froid</span> (to be cold), <span class="fr">avoir chaud</span> (to be hot), <span class="fr">avoir peur</span> (to be afraid), and <span class="fr">avoir tort</span> (to be wrong). It is a small list, but you will reach for it every day.</p>
    `,
    examples: [
      { fr: 'Je suis fatigué.', en: 'I am tired.', note: 'être — describing a state.' },
      { fr: "J'ai vingt ans.", en: 'I am twenty years old.', note: 'In French you "have" your age.' },
      { fr: 'Nous sommes amis.', en: 'We are friends.', note: 'Plural of être.' },
      { fr: 'Tu as un chien?', en: 'Do you have a dog?', note: 'Avoir + indefinite article, rising intonation question.' },
      { fr: 'On parle français à Bruxelles.', en: 'They / people speak French in Brussels.', note: 'On used in generic sense.' },
      { fr: 'Vous habitez où?', en: 'Where do you live?', note: 'Regular -er verb habiter.' },
      { fr: 'Ils mangent au restaurant.', en: 'They eat / are eating at the restaurant.', note: 'Final -ent is silent.' },
      { fr: "J'aime le café.", en: 'I like coffee.', note: 'Aimer + definite article for general likes.' },
      { fr: "J'ai faim.", en: 'I am hungry.', note: 'Avoir expression — literally "I have hunger."' },
      { fr: 'Elle a froid.', en: 'She is cold.', note: 'Another avoir expression.' }
    ],
    exercises: [
      {
        q: 'Conjugate: nous ___ (être)',
        options: ['sont', 'sommes', 'êtes', 'est'],
        correct: 1,
        explanation: 'Nous sommes — first person plural of être.'
      },
      {
        q: 'Conjugate: vous ___ (avoir)',
        options: ['ont', 'avons', 'avez', 'as'],
        correct: 2,
        explanation: 'Vous avez — second person plural of avoir.'
      },
      {
        q: 'Conjugate: elle ___ (parler)',
        options: ['parle', 'parles', 'parlons', 'parlent'],
        correct: 0,
        explanation: 'Elle parle — third person singular -er pattern is stem + e.'
      },
      {
        q: 'How do you say "I am hungry" in French?',
        options: ['Je suis faim', "J'ai faim", "Je m'ai faim", 'Moi faim'],
        correct: 1,
        explanation: 'French uses avoir for hunger — j\'ai faim, literally "I have hunger."'
      },
      {
        q: 'Choose the correct verb: Il ___ vingt ans.',
        options: ['est', 'a', 'as', 'sont'],
        correct: 1,
        explanation: 'In French, age is expressed with avoir — il a vingt ans ("he has twenty years").'
      },
      {
        q: 'Choose the correct verb: Nous ___ étudiants.',
        options: ['avons', 'sommes', 'êtes', 'ont'],
        correct: 1,
        explanation: 'To say "we are students," use être — nous sommes étudiants.'
      },
      {
        q: 'Which is the informal spoken way to say "we eat"?',
        options: ['Nous mangeons', 'On mange', 'Vous mangez', 'Ils mangent'],
        correct: 1,
        explanation: 'In casual spoken French, on + il/elle form replaces nous — on mange.'
      },
      {
        q: "What is the correct conjugation: ils ___ (avoir)?",
        options: ['avez', 'avons', 'ont', 'as'],
        correct: 2,
        explanation: 'Ils ont — third person plural of avoir.'
      }
    ]
  },

  {
    id: 'lesson-5',
    title: 'Negation, Questions & Sentence Structure',
    subtitle: 'How to say no, how to ask, and where words land in a French sentence.',
    theory: `
      <p>French negation comes in two parts. The conjugated verb is wrapped between <span class="fr">ne</span> on one side and <span class="fr">pas</span> on the other. <span class="fr">Je parle</span> ("I speak") becomes <span class="fr">je ne parle pas</span> <button class="play-btn" data-text="je ne parle pas">▶</button> ("I do not speak"). The structure is rigid: subject — ne — verb — pas. When the verb starts with a vowel, <span class="fr">ne</span> elides to <span class="fr">n'</span>: <span class="fr">il n'aime pas le café</span> <button class="play-btn" data-text="il n'aime pas le café">▶</button>. There is no equivalent of English "do not" — the auxiliary is not needed.</p>

      <p>Here is the catch that no textbook quite prepares you for: in spoken French, the <span class="fr">ne</span> is almost always dropped. A native speaker will say <span class="fr">je sais pas</span> <button class="play-btn" data-text="je sais pas">▶</button> rather than <span class="fr">je ne sais pas</span>, and <span class="fr">c'est pas vrai</span> <button class="play-btn" data-text="c'est pas vrai">▶</button> rather than <span class="fr">ce n'est pas vrai</span>. In writing and in formal speech, the full <em>ne...pas</em> is expected. In casual conversation, only <em>pas</em> survives. Learn both — and know which one you are using.</p>

      <p>There are three common ways to ask a question in French, ordered from most casual to most formal. The first is simply to raise your intonation at the end of a statement: <span class="fr">Tu parles français?</span> <button class="play-btn" data-text="tu parles français?">▶</button>. Nothing changes structurally; your voice does all the work. The second is to add <span class="fr">est-ce que</span> in front: <span class="fr">Est-ce que tu parles français?</span> <button class="play-btn" data-text="est-ce que tu parles français?">▶</button>. Literally "is it that you speak French?" — a slightly clumsy phrase that French speakers stopped hearing as clumsy. The third is <em>inversion</em>: flip the subject and verb and join them with a hyphen — <span class="fr">Parles-tu français?</span> <button class="play-btn" data-text="parles-tu français?">▶</button>. Inversion is formal, common in writing, and rarer in everyday speech.</p>

      <div class="rule-box">
        <strong>Question words</strong><br>
        <span class="fr">qui</span> — who &nbsp; <span class="fr">que / quoi</span> — what<br>
        <span class="fr">où</span> — where &nbsp; <span class="fr">quand</span> — when<br>
        <span class="fr">comment</span> — how &nbsp; <span class="fr">pourquoi</span> — why<br>
        <span class="fr">combien</span> — how much / how many<br>
        <em>Combine with est-ce que for natural speech: Où est-ce que tu habites?</em>
      </div>

      <p>French sentence order is mostly the same as English: Subject — Verb — Object. <span class="fr">Marie mange une pomme</span> <button class="play-btn" data-text="Marie mange une pomme">▶</button> ("Marie eats an apple") parses exactly as the English does. The thing that catches new learners off guard is adjective placement. In English, adjectives go before the noun: "a big house." In French, the default is the opposite — adjectives go <em>after</em> the noun: <span class="fr">une maison grande</span>. Actually — that example is wrong, and it shows the next rule.</p>

      <p>A small, frequent group of adjectives goes <em>before</em> the noun. They are sometimes taught with the acronym BANGS — <strong>B</strong>eauty, <strong>A</strong>ge, <strong>N</strong>umber, <strong>G</strong>oodness, <strong>S</strong>ize. So <span class="fr">beau, joli, jeune, vieux, premier, deuxième, bon, mauvais, petit, grand</span> all go before. You say <span class="fr">une petite maison</span> <button class="play-btn" data-text="une petite maison">▶</button>, not "une maison petite." But for adjectives outside that family — colours, nationalities, shapes, most descriptions — they go after: <span class="fr">une voiture rouge</span> <button class="play-btn" data-text="une voiture rouge">▶</button>, <span class="fr">un homme français</span> <button class="play-btn" data-text="un homme français">▶</button>. Some adjectives even change meaning based on position: <span class="fr">un grand homme</span> means "a great man," while <span class="fr">un homme grand</span> means "a tall man." Position is grammar; position is also meaning.</p>
    `,
    examples: [
      { fr: 'Je ne parle pas anglais.', en: 'I do not speak English.', note: 'Standard written negation — ne...pas around the verb.' },
      { fr: "Je sais pas.", en: "I don't know.", note: 'Casual spoken French — ne is dropped.' },
      { fr: 'Tu parles français?', en: 'Do you speak French?', note: 'Casual question — just rising intonation.' },
      { fr: 'Est-ce que vous avez du café?', en: 'Do you have coffee?', note: 'Est-ce que — the everyday neutral form.' },
      { fr: 'Parlez-vous français?', en: 'Do you speak French?', note: 'Inversion — formal and written register.' },
      { fr: 'Où habitez-vous?', en: 'Where do you live?', note: 'Question word + inversion.' },
      { fr: 'Pourquoi est-ce que tu pleures?', en: 'Why are you crying?', note: 'Question word + est-ce que — natural speech.' },
      { fr: 'Une petite maison rouge.', en: 'A small red house.', note: 'Petite (BANGS) before, rouge (colour) after.' },
      { fr: 'Un grand homme.', en: 'A great man.', note: 'Before the noun — figurative meaning.' },
      { fr: 'Un homme grand.', en: 'A tall man.', note: 'After the noun — literal meaning.' }
    ],
    exercises: [
      {
        q: 'How do you say "I do not speak French"?',
        options: ['Je parle pas français', 'Je ne parle français', 'Je ne parle pas français', "Je n'parle français pas"],
        correct: 2,
        explanation: 'Standard negation wraps the verb: subject — ne — verb — pas.'
      },
      {
        q: 'In spoken casual French, what often disappears from negation?',
        options: ['pas', 'ne', 'the subject', 'the verb'],
        correct: 1,
        explanation: 'Native speakers routinely drop ne, keeping only pas: "je sais pas."'
      },
      {
        q: 'Which is the most formal question form?',
        options: ['Tu parles français?', 'Est-ce que tu parles français?', 'Parles-tu français?', 'You parles français?'],
        correct: 2,
        explanation: 'Inversion (verb-subject) is the most formal, common in writing.'
      },
      {
        q: 'Which is correct?',
        options: ['Une maison petite', 'Une petite maison', 'Petite une maison', 'Une maison une petite'],
        correct: 1,
        explanation: 'Petit/petite is a BANGS adjective — size — so it goes before the noun.'
      },
      {
        q: 'Which is correct?',
        options: ['Une rouge voiture', 'Une voiture rouge', 'Une voiture une rouge', 'Rouge voiture une'],
        correct: 1,
        explanation: 'Colours go after the noun in French — une voiture rouge.'
      },
      {
        q: 'What does "un grand homme" mean (vs. "un homme grand")?',
        options: ['A tall man', 'A great man', 'An older man', 'A young man'],
        correct: 1,
        explanation: 'Before the noun, grand has the figurative meaning "great." After, it means "tall."'
      },
      {
        q: 'What does "combien" mean?',
        options: ['When', 'How much / how many', 'Why', 'Where'],
        correct: 1,
        explanation: 'Combien asks about quantity — how much or how many.'
      },
      {
        q: 'How do you ask "Where do you live?" using est-ce que?',
        options: ['Où est-ce que tu habites?', "Où tu habites est-ce que?", 'Est-ce que où tu habites?', 'Tu habites est-ce que où?'],
        correct: 0,
        explanation: 'Question word + est-ce que + subject + verb — the standard everyday pattern.'
      }
    ]
  },

  {
    id: 'lesson-6',
    title: 'Passé Composé: Avoir Verbs',
    subtitle: 'How to talk about what you did — with avoir as the auxiliary.',
    theory: `
      <p>The passé composé is the main past tense in spoken French. Where English splits the past into several distinct shapes — "I ate," "I have eaten," "I was eating" — French folds nearly all completed past actions in conversation into a single tense. <span class="fr">J'ai mangé</span> <button class="play-btn" data-text="j'ai mangé">▶</button> covers all three. If you can use the passé composé confidently, you can recount most of your day in French.</p>

      <p>It is built from two parts. The first is an auxiliary verb — either <span class="fr">avoir</span> or <span class="fr">être</span> — conjugated in the present tense. The second is the <em>past participle</em> of the main verb. Put them side by side and you have the past: <span class="fr">j'ai parlé</span> ("I spoke"), <span class="fr">tu as fini</span> ("you finished"), <span class="fr">il a vendu</span> ("he sold"). This lesson covers verbs that take <span class="fr">avoir</span> as their auxiliary — and that is most of them.</p>

      <p>The past participle of regular verbs follows a clean pattern keyed to the infinitive's ending. For <span class="fr">-er</span> verbs, drop <span class="fr">-er</span> and add <span class="fr">-é</span>: <span class="fr">parler</span> → <span class="fr">parlé</span>, <span class="fr">manger</span> → <span class="fr">mangé</span>, <span class="fr">regarder</span> → <span class="fr">regardé</span>. For <span class="fr">-ir</span> verbs, drop <span class="fr">-ir</span> and add <span class="fr">-i</span>: <span class="fr">finir</span> → <span class="fr">fini</span>, <span class="fr">choisir</span> → <span class="fr">choisi</span>. For <span class="fr">-re</span> verbs, drop <span class="fr">-re</span> and add <span class="fr">-u</span>: <span class="fr">vendre</span> → <span class="fr">vendu</span>, <span class="fr">attendre</span> → <span class="fr">attendu</span>. Three patterns; thousands of verbs.</p>

      <div class="rule-box">
        <strong>Irregular past participles — memorise these</strong><br>
        <span class="fr">avoir</span> → <span class="fr">eu</span> <button class="play-btn" data-text="j'ai eu">▶</button>
        &nbsp; <span class="fr">être</span> → <span class="fr">été</span> <button class="play-btn" data-text="j'ai été">▶</button>
        &nbsp; <span class="fr">faire</span> → <span class="fr">fait</span> <button class="play-btn" data-text="j'ai fait">▶</button><br>
        <span class="fr">prendre</span> → <span class="fr">pris</span> <button class="play-btn" data-text="j'ai pris">▶</button>
        &nbsp; <span class="fr">voir</span> → <span class="fr">vu</span> <button class="play-btn" data-text="j'ai vu">▶</button>
        &nbsp; <span class="fr">pouvoir</span> → <span class="fr">pu</span> <button class="play-btn" data-text="j'ai pu">▶</button><br>
        <span class="fr">vouloir</span> → <span class="fr">voulu</span>
        &nbsp; <span class="fr">boire</span> → <span class="fr">bu</span>
        &nbsp; <span class="fr">lire</span> → <span class="fr">lu</span>
        &nbsp; <span class="fr">écrire</span> → <span class="fr">écrit</span><br>
        <span class="fr">mettre</span> → <span class="fr">mis</span>
        &nbsp; <span class="fr">savoir</span> → <span class="fr">su</span>
      </div>

      <p>The irregular past participles do not follow the regular pattern, and they are exactly the verbs you will use most. There is no shortcut here — sit with the list above, say each one out loud paired with <span class="fr">j'ai</span>, and let your ear absorb it. <span class="fr">J'ai eu, j'ai été, j'ai fait, j'ai pris, j'ai vu</span>. The rhythm matters more than the rule.</p>

      <p>One final point, and it is the one English speakers most often get wrong: with <span class="fr">avoir</span> verbs, the past participle does <em>not</em> change to match the subject. <span class="fr">J'ai mangé, elle a mangé, ils ont mangé, nous avons mangé</span> — the participle stays as <span class="fr">mangé</span> every single time. No <span class="fr">-e</span> for feminine, no <span class="fr">-s</span> for plural. Agreement does exist in French, but with <span class="fr">avoir</span> it only kicks in under very specific conditions covered in a later lesson. For now: with <span class="fr">avoir</span>, the participle is fixed.</p>
    `,
    examples: [
      { fr: "J'ai mangé une pizza.", en: 'I ate a pizza.', note: 'avoir + mangé — regular -er verb.' },
      { fr: 'Tu as fini ton travail?', en: 'Did you finish your work?', note: 'avoir + fini — regular -ir verb.' },
      { fr: 'Il a vendu sa voiture.', en: 'He sold his car.', note: 'avoir + vendu — regular -re verb.' },
      { fr: 'Nous avons vu un bon film.', en: 'We saw a good film.', note: 'Irregular: voir → vu.' },
      { fr: 'Vous avez pris le métro?', en: 'Did you take the metro?', note: 'Irregular: prendre → pris.' },
      { fr: 'Elles ont fait du sport.', en: 'They did sport.', note: 'Irregular: faire → fait. Participle does not agree with elles.' },
      { fr: "J'ai eu une réunion ce matin.", en: 'I had a meeting this morning.', note: 'Irregular: avoir → eu.' },
      { fr: 'Il a bu un café.', en: 'He drank a coffee.', note: 'Irregular: boire → bu.' },
      { fr: 'Nous avons parlé pendant une heure.', en: 'We talked for an hour.', note: 'Regular -er — parler → parlé.' },
      { fr: 'Elle a écrit un email.', en: 'She wrote an email.', note: 'Irregular: écrire → écrit. No agreement with elle.' }
    ],
    exercises: [
      {
        q: "Complete: J'___ mangé une salade.",
        options: ['ai', 'as', 'a', 'avons'],
        correct: 0,
        explanation: "Passé composé with avoir: j'ai + past participle. J'ai mangé."
      },
      {
        q: 'Complete: Nous ___ fini le projet.',
        options: ['avons', 'avez', 'ont', 'sommes'],
        correct: 0,
        explanation: 'Avoir: nous avons. Sommes is être — the wrong auxiliary here.'
      },
      {
        q: 'What is the past participle of parler?',
        options: ['parlé', 'parler', 'parlant', 'parlons'],
        correct: 0,
        explanation: 'Regular -er verbs: drop -er, add -é. Parler → parlé.'
      },
      {
        q: 'What is the past participle of finir?',
        options: ['fini', 'finir', 'finissant', 'finit'],
        correct: 0,
        explanation: 'Regular -ir verbs: drop -ir, add -i. Finir → fini.'
      },
      {
        q: 'What is the past participle of faire?',
        options: ['fait', 'faisé', 'fairu', 'fairé'],
        correct: 0,
        explanation: 'Faire is irregular: the past participle is fait. Must be memorised.'
      },
      {
        q: 'Complete: Elle ___ vu un film hier soir.',
        options: ['a', 'est', 'ai', 'ont'],
        correct: 0,
        explanation: 'Avoir: elle a. Voir uses avoir, not être.'
      },
      {
        q: 'Complete: Vous ___ pris le bus?',
        options: ['avez', 'êtes', 'ont', 'avons'],
        correct: 0,
        explanation: 'Avoir: vous avez. Prendre uses avoir as its auxiliary.'
      },
      {
        q: 'Which sentence is correct?',
        options: ["J'ai mangé", 'Je suis mangé', "J'ai mangée", 'Je mangé'],
        correct: 0,
        explanation: "Manger uses avoir. The past participle doesn't agree with the subject with avoir verbs: mangé, not mangée."
      }
    ]
  },

  {
    id: 'lesson-7',
    title: 'Passé Composé: Être Verbs',
    subtitle: 'Motion and state verbs that use être — and why the participle changes.',
    theory: `
      <p>A small but very common group of verbs breaks the pattern from the previous lesson: instead of <span class="fr">avoir</span>, they take <span class="fr">être</span> as their auxiliary in the passé composé. <span class="fr">Je suis allé</span> <button class="play-btn" data-text="je suis allé">▶</button> ("I went"), not "j'ai allé." These verbs are mostly verbs of motion or change of state — coming, going, arriving, leaving, being born, dying — and there is a logic to them worth feeling rather than just memorising. They all describe the subject <em>moving through</em> or <em>passing into</em> a new state.</p>

      <p>Traditional French teaching gives you the list as an acronym: <strong>DR &amp; MRS VANDERTRAMP</strong> — <span class="fr">Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir</span>. It is ugly, but it works. Memorise the acronym or memorise the family — either way, when you reach for the passé composé of one of these verbs, your hand should go straight to <span class="fr">être</span>. All <em>reflexive</em> verbs (the ones with <span class="fr">se</span>) also use <span class="fr">être</span>, though those are a topic for later.</p>

      <p>Here is the crucial difference from the previous lesson: with <span class="fr">être</span> verbs, the past participle <em>agrees</em> with the subject in gender and number. Add <span class="fr">-e</span> for feminine, <span class="fr">-s</span> for masculine plural, <span class="fr">-es</span> for feminine plural. So the same verb takes four written forms: <span class="fr">il est allé</span> <button class="play-btn" data-text="il est allé">▶</button>, <span class="fr">elle est allée</span> <button class="play-btn" data-text="elle est allée">▶</button>, <span class="fr">ils sont allés</span> <button class="play-btn" data-text="ils sont allés">▶</button>, <span class="fr">elles sont allées</span> <button class="play-btn" data-text="elles sont allées">▶</button>.</p>

      <div class="rule-box">
        <strong>Agreement with être — the four endings</strong><br>
        masculine singular: <span class="fr">allé</span> &nbsp; (no change)<br>
        feminine singular: <span class="fr">allée</span> &nbsp; (+ e)<br>
        masculine plural: <span class="fr">allés</span> &nbsp; (+ s)<br>
        feminine plural: <span class="fr">allées</span> &nbsp; (+ es)<br>
        <em>This agreement is not optional. Getting it right is one of the markers of fluency, and in some cases (allé vs. allée, parti vs. partie) it even affects pronunciation in liaison contexts.</em>
      </div>

      <p>For most verbs in the list, the agreement endings are silent — <span class="fr">allé</span> and <span class="fr">allée</span> sound identical aloud. But in writing they are non-negotiable, and on participles ending in a consonant (like <span class="fr">mort</span> vs <span class="fr">morte</span>) the difference becomes audible. Write a feminine "I went home" as <span class="fr">je suis rentrée</span> and a male speaker writes <span class="fr">je suis rentré</span>. Different person, different ending. This is one of the small disciplines that quietly separates a learner from a fluent speaker.</p>

      <p>The être verbs you will reach for most often, in daily life, are <span class="fr">aller</span> (to go), <span class="fr">venir</span> (to come), <span class="fr">partir</span> (to leave), <span class="fr">arriver</span> (to arrive), <span class="fr">sortir</span> (to go out), <span class="fr">rentrer</span> (to go home), <span class="fr">rester</span> (to stay), <span class="fr">tomber</span> (to fall), <span class="fr">naître</span> (to be born), and <span class="fr">mourir</span> (to die). Their past participles: <span class="fr">allé, venu, parti, arrivé, sorti, rentré, resté, tombé, né, mort</span>. Learn them paired with <span class="fr">je suis</span> and the rest of the family will follow.</p>
    `,
    examples: [
      { fr: 'Il est allé au marché.', en: 'He went to the market.', note: 'aller — masculine singular, no agreement change.' },
      { fr: 'Elle est allée au marché.', en: 'She went to the market.', note: 'aller — feminine singular: + e → allée.' },
      { fr: 'Ils sont partis tôt.', en: 'They left early.', note: 'partir — masculine plural: + s → partis.' },
      { fr: 'Elles sont arrivées en retard.', en: 'They arrived late.', note: 'arriver — feminine plural: + es → arrivées.' },
      { fr: 'Je suis rentré à minuit.', en: 'I got home at midnight.', note: 'rentrer — male speaker; female would write rentrée.' },
      { fr: 'Tu es sorti hier soir?', en: 'Did you go out last night?', note: 'sortir — tu form, addressed to a male.' },
      { fr: 'Nous sommes restés à la maison.', en: 'We stayed at home.', note: 'rester — masculine plural agreement.' },
      { fr: 'Elle est tombée dans la rue.', en: 'She fell in the street.', note: 'tomber — feminine singular: tombée.' },
      { fr: 'Il est né à Bruxelles.', en: 'He was born in Brussels.', note: 'naître → né. Irregular past participle.' },
      { fr: 'Vous êtes venus comment?', en: 'How did you get here?', note: 'venir → venu. Plural addressed group: venus.' }
    ],
    exercises: [
      {
        q: 'Which auxiliary does aller use in the passé composé?',
        options: ['avoir', 'être', 'aller', 'faire'],
        correct: 1,
        explanation: 'Aller is a DR MRS VANDERTRAMP verb — it uses être, not avoir.'
      },
      {
        q: 'Complete: Elle ___ partie à 8h.',
        options: ['a', 'est', 'ai', 'ont'],
        correct: 1,
        explanation: 'Partir uses être. Elle est partie — with feminine agreement on the participle.'
      },
      {
        q: 'Which is correct for a female speaker saying "I went"?',
        options: ['Je suis allé', 'Je suis allée', "J'ai allé", "J'ai allée"],
        correct: 1,
        explanation: 'Aller uses être, and the participle agrees with the subject: allée for feminine.'
      },
      {
        q: 'Complete: Ils ___ arrivés en retard.',
        options: ['ont', 'sont', 'avons', 'êtes'],
        correct: 1,
        explanation: 'Arriver uses être. Ils sont arrivés — note the -s agreement for masculine plural.'
      },
      {
        q: 'Which past participle form is correct? Elle est ___ (tomber).',
        options: ['tombé', 'tombée', 'tombés', 'tombées'],
        correct: 1,
        explanation: 'Elle is feminine singular → tombée (add -e for feminine agreement).'
      },
      {
        q: 'Complete: Nous ___ restés à Paris.',
        options: ['avons', 'sommes', 'êtes', 'ont'],
        correct: 1,
        explanation: 'Rester uses être. Nous sommes restés — masculine plural agreement.'
      },
      {
        q: 'Which sentence uses être correctly?',
        options: ['Elle est mangé', 'Il est allé', "J'ai venu", 'Nous avons parti'],
        correct: 1,
        explanation: 'Aller uses être. Venir and partir also use être, so "j\'ai venu" and "nous avons parti" are wrong.'
      },
      {
        q: 'Complete (speaking to a male friend): Tu ___ sorti hier?',
        options: ['as', 'es', 'est', 'ai'],
        correct: 1,
        explanation: 'Sortir uses être. Tu es sorti — no agreement change needed for masculine singular.'
      }
    ]
  },

  {
    id: 'lesson-8',
    title: "L'Imparfait",
    subtitle: 'The past tense for habits, descriptions, and ongoing states.',
    theory: `
      <p>French has two main past tenses used in everyday speech: the <em>passé composé</em> from the previous lessons, and the <em>imparfait</em> — the one this lesson is about. Knowing when to use each is one of the most important and most misunderstood aspects of French grammar. They are not interchangeable. Choosing the wrong one will not make you incomprehensible, but it will mark you as someone who has not yet sorted them out.</p>

      <p>The simplest way to feel the difference: the passé composé describes a <em>completed action</em> with a clear beginning and end — I ate, I went, I saw, it ended. The imparfait describes <em>ongoing states</em>, <em>habitual actions</em>, or <em>background context</em> in the past — I was eating, I used to go, it was raining. Think of the passé composé as a snapshot, and the imparfait as the backdrop the snapshot is taken against. <span class="fr">J'ai mangé une pomme</span> is the snapshot; <span class="fr">je mangeais une pomme</span> <button class="play-btn" data-text="je mangeais une pomme">▶</button> is the backdrop.</p>

      <p>Forming the imparfait is mercifully regular. Take the <span class="fr">nous</span> form of the present tense, drop the <span class="fr">-ons</span> ending to find the stem, and add a fixed set of endings: <span class="fr">-ais, -ais, -ait, -ions, -iez, -aient</span>. For <span class="fr">parler</span>: <span class="fr">nous parlons</span> → stem <span class="fr">parl-</span> → <span class="fr">je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient</span>. The same rule covers verbs that are irregular in the present: <span class="fr">faire</span> → <span class="fr">nous faisons</span> → <span class="fr">fais-</span> → <span class="fr">je faisais</span>.</p>

      <div class="rule-box">
        <strong>Imparfait endings — same for every verb</strong><br>
        je <span class="fr">-ais</span> &nbsp; tu <span class="fr">-ais</span> &nbsp; il/elle <span class="fr">-ait</span><br>
        nous <span class="fr">-ions</span> &nbsp; vous <span class="fr">-iez</span> &nbsp; ils/elles <span class="fr">-aient</span><br><br>
        <strong>être — the only truly irregular imparfait</strong><br>
        <span class="fr">j'étais</span> <button class="play-btn" data-text="j'étais">▶</button>
        &nbsp; <span class="fr">tu étais</span> &nbsp; <span class="fr">il était</span> <button class="play-btn" data-text="il était">▶</button><br>
        <span class="fr">nous étions</span> &nbsp; <span class="fr">vous étiez</span> &nbsp; <span class="fr">ils étaient</span>
      </div>

      <p>The only verb that does not follow the nous-stem rule is <span class="fr">être</span> — its imparfait stem is <span class="fr">ét-</span>, not <span class="fr">somm-</span>. Everything else, no matter how irregular elsewhere in the language, plays by the rule. This is the cleanest tense in French to learn, which is a small mercy given how much it shows up.</p>

      <p>In practice, the two past tenses are not used in isolation; they work together. The imparfait sets the scene, the passé composé interrupts it. <span class="fr">Il pleuvait quand je suis sorti</span> <button class="play-btn" data-text="il pleuvait quand je suis sorti">▶</button> — "it was raining (imparfait, ongoing) when I went out (passé composé, completed)." The imparfait gives you the backdrop; the passé composé delivers the event. Once you see that pattern in a few sentences, you will start hearing it everywhere in French stories — and you will know which tense to reach for instinctively.</p>
    `,
    examples: [
      { fr: "Quand j'étais enfant, j'habitais à Paris.", en: 'When I was a child, I lived in Paris.', note: 'Imparfait for past habit / ongoing state.' },
      { fr: 'Il pleuvait ce matin.', en: 'It was raining this morning.', note: 'Imparfait for ongoing past state.' },
      { fr: 'Elle lisait un livre quand je suis arrivé.', en: 'She was reading a book when I arrived.', note: 'Imparfait backdrop + passé composé event — the classic pattern.' },
      { fr: 'Nous allions au café tous les dimanches.', en: 'We used to go to the café every Sunday.', note: 'Imparfait for repeated past habit.' },
      { fr: "Tu travaillais beaucoup à l'époque.", en: 'You worked a lot back then.', note: 'Imparfait for past description over time.' },
      { fr: 'Il était fatigué, alors il est rentré.', en: 'He was tired, so he went home.', note: 'Imparfait state + passé composé action.' },
      { fr: 'Vous habitiez où avant?', en: 'Where did you used to live?', note: 'Imparfait for past situation.' },
      { fr: 'Les enfants jouaient dans le jardin.', en: 'The children were playing in the garden.', note: 'Imparfait for an ongoing past action.' },
      { fr: 'Je voulais te parler.', en: 'I wanted to talk to you.', note: 'Imparfait for past mental states (vouloir, savoir, penser).' },
      { fr: "C'était une belle journée.", en: 'It was a beautiful day.', note: 'Imparfait for past description.' }
    ],
    exercises: [
      {
        q: 'Which tense describes a habitual past action?',
        options: ['Passé composé', 'Imparfait', 'Futur proche', 'Présent'],
        correct: 1,
        explanation: 'Imparfait is used for repeated or habitual past actions — things you used to do.'
      },
      {
        q: 'Form the imparfait stem of parler. Start from nous parlons.',
        options: ['parl-', 'parle-', 'parlons-', 'parlé-'],
        correct: 0,
        explanation: 'Drop -ons from nous parlons → parl-. Then add the imparfait endings.'
      },
      {
        q: "Complete: Quand j'étais jeune, je ___ au football. (jouer)",
        options: ['jouais', 'joué', 'joue', 'ai joué'],
        correct: 0,
        explanation: 'Habitual past action → imparfait. Stem jou- + ais → je jouais.'
      },
      {
        q: 'Complete: Il ___ fatigué ce soir-là. (être)',
        options: ['était', 'a été', 'est', 'avait'],
        correct: 0,
        explanation: 'Être in imparfait: j\'étais, tu étais, il était. Describing a past state.'
      },
      {
        q: 'Which sentence uses imparfait correctly?',
        options: [
          "Hier, j'allais au marché et j'achetais du pain",
          'Je mangeais une pizza quand il a appelé',
          "J'ai été fatigué tous les jours",
          'Il pleuvait hier pendant cinq minutes exactement'
        ],
        correct: 1,
        explanation: 'Imparfait (ongoing action) interrupted by passé composé (completed event) — the classic pattern.'
      },
      {
        q: 'Complete: Nous ___ à la plage chaque été. (aller)',
        options: ['allions', 'sommes allés', 'allons', 'irons'],
        correct: 0,
        explanation: 'Repeated past habit → imparfait. Nous allons → stem all- + ions → nous allions.'
      },
      {
        q: 'What is the imparfait of faire for il? (nous faisons → fais-)',
        options: ['faisait', 'faisé', 'a fait', 'faisait-il'],
        correct: 0,
        explanation: 'Faire imparfait stem: fais- (from nous faisons). + ait → il faisait.'
      },
      {
        q: 'Choose the correct tenses: Elle ___ (lire) quand le téléphone ___ (sonner).',
        options: ['lisait / a sonné', 'lisait / sonnait', 'a lu / a sonné', 'a lu / sonnait'],
        correct: 0,
        explanation: 'Ongoing action (imparfait) interrupted by a completed event (passé composé). Elle lisait quand le téléphone a sonné.'
      }
    ]
  },

  {
    id: 'lesson-9',
    title: 'Adjective Agreement & Placement',
    subtitle: 'Why adjectives change form — and why most go after the noun.',
    theory: `
      <p>In French, an adjective must agree with the noun it describes in both gender and number. This means a single adjective has up to four written forms: masculine singular, feminine singular, masculine plural, and feminine plural. The masculine singular is the dictionary form — the one you find in any vocabulary list — and every other form is derived from it. Once you internalise that the adjective bends to fit the noun, half of French sentence construction stops feeling unpredictable.</p>

      <p>The default rules are clean. Add <span class="fr">-e</span> for feminine: <span class="fr">grand</span> → <span class="fr">grande</span> <button class="play-btn" data-text="grande">▶</button>. Add <span class="fr">-s</span> for masculine plural: <span class="fr">grand</span> → <span class="fr">grands</span>. Add <span class="fr">-es</span> for feminine plural: <span class="fr">grand</span> → <span class="fr">grandes</span>. If the masculine form already ends in <span class="fr">-e</span>, no extra <span class="fr">-e</span> is added for the feminine: <span class="fr">jeune</span> stays <span class="fr">jeune</span>. If it already ends in <span class="fr">-s</span>, no extra <span class="fr">-s</span> is added for the masculine plural: <span class="fr">gris</span> stays <span class="fr">gris</span>.</p>

      <div class="rule-box">
        <strong>Common irregular feminine endings</strong><br>
        <span class="fr">-eux</span> → <span class="fr">-euse</span> &nbsp; <em>heureux / heureuse</em><br>
        <span class="fr">-if</span> → <span class="fr">-ive</span> &nbsp; <em>actif / active</em><br>
        <span class="fr">-el</span> → <span class="fr">-elle</span> &nbsp; <em>naturel / naturelle</em><br>
        <span class="fr">-er</span> → <span class="fr">-ère</span> &nbsp; <em>premier / première</em><br>
        <span class="fr">-on</span> → <span class="fr">-onne</span> &nbsp; <em>bon / bonne</em><br>
        <span class="fr">-en</span> → <span class="fr">-enne</span> &nbsp; <em>ancien / ancienne</em><br><br>
        <strong>Fully irregular:</strong> beau / belle, nouveau / nouvelle, vieux / vieille
      </div>

      <p>Some adjectives have irregular feminine forms that must be memorised. The most common patterns are listed above. <span class="fr">Heureux</span> becomes <span class="fr">heureuse</span> <button class="play-btn" data-text="heureuse">▶</button>, <span class="fr">actif</span> becomes <span class="fr">active</span>, <span class="fr">bon</span> becomes <span class="fr">bonne</span>. The fully irregular ones — <span class="fr">beau / belle</span>, <span class="fr">nouveau / nouvelle</span>, <span class="fr">vieux / vieille</span> — appear constantly, so memorising them early pays off.</p>

      <p>Placement is the second piece of the puzzle. Unlike English, where every adjective precedes its noun, most French adjectives come <em>after</em> the noun. <span class="fr">Une voiture rouge</span> <button class="play-btn" data-text="une voiture rouge">▶</button>, <span class="fr">un homme intelligent</span>, <span class="fr">une idée intéressante</span>. The exceptions are the so-called <strong>BANGS</strong> adjectives — <strong>B</strong>eauty, <strong>A</strong>ge, <strong>N</strong>umber, <strong>G</strong>oodness, <strong>S</strong>ize — which precede the noun: <span class="fr">beau, joli, vieux, jeune, nouveau, ancien, bon, mauvais, grand, petit, gros, long, haut</span>.</p>

      <p>A handful of adjectives change meaning depending on placement, and this distinction is one of the small details that separates a good speaker from a great one. <span class="fr">Un grand homme</span> means a <em>great</em> man (figurative); <span class="fr">un homme grand</span> means a <em>tall</em> man (literal). <span class="fr">Un ancien collègue</span> is a <em>former</em> colleague; <span class="fr">un collègue ancien</span> is a colleague who is <em>very old</em>. The same applies to <span class="fr">cher</span> (dear / expensive), <span class="fr">propre</span> (own / clean), and a few others. Position is grammar, but it is also meaning.</p>
    `,
    examples: [
      { fr: 'une voiture rouge', en: 'a red car', note: 'Adjective after the noun — the standard position.' },
      { fr: 'un grand appartement', en: 'a large apartment', note: 'Grand is BANGS (Size) — before the noun.' },
      { fr: 'une femme intelligente', en: 'an intelligent woman', note: 'Add -e for feminine: intelligent → intelligente.' },
      { fr: 'des enfants heureux', en: 'happy children', note: '-eux stays -eux in masculine plural.' },
      { fr: 'des femmes heureuses', en: 'happy women', note: '-eux → -euse → -euses for feminine plural.' },
      { fr: 'une belle maison', en: 'a beautiful house', note: 'Beau → belle (irregular feminine). BANGS — before noun.' },
      { fr: 'un nouveau projet', en: 'a new project', note: 'Nouveau is BANGS — before the noun.' },
      { fr: 'une ancienne collègue', en: 'a former colleague', note: 'Ancien before noun = figurative (former).' },
      { fr: 'une collègue ancienne', en: 'a very old colleague', note: 'Ancien after noun = literal (aged).' },
      { fr: 'de bons restaurants', en: 'some good restaurants', note: 'Bon → bons. Before the noun, des → de.' }
    ],
    exercises: [
      {
        q: 'Where does rouge go in: une voiture ___?',
        options: ['before the noun', 'after the noun', 'either position', 'it depends on gender'],
        correct: 1,
        explanation: 'Rouge is not a BANGS adjective. Most adjectives follow the noun in French.'
      },
      {
        q: 'Make grand agree: une ___ ville (feminine).',
        options: ['grand', 'grande', 'grands', 'grandes'],
        correct: 1,
        explanation: 'Ville is feminine singular. Add -e to grand → grande.'
      },
      {
        q: 'Which is a BANGS adjective that goes before the noun?',
        options: ['rouge', 'intelligent', 'petit', 'intéressant'],
        correct: 2,
        explanation: 'Petit is a Size adjective — part of BANGS. It precedes the noun: un petit café.'
      },
      {
        q: 'Make heureux feminine singular.',
        options: ['heureuse', 'heureuxe', 'heureusse', 'heureuxes'],
        correct: 0,
        explanation: '-eux → -euse in the feminine. Heureux → heureuse.'
      },
      {
        q: 'Which sentence means "a great man"?',
        options: ['Un homme grand', 'Un grand homme', 'Un homme de grand', 'Un homme grande'],
        correct: 1,
        explanation: 'Grand before the noun = great (figurative). After the noun, it means tall.'
      },
      {
        q: 'Make beau feminine.',
        options: ['belle', 'beaue', 'beau', 'beaux'],
        correct: 0,
        explanation: 'Beau → belle is irregular and must be memorised. Un beau garçon, une belle fille.'
      },
      {
        q: "Complete: C'est une idée ___. (intéressant)",
        options: ['intéressant', 'intéressante', 'intéressants', 'intéressantes'],
        correct: 1,
        explanation: 'Idée is feminine singular. Intéressant + e = intéressante. Adjective follows the noun.'
      },
      {
        q: "Which means 'a former president'?",
        options: ['un président ancien', 'un ancien président', 'un vieux président', 'un président vieux'],
        correct: 1,
        explanation: 'Ancien before the noun = former. Ancien after the noun = very old.'
      }
    ]
  },

  {
    id: 'lesson-10',
    title: 'Pronouns',
    subtitle: 'Direct objects, indirect objects, and reflexive verbs.',
    theory: `
      <p>Pronouns replace nouns to avoid repetition — and used well, they are one of the clearest markers of a fluent French speaker. French has several kinds, but three are essential for daily speech: direct object pronouns, indirect object pronouns, and reflexive pronouns. Once you can place them confidently in a sentence, your French stops sounding like a translation.</p>

      <p><em>Direct object pronouns</em> replace the noun that directly receives the verb's action — the thing being seen, eaten, done. The forms are <span class="fr">me</span> (me), <span class="fr">te</span> (you), <span class="fr">le</span> (him/it masc.), <span class="fr">la</span> (her/it fem.), <span class="fr">nous</span> (us), <span class="fr">vous</span> (you pl.), and <span class="fr">les</span> (them). <span class="fr">Je mange la pizza</span> becomes <span class="fr">je la mange</span> <button class="play-btn" data-text="je la mange">▶</button>. <span class="fr">Tu vois Pierre?</span> becomes <span class="fr">Tu le vois?</span></p>

      <p><em>Indirect object pronouns</em> replace nouns preceded by <span class="fr">à</span> — usually people. The forms are <span class="fr">me</span> (to me), <span class="fr">te</span> (to you), <span class="fr">lui</span> (to him/her), <span class="fr">nous</span> (to us), <span class="fr">vous</span> (to you pl.), and <span class="fr">leur</span> (to them). <span class="fr">Je parle à Marie</span> becomes <span class="fr">je lui parle</span> <button class="play-btn" data-text="je lui parle">▶</button>. <span class="fr">Il téléphone à ses parents</span> becomes <span class="fr">il leur téléphone</span>. Crucially, <span class="fr">lui</span> and <span class="fr">leur</span> do not change for gender — one form covers both.</p>

      <div class="rule-box">
        <strong>Word order — both kinds of pronoun</strong><br>
        Both go <em>directly before</em> the conjugated verb. This is the opposite of English.<br><br>
        Affirmative: <span class="fr">Je le vois.</span> &nbsp; <em>(I see him.)</em><br>
        Negative: <span class="fr">Je ne le vois pas.</span> &nbsp; <em>(Ne before the pronoun.)</em><br>
        Passé composé: <span class="fr">Je l'ai vu.</span> &nbsp; <em>(Before the auxiliary, not the participle.)</em>
      </div>

      <p>Both types go <em>directly before</em> the conjugated verb in French — the opposite of English word order. In negation, <span class="fr">ne</span> comes before the pronoun: <span class="fr">je ne le vois pas</span>. In the passé composé, the pronoun goes before the auxiliary, not after the participle: <span class="fr">je l'ai vu</span> <button class="play-btn" data-text="je l'ai vu">▶</button>, never "j'ai le vu." This placement feels unnatural for English speakers and is worth drilling until it becomes reflex.</p>

      <p><em>Reflexive verbs</em> describe actions done to oneself and carry their own family of pronouns: <span class="fr">me, te, se, nous, vous, se</span>. Common reflexives include <span class="fr">se lever</span> (to get up), <span class="fr">se coucher</span> (to go to bed), <span class="fr">se laver</span> (to wash), <span class="fr">s'appeler</span> (to be called), and <span class="fr">se sentir</span> (to feel). In the passé composé, reflexive verbs always use <span class="fr">être</span> as auxiliary, and the past participle agrees with the subject: <span class="fr">je me suis levé</span> <button class="play-btn" data-text="je me suis levé">▶</button> (male speaker) or <span class="fr">je me suis levée</span> (female speaker).</p>
    `,
    examples: [
      { fr: 'Tu vois Marie? Oui, je la vois.', en: 'Do you see Marie? Yes, I see her.', note: 'la = direct object, feminine singular.' },
      { fr: 'Il mange le gâteau? Oui, il le mange.', en: "Is he eating the cake? Yes, he's eating it.", note: 'le = direct object, masculine singular.' },
      { fr: 'Tu parles à Pierre? Oui, je lui parle.', en: 'Do you talk to Pierre? Yes, I talk to him.', note: 'lui = indirect object, singular.' },
      { fr: 'Il téléphone à ses parents? Oui, il leur téléphone.', en: 'Does he call his parents? Yes, he calls them.', note: 'leur = indirect object, plural.' },
      { fr: 'Je ne le connais pas.', en: "I don't know him.", note: 'Pronoun before verb; ne before pronoun.' },
      { fr: "Je l'ai vu hier.", en: 'I saw him yesterday.', note: 'Pronoun before the auxiliary in passé composé.' },
      { fr: "Comment tu t'appelles?", en: "What's your name?", note: "Reflexive: s'appeler. Te → t' before a vowel." },
      { fr: 'Je me lève à 7h.', en: 'I get up at 7.', note: 'Reflexive: se lever.' },
      { fr: "Elle s'est couchée tard.", en: 'She went to bed late.', note: 'Reflexive + être + agreement: couchée.' },
      { fr: 'Nous nous sommes levés tôt.', en: 'We got up early.', note: 'Reflexive plural + masculine agreement.' }
    ],
    exercises: [
      {
        q: 'Replace the object: Je mange la pizza → Je ___ mange.',
        options: ['le', 'la', 'les', 'lui'],
        correct: 1,
        explanation: 'Pizza is feminine → la. The direct object pronoun goes before the verb.'
      },
      {
        q: 'Replace: Tu vois les enfants? → Tu ___ vois?',
        options: ['le', 'la', 'les', 'leur'],
        correct: 2,
        explanation: 'Les enfants is plural → les. Direct object pronoun.'
      },
      {
        q: 'Replace: Je parle à Marie → Je ___ parle.',
        options: ['la', 'le', 'lui', 'leur'],
        correct: 2,
        explanation: 'À Marie → indirect object → lui (for both masculine and feminine singular).'
      },
      {
        q: 'Where does the pronoun go in a negative sentence?',
        options: ['After pas', 'Before the verb', 'After the verb', 'After ne'],
        correct: 1,
        explanation: 'Ne + pronoun + verb + pas. Je ne le vois pas.'
      },
      {
        q: 'Which is the reflexive form of lever for je?',
        options: ['je lève', 'je me lève', 'je se lève', 'je te lève'],
        correct: 1,
        explanation: 'Se lever is reflexive. Je → me. Je me lève.'
      },
      {
        q: "Complete: Comment tu t'___? (s'appeler)",
        options: ['appelles', 'appelle', 'appellent', 'appeler'],
        correct: 0,
        explanation: "S'appeler, tu form. Te contracts to t' before a vowel. Tu t'appelles."
      },
      {
        q: 'In the passé composé, where does the object pronoun go?',
        options: ['After the past participle', 'Before the auxiliary', 'After the auxiliary', 'Before ne'],
        correct: 1,
        explanation: "Je l'ai vu — the pronoun comes before avoir/être, not after."
      },
      {
        q: 'Which verb uses être as auxiliary in the passé composé?',
        options: ['manger', 'parler', 'se lever', 'avoir'],
        correct: 2,
        explanation: 'All reflexive verbs use être in the passé composé. Je me suis levé.'
      }
    ]
  },

  {
    id: 'lesson-11',
    title: 'Prepositions & Linking Words',
    subtitle: 'Connecting ideas and navigating space and time in French.',
    theory: `
      <p>Prepositions are small words that establish relationships between other words — location, direction, time, cause, manner. French prepositions often do not map neatly onto their English equivalents, so translating word-for-word produces sentences that are technically intelligible but unmistakably foreign. The best approach is to learn each preposition with the kind of phrase it tends to appear in, rather than as an isolated definition.</p>

      <p>The core <em>location</em> prepositions: <span class="fr">à</span> (at / in / to — for cities and certain locations), <span class="fr">en</span> (in — for most countries, regions, months, and years), <span class="fr">dans</span> (in — for physical spaces you are inside), <span class="fr">sur</span> (on), <span class="fr">sous</span> (under), <span class="fr">devant</span> (in front of), <span class="fr">derrière</span> (behind), <span class="fr">entre</span> (between), <span class="fr">près de</span> (near), <span class="fr">loin de</span> (far from). So: <span class="fr">je suis à Paris</span> <button class="play-btn" data-text="je suis à Paris">▶</button>, <span class="fr">je suis en France</span>, <span class="fr">je suis dans le café</span>.</p>

      <p>Recall from earlier lessons that <span class="fr">à</span> and <span class="fr">de</span> contract with <span class="fr">le</span> and <span class="fr">les</span>: <span class="fr">à + le = au</span>, <span class="fr">à + les = aux</span>, <span class="fr">de + le = du</span>, <span class="fr">de + les = des</span>. No contraction with <span class="fr">la</span> or <span class="fr">l'</span>. The rule mattered for articles; now that prepositions are multiplying, it matters more. <span class="fr">Je vais au cinéma</span> <button class="play-btn" data-text="je vais au cinéma">▶</button>, <span class="fr">je reviens du bureau</span>.</p>

      <div class="rule-box">
        <strong>Time prepositions — easy to confuse</strong><br>
        <span class="fr">pendant</span> — during / for &nbsp; <em>J'ai attendu pendant une heure.</em><br>
        <span class="fr">depuis</span> — since / for (with present tense) &nbsp; <em>J'apprends le français depuis six mois.</em><br>
        <span class="fr">dans</span> — in (future time) &nbsp; <em>Je viendrai dans deux jours.</em><br>
        <span class="fr">il y a</span> — ago &nbsp; <em>Il est parti il y a deux jours.</em><br>
        <span class="fr">avant</span> — before &nbsp; <span class="fr">après</span> — after
      </div>

      <p>Time prepositions are a separate skill, and they are where many learners trip up. <span class="fr">Pendant</span> means "during" or "for" with completed durations. <span class="fr">Depuis</span> means "since" or "for" and pairs with the present tense to describe situations that started in the past and are still happening: <span class="fr">j'apprends le français depuis six mois</span> <button class="play-btn" data-text="j'apprends le français depuis six mois">▶</button>. <span class="fr">Dans</span> with a time expression means "in" the future. <span class="fr">Il y a</span> means "ago" — counting backwards from now.</p>

      <p>Finally, <em>linking words</em> (conjunctions and connectors) are what turn a list of sentences into actual speech. The essential set: <span class="fr">et</span> (and), <span class="fr">mais</span> (but), <span class="fr">ou</span> (or), <span class="fr">donc</span> (so / therefore), <span class="fr">parce que</span> (because), <span class="fr">quand</span> (when), <span class="fr">si</span> (if), <span class="fr">que</span> (that), <span class="fr">comme</span> (as / since), <span class="fr">pourtant</span> (however / yet), <span class="fr">alors</span> (so / then), <span class="fr">puis</span> (then / next), <span class="fr">enfin</span> (finally / well). These are the joints of the language — using them naturally is the difference between speaking French and listing French sentences.</p>
    `,
    examples: [
      { fr: 'Je suis à Bruxelles.', en: "I'm in Brussels.", note: 'À for cities.' },
      { fr: 'Elle habite en Belgique.', en: 'She lives in Belgium.', note: 'En for feminine countries.' },
      { fr: 'Il travaille dans un bureau.', en: 'He works in an office.', note: 'Dans for a physical interior.' },
      { fr: 'Le café est sur la table.', en: 'The coffee is on the table.', note: 'Sur = on.' },
      { fr: "J'apprends le français depuis trois mois.", en: "I've been learning French for three months.", note: 'Depuis + present tense for ongoing situations.' },
      { fr: 'Il est parti il y a une semaine.', en: 'He left a week ago.', note: 'Il y a = ago.' },
      { fr: 'Je viendrai dans deux jours.', en: "I'll come in two days.", note: 'Dans for future time.' },
      { fr: 'Je préfère le thé mais je bois du café.', en: 'I prefer tea but I drink coffee.', note: 'Mais = but.' },
      { fr: 'Je suis fatigué donc je rentre.', en: "I'm tired so I'm going home.", note: 'Donc = therefore.' },
      { fr: 'Il fait froid, pourtant elle ne porte pas de manteau.', en: "It's cold, yet she's not wearing a coat.", note: 'Pourtant = yet / however.' }
    ],
    exercises: [
      {
        q: 'Complete: Je vais ___ Paris demain.',
        options: ['en', 'dans', 'à', 'sur'],
        correct: 2,
        explanation: 'À is used for cities. En is for countries and regions.'
      },
      {
        q: 'Complete: Elle habite ___ France.',
        options: ['à', 'en', 'dans', 'au'],
        correct: 1,
        explanation: 'En is used for feminine countries. France is feminine → en France.'
      },
      {
        q: 'Complete: Le livre est ___ la table.',
        options: ['sur', 'sous', 'dans', 'devant'],
        correct: 0,
        explanation: 'Sur = on top of. Le livre est sur la table.'
      },
      {
        q: "Complete: J'apprends le français ___ six mois. (ongoing, started in the past)",
        options: ['pendant', 'depuis', 'dans', 'il y a'],
        correct: 1,
        explanation: 'Depuis + present tense for situations that started in the past and are still ongoing.'
      },
      {
        q: 'Complete: Il est parti ___ trois jours. (three days ago)',
        options: ['depuis', 'dans', 'pendant', 'il y a'],
        correct: 3,
        explanation: 'Il y a = ago. Il est parti il y a trois jours.'
      },
      {
        q: 'Choose the correct linking word: Je veux venir, ___ je suis occupé. (but)',
        options: ['donc', 'mais', 'parce que', 'alors'],
        correct: 1,
        explanation: 'Mais = but. It expresses contrast.'
      },
      {
        q: "Complete: Je suis fatigué ___ j'ai mal dormi. (because)",
        options: ['donc', 'mais', 'parce que', 'pourtant'],
        correct: 2,
        explanation: 'Parce que = because. It introduces a reason.'
      },
      {
        q: 'Complete: Je vais au cinéma ___ je rentrerai tard. (so)',
        options: ['mais', 'parce que', 'donc', 'depuis'],
        correct: 2,
        explanation: 'Donc = so / therefore. It introduces a consequence.'
      }
    ]
  },

  {
    id: 'lesson-12',
    title: 'Modal Verbs',
    subtitle: 'Vouloir, pouvoir, devoir — wanting, being able to, and having to.',
    theory: `
      <p>Modal verbs express ability, permission, obligation, or desire rather than concrete actions. In French the three essential modals are <span class="fr">vouloir</span> (to want), <span class="fr">pouvoir</span> (to be able to / can), and <span class="fr">devoir</span> (to have to / must). A fourth verb, <span class="fr">savoir</span>, sits alongside them and expresses knowing how to do something — distinct from the physical ability or permission expressed by <span class="fr">pouvoir</span>. Together these four verbs cover most of what you need to say about possibility, obligation, and intention.</p>

      <p>All three core modals are irregular in the present tense and must be memorised. <span class="fr">Vouloir</span>: <span class="fr">je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent</span> <button class="play-btn" data-text="je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent">▶</button>. <span class="fr">Pouvoir</span>: <span class="fr">je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent</span>. <span class="fr">Devoir</span>: <span class="fr">je dois, tu dois, il doit, nous devons, vous devez, ils doivent</span>. Notice the recurring pattern of <em>oi/eu</em> in singular forms switching to <em>ou/eu</em> in plural — it shows up in many irregular French verbs.</p>

      <div class="rule-box">
        <strong>Structure: modal + infinitive</strong><br>
        <span class="fr">Je veux manger.</span> &nbsp; <em>I want to eat.</em><br>
        <span class="fr">Tu peux venir?</span> &nbsp; <em>Can you come?</em><br>
        <span class="fr">Il doit travailler.</span> &nbsp; <em>He has to work.</em><br>
        <em>Never conjugate both verbs — the modal is conjugated, the second verb stays in the infinitive.</em>
      </div>

      <p>These verbs are almost always followed by an infinitive — the unconjugated dictionary form of another verb. <span class="fr">Je veux manger</span>, <span class="fr">tu peux venir</span>, <span class="fr">il doit travailler</span>. Never conjugate both verbs. The modal carries the tense and person; the infinitive carries the meaning of the action itself.</p>

      <p>The <em>conditional</em> forms of these verbs are essential for sounding polite — and they are heard everywhere in shops, restaurants, and any situation involving strangers. <span class="fr">Je voudrais</span> <button class="play-btn" data-text="je voudrais un café">▶</button> (I would like) is far more common than <span class="fr">je veux</span> (I want), which can sound blunt to the point of rudeness. <span class="fr">Je pourrais</span> (I could) softens requests. <span class="fr">Je devrais</span> (I should) expresses a gentler obligation than <span class="fr">je dois</span>. Learning these polite forms is not optional — they are how adult French speech operates.</p>

      <p>Finally, the distinction between <span class="fr">savoir</span> and <span class="fr">pouvoir</span> is worth getting right. <span class="fr">Savoir</span> + infinitive means to know how to do something through learned skill: <span class="fr">je sais nager</span> means "I know how to swim" — I have learned. <span class="fr">Pouvoir</span> + infinitive means to be physically able to or to be permitted: <span class="fr">je peux nager</span> means "I'm able to swim" right now, or "I'm allowed to swim." If someone asks <span class="fr">tu sais conduire?</span>, they are asking whether you have learned. If they ask <span class="fr">tu peux conduire?</span>, they want to know if you can right now — perhaps you have not been drinking, perhaps you have a car available.</p>
    `,
    examples: [
      { fr: "Je veux apprendre le français.", en: 'I want to learn French.', note: 'Vouloir + infinitive.' },
      { fr: "Je voudrais un café, s'il vous plaît.", en: "I'd like a coffee, please.", note: 'Conditional — polite form.' },
      { fr: "Tu peux m'aider?", en: 'Can you help me?', note: 'Pouvoir + infinitive.' },
      { fr: 'Je ne peux pas venir ce soir.', en: "I can't come tonight.", note: 'Negation with pouvoir.' },
      { fr: 'Il doit partir à 8h.', en: 'He has to leave at 8.', note: 'Devoir + infinitive — obligation.' },
      { fr: "Vous devez réserver à l'avance.", en: 'You must book in advance.', note: 'Devoir — formal obligation.' },
      { fr: 'Je sais parler français.', en: 'I know how to speak French.', note: 'Savoir = learned ability.' },
      { fr: 'Tu sais nager?', en: 'Do you know how to swim?', note: 'Savoir, not pouvoir — testing skill.' },
      { fr: 'Je pourrais vous rappeler?', en: 'Could I call you back?', note: 'Conditional — polite request.' },
      { fr: "On devrait y aller.", en: 'We should go.', note: 'Devoir conditional — suggestion.' }
    ],
    exercises: [
      {
        q: 'Conjugate vouloir for je.',
        options: ['veux', 'voulez', 'veut', 'voulons'],
        correct: 0,
        explanation: 'Vouloir: je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent.'
      },
      {
        q: 'Complete: Tu ___ venir avec nous? (pouvoir)',
        options: ['peux', 'peut', 'pouvez', 'peuvent'],
        correct: 0,
        explanation: 'Pouvoir: tu peux. Modal + infinitive — venir stays unconjugated.'
      },
      {
        q: 'Complete: Il ___ travailler ce weekend. (devoir)',
        options: ['doit', 'dois', 'devons', 'doivent'],
        correct: 0,
        explanation: 'Devoir: il doit. He has to work this weekend.'
      },
      {
        q: 'Which is more polite in a restaurant?',
        options: ['Je veux un café', 'Je voudrais un café', 'Je dois un café', 'Je peux un café'],
        correct: 1,
        explanation: 'Voudrais is the conditional of vouloir. It softens the request — "I would like" rather than "I want."'
      },
      {
        q: "Complete: Je ___ nager depuis l'âge de 5 ans. (know how to)",
        options: ['peux', 'veux', 'sais', 'dois'],
        correct: 2,
        explanation: 'Savoir = to know how to (learned skill). Je sais nager.'
      },
      {
        q: 'What follows a modal verb?',
        options: ['A conjugated verb', 'An infinitive', 'A past participle', 'An adjective'],
        correct: 1,
        explanation: 'Modal + infinitive. Je veux manger, not "je veux mange."'
      },
      {
        q: 'Complete: Nous ___ réserver une table. (should — use conditional)',
        options: ['devons', 'devrions', 'voulons', 'pouvons'],
        correct: 1,
        explanation: 'Devoir conditional: je devrais, tu devrais, il devrait, nous devrions. Softer than nous devons.'
      },
      {
        q: 'Complete: ___ vous m\'expliquer? (Could you — polite)',
        options: ['Voulez', 'Pouvez', 'Devez', 'Savez'],
        correct: 1,
        explanation: 'Pouvoir = can / be able to. Pouvez-vous = Can you? For extra politeness use pourriez-vous (conditional).'
      }
    ]
  },

  {
    id: 'lesson-13',
    title: 'The Subjunctive',
    subtitle: 'Expressing doubt, emotion, necessity, and subjectivity.',
    theory: `
      <p>The <em>subjunctive</em> (<span class="fr">le subjonctif</span>) is a verb <em>mood</em>, not a tense. It is used to express subjectivity: doubt, emotion, necessity, possibility, or personal judgement. In English the subjunctive has nearly disappeared — we say "I suggest that he <em>be</em> present" only in stiff formal writing. In French, by contrast, the subjunctive is fully alive and used daily. Learning to recognise its triggers is one of the hurdles between intermediate and advanced fluency.</p>

      <p>The subjunctive almost always appears in a subordinate clause introduced by <span class="fr">que</span>, following a main clause that expresses one of the trigger meanings — emotion, doubt, desire, necessity, or judgement. <span class="fr">Il faut que tu viennes</span> <button class="play-btn" data-text="il faut que tu viennes">▶</button>, <span class="fr">je veux que tu sois là</span> <button class="play-btn" data-text="je veux que tu sois là">▶</button>, <span class="fr">je doute qu'il sache</span>. The trigger sits in the main clause; the subjunctive appears after <span class="fr">que</span>.</p>

      <p>To form the present subjunctive of a regular verb: take the <span class="fr">ils/elles</span> form of the present tense, drop the <span class="fr">-ent</span> ending, and add the subjunctive endings: <span class="fr">-e, -es, -e, -ions, -iez, -ent</span>. For <span class="fr">parler</span>: <span class="fr">ils parlent</span> → stem <span class="fr">parl-</span> → <span class="fr">que je parle, que tu parles, qu'il parle, que nous parlions, que vous parliez, qu'ils parlent</span>. The <span class="fr">nous</span> and <span class="fr">vous</span> forms happen to be identical to the imparfait — a small mercy.</p>

      <div class="rule-box">
        <strong>Key irregular subjunctives</strong><br>
        être → <span class="fr">que je sois, tu sois, il soit, nous soyons, vous soyez, ils soient</span><br>
        avoir → <span class="fr">que j'aie, tu aies, il ait, nous ayons, vous ayez, ils aient</span><br>
        aller → <span class="fr">que j'aille</span> &nbsp; faire → <span class="fr">que je fasse</span><br>
        pouvoir → <span class="fr">que je puisse</span> &nbsp; vouloir → <span class="fr">que je veuille</span><br>
        savoir → <span class="fr">que je sache</span>
      </div>

      <p>A handful of irregular subjunctives must be memorised because they are the most common verbs in the language. <span class="fr">Être</span> and <span class="fr">avoir</span> are the priorities — they alone will appear in most of your subjunctive sentences. After them, <span class="fr">aller</span>, <span class="fr">faire</span>, <span class="fr">pouvoir</span>, <span class="fr">vouloir</span>, and <span class="fr">savoir</span> round out the essential list. Drill these aloud until <span class="fr">que je sois</span> and <span class="fr">que j'aie</span> come without thinking.</p>

      <p>What triggers the subjunctive? A short list to memorise. <em>Necessity:</em> <span class="fr">il faut que</span>, <span class="fr">il est nécessaire que</span>. <em>Emotion:</em> <span class="fr">je suis content que</span>, <span class="fr">j'ai peur que</span>, <span class="fr">je regrette que</span>. <em>Doubt or denial:</em> <span class="fr">je doute que</span>, <span class="fr">il est possible que</span>, <span class="fr">je ne pense pas que</span>. <em>Desire and preference:</em> <span class="fr">je veux que</span>, <span class="fr">je préfère que</span>, <span class="fr">j'aimerais que</span>. <em>Certain conjunctions:</em> <span class="fr">bien que</span> (although), <span class="fr">avant que</span> (before), <span class="fr">pour que</span> (so that), <span class="fr">à moins que</span> (unless). When you see one of these phrases, expect the subjunctive in what follows.</p>
    `,
    examples: [
      { fr: 'Il faut que tu viennes.', en: 'You have to come.', note: 'il faut que → necessity trigger.' },
      { fr: 'Je veux que tu sois là.', en: 'I want you to be there.', note: 'vouloir que + subjunctive of être.' },
      { fr: "Je suis content qu'il fasse beau.", en: "I'm glad the weather is nice.", note: 'Emotion trigger; irregular fasse.' },
      { fr: "Bien qu'il soit fatigué, il travaille.", en: 'Although he is tired, he works.', note: 'bien que = conjunction trigger.' },
      { fr: "Je doute qu'elle sache la réponse.", en: 'I doubt she knows the answer.', note: 'doubt trigger; irregular sache.' },
      { fr: 'Il faut que vous parliez plus lentement.', en: 'You need to speak more slowly.', note: 'il faut que — practical, everyday use.' },
      { fr: "Je regrette qu'il ne puisse pas venir.", en: "I'm sorry he can't come.", note: 'Emotion trigger; irregular puisse.' },
      { fr: "Appelle-moi avant qu'il parte.", en: 'Call me before he leaves.', note: 'avant que = conjunction trigger.' },
      { fr: "Il est possible qu'elle ait raison.", en: "It's possible she's right.", note: 'Possibility + irregular subjunctive of avoir.' },
      { fr: 'Je préfère que nous prenions le train.', en: 'I prefer that we take the train.', note: 'Preference trigger.' }
    ],
    exercises: [
      {
        q: 'What is the subjunctive?',
        options: ['A tense', 'A mood', 'A verb form only used in writing', 'A type of adjective'],
        correct: 1,
        explanation: 'The subjunctive is a mood, not a tense. It expresses subjectivity — doubt, emotion, necessity.'
      },
      {
        q: 'What word usually introduces a subjunctive clause?',
        options: ['si', 'quand', 'que', 'parce que'],
        correct: 2,
        explanation: 'The subjunctive almost always appears after que, following a trigger expression in the main clause.'
      },
      {
        q: 'Form the subjunctive of parler for je (start from ils parlent).',
        options: ['que je parle', 'que je parles', 'que je parlé', 'que je parlais'],
        correct: 0,
        explanation: 'Ils parlent → parl- + e = que je parle. Same as the indicative for -er verbs, but the trigger makes it subjunctive.'
      },
      {
        q: 'Which triggers the subjunctive?',
        options: ['Je pense que', 'Il faut que', 'Je sais que', 'Il dit que'],
        correct: 1,
        explanation: 'Il faut que expresses necessity — always triggers the subjunctive. Penser que, savoir que, dire que use the indicative.'
      },
      {
        q: 'What is the subjunctive of être for il?',
        options: ['est', 'soit', 'serait', 'était'],
        correct: 1,
        explanation: 'Être is irregular in the subjunctive: que je sois, que tu sois, qu\'il soit.'
      },
      {
        q: 'Complete: Je suis content ___ tu sois là.',
        options: ['si', 'quand', 'que', 'parce que'],
        correct: 2,
        explanation: 'Emotion (content) + que triggers the subjunctive.'
      },
      {
        q: 'Which sentence correctly uses the subjunctive?',
        options: ['Il faut que tu viens', 'Il faut que tu viennes', 'Il faut tu viennes', 'Il faut que tu venais'],
        correct: 1,
        explanation: 'Il faut que triggers the subjunctive. Venir → ils viennent → vienn- + es = viennes.'
      },
      {
        q: 'Which conjunction always triggers the subjunctive?',
        options: ['parce que', 'quand', 'bien que', 'si'],
        correct: 2,
        explanation: 'Bien que (although) always triggers the subjunctive. Parce que, quand, and si use the indicative.'
      }
    ]
  }
];


// ============================================================
// VOCABULARY DATABASE
// ============================================================

const VOCAB_DB = [
  // ESSENTIALS
  { fr: 'oui', en: 'yes', ipa: '/wi/', cat: 'Essentials', examples: ['Oui, je comprends.', 'Oui, merci beaucoup.'] },
  { fr: 'non', en: 'no', ipa: '/nɔ̃/', cat: 'Essentials', examples: ['Non, pas du tout.', 'Non, je ne veux pas.'] },
  { fr: 'merci', en: 'thank you', ipa: '/mɛʁ.si/', cat: 'Essentials', examples: ['Merci pour votre aide.', 'Merci beaucoup, monsieur.'] },
  { fr: "s'il vous plaît", en: 'please (formal)', ipa: '/sil vu plɛ/', cat: 'Essentials', examples: ["L'addition, s'il vous plaît.", "Un café, s'il vous plaît."] },
  { fr: "s'il te plaît", en: 'please (informal)', ipa: '/sil tə plɛ/', cat: 'Essentials', examples: ["Passe-moi le sel, s'il te plaît.", "Aide-moi, s'il te plaît."] },
  { fr: 'de rien', en: "you're welcome", ipa: '/də ʁjɛ̃/', cat: 'Essentials', examples: ['— Merci. — De rien.', 'De rien, ça me fait plaisir.'] },
  { fr: 'pardon', en: 'sorry / excuse me', ipa: '/paʁ.dɔ̃/', cat: 'Essentials', examples: ['Pardon, je suis en retard.', 'Pardon, où est la gare?'] },
  { fr: 'excusez-moi', en: 'excuse me (formal)', ipa: '/ɛk.sky.ze mwa/', cat: 'Essentials', examples: ['Excusez-moi, pouvez-vous répéter?', "Excusez-moi, je cherche l'hôtel."] },
  { fr: 'peut-être', en: 'maybe', ipa: '/pø.t‿ɛtʁ/', cat: 'Essentials', examples: ['Peut-être demain.', "Peut-être qu'il pleut."] },
  { fr: 'bien sûr', en: 'of course', ipa: '/bjɛ̃ syʁ/', cat: 'Essentials', examples: ['Bien sûr, avec plaisir.', 'Bien sûr que oui.'] },
  { fr: "d'accord", en: 'okay / agreed', ipa: '/da.kɔʁ/', cat: 'Essentials', examples: ["D'accord, on y va.", "Tu es d'accord avec moi?"] },
  { fr: 'aujourd\'hui', en: 'today', ipa: '/o.ʒuʁ.dɥi/', cat: 'Essentials', examples: ['Aujourd\'hui il fait beau.', 'On se voit aujourd\'hui?'] },
  { fr: 'demain', en: 'tomorrow', ipa: '/də.mɛ̃/', cat: 'Essentials', examples: ['À demain!', 'On commence demain matin.'] },
  { fr: 'hier', en: 'yesterday', ipa: '/jɛʁ/', cat: 'Essentials', examples: ["Hier, j'étais malade.", "Il est venu hier soir."] },
  { fr: 'maintenant', en: 'now', ipa: '/mɛ̃t.nɑ̃/', cat: 'Essentials', examples: ['On y va maintenant?', "Maintenant, j'ai compris."] },

  // GREETINGS
  { fr: 'bonjour', en: 'hello / good morning', ipa: '/bɔ̃.ʒuʁ/', cat: 'Greetings', examples: ['Bonjour, madame.', 'Bonjour, comment allez-vous?'] },
  { fr: 'bonsoir', en: 'good evening', ipa: '/bɔ̃.swaʁ/', cat: 'Greetings', examples: ['Bonsoir, monsieur.', 'Bonsoir, bienvenue.'] },
  { fr: 'salut', en: 'hi / bye (casual)', ipa: '/sa.ly/', cat: 'Greetings', examples: ['Salut, ça va?', 'Salut, à bientôt!'] },
  { fr: 'au revoir', en: 'goodbye', ipa: '/o ʁə.vwaʁ/', cat: 'Greetings', examples: ['Au revoir, à demain.', 'Au revoir et bonne soirée.'] },
  { fr: 'à bientôt', en: 'see you soon', ipa: '/a bjɛ̃.to/', cat: 'Greetings', examples: ['À bientôt, mon ami.', 'Merci, à bientôt!'] },
  { fr: 'à demain', en: 'see you tomorrow', ipa: '/a də.mɛ̃/', cat: 'Greetings', examples: ['Bonne nuit, à demain.', 'À demain au bureau.'] },
  { fr: 'à tout à l\'heure', en: 'see you later (today)', ipa: '/a tu ta lœʁ/', cat: 'Greetings', examples: ["À tout à l'heure!", "On se voit à tout à l'heure."] },
  { fr: 'enchanté', en: 'pleased to meet you', ipa: '/ɑ̃.ʃɑ̃.te/', cat: 'Greetings', examples: ['Enchanté de vous rencontrer.', '— Bonjour, je m\'appelle Anne. — Enchanté.'] },
  { fr: 'comment ça va', en: 'how are you', ipa: '/kɔ.mɑ̃ sa va/', cat: 'Greetings', examples: ['Salut! Comment ça va?', 'Comment ça va aujourd\'hui?'] },
  { fr: 'ça va bien', en: "I'm well", ipa: '/sa va bjɛ̃/', cat: 'Greetings', examples: ['Ça va bien, merci.', 'Oui, ça va bien et toi?'] },
  { fr: 'bonne nuit', en: 'good night', ipa: '/bɔn nɥi/', cat: 'Greetings', examples: ['Bonne nuit, dors bien.', 'Bonne nuit, à demain.'] },
  { fr: 'bienvenue', en: 'welcome', ipa: '/bjɛ̃v.ny/', cat: 'Greetings', examples: ['Bienvenue à Paris!', 'Bienvenue chez nous.'] },

  // NUMBERS
  { fr: 'un', en: 'one', ipa: '/œ̃/', cat: 'Numbers', examples: ['J\'ai un frère.', 'Un café, s\'il vous plaît.'] },
  { fr: 'deux', en: 'two', ipa: '/dø/', cat: 'Numbers', examples: ['Deux thés, s\'il vous plaît.', 'J\'ai deux enfants.'] },
  { fr: 'trois', en: 'three', ipa: '/tʁwa/', cat: 'Numbers', examples: ['Trois jours plus tard.', 'Il est trois heures.'] },
  { fr: 'quatre', en: 'four', ipa: '/katʁ/', cat: 'Numbers', examples: ['Quatre saisons.', 'Quatre euros.'] },
  { fr: 'cinq', en: 'five', ipa: '/sɛ̃k/', cat: 'Numbers', examples: ['Cinq minutes.', 'Une famille de cinq.'] },
  { fr: 'six', en: 'six', ipa: '/sis/', cat: 'Numbers', examples: ['Six heures du matin.', 'Six personnes à table.'] },
  { fr: 'sept', en: 'seven', ipa: '/sɛt/', cat: 'Numbers', examples: ['Sept jours dans la semaine.', 'Il a sept ans.'] },
  { fr: 'huit', en: 'eight', ipa: '/ɥit/', cat: 'Numbers', examples: ['Huit euros.', 'À huit heures.'] },
  { fr: 'neuf', en: 'nine', ipa: '/nœf/', cat: 'Numbers', examples: ['Neuf heures du soir.', 'Neuf étudiants.'] },
  { fr: 'dix', en: 'ten', ipa: '/dis/', cat: 'Numbers', examples: ['Dix doigts, dix orteils.', 'Pour dix euros.'] },
  { fr: 'vingt', en: 'twenty', ipa: '/vɛ̃/', cat: 'Numbers', examples: ['J\'ai vingt ans.', 'Vingt minutes plus tard.'] },
  { fr: 'trente', en: 'thirty', ipa: '/tʁɑ̃t/', cat: 'Numbers', examples: ['Trente euros.', 'Il a trente ans.'] },
  { fr: 'cinquante', en: 'fifty', ipa: '/sɛ̃.kɑ̃t/', cat: 'Numbers', examples: ['Cinquante personnes étaient là.', 'Cinquante kilomètres.'] },
  { fr: 'cent', en: 'one hundred', ipa: '/sɑ̃/', cat: 'Numbers', examples: ['Cent euros.', 'Cent ans plus tard.'] },
  { fr: 'mille', en: 'one thousand', ipa: '/mil/', cat: 'Numbers', examples: ['Mille mercis.', 'Mille euros.'] },
  { fr: 'premier', en: 'first', ipa: '/pʁə.mje/', cat: 'Numbers', examples: ['Le premier jour.', 'Le premier de la classe.'] },
  { fr: 'deuxième', en: 'second', ipa: '/dø.zjɛm/', cat: 'Numbers', examples: ['La deuxième fois.', 'Au deuxième étage.'] },
  { fr: 'zéro', en: 'zero', ipa: '/ze.ʁo/', cat: 'Numbers', examples: ['Il fait zéro degré.', 'Le score est de zéro à un.'] },
  { fr: 'onze', en: 'eleven', ipa: '/ɔ̃z/', cat: 'Numbers', examples: ['Il est onze heures.', 'Onze joueurs sur le terrain.'] },
  { fr: 'douze', en: 'twelve', ipa: '/duz/', cat: 'Numbers', examples: ['Une douzaine d\'œufs, douze œufs.', 'À midi, douze heures.'] },
  { fr: 'quarante', en: 'forty', ipa: '/ka.ʁɑ̃t/', cat: 'Numbers', examples: ['Il a quarante ans.', 'Quarante euros par jour.'] },
  { fr: 'un million', en: 'one million', ipa: '/œ̃ mi.ljɔ̃/', cat: 'Numbers', examples: ['Un million d\'euros.', 'Plus d\'un million de personnes.'] },

  // DAYS & MONTHS
  { fr: 'lundi', en: 'Monday', ipa: '/lœ̃.di/', cat: 'Days & Months', examples: ['Lundi prochain.', 'On se voit lundi?'] },
  { fr: 'mardi', en: 'Tuesday', ipa: '/maʁ.di/', cat: 'Days & Months', examples: ['Mardi matin.', 'À mardi!'] },
  { fr: 'mercredi', en: 'Wednesday', ipa: '/mɛʁ.kʁə.di/', cat: 'Days & Months', examples: ['Mercredi après-midi.', 'On déjeune mercredi.'] },
  { fr: 'jeudi', en: 'Thursday', ipa: '/ʒø.di/', cat: 'Days & Months', examples: ['Jeudi soir.', 'Réunion jeudi.'] },
  { fr: 'vendredi', en: 'Friday', ipa: '/vɑ̃.dʁə.di/', cat: 'Days & Months', examples: ['Vendredi enfin!', 'Le marché du vendredi.'] },
  { fr: 'samedi', en: 'Saturday', ipa: '/sam.di/', cat: 'Days & Months', examples: ['Samedi soir.', 'On part samedi.'] },
  { fr: 'dimanche', en: 'Sunday', ipa: '/di.mɑ̃ʃ/', cat: 'Days & Months', examples: ['Dimanche en famille.', 'Le dimanche matin.'] },
  { fr: 'janvier', en: 'January', ipa: '/ʒɑ̃.vje/', cat: 'Days & Months', examples: ['Au mois de janvier.', 'En janvier, il fait froid.'] },
  { fr: 'février', en: 'February', ipa: '/fe.vʁi.je/', cat: 'Days & Months', examples: ['Février est court.', 'Le 14 février.'] },
  { fr: 'mars', en: 'March', ipa: '/maʁs/', cat: 'Days & Months', examples: ['Mars apporte le printemps.', 'Au début de mars.'] },
  { fr: 'avril', en: 'April', ipa: '/a.vʁil/', cat: 'Days & Months', examples: ['En avril, ne te découvre pas d\'un fil.', 'Les pluies d\'avril.'] },
  { fr: 'mai', en: 'May', ipa: '/mɛ/', cat: 'Days & Months', examples: ['Le premier mai.', 'En mai, les fleurs poussent.'] },
  { fr: 'juin', en: 'June', ipa: '/ʒɥɛ̃/', cat: 'Days & Months', examples: ['En juin, les vacances commencent.', 'Le 21 juin.'] },
  { fr: 'juillet', en: 'July', ipa: '/ʒɥi.jɛ/', cat: 'Days & Months', examples: ['Le 14 juillet.', 'Juillet est chaud.'] },
  { fr: 'août', en: 'August', ipa: '/u(t)/', cat: 'Days & Months', examples: ['Les vacances d\'août.', 'Tout est fermé en août.'] },
  { fr: 'septembre', en: 'September', ipa: '/sɛp.tɑ̃bʁ/', cat: 'Days & Months', examples: ['La rentrée en septembre.', 'Septembre est doux.'] },
  { fr: 'octobre', en: 'October', ipa: '/ɔk.tɔbʁ/', cat: 'Days & Months', examples: ['En octobre, les feuilles tombent.', 'Le mois d\'octobre.'] },
  { fr: 'novembre', en: 'November', ipa: '/nɔ.vɑ̃bʁ/', cat: 'Days & Months', examples: ['Novembre est gris.', 'À la fin de novembre.'] },
  { fr: 'décembre', en: 'December', ipa: '/de.sɑ̃bʁ/', cat: 'Days & Months', examples: ['Décembre et les fêtes.', 'Le 25 décembre.'] },

  // FOOD & DRINK
  { fr: 'le pain', en: 'bread', ipa: '/lə pɛ̃/', cat: 'Food & Drink', gender: 'm', examples: ['Le pain est frais.', 'Une baguette de pain.'] },
  { fr: 'le fromage', en: 'cheese', ipa: '/lə fʁɔ.maʒ/', cat: 'Food & Drink', gender: 'm', examples: ['Le fromage français est célèbre.', 'Un plateau de fromages.'] },
  { fr: 'le vin', en: 'wine', ipa: '/lə vɛ̃/', cat: 'Food & Drink', gender: 'm', examples: ['Un verre de vin rouge.', 'Le vin de Bordeaux.'] },
  { fr: 'le café', en: 'coffee', ipa: '/lə ka.fe/', cat: 'Food & Drink', gender: 'm', examples: ['Un café noir, s\'il vous plaît.', 'Le café est trop fort.'] },
  { fr: 'le thé', en: 'tea', ipa: '/lə te/', cat: 'Food & Drink', gender: 'm', examples: ['Un thé au citron.', 'Le thé est chaud.'] },
  { fr: "l'eau", en: 'water', ipa: '/lo/', cat: 'Food & Drink', gender: 'f', examples: ['Un verre d\'eau, s\'il vous plaît.', 'L\'eau est froide.'] },
  { fr: 'la bière', en: 'beer', ipa: '/la bjɛʁ/', cat: 'Food & Drink', gender: 'f', examples: ['Une bière belge.', 'La bière est bien fraîche.'] },
  { fr: 'la viande', en: 'meat', ipa: '/la vjɑ̃d/', cat: 'Food & Drink', gender: 'f', examples: ['Je ne mange pas de viande.', 'La viande est bien cuite.'] },
  { fr: 'le poisson', en: 'fish', ipa: '/lə pwa.sɔ̃/', cat: 'Food & Drink', gender: 'm', examples: ['Le poisson du jour.', 'Un poisson grillé.'] },
  { fr: 'le poulet', en: 'chicken', ipa: '/lə pu.lɛ/', cat: 'Food & Drink', gender: 'm', examples: ['Le poulet rôti est excellent.', 'Un sandwich au poulet.'] },
  { fr: 'les légumes', en: 'vegetables', ipa: '/le le.gym/', cat: 'Food & Drink', gender: 'm', examples: ['Mange tes légumes.', 'Une soupe de légumes.'] },
  { fr: 'les fruits', en: 'fruits', ipa: '/le fʁɥi/', cat: 'Food & Drink', gender: 'm', examples: ['Des fruits frais.', 'Une salade de fruits.'] },
  { fr: 'la pomme', en: 'apple', ipa: '/la pɔm/', cat: 'Food & Drink', gender: 'f', examples: ['Une pomme par jour.', 'Une tarte aux pommes.'] },
  { fr: 'le croissant', en: 'croissant', ipa: '/lə kʁwa.sɑ̃/', cat: 'Food & Drink', gender: 'm', examples: ['Un croissant au beurre.', 'Deux croissants, s\'il vous plaît.'] },
  { fr: 'le sucre', en: 'sugar', ipa: '/lə sykʁ/', cat: 'Food & Drink', gender: 'm', examples: ['Avec du sucre, merci.', 'Sans sucre, s\'il vous plaît.'] },
  { fr: 'le sel', en: 'salt', ipa: '/lə sɛl/', cat: 'Food & Drink', gender: 'm', examples: ['Passe-moi le sel.', 'Il manque du sel.'] },
  { fr: 'le petit déjeuner', en: 'breakfast', ipa: '/lə pə.ti de.ʒœ.ne/', cat: 'Food & Drink', gender: 'm', examples: ['Le petit déjeuner est servi.', 'Je prends mon petit déjeuner.'] },
  { fr: 'le déjeuner', en: 'lunch', ipa: '/lə de.ʒœ.ne/', cat: 'Food & Drink', gender: 'm', examples: ['Le déjeuner est à midi.', 'On va déjeuner.'] },
  { fr: 'le dîner', en: 'dinner', ipa: '/lə di.ne/', cat: 'Food & Drink', gender: 'm', examples: ['Le dîner est prêt.', 'On dîne à huit heures.'] },
  { fr: "l'addition", en: 'the bill', ipa: '/la.di.sjɔ̃/', cat: 'Food & Drink', gender: 'f', examples: ['L\'addition, s\'il vous plaît.', 'On demande l\'addition.'] },
  { fr: "l'eau minérale", en: 'mineral water', ipa: '/lo mi.ne.ʁal/', cat: 'Food & Drink', gender: 'f', examples: ['Une bouteille d\'eau minérale, s\'il vous plaît.', 'Je préfère l\'eau minérale gazeuse.'] },
  { fr: 'le bœuf', en: 'beef', ipa: '/lə bœf/', cat: 'Food & Drink', gender: 'm', examples: ['Un steak de bœuf saignant.', 'Le bœuf bourguignon est un plat classique.'] },
  { fr: 'la salade', en: 'salad', ipa: '/la sa.lad/', cat: 'Food & Drink', gender: 'f', examples: ['Une salade verte en entrée.', 'La salade niçoise est délicieuse.'] },
  { fr: 'les pâtes', en: 'pasta', ipa: '/le pɑt/', cat: 'Food & Drink', gender: 'f', examples: ['Des pâtes à la sauce tomate.', 'Les enfants adorent les pâtes.'] },
  { fr: 'le riz', en: 'rice', ipa: '/lə ʁi/', cat: 'Food & Drink', gender: 'm', examples: ['Du riz blanc avec le poulet.', 'Le riz est cuit à la perfection.'] },
  { fr: 'la soupe', en: 'soup', ipa: '/la sup/', cat: 'Food & Drink', gender: 'f', examples: ['Une soupe à l\'oignon.', 'La soupe est bien chaude.'] },
  { fr: 'le dessert', en: 'dessert', ipa: '/lə de.sɛʁ/', cat: 'Food & Drink', gender: 'm', examples: ['Qu\'est-ce qu\'il y a comme dessert?', 'Le dessert est compris dans le menu.'] },
  { fr: 'le menu', en: 'set menu', ipa: '/lə mə.ny/', cat: 'Food & Drink', gender: 'm', examples: ['Je prends le menu à vingt euros.', 'Le menu du jour est intéressant.'] },

  // TRAVEL
  { fr: 'la gare', en: 'train station', ipa: '/la gaʁ/', cat: 'Travel', gender: 'f', examples: ['La gare du Nord.', 'On se retrouve à la gare.'] },
  { fr: "l'aéroport", en: 'airport', ipa: '/la.e.ʁɔ.pɔʁ/', cat: 'Travel', gender: 'm', examples: ['L\'aéroport est à dix kilomètres.', 'Je vais à l\'aéroport.'] },
  { fr: 'le train', en: 'train', ipa: '/lə tʁɛ̃/', cat: 'Travel', gender: 'm', examples: ['Le train part à dix heures.', 'Un billet de train.'] },
  { fr: 'le métro', en: 'metro / subway', ipa: '/lə me.tʁo/', cat: 'Travel', gender: 'm', examples: ['Je prends le métro.', 'Le métro est rapide.'] },
  { fr: 'le bus', en: 'bus', ipa: '/lə bys/', cat: 'Travel', gender: 'm', examples: ['Le bus numéro vingt.', 'On attend le bus.'] },
  { fr: 'la voiture', en: 'car', ipa: '/la vwa.tyʁ/', cat: 'Travel', gender: 'f', examples: ['Ma voiture est rouge.', 'On y va en voiture.'] },
  { fr: 'le vélo', en: 'bicycle', ipa: '/lə ve.lo/', cat: 'Travel', gender: 'm', examples: ['Je vais au travail en vélo.', 'Un vélo électrique.'] },
  { fr: "l'hôtel", en: 'hotel', ipa: '/lo.tɛl/', cat: 'Travel', gender: 'm', examples: ['Notre hôtel est près du centre.', 'Je cherche un hôtel.'] },
  { fr: 'le billet', en: 'ticket', ipa: '/lə bi.jɛ/', cat: 'Travel', gender: 'm', examples: ['Un billet aller-retour.', 'Le billet coûte vingt euros.'] },
  { fr: 'la valise', en: 'suitcase', ipa: '/la va.liz/', cat: 'Travel', gender: 'f', examples: ['Ma valise est lourde.', 'Une valise à roulettes.'] },
  { fr: 'le passeport', en: 'passport', ipa: '/lə pas.pɔʁ/', cat: 'Travel', gender: 'm', examples: ['Votre passeport, s\'il vous plaît.', 'Mon passeport expire.'] },
  { fr: 'à gauche', en: 'on the left', ipa: '/a goʃ/', cat: 'Travel', examples: ['Tournez à gauche.', 'La banque est à gauche.'] },
  { fr: 'à droite', en: 'on the right', ipa: '/a dʁwat/', cat: 'Travel', examples: ['Tournez à droite.', 'À droite après le feu.'] },
  { fr: 'tout droit', en: 'straight ahead', ipa: '/tu dʁwa/', cat: 'Travel', examples: ['Allez tout droit.', 'Tout droit pendant cent mètres.'] },
  { fr: 'la rue', en: 'street', ipa: '/la ʁy/', cat: 'Travel', gender: 'f', examples: ['Dans la rue principale.', 'La rue est bondée.'] },
  { fr: "l'arrêt", en: 'stop', ipa: '/la.ʁɛ/', cat: 'Travel', gender: 'm', examples: ['Le prochain arrêt.', 'Un arrêt de bus.'] },
  { fr: 'le taxi', en: 'taxi', ipa: '/lə tak.si/', cat: 'Travel', gender: 'm', examples: ['Je prends un taxi à la gare.', 'Le taxi attend devant l\'hôtel.'] },
  { fr: 'la chambre', en: 'room', ipa: '/la ʃɑ̃bʁ/', cat: 'Travel', gender: 'f', examples: ['Une chambre double pour deux nuits.', 'La chambre est au troisième étage.'] },
  { fr: "l'office de tourisme", en: 'tourist office', ipa: '/lɔ.fis də tu.ʁism/', cat: 'Travel', gender: 'm', examples: ['L\'office de tourisme est sur la place.', 'Allez à l\'office de tourisme pour une carte.'] },
  { fr: 'la carte', en: 'map', ipa: '/la kaʁt/', cat: 'Travel', gender: 'f', examples: ['Vous avez une carte de la ville?', 'La carte est dans mon sac.'] },
  { fr: "près d'ici", en: 'near here', ipa: '/pʁɛ di.si/', cat: 'Travel', examples: ['Il y a un café près d\'ici?', 'Le musée est près d\'ici.'] },
  { fr: "loin d'ici", en: 'far from here', ipa: '/lwɛ̃ di.si/', cat: 'Travel', examples: ['Ce n\'est pas loin d\'ici.', 'L\'aéroport est loin d\'ici?'] },
  { fr: 'combien ça coûte', en: 'how much is it', ipa: '/kɔ̃.bjɛ̃ sa kut/', cat: 'Travel', examples: ['Combien ça coûte, ce billet?', 'Pardon, combien ça coûte?'] },
  { fr: 'où est', en: 'where is', ipa: '/u ɛ/', cat: 'Travel', examples: ['Où est la gare, s\'il vous plaît?', 'Où est l\'arrêt de bus?'] },

  // WORK
  { fr: 'le travail', en: 'work', ipa: '/lə tʁa.vaj/', cat: 'Work', gender: 'm', examples: ['Le travail est intéressant.', 'Beaucoup de travail aujourd\'hui.'] },
  { fr: 'le bureau', en: 'office / desk', ipa: '/lə by.ʁo/', cat: 'Work', gender: 'm', examples: ['Au bureau à neuf heures.', 'Mon bureau est en désordre.'] },
  { fr: 'la réunion', en: 'meeting', ipa: '/la ʁe.y.njɔ̃/', cat: 'Work', gender: 'f', examples: ['Une réunion à quinze heures.', 'La réunion dure une heure.'] },
  { fr: 'le projet', en: 'project', ipa: '/lə pʁɔ.ʒɛ/', cat: 'Work', gender: 'm', examples: ['Un nouveau projet.', 'Le projet avance bien.'] },
  { fr: 'le collègue', en: 'colleague', ipa: '/lə kɔ.lɛg/', cat: 'Work', gender: 'm', examples: ['Mon collègue est sympa.', 'Une collègue de travail.'] },
  { fr: 'le patron', en: 'boss', ipa: '/lə pa.tʁɔ̃/', cat: 'Work', gender: 'm', examples: ['Mon patron est exigeant.', 'Le patron arrive à huit heures.'] },
  { fr: "l'entreprise", en: 'company', ipa: '/lɑ̃.tʁə.pʁiz/', cat: 'Work', gender: 'f', examples: ['Une grande entreprise.', 'L\'entreprise se développe.'] },
  { fr: "l'ordinateur", en: 'computer', ipa: '/lɔʁ.di.na.tœʁ/', cat: 'Work', gender: 'm', examples: ['Mon ordinateur est lent.', 'Un ordinateur portable.'] },
  { fr: "l'email", en: 'email', ipa: '/li.mɛl/', cat: 'Work', gender: 'm', examples: ['J\'envoie un email.', 'L\'email est arrivé.'] },
  { fr: 'le rendez-vous', en: 'appointment', ipa: '/lə ʁɑ̃.de vu/', cat: 'Work', gender: 'm', examples: ['Un rendez-vous important.', 'J\'ai un rendez-vous à dix heures.'] },
  { fr: "l'horaire", en: 'schedule', ipa: '/lɔ.ʁɛʁ/', cat: 'Work', gender: 'm', examples: ['L\'horaire est chargé.', 'Mon horaire de travail.'] },
  { fr: 'le salaire', en: 'salary', ipa: '/lə sa.lɛʁ/', cat: 'Work', gender: 'm', examples: ['Un bon salaire.', 'Le salaire mensuel.'] },

  // ADJECTIVES
  { fr: 'bon', en: 'good', ipa: '/bɔ̃/', cat: 'Adjectives', examples: ['Un bon café.', 'C\'est bon, merci.'] },
  { fr: 'mauvais', en: 'bad', ipa: '/mo.vɛ/', cat: 'Adjectives', examples: ['Le temps est mauvais.', 'Un mauvais film.'] },
  { fr: 'grand', en: 'big / tall', ipa: '/gʁɑ̃/', cat: 'Adjectives', examples: ['Une grande maison.', 'Il est grand.'] },
  { fr: 'petit', en: 'small', ipa: '/pə.ti/', cat: 'Adjectives', examples: ['Un petit chien.', 'C\'est un petit problème.'] },
  { fr: 'jeune', en: 'young', ipa: '/ʒœn/', cat: 'Adjectives', examples: ['Un homme jeune.', 'Elle est encore jeune.'] },
  { fr: 'vieux', en: 'old', ipa: '/vjø/', cat: 'Adjectives', examples: ['Un vieux livre.', 'Mon vieux quartier.'] },
  { fr: 'beau', en: 'beautiful', ipa: '/bo/', cat: 'Adjectives', examples: ['Un beau paysage.', 'Il fait beau aujourd\'hui.'] },
  { fr: 'joli', en: 'pretty', ipa: '/ʒɔ.li/', cat: 'Adjectives', examples: ['Une jolie robe.', 'Quel joli jardin!'] },
  { fr: 'nouveau', en: 'new', ipa: '/nu.vo/', cat: 'Adjectives', examples: ['Un nouveau projet.', 'Une nouvelle voiture.'] },
  { fr: 'vrai', en: 'true', ipa: '/vʁɛ/', cat: 'Adjectives', examples: ['C\'est vrai.', 'Une vraie histoire.'] },
  { fr: 'faux', en: 'false', ipa: '/fo/', cat: 'Adjectives', examples: ['C\'est faux.', 'Une fausse information.'] },
  { fr: 'facile', en: 'easy', ipa: '/fa.sil/', cat: 'Adjectives', examples: ['C\'est facile.', 'Un exercice facile.'] },
  { fr: 'difficile', en: 'difficult', ipa: '/di.fi.sil/', cat: 'Adjectives', examples: ['C\'est difficile.', 'Une question difficile.'] },
  { fr: 'chaud', en: 'hot', ipa: '/ʃo/', cat: 'Adjectives', examples: ['Le café est chaud.', 'Il fait chaud.'] },
  { fr: 'froid', en: 'cold', ipa: '/fʁwa/', cat: 'Adjectives', examples: ['Il fait froid.', 'L\'eau est froide.'] },
  { fr: 'content', en: 'happy', ipa: '/kɔ̃.tɑ̃/', cat: 'Adjectives', examples: ['Je suis content.', 'Elle est très contente.'] },
  { fr: 'triste', en: 'sad', ipa: '/tʁist/', cat: 'Adjectives', examples: ['Pourquoi tu es triste?', 'Une histoire triste.'] },
  { fr: 'fatigué', en: 'tired', ipa: '/fa.ti.ge/', cat: 'Adjectives', examples: ['Je suis fatigué.', 'Une journée fatigante.'] },
  { fr: 'rouge', en: 'red', ipa: '/ʁuʒ/', cat: 'Adjectives', examples: ['Une voiture rouge.', 'Le vin rouge.'] },
  { fr: 'bleu', en: 'blue', ipa: '/blø/', cat: 'Adjectives', examples: ['Le ciel est bleu.', 'Une chemise bleue.'] },
  { fr: 'vert', en: 'green', ipa: '/vɛʁ/', cat: 'Adjectives', examples: ['Une pomme verte.', 'Le feu est vert.'] },
  { fr: 'noir', en: 'black', ipa: '/nwaʁ/', cat: 'Adjectives', examples: ['Un café noir.', 'Une nuit noire.'] },
  { fr: 'blanc', en: 'white', ipa: '/blɑ̃/', cat: 'Adjectives', examples: ['Du vin blanc.', 'Une chemise blanche.'] },

  // VERBS
  { fr: 'être', en: 'to be', ipa: '/ɛtʁ/', cat: 'Verbs', examples: ['Je suis content.', 'Nous sommes amis.'] },
  { fr: 'avoir', en: 'to have', ipa: '/a.vwaʁ/', cat: 'Verbs', examples: ['J\'ai un chien.', 'Tu as raison.'] },
  { fr: 'aller', en: 'to go', ipa: '/a.le/', cat: 'Verbs', examples: ['Je vais au cinéma.', 'On y va!'] },
  { fr: 'faire', en: 'to do / to make', ipa: '/fɛʁ/', cat: 'Verbs', examples: ['Qu\'est-ce que tu fais?', 'Je fais du sport.'] },
  { fr: 'parler', en: 'to speak', ipa: '/paʁ.le/', cat: 'Verbs', examples: ['Je parle français.', 'On parle de toi.'] },
  { fr: 'manger', en: 'to eat', ipa: '/mɑ̃.ʒe/', cat: 'Verbs', examples: ['Je mange une pomme.', 'On mange ensemble?'] },
  { fr: 'boire', en: 'to drink', ipa: '/bwaʁ/', cat: 'Verbs', examples: ['Je bois de l\'eau.', 'On boit un café?'] },
  { fr: 'dormir', en: 'to sleep', ipa: '/dɔʁ.miʁ/', cat: 'Verbs', examples: ['Je dors bien.', 'Bonne nuit, dors bien!'] },
  { fr: 'travailler', en: 'to work', ipa: '/tʁa.va.je/', cat: 'Verbs', examples: ['Je travaille à Paris.', 'Elle travaille beaucoup.'] },
  { fr: 'habiter', en: 'to live (somewhere)', ipa: '/a.bi.te/', cat: 'Verbs', examples: ['J\'habite à Lyon.', 'Tu habites où?'] },
  { fr: 'aimer', en: 'to like / to love', ipa: '/ɛ.me/', cat: 'Verbs', examples: ['J\'aime le café.', 'Tu m\'aimes?'] },
  { fr: 'vouloir', en: 'to want', ipa: '/vu.lwaʁ/', cat: 'Verbs', examples: ['Je veux un café.', 'Tu veux venir?'] },
  { fr: 'pouvoir', en: 'to be able to', ipa: '/pu.vwaʁ/', cat: 'Verbs', examples: ['Je peux t\'aider?', 'On peut commencer.'] },
  { fr: 'devoir', en: 'to have to / must', ipa: '/də.vwaʁ/', cat: 'Verbs', examples: ['Je dois partir.', 'Tu dois travailler.'] },
  { fr: 'savoir', en: 'to know (a fact)', ipa: '/sa.vwaʁ/', cat: 'Verbs', examples: ['Je sais.', 'Je ne sais pas.'] },
  { fr: 'connaître', en: 'to know (a person/place)', ipa: '/kɔ.nɛtʁ/', cat: 'Verbs', examples: ['Je connais Marie.', 'Tu connais Paris?'] },
  { fr: 'voir', en: 'to see', ipa: '/vwaʁ/', cat: 'Verbs', examples: ['Je vois.', 'On se voit demain?'] },
  { fr: 'venir', en: 'to come', ipa: '/və.niʁ/', cat: 'Verbs', examples: ['Je viens.', 'Tu viens avec nous?'] },
  { fr: 'partir', en: 'to leave', ipa: '/paʁ.tiʁ/', cat: 'Verbs', examples: ['Je pars demain.', 'On part à neuf heures.'] },
  { fr: 'prendre', en: 'to take', ipa: '/pʁɑ̃dʁ/', cat: 'Verbs', examples: ['Je prends le métro.', 'Prends ton temps.'] },
  { fr: 'donner', en: 'to give', ipa: '/dɔ.ne/', cat: 'Verbs', examples: ['Je te donne mon numéro.', 'Donne-moi la main.'] },
  { fr: 'penser', en: 'to think', ipa: '/pɑ̃.se/', cat: 'Verbs', examples: ['Je pense que oui.', 'Qu\'est-ce que tu en penses?'] },
  { fr: 'comprendre', en: 'to understand', ipa: '/kɔ̃.pʁɑ̃dʁ/', cat: 'Verbs', examples: ['Je comprends.', 'Tu comprends?'] },
  { fr: 'écouter', en: 'to listen', ipa: '/e.ku.te/', cat: 'Verbs', examples: ['J\'écoute de la musique.', 'Écoute-moi.'] },

  // BODY & HEALTH
  { fr: 'la tête', en: 'head', ipa: '/la tɛt/', cat: 'Body & Health', gender: 'f', examples: ['J\'ai mal à la tête.', 'Tourne la tête à gauche.'] },
  { fr: 'les yeux', en: 'eyes', ipa: '/le.z‿jø/', cat: 'Body & Health', gender: 'm', examples: ['Elle a les yeux bleus.', 'Ferme les yeux un instant.'] },
  { fr: 'le nez', en: 'nose', ipa: '/lə ne/', cat: 'Body & Health', gender: 'm', examples: ['Il a le nez qui coule.', 'Le nez rouge du clown.'] },
  { fr: 'la bouche', en: 'mouth', ipa: '/la buʃ/', cat: 'Body & Health', gender: 'f', examples: ['Ouvrez la bouche, s\'il vous plaît.', 'Elle a un sourire au coin de la bouche.'] },
  { fr: 'les oreilles', en: 'ears', ipa: '/le.z‿ɔ.ʁɛj/', cat: 'Body & Health', gender: 'f', examples: ['J\'ai mal aux oreilles.', 'Ses oreilles sont rouges de froid.'] },
  { fr: 'les mains', en: 'hands', ipa: '/le mɛ̃/', cat: 'Body & Health', gender: 'f', examples: ['Lave-toi les mains avant de manger.', 'Il a les mains froides.'] },
  { fr: 'les pieds', en: 'feet', ipa: '/le pje/', cat: 'Body & Health', gender: 'm', examples: ['J\'ai mal aux pieds après la marche.', 'Les enfants courent pieds nus.'] },
  { fr: 'le dos', en: 'back', ipa: '/lə do/', cat: 'Body & Health', gender: 'm', examples: ['J\'ai mal au dos depuis hier.', 'Couche-toi sur le dos.'] },
  { fr: 'le ventre', en: 'stomach / belly', ipa: '/lə vɑ̃tʁ/', cat: 'Body & Health', gender: 'm', examples: ['J\'ai mal au ventre.', 'Le ventre vide, on ne pense pas bien.'] },
  { fr: "j'ai mal à", en: 'I have a pain in', ipa: '/ʒe mal a/', cat: 'Body & Health', examples: ['J\'ai mal à la tête.', 'J\'ai mal au dos depuis ce matin.'] },
  { fr: 'je suis malade', en: 'I am sick', ipa: '/ʒə sɥi ma.lad/', cat: 'Body & Health', examples: ['Je suis malade aujourd\'hui, je reste au lit.', 'Je suis malade, je ne peux pas venir.'] },
  { fr: 'le médecin', en: 'doctor', ipa: '/lə me.tsɛ̃/', cat: 'Body & Health', gender: 'm', examples: ['Je vais chez le médecin demain.', 'Le médecin m\'a donné une ordonnance.'] },
  { fr: 'la pharmacie', en: 'pharmacy', ipa: '/la faʁ.ma.si/', cat: 'Body & Health', gender: 'f', examples: ['La pharmacie est ouverte jusqu\'à dix-neuf heures.', 'Il y a une pharmacie au coin de la rue.'] },
  { fr: 'un médicament', en: 'a medicine', ipa: '/œ̃ me.di.ka.mɑ̃/', cat: 'Body & Health', gender: 'm', examples: ['Le médecin a prescrit un médicament.', 'Ce médicament se prend trois fois par jour.'] },
  { fr: 'la douleur', en: 'pain', ipa: '/la du.lœʁ/', cat: 'Body & Health', gender: 'f', examples: ['La douleur est insupportable.', 'Cette douleur dure depuis une semaine.'] }
];


// ============================================================
// AUDIO EPISODES
// ============================================================

const EPISODES = [
  {
    id: 'ep-1',
    number: 1,
    level: 'A1',
    title: 'First Conversations',
    description: 'Meeting someone at a Parisian café — greetings, ordering, paying, saying goodbye.',
    dialogue: [
      { fr: 'Bonjour, monsieur. Bienvenue au Café de Flore.', en: 'Hello, sir. Welcome to Café de Flore.' },
      { fr: 'Bonjour. Une table pour une personne, s\'il vous plaît.', en: 'Hello. A table for one, please.' },
      { fr: 'Bien sûr. Suivez-moi par ici, près de la fenêtre.', en: 'Of course. Follow me this way, near the window.' },
      { fr: 'Merci, c\'est parfait.', en: 'Thank you, that\'s perfect.' },
      { fr: 'Voici la carte. Vous voulez boire quelque chose pour commencer?', en: 'Here is the menu. Would you like something to drink to start?' },
      { fr: 'Oui, je voudrais un café, s\'il vous plaît. Un expresso.', en: 'Yes, I would like a coffee please. An espresso.' },
      { fr: 'Très bien. Et avec ça, vous prenez quelque chose à manger?', en: 'Very good. And with that, will you have something to eat?' },
      { fr: 'Je voudrais un croissant. Il est frais?', en: 'I would like a croissant. Is it fresh?' },
      { fr: 'Oui, il sort du four. Très frais. Autre chose?', en: 'Yes, it just came out of the oven. Very fresh. Anything else?' },
      { fr: 'Non, c\'est tout, merci.', en: 'No, that\'s all, thank you.' },
      { fr: 'Parfait. Je reviens dans un instant.', en: 'Perfect. I\'ll be back in a moment.' },
      { fr: 'Voici votre café et votre croissant. Bon appétit.', en: 'Here is your coffee and your croissant. Enjoy your meal.' },
      { fr: 'Merci beaucoup. Pardon, vous travaillez ici depuis longtemps?', en: 'Thank you very much. Excuse me, have you been working here long?' },
      { fr: 'Oui, depuis cinq ans. C\'est un beau quartier, j\'aime beaucoup.', en: 'Yes, for five years. It\'s a beautiful neighborhood, I really like it.' },
      { fr: 'Le café est vraiment excellent. Très bon goût.', en: 'The coffee is really excellent. Very good taste.' },
      { fr: 'Merci. C\'est un mélange italien. Très populaire ici.', en: 'Thank you. It\'s an Italian blend. Very popular here.' },
      { fr: 'Je reviendrai. L\'addition, s\'il vous plaît.', en: 'I\'ll come back. The bill, please.' },
      { fr: 'Tout de suite. Ça fait six euros cinquante.', en: 'Right away. That comes to six euros fifty.' },
      { fr: 'Voilà, gardez la monnaie.', en: 'Here you go, keep the change.' },
      { fr: 'C\'est très gentil, merci beaucoup. Bonne journée!', en: 'That\'s very kind, thank you very much. Have a good day!' },
      { fr: 'Bonne journée à vous aussi. Au revoir!', en: 'Have a good day to you too. Goodbye!' },
      { fr: 'Au revoir, monsieur. À bientôt!', en: 'Goodbye, sir. See you soon!' }
    ]
  },

  {
    id: 'ep-2',
    number: 2,
    level: 'A1',
    title: 'Getting Around Brussels',
    description: 'Asking a stranger for directions to the Grand Place, taking the metro, finding a restaurant.',
    dialogue: [
      { fr: 'Pardon, madame. Excusez-moi de vous déranger.', en: 'Excuse me, ma\'am. Sorry to bother you.' },
      { fr: 'Pas de problème. Je peux vous aider?', en: 'No problem. Can I help you?' },
      { fr: 'Oui, s\'il vous plaît. Je cherche la Grand Place. C\'est loin d\'ici?', en: 'Yes, please. I\'m looking for the Grand Place. Is it far from here?' },
      { fr: 'Non, ce n\'est pas loin. Vous êtes à pied?', en: 'No, it\'s not far. Are you on foot?' },
      { fr: 'Oui, je marche. Mais je suis un peu fatigué.', en: 'Yes, I\'m walking. But I\'m a little tired.' },
      { fr: 'Alors prenez le métro. C\'est plus simple. La station est juste là, à droite.', en: 'Then take the metro. It\'s simpler. The station is right there, on the right.' },
      { fr: 'Quelle ligne je dois prendre?', en: 'Which line should I take?' },
      { fr: 'La ligne un, direction Stockel. Descendez à la station Gare Centrale.', en: 'Line one, direction Stockel. Get off at Gare Centrale station.' },
      { fr: 'C\'est à combien d\'arrêts?', en: 'How many stops is it?' },
      { fr: 'Seulement deux arrêts. Très rapide.', en: 'Only two stops. Very fast.' },
      { fr: 'Et après, c\'est facile de trouver?', en: 'And after, is it easy to find?' },
      { fr: 'Oui, en sortant du métro, allez tout droit. Tournez à gauche à la première rue.', en: 'Yes, coming out of the metro, go straight ahead. Turn left at the first street.' },
      { fr: 'Tout droit, puis à gauche. D\'accord.', en: 'Straight ahead, then left. Okay.' },
      { fr: 'Vous allez voir une grande place avec des bâtiments magnifiques. C\'est ça, la Grand Place.', en: 'You\'ll see a large square with magnificent buildings. That\'s the Grand Place.' },
      { fr: 'Merci beaucoup. Vous connaissez un bon restaurant près de là?', en: 'Thank you very much. Do you know a good restaurant near there?' },
      { fr: 'Bien sûr. Allez chez Léon, dans la rue des Bouchers. Les moules sont excellentes.', en: 'Of course. Go to Chez Léon, on Rue des Bouchers. The mussels are excellent.' },
      { fr: 'Des moules-frites, c\'est typique ici, n\'est-ce pas?', en: 'Mussels and fries — that\'s typical here, right?' },
      { fr: 'Tout à fait. C\'est le plat national. Vous allez adorer.', en: 'Absolutely. It\'s the national dish. You\'ll love it.' },
      { fr: 'Et pour le ticket de métro, je l\'achète où?', en: 'And the metro ticket, where do I buy it?' },
      { fr: 'À la machine, juste à l\'entrée de la station. Un ticket coûte deux euros dix.', en: 'At the machine, right at the station entrance. A ticket costs two euros ten.' },
      { fr: 'Parfait. Vous êtes très gentille. Merci pour votre aide.', en: 'Perfect. You\'re very kind. Thank you for your help.' },
      { fr: 'De rien. Bonne visite à Bruxelles!', en: 'You\'re welcome. Enjoy your visit to Brussels!' },
      { fr: 'Merci, au revoir!', en: 'Thank you, goodbye!' }
    ]
  },

  {
    id: 'ep-3',
    number: 3,
    level: 'A2',
    title: 'At Work',
    description: 'Monday morning at the office — greeting colleagues, planning the week, scheduling a meeting.',
    dialogue: [
      { fr: 'Bonjour Sophie, comment ça va ce matin?', en: 'Hello Sophie, how are you this morning?' },
      { fr: 'Bonjour Marc. Ça va bien, merci. Et toi? Tu as passé un bon week-end?', en: 'Hello Marc. I\'m well, thank you. And you? Did you have a good weekend?' },
      { fr: 'Oui, très tranquille. Je suis allé à la campagne avec ma famille.', en: 'Yes, very quiet. I went to the countryside with my family.' },
      { fr: 'Ça fait du bien de sortir un peu de la ville.', en: 'It feels good to get out of the city for a bit.' },
      { fr: 'Exactement. Alors, on a une semaine chargée?', en: 'Exactly. So, do we have a busy week?' },
      { fr: 'Assez chargée, oui. On a la réunion avec le client mardi matin.', en: 'Quite busy, yes. We have the meeting with the client Tuesday morning.' },
      { fr: 'Le client de Lyon? Il vient au bureau?', en: 'The client from Lyon? Is he coming to the office?' },
      { fr: 'Non, c\'est une visioconférence. À neuf heures.', en: 'No, it\'s a video call. At nine o\'clock.' },
      { fr: 'D\'accord. Et la présentation, elle est prête?', en: 'Okay. And the presentation, is it ready?' },
      { fr: 'Presque. Il me manque encore deux ou trois slides. Je finis aujourd\'hui.', en: 'Almost. I still need two or three slides. I\'ll finish today.' },
      { fr: 'Tu peux m\'envoyer la version finale ce soir? Je voudrais la regarder.', en: 'Can you send me the final version tonight? I\'d like to look at it.' },
      { fr: 'Bien sûr. Je t\'envoie ça avant dix-huit heures.', en: 'Of course. I\'ll send it to you before six pm.' },
      { fr: 'Parfait. Et le projet Dubois, où on en est?', en: 'Perfect. And the Dubois project, where are we with it?' },
      { fr: 'On a un peu de retard. L\'équipe technique a eu des problèmes.', en: 'We\'re a bit behind. The technical team had some problems.' },
      { fr: 'C\'est grave? On doit en parler avec le patron?', en: 'Is it serious? Should we talk to the boss about it?' },
      { fr: 'Je pense que oui. Tu peux organiser une réunion jeudi après-midi?', en: 'I think so. Can you organize a meeting Thursday afternoon?' },
      { fr: 'Jeudi, je vérifie mon agenda. Quinze heures, ça te va?', en: 'Thursday, let me check my schedule. Three pm, does that work for you?' },
      { fr: 'Quinze heures, parfait. Je note dans mon calendrier.', en: 'Three pm, perfect. I\'ll note it in my calendar.' },
      { fr: 'Tu invites Pierre aussi? Il travaille sur ce projet.', en: 'Will you invite Pierre too? He\'s working on this project.' },
      { fr: 'Évidemment. Je vais lui envoyer un email tout de suite.', en: 'Obviously. I\'ll send him an email right away.' },
      { fr: 'Très bien. On déjeune ensemble aujourd\'hui? À midi?', en: 'Very good. Shall we have lunch together today? At noon?' },
      { fr: 'Avec plaisir. On va à la brasserie d\'en face?', en: 'Gladly. Are we going to the brasserie across the street?' },
      { fr: 'Parfait. À tout à l\'heure, alors.', en: 'Perfect. See you later, then.' },
      { fr: 'À tout à l\'heure, Marc. Bon courage avec tes mails!', en: 'See you later, Marc. Good luck with your emails!' }
    ]
  },

  {
    id: 'ep-4',
    number: 4,
    level: 'A2',
    title: 'Weekend Plans',
    description: 'Two friends planning a hike — checking the weather, deciding what to bring, where to meet.',
    dialogue: [
      { fr: 'Salut Léa! Qu\'est-ce que tu fais ce week-end?', en: 'Hi Léa! What are you doing this weekend?' },
      { fr: 'Salut Thomas! Rien de prévu, pourquoi?', en: 'Hi Thomas! Nothing planned, why?' },
      { fr: 'Ça te dit de faire une randonnée samedi? J\'ai trouvé un sentier magnifique.', en: 'Would you like to go hiking on Saturday? I found a beautiful trail.' },
      { fr: 'Ah oui, j\'adore l\'idée! C\'est où exactement?', en: 'Oh yes, I love the idea! Where exactly?' },
      { fr: 'Dans les Vosges. C\'est à environ deux heures de route.', en: 'In the Vosges. It\'s about a two-hour drive.' },
      { fr: 'Deux heures, ça va. Et la randonnée fait combien de kilomètres?', en: 'Two hours, that\'s fine. And the hike is how many kilometers?' },
      { fr: 'Environ quinze kilomètres. Pas trop dur, mais ça monte un peu.', en: 'About fifteen kilometers. Not too hard, but there\'s a bit of climbing.' },
      { fr: 'Parfait pour moi. Et la météo, c\'est comment?', en: 'Perfect for me. And the weather, how does it look?' },
      { fr: 'J\'ai regardé hier soir. Samedi, il va faire beau. Pas de pluie.', en: 'I checked last night. Saturday, it\'s going to be nice. No rain.' },
      { fr: 'Tant mieux. Il va faire chaud?', en: 'Even better. Will it be hot?' },
      { fr: 'Vingt-deux degrés l\'après-midi. Idéal pour marcher.', en: 'Twenty-two degrees in the afternoon. Ideal for walking.' },
      { fr: 'Et le matin? Il va faire froid au départ?', en: 'And in the morning? Will it be cold at the start?' },
      { fr: 'Un peu frais, oui. Treize ou quatorze degrés. Prends une veste.', en: 'A little cool, yes. Thirteen or fourteen degrees. Bring a jacket.' },
      { fr: 'D\'accord. Qu\'est-ce qu\'on emmène pour manger?', en: 'Okay. What do we bring to eat?' },
      { fr: 'Je propose des sandwichs, des fruits, et beaucoup d\'eau.', en: 'I suggest sandwiches, fruit, and lots of water.' },
      { fr: 'Je peux préparer les sandwichs si tu veux. Au fromage et jambon?', en: 'I can prepare the sandwiches if you want. Cheese and ham?' },
      { fr: 'Super. Et moi, j\'apporte des pommes et du chocolat.', en: 'Great. And I\'ll bring apples and chocolate.' },
      { fr: 'Du chocolat, c\'est essentiel en randonnée.', en: 'Chocolate is essential on a hike.' },
      { fr: 'Absolument. On se retrouve à quelle heure?', en: 'Absolutely. What time do we meet?' },
      { fr: 'Tôt, je pense. Sept heures du matin chez moi? On part directement.', en: 'Early, I think. Seven am at my place? We\'ll leave directly.' },
      { fr: 'Sept heures, ça va. Tu prends ta voiture?', en: 'Seven o\'clock, that works. Are you taking your car?' },
      { fr: 'Oui, on partage l\'essence. Apporte des chaussures de marche!', en: 'Yes, we\'ll split the gas. Bring hiking shoes!' },
      { fr: 'Promis. Je suis vraiment contente. À samedi alors!', en: 'Promise. I\'m really happy. See you Saturday then!' },
      { fr: 'À samedi! Bonne semaine, Léa.', en: 'See you Saturday! Have a good week, Léa.' }
    ]
  },

  {
    id: 'ep-5',
    number: 5,
    level: 'A2',
    title: 'Food & Restaurants',
    description: 'Arriving at a restaurant, being seated, ordering, asking about dishes, paying the bill.',
    dialogue: [
      { fr: 'Bonsoir, vous avez une réservation?', en: 'Good evening, do you have a reservation?' },
      { fr: 'Oui, bonsoir. Au nom de Bernard, pour deux personnes à vingt heures.', en: 'Yes, good evening. Under the name Bernard, for two people at eight pm.' },
      { fr: 'Bernard, oui, je vois. Suivez-moi, votre table est près de la fenêtre.', en: 'Bernard, yes, I see. Follow me, your table is near the window.' },
      { fr: 'Merci. C\'est une très jolie salle.', en: 'Thank you. It\'s a very pretty room.' },
      { fr: 'Merci beaucoup. Voici les cartes. Vous voulez un apéritif?', en: 'Thank you very much. Here are the menus. Would you like an aperitif?' },
      { fr: 'Oui, deux coupes de champagne, s\'il vous plaît.', en: 'Yes, two glasses of champagne, please.' },
      { fr: 'Tout de suite. Je vous laisse regarder la carte.', en: 'Right away. I\'ll let you look at the menu.' },
      { fr: 'Qu\'est-ce qui te tente, toi?', en: 'What looks good to you?' },
      { fr: 'Je ne sais pas encore. Les entrées ont l\'air toutes délicieuses.', en: 'I don\'t know yet. The starters all look delicious.' },
      { fr: 'Tu as essayé le foie gras maison? On me l\'a recommandé.', en: 'Have you tried the homemade foie gras? Someone recommended it to me.' },
      { fr: 'Non, je ne mange pas de foie gras. Je vais prendre la soupe de poisson.', en: 'No, I don\'t eat foie gras. I\'ll have the fish soup.' },
      { fr: 'Bonne idée. Et pour le plat principal?', en: 'Good idea. And for the main course?' },
      { fr: 'Excusez-moi, vos coupes de champagne. Vous avez choisi?', en: 'Excuse me, your champagne glasses. Have you chosen?' },
      { fr: 'Presque. Pouvez-vous nous dire ce qu\'il y a dans le magret de canard?', en: 'Almost. Can you tell us what\'s in the duck breast?' },
      { fr: 'C\'est un magret rôti, avec une sauce au miel et à l\'orange, et des pommes de terre sautées.', en: 'It\'s a roasted duck breast with a honey-orange sauce and sautéed potatoes.' },
      { fr: 'Ça a l\'air excellent. Je prends ça.', en: 'That sounds excellent. I\'ll have that.' },
      { fr: 'Et pour moi, le saumon grillé avec les légumes du jour, s\'il vous plaît.', en: 'And for me, the grilled salmon with the vegetables of the day, please.' },
      { fr: 'Très bon choix. Et avec ça, du vin?', en: 'Very good choice. And to drink, some wine?' },
      { fr: 'Une bouteille de bordeaux rouge, le Saint-Émilion, s\'il vous plaît.', en: 'A bottle of red Bordeaux, the Saint-Émilion, please.' },
      { fr: 'Excellent choix. Je reviens tout de suite avec votre commande.', en: 'Excellent choice. I\'ll be right back with your order.' },
      { fr: 'Le magret est vraiment fondant. Je peux goûter ton saumon?', en: 'The duck is really tender. Can I taste your salmon?' },
      { fr: 'Bien sûr. Il est parfait, juste assez cuit.', en: 'Of course. It\'s perfect, cooked just right.' },
      { fr: 'On prend un dessert? La crème brûlée est célèbre ici.', en: 'Shall we have dessert? The crème brûlée is famous here.' },
      { fr: 'Oui, et un café après. Excusez-moi, on peut commander un dessert?', en: 'Yes, and a coffee after. Excuse me, can we order a dessert?' },
      { fr: 'Bien sûr. Deux crèmes brûlées et deux cafés, comme d\'habitude?', en: 'Of course. Two crème brûlées and two coffees, as usual?' },
      { fr: 'Parfait, merci. Tout était délicieux.', en: 'Perfect, thank you. Everything was delicious.' },
      { fr: 'Merci infiniment. Le chef sera content. Je vous apporte l\'addition aussi?', en: 'Thank you so much. The chef will be pleased. Shall I bring you the bill as well?' },
      { fr: 'Oui, s\'il vous plaît. On paye ensemble.', en: 'Yes, please. We\'re paying together.' }
    ]
  }
];


// ============================================================
// PODCASTS
// ============================================================

const PODCASTS = [
  {
    name: 'InnerFrench',
    level: 'B1–B2',
    host: 'Hugo Cotton',
    description: 'Natural, conversational French at a slightly reduced pace. No English — full immersion from the start. One of the best resources for moving from A2 to B2.',
    url: 'https://innerfrench.com',
    site: 'innerfrench.com',
    episodes: [
      { title: '#001 — Le bonheur', url: 'https://innerfrench.com/podcast/' },
      { title: "#007 — L'argent", url: 'https://innerfrench.com/podcast/' },
      { title: '#013 — Les réseaux sociaux', url: 'https://innerfrench.com/podcast/' }
    ]
  },
  {
    name: 'Coffee Break French',
    level: 'A1–B2',
    host: 'Mark — Radio Lingua',
    description: 'Structured lesson-style podcast. Each episode teaches specific grammar or vocabulary in context. Good for beginners who want guidance and clear progression.',
    url: 'https://coffeebreaklanguages.com/coffeebreakfrench/',
    site: 'coffeebreaklanguages.com',
    episodes: [
      { title: 'Season 1, Episodes 1–5 — for absolute beginners', url: 'https://coffeebreaklanguages.com/coffeebreakfrench/' }
    ]
  },
  {
    name: 'Français Authentique',
    level: 'A2–B2',
    host: 'Johan Tekfak',
    description: 'Immersion-focused. Johan speaks clearly and naturally, often explaining French culture and mindset. Good for building listening instinct over time.',
    url: 'https://www.francaisauthentique.com',
    site: 'francaisauthentique.com',
    episodes: [
      { title: 'Pourquoi apprendre le français', url: 'https://www.francaisauthentique.com/podcast/' },
      { title: 'Les erreurs des apprenants', url: 'https://www.francaisauthentique.com/podcast/' }
    ]
  },
  {
    name: 'RFI — Le français facile',
    level: 'A2–B1',
    host: 'RFI (Radio France Internationale)',
    description: 'Real news presented in simplified, clear French. Excellent for building vocabulary around current events. Short episodes — 5 to 8 minutes — perfect for daily listening.',
    url: 'https://www.rfi.fr/fr/podcasts/journal-en-français-facile/',
    site: 'rfi.fr',
    episodes: [
      { title: 'Daily episodes — any recent one works', url: 'https://www.rfi.fr/fr/podcasts/journal-en-français-facile/' }
    ]
  },
  {
    name: 'Duolingo French Podcast',
    level: 'B1',
    host: 'Duolingo — English/French mix',
    description: 'Story-driven episodes about real people. French narration with English context. Good for listening comprehension without the pressure of full immersion.',
    url: 'https://podcast.duolingo.com/french',
    site: 'podcast.duolingo.com',
    episodes: [
      { title: 'Episode 1 — Une nouvelle vie', url: 'https://podcast.duolingo.com/french' },
      { title: 'Episode 3', url: 'https://podcast.duolingo.com/french' }
    ]
  },
  {
    name: 'News in Slow French',
    level: 'A2–B2',
    host: 'Anaïs and Hugues',
    description: 'Weekly current events discussed at a deliberately slow, clear pace. Grammar tips included. Free episodes available; premium for full access.',
    url: 'https://www.newsinslowfrench.com',
    site: 'newsinslowfrench.com',
    episodes: [
      { title: 'Any free episode from the beginner series', url: 'https://www.newsinslowfrench.com' }
    ]
  }
];


// ============================================================
// EXPORTS (attached to window for plain script use)
// ============================================================

window.LESSONS = LESSONS;
window.VOCAB_DB = VOCAB_DB;
window.EPISODES = EPISODES;
window.PODCASTS = PODCASTS;
