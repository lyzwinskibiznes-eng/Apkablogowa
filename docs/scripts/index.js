import { categories } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderCategories();
  initGame();
  setCurrentYear();
});

function initNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('nav-links--open');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('nav-links--open');
    });
  });
}

function renderCategories() {
  const grid = document.querySelector('[data-category-grid]');
  if (!grid) return;

  const iconLibrary = {
    'podstawy-ex':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
    'prawo-i-cert':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m10 13-2 2 2 2"></path><path d="m14 17 2-2-2-2"></path></svg>',
    'dowodzenie-iskrobezpieczenstwa':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="8" x2="12" y2="16"></line></svg>',
    'urzadzenia-bariery':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12.2619 3.5 11.2333v1.5334L2 13.7381V12.2619Z"></path><path d="M5 10.2333 6.5 9.2333v5.5334L5 15.7667V10.2333Z"></path><path d="M8 8.2333 9.5 7.2333v9.5334L8 17.7667V8.2333Z"></path><path d="M11 6.2333 12.5 5.2333v13.5334L11 19.7667V6.2333Z"></path><path d="M14 8.2333 15.5 7.2333v9.5334L14 17.7667V8.2333Z"></path><path d="M17 10.2333 18.5 9.2333v5.5334L17 15.7667V10.2333Z"></path><path d="M20 12.2619 21.5 11.2333v1.5334L20 13.7381V12.2619Z"></path></svg>',
    'inspekcje-utrzymanie':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
    'praktyka-case':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 18v-6"></path><path d="M12 8h.01"></path></svg>',
    'nowe-technologie':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>',
    'branze-zastosowania':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9 12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    'edukacja-poradniki':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
    'materialy-do-pobrania':
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
  };

  categories.forEach((category) => {
    const card = document.createElement('article');
    card.className = 'category-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', `Przejdź do sekcji ${category.title}`);

    const icon = document.createElement('span');
    icon.className = 'category-card__icon';
    icon.innerHTML = iconLibrary[category.id] ?? '';

    const title = document.createElement('h3');
    title.textContent = category.title;

    const description = document.createElement('p');
    description.className = 'category-card__description';
    description.textContent = category.description;

    const button = document.createElement('span');
    button.className = 'category-card__cta';
    button.textContent = 'Zobacz tematy';

    card.append(icon, title, description, button);

    const openCategory = () => {
      window.location.href = `category.html?category=${encodeURIComponent(category.id)}`;
    };

    card.addEventListener('click', openCategory);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openCategory();
      }
    });

    grid.append(card);
  });
}

