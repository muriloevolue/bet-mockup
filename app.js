const STORAGE_KEYS = {
  user: "pulse-casino:user",
  selectedGame: "pulse-casino:selected-game",
  locale: "pulse-casino:locale",
};

const LOCALES = {
  en: { lang: "en-US", currency: "USD", label: "EN" },
  es: { lang: "es-ES", currency: "EUR", label: "ES" },
  pt: { lang: "pt-BR", currency: "BRL", label: "PT" },
};

const DEFAULT_LOCALE = "pt";
const ARTWORK_BASE_PATH = "./assets/generated/games";

const UI_COPY = {
  en: {
    appTitle: "Pulse Casino Mockup",
    sidebarBrandCaption: "Demo lobby",
    sidebarStatusText: "Casino live preview",
    topbarBrandChip: "Licensed-style demo",
    searchPlaceholder: "Search games, providers, themes...",
    viewAll: "View all",
    sections: {
      popularKicker: "Crowd picks",
      popularTitle: "Most played this week",
      crashKicker: "Fast rounds",
      crashTitle: "Crash and instant games",
      slotsKicker: "Classic casino",
      slotsTitle: "Slot games",
      statsKicker: "Performance",
      statsTitle: "Statistics",
      winsKicker: "Player highlights",
      winsTitle: "Big wins",
      relatedKicker: "From the same studio",
      relatedTitle: "More games"
    },
    statsTabs: ["Today", "7D", "15D", "30D"],
    winsTabs: ["Today", "3 days", "7 days"],
    backToLobby: "Back to lobby",
    topWins: "Top wins",
    promos: [
      { top: "Weekend rush", title: "Reload bonus", icon: "✦" },
      { top: "VIP access", title: "Cashback room", icon: "▣" },
      { top: "Daily path", title: "Missions", icon: "◎" },
      { top: "Instant help", title: "24/7 support", icon: "◌" }
    ],
    nav: [
      { icon: "◈", label: "Lobby" },
      { icon: "▣", label: "Live casino" },
      { icon: "▤", label: "Slot games" },
      { icon: "◎", label: "Crash games" },
      { icon: "⌘", label: "Providers" },
      { icon: "◌", label: "Exclusive drops" }
    ],
    navBottom: [
      { icon: "✦", label: "Promotions" },
      { icon: "⊛", label: "Help center" },
      { icon: "◗", label: "Support chat" },
      { icon: "➤", label: "App preview" }
    ],
    heroBanners: [
      { badge: "New games", title: "New Games", subtitle: "Fresh arrivals at the top of the lobby.", cta: "Open", tone: "violet", gameId: "fortune-dragon" },
      { badge: "Featured", title: "Inferno Fortune", subtitle: "Promoted slot highlight in the hero rail.", cta: "Open", tone: "ruby", gameId: "gates-of-olympus" },
      { badge: "Tournament", title: "Aviator Crash", subtitle: "Fast rounds with visible competitive framing.", cta: "Open", tone: "amber", gameId: "aviator-crash" },
      { badge: "Live roulette", title: "Auto Mega Roulette", subtitle: "Dealer-style positioning near the top.", cta: "Open", tone: "violet", gameId: "brazilian-roulette" },
      { badge: "VIP", title: "Exclusive Benefits", subtitle: "Promotional utility card mixed into the home hero.", cta: "Open", tone: "forest", gameId: "fortune-rabbit" },
      { badge: "Popular", title: "Most Played", subtitle: "Shortcut into the strongest weekly picks.", cta: "Open", tone: "violet", gameId: "fortune-tiger" }
    ],
    sideBanners: [
      { badge: "Download app", title: "Casino App", cta: "Download", gameId: "fortune-rabbit" },
      { badge: "Up to 25%", title: "Cashback", cta: "Claim", gameId: "aviator-crash" },
      { badge: "Regulated", title: "Licensed platform", cta: "Learn more", gameId: "brazilian-roulette" }
    ],
    sessionHint: "Use the demo email and password",
    signIn: "Sign in",
    signOut: "Sign out",
    demoBalance: "Demo balance",
    mockUser: "Mock user",
    login: {
      eyebrow: "Demo access",
      title: "Sign in",
      tipTitle: "Use the mock demo credentials",
      emailLabel: "Email",
      passwordLabel: "Password",
      submit: "Sign in to demo"
    },
    play: {
      eyebrow: "Demo mode",
      title: "Set bet",
      balanceLabel: "Available balance",
      amountLabel: "How much do you want to bet?",
      submit: "Start round"
    },
    detail: {
      online: "online",
      paidToday: "Paid today",
      lastMinutes: "Last few minutes",
      signInAndPlay: "Sign in and play",
      noRealSignup: "No real signup",
      balance: "Balance",
      relatedFrom: "More games from {provider}",
      payout: "Payout",
      bet: "Bet",
      multiplier: "Multiplier"
    },
    stage: {
      empty: {
        slot: "Set a bet to open the slot preview.",
        crash: "Set a bet to launch the crash round preview.",
        live: "Set a bet to enter the live table preview."
      },
      ready: {
        slot: "Bet loaded. Spin when ready.",
        crash: "Stake loaded. Launch the next round.",
        live: "Seat reserved. Deal a demo round."
      },
      spinning: {
        slot: "Spinning...",
        crash: "Flight rising...",
        live: "Dealer is revealing the round..."
      },
      result: {
        slot: "You landed {multiplier}x on the center line.",
        crash: "Round closed at {multiplier}x.",
        live: "The table closed at {multiplier}x."
      },
      action: {
        slot: { idle: "Spin", settled: "Spin again", pending: "Spinning..." },
        crash: { idle: "Launch", settled: "Launch again", pending: "Running..." },
        live: { idle: "Deal", settled: "Deal again", pending: "Dealing..." }
      },
      labels: {
        demoMode: "Demo mode",
        hotPath: "Premium lobby",
        win: "Win",
        lastPrize: "Last prize",
        lastBurst: "Last burst",
        balance: "Balance",
        bet: "Bet",
        autoCashout: "Auto cashout",
        nextRound: "Next round",
        tableLimit: "Table limit",
        dealerSeat: "Dealer seat",
        roundId: "Round"
      }
    },
    toasts: {
      enterDemo: "Enter demo mode to play.",
      loginEnabled: "Demo login enabled.",
      loginToPlay: "Demo login enabled. Set the amount to play.",
      invalidCredentials: "Use the demo credentials shown in the modal.",
      invalidBet: "Enter a valid bet amount.",
      insufficientBalance: "Insufficient demo balance for this play.",
      insufficientReplay: "Insufficient demo balance to start another round.",
      sessionEnded: "Demo session ended.",
      gameStarted: "{game} started with {amount}.",
      gamePaid: "{game} paid {amount}.",
      failedLoad: "Failed to load the mockup."
    },
    art: {
      slot: "Slot room",
      crash: "Crash room",
      live: "Live table"
    },
    stats: {
      onlineNow: "Online now",
      totalPaid: "Total paid",
      liveRtp: "Live RTP",
      avgWin: "Average win"
    }
  },
  es: {
    appTitle: "Pulse Casino Mockup",
    sidebarBrandCaption: "Lobby demo",
    sidebarStatusText: "Vista previa de casino",
    topbarBrandChip: "Demo estilo licenciado",
    searchPlaceholder: "Buscar juegos, estudios, temas...",
    viewAll: "Ver todo",
    sections: {
      popularKicker: "Favoritos",
      popularTitle: "Mas jugados esta semana",
      crashKicker: "Rondas rapidas",
      crashTitle: "Crash e instantaneos",
      slotsKicker: "Casino clasico",
      slotsTitle: "Slots",
      statsKicker: "Rendimiento",
      statsTitle: "Estadisticas",
      winsKicker: "Momentos top",
      winsTitle: "Grandes premios",
      relatedKicker: "Del mismo estudio",
      relatedTitle: "Mas juegos"
    },
    statsTabs: ["Hoy", "7D", "15D", "30D"],
    winsTabs: ["Hoy", "3 dias", "7 dias"],
    backToLobby: "Volver al lobby",
    topWins: "Ganancias top",
    promos: [
      { top: "Impulso semanal", title: "Bono de recarga", icon: "✦" },
      { top: "Acceso VIP", title: "Sala cashback", icon: "▣" },
      { top: "Ruta diaria", title: "Misiones", icon: "◎" },
      { top: "Ayuda directa", title: "Soporte 24/7", icon: "◌" }
    ],
    nav: [
      { icon: "◈", label: "Lobby" },
      { icon: "▣", label: "Casino en vivo" },
      { icon: "▤", label: "Slots" },
      { icon: "◎", label: "Crash" },
      { icon: "⌘", label: "Proveedores" },
      { icon: "◌", label: "Lanzamientos" }
    ],
    navBottom: [
      { icon: "✦", label: "Promociones" },
      { icon: "⊛", label: "Centro de ayuda" },
      { icon: "◗", label: "Chat de soporte" },
      { icon: "➤", label: "Vista de app" }
    ],
    heroBanners: [
      { badge: "Nuevos juegos", title: "New Games", subtitle: "Lanzamientos al frente del lobby.", cta: "Abrir", tone: "violet", gameId: "fortune-dragon" },
      { badge: "Destacado", title: "Inferno Fortune", subtitle: "Slot promocionado en la franja principal.", cta: "Abrir", tone: "ruby", gameId: "gates-of-olympus" },
      { badge: "Torneo", title: "Aviator Crash", subtitle: "Rondas rapidas con marco competitivo.", cta: "Abrir", tone: "amber", gameId: "aviator-crash" },
      { badge: "Ruleta en vivo", title: "Auto Mega Roulette", subtitle: "Posicionada arriba como mesa foco.", cta: "Abrir", tone: "violet", gameId: "brazilian-roulette" },
      { badge: "VIP", title: "Beneficios Exclusivos", subtitle: "Tarjeta utilitaria mezclada en el hero.", cta: "Abrir", tone: "forest", gameId: "fortune-rabbit" },
      { badge: "Popular", title: "Mas Jugados", subtitle: "Acceso rapido a los favoritos semanales.", cta: "Abrir", tone: "violet", gameId: "fortune-tiger" }
    ],
    sideBanners: [
      { badge: "Descarga app", title: "Casino App", cta: "Descargar", gameId: "fortune-rabbit" },
      { badge: "Hasta 25%", title: "Cashback", cta: "Cobrar", gameId: "aviator-crash" },
      { badge: "Regulada", title: "Plataforma licenciada", cta: "Saber mas", gameId: "brazilian-roulette" }
    ],
    sessionHint: "Usa el correo y la clave demo",
    signIn: "Entrar",
    signOut: "Salir",
    demoBalance: "Saldo demo",
    mockUser: "Usuario mock",
    login: {
      eyebrow: "Acceso demo",
      title: "Entrar",
      tipTitle: "Usa las credenciales demo del mock",
      emailLabel: "Correo",
      passwordLabel: "Contrasena",
      submit: "Entrar al demo"
    },
    play: {
      eyebrow: "Modo demo",
      title: "Definir apuesta",
      balanceLabel: "Saldo disponible",
      amountLabel: "Cuanto quieres apostar?",
      submit: "Iniciar ronda"
    },
    detail: {
      online: "en linea",
      paidToday: "Pagado hoy",
      lastMinutes: "Ultimos minutos",
      signInAndPlay: "Entrar y jugar",
      noRealSignup: "Sin registro real",
      balance: "Saldo",
      relatedFrom: "Mas juegos de {provider}",
      payout: "Premio",
      bet: "Apuesta",
      multiplier: "Multiplicador"
    },
    stage: {
      empty: {
        slot: "Define una apuesta para abrir la vista del slot.",
        crash: "Define una apuesta para lanzar la vista crash.",
        live: "Define una apuesta para entrar a la mesa demo."
      },
      ready: {
        slot: "Apuesta cargada. Gira cuando quieras.",
        crash: "Apuesta lista. Lanza la siguiente ronda.",
        live: "Asiento reservado. Reparte una ronda demo."
      },
      spinning: {
        slot: "Girando...",
        crash: "Vuelo subiendo...",
        live: "El dealer esta revelando la ronda..."
      },
      result: {
        slot: "Golpeaste {multiplier}x en la linea central.",
        crash: "La ronda cerro en {multiplier}x.",
        live: "La mesa cerro en {multiplier}x."
      },
      action: {
        slot: { idle: "Girar", settled: "Girar otra vez", pending: "Girando..." },
        crash: { idle: "Lanzar", settled: "Lanzar otra vez", pending: "Corriendo..." },
        live: { idle: "Repartir", settled: "Repartir otra vez", pending: "Repartiendo..." }
      },
      labels: {
        demoMode: "Modo demo",
        hotPath: "Lobby premium",
        win: "Premio",
        lastPrize: "Ultimo premio",
        lastBurst: "Ultimo pico",
        balance: "Saldo",
        bet: "Apuesta",
        autoCashout: "Auto retiro",
        nextRound: "Siguiente ronda",
        tableLimit: "Limite de mesa",
        dealerSeat: "Asiento dealer",
        roundId: "Ronda"
      }
    },
    toasts: {
      enterDemo: "Entra al modo demo para jugar.",
      loginEnabled: "Login demo activado.",
      loginToPlay: "Login demo activado. Define el monto para jugar.",
      invalidCredentials: "Usa las credenciales demo que aparecen en el modal.",
      invalidBet: "Ingresa una apuesta valida.",
      insufficientBalance: "Saldo demo insuficiente para esta jugada.",
      insufficientReplay: "Saldo demo insuficiente para iniciar otra ronda.",
      sessionEnded: "Sesion demo finalizada.",
      gameStarted: "{game} comenzo con {amount}.",
      gamePaid: "{game} pago {amount}.",
      failedLoad: "No se pudo cargar el mockup."
    },
    art: {
      slot: "Sala slot",
      crash: "Sala crash",
      live: "Mesa en vivo"
    },
    stats: {
      onlineNow: "Jugando ahora",
      totalPaid: "Total pagado",
      liveRtp: "RTP en vivo",
      avgWin: "Premio medio"
    }
  },
  pt: {
    appTitle: "Pulse Casino Mockup",
    sidebarBrandCaption: "Lobby demo",
    sidebarStatusText: "Preview de cassino ao vivo",
    topbarBrandChip: "Demo com cara de operacao real",
    searchPlaceholder: "Buscar jogos, provedores, temas...",
    viewAll: "Ver todos",
    sections: {
      popularKicker: "Mais buscados",
      popularTitle: "Mais jogados da semana",
      crashKicker: "Rodadas rapidas",
      crashTitle: "Crash e instantaneos",
      slotsKicker: "Cassino classico",
      slotsTitle: "Slots",
      statsKicker: "Performance",
      statsTitle: "Estatisticas",
      winsKicker: "Destaques dos jogadores",
      winsTitle: "Grandes ganhos",
      relatedKicker: "Do mesmo estudio",
      relatedTitle: "Mais jogos"
    },
    statsTabs: ["Hoje", "7D", "15D", "30D"],
    winsTabs: ["Hoje", "3 dias", "7 dias"],
    backToLobby: "Voltar ao lobby",
    topWins: "Top ganhos",
    promos: [
      { top: "Ritmo da semana", title: "Bonus de recarga", icon: "✦" },
      { top: "Acesso VIP", title: "Sala de cashback", icon: "▣" },
      { top: "Trilha diaria", title: "Missoes", icon: "◎" },
      { top: "Ajuda direta", title: "Suporte 24/7", icon: "◌" }
    ],
    nav: [
      { icon: "◈", label: "Lobby" },
      { icon: "▣", label: "Cassino ao vivo" },
      { icon: "▤", label: "Slots" },
      { icon: "◎", label: "Crash" },
      { icon: "⌘", label: "Provedores" },
      { icon: "◌", label: "Lancamentos" }
    ],
    navBottom: [
      { icon: "✦", label: "Promocoes" },
      { icon: "⊛", label: "Central de ajuda" },
      { icon: "◗", label: "Chat de suporte" },
      { icon: "➤", label: "Preview do app" }
    ],
    heroBanners: [
      { badge: "Novos jogos", title: "New Games", subtitle: "Lancamentos no topo do lobby.", cta: "Abrir", tone: "violet", gameId: "fortune-dragon" },
      { badge: "Destaque", title: "Inferno Fortune", subtitle: "Slot promocionado na faixa principal.", cta: "Abrir", tone: "ruby", gameId: "gates-of-olympus" },
      { badge: "Torneio", title: "Aviator Crash", subtitle: "Rodadas rapidas com enquadramento competitivo.", cta: "Abrir", tone: "amber", gameId: "aviator-crash" },
      { badge: "Roleta ao vivo", title: "Auto Mega Roulette", subtitle: "Mesa de destaque posicionada no topo.", cta: "Abrir", tone: "violet", gameId: "brazilian-roulette" },
      { badge: "VIP", title: "Beneficios Exclusivos", subtitle: "Card utilitario misturado ao hero principal.", cta: "Abrir", tone: "forest", gameId: "fortune-rabbit" },
      { badge: "Popular", title: "Mais Jogados", subtitle: "Atalho direto para os favoritos da semana.", cta: "Abrir", tone: "violet", gameId: "fortune-tiger" }
    ],
    sideBanners: [
      { badge: "Baixe app", title: "Casino App", cta: "Baixar", gameId: "fortune-rabbit" },
      { badge: "Ate 25%", title: "Cashback", cta: "Resgatar", gameId: "aviator-crash" },
      { badge: "Regulada", title: "Plataforma licenciada", cta: "Saber mais", gameId: "brazilian-roulette" }
    ],
    sessionHint: "Use o email e a senha demo",
    signIn: "Entrar",
    signOut: "Sair",
    demoBalance: "Saldo demo",
    mockUser: "Usuario mock",
    login: {
      eyebrow: "Acesso demo",
      title: "Entrar",
      tipTitle: "Use as credenciais demo do mock",
      emailLabel: "Email",
      passwordLabel: "Senha",
      submit: "Entrar no demo"
    },
    play: {
      eyebrow: "Modo demo",
      title: "Definir aposta",
      balanceLabel: "Saldo disponivel",
      amountLabel: "Quanto voce quer apostar?",
      submit: "Iniciar rodada"
    },
    detail: {
      online: "online",
      paidToday: "Pago hoje",
      lastMinutes: "Ultimos minutos",
      signInAndPlay: "Entrar e jogar",
      noRealSignup: "Sem cadastro real",
      balance: "Saldo",
      relatedFrom: "Mais jogos da {provider}",
      payout: "Premio",
      bet: "Aposta",
      multiplier: "Multiplicador"
    },
    stage: {
      empty: {
        slot: "Defina uma aposta para abrir a previa do slot.",
        crash: "Defina uma aposta para abrir a previa do crash.",
        live: "Defina uma aposta para entrar na mesa demo."
      },
      ready: {
        slot: "Aposta carregada. Gire quando quiser.",
        crash: "Aposta pronta. Lance a proxima rodada.",
        live: "Lugar reservado. Distribua uma rodada demo."
      },
      spinning: {
        slot: "Girando...",
        crash: "Voo subindo...",
        live: "O dealer esta revelando a rodada..."
      },
      result: {
        slot: "Voce acertou {multiplier}x na linha central.",
        crash: "A rodada fechou em {multiplier}x.",
        live: "A mesa fechou em {multiplier}x."
      },
      action: {
        slot: { idle: "Girar", settled: "Girar de novo", pending: "Girando..." },
        crash: { idle: "Lancar", settled: "Lancar de novo", pending: "Rodando..." },
        live: { idle: "Distribuir", settled: "Distribuir de novo", pending: "Distribuindo..." }
      },
      labels: {
        demoMode: "Modo demo",
        hotPath: "Lobby premium",
        win: "Ganho",
        lastPrize: "Ultimo premio",
        lastBurst: "Ultimo pico",
        balance: "Saldo",
        bet: "Aposta",
        autoCashout: "Auto saque",
        nextRound: "Proxima rodada",
        tableLimit: "Limite da mesa",
        dealerSeat: "Posicao dealer",
        roundId: "Rodada"
      }
    },
    toasts: {
      enterDemo: "Entre no modo demo para jogar.",
      loginEnabled: "Login demo ativado.",
      loginToPlay: "Login demo ativado. Defina o valor para jogar.",
      invalidCredentials: "Use as credenciais demo mostradas no modal.",
      invalidBet: "Digite um valor de aposta valido.",
      insufficientBalance: "Saldo demo insuficiente para esta jogada.",
      insufficientReplay: "Saldo demo insuficiente para iniciar outra rodada.",
      sessionEnded: "Sessao demo encerrada.",
      gameStarted: "{game} iniciado com {amount}.",
      gamePaid: "{game} pagou {amount}.",
      failedLoad: "Nao foi possivel carregar o mockup."
    },
    art: {
      slot: "Sala slot",
      crash: "Sala crash",
      live: "Mesa ao vivo"
    },
    stats: {
      onlineNow: "Jogando agora",
      totalPaid: "Total pago",
      liveRtp: "RTP ao vivo",
      avgWin: "Ganho medio"
    }
  }
};

