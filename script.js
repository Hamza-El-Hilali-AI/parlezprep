const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const skills = [
  'Compréhension orale',
  'Compréhension écrite',
  'Expression écrite',
  'Expression orale',
  'Grammaire',
  'Vocabulaire'
];

const examCatalog = [
  {
    title: 'Mock exam 1 : Débutant',
    type: 'A1 - A2',
    duration: '30 min',
    description: 'Mise en situation quotidienne, compréhension simple et vocabulaire de base.'
  },
  {
    title: 'Mock exam 2 : Vie quotidienne',
    type: 'A2',
    duration: '35 min',
    description: 'Dialogues, messages et textes de routine sur le travail, les loisirs et la santé.'
  },
  {
    title: 'Mock exam 3 : Intermédiaire',
    type: 'B1',
    duration: '40 min',
    description: 'Questions centrées sur les opinions, les étapes de vie et des textes narratifs.'
  },
  {
    title: 'Mock exam 4 : Argumentation',
    type: 'B2',
    duration: '45 min',
    description: 'Texte argumentatif, prise de position et reformulation de points de vue complexes.'
  },
  {
    title: 'Mock exam 5 : Niveau avancé',
    type: 'C1',
    duration: '50 min',
    description: 'Analyse critique, compréhension de documents professionnels et écrits nuancés.'
  },
  {
    title: 'Mock exam 6 : Maîtrise',
    type: 'C2',
    duration: '60 min',
    description: 'Simulation complète de l’examen final avec blocs variés et questions de précision.'
  }
];

const exerciseBank = {
  A1: {
    'Compréhension orale': {
      title: 'Compréhension orale : salon de coiffure',
      prompt: 'Un client demande : « Je voudrais une coupe courte, mais sans trop de volume. » Que lui répond le coiffeur ?',
      options: ['Je peux vous faire une coupe courte avec un peu de texture.', 'Je peux vous faire une coupe très longue.', 'Nous fermons à 20 h.'],
      answer: 0,
      explanation: 'La bonne réponse correspond à l’idée de coupe courte et légère, conforme à la demande.'
    },
    'Expression écrite': {
      title: 'Expression écrite : message simple',
      prompt: 'Rédige un message pour dire que tu arrives 10 minutes en retard.',
      options: ['Je suis déjà là.', 'Je suis désolé, j’arrive dix minutes en retard.', 'Je partirai tout de suite.'],
      answer: 1,
      explanation: 'Le message doit exprimer une excuse et une situation de retard en français courant.'
    }
  },
  A2: {
    'Grammaire': {
      title: 'Grammaire : passé composé',
      prompt: 'Complète la phrase : Hier, nous ___ au parc avec nos amis.',
      options: ['allons', 'sommes allés', 'ira', 'avons aller'],
      answer: 1,
      explanation: 'Après « hier », on utilise le passé composé avec l’auxiliaire être pour aller.'
    },
    'Vocabulaire': {
      title: 'Vocabulaire : transport',
      prompt: 'Quel mot correspond à « un billet de train » ?',
      options: ['le ticket', 'le panier', 'la clé', 'la carte bancaire'],
      answer: 0,
      explanation: 'En français, « ticket » est le terme courant pour un billet de transport.'
    }
  },
  B1: {
    'Compréhension écrite': {
      title: 'Lecture : covoiturage',
      prompt: 'Le texte explique surtout :',
      options: ['comment organiser un voyage en voiture', 'pourquoi plus de gens utilisent le covoiturage', 'la fabrication d’une nouvelle voiture', 'le prix des carburants au Canada'],
      answer: 1,
      explanation: 'Le texte met en avant les avantages du covoiturage et la croissance de cette pratique.'
    },
    'Expression orale': {
      title: 'Expression orale : expliquer une décision',
      prompt: 'Choisis la réponse la plus naturelle pour justifier un choix.',
      options: ['Je ne sais pas.', 'Je l’ai choisi parce que cela m’aide à mieux organiser mon temps.', 'Je préfère la cuisine.', 'Très bien, merci.'],
      answer: 1,
      explanation: 'La bonne formulation donne une raison claire et naturelle en français.'
    }
  },
  B2: {
    'Grammaire': {
      title: 'Grammaire : subordonnées',
      prompt: 'Complète : Il faudra que tu ___ avant midi.',
      options: ['viens', 'viennes', 'viendras', 'venais'],
      answer: 1,
      explanation: 'Après « il faudra que », on emploie le subjonctif : « que tu viennes ».'
    },
    'Expression écrite': {
      title: 'Rédaction : opinion',
      prompt: 'La meilleure introduction pour un texte argumentatif est :',
      options: ['Bonjour, je m’appelle Marc.', 'Il est indéniable que la technologie transforme notre quotidien.', 'Je vais aller au cinéma.', 'Le chat est noir.'],
      answer: 1,
      explanation: 'Une introduction d’argumentation doit poser clairement une thèse et une problématique.'
    }
  },
  C1: {
    'Compréhension orale': {
      title: 'Compréhension orale : débat',
      prompt: 'L’orateur insiste surtout sur :',
      options: ['la beauté des paysages', 'les avantages économiques de la mobilité durable', 'la réduction du nombre d’élèves', 'la météo du pays'],
      answer: 1,
      explanation: 'Dans un débat, l’orateur met l’accent sur les bénéfices économiques et écologiques.'
    },
    'Expression écrite': {
      title: 'Écriture formelle',
      prompt: 'Quel énoncé convient à un courriel professionnel ?',
      options: ['Salut les gars, ça va ?', 'Je vous remercie pour votre réponse rapide.', 'J’ai fini tout ça.', 'On se voit demain.'],
      answer: 1,
      explanation: 'Le niveau formel est attendu dans un cadre professionnel ou administratif.'
    }
  },
  C2: {
    'Expression orale': {
      title: 'Argumentation avancée',
      prompt: 'La formulation la plus nuancée est :',
      options: ['C’est forcément mauvais.', 'On peut toutefois considérer que cette mesure présente des limites.', 'Je déteste ça.', 'C’est exactement bien.'],
      answer: 1,
      explanation: 'Une formulation au C2 repose sur une nuance claire et une analyse équilibrée.'
    },
    'Compréhension écrite': {
      title: 'Texte analytique',
      prompt: 'Le texte cherche avant tout à :',
      options: ['raconter une anecdote personnelle', 'analyser une tendance sociale et ses implications', 'présenter une recette', 'expliquer la géographie du pays'],
      answer: 1,
      explanation: 'Un texte de niveau C2 cherche à analyser, à nuancer et à interpréter un phénomène.'
    }
  }
};