function initGame() {
  const game = document.querySelector('[data-game]');
  if (!game) return;

  const nextButton = game.querySelector('[data-next]');
  const resetButton = game.querySelector('[data-reset]');
  const feedback = game.querySelector('[data-feedback]');
  const scoreNode = game.querySelector('[data-score]');
  const roundNode = game.querySelector('[data-round]');
  const optionsList = game.querySelector('[data-options]');
  const heading = game.querySelector('[data-scenario-heading]');
  const description = game.querySelector('[data-scenario-description]');

  const scenarios = createScenarios();
  let currentScenario = null;
  let answered = false;
  let score = 0;
  let rounds = 0;

  function renderScenario() {
    const available = scenarios.filter((scenario) => scenario !== currentScenario);
    currentScenario = available[Math.floor(Math.random() * available.length)];

    heading.textContent = currentScenario.heading;
    description.textContent = currentScenario.description;
    optionsList.innerHTML = '';
    answered = false;

    currentScenario.options.forEach((option) => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'game-option';
      button.textContent = option.label;
      button.addEventListener('click', () => handleAnswer(option));
      item.append(button);
      optionsList.append(item);
    });

    feedback.textContent = 'Wybierz odpowiedź, aby sprawdzić wynik.';
  }

  function handleAnswer(option) {
    if (answered) {
      return;
    }

    answered = true;
    rounds += 1;

    const allButtons = optionsList.querySelectorAll('button');
    allButtons.forEach((button) => {
      button.disabled = true;
      if (option.correct && button.textContent === option.label) {
        button.classList.add('game-option--correct');
      }
    });

    if (option.correct) {
      score += 1;
      feedback.textContent = `Świetnie! ${option.explanation}`;
    } else {
      feedback.textContent = `Nie tym razem. ${option.explanation}`;
      const correct = currentScenario.options.find((item) => item.correct);
      if (correct) {
        const correctButton = Array.from(allButtons).find((button) => button.textContent === correct.label);
        if (correctButton) {
          correctButton.classList.add('game-option--correct');
        }
      }
    }

    scoreNode.textContent = String(score);
    roundNode.textContent = String(rounds);
  }

  function resetGame() {
    score = 0;
    rounds = 0;
    scoreNode.textContent = '0';
    roundNode.textContent = '0';
    feedback.textContent = 'Gra została zresetowana. Wylosuj nowe pytanie.';
    optionsList.innerHTML = '';
    heading.textContent = 'Losuj pytanie, aby rozpocząć';
    description.textContent = 'Przygotuj się na nowe wyzwanie dobierania urządzeń w strefach Ex.';
    currentScenario = null;
    answered = false;
  }

  nextButton.addEventListener('click', () => {
    renderScenario();
    roundNode.textContent = String(rounds);
  });

  resetButton.addEventListener('click', resetGame);
}

