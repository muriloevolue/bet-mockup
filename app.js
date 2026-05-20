const STORAGE_KEYS = {
  user: "pulse-casino:user",
  selectedGame: "pulse-casino:selected-game",
};

const EXTRA_GAMES = [
  createGame({
    id: "gates-of-olympus",
    name: "Gates of Olympus",
    provider: "Pragmatic Play",
    badge: "1.208",
    online: "1.208",
    todayPayout: "R$ 18.447.993,12",
    lastMinutes: "R$ 133.221,49",
    rtp: "96,50%",
    family: "Slots mitológicos",
    likes: "27980",
    dislikes: "6122",
    tone: "blue",
    section: "popular",
    tags: ["slots", "popular"],
    onlineNow: "1.146",
    totalPaid: "R$ 254.220.842,44",
    rtpReal: "96,22%",
    avgWin: "R$ 2,92",
    wins: [
      { player: "ga**", payout: "R$ 2.240,00", bet: "R$ 4,00", multiplier: "560x" },
      { player: "al**", payout: "R$ 1.540,00", bet: "R$ 2,00", multiplier: "770x" },
      { player: "ro**", payout: "R$ 960,00", bet: "R$ 2,00", multiplier: "480x" },
    ],
  }),
  createGame({
    id: "sweet-bonanza",
    name: "Sweet Bonanza",
    provider: "Pragmatic Play",
    badge: "988",
    online: "988",
    todayPayout: "R$ 12.905.318,55",
    lastMinutes: "R$ 81.544,90",
    rtp: "96,51%",
    family: "Slots doces",
    likes: "19840",
    dislikes: "4770",
    tone: "red",
    section: "popular",
    tags: ["slots", "popular"],
    onlineNow: "874",
    totalPaid: "R$ 188.074.103,91",
    rtpReal: "96,18%",
    avgWin: "R$ 2,27",
    wins: [
      { player: "lu**", payout: "R$ 1.220,00", bet: "R$ 2,00", multiplier: "610x" },
      { player: "be**", payout: "R$ 840,00", bet: "R$ 2,00", multiplier: "420x" },
      { player: "ca**", payout: "R$ 560,00", bet: "R$ 1,00", multiplier: "560x" },
    ],
  }),
  createGame({
    id: "rooster-rumble",
    name: "Rooster Rumble",
    provider: "Pragmatic Play",
    badge: "611",
    online: "611",
    todayPayout: "R$ 6.442.190,63",
    lastMinutes: "R$ 44.208,17",
    rtp: "96,54%",
    family: "Slots em arena",
    likes: "12118",
    dislikes: "2592",
    tone: "gold",
    section: "popular",
    tags: ["slots", "popular"],
    onlineNow: "542",
    totalPaid: "R$ 91.602.771,44",
    rtpReal: "96,02%",
    avgWin: "R$ 1,95",
    wins: [
      { player: "sa**", payout: "R$ 780,00", bet: "R$ 2,00", multiplier: "390x" },
      { player: "mi**", payout: "R$ 612,00", bet: "R$ 1,50", multiplier: "408x" },
      { player: "fe**", payout: "R$ 400,00", bet: "R$ 1,00", multiplier: "400x" },
    ],
  }),
  createGame({
    id: "zeus-vs-hades",
    name: "Zeus vs Hades",
    provider: "Pragmatic Play",
    badge: "452",
    online: "452",
    todayPayout: "R$ 4.881.320,91",
    lastMinutes: "R$ 32.510,42",
    rtp: "96,58%",
    family: "Batalha de deuses",
    likes: "9930",
    dislikes: "2204",
    tone: "blue",
    section: "slots",
    tags: ["slots"],
    onlineNow: "418",
    totalPaid: "R$ 66.210.514,38",
    rtpReal: "96,11%",
    avgWin: "R$ 1,83",
    wins: [
      { player: "ma**", payout: "R$ 620,00", bet: "R$ 2,00", multiplier: "310x" },
      { player: "to**", payout: "R$ 511,00", bet: "R$ 1,00", multiplier: "511x" },
      { player: "ra**", payout: "R$ 390,00", bet: "R$ 1,00", multiplier: "390x" },
    ],
  }),
  createGame({
    id: "sugar-rush",
    name: "Sugar Rush",
    provider: "Pragmatic Play",
    badge: "703",
    online: "703",
    todayPayout: "R$ 8.110.437,00",
    lastMinutes: "R$ 51.006,04",
    rtp: "96,50%",
    family: "Grid de doces",
    likes: "13920",
    dislikes: "2911",
    tone: "purple",
    section: "slots",
    tags: ["slots"],
    onlineNow: "665",
    totalPaid: "R$ 119.444.550,21",
    rtpReal: "96,09%",
    avgWin: "R$ 2,01",
    wins: [
      { player: "jo**", payout: "R$ 930,00", bet: "R$ 2,00", multiplier: "465x" },
      { player: "de**", payout: "R$ 710,00", bet: "R$ 2,00", multiplier: "355x" },
      { player: "vi**", payout: "R$ 488,00", bet: "R$ 1,00", multiplier: "488x" },
    ],
  }),
  createGame({
    id: "wild-bandito",
    name: "Wild Bandito",
    provider: "Pragmatic Play",
    badge: "287",
    online: "287",
    todayPayout: "R$ 2.774.209,63",
    lastMinutes: "R$ 19.785,12",
    rtp: "96,10%",
    family: "Slots high volatility",
    likes: "6421",
    dislikes: "1421",
    tone: "red",
    section: "slots",
    tags: ["slots"],
    onlineNow: "241",
    totalPaid: "R$ 37.004.621,88",
    rtpReal: "95,87%",
    avgWin: "R$ 1,74",
    wins: [
      { player: "ta**", payout: "R$ 510,00", bet: "R$ 1,00", multiplier: "510x" },
      { player: "re**", payout: "R$ 420,00", bet: "R$ 1,00", multiplier: "420x" },
      { player: "pa**", payout: "R$ 280,00", bet: "R$ 1,00", multiplier: "280x" },
    ],
  }),
  createGame({
    id: "starlight-princess",
    name: "Starlight Princess",
    provider: "Pragmatic Play",
    badge: "562",
    online: "562",
    todayPayout: "R$ 5.702.601,18",
    lastMinutes: "R$ 38.201,44",
    rtp: "96,50%",
    family: "Slots anime",
    likes: "11602",
    dislikes: "2408",
    tone: "purple",
    section: "slots",
    tags: ["slots"],
    onlineNow: "508",
    totalPaid: "R$ 78.335.220,40",
    rtpReal: "96,08%",
    avgWin: "R$ 1,97",
    wins: [
      { player: "na**", payout: "R$ 690,00", bet: "R$ 2,00", multiplier: "345x" },
      { player: "je**", payout: "R$ 540,00", bet: "R$ 1,50", multiplier: "360x" },
      { player: "lu**", payout: "R$ 330,00", bet: "R$ 1,00", multiplier: "330x" },
    ],
  }),
  createGame({
    id: "balloon",
    name: "Balloon",
    provider: "Smartsoft",
    badge: "188",
    online: "188",
    todayPayout: "R$ 1.220.514,78",
    lastMinutes: "R$ 17.220,09",
    rtp: "97,10%",
    family: "Crash casual",
    likes: "7140",
    dislikes: "1551",
    tone: "blue",
    section: "crash",
    tags: ["crash"],
    onlineNow: "212",
    totalPaid: "R$ 28.842.410,03",
    rtpReal: "96,77%",
    avgWin: "R$ 2,33",
    wins: [
      { player: "be**", payout: "R$ 610,00", bet: "R$ 2,00", multiplier: "305x" },
      { player: "ru**", payout: "R$ 450,00", bet: "R$ 1,50", multiplier: "300x" },
      { player: "an**", payout: "R$ 280,00", bet: "R$ 1,00", multiplier: "280x" },
    ],
  }),
  createGame({
    id: "plinko-x",
    name: "Plinko X",
    provider: "Smartsoft",
    badge: "145",
    online: "145",
    todayPayout: "R$ 932.004,18",
    lastMinutes: "R$ 10.489,40",
    rtp: "96,90%",
    family: "Drop e multiplicadores",
    likes: "5410",
    dislikes: "1212",
    tone: "green",
    section: "crash",
    tags: ["crash"],
    onlineNow: "173",
    totalPaid: "R$ 19.841.220,66",
    rtpReal: "96,54%",
    avgWin: "R$ 1,88",
    wins: [
      { player: "li**", payout: "R$ 420,00", bet: "R$ 1,00", multiplier: "420x" },
      { player: "ot**", payout: "R$ 270,00", bet: "R$ 1,00", multiplier: "270x" },
      { player: "ed**", payout: "R$ 162,00", bet: "R$ 1,00", multiplier: "162x" },
    ],
  }),
];

