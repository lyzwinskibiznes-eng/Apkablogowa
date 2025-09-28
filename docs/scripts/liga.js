const Game = {
  state: {},
  eventsBound: false,
  forumBinds: false,

  init() {
    this.cacheDOM();
    this.bindAuthEvents();
    this.checkLoggedIn();
  },

  cacheDOM() {
    this.dom = {
      authScreen: document.getElementById('auth-screen'),
      loginContainer: document.getElementById('login-container'),
      registerContainer: document.getElementById('register-container'),
      authToggle: document.getElementById('auth-toggle'),
      authToggleLogin: document.getElementById('auth-toggle-login'),
      loginBtn: document.getElementById('login-btn'),
      registerBtn: document.getElementById('register-btn'),
      authError: document.getElementById('auth-error'),
      authErrorReg: document.getElementById('auth-error-reg'),
      gameContainer: document.getElementById('game-container'),
      navButtons: document.querySelectorAll('nav .btn'),
      views: {},
    };

    document.querySelectorAll('[data-view]').forEach((element) => {
      this.dom.views[element.dataset.view] = element;
    });
  },

  bindAuthEvents() {
    this.dom.authToggle.addEventListener('click', () => this.toggleAuthForms(false));
    this.dom.authToggleLogin.addEventListener('click', () => this.toggleAuthForms(true));
    this.dom.loginBtn.addEventListener('click', () => this.handleLogin());
    this.dom.registerBtn.addEventListener('click', () => this.handleRegister());
  },

  toggleAuthForms(showLogin) {
    this.dom.loginContainer.classList.toggle('hidden', !showLogin);
    this.dom.registerContainer.classList.toggle('hidden', showLogin);
    this.dom.authError.textContent = '';
    this.dom.authErrorReg.textContent = '';
  },

  getUsers() {
    return JSON.parse(localStorage.getItem('lp_users') || '[]');
  },

  saveUsers(users) {
    localStorage.setItem('lp_users', JSON.stringify(users));
  },

  handleLogin() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!username || !password) {
      this.dom.authError.textContent = 'Wszystkie pola są wymagane.';
      return;
    }

    const users = this.getUsers();
    const user = users.find((entry) => entry.username === username && entry.password === password);

    if (user) {
      localStorage.setItem('lp_currentUser', username);
      this.startGame(user.data);
    } else {
      this.dom.authError.textContent = 'Nieprawidłowa nazwa lub hasło.';
    }
  },

  handleRegister() {
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const company = document.getElementById('register-company').value.trim();

    if (!username || !password || !company) {
      this.dom.authErrorReg.textContent = 'Wszystkie pola są wymagane.';
      return;
    }

    const users = this.getUsers();
    if (users.some((entry) => entry.username === username)) {
      this.dom.authErrorReg.textContent = 'Ta nazwa użytkownika jest już zajęta.';
      return;
    }

    const newUser = {
      username,
      password,
      data: this.createInitialGameState(username, company),
    };

    users.push(newUser);
    this.saveUsers(users);
    localStorage.setItem('lp_currentUser', username);
    this.startGame(newUser.data);
  },

  checkLoggedIn() {
    const currentUsername = localStorage.getItem('lp_currentUser');
    if (!currentUsername) {
      return;
    }

    const users = this.getUsers();
    const user = users.find((entry) => entry.username === currentUsername);
    if (user) {
      this.startGame(user.data);
    }
  },

  startGame(stateData) {
    this.state = JSON.parse(JSON.stringify(stateData));

    this.initData();
    this.applyTheme(this.state.preferences.theme);
    this.updateAdminUI();
    this.bindGameEvents();

    this.dom.authScreen.classList.add('hidden');
    this.dom.gameContainer.classList.remove('hidden');
    requestAnimationFrame(() => {
      this.dom.gameContainer.style.opacity = 1;
    });

    this.gameLoopInterval = setInterval(() => this.tick(), 100);
    this.marketInterval = setInterval(() => this.tickMarket(false), 5 * 60 * 1000);
    this.forumInterval = setInterval(() => this.tickMarket(true), 10 * 60 * 1000);

    this.renderAll();
  },

  bindGameEvents() {
    if (this.eventsBound) {
      return;
    }

    this.dom.navButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        if (!button.classList.contains('locked')) {
          this.switchTab(button.dataset.tab);
        }
      });
    });

    document.getElementById('logout-btn').addEventListener('click', () => this.logout());
    document.getElementById('wipe-btn').addEventListener('click', () => this.deleteAccount());
    document.getElementById('theme-toggle').addEventListener('change', (event) => {
      this.updateTheme(event.target.checked ? 'light' : 'dark');
    });
    document.getElementById('prestigeBtn').addEventListener('click', () => this.performPrestige());
    document.getElementById('admin-login-btn').addEventListener('click', () => this.handleAdminLogin());
    document.getElementById('admin-add-btc').addEventListener('click', () => {
      this.state.btc += 100;
      this.save();
      this.renderTopBar();
    });

    this.eventsBound = true;
  },

  initData() {
    const defaults = this.createInitialGameState(this.state.username, this.state.companyName);

    this.state.market = {
      ...defaults.market,
      ...this.state.market,
    };

    const existingStocks = Array.isArray(this.state.market.stocks) ? this.state.market.stocks : [];
    this.state.market.stocks = defaults.market.stocks.map((stock) => ({
      ...stock,
      ...existingStocks.find((item) => item.id === stock.id),
    }));

    const existingCompanies = Array.isArray(this.state.companies) ? this.state.companies : [];
    this.state.companies = defaults.companies.map((company) => ({
      ...company,
      ...existingCompanies.find((item) => item.id === company.id),
    }));

    this.state.forum = {
      market: this.state.forum?.market ?? defaults.forum.market,
      general: this.state.forum?.general ?? defaults.forum.general,
    };

    this.state.quests = Array.isArray(this.state.quests) ? this.state.quests : defaults.quests;
    this.state.shop = { ...defaults.shop, ...this.state.shop };
    this.state.totals = { ...defaults.totals, ...this.state.totals };

    if (!this.state.tech) {
      this.state.tech = defaults.tech;
    } else {
      for (const branchKey of Object.keys(defaults.tech)) {
        if (!this.state.tech[branchKey]) {
          this.state.tech[branchKey] = defaults.tech[branchKey];
          continue;
        }

        const existingUpgrades = Array.isArray(this.state.tech[branchKey].upgrades)
          ? this.state.tech[branchKey].upgrades
          : [];
        this.state.tech[branchKey].upgrades = defaults.tech[branchKey].upgrades.map((upgrade) => ({
          ...upgrade,
          ...existingUpgrades.find((item) => item.id === upgrade.id),
        }));
      }
    }

    this.state.preferences = {
      ...defaults.preferences,
      ...this.state.preferences,
    };

    if (typeof this.state.btc !== 'number') {
      this.state.btc = defaults.btc;
    }

    if (!this.state.market.playerListed) {
      this.state.market.playerListed = false;
    }

    if (typeof this.state.admin !== 'boolean') {
      this.state.admin = false;
    }

    if (!this.state.lastTick) {
      this.state.lastTick = Date.now();
    }

    this.save();
  },

  tick() {
    const now = Date.now();
    const dt = (now - (this.state.lastTick || now)) / 1000;
    this.state.lastTick = now;

    this.state.cash += this.calculateIPS() * dt;

    this.checkQuests();
    this.renderTopBar();
  },

  save() {
    const currentUsername = localStorage.getItem('lp_currentUser');
    if (!currentUsername) {
      return;
    }

    const users = this.getUsers();
    const userIndex = users.findIndex((entry) => entry.username === currentUsername);
    if (userIndex > -1) {
      users[userIndex].data = this.state;
      this.saveUsers(users);
    }
  },

  renderAll() {
    this.switchTab('imperium');
  },

  renderTopBar() {
    document.getElementById('cash').textContent = this.formatCurrency(this.state.cash);
    document.getElementById('ips').textContent = this.formatCurrency(this.calculateIPS());
    document.getElementById('btc').textContent = this.state.btc.toLocaleString();
    document.getElementById('playerName').textContent = this.state.username;
    document.getElementById('companyNameTag').textContent = this.state.companyName;
    document.getElementById('level').textContent = this.state.level;
    document.getElementById('level-text').textContent = this.state.level;
    document.getElementById('xp').textContent = Math.floor(this.state.xp);
    document.getElementById('xpNext').textContent = this.state.xpNext;

    const xpProgress = this.state.xpNext > 0 ? Math.min(this.state.xp / this.state.xpNext, 1) : 0;
    document.getElementById('xpbar').style.transform = `scaleX(${xpProgress})`;
  },

  renderNav() {
    const marketNavBtn = document.getElementById('market-nav-btn');
    if (this.state.market.unlocked) {
      marketNavBtn.classList.remove('locked');
      marketNavBtn.removeAttribute('title');
    } else {
      marketNavBtn.classList.add('locked');
      marketNavBtn.title = 'Odblokuj po pierwszym prestiżu';
    }
  },

  switchTab(tabId) {
    this.dom.navButtons.forEach((button) => button.classList.remove('active'));
    const activeButton = document.querySelector(`nav .btn[data-tab="${tabId}"]`);
    if (activeButton) {
      activeButton.classList.add('active');
    }

    Object.values(this.dom.views).forEach((view) => view.classList.add('hidden'));
    if (this.dom.views[tabId]) {
      this.dom.views[tabId].classList.remove('hidden');
    }

    this.renderTopBar();
    this.renderNav();

    switch (tabId) {
      case 'imperium':
        this.renderImperium();
        break;
      case 'tech':
        this.renderTech();
        break;
      case 'market':
        this.renderMarket();
        break;
      case 'quests':
        this.renderQuests();
        break;
      case 'forum':
        this.renderForum();
        break;
      case 'shop':
        this.renderShop();
        break;
      case 'ranking':
        this.renderRanking();
        break;
      case 'settings':
        this.renderSettings();
        break;
      default:
        break;
    }
  },

  createInitialGameState(username, companyName) {
    return {
      username,
      companyName,
      level: 1,
      xp: 0,
      xpNext: 100,
      cash: 1000,
      btc: 0,
      avatar: `https://placehold.co/100x100/1b213b/e0e8ff?text=${username.charAt(0).toUpperCase()}`,
      companies: [
        { id: 'startup', name: 'Garażowy Startup IT', sector: 'IT', base: 5, level: 1, desc: 'Skromny początek w świecie kodu.' },
        { id: 'cafe', name: 'Kawiarnia "Pixel Cafe"', sector: 'Usługi', base: 80, level: 0, desc: 'Lokalny biznes dla nerdów i nie tylko.' },
        { id: 'soft', name: 'Software House', sector: 'IT', base: 600, level: 0, desc: 'Tworzenie oprogramowania na zlecenie.' },
        { id: 'fab3d', name: 'Fabryka Drukarek 3D', sector: 'Przemysł', base: 5000, level: 0, desc: 'Wejście na rynek produkcyjny.' },
        { id: 'global', name: 'Globalna Korporacja Tech', sector: 'IT', base: 25000, level: 0, desc: 'Dominacja na rynku światowym.' },
      ],
      tech: {
        innowacje: {
          name: 'Gałąź Innowacji',
          upgrades: [
            { id: 'innowacje1', name: 'Kreatywne Myślenie', desc: '+5% do globalnych zysków', cost: 5, level: 0 },
            { id: 'innowacje2', name: 'Badania i Rozwój', desc: '-10% koszt ulepszeń firm', cost: 10, level: 0 },
          ],
        },
        marketing: {
          name: 'Gałąź Marketingu',
          upgrades: [
            { id: 'marketing1', name: 'Marketing Szeptany', desc: '+15% zysków dla 2 pierwszych firm', cost: 5, level: 0 },
            { id: 'marketing2', name: 'Analityka Rynku', desc: 'Częstsze i trafniejsze wskazówki na forum', cost: 15, level: 0 },
          ],
        },
        finanse: {
          name: 'Gałąź Finansów',
          upgrades: [
            { id: 'finanse1', name: 'Twarde Negocjacje', desc: '-10% koszt zakupu firm', cost: 8, level: 0 },
            { id: 'finanse2', name: 'Dywersyfikacja Portfela', desc: 'Zmniejsza prowizję giełdową o 20%', cost: 20, level: 0 },
          ],
        },
      },
      market: {
        unlocked: false,
        fee: 0.01,
        stocks: [
          { id: 'CYBR', name: 'CybeRaptor Inc.', price: 150, lastPrice: 150, volatility: 0.15, owned: 0, totalShares: 10000 },
          { id: 'ECOV', name: 'EcoVolt S.A.', price: 80, lastPrice: 80, volatility: 0.05, owned: 0, totalShares: 20000 },
          { id: 'BIOG', name: 'BioGenetiCorp', price: 50, lastPrice: 50, volatility: 0.25, owned: 0, totalShares: 5000 },
          { id: 'QLG', name: 'QuantumLeap Games', price: 65, lastPrice: 65, volatility: 0.18, owned: 0, totalShares: 15000 },
        ],
        playerListed: false,
      },
      forum: {
        market: [
          {
            text: 'Witaj na Giełdzie Wilków z Wall Street! Obserwuj ten kanał, aby podejmować trafne decyzje.',
            author: 'System',
            timestamp: Date.now(),
          },
        ],
        general: [
          {
            text: 'Witaj na czacie ogólnym! Porozmawiaj z innymi przedsiębiorcami.',
            author: 'System',
            timestamp: Date.now(),
          },
        ],
      },
      quests: this.generateQuests(),
      totals: { prestige: 0 },
      shop: { aiAgent: false },
      lastTick: Date.now(),
      admin: false,
      preferences: {
        theme: 'dark',
      },
    };
  },

  hasUpgrade(state, branchKey, upgradeId) {
    const branch = state?.tech?.[branchKey];
    if (!branch || !Array.isArray(branch.upgrades)) {
      return false;
    }

    const upgrade = branch.upgrades.find((item) => item.id === upgradeId);
    return Boolean(upgrade && upgrade.level > 0);
  },

  calculateCompanyIncome(company) {
    if (!company || company.level <= 0) {
      return 0;
    }

    let income = company.base * company.level;
    [25, 50, 100, 200, 400, 800].forEach((threshold) => {
      if (company.level >= threshold) {
        income *= 3;
      }
    });

    if (this.hasUpgrade(this.state, 'innowacje', 'innowacje1')) {
      income *= 1.05;
    }

    let marketingBonus = 0;
    if (this.hasUpgrade(this.state, 'marketing', 'marketing1')) {
      const boostedIds = this.state.companies.slice(0, 2).map((c) => c.id);
      if (boostedIds.includes(company.id)) {
        marketingBonus = company.base * company.level * 0.15;
      }
    }

    const prestigeMultiplier = 1 + (this.state.totals?.prestige ?? 0) * 0.1;
    return (income + marketingBonus) * prestigeMultiplier;
  },

  calculateIPS() {
    if (!Array.isArray(this.state.companies)) {
      return 0;
    }

    return this.state.companies.reduce((total, company) => total + this.calculateCompanyIncome(company), 0);
  },

  calculateUpgradeCost(company, state = this.state) {
    if (!company) {
      return 0;
    }

    let baseCost = company.base * 20 * Math.pow(1.18, company.level);
    if (this.hasUpgrade(state, 'innowacje', 'innowacje2')) {
      baseCost *= 0.9;
    }
    return baseCost;
  },

  buyCompanyLevel(companyId) {
    const company = this.state.companies.find((entry) => entry.id === companyId);
    if (!company) {
      return;
    }

    const cost = this.calculateUpgradeCost(company);
    if (this.state.cash >= cost) {
      this.state.cash -= cost;
      company.level += 1;
      this.addXP(50);
      this.renderImperium();
      this.save();
    }
  },

  buyCompany(companyId) {
    const company = this.state.companies.find((entry) => entry.id === companyId);
    if (!company || company.level > 0) {
      return;
    }

    let cost = company.base * 15;
    if (this.hasUpgrade(this.state, 'finanse', 'finanse1')) {
      cost *= 0.9;
    }

    if (this.state.cash >= cost) {
      this.state.cash -= cost;
      company.level = 1;
      this.addXP(100);
      this.renderImperium();
      this.save();
    }
  },

  addXP(amount) {
    this.state.xp += amount;
    while (this.state.xp >= this.state.xpNext) {
      this.state.xp -= this.state.xpNext;
      this.state.level += 1;
      this.state.xpNext = Math.floor(this.state.xpNext * 1.5);
    }

    if (this.state.level >= 6) {
      document.getElementById('prestigeBtn').disabled = false;
    }
  },

  performPrestige() {
    if (this.state.level < 6) {
      return;
    }

    if (
      confirm(
        'Czy na pewno chcesz wykonać prestiż? Zresetujesz firmy i gotówkę, ale zyskasz trwały bonus +10% do zysków i odblokujesz Giełdę!'
      )
    ) {
      this.state.totals.prestige += 1;
      this.state.cash = 1000;
      this.state.market.unlocked = true;
      this.state.companies.forEach((company, index) => {
        company.level = index === 0 ? 1 : 0;
      });
      this.switchTab('imperium');
      this.save();
    }
  },

  renderImperium() {
    const grid = document.getElementById('companies-grid');
    grid.innerHTML = '';

    this.state.companies.forEach((company) => {
      const card = document.createElement('div');
      card.className = 'company-card';

      if (company.level > 0) {
        const upgradeCost = this.calculateUpgradeCost(company);
        const income = this.calculateCompanyIncome(company);

        const thresholds = [25, 50, 100, 200, 400, 800];
        const nextThreshold = thresholds.find((threshold) => company.level < threshold);
        card.innerHTML = `
          <div class="company-card-header">
            <h4>${company.name}</h4>
            <span class="pill">Poziom ${company.level}</span>
          </div>
          <p class="sub" style="font-size: 13px; margin: 0;">${company.desc}</p>
          <div class="company-stats">
            <div>Zysk / s: <b class="mono">${this.formatCurrency(income)}</b></div>
            <div>Następny próg: <b class="mono">${nextThreshold ? `Lvl ${nextThreshold}` : 'Maks.'}</b></div>
          </div>
          <p>Koszt ulepszenia: <b class="mono">${this.formatCurrency(upgradeCost)}</b></p>
          <button class="btn" data-company-upgrade="${company.id}" ${this.state.cash < upgradeCost ? 'disabled' : ''}>Ulepsz</button>
        `;
      } else {
        let purchaseCost = company.base * 15;
        if (this.hasUpgrade(this.state, 'finanse', 'finanse1')) {
          purchaseCost *= 0.9;
        }

        card.innerHTML = `
          <div class="company-card-header">
            <h4>${company.name}</h4>
            <span class="pill">Zablokowane</span>
          </div>
          <p class="sub" style="font-size: 13px; margin: 0;">${company.desc}</p>
          <p>Koszt zakupu: <b class="mono">${this.formatCurrency(purchaseCost)}</b></p>
          <button class="btn" data-company-buy="${company.id}" ${this.state.cash < purchaseCost ? 'disabled' : ''}>Kup firmę</button>
        `;
      }

      grid.appendChild(card);
    });

    grid.querySelectorAll('[data-company-upgrade]').forEach((button) => {
      button.addEventListener('click', () => this.buyCompanyLevel(button.dataset.companyUpgrade));
    });
    grid.querySelectorAll('[data-company-buy]').forEach((button) => {
      button.addEventListener('click', () => this.buyCompany(button.dataset.companyBuy));
    });

    document.getElementById('prestigeBtn').disabled = this.state.level < 6;
    document.getElementById(
      'prestigeInfo'
    ).textContent = `Wykonanych prestiży: ${this.state.totals.prestige} (Bonus: +${this.state.totals.prestige * 10}%)`;
  },

  renderTech() {
    const grid = document.getElementById('tech-tree-grid');
    grid.innerHTML = '';

    Object.entries(this.state.tech).forEach(([branchKey, branch]) => {
      const branchDiv = document.createElement('div');
      branchDiv.className = 'tech-branch';
      branchDiv.innerHTML = `<h3>${branch.name}</h3>`;

      (branch.upgrades || []).forEach((upgrade) => {
        const item = document.createElement('div');
        item.className = 'tech-item';
        const isPurchased = upgrade.level > 0;
        const canAfford = this.state.btc >= upgrade.cost;

        item.innerHTML = `
          <b>${upgrade.name}</b>
          <small>${upgrade.desc}</small>
          <small>Koszt: ${upgrade.cost} PW</small>
          <button class="btn btn-ghost" data-tech-buy="${branchKey}:${upgrade.id}" ${
            isPurchased || !canAfford ? 'disabled' : ''
          }>${isPurchased ? 'Wykupione' : 'Kup'}</button>
        `;

        branchDiv.appendChild(item);
      });

      grid.appendChild(branchDiv);
    });

    grid.querySelectorAll('[data-tech-buy]').forEach((button) => {
      button.addEventListener('click', () => {
        const [branchKey, upgradeId] = button.dataset.techBuy.split(':');
        const upgrade = this.state.tech[branchKey].upgrades.find((entry) => entry.id === upgradeId);
        if (upgrade && upgrade.level === 0 && this.state.btc >= upgrade.cost) {
          this.state.btc -= upgrade.cost;
          upgrade.level = 1;
          this.renderTech();
          this.renderTopBar();
          this.save();
        }
      });
    });
  },

  renderMarket() {
    const grid = document.getElementById('market-grid');
    grid.innerHTML = '';

    const stocks = this.state.market.playerListed
      ? [...this.state.market.stocks, this.getPlayerStock()]
      : [...this.state.market.stocks];

    stocks.forEach((stock) => {
      const change = stock.price - stock.lastPrice;
      const changePct = stock.lastPrice > 0 ? (change / stock.lastPrice) * 100 : 0;
      const stockDiv = document.createElement('div');
      stockDiv.className = 'stock';
      stockDiv.innerHTML = `
        <div class="row"><b>${stock.name}</b><span class="pill">${stock.id}</span></div>
        <div class="row">
          <div class="price">${this.formatCurrency(stock.price, 2)}</div>
          <div class="trend ${change >= 0 ? 'up' : 'down'}">${change >= 0 ? '▲' : '▼'} ${changePct.toFixed(2)}%</div>
        </div>
        <p class="sub" style="font-size: 12px;">Posiadane: ${stock.owned.toLocaleString()} akcji</p>
        <div class="row" style="gap: 5px;">
          <input type="number" class="stock-input" id="input-${stock.id}" min="1" value="1" />
          <button class="btn" data-market-buy="${stock.id}">Kup</button>
          <button class="btn btn-ghost" data-market-sell="${stock.id}">Sprzedaj</button>
        </div>
      `;
      grid.appendChild(stockDiv);
    });

    grid.querySelectorAll('[data-market-buy]').forEach((button) =>
      button.addEventListener('click', () => this.tradeStock(button.dataset.marketBuy, 'buy'))
    );
    grid.querySelectorAll('[data-market-sell]').forEach((button) =>
      button.addEventListener('click', () => this.tradeStock(button.dataset.marketSell, 'sell'))
    );

    const listBtn = document.getElementById('listCompanyBtn');
    listBtn.disabled = this.state.cash < 100000 || this.state.market.playerListed;
    listBtn.textContent = this.state.market.playerListed ? 'Twoja firma jest na giełdzie' : 'Wprowadź spółkę na giełdę';
    listBtn.onclick = () => {
      if (this.state.cash >= 100000 && !this.state.market.playerListed) {
        this.state.cash -= 100000;
        this.state.market.playerListed = true;
        this.addXP(1000);
        this.renderMarket();
        this.renderTopBar();
        this.save();
      }
    };

    this.renderShareholderPanel();
  },

  renderShareholderPanel() {
    const container = document.getElementById('shareholder-panel-container');
    container.innerHTML = '';

    this.state.market.stocks.forEach((stock) => {
      if (stock.totalShares > 0 && stock.owned / stock.totalShares > 0.5) {
        const panel = document.createElement('div');
        panel.className = 'card';
        panel.style.cssText = 'margin-top: 18px; padding: 20px;';
        panel.innerHTML = `
          <h3>Panel Decyzyjny: ${stock.name}</h3>
          <p class="sub">Masz większość udziałów! Twoje decyzje wpłyną na kurs akcji.</p>
          <button class="btn" data-decision="${stock.id}:agressive">Agresywna kampania (+cena, +ryzyko)</button>
          <button class="btn btn-ghost" data-decision="${stock.id}:stable" style="margin-left: 10px;">Stabilny rozwój (+cena, -ryzyko)</button>
        `;
        container.appendChild(panel);
      }
    });

    container.querySelectorAll('[data-decision]').forEach((button) => {
      button.addEventListener('click', () => {
        const [stockId, decision] = button.dataset.decision.split(':');
        const stock = this.state.market.stocks.find((entry) => entry.id === stockId);
        if (!stock) {
          return;
        }

        if (decision === 'agressive') {
          stock.price *= 1 + (Math.random() * 0.4 - 0.1);
        } else {
          stock.price *= 1 + (Math.random() * 0.1 + 0.05);
        }

        stock.price = Math.max(1, stock.price);
        alert(`Decyzja podjęta! Nowa cena ${stock.name} to ${this.formatCurrency(stock.price, 2)}`);
        this.renderMarket();
        this.save();
      });
    });
  },

  getPlayerStock() {
    if (!this.state.market.playerStock) {
      this.state.market.playerStock = {
        id: 'PLAYER',
        name: this.state.companyName,
        price: 20,
        lastPrice: 20,
        volatility: 0.1,
        owned: 0,
        totalShares: 50000,
      };
    }

    const stock = this.state.market.playerStock;
    stock.lastPrice = stock.price;
    stock.price = 20 + Math.log10(this.calculateIPS() + 1) * 10;
    return stock;
  },

  tradeStock(stockId, type) {
    const stock = stockId === 'PLAYER'
      ? this.getPlayerStock()
      : this.state.market.stocks.find((entry) => entry.id === stockId);

    if (!stock) {
      return;
    }

    const amountInput = document.getElementById(`input-${stock.id}`);
    const amount = parseInt(amountInput?.value, 10);
    if (!Number.isFinite(amount) || amount <= 0) {
      return;
    }

    const cost = stock.price * amount;
    const feeMultiplier = this.hasUpgrade(this.state, 'finanse', 'finanse2') ? 0.8 : 1;
    const fee = cost * this.state.market.fee * feeMultiplier;

    if (type === 'buy' && this.state.cash >= cost + fee) {
      this.state.cash -= cost + fee;
      stock.owned += amount;
    } else if (type === 'sell' && stock.owned >= amount) {
      this.state.cash += cost - fee;
      stock.owned -= amount;
    }

    this.renderMarket();
    this.renderTopBar();
    this.save();
  },

  tickMarket(isMajorEvent) {
    if (!this.state.market || !Array.isArray(this.state.market.stocks)) {
      return;
    }

    this.state.market.stocks.forEach((stock) => {
      stock.lastPrice = stock.price;
      stock.price *= 1 + (Math.random() * 2 - 1) * stock.volatility;
      stock.price = Math.max(1, stock.price);
    });

    if (isMajorEvent) {
      const randomStock = this.state.market.stocks[Math.floor(Math.random() * this.state.market.stocks.length)];
      const majorChange = Math.random() * 0.7 - 0.3;
      randomStock.price *= 1 + majorChange;
      randomStock.price = Math.max(1, randomStock.price);
      const message =
        majorChange > 0
          ? `Pozytywne prognozy dla ${randomStock.name}! Analitycy przewidują gwałtowny wzrost.`
          : `Niepokojące wieści z ${randomStock.name}. Inwestorzy w panice wyprzedają akcje.`;
      this.addForumPost('market', message, 'Analityk Rynku');
    }

    if (this.state.market.playerListed) {
      const playerStock = this.getPlayerStock();
      this.state.market.playerStock = playerStock;
    }

    if (document.querySelector('.btn.active[data-tab="market"]')) {
      this.renderMarket();
    }

    this.save();
  },

  calculatePortfolioValue(state = this.state) {
    const baseStocksValue = (state.market?.stocks || []).reduce((acc, stock) => acc + stock.owned * stock.price, 0);
    const playerStockValue = state.market?.playerListed ? (state.market.playerStock?.owned || 0) * (state.market.playerStock?.price || 0) : 0;
    return baseStocksValue + playerStockValue;
  },

  generateQuests() {
    return [
      { id: 1, name: 'Pierwszy krok', desc: 'Osiągnij 2 poziom', goal: { type: 'level', value: 2 }, reward: { xp: 100, btc: 5 }, claimed: false },
      { id: 2, name: 'Mały kapitalista', desc: 'Zgromadź $10 000', goal: { type: 'cash', value: 10000 }, reward: { xp: 150, btc: 10 }, claimed: false },
      { id: 3, name: 'Rozwój imperium', desc: 'Posiadaj 3 firmy', goal: { type: 'companies', value: 3 }, reward: { xp: 200, btc: 15 }, claimed: false },
      { id: 4, name: 'Młody Inwestor', desc: 'Kup pierwsze akcje na giełdzie', goal: { type: 'stocks', value: 1 }, reward: { xp: 500, btc: 20 }, claimed: false },
    ];
  },

  checkQuests() {
    if (!Array.isArray(this.state.quests)) {
      return;
    }

    this.state.quests.forEach((quest) => {
      if (quest.claimed || quest.completed) {
        return;
      }

      let progress = false;
      switch (quest.goal.type) {
        case 'level':
          progress = this.state.level >= quest.goal.value;
          break;
        case 'cash':
          progress = this.state.cash >= quest.goal.value;
          break;
        case 'companies':
          progress = this.state.companies.filter((company) => company.level > 0).length >= quest.goal.value;
          break;
        case 'stocks': {
          const ownsMarketStock = this.state.market.stocks.some((stock) => stock.owned > 0);
          const ownsPlayerStock = (this.state.market.playerStock?.owned || 0) > 0;
          progress = ownsMarketStock || ownsPlayerStock;
          break;
        }
        default:
          break;
      }

      if (progress) {
        quest.completed = true;
      }
    });
  },

  renderQuests() {
    const grid = document.getElementById('tasks-grid');
    grid.innerHTML = '';

    if (!Array.isArray(this.state.quests)) {
      return;
    }

    this.state.quests.forEach((quest) => {
      const taskDiv = document.createElement('div');
      taskDiv.className = 'card';
      taskDiv.style.padding = '15px';
      taskDiv.innerHTML = `
        <h4>${quest.name}</h4>
        <p class="sub" style="font-size: 13px;">${quest.desc}</p>
        <p>Nagroda: ${quest.reward.xp} XP, ${quest.reward.btc} PW</p>
        <button class="btn" data-quest-claim="${quest.id}" ${!quest.completed || quest.claimed ? 'disabled' : ''}>
          ${quest.claimed ? 'Odebrano' : quest.completed ? 'Odbierz' : 'W toku'}
        </button>
      `;
      grid.appendChild(taskDiv);
    });

    grid.querySelectorAll('[data-quest-claim]').forEach((button) => {
      button.addEventListener('click', () => {
        const quest = this.state.quests.find((entry) => entry.id === Number(button.dataset.questClaim));
        if (quest && quest.completed && !quest.claimed) {
          this.addXP(quest.reward.xp);
          this.state.btc += quest.reward.btc;
          quest.claimed = true;
          this.renderQuests();
          this.save();
        }
      });
    });
  },

  addForumPost(channel, text, author) {
    if (!this.state.forum[channel]) {
      this.state.forum[channel] = [];
    }

    this.state.forum[channel].unshift({ text, author, timestamp: Date.now() });
    if (this.state.forum[channel].length > 50) {
      this.state.forum[channel].pop();
    }

    if (document.querySelector('.btn.active[data-tab="forum"]')) {
      this.renderForum();
    }
  },

  renderForum() {
    const feed = document.getElementById('forum-feed');
    const activeTab = document.querySelector('.forum-tab.active');
    const activeChannel = activeTab ? activeTab.dataset.forumTab : 'market';
    const posts = this.state.forum[activeChannel] || [];

    feed.innerHTML = posts
      .map(
        (post) => `
        <div class="post">
          <div class="post-header">[${new Date(post.timestamp).toLocaleTimeString()}] <b>${post.author}</b> napisał:</div>
          <div class="post-content">${post.text}</div>
        </div>
      `
      )
      .join('');

    if (!this.forumBinds) {
      document.querySelectorAll('.forum-tab').forEach((tab) => {
        tab.addEventListener('click', () => {
          document.querySelector('.forum-tab.active').classList.remove('active');
          tab.classList.add('active');
          this.renderForum();
        });
      });

      document.getElementById('post-submit-btn').addEventListener('click', () => {
        const textarea = document.getElementById('post-text');
        const text = textarea.value.trim();
        if (text) {
          this.addForumPost('general', text, this.state.username);
          textarea.value = '';
          this.save();
        }
      });

      this.forumBinds = true;
    }
  },

  renderShop() {
    const agentShop = document.getElementById('ai-agent-shop');
    const avatarChanger = document.getElementById('avatar-changer');
    const buyBtn = document.getElementById('buy-ai-agent-btn');
    const saveAvatarBtn = document.getElementById('save-avatar-btn');

    if (this.state.shop.aiAgent) {
      agentShop.classList.add('hidden');
      avatarChanger.classList.remove('hidden');
    } else {
      agentShop.classList.remove('hidden');
      avatarChanger.classList.add('hidden');
      buyBtn.disabled = this.state.cash < 500000;
    }

    buyBtn.onclick = () => {
      if (this.state.cash >= 500000 && !this.state.shop.aiAgent) {
        this.state.cash -= 500000;
        this.state.shop.aiAgent = true;
        this.renderShop();
        this.renderTopBar();
        this.save();
      }
    };

    saveAvatarBtn.onclick = () => {
      const url = document.getElementById('avatar-url-input').value.trim();
      if (url) {
        this.state.avatar = url;
        this.renderTopBar();
        this.save();
      }
    };
  },

  renderRanking() {
    const leaderboard = document.getElementById('leaderboard');
    const users = this.getUsers()
      .map((entry) => ({
        name: entry.username,
        netWorth: this.calculateNetWorth(entry.data),
      }))
      .sort((a, b) => b.netWorth - a.netWorth);

    leaderboard.innerHTML = users
      .map(
        (user, index) => `
        <div class="row" style="padding: 8px 0; border-bottom: 1px solid var(--border);">
          <span><b>#${index + 1}</b> ${user.name}</span>
          <span class="mono">${this.formatCurrency(user.netWorth)}</span>
        </div>
      `
      )
      .join('');
  },

  calculateNetWorth(data) {
    if (!data) {
      return 0;
    }

    const cash = data.cash || 0;
    const portfolioValue = this.calculatePortfolioValue(data);
    const companiesValue = (data.companies || []).reduce((acc, company) => {
      if (company.level <= 0) {
        return acc;
      }
      return acc + this.calculateUpgradeCost(company, data) * company.level;
    }, 0);

    return cash + portfolioValue + companiesValue;
  },

  renderSettings() {
    document.getElementById('settings-username').textContent = this.state.username;
    document.getElementById('theme-toggle').checked = this.state.preferences.theme === 'light';
  },

  updateAdminUI() {
    const loginContainer = document.getElementById('admin-login-btn-container');
    const infoContainer = document.getElementById('admin-panel-info');
    if (!loginContainer || !infoContainer) {
      return;
    }

    if (this.state.admin) {
      loginContainer.classList.add('hidden');
      infoContainer.classList.remove('hidden');
    } else {
      loginContainer.classList.remove('hidden');
      infoContainer.classList.add('hidden');
    }
  },

  updateTheme(theme) {
    this.state.preferences.theme = theme;
    this.applyTheme(theme);
    this.save();
  },

  applyTheme(theme) {
    document.body.dataset.theme = theme;
    document.documentElement.dataset.theme = theme;
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.checked = theme === 'light';
    }
  },

  handleAdminLogin() {
    const pass = prompt('Podaj hasło administratora:');
    if (pass === 'liga10078933') {
      this.state.admin = true;
      alert('Zalogowano jako administrator!');
      this.updateAdminUI();
      this.save();
    } else {
      alert('Nieprawidłowe hasło.');
    }
  },

  logout() {
    clearInterval(this.gameLoopInterval);
    clearInterval(this.marketInterval);
    clearInterval(this.forumInterval);
    localStorage.removeItem('lp_currentUser');
    window.location.reload();
  },

  deleteAccount() {
    if (confirm('Czy na pewno chcesz usunąć swoje konto? Tej operacji nie można cofnąć!')) {
      const currentUsername = localStorage.getItem('lp_currentUser');
      const users = this.getUsers().filter((entry) => entry.username !== currentUsername);
      this.saveUsers(users);
      this.logout();
    }
  },

  formatCurrency(num, digits = 2) {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: ' tys.' },
      { value: 1e6, symbol: ' mln' },
      { value: 1e9, symbol: ' mld' },
      { value: 1e12, symbol: ' bln' },
      { value: 1e15, symbol: ' bld' },
    ];
    const item = [...lookup].reverse().find((entry) => Math.abs(num) >= entry.value);
    if (item && item.value > 1) {
      return `${num < 0 ? '-' : ''}$${Math.abs(num / item.value)
        .toFixed(digits)
        .replace(/\.0+$/, '')}${item.symbol}`;
    }
    return `${num < 0 ? '-' : ''}$${Math.abs(num).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: digits,
    })}`;
  },
};

DocumentReady(() => {
  Game.init();
  window.Game = Game;
});

function DocumentReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  } else {
    callback();
  }
}
