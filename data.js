window.PORTFOLIO_DATA = {
  person: {
    name: 'Amirreza “Farnam” Taheri',
    shortName: 'Farnam Taheri',
    roles: ['MSc in Economics', 'Data Scientist', 'Machine Learning', 'Deep Learning'],
    statement: 'Graduate student in Economics at Tehran Institute for Advanced Studies (TeIAS). Research in labor economics and search-and-matching models supervised by Prof. Alireza Sepahsalari. Rigorous empirical econometrics and machine learning in Python, R, and Stata, alongside passion projects in Rust, Go, and TypeScript.',
    advisorUrl: 'https://www.sepahsalari.com/',
    institute: 'Tehran Institute for Advanced Studies (TeIAS)',
    instituteUrl: 'https://teias.institute',
    email: 'TaheriFarnam@Gmail.com',
    secondaryEmail: 'taheri.farnam@gmail.com',
    phone: '+989999946242',
    github: 'https://github.com/AmirrezaFarnamTaheri',
    githubLabel: 'github.com/AmirrezaFarnamTaheri',
    linkedin: 'https://ir.linkedin.com/in/amirreza-farnam-taheri-2691b1201',
    linkedinLabel: 'linkedin.com/in/amirreza-farnam-taheri',
    location: 'Tehran, Iran'
  },
  telemetry: [
    { label: 'Status', value: 'Active (TeIAS Graduate Student)', status: 'live' },
    { label: 'Rank', value: 'Rank 27 Nationwide (2023)' },
    { label: 'Grad GPA', value: '18.72 / 20 (TeIAS)' },
    { label: 'Thesis Topic', value: 'Labor Mismatch & Search-with-Savings' },
    { label: 'Primary Stack', value: 'Python · Stata · SQL · ML · DL · AI Agent · Agentic Coding · LaTeX' },
    { label: 'Economics Minor', value: 'AUT Economics Minor (19.20 / 20)' }
  ],
  proofLine: [
    'Python',
    'Stata',
    'SQL',
    'TensorFlow',
    'PyTorch',
    'scikit-learn',
    'Dynare / MATLAB',
    'Causal Inference',
    'Data Science / Data Engineering',
    'Machine Learning / Deep Learning',
    'AI Agents / Agentic Coding',
    'Rust',
    'Go',
    'TypeScript',
    'HTML / JavaScript',
    'Docker',
    'Git',
    'GitHub',
    'LaTeX'
  ],
  thesis: {
    title: 'Liquidity, Mismatch, and Job Choice: A Structural Search Model of the Labor Market',
    subtitle: 'Master’s Thesis Research · Department of Economics and Finance, TeIAS',
    status: 'In Progress (Graduate Thesis)',
    advisor: 'Prof. Alireza Sepahsalari',
    advisorUrl: 'https://www.sepahsalari.com/',
    abstract: 'An equilibrium search-and-matching framework integrating worker precautionary savings, liquidity constraints, and multidimensional skill mismatch. Evaluates how asset scarcity forces liquidity-constrained job seekers into suboptimal job matches, inducing persistent occupational mismatch and long-run wage scarring.',
    methodology: [
      'Continuous-time Bellman equations with endogenous asset accumulation and reservation wage policies.',
      'Numerical solution via Value Function Iteration (VFI) and continuous-state dynamic programming.',
      'Empirical calibration and indirect inference using NLSY79 longitudinal microdata and O*NET occupational skill vectors.',
      'Counterfactual policy evaluations of unemployment insurance liquidity extensions versus wage subsidies.'
    ],
    dataSources: ['NLSY79 (National Longitudinal Survey of Youth)', 'O*NET Occupational Requirements Database', 'CPS (Current Population Survey)'],
    tools: ['Python', 'Stata', 'R', 'NumPy / SciPy', 'Dynamic Programming', 'LaTeX'],
    metrics: [
      { metric: 'Theoretical Core', value: 'Search-with-Savings & Skill Mismatch' },
      { metric: 'Microdata Sample', value: 'NLSY79 Longitudinal Cohort' },
      { metric: 'Occupational Depth', value: 'O*NET 800+ Standardized Classifications' },
      { metric: 'Computational Method', value: 'Value Function Iteration & SMM' }
    ]
  },
  honors: [
    {
      title: "Rank 27 — Iranian National Master's Entrance Examination",
      year: '2023',
      context: 'Nationwide quantitative entrance examination for graduate studies in Economics.'
    }
  ],
  stackPillars: [],
  featured: [
    {
      id: 'scriptor',
      number: '01',
      kind: 'Research Tooling / Local Knowledge Workspace',
      name: 'Scriptor',
      subtitle: 'Local-first Markdown workspace for research, authoring, and knowledge graphs',
      description: 'Scriptor is a Tauri desktop application for technical writing and academic research. Markdown files remain the portable source of truth on disk; Rust services manage local vault indexing, full-text search, Pandoc pipelines, and IPC, while the React 19 interface provides citation previews, backlinks, interactive knowledge graphs, and MCP integrations.',
      bullets: [
        'Tauri 2 desktop architecture with Rust 1.96 / 2024 Edition kernel and React 19 / TypeScript 6 renderer.',
        'SQLite WAL + FTS5 full-text indexing, HMAC-authenticated local RPC, and ts-rs generated type contracts.',
        'Deterministic Pandoc export profiles (HTML, PDF, DOCX, LaTeX, ePub, Reveal.js) and native 3-way Git conflict resolution.',
        'Automated release engineering with CycloneDX SBOM, SHA-256 provenance attestations, Playwright E2E suites, and accessibility audits.'
      ],
      specs: [
        { label: 'Architecture', value: 'Tauri 2 + Rust 1.96 + React 19' },
        { label: 'Storage / Search', value: 'SQLite WAL + FTS5 full-text' },
        { label: 'Document Engine', value: 'Pandoc (HTML/PDF/LaTeX/ePub)' },
        { label: 'Protocols', value: 'MCP (Model Context Protocol) + HMAC RPC' }
      ],
      architectureDiagram: `┌─────────────────────────────────────────────────────────────┐
│                    REACT 19 / TS 6 UI                       │
│       CodeMirror 6 · Bi-directional Links · Citations       │
└──────────────────────────────┬──────────────────────────────┘
                               │  Tauri 2 IPC (HMAC RPC)
┌──────────────────────────────▼──────────────────────────────┐
│                  RUST 1.96 KERNEL CORE                      │
│  ┌───────────────────────┐       ┌───────────────────────┐  │
│  │ SQLite WAL + FTS5     │       │ Pandoc Pipeline Exec  │  │
│  │ Indexing & Backlinks  │       │ Multi-format Exporter │  │
│  └───────────────────────┘       └───────────────────────┘  │
│  ┌───────────────────────┐       ┌───────────────────────┐  │
│  │ Local Vault FS Watcher│       │ Model Context Protocol│  │
│  │ Deterministic Sync    │       │ (MCP) Agent Bridge    │  │
│  └───────────────────────┘       └───────────────────────┘  │
└─────────────────────────────────────────────────────────────┘`,
      benchmarks: [
        { metric: 'Startup Time', value: '< 18 ms' },
        { metric: 'Full-Text Indexing', value: '100k words in 34 ms' },
        { metric: 'Memory Usage', value: '~42 MB baseline' }
      ],
      stack: ['Rust', 'TypeScript', 'React 19', 'Tauri 2', 'SQLite FTS5', 'Pandoc', 'MCP', 'Git', 'CI/CD'],
      href: 'https://github.com/AmirrezaFarnamTaheri/Scriptor',
      cta: 'Explore Scriptor Repository',
      image: 'assets/screenshots/scriptor/workspace-dark.png',
      fallbackImage: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/workspace-dark.png',
      imageAlt: 'Scriptor local-first Markdown workspace showing editor, knowledge graph, and citations',
      windowTitle: 'Scriptor · Local-first Research Workspace',
      architectureHtmlUrl: 'architectures/scriptor.html?embed=1',
      architectureRepoUrl: 'https://github.com/AmirrezaFarnamTaheri/Scriptor/blob/main/docs/architecture.html',
      architectureDocUrl: 'https://github.com/AmirrezaFarnamTaheri/Scriptor/blob/main/docs/ARCHITECTURE.md',
      screenshots: [
        { label: 'Workspace', url: 'assets/screenshots/scriptor/workspace-dark.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/workspace-dark.png', alt: 'Scriptor Dark Mode workspace with CodeMirror 6 and live preview' },
        { label: 'Canvas Board', url: 'assets/screenshots/scriptor/canvas.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/canvas.png', alt: 'Scriptor Spatial Canvas board for visual thought and note mapping' },
        { label: 'MCP Bridge', url: 'assets/screenshots/scriptor/mcp-panel.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/mcp-panel.png', alt: 'Scriptor Model Context Protocol (MCP) agent tooling and inspection panel' },
        { label: 'Knowledge Graph', url: 'assets/screenshots/scriptor/knowledge-workbench.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/knowledge-workbench.png', alt: 'Scriptor Knowledge Workbench with 3D graph and backlink exploration' }
      ],
      visual: 'SC'
    },
    {
      id: 'huntx',
      number: '02',
      kind: 'Data Ingestion / Network Telemetry Utility',
      name: 'HUNTX (GatherX)',
      subtitle: 'Network telemetry, proxy benchmarking, and automated feed publisher',
      description: 'A multi-stage telemetry ingestion and network analysis system. Python manages source acquisition, state checkpoints, and output feeds; Go (huntx-engine) provides high-throughput protocol parsing, benchmarking, TLS inspection, and geo-routing synthesis; verified snapshots are published via scheduled GitHub Actions to a static dashboard.',
      bullets: [
        'Multi-stage pipeline with approved-source acquisition, raw checkpoints, and SHA-256 content-addressed deduplication.',
        'Go engine decoders for VLESS Reality, VMess, Trojan TLS, Shadowsocks SIP002, and Hysteria2/Hy2.',
        'GeoIP/CIDR routing, node jitter analytics, latency benchmarking, and automated fallback synthesis.',
        'Two-hour scheduled GitHub Actions publishing verified data feeds with deterministic release manifests.'
      ],
      specs: [
        { label: 'Data Plane', value: 'Python ingestion + SQLite state' },
        { label: 'Network Engine', value: 'Go (huntx-engine) TLS inspection' },
        { label: 'Protocols', value: 'VLESS Reality, VMess, Trojan, Hy2' },
        { label: 'Publishing', value: 'GitHub Actions 2h cycle + GitHub Pages' }
      ],
      architectureDiagram: `┌────────────────────────┐        ┌─────────────────────────┐
│ PYTHON CONTROL PLANE   │───────►│ GO ENGINE (huntx-engine) │
│ Ingestion & SHA-256 Dedup       │ TLS Inspection & Decoders│
└────────────────────────┘        └────────────┬────────────┘
                                               │
                                  ┌────────────▼────────────┐
                                  │ GEOIP & JITTER BENCHMARK│
                                  │ Geo-routing Synthesis   │
                                  └────────────┬────────────┘
                                               │
                                  ┌────────────▼────────────┐
                                  │ GITHUB ACTIONS CRON     │
                                  │ Data Feed Publisher     │
                                  └─────────────────────────┘`,
      architectureHtmlUrl: 'https://amirrezafarnamtaheri.github.io/HUNTX/architecture.html?embed=1',
      architectureRepoUrl: 'https://github.com/AmirrezaFarnamTaheri/HUNTX/blob/main/docs/architecture.html',
      architectureImage: 'assets/screenshots/huntx/huntx-architecture.png',
      pipelineImage: 'assets/screenshots/huntx/huntx-pipeline.png',
      liveBrowserUrl: 'https://amirrezafarnamtaheri.github.io/HUNTX/',
      browserDisplayUrl: 'amirrezafarnamtaheri.github.io/HUNTX/',
      benchmarks: [
        { metric: 'Parsing Throughput', value: '12,000+ items / sec' },
        { metric: 'TLS Handshake Check', value: '< 40 ms' },
        { metric: 'Ingestion Cycle', value: 'Automated 2h cadence' }
      ],
      stack: ['Python', 'Go', 'SQLite', 'JavaScript', 'GitHub Actions', 'Data Pipelines', 'C4 Architecture'],
      href: 'https://github.com/AmirrezaFarnamTaheri/HUNTX',
      cta: 'Explore HUNTX Repository',
      image: 'assets/screenshots/huntx/huntx-architecture.png',
      fallbackImage: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/HUNTX/main/docs/assets/images/huntx-arch-v2.png',
      imageAlt: 'HUNTX platform architecture and automated data pipeline',
      windowTitle: 'HUNTX · Live Proxy Telemetry & Node Engine',
      visual: 'HX'
    },
    {
      id: 'wincare',
      number: '03',
      kind: 'Desktop Utility / Windows Diagnostic Platform',
      name: 'WinCare',
      subtitle: 'System operations, process telemetry, and diagnostics platform',
      description: 'A policy-governed Windows system operations and self-healing platform. Combines a native WinUI 3 desktop interface, Spectre.Console TUI, and REST API with a native core engine in Rust, C#, and ONNX Runtime for local system telemetry inspection and automated recovery.',
      bullets: [
        'Hybrid architecture with .NET 8 / WinUI 3 desktop UI and high-performance Rust core engine.',
        'Local ONNX Runtime inference with DirectML hardware acceleration for system anomaly detection.',
        'Windows Job Objects process isolation, telemetry inspection, and policy-governed system maintenance.',
        'Spectre.Console terminal interface alongside WinUI 3 desktop control center.'
      ],
      specs: [
        { label: 'Desktop Interface', value: '.NET 8 + WinUI 3 + Spectre.Console' },
        { label: 'Core Engine', value: 'Rust 2024 native DLL' },
        { label: 'Inference', value: 'ONNX Runtime + DirectML' },
        { label: 'Governance', value: 'Windows Job Objects & Policies' }
      ],
      architectureDiagram: `┌─────────────────────────────────────────────────────────────┐
│             WINUI 3 DESKTOP / SPECTRE.CONSOLE TUI           │
│         System Dashboard · Diagnostics · Recovery Monitor   │
└──────────────────────────────┬──────────────────────────────┘
                               │  P/Invoke / FFI
┌──────────────────────────────▼──────────────────────────────┐
│                    RUST 2024 CORE ENGINE                    │
│  ┌───────────────────────┐       ┌───────────────────────┐  │
│  │ Windows API telemetry │       │ Local ONNX Inference  │  │
│  │ Job Objects Isolation │       │ DirectML Acceleration │  │
│  └───────────────────────┘       └───────────────────────┘  │
│  ┌───────────────────────┐       ┌───────────────────────┐  │
│  │ Policy Enforcement    │       │ Self-Healing Action   │  │
│  │ Process Governance    │       │ Rollback & Audit Log  │  │
│  └───────────────────────┘       └───────────────────────┘  │
└─────────────────────────────────────────────────────────────┘`,
      architectureHtmlUrl: 'architectures/wincare.html?embed=1',
      architectureRepoUrl: 'https://github.com/AmirrezaFarnamTaheri/WinCare/blob/master/docs/architecture.html',
      architectureDocUrl: 'https://github.com/AmirrezaFarnamTaheri/WinCare/blob/master/docs/Architecture.md',
      benchmarks: [
        { metric: 'Diagnostics Scan', value: '< 250 ms' },
        { metric: 'ONNX Local Inference', value: '< 15 ms' },
        { metric: 'Process Isolation', value: 'Strict Memory Limits' }
      ],
      stack: ['WinUI 3', '.NET 8', 'C#', 'Rust 2024', 'ONNX Runtime', 'DirectML'],
      href: 'https://github.com/AmirrezaFarnamTaheri/WinCare',
      cta: 'Explore WinCare Repository',
      image: 'assets/screenshots/wincare/runtime-dashboard.png',
      fallbackImage: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/runtime-dashboard.png',
      imageAlt: 'WinCare native WinUI 3 desktop dashboard showing system status, telemetry, and diagnostics',
      windowTitle: 'WinCare · Native Desktop Operations',
      screenshots: [
        { label: 'Dashboard', url: 'assets/screenshots/wincare/runtime-dashboard.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/runtime-dashboard.png', alt: 'WinCare native WinUI 3 system dashboard with live telemetry and process monitoring' },
        { label: 'Checkup', url: 'assets/screenshots/wincare/runtime-checkup.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/runtime-checkup.png', alt: 'WinCare system diagnostic checkup scan and review-before-apply recommendations' },
        { label: 'Terminal TUI', url: 'assets/screenshots/wincare/tui-preview.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/tui-preview.png', alt: 'WinCare Spectre.Console headless terminal REPL with live telemetry and process isolation' },
        { label: 'Diagnostics Showcase', url: 'assets/screenshots/wincare/showcase-preview.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/showcase-preview.png', alt: 'WinCare diagnostic tool showcase and policy-governed system maintenance catalog' }
      ],
      visual: 'WC'
    }
  ],
  coursework: [
    {
      course: 'Econometrics I',
      category: 'econometrics',
      score: '19.3 / 20',
      scoreNumeric: 19.3,
      context: 'Graduate Coursework · TeIAS Department of Economics and Finance',
      tools: ['Stata', 'LaTeX'],
      topics: ['Classical Linear Regression', 'Asymptotic Theory', 'Hypothesis Testing & Statistical Inference', 'Instrumental Variables (IV / 2SLS)', 'LFS (Labor Force Survey) Microdata'],
      href: 'https://github.com/AmirrezaFarnamTaheri/Econometrics-I'
    },
    {
      course: 'Econometrics II (Applied Econometrics)',
      category: 'econometrics',
      score: '19.0 / 20',
      scoreNumeric: 19.0,
      context: 'Graduate Coursework · TeIAS Department of Economics and Finance',
      tools: ['R', 'R Markdown'],
      topics: ['Generalized Method of Moments (GMM)', 'Panel Data & Fixed Effects', 'Difference-in-Differences (DiD & Synthetic DiD)', 'Regression Discontinuity Design (RDD)', 'Propensity Score Matching', 'Instrumental Variables (IV / 2SLS)', 'HEIS & LFS Survey Microdata'],
      href: 'https://github.com/AmirrezaFarnamTaheri/Metric-II-Homeworks'
    },
    {
      course: 'Macroeconomics I',
      category: 'econometrics',
      score: '19.0 / 20',
      scoreNumeric: 19.0,
      context: 'Graduate Coursework · TeIAS Department of Economics and Finance',
      tools: ['Python', 'MATLAB', 'Dynare', 'LaTeX'],
      topics: ['Stochastic RBC Simulation', 'Money & Government in RBC', 'Job Search & Matching (McCall & DMP)', 'Neoclassical & Endogenous Growth Models', 'Dynamic Programming & Euler Equations'],
      href: 'https://github.com/AmirrezaFarnamTaheri/Macroeconomics-I'
    },
    {
      course: 'Machine Learning',
      category: 'ai',
      score: '18.5 / 20',
      scoreNumeric: 18.5,
      context: 'Graduate Coursework · TeIAS Department of Data Science',
      tools: ['Python', 'scikit-learn', 'NumPy', 'Pandas'],
      topics: ['Supervised Learning & Regularization', 'SVM & Kernel Methods', 'Tree Ensembles (Random Forests, Gradient Boosting)', 'Time-Series Analysis & Forecasting', 'Clustering & Dimensionality Reduction (PCA)', 'Cross-Validation & Model Evaluation'],
      href: 'https://github.com/AmirrezaFarnamTaheri/Machine-Learning'
    },
    {
      course: 'Neural Networks & Deep Learning',
      category: 'ai',
      score: '17.0 / 20',
      scoreNumeric: 17.0,
      context: 'Graduate Coursework · TeIAS Department of Data Science',
      tools: ['Python', 'PyTorch', 'Transformers', 'LoRA'],
      topics: ['MLP Backpropagation & Optimization', 'CNN Architectures', 'Sequential Modeling & Time-Series (RNN, GRU, BiLSTM)', 'Transformers & Self-Attention', 'Reinforcement Learning (DQN, Policy Gradients)', 'LoRA Instruction Tuning & Transfer Learning'],
      href: 'https://github.com/AmirrezaFarnamTaheri/Deep-Learning-2025'
    },
    {
      course: 'Selected Graduate Courses',
      subject: 'Selected Graduate Courses',
      category: 'econometrics math',
      isConsolidated: true,
      score: '20.0 · 19.3 · 19.0 · 18.5 · 18.1',
      cells: [
        { name: 'Microeconomics II (Game Theory)', score: '20.0 / 20', scoreNumeric: 20.0 },
        { name: 'Macroeconomics II', score: '19.0 / 20', scoreNumeric: 19.0, tool: 'Python · MATLAB · LaTeX', tools: ['Python', 'MATLAB', 'LaTeX'] },
        { name: 'Mathematics for Economists', score: '19.3 / 20', scoreNumeric: 19.3, tool: 'LaTeX', tools: ['LaTeX'] },
        { name: 'Contract Theory', score: '18.5 / 20', scoreNumeric: 18.5 },
        { name: 'Microeconomics I', score: '18.1 / 20', scoreNumeric: 18.1, tool: 'LaTeX', tools: ['LaTeX'] }
      ]
    },
    {
      course: 'Selected Undergrad Courses',
      subject: 'Selected Undergrad Courses',
      category: 'econometrics math',
      isConsolidated: true,
      score: '20.0 · 20.0 · 20.0 · 19.5 · 17.6 · 17.0 · 16.5',
      cells: [
        { name: 'Econometrics (Minor)', score: '20.0 / 20', scoreNumeric: 20.0, tool: 'Stata', tools: ['Stata'] },
        { name: 'Macroeconomics (Minor)', score: '20.0 / 20', scoreNumeric: 20.0 },
        { name: 'Game Theory (Minor)', score: '20.0 / 20', scoreNumeric: 20.0 },
        { name: 'Calculus II', score: '17.6 / 20', scoreNumeric: 17.6 },
        { name: 'Engineering Economics', score: '17.0 / 20', scoreNumeric: 17.0 },
        { name: 'Research Method & Report Writing', score: '19.5 / 20', scoreNumeric: 19.5, breakBefore: true },
        { name: 'Numerical Analysis', score: '16.5 / 20', scoreNumeric: 16.5, tool: 'MATLAB · Python', tools: ['MATLAB', 'Python'] }
      ]
    }
  ],
  additional: [
    {
      name: 'Computational Economics & Data Science',
      description: 'A code-first graduate resource covering numerical methods, dynamic programming, structural estimation, time series, and GPU-accelerated computing in Python.',
      stack: ['Python', 'NumPy', 'SciPy', 'Pandas', 'Numba', 'Dask', 'CuPy'],
      href: 'https://github.com/AmirrezaFarnamTaheri/Computational-Economics-and-Data-Science'
    },
    {
      name: 'Liquidity, Mismatch, and Job Choice (Master’s Research)',
      description: 'Graduate labor economics research supervised by Prof. Alireza Sepahsalari. Uses NLSY79 and O*NET microdata to study worker-job mismatch, liquid asset distribution, job transitions, nonparametric smoothing, and structural search-with-savings models.',
      stack: ['Python', 'Stata', 'R', 'NLSY79', 'O*NET', 'Causal Inference', 'Structural Modeling'],
      href: null
    },
    {
      name: 'Convex Optimization Notes & Interactive Code',
      description: 'Computational lecture notes and verification scripts covering linear algebra, convex sets and functions, duality, KKT conditions, and interior-point algorithms.',
      stack: ['Python', 'NumPy', 'SciPy', 'Mathematical Optimization', 'Jupyter'],
      href: 'https://github.com/AmirrezaFarnamTaheri/Convex-Optimization'
    }
  ],
  education: [
    {
      degree: 'M.Sc. in Economics',
      gpa: 'Cumulative GPA: 18.72 / 20',
      school: 'Tehran Institute for Advanced Studies (TeIAS)',
      dates: 'September 2023 — Present',
      note: 'Thesis advisor: Prof. Alireza Sepahsalari.'
    },
    {
      degree: 'Economics Minor',
      gpa: '19.20 / 20',
      school: 'Amirkabir University of Technology (AUT)',
      dates: 'September 2018 — September 2023',
      note: 'Minor program completed alongside engineering degree. Coursework includes Econometrics (20.0/20), Macroeconomics (20.0/20), and Game Theory (20.0/20).'
    },
    {
      degree: 'B.Sc. Civil Engineering',
      gpa: 'Cumulative GPA: 15.69 / 20',
      school: 'Amirkabir University of Technology (AUT)',
      dates: 'September 2018 — September 2023',
      note: ''
    }
  ]
};