const state = {
  data: null,
  fakeUserTemplate: null,
  user: null,
  selectedGameId: null,
  currentView: "home",
  mobileMenuOpen: false,
  search: "",
  loginTargetGameId: null,
  shelfOffsets: {
    popular: 0,
    crash: 0,
    slots: 0,
    related: 0,
  },
};

const elements = {
  sidebarPromos: document.querySelector("#sidebar-promos"),
  sidebarNav: document.querySelector("#sidebar-nav"),
  sidebarBottom: document.querySelector("#sidebar-bottom"),
  tickerRow: document.querySelector("#ticker-row"),
  jackpotGrid: document.querySelector("#jackpot-grid"),
  promoHeroRow: document.querySelector("#promo-hero-row"),
  popularRow: document.querySelector("#popular-row"),
  crashRow: document.querySelector("#crash-row"),
  slotsRow: document.querySelector("#slots-row"),
  statsGrid: document.querySelector("#stats-grid"),
  winsGrid: document.querySelector("#wins-grid"),
  relatedRow: document.querySelector("#related-row"),
  relatedTitle: document.querySelector("#related-title"),
  detailHero: document.querySelector("#detail-hero"),
  detailModalCard: document.querySelector("#detail-modal-card"),
  detailTitleBar: document.querySelector("#detail-title-bar"),
  searchInput: document.querySelector("#search-input"),
  toast: document.querySelector("#toast"),
  backButton: document.querySelector("#back-button"),
  mobileMenuButton: document.querySelector("#mobile-menu-button"),
  sessionActions: document.querySelector("#session-actions"),
  loginModal: document.querySelector("#login-modal"),
  loginForm: document.querySelector("#login-form"),
  loginEmail: document.querySelector("#login-email"),
  loginPassword: document.querySelector("#login-password"),
  loginCredentialsHint: document.querySelector("#login-credentials-hint"),
  closeLoginButton: document.querySelector("#close-login-button"),
  playModal: document.querySelector("#play-modal"),
  playForm: document.querySelector("#play-form"),
  playTitle: document.querySelector("#play-title"),
  playGameName: document.querySelector("#play-game-name"),
  playGameMeta: document.querySelector("#play-game-meta"),
  playBalance: document.querySelector("#play-balance"),
  playAmount: document.querySelector("#play-amount"),
  closePlayButton: document.querySelector("#close-play-button"),
};