const JACKPOTS = [
  { rank: 1, gameId: "fortune-rabbit", amount: 12766782.33, tone: "violet" },
  { rank: 2, gameId: "fortune-dragon", amount: 5707803.39, tone: "violet" },
  { rank: 3, gameId: "fortune-tiger", amount: 5264274.43, tone: "ruby" },
  { rank: 4, gameId: "aviator-crash", amount: 4373305.34, tone: "amber" },
  { rank: 5, gameId: "aviator", amount: 3819123.96, tone: "ruby" },
  { rank: 6, gameId: "fortune-ox", amount: 2969660.67, tone: "gold" },
  { rank: 7, gameId: "bac-bo", amount: 2539647.0, tone: "forest" },
  { rank: 8, gameId: "pinata-wins", amount: 2349038.15, tone: "ruby" },
  { rank: 9, gameId: "brazilian-roulette", amount: 1714647.5, tone: "violet" },
  { rank: 10, gameId: "jetx", amount: 1018331.35, tone: "sky" }
];

const TICKER_ITEMS = [
  { player: "Fabricio He**", gameId: "wild-bandito", amount: 40000 },
  { player: "Marcelo He**", gameId: "brazilian-roulette", amount: 35100 },
  { player: "Caio Bo**", gameId: "sweet-bonanza", amount: 30000 },
  { player: "Eduardo Mo**", gameId: "gates-of-olympus", amount: 19099 },
  { player: "Leticia Go**", gameId: "brazilian-roulette", amount: 15000 }
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
  locale: DEFAULT_LOCALE,
  shelfOffsets: {
    popular: 0,
    crash: 0,
    slots: 0,
    related: 0,
  },
  gameSession: null,
};

