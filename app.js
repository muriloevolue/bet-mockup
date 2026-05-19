const STORAGE_KEYS = {
  user: "pulse-casino:user",
  selectedGame: "pulse-casino:selected-game",
};

const state = {
  data: null,
  user: null,
  selectedGameId: null,
  currentView: "home",
  authMode: "login",
  mobileMenuOpen: false,
  search: "",
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
  authModal: document.querySelector("#auth-modal"),
  authTitle: document.querySelector("#auth-title"),
  authEyebrow: document.querySelector("#auth-eyebrow"),
  authSubmit: document.querySelector("#auth-submit"),
  authForm: document.querySelector("#auth-form"),
  nameField: document.querySelector("#name-field"),
  toast: document.querySelector("#toast"),
  backButton: document.querySelector("#back-button"),
  closeAuthButton: document.querySelector("#close-auth-button"),
  mobileMenuButton: document.querySelector("#mobile-menu-button"),
};

async function bootstrap() {
  const response = await fetch("./data/games.json");
  state.data = await response.json();
  state.user = readStorage(STORAGE_KEYS.user, null);
  state.selectedGameId = readStorage(
    STORAGE_KEYS.selectedGame,
    state.data.games[0]?.id ?? null
  );
  bindEvents();
  renderAll();
}

function bindEvents() {
  document.querySelectorAll("[data-open-auth]").forEach((button) => {
    button.addEventListener("click", () => openAuth(button.dataset.openAuth));
  });

  elements.closeAuthButton.addEventListener("click", closeAuth);
  elements.authModal.addEventListener("click", (event) => {
    if (event.target === elements.authModal) {
      closeAuth();
    }
  });

  elements.authForm.addEventListener("submit", handleAuthSubmit);
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
}

function renderAll() {
  renderSidebar();
  renderTicker();
  renderJackpots();
  renderPromoHero();
  renderShelves();
  renderDetail();
  renderViews();
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
  renderGameRow(elements.popularRow, getFilteredGames("popular"));
  renderGameRow(elements.crashRow, getFilteredGames("crash"));
  renderGameRow(elements.slotsRow, getFilteredGames("slots"));
}

function renderGameRow(container, games) {
  container.innerHTML = games
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
        <small>Últimos minutos</small>
        <strong>${game.lastMinutes}</strong>
      </div>
      <div class="detail-actions">
        <button class="primary-button" data-open-auth="signup">Cadastrar</button>
        <button class="outline-button large-outline" data-open-auth="login">Entrar</button>
      </div>
    </div>
  `;

  elements.detailTitleBar.innerHTML = `
    <div>
      <h1>${game.name}</h1>
      <p>${game.provider} · RTP ${game.rtp} · ${game.family}</p>
    </div>
    <div class="detail-title-actions">
      <button class="round-icon">♡</button>
      <button class="round-icon">👍 ${game.likes}</button>
      <button class="round-icon">👎 ${game.dislikes}</button>
      <button class="round-icon">↗</button>
      <button class="round-icon">⌄</button>
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
    state.data.games.filter((item) => item.provider === game.provider && item.id !== game.id)
  );

  document
    .querySelectorAll('#detail-modal-card [data-open-auth], #detail-title-bar [data-open-auth]')
    .forEach((button) => {
      button.addEventListener("click", () => openAuth(button.dataset.openAuth));
    });
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
      state.currentView = "detail";
      renderDetail();
      renderViews();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function getSelectedGame() {
  return state.data.games.find((game) => game.id === state.selectedGameId) || null;
}

function openAuth(mode) {
  state.authMode = mode;
  const isSignup = mode === "signup";
  elements.authTitle.textContent = isSignup ? "Cadastrar" : "Entrar";
  elements.authEyebrow.textContent = isSignup ? "Cadastro" : "Acesso";
  elements.authSubmit.textContent = isSignup ? "Criar conta" : "Entrar";
  elements.nameField.classList.toggle("hidden", !isSignup);
  elements.authModal.classList.remove("hidden");
}

function closeAuth() {
  elements.authModal.classList.add("hidden");
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") || "Jogador Demo");
  const email = String(formData.get("email") || "demo@cassino.com");
  state.user = { name, email };
  saveStorage(STORAGE_KEYS.user, state.user);
  closeAuth();
  showToast(state.authMode === "signup" ? "Cadastro simulado criado." : "Login simulado realizado.");
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

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.remove("hidden");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    elements.toast.classList.add("hidden");
  }, 2200);
}

bootstrap().catch(() => {
  showToast("Falha ao carregar o mockup.");
});