async function bootstrap() {
  const [gamesResponse, userResponse] = await Promise.all([
    fetch("./data/games.json"),
    fetch("./data/user.json"),
  ]);
  const gamesData = await gamesResponse.json();
  state.fakeUserTemplate = await userResponse.json();
  state.data = {
    ...gamesData,
    games: [...gamesData.games, ...EXTRA_GAMES],
  };
  state.user = normalizeStoredUser(readStorage(STORAGE_KEYS.user, null));
  state.selectedGameId = readStorage(
    STORAGE_KEYS.selectedGame,
    state.data.games[0]?.id ?? null
  );
  bindEvents();
  renderAll();
}

function bindEvents() {
  elements.closeLoginButton.addEventListener("click", closeLoginModal);
  elements.loginModal.addEventListener("click", (event) => {
    if (event.target === elements.loginModal) {
      closeLoginModal();
    }
  });
  elements.loginForm.addEventListener("submit", handleLoginSubmit);

  elements.closePlayButton.addEventListener("click", closePlayModal);
  elements.playModal.addEventListener("click", (event) => {
    if (event.target === elements.playModal) {
      closePlayModal();
    }
  });

  elements.playForm.addEventListener("submit", handlePlaySubmit);
  elements.backButton.addEventListener("click", () => {
    state.currentView = "home";
    renderViews();
  });

  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderShelves();
  });

  elements.mobileMenuButton.addEventListener("click", () => {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    document.body.classList.toggle("sidebar-open", state.mobileMenuOpen);
  });

  window.addEventListener("resize", handleViewportChange);
  document.addEventListener("click", handleDocumentClick);
}