const elements = {
  sidebar: document.querySelector("#sidebar"),
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
  detailGameStage: document.querySelector("#detail-game-stage"),
  detailModalCard: document.querySelector("#detail-modal-card"),
  detailTitleBar: document.querySelector("#detail-title-bar"),
  searchInput: document.querySelector("#search-input"),
  toast: document.querySelector("#toast"),
  backButton: document.querySelector("#back-button"),
  mobileMenuButton: document.querySelector("#mobile-menu-button"),
  sessionActions: document.querySelector("#session-actions"),
  localeSwitcher: document.querySelector("#locale-switcher"),
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
  state.data = normalizeGames(gamesData);
  state.fakeUserTemplate = await userResponse.json();
  state.locale = normalizeLocale(readStorage(STORAGE_KEYS.locale, DEFAULT_LOCALE));
  state.user = normalizeStoredUser(readStorage(STORAGE_KEYS.user, null));
  state.selectedGameId = readStorage(STORAGE_KEYS.selectedGame, state.data.games[0]?.id ?? null);
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
    resetShelves();
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
  const localeTrigger = event.target.closest("[data-locale]");
  if (localeTrigger) {
    setLocale(localeTrigger.dataset.locale);
    return;
  }

  const loginPlayTrigger = event.target.closest("[data-login-play]");
  if (loginPlayTrigger) {
    openLoginModal(state.selectedGameId);
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
    return;
  }

  const openGameTrigger = event.target.closest("[data-open-game-id]");
  if (openGameTrigger) {
    openGameDetail(openGameTrigger.dataset.openGameId);
    return;
  }

  const playTrigger = event.target.closest("[data-play-game-id], [data-play-selected]");
  if (playTrigger) {
    const gameId = playTrigger.dataset.playGameId || state.selectedGameId;
    if (!state.user) {
      showToast(t("toasts.enterDemo"));
      return;
    }
    openPlayModal(gameId);
    return;
  }

  const quickAmount = event.target.closest("[data-quick-amount]");
  if (quickAmount) {
    elements.playAmount.value = quickAmount.dataset.quickAmount;
    return;
  }

  const shelfTrigger = event.target.closest("[data-shelf-nav]");
  if (shelfTrigger) {
    const shelfKey = shelfTrigger.dataset.shelfKey;
    const direction = shelfTrigger.dataset.shelfNav === "next" ? 1 : -1;
    shiftShelf(shelfKey, direction);
    return;
  }

  const runTrigger = event.target.closest("[data-run-game]");
  if (runTrigger) {
    runGameRound();
  }
}