function createScenarios() {
  return [
    {
      heading: 'Strefa 0 (gazy) – pomiar poziomu w zbiorniku',
      description:
        'Zbiornik z rozpuszczalnikiem o niskiej temperaturze zapłonu. Czujnik jest zanurzony w medium, konserwacja odbywa się bez odłączania zasilania.',
      options: [
        {
          label: 'Czujnik poziomu ultradźwiękowy Ex ia, kat. 1G',
          correct: true,
          explanation: 'Dla strefy 0 wymagane jest urządzenie kat. 1G lub EPL Ga, dlatego wybór Ex ia jest właściwy.',
        },
        {
          label: 'Radar poziomu w obudowie Ex d, kat. 2G',
          correct: false,
          explanation: 'Kat. 2G (EPL Gb) nie może być stosowana w strefie 0 – wymaga ona co najmniej kat. 1G.',
        },
        {
          label: 'Przepływomierz standardowy IP67 bez certyfikatu ATEX',
          correct: false,
          explanation: 'Brak certyfikacji ATEX uniemożliwia montaż w strefach zagrożonych wybuchem.',
        },
      ],
    },
    {
      heading: 'Strefa 1 (gazy) – sterowanie zaworem',
      description:
        'Na instalacji gazu syntezowego potrzebny jest pozycjoner do sterowania zaworem regulacyjnym. Dostępne jest uziemienie i prowadzenie przewodów w korytach kablowych.',
      options: [
        {
          label: 'Pozycjoner pneumatyczny Ex ia z barierą galwaniczną',
          correct: true,
          explanation: 'Połączenie Ex ia z barierą galwaniczną spełnia wymagania strefy 1 i zapewnia separację galwaniczną.',
        },
        {
          label: 'Pozycjoner w wykonaniu Ex nA',
          correct: false,
          explanation: 'Ex nA (kategoria 3G) przeznaczony jest do strefy 2, a nie do strefy 1.',
        },
        {
          label: 'Pozycjoner standardowy IP54',
          correct: false,
          explanation: 'Brak certyfikatu Ex powoduje, że urządzenie nie może być użyte w strefach 1/2.',
        },
      ],
    },
    {
      heading: 'Strefa 2 (gazy) – monitoring drgań',
      description:
        'Wentylatory dachowe na rafinerii wymagają monitorowania drgań. Przestoje są kosztowne, dlatego liczy się szybki montaż.',
      options: [
        {
          label: 'Akcelerometr Ex nR z ogranicznikiem oddychania',
          correct: true,
          explanation: 'Ex nR zapewnia restricted breathing i jest przeznaczony do strefy 2 (kategoria 3G).',
        },
        {
          label: 'Czujnik drgań Ex t dla stref pyłowych',
          correct: false,
          explanation: 'Urządzenie Ex t dotyczy stref pyłowych – w środowisku gazowym nie zapewni właściwej ochrony.',
        },
        {
          label: 'Akcelerometr Ex d, kat. 1G',
          correct: false,
          explanation: 'Choć spełnia wymagania bezpieczeństwa, to rozwiązanie jest przewymiarowane kosztowo i niepotrzebnie ciężkie.',
        },
      ],
    },
    {
      heading: 'Strefa 21 (pyły) – dozowanie mąki',
      description:
        'Linia pakowania mąki posiada przewały i dozowniki ślimakowe. Konieczny jest czujnik prędkości kontrolujący ruch ślimaka.',
      options: [
        {
          label: 'Czujnik indukcyjny Ex tb IIIC z uszczelnieniem pyłoszczelnym',
          correct: true,
          explanation: 'W strefie 21 wymagane jest EPL Db lub kategoria 2D – Ex tb IIIC spełnia to kryterium.',
        },
        {
          label: 'Czujnik fotoelektryczny Ex ia, kat. 1G',
          correct: false,
          explanation: 'Certyfikacja 1G dotyczy stref gazowych; brak dopuszczenia dla pyłów (D).',
        },
        {
          label: 'Czujnik standardowy IP65 z filtrem przeciwpyłowym',
          correct: false,
          explanation: 'Stopień IP nie zastępuje certyfikacji ATEX dla stref pyłowych.',
        },
      ],
    },
    {
      heading: 'Strefa 22 (pyły) – magazyn cukru',
      description:
        'Magazyn cukru z instalacją transportu pneumatycznego wymaga lokalnych wyłączników awaryjnych na zasuwach.',
      options: [
        {
          label: 'Wyłącznik awaryjny Ex tc IIIC IP66',
          correct: true,
          explanation: 'Ex tc przeznaczony jest do strefy 22 (kategoria 3D) i zapewnia pyłoszczelność obudowy.',
        },
        {
          label: 'Wyłącznik w wykonaniu Ex nA',
          correct: false,
          explanation: 'Ex nA dotyczy atmosfer gazowych i nie zapewnia ochrony przed pyłami.',
        },
        {
          label: 'Zwykły wyłącznik stalowy IP67',
          correct: false,
          explanation: 'Brak certyfikatu ATEX – IP67 nie wystarcza w strefach 22.',
        },
      ],
    },
    {
      heading: 'Strefa mieszana – terminal ładowania cystern',
      description:
        'Terminal obsługuje benzynę oraz pyły aluminiowe. Potrzebny jest system detekcji gazów i pyłów w jednym układzie sterowania.',
      options: [
        {
          label: 'System detekcji z modułem Ex ia i sondami kat. 1G/1D',
          correct: true,
          explanation: 'Zintegrowany system Ex ia dla gazów i pyłów zapewnia najwyższy poziom bezpieczeństwa w strefach mieszanych.',
        },
        {
          label: 'Czujniki gazów Ex d oraz pyłów Ex t sterowane PLC ogólnego przeznaczenia',
          correct: false,
          explanation: 'Sterownik ogólnego przeznaczenia bez barier separujących nie spełnia wymogów bezpieczeństwa.',
        },
        {
          label: 'System detekcji bez certyfikacji, zasilany z UPS',
          correct: false,
          explanation: 'Brak certyfikacji wyklucza wykorzystanie w strefach zagrożonych wybuchem.',
        },
      ],
    },
  ];
}

function setCurrentYear() {
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}