function handleDocumentClick(event) {
  const loginPlayTrigger = event.target.closest("[data-login-play]");
  if (loginPlayTrigger) {
    if (!state.user) {
      openLoginModal(state.selectedGameId);
      return;
    }
    openPlayModal(state.selectedGameId);
    return;
  }

  const sessionTrigger = event.target.closest("[data-session-action]");
  if (sessionTrigger) {
    const action = sessionTrigger.dataset.sessionAction;
    if (action === "login") {
      openLoginModal();
    }
    if (action === "logout") {
      logoutDemoUser();
    }
  }

  const playTrigger = event.target.closest("[data-play-selected], [data-play-game-id]");
  if (playTrigger) {
    if (!state.user) {
      showToast("Entre no modo demo para jogar.");
      return;
    }

    const gameId = playTrigger.dataset.playGameId || state.selectedGameId;
    openPlayModal(gameId);
  }

  const quickAmount = event.target.closest("[data-quick-amount]");
  if (quickAmount) {
    elements.playAmount.value = quickAmount.dataset.quickAmount;
  }

  const shelfTrigger = event.target.closest("[data-shelf-nav]");
  if (shelfTrigger) {
    const shelfKey = shelfTrigger.dataset.shelfKey;
    const direction = shelfTrigger.dataset.shelfNav === "next" ? 1 : -1;
    shiftShelf(shelfKey, direction);
  }
}

function renderAll() {
  renderSessionActions();
  renderSidebar();
  renderTicker();
  renderJackpots();
  renderPromoHero();
  renderShelves();
  renderDetail();
  renderViews();
}

function renderSessionActions() {
  if (!state.user) {
    elements.sessionActions.innerHTML = `
      <span class="session-hint">Acesse com e-mail e senha demo</span>
      <button class="outline-button" data-session-action="login">Entrar</button>
    `;
    return;
  }

  elements.sessionActions.innerHTML = `
    <div class="balance-chip">
      <span>Saldo demo</span>
      <strong>${formatCurrencyBRL(state.user.balance)}</strong>
    </div>
    <div class="user-chip">
      <span class="user-avatar">${state.user.name.charAt(0).toUpperCase()}</span>
      <div class="user-meta">
        <strong>${state.user.name}</strong>
        <small>Usuario ficticio</small>
      </div>
    </div>
    <button class="outline-button" data-session-action="logout">Sair</button>
  `;
}