function renderAll() {
  applyChromeCopy();
  renderLocaleSwitcher();
  renderSessionActions();
  renderSidebar();
  renderTicker();
  renderJackpots();
  renderPromoHero();
  renderShelves();
  renderDetail();
  renderViews();
  renderQuickAmounts();
}

function applyChromeCopy() {
  const copy = UI_COPY[state.locale];
  document.documentElement.lang = state.locale;
  document.title = copy.appTitle;

  setText("#sidebar-brand-caption", copy.sidebarBrandCaption);
  setText("#sidebar-status-text", copy.sidebarStatusText);
  setText("#topbar-brand-chip", copy.topbarBrandChip);
  setText("#popular-kicker", copy.sections.popularKicker);
  setText("#popular-title", copy.sections.popularTitle);
  setText("#crash-kicker", copy.sections.crashKicker);
  setText("#crash-title", copy.sections.crashTitle);
  setText("#slots-kicker", copy.sections.slotsKicker);
  setText("#slots-title", copy.sections.slotsTitle);
  setText("#stats-kicker", copy.sections.statsKicker);
  setText("#stats-title", copy.sections.statsTitle);
  setText("#wins-kicker", copy.sections.winsKicker);
  setText("#wins-title", copy.sections.winsTitle);
  setText("#related-kicker", copy.sections.relatedKicker);
  setText("#related-title", copy.sections.relatedTitle);
  setText("#popular-view-all", copy.viewAll);
  setText("#crash-view-all", copy.viewAll);
  setText("#slots-view-all", copy.viewAll);
  setText("#related-view-all", copy.viewAll);
  setText("#back-button", `← ${copy.backToLobby}`);
  setText("#login-eyebrow", copy.login.eyebrow);
  setText("#login-title", copy.login.title);
  setText("#login-tip-title", copy.login.tipTitle);
  setText("#login-email-label", copy.login.emailLabel);
  setText("#login-password-label", copy.login.passwordLabel);
  setText("#login-submit", copy.login.submit);
  setText("#play-eyebrow", copy.play.eyebrow);
  setText("#play-balance-label", copy.play.balanceLabel);
  setText("#play-amount-label", copy.play.amountLabel);
  setText("#play-submit", copy.play.submit);
  elements.searchInput.placeholder = copy.searchPlaceholder;
  elements.loginEmail.placeholder = state.fakeUserTemplate?.email || "demo@pulsebet.com";
  elements.loginPassword.placeholder = state.fakeUserTemplate?.password || "demo123";
  elements.playAmount.placeholder = formatDecimal(10);

  renderPillTabs("#stats-tabs .pill-tab", copy.statsTabs);
  renderPillTabs("#wins-tabs .pill-tab", copy.winsTabs);
}