const state = {
  level: 'A1',
  skill: 'Compréhension orale',
  selectedExam: examCatalog[0].title
};

function renderLevelButtons() {
  const container = document.getElementById('levelButtons');
  container.innerHTML = levels
    .map(
      (level) => `
        <button class="chip ${state.level === level ? 'active' : ''}" data-level="${level}">
          ${level}
        </button>
      `
    )
    .join('');

  container.querySelectorAll('.chip').forEach((button) => {
    button.addEventListener('click', () => {
      state.level = button.dataset.level;
      state.skill = skills[0];
      renderLevelButtons();
      renderSkillButtons();
      generateExercise();
    });
  });
}

function renderSkillButtons() {
  const container = document.getElementById('skillButtons');
  const availableSkills = skills.filter((skill) => {
    return exerciseBank[state.level]?.[skill] || skill === 'Grammaire' || skill === 'Vocabulaire';
  });

  container.innerHTML = availableSkills
    .map(
      (skill) => `
        <button class="chip ${state.skill === skill ? 'active' : ''}" data-skill="${skill}">
          ${skill}
        </button>
      `
    )
    .join('');

  container.querySelectorAll('.chip').forEach((button) => {
    button.addEventListener('click', () => {
      state.skill = button.dataset.skill;
      renderSkillButtons();
      generateExercise();
    });
  });
}

function generateExercise() {
  const bank = exerciseBank[state.level];
  const currentSkill = bank[state.skill] || Object.values(bank)[0];
  const { title, prompt, options, answer, explanation } = currentSkill;

  document.getElementById('exerciseLevel').textContent = state.level;
  document.getElementById('exerciseSkill').textContent = state.skill;
  document.getElementById('exerciseTitle').textContent = title;
  document.getElementById('exercisePrompt').textContent = prompt;

  const optionsList = document.getElementById('optionsList');
  optionsList.innerHTML = options
    .map(
      (option, index) => `
        <button class="option-item" data-index="${index}">${index + 1}. ${option}</button>
      `
    )
    .join('');

  optionsList.querySelectorAll('.option-item').forEach((button) => {
    button.addEventListener('click', () => {
      const chosenIndex = Number(button.dataset.index);
      const feedback = document.getElementById('feedback');
      const optionButtons = [...optionsList.querySelectorAll('.option-item')];

      optionButtons.forEach((item, index) => {
        item.classList.remove('correct', 'wrong');
        if (index === answer) {
          item.classList.add('correct');
        }
        if (index === chosenIndex && chosenIndex !== answer) {
          item.classList.add('wrong');
        }
      });

      if (chosenIndex === answer) {
        feedback.textContent = `Bonne réponse ! ${explanation}`;
        feedback.className = 'feedback visible success';
      } else {
        feedback.textContent = `Pas tout à fait. ${explanation}`;
        feedback.className = 'feedback visible error';
      }
    });
  });

  const feedback = document.getElementById('feedback');
  feedback.className = 'feedback';
  feedback.textContent = '';
}

function renderExamGrid() {
  const container = document.getElementById('examGrid');
  container.innerHTML = examCatalog
    .map(
      (exam) => `
        <article class="exam-card">
          <span class="exam-tag">${exam.type}</span>
          <h3>${exam.title}</h3>
          <p>${exam.description}</p>
          <div class="exam-meta">
            <span>${exam.duration}</span>
            <button class="secondary-btn subtle select-exam" data-title="${exam.title}">Sélectionner</button>
          </div>
        </article>
      `
    )
    .join('');

  container.querySelectorAll('.select-exam').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedExam = button.dataset.title;
      const title = document.getElementById('exerciseTitle');
      title.textContent = `${state.selectedExam} • préparation ciblée`;
    });
  });
}

function setupEvents() {
  document.getElementById('generateBtn').addEventListener('click', () => {
    const bank = exerciseBank[state.level];
    const skillKeys = Object.keys(bank);
    const nextSkill = skillKeys[Math.floor(Math.random() * skillKeys.length)];
    state.skill = nextSkill;
    renderSkillButtons();
    generateExercise();
  });

  document.getElementById('checkBtn').addEventListener('click', () => {
    const bank = exerciseBank[state.level];
    const skill = bank[state.skill] || Object.values(bank)[0];
    const feedback = document.getElementById('feedback');
    feedback.textContent = `Réponse attendue : ${skill.options[skill.answer]}. ${skill.explanation}`;
    feedback.className = 'feedback visible success';
  });
}

renderLevelButtons();
renderSkillButtons();
renderExamGrid();
setupEvents();
generateExercise();