function renderSidebar() {
  elements.sidebarPromos.innerHTML = state.data.sidebarPromos
    .map(
      (item) => `
        <article class="sidebar-promo">
          <div>
            <span>${item.top}</span>
            <strong>${item.title}</strong>
          </div>
          <i>${item.icon}</i>
        </article>
      `
    )
    .join("");

  elements.sidebarNav.innerHTML = state.data.sidebarNav
    .map(
      (item) => `
        <button class="sidebar-link">
          <span class="sidebar-icon">${item.icon}</span>
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");

  elements.sidebarBottom.innerHTML = state.data.sidebarBottom
    .map(
      (item) => `
        <button class="sidebar-link bottom-link">
          <span class="sidebar-icon">${item.icon}</span>
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");
}

function renderTicker() {
  elements.tickerRow.innerHTML = `
    <article class="ticker-card highlight-card">
      <span>Top ganhos</span>
    </article>
    ${state.data.ticker
      .map(
        (item) => `
          <article class="ticker-card">
            <strong>${item.player}</strong>
            <span>${item.game}</span>
            <em>${item.amount}</em>
          </article>
        `
      )
      .join("")}
  `;
}

function renderJackpots() {
  elements.jackpotGrid.innerHTML = state.data.jackpots
    .map(
      (item) => `
        <article class="jackpot-card tone-${item.tone}">
          <div class="jackpot-rank">${item.rank}</div>
          <div class="jackpot-thumb"></div>
          <div class="jackpot-copy">
            <strong>${item.name}</strong>
            <span>${item.amount}</span>
          </div>
          <button class="outline-button compact small-button" data-game-id="${item.gameId}">
            Jogar
          </button>
        </article>
      `
    )
    .join("");

  bindGameLaunchers(elements.jackpotGrid);
}

function renderPromoHero() {
  elements.promoHeroRow.innerHTML = `
    <div class="hero-banner-grid">
      ${state.data.heroBanners
        .map(
          (banner) => `
            <article class="hero-banner tone-${banner.tone}">
              <div class="hero-banner-content">
                <span>${banner.badge}</span>
                <strong>${banner.title}</strong>
                <p>${banner.subtitle}</p>
                <button class="hero-banner-button">${banner.cta}</button>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="side-promo-column">
      ${state.data.sideBanners
        .map(
          (banner) => `
            <article class="side-promo-card">
              <div>
                <span>${banner.badge}</span>
                <strong>${banner.title}</strong>
              </div>
              <button class="outline-button compact">${banner.cta}</button>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderShelves() {
  renderGameRow(elements.popularRow, getFilteredGames("popular"), "popular");
  renderGameRow(elements.crashRow, getFilteredGames("crash"), "crash");
  renderGameRow(elements.slotsRow, getFilteredGames("slots"), "slots");
}

function renderGameRow(container, games, shelfKey) {
  const visibleCount = getVisibleGameCount();
  const maxOffset = Math.max(0, games.length - visibleCount);
  const offset = Math.min(state.shelfOffsets[shelfKey] ?? 0, maxOffset);
  state.shelfOffsets[shelfKey] = offset;
  const visibleGames = games.slice(offset, offset + visibleCount);

  container.style.gridTemplateColumns = `repeat(${Math.max(visibleGames.length, 1)}, minmax(0, 1fr))`;
  container.innerHTML = visibleGames
    .map(
      (game) => `
        <article class="game-tile tone-${game.tone}">
          <div class="game-tile-cover">
            <div class="game-badge">${game.badge}</div>
            <div class="viewer-pill">${game.online}</div>
          </div>
          <div class="game-tile-body">
            <strong>${game.name}</strong>
            <span>${game.provider}</span>
            <div class="payout-line">
              <small>Pagou hoje</small>
              <em>${game.todayPayout}</em>
            </div>
            <button class="outline-button compact small-button" data-game-id="${game.id}">
              Jogar
            </button>
          </div>
        </article>
      `
    )
    .join("");

  renderShelfControls(shelfKey, games.length, visibleCount, offset);
  bindGameLaunchers(container);
}

function renderDetail() {
  const game = getSelectedGame();
  if (!game) {
    return;
  }

  elements.detailHero.className = `detail-hero tone-${game.tone}`;
  elements.detailModalCard.innerHTML = `
    <div class="detail-cover tone-${game.tone}">
      <span>${game.badge}</span>
    </div>
    <div class="detail-modal-copy">
      <h3>${game.name}</h3>
      <p>${game.provider}</p>
      <div class="detail-socials">
        <span>f</span>
        <span>w</span>
        <span>t</span>
        <span>x</span>
        <span>⧉</span>
      </div>
      <div class="mini-stat-block">
        <small>Pagou hoje</small>
        <strong>${game.todayPayout}</strong>
      </div>
      <div class="mini-stat-block">
        <small>Ultimos minutos</small>
        <strong>${game.lastMinutes}</strong>
      </div>
      <div class="detail-actions">
        ${
          state.user
            ? `
              <button class="primary-button" data-play-selected="true">Jogar agora</button>
              <button class="outline-button large-outline detail-balance-button" disabled>
                Saldo ${formatCurrencyBRL(state.user.balance)}
              </button>
            `
            : `
              <button class="primary-button" data-login-play="selected">Entrar e jogar</button>
              <button class="outline-button large-outline detail-balance-button" disabled>Sem cadastro real</button>
            `
        }
      </div>
    </div>
  `;

  elements.detailTitleBar.innerHTML = `
    <div>
      <h1>${game.name}</h1>
      <p>${game.provider} · RTP ${game.rtp} · ${game.family}</p>
    </div>
    <div class="detail-title-actions">
      <button class="round-icon icon-only">♡</button>
      <button class="round-icon round-stat">👍 <span>${game.likes}</span></button>
      <button class="round-icon round-stat">👎 <span>${game.dislikes}</span></button>
      <button class="round-icon icon-only">↗</button>
      <button class="round-icon icon-only">⌄</button>
    </div>
  `;

  elements.statsGrid.innerHTML = game.stats
    .map(
      (stat) => `
        <article class="stat-card ${stat.highlight ? "highlighted" : ""}">
          <span>${stat.label}</span>
          <strong>${stat.value}</strong>
        </article>
      `
    )
    .join("");

  elements.winsGrid.innerHTML = game.bigWins
    .map(
      (win, index) => `
        <article class="win-card">
          <div class="win-card-header">
            <span>${index + 1}</span>
            <strong>${win.player}</strong>
          </div>
          <div class="win-line"><span>Pagamento</span><strong>${win.payout}</strong></div>
          <div class="win-line"><span>Aposta</span><strong>${win.bet}</strong></div>
          <div class="win-line"><span>Multiplicador</span><strong>${win.multiplier}</strong></div>
        </article>
      `
    )
    .join("");

  elements.relatedTitle.textContent = `Mais jogos de ${game.provider}`;
  renderGameRow(
    elements.relatedRow,
    state.data.games.filter((item) => item.provider === game.provider && item.id !== game.id),
    "related"
  );
}

function renderViews() {
  document.querySelector("#view-home").classList.toggle("is-active", state.currentView === "home");
  document
    .querySelector("#view-detail")
    .classList.toggle("is-active", state.currentView === "detail");
}

function getFilteredGames(section) {
  const games = state.data.games.filter((game) => game.section === section || game.tags.includes(section));
  if (!state.search) {
    return games;
  }

  return games.filter((game) => {
    const haystack = `${game.name} ${game.provider} ${game.tags.join(" ")}`.toLowerCase();
    return haystack.includes(state.search);
  });
}

function bindGameLaunchers(root) {
  root.querySelectorAll("[data-game-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedGameId = button.dataset.gameId;
      saveStorage(STORAGE_KEYS.selectedGame, state.selectedGameId);

      if (state.user) {
        openPlayModal(state.selectedGameId);
        return;
      }

      state.currentView = "detail";
      renderDetail();
      renderViews();
      closeSidebarOnMobile();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function getSelectedGame() {
  return state.data.games.find((game) => game.id === state.selectedGameId) || null;
}

function loginDemoUser(silent = false) {
  state.user = {
    ...state.fakeUserTemplate,
    balance: Number(state.fakeUserTemplate.balance ?? 1000),
  };
  delete state.user.password;
  saveStorage(STORAGE_KEYS.user, state.user);
  renderSessionActions();
  renderDetail();
  closeSidebarOnMobile();
  closeLoginModal(true);
  if (!silent) {
    showToast("Login demo ativado.");
  }
}

function logoutDemoUser() {
  state.user = null;
  state.loginTargetGameId = null;
  clearStorage(STORAGE_KEYS.user);
  renderSessionActions();
  renderDetail();
  closeLoginModal();
  closePlayModal();
  showToast("Sessao demo encerrada.");
}

function openLoginModal(targetGameId = null) {
  state.loginTargetGameId = targetGameId;
  elements.loginCredentialsHint.textContent = `${state.fakeUserTemplate.email} / ${state.fakeUserTemplate.password}`;
  elements.loginEmail.value = state.fakeUserTemplate.email;
  elements.loginPassword.value = state.fakeUserTemplate.password;
  elements.loginModal.classList.remove("hidden");
}

function closeLoginModal(preserveTarget = false) {
  if (!preserveTarget) {
    state.loginTargetGameId = null;
  }
  elements.loginModal.classList.add("hidden");
}

function openPlayModal(gameId) {
  const game = state.data.games.find((item) => item.id === gameId);
  if (!game || !state.user) {
    return;
  }

  state.selectedGameId = game.id;
  saveStorage(STORAGE_KEYS.selectedGame, state.selectedGameId);
  elements.playTitle.textContent = `Jogar ${game.name}`;
  elements.playGameName.textContent = game.name;
  elements.playGameMeta.textContent = `${game.provider} · RTP ${game.rtp}`;
  elements.playBalance.textContent = formatCurrencyBRL(state.user.balance);
  elements.playAmount.value = "10";
  elements.playModal.classList.remove("hidden");
}

function closePlayModal() {
  elements.playModal.classList.add("hidden");
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const email = elements.loginEmail.value.trim().toLowerCase();
  const password = elements.loginPassword.value;
  const expectedEmail = String(state.fakeUserTemplate.email).toLowerCase();
  const expectedPassword = String(state.fakeUserTemplate.password);

  if (email !== expectedEmail || password !== expectedPassword) {
    showToast("Use as credenciais demo exibidas no modal.");
    return;
  }

  loginDemoUser(true);

  if (state.loginTargetGameId) {
    openPlayModal(state.loginTargetGameId);
    state.loginTargetGameId = null;
    showToast("Login demo ativado. Defina o valor para jogar.");
    return;
  }

  showToast("Login demo ativado.");
}

function handlePlaySubmit(event) {
  event.preventDefault();
  if (!state.user) {
    showToast("Entre no modo demo para jogar.");
    return;
  }

  const game = getSelectedGame();
  const amount = Number(elements.playAmount.value);

  if (!Number.isFinite(amount) || amount <= 0) {
    showToast("Informe um valor de aposta valido.");
    return;
  }

  if (amount > state.user.balance) {
    showToast("Saldo demo insuficiente para essa jogada.");
    return;
  }

  state.user.balance = Number((state.user.balance - amount).toFixed(2));
  saveStorage(STORAGE_KEYS.user, state.user);
  state.currentView = "detail";
  renderSessionActions();
  renderDetail();
  renderViews();
  closePlayModal();
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast(`${game.name} iniciado com ${formatCurrencyBRL(amount)}.`);
}

function closeSidebarOnMobile() {
  state.mobileMenuOpen = false;
  document.body.classList.remove("sidebar-open");
}

function handleViewportChange() {
  renderShelves();
  if (state.currentView === "detail") {
    renderDetail();
  }
}

function getVisibleGameCount() {
  const viewport = window.innerWidth || 1440;
  if (viewport <= 620) {
    return 1;
  }
  if (viewport <= 920) {
    return 2;
  }
  if (viewport <= 1160) {
    return 4;
  }
  if (viewport <= 1400) {
    return 6;
  }
  return 8;
}

function shiftShelf(shelfKey, direction) {
  const games = getShelfGames(shelfKey);
  const visibleCount = getVisibleGameCount();
  const maxOffset = Math.max(0, games.length - visibleCount);
  const currentOffset = state.shelfOffsets[shelfKey] ?? 0;
  state.shelfOffsets[shelfKey] = Math.max(0, Math.min(maxOffset, currentOffset + direction));

  if (shelfKey === "related") {
    renderDetail();
    return;
  }

  renderShelves();
}

function getShelfGames(shelfKey) {
  if (shelfKey === "related") {
    const selectedGame = getSelectedGame();
    if (!selectedGame) {
      return [];
    }

    return state.data.games.filter(
      (item) => item.provider === selectedGame.provider && item.id !== selectedGame.id
    );
  }

  return getFilteredGames(shelfKey);
}

function renderShelfControls(shelfKey, totalGames, visibleCount, offset) {
  const prevButton = document.querySelector(
    `[data-shelf-nav="prev"][data-shelf-key="${shelfKey}"]`
  );
  const nextButton = document.querySelector(
    `[data-shelf-nav="next"][data-shelf-key="${shelfKey}"]`
  );
  const isInactive = totalGames <= visibleCount;
  const atStart = offset <= 0;
  const atEnd = offset >= Math.max(0, totalGames - visibleCount);

  if (prevButton) {
    prevButton.disabled = isInactive || atStart;
  }

  if (nextButton) {
    nextButton.disabled = isInactive || atEnd;
  }
}

function readStorage(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) {
    return fallback;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function clearStorage(key) {
  localStorage.removeItem(key);
}

function normalizeStoredUser(user) {
  if (!user) {
    return null;
  }

  const fallback = state.fakeUserTemplate ?? {};
  const balance = Number(user.balance ?? fallback.balance ?? 1000);
  return {
    id: user.id ?? fallback.id ?? "usr-demo",
    name: user.name ?? fallback.name ?? "Jogador Demo",
    email: user.email ?? fallback.email ?? "demo@pulsebet.com",
    balance: Number.isFinite(balance) ? balance : 1000,
  };
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.remove("hidden");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    elements.toast.classList.add("hidden");
  }, 2200);
}

function formatCurrencyBRL(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function createGame(config) {
  const { onlineNow, totalPaid, rtpReal, avgWin, wins, ...game } = config;
  return {
    ...game,
    stats: [
      { label: "Online agora", value: onlineNow, highlight: true },
      { label: "Total pago", value: totalPaid },
      { label: "RTP real", value: rtpReal },
      { label: "Ganho medio", value: avgWin },
    ],
    bigWins: wins,
  };
}

bootstrap().catch(() => {
  showToast("Falha ao carregar o mockup.");
});