function renderPillTabs(selector, labels) {
  document.querySelectorAll(selector).forEach((node, index) => {
    node.textContent = labels[index] ?? node.textContent;
  });
}

function renderLocaleSwitcher() {
  elements.localeSwitcher.querySelectorAll("[data-locale]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.locale === state.locale);
  });
}

function renderSessionActions() {
  if (!state.user) {
    elements.sessionActions.innerHTML = `
      <span class="session-hint">${t("sessionHint")}</span>
      <button class="outline-button" data-session-action="login">${t("signIn")}</button>
    `;
    return;
  }

  elements.sessionActions.innerHTML = `
    <div class="balance-chip">
      <span>${t("demoBalance")}</span>
      <strong>${formatCurrency(state.user.balance)}</strong>
    </div>
    <div class="user-chip">
      <span class="user-avatar">${state.user.name.charAt(0).toUpperCase()}</span>
      <div class="user-meta">
        <strong>${state.user.name}</strong>
        <small>${t("mockUser")}</small>
      </div>
    </div>
    <button class="outline-button" data-session-action="logout">${t("signOut")}</button>
  `;
}

function renderSidebar() {
  const copy = UI_COPY[state.locale];

  elements.sidebarPromos.innerHTML = copy.promos
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

  elements.sidebarNav.innerHTML = copy.nav
    .map(
      (item) => `
        <button class="sidebar-link" type="button">
          <span class="sidebar-icon">${item.icon}</span>
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");

  elements.sidebarBottom.innerHTML = copy.navBottom
    .map(
      (item) => `
        <button class="sidebar-link bottom-link" type="button">
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
      <span>${t("topWins")}</span>
    </article>
    ${TICKER_ITEMS.map((item) => {
      const game = getGameById(item.gameId);
      return `
        <article class="ticker-card">
          <strong>${item.player}</strong>
          <span>${game?.name ?? ""}</span>
          <em>${formatCurrency(item.amount)}</em>
        </article>
      `;
    }).join("")}
  `;
}

function renderJackpots() {
  elements.jackpotGrid.innerHTML = JACKPOTS.map((item) => {
    const game = getGameById(item.gameId);
    return `
      <article class="jackpot-card tone-${item.tone}">
        <div class="jackpot-rank">${item.rank}</div>
        <button
          class="jackpot-thumb"
          data-open-game-id="${item.gameId}"
          style="${getArtVariableStyle(getGameArtwork(game, "card"))}"
          type="button"
        ></button>
        <div class="jackpot-copy">
          <strong>${game?.name ?? ""}</strong>
          <span>${formatCurrency(item.amount)}</span>
        </div>
        <button class="outline-button compact small-button" data-play-game-id="${item.gameId}" type="button">
          ${t("play.submit")}
        </button>
      </article>
    `;
  }).join("");
}

function renderPromoHero() {
  const copy = UI_COPY[state.locale];
  const primaryBanners = copy.heroBanners.slice(0, 3);

  elements.promoHeroRow.innerHTML = `
    <div class="hero-banner-grid">
      ${primaryBanners
        .map((banner) => {
          const game = getGameById(banner.gameId);
          return `
            <article class="hero-banner tone-${banner.tone}">
              <button
                class="hero-banner-art"
                data-open-game-id="${banner.gameId}"
                style="${getArtVariableStyle(getGameArtwork(game, "hero"))}"
                type="button"
              ></button>
              <div class="hero-banner-content">
                <span>${banner.badge}</span>
                <strong>${banner.title}</strong>
                <p>${banner.subtitle}</p>
                <button class="hero-banner-button" data-open-game-id="${banner.gameId}" type="button">${banner.cta}</button>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
    <div class="side-promo-column">
      ${copy.sideBanners
        .map((banner) => {
          const game = getGameById(banner.gameId);
          return `
            <article class="side-promo-card">
              <button
                class="side-promo-art"
                data-open-game-id="${banner.gameId}"
                style="${getArtVariableStyle(getGameArtwork(game, "banner"))}"
                type="button"
              ></button>
              <div>
                <span>${banner.badge}</span>
                <strong>${banner.title}</strong>
              </div>
              <button class="outline-button compact" data-open-game-id="${banner.gameId}" type="button">${banner.cta}</button>
            </article>
          `;
        })
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
          <button
            class="game-tile-cover"
            data-open-game-id="${game.id}"
            style="${getArtVariableStyle(getGameArtwork(game, "card"))}"
            type="button"
          >
            <div class="game-badge">${formatInteger(game.badge)}</div>
            <div class="viewer-pill">${formatInteger(game.online)}</div>
          </button>
          <div class="game-tile-body">
            <strong>${game.name}</strong>
            <span>${game.provider}</span>
            <div class="payout-line">
              <small>${t("detail.paidToday")}</small>
              <em>${formatCurrency(game.todayPayout)}</em>
            </div>
            <div class="tile-actions">
              <button class="outline-button compact small-button" data-open-game-id="${game.id}" type="button">
                ${t("viewAll")}
              </button>
              <button class="primary-button compact-button" data-play-game-id="${game.id}" type="button">
                ${t("play.submit")}
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  renderShelfControls(shelfKey, games.length, visibleCount, offset);
}

function renderDetail() {
  const game = getSelectedGame();
  if (!game) {
    return;
  }

  const session = getGameSessionForSelectedGame();
  elements.detailHero.className = `detail-hero tone-${game.tone}`;
  renderGameStage(game);

  elements.detailModalCard.innerHTML = `
    <div class="detail-modal-copy">
      <div class="detail-card-topline">
        <span class="detail-chip">${formatInteger(game.badge)} ${t("detail.online")}</span>
        <span class="detail-chip">RTP ${formatPercent(game.rtp)}</span>
      </div>
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
        <small>${t("detail.paidToday")}</small>
        <strong>${formatCurrency(game.todayPayout)}</strong>
      </div>
      <div class="mini-stat-block">
        <small>${t("detail.lastMinutes")}</small>
        <strong>${formatCurrency(game.lastMinutes)}</strong>
      </div>
      <div class="detail-actions">
        ${
          state.user
            ? `
              <button class="primary-button" data-run-game="true" ${canRunCurrentGame() ? "" : "disabled"}>
                ${getRunButtonLabel(game)}
              </button>
              <button class="outline-button large-outline detail-balance-button" disabled>
                ${t("detail.balance")} ${formatCurrency(state.user.balance ?? 0)}
              </button>
            `
            : `
              <button class="primary-button" data-login-play="selected">${t("detail.signInAndPlay")}</button>
              <button class="outline-button large-outline detail-balance-button" disabled>${t("detail.noRealSignup")}</button>
            `
        }
      </div>
    </div>
  `;

  elements.detailTitleBar.innerHTML = `
    <div>
      <h1>${game.name}</h1>
      <p>${game.provider} · RTP ${formatPercent(game.rtp)} · ${localize(game.family)}</p>
    </div>
    <div class="detail-title-actions">
      <button class="round-icon icon-only" type="button">♡</button>
      <button class="round-icon round-stat" type="button">👍 <span>${formatInteger(game.likes)}</span></button>
      <button class="round-icon round-stat" type="button">👎 <span>${formatInteger(game.dislikes)}</span></button>
      <button class="round-icon icon-only" type="button">↗</button>
      <button class="round-icon icon-only" type="button">⌄</button>
    </div>
  `;

  elements.statsGrid.innerHTML = game.stats
    .map(
      (stat) => `
        <article class="stat-card ${stat.highlight ? "highlighted" : ""}">
          <span>${t(`stats.${stat.key}`)}</span>
          <strong>${formatByType(stat.value, stat.format)}</strong>
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
          <div class="win-line"><span>${t("detail.payout")}</span><strong>${formatCurrency(win.payout)}</strong></div>
          <div class="win-line"><span>${t("detail.bet")}</span><strong>${formatCurrency(win.bet)}</strong></div>
          <div class="win-line"><span>${t("detail.multiplier")}</span><strong>${formatMultiplier(win.multiplier)}</strong></div>
        </article>
      `
    )
    .join("");

  elements.relatedTitle.textContent = interpolate(t("detail.relatedFrom"), {
    provider: game.provider,
  });
  renderGameRow(
    elements.relatedRow,
    state.data.games.filter((item) => item.provider === game.provider && item.id !== game.id),
    "related"
  );
}

function renderViews() {
  document.querySelector("#view-home").classList.toggle("is-active", state.currentView === "home");
  document.querySelector("#view-detail").classList.toggle("is-active", state.currentView === "detail");
}

function renderQuickAmounts() {
  document.querySelectorAll("[data-quick-amount]").forEach((button) => {
    button.textContent = formatCurrency(Number(button.dataset.quickAmount));
  });
}

function getFilteredGames(section) {
  const games = state.data.games.filter((game) => game.section === section || game.tags.includes(section));
  if (!state.search) {
    return games;
  }

  return games.filter((game) => {
    const haystack = `${game.name} ${game.provider} ${localize(game.family)} ${game.tags.join(" ")}`.toLowerCase();
    return haystack.includes(state.search);
  });
}

function openGameDetail(gameId) {
  state.selectedGameId = gameId;
  saveStorage(STORAGE_KEYS.selectedGame, state.selectedGameId);
  state.currentView = "detail";
  renderDetail();
  renderViews();
  closeSidebarOnMobile();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getSelectedGame() {
  return state.data.games.find((game) => game.id === state.selectedGameId) || null;
}

function getGameById(gameId) {
  return state.data.games.find((game) => game.id === gameId) || null;
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
    showToast(t("toasts.loginEnabled"));
  }
}

function logoutDemoUser() {
  window.clearTimeout(runGameRound.timeoutId);
  state.user = null;
  state.loginTargetGameId = null;
  state.gameSession = null;
  clearStorage(STORAGE_KEYS.user);
  renderSessionActions();
  renderDetail();
  closeLoginModal();
  closePlayModal();
  showToast(t("toasts.sessionEnded"));
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
  const game = getGameById(gameId);
  if (!game || !state.user) {
    return;
  }

  state.selectedGameId = game.id;
  saveStorage(STORAGE_KEYS.selectedGame, state.selectedGameId);
  elements.playTitle.textContent = `${t("play.title")} · ${game.name}`;
  elements.playGameName.textContent = game.name;
  elements.playGameMeta.textContent = `${game.provider} · RTP ${formatPercent(game.rtp)}`;
  elements.playBalance.textContent = formatCurrency(state.user.balance);
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
    showToast(t("toasts.invalidCredentials"));
    return;
  }

  loginDemoUser(true);

  if (state.loginTargetGameId) {
    openPlayModal(state.loginTargetGameId);
    state.loginTargetGameId = null;
    showToast(t("toasts.loginToPlay"));
    return;
  }

  showToast(t("toasts.loginEnabled"));
}

function handlePlaySubmit(event) {
  event.preventDefault();
  if (!state.user) {
    showToast(t("toasts.enterDemo"));
    return;
  }

  const game = getSelectedGame();
  const amount = Number(elements.playAmount.value);

  if (!Number.isFinite(amount) || amount <= 0) {
    showToast(t("toasts.invalidBet"));
    return;
  }

  if (amount > state.user.balance) {
    showToast(t("toasts.insufficientBalance"));
    return;
  }

  state.user.balance = Number((state.user.balance - amount).toFixed(2));
  saveStorage(STORAGE_KEYS.user, state.user);
  state.gameSession = createGameSession(game, amount);
  state.currentView = "detail";
  renderSessionActions();
  renderDetail();
  renderViews();
  closePlayModal();
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast(interpolate(t("toasts.gameStarted"), { game: game.name, amount: formatCurrency(amount) }));
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

function renderGameStage(game) {
  const session = getGameSessionForSelectedGame();
  if (!session) {
    elements.detailGameStage.innerHTML = `
      <div class="stage-shell empty tone-${game.tone}" style="${getArtVariableStyle(getGameArtwork(game, "detail"))}">
        <div class="stage-empty-state">
          <strong>${game.name}</strong>
          <span>${t(`stage.empty.${game.category}`)}</span>
        </div>
      </div>
    `;
    return;
  }

  if (game.category === "slot") {
    renderSlotStage(game, session);
    return;
  }

  if (game.category === "crash") {
    renderCrashStage(game, session);
    return;
  }

  renderLiveStage(game, session);
}

function renderSlotStage(game, session) {
  const isRunning = session.state === "running";
  const winLabel = session.lastWin > 0 ? formatCurrency(session.lastWin) : formatCurrency(0);

  elements.detailGameStage.innerHTML = `
    <div class="stage-shell tone-${game.tone}">
      <div class="stage-marquee">
        <span>${t("stage.labels.demoMode")}</span>
        <strong>${game.name}</strong>
        <em>${session.message}</em>
      </div>
      <div class="slot-machine" style="${getArtVariableStyle(getGameArtwork(game, "detail"))}">
        <div class="slot-topper">
          <div class="slot-topper-badge">${t("stage.labels.hotPath")}</div>
          <div class="slot-topper-brand">${game.provider}</div>
        </div>
        <div class="slot-board ${isRunning ? "is-running" : ""}">
          ${session.reels
            .map(
              (reel, reelIndex) => `
                <div class="slot-reel">
                  <div class="slot-strip ${isRunning ? `run-delay-${reelIndex}` : ""}">
                    ${reel
                      .map(
                        (symbol) => `
                          <div class="slot-symbol slot-symbol-${symbol.tone}">
                            <span>${symbol.icon}</span>
                            <small>${symbol.label}</small>
                          </div>
                        `
                      )
                      .join("")}
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="slot-results">
          <span>${t("stage.labels.win")}</span>
          <strong>${winLabel}</strong>
        </div>
        <div class="slot-hud">
          ${buildSharedHud(session, game)}
        </div>
      </div>
    </div>
  `;
}

function renderCrashStage(game, session) {
  const points = session.trace
    .map((value, index) => `${40 + index * 95},${240 - value * 26}`)
    .join(" ");

  elements.detailGameStage.innerHTML = `
    <div class="stage-shell tone-${game.tone}">
      <div class="stage-marquee">
        <span>${t("stage.labels.demoMode")}</span>
        <strong>${game.name}</strong>
        <em>${session.message}</em>
      </div>
      <div class="crash-shell" style="${getArtVariableStyle(getGameArtwork(game, "detail"))}">
        <div class="crash-graph">
          <svg viewBox="0 0 640 260" aria-hidden="true">
            <defs>
              <linearGradient id="crash-line" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#ff9a3d" />
                <stop offset="100%" stop-color="#fff2ba" />
              </linearGradient>
            </defs>
            <polyline fill="none" stroke="url(#crash-line)" stroke-width="6" points="${points}" />
          </svg>
          <div class="crash-multiplier">${formatMultiplier(session.displayMultiplier)}</div>
        </div>
        <div class="crash-hud">
          <div class="slot-hud-card">
            <small>${t("stage.labels.lastBurst")}</small>
            <strong>${formatMultiplier(session.lastBurst)}</strong>
          </div>
          <div class="slot-hud-card">
            <small>${t("stage.labels.autoCashout")}</small>
            <strong>${formatMultiplier(session.autoCashout)}</strong>
          </div>
          <div class="slot-hud-card">
            <small>${t("stage.labels.roundId")}</small>
            <strong>#${session.roundId}</strong>
          </div>
          ${buildRunButton(session, game)}
        </div>
      </div>
    </div>
  `;
}

function renderLiveStage(game, session) {
  elements.detailGameStage.innerHTML = `
    <div class="stage-shell tone-${game.tone}">
      <div class="stage-marquee">
        <span>${t("stage.labels.demoMode")}</span>
        <strong>${game.name}</strong>
        <em>${session.message}</em>
      </div>
      <div class="live-shell" style="${getArtVariableStyle(getGameArtwork(game, "detail"))}">
        <div class="live-table">
          <div class="live-table-header">
            <span>${game.provider}</span>
            <strong>${t("stage.labels.tableLimit")} ${formatCurrency(session.betAmount * 10)}</strong>
          </div>
          <div class="live-dealer-row">
            <div class="dealer-seat">${t("stage.labels.dealerSeat")}</div>
            <div class="live-result-chip">${formatMultiplier(session.displayMultiplier)}</div>
          </div>
          <div class="live-cards">
            ${session.cards
              .map(
                (card) => `
                  <div class="live-card">
                    <span>${card.face}</span>
                    <strong>${card.value}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
          <div class="slot-hud">
            ${buildSharedHud(session, game)}
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildSharedHud(session, game) {
  return `
    <div class="slot-hud-card">
      <small>${t("stage.labels.balance")}</small>
      <strong>${formatCurrency(state.user?.balance ?? 0)}</strong>
    </div>
    <div class="slot-hud-card">
      <small>${t("stage.labels.bet")}</small>
      <strong>${formatCurrency(session.betAmount)}</strong>
    </div>
    <div class="slot-hud-card">
      <small>${t("stage.labels.lastPrize")}</small>
      <strong>${formatCurrency(session.lastWin)}</strong>
    </div>
    ${buildRunButton(session, game)}
  `;
}

function buildRunButton(session, game) {
  return `
    <button class="slot-run-button" data-run-game="true" ${canRunCurrentGame() ? "" : "disabled"}>
      ${getRunButtonLabel(game)}
    </button>
  `;
}

function getVisibleGameCount() {
  const viewport = window.innerWidth || 1440;
  if (viewport <= 620) {
    return 1;
  }
  if (viewport <= 900) {
    return 2;
  }
  if (viewport <= 1200) {
    return 4;
  }
  if (viewport <= 1520) {
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

function runGameRound() {
  const game = getSelectedGame();
  const session = getGameSessionForSelectedGame();
  if (!game || !session || !state.user || session.state === "running") {
    return;
  }

  if (!session.hasActiveBet) {
    if (state.user.balance < session.betAmount) {
      showToast(t("toasts.insufficientReplay"));
      return;
    }
    state.user.balance = Number((state.user.balance - session.betAmount).toFixed(2));
    saveStorage(STORAGE_KEYS.user, state.user);
    renderSessionActions();
  }

  session.state = "running";
  session.message = t(`stage.spinning.${game.category}`);
  session.lastWin = 0;
  session.hasActiveBet = false;
  session.displayMultiplier = 1;
  if (game.category === "slot") {
    session.reels = createRunningReels(game);
  }
  if (game.category === "crash") {
    session.trace = createCrashTrace(1.6);
  }
  if (game.category === "live") {
    session.cards = createCards(true);
  }
  renderDetail();

  window.clearTimeout(runGameRound.timeoutId);
  runGameRound.timeoutId = window.setTimeout(() => {
    if (!state.user || !getGameSessionForSelectedGame()) {
      return;
    }

    const outcomeMultiplier = getOutcomeMultiplier(game);
    const payout = Number((session.betAmount * outcomeMultiplier).toFixed(2));
    state.user.balance = Number((state.user.balance + payout).toFixed(2));
    saveStorage(STORAGE_KEYS.user, state.user);
    session.state = "settled";
    session.lastWin = payout;
    session.displayMultiplier = outcomeMultiplier;
    session.lastBurst = outcomeMultiplier;
    session.roundId += 1;
    session.message = interpolate(t(`stage.result.${game.category}`), {
      multiplier: formatMultiplier(outcomeMultiplier),
    });
    if (game.category === "slot") {
      session.reels = createWinningReels(game);
    }
    if (game.category === "crash") {
      session.trace = createCrashTrace(outcomeMultiplier);
    }
    if (game.category === "live") {
      session.cards = createCards(false);
    }
    renderSessionActions();
    renderDetail();
    showToast(interpolate(t("toasts.gamePaid"), { game: game.name, amount: formatCurrency(payout) }));
  }, 1900);
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
    name: user.name ?? fallback.name ?? "Demo Player",
    email: user.email ?? fallback.email ?? "demo@pulsebet.com",
    balance: Number.isFinite(balance) ? balance : 1000,
  };
}

function createGameSession(game, betAmount) {
  return {
    activeGameId: game.id,
    betAmount,
    state: "idle",
    lastWin: 0,
    displayMultiplier: 1,
    autoCashout: Number((betAmount / 5 + 2.2).toFixed(2)),
    lastBurst: 1.34,
    hasActiveBet: true,
    roundId: 2041,
    message: t(`stage.ready.${game.category}`),
    reels: createIdleReels(game),
    trace: createCrashTrace(1.8),
    cards: createCards(false),
  };
}

function getGameSessionForSelectedGame() {
  if (!state.gameSession) {
    return null;
  }

  if (state.gameSession.activeGameId !== state.selectedGameId) {
    return null;
  }

  return state.gameSession;
}

function canRunCurrentGame() {
  const session = getGameSessionForSelectedGame();
  return Boolean(session && session.state !== "running");
}

function getRunButtonLabel(game) {
  const session = getGameSessionForSelectedGame();
  if (!session) {
    return t(`stage.action.${game.category}.idle`);
  }

  if (session.state === "running") {
    return t(`stage.action.${game.category}.pending`);
  }

  if (session.state === "settled" && session.lastWin > 0) {
    return t(`stage.action.${game.category}.settled`);
  }

  return t(`stage.action.${game.category}.idle`);
}

function createIdleReels(game) {
  return [
    [createSymbol("gem"), createSymbol("coin"), createSymbol("wild", game)],
    [createSymbol("scroll"), createSymbol("coin"), createSymbol("star")],
    [createSymbol("star"), createSymbol("crown"), createSymbol("wild", game)],
  ];
}

function createWinningReels(game) {
  return [
    [createSymbol("gem"), createSymbol("fortune"), createSymbol("wild", game)],
    [createSymbol("coin"), createSymbol("fortune"), createSymbol("star")],
    [createSymbol("star"), createSymbol("fortune"), createSymbol("crown")],
  ];
}

function createRunningReels(game) {
  return [
    [createSymbol("gem"), createSymbol("star"), createSymbol("fortune"), createSymbol("wild", game), createSymbol("coin"), createSymbol("crown")],
    [createSymbol("star"), createSymbol("coin"), createSymbol("fortune"), createSymbol("gem"), createSymbol("wild", game), createSymbol("star")],
    [createSymbol("wild", game), createSymbol("crown"), createSymbol("fortune"), createSymbol("coin"), createSymbol("star"), createSymbol("gem")],
  ];
}

function createCrashTrace(multiplier) {
  return [0.6, 1.2, 2.3, Math.min(4.2, multiplier + 1.4), Math.min(6.4, multiplier * 1.55)];
}

function createCards(isRunning) {
  if (isRunning) {
    return [
      { face: "●", value: "..." },
      { face: "●", value: "..." },
      { face: "●", value: "..." },
    ];
  }

  return [
    { face: "BANKER", value: "8" },
    { face: "PLAYER", value: "6" },
    { face: "TIE", value: "2x" },
  ];
}

function createSymbol(type, game = null) {
  const map = {
    gem: { icon: "◆", label: "gem", tone: "emerald" },
    star: { icon: "✦", label: "star", tone: "amber" },
    coin: { icon: "◎", label: "coin", tone: "gold" },
    crown: { icon: "♛", label: "crown", tone: "red" },
    scroll: { icon: "◈", label: "scroll", tone: "sky" },
    fortune: { icon: "✺", label: "fortune", tone: "emerald" },
    wild: {
      icon: game?.name?.charAt(0) ?? "W",
      label: "wild",
      tone: game?.tone || "violet",
    },
  };

  return map[type];
}

function getOutcomeMultiplier(game) {
  const base = {
    slot: [3.2, 4.8, 5.4, 6.1],
    crash: [1.8, 2.3, 3.7, 5.1],
    live: [1.6, 2.1, 2.8, 4.4],
  }[game.category] ?? [2.4];
  const value = base[Math.floor(Math.random() * base.length)];
  return Number((value + (game.rtp % 1)).toFixed(2));
}

function normalizeGames(raw) {
  return {
    games: raw.games.map((game) => ({
      ...game,
      tags: Array.isArray(game.tags) ? game.tags : [],
      stats: Array.isArray(game.stats) ? game.stats : [],
      bigWins: Array.isArray(game.bigWins) ? game.bigWins : [],
    })),
  };
}

function normalizeLocale(locale) {
  return LOCALES[locale] ? locale : DEFAULT_LOCALE;
}

function setLocale(locale) {
  const nextLocale = normalizeLocale(locale);
  if (nextLocale === state.locale) {
    return;
  }
  state.locale = nextLocale;
  saveStorage(STORAGE_KEYS.locale, state.locale);
  renderAll();
}

function resetShelves() {
  state.shelfOffsets = {
    popular: 0,
    crash: 0,
    slots: 0,
    related: 0,
  };
}

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], UI_COPY[state.locale]) ?? path;
}

function localize(value) {
  if (typeof value === "string") {
    return value;
  }
  return value?.[state.locale] ?? value?.en ?? value?.pt ?? "";
}

function interpolate(template, vars) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? "");
}

function formatByType(value, format) {
  if (format === "currency") {
    return formatCurrency(value);
  }
  if (format === "percent") {
    return formatPercent(value);
  }
  return formatInteger(value);
}

function formatCurrency(value) {
  const locale = LOCALES[state.locale];
  return new Intl.NumberFormat(locale.lang, {
    style: "currency",
    currency: locale.currency,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPercent(value) {
  return `${new Intl.NumberFormat(LOCALES[state.locale].lang, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)}%`;
}

function formatInteger(value) {
  return new Intl.NumberFormat(LOCALES[state.locale].lang, {
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDecimal(value) {
  return new Intl.NumberFormat(LOCALES[state.locale].lang, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatMultiplier(value) {
  return `${new Intl.NumberFormat(LOCALES[state.locale].lang, {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value)}x`;
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) {
    node.textContent = value;
  }
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.remove("hidden");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    elements.toast.classList.add("hidden");
  }, 2400);
}

function getArtVariableStyle(src) {
  return `--art-image: url('${src}')`;
}

function getGameArtwork(game, variant = "card") {
  if (!game) {
    return "";
  }
  return `${ARTWORK_BASE_PATH}/${game.id}.svg`;
}

bootstrap().catch(() => {
  showToast(t("toasts.failedLoad"));
});
