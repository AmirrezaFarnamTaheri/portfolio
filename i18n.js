/**
 * Farnam Taheri Portfolio & CV — Internationalization (i18n) Runtime
 * Comprehensive Persian (Farsi) & English bilingual translation system.
 * Native, fluent, academic terminology and full RTL layout handling.
 */

(function () {
  'use strict';

  // --- Persian Dataset (PORTFOLIO_DATA_FA) ---
  const PORTFOLIO_DATA_FA = {
    person: {
      name: 'امیررضا «فرنام» طاهری',
      shortName: 'فرنام طاهری',
      roles: ['کارشناسی ارشد اقتصاد نظری', 'دانشمند داده', 'یادگیری ماشین', 'یادگیری عمیق'],
      statement: 'دانشجوی کارشناسی ارشد اقتصاد نظری در موسسه تحقیقات پیشرفته تهران (TeIAS). پژوهش در حوزه اقتصاد کار و مدل‌های تعادلی جستجو و تطابق با راهنمایی دکتر علیرضا سپه‌سالاری. مسلط به اقتصادسنجی تجربی و یادگیری ماشین با پایتون، آر و استاتا، در کنار پروژه‌های توسعه سیستمی با راست، گو و تایپ‌اسکریپت.',
      advisorUrl: 'https://www.sepahsalari.com/',
      institute: 'موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
      instituteUrl: 'https://teias.institute',
      email: 'TaheriFarnam@Gmail.com',
      secondaryEmail: 'taheri.farnam@gmail.com',
      phone: '+989999946242',
      github: 'https://github.com/AmirrezaFarnamTaheri',
      githubLabel: 'github.com/AmirrezaFarnamTaheri',
      linkedin: 'https://ir.linkedin.com/in/amirreza-farnam-taheri-2691b1201',
      linkedinLabel: 'linkedin.com/in/amirreza-farnam-taheri',
      location: 'تهران، ایران'
    },
    telemetry: [
      { label: 'وضعیت', value: 'فعال (دانشجوی ارشد TeIAS)\u200F', status: 'live' },
      { label: 'رتبه', value: 'رتبه ۲۷ کشوری (۱۴۰۲) ارشد\u200F' },
      { label: 'معدل کارشناسی ارشد', value: '۱۸.۷۲ از ۲۰ (TeIAS)\u200F' },
      { label: 'موضوع پایان‌نامه', value: 'عدم تطابق مهارت و مدل‌های جستجو با پس‌انداز' },
      { label: 'استک اصلی', value: 'Python · Stata · SQL · ML · DL · AI Agent · Agentic Coding · LaTeX' },
      { label: 'دوره فرعی اقتصاد', value: 'دوره فرعی اقتصاد دانشگاه امیرکبیر (۱۹.۲۰ از ۲۰)\u200F' }
    ],
    proofLine: [
      'Python',
      'Stata',
      'SQL',
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
      'Dynare / MATLAB',
      'استنتاج علی (Causal Inference)\u200F',
      'علم داده و مهندسی داده',
      'یادگیری ماشین و یادگیری عمیق',
      'عامل‌های هوشمند (AI Agents)\u200F',
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
      title: 'نقدینگی، عدم تطابق مهارت و انتخاب شغل: رویکرد مدل ساختاری جستجو در بازار کار',
      subtitle: 'پژوهش پایان‌نامه کارشناسی ارشد · دانشکده اقتصاد و مالی، موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
      status: 'در حال انجام (پایان‌نامه ارشد)\u200F',
      advisor: 'دکتر علیرضا سپه‌سالاری',
      advisorUrl: 'https://www.sepahsalari.com/',
      institute: 'موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
      instituteUrl: 'https://teias.institute',
      abstract: 'چارچوب تعادلی جستجو و تطابق (Search-and-Matching) با لحاظ پس‌انداز احتیاطی نیروی کار، قیود نقدینگی و عدم تطابق چندبُعدی مهارت. این مدل تبیین می‌کند که چگونه کمبود دارایی و تنگنای مالی، جویندگان کار را به پذیرش فرصت‌های شغلی زیربهینه سوق داده و به عدم تطابق پایدار شغلی و کاهش ماندگار دستمزد منجر می‌شود.\u200F',
      methodology: [
        'معادلات بلمن زمان‌پیوسته با انباشت درون‌زای دارایی و سیاست‌های دستمزد رزرو.\u200F',
        'حل عددی از طریق تکرار تابع ارزش (VFI) و برنامه‌ریزی پویای متغیرهای پیوسته.\u200F',
        'کالیبراسیون تجربی و استنتاج غیرمستقیم با استفاده از ریزداده‌های طولی NLSY79 و بردارهای مهارتی پایگاه O*NET.\u200F',
        'ارزیابی سیاست‌های پادواقعی پیرامون بسط نقدینگی بیمه بیکاری در برابر یارانه‌های دستمزدی.\u200F'
      ],
      dataSources: ['NLSY79 (داده‌های طولی جوانان آمریکا)\u200F', 'O*NET (پایگاه اطلاعات مهارت‌های شغلی)\u200F', 'CPS (پیمایش جاری جمعیت)\u200F'],
      tools: ['Python', 'Stata', 'R', 'NumPy / SciPy', 'برنامه‌ریزی پویا (Dynamic Programming)\u200F', 'LaTeX'],
      metrics: [
        { metric: 'هسته نظری', value: 'جستجو با پس‌انداز و عدم تطابق مهارت' },
        { metric: 'نمونه ریزداده', value: 'کوهورت طولی NLSY79' },
        { metric: 'عمق طبقه‌بندی شغلی', value: 'بیش از ۸۰۰ عنوان شغلی در O*NET' },
        { metric: 'روش محاسباتی', value: 'روش SMM و تکرار تابع ارزش (VFI)\u200F' }
      ]
    },
    honors: [
      {
        title: 'رتبه ۲۷ کشوری — آزمون سراسری کارشناسی ارشد اقتصاد نظری',
        year: '۱۴۰۲ (2023)\u200F',
        context: 'آزمون ورودی سراسری کمی و تحلیلی مقطع کارشناسی ارشد اقتصاد نظری در سراسر کشور.\u200F'
      }
    ],
    stackPillars: [],
    featured: [
      {
        id: 'scriptor',
        number: '01',
        kind: 'ابزار پژوهشی / محیط مدیریت دانش محلی',
        name: 'اسکریپتور (Scriptor)',
        subtitle: 'محیط کار محلی بر پایه مارک‌داون برای نگارش فنی، پژوهش و گراف‌های دانش',
        description: 'اسکریپتور یک نرم‌افزار دسکتاپ بر پایه Tauri برای نگارش تخصصی و پژوهش‌های دانشگاهی است. فایل‌های مارک‌داون منبع حقیقت روی دیسک باقی می‌مانند؛ سرویس‌های نوشته‌شده با زبان راست مدیریت نمایه‌سازی، جستجوی تمام‌متن، پایپ‌لاین‌های Pandoc و IPC محلی را بر عهده دارند و رابط کاربری ری‌اکت ۱۹ قابلیت پیش‌نمایش ارجاعات، بک‌لینک‌ها، گراف‌های تعاملی دانش و اتصالات پروتکل کانتکست مدل (MCP) را فراهم می‌آورد.',
        bullets: [
          'معماری دسکتاپ بر پایه Tauri 2 با هسته بومی Rust 1.96 (ویرایش ۲۰۲۴) و رندر مبتنی بر React 19 و TypeScript 6.\u200F',
          'نمایه‌سازی تمام‌متن با SQLite WAL + FTS5، فراخوانی RPC محلی با احراز هویت HMAC و قراردادهای تایپ مشترک ts-rs.\u200F',
          'پروفایل‌های خروجی قطعی Pandoc (شامل HTML, PDF, DOCX, LaTeX, ePub, Reveal.js) و مدیریت تعارض‌های سه‌طرفه گیت.\u200F',
          'مهندسی انتشار خودکار با CycloneDX SBOM، گواهی اصالت SHA-256، آزمون‌های E2E با Playwright و ممیزی دسترس‌پذیری.\u200F'
        ],
        specs: [
          { label: 'معماری', value: 'Tauri 2 + Rust 1.96 + React 19' },
          { label: 'ذخیره‌سازی و جستجو', value: 'SQLite WAL + نمایه تمام‌متن FTS5' },
          { label: 'موتور اسناد', value: 'Pandoc (HTML/PDF/LaTeX/ePub)' },
          { label: 'پروتکل‌ها', value: 'پروتکل زمینه مدل (MCP) + HMAC RPC' }
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
          { metric: 'زمان راه‌اندازی', value: 'کمتر از ۱۸ میلی‌ثانیه' },
          { metric: 'نمایه‌سازی تمام‌متن', value: '۱۰۰ هزار کلمه در ۳۴ میلی‌ثانیه' },
          { metric: 'مصرف حافظه رم', value: 'حدود ۴۲ مگابایت' }
        ],
        stack: ['Rust', 'TypeScript', 'React 19', 'Tauri 2', 'SQLite FTS5', 'Pandoc', 'MCP', 'Git', 'CI/CD'],
        href: 'https://github.com/AmirrezaFarnamTaheri/Scriptor',
        cta: 'مشاهده مخزن اسکریپتور',
        image: 'assets/screenshots/scriptor/workspace-dark.png',
        fallbackImage: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/workspace-dark.png',
        imageAlt: 'اسکریپتور · محیط کار یادداشت‌برداری و گراف دانش',
        windowTitle: 'اسکریپتور · محیط کار پژوهشی محلی',
        architectureHtmlUrl: 'architectures/scriptor.html?embed=1',
        architectureRepoUrl: 'https://github.com/AmirrezaFarnamTaheri/Scriptor/blob/main/docs/architecture.html',
        architectureDocUrl: 'https://github.com/AmirrezaFarnamTaheri/Scriptor/blob/main/docs/ARCHITECTURE.md',
        screenshots: [
          { label: 'محیط نگارش', url: 'assets/screenshots/scriptor/workspace-dark.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/workspace-dark.png', alt: 'اسکریپتور در حالت تاریک با ویرایشگر CodeMirror 6 و پیش‌نمایش زنده' },
          { label: 'تخته بصری Canvas', url: 'assets/screenshots/scriptor/canvas.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/canvas.png', alt: 'تخته فضایی بی‌نهایت Canvas در اسکریپتور برای چیدمان دیداری افکار و یادداشت‌ها' },
          { label: 'پل کارگزار MCP', url: 'assets/screenshots/scriptor/mcp-panel.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/mcp-panel.png', alt: 'پنل مدیریت ابزارها و کارگزارهای هوش مصنوعی بر پایه پروتکل کانتکست مدل (MCP)' },
          { label: 'گراف سه‌بعدی دانش', url: 'assets/screenshots/scriptor/knowledge-workbench.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/knowledge-workbench.png', alt: 'میز کار دانش با گراف سه‌بعدی تعاملی و واکاوی ارتباطات و بک‌لینک‌ها' }
        ],
        visual: 'SC'
      },
      {
        id: 'huntx',
        number: '02',
        kind: 'پایپ‌لاین داده / ابزار دورسنجی و ارزیابی شبکه',
        name: 'هانت‌ایکس (HUNTX / GatherX)',
        subtitle: 'سیستم دورسنجی شبکه، ارزیابی کمی پروکسی و انتشار خودکار داده',
        description: 'سیستم چندمرحله‌ای جمع‌آوری و تحلیل تلمتری شبکه. پایتون وظیفه دریافت منابع تاییدشده، ذخیره چک‌پوینت‌های وضعیتی و مدیریت فیدها را انجام می‌دهد؛ موتور Go (با نام huntx-engine) پردازش با کارایی بالا، رمزگشایی پروتکل‌ها، ارزیابی تاخیر و TLS، و مسیریابی جغرافیایی را بر عهده دارد؛ خروجی‌های اعتبارسنجی‌شده هر دو ساعت از طریق گیت‌هاب اکشنز روی داشبورد استاتیک منتشر می‌شوند.',
        bullets: [
          'پایپ‌لاین چندمرحله‌ای داده با ثبت چک‌پوینت و حذف داده‌های تکراری با الگوریتم SHA-256 بر پایه محتوا.\u200F',
          'موتور پرسرعت Go برای رمزگشایی و تحلیل پروتکل‌های VLESS Reality، VMess، Trojan TLS، Shadowsocks و Hysteria2.\u200F',
          'مسیریابی بر پایه GeoIP/CIDR، تحلیل نوسان پینگ (Jitter)، ارزیابی تاخیر و ترکیب خودکار مسیرهای جایگزین.\u200F',
          'انتشار خودکار دوره‌ای هر ۲ ساعت با GitHub Actions به همراه مانیفست‌های انتشار قطعی و امضاشده.\u200F'
        ],
        specs: [
          { label: 'لایه داده', value: 'پایپ‌لاین Python + پایگاه داده SQLite' },
          { label: 'موتور شبکه', value: 'موتور Go (تحلیل بسته‌ها و هندشیک TLS)' },
          { label: 'پروتکل‌ها', value: 'VLESS Reality, VMess, Trojan, Hy2' },
          { label: 'انتشار', value: 'چرخه ۲ ساعته GitHub Actions + GitHub Pages' }
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
          { metric: 'توان پردازش و تحلیل', value: 'بیش از ۱۲,۰۰۰ آیتم در ثانیه' },
          { metric: 'بررسی هندشیک TLS', value: 'کمتر از ۴۰ میلی‌ثانیه' },
          { metric: 'چرخه دریافت داده', value: 'خودکار هر ۲ ساعت' }
        ],
        stack: ['Python', 'Go', 'SQLite', 'JavaScript', 'GitHub Actions', 'Data Pipelines', 'C4 Architecture'],
        href: 'https://github.com/AmirrezaFarnamTaheri/HUNTX',
        cta: 'مشاهده مخزن هانت‌ایکس',
        image: 'assets/screenshots/huntx/huntx-architecture.png',
        fallbackImage: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/HUNTX/main/docs/assets/images/huntx-arch-v2.png',
        imageAlt: 'معماری تعاملی C4 پلتفرم هانت‌ایکس و پایپ‌لاین انتشار',
        windowTitle: 'هانت‌ایکس · دورسنجی پروکسی و موتور پردازش گره‌ها',
        visual: 'HX'
      },
      {
        id: 'wincare',
        number: '03',
        kind: 'ابزار دسکتاپ / پلتفرم پایش و عیب‌یابی ویندوز',
        name: 'وین‌کر (WinCare)',
        subtitle: 'پلتفرم عملیات سیستمی، پایش پردازش‌ها و عیب‌یابی خودکار ویندوز',
        description: 'پلتفرم مدیریت عملیات و خودترمیمی ویندوز بر پایه خط‌مشی‌های سیستمی. تلفیقی از رابط کاربری بومی WinUI 3 در دسکتاپ، واسط ترمینالی Spectre.Console و REST API در کنار هسته بومی با زبان Rust، سی‌شارپ و ONNX Runtime برای سنجش تلمتری محلی سیستم و بازیابی خودکار.',
        bullets: [
          'معماری هیبریدی شامل رابط کاربری دسکتاپ WinUI 3 در .NET 8 و هسته بومی فوق‌سریع به زبان Rust.\u200F',
          'استنتاج هوشمند محلی با موتور ONNX Runtime و شتاب‌دهی سخت‌افزاری DirectML جهت تشخیص ناهنجاری‌های سیستم.\u200F',
          'جداسازی و ایزولاسیون پردازش‌ها با Windows Job Objects، مانیتورینگ تلمتری و نگهداری سیستمی منطبق بر سیاست‌ها.\u200F',
          'رابط ترمینالی غنی با Spectre.Console در کنار مرکز کنترل گرافیکی WinUI 3.\u200F'
        ],
        specs: [
          { label: 'رابط دسکتاپ', value: '.NET 8 + WinUI 3 + Spectre.Console' },
          { label: 'هسته اصلی', value: 'کتابخانه بومی Rust 2024 (DLL)' },
          { label: 'استنتاج هوشمند', value: 'ONNX Runtime + شتاب‌دهی DirectML' },
          { label: 'حکمرانی سیستمی', value: 'Windows Job Objects و سیاست‌های امنیتی' }
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
          { metric: 'پویش عیب‌یابی', value: 'کمتر از ۲۵۰ میلی‌ثانیه' },
          { metric: 'استنتاج محلی ONNX', value: 'کمتر از ۱۵ میلی‌ثانیه' },
          { metric: 'ایزولاسیون پردازش‌ها', value: 'سقف حافظه سخت‌گیرانه' }
        ],
        stack: ['WinUI 3', '.NET 8', 'C#', 'Rust 2024', 'ONNX Runtime', 'DirectML'],
        href: 'https://github.com/AmirrezaFarnamTaheri/WinCare',
        cta: 'مشاهده مخزن وین‌کر',
        image: 'assets/screenshots/wincare/runtime-dashboard.png',
        fallbackImage: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/runtime-dashboard.png',
        imageAlt: 'داشبورد دسکتاپ بومی WinUI 3 در وین‌کر با وضعیت سیستم و ابزارهای عیب‌یابی',
        windowTitle: 'وین‌کر · پلتفرم مدیریت عملیات دسکتاپ',
        screenshots: [
          { label: 'داشبورد اجرایی', url: 'assets/screenshots/wincare/runtime-dashboard.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/runtime-dashboard.png', alt: 'رابط کاربری واقعی WinUI 3 در زمان اجرا با پایش بلادرنگ منابع سیستم' },
          { label: 'پویش سلامت', url: 'assets/screenshots/wincare/runtime-checkup.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/runtime-checkup.png', alt: 'صفحه بررسی وضعیت سلامت سیستم و پیشنهادات رفع مشکل پیش از اعمال' },
          { label: 'ترمینال متنی', url: 'assets/screenshots/wincare/tui-preview.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/tui-preview.png', alt: 'واسط تعاملی خط فرمان بر پایه Spectre.Console با جداسازی پردازش‌ها' },
          { label: 'کاتالوگ ابزارها', url: 'assets/screenshots/wincare/showcase-preview.png', fallbackUrl: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/showcase-preview.png', alt: 'نمایش کاتالوگ ابزارهای تشخیصی و تعمیرات ویندوز منطبق بر سیاست‌های امنیتی' }
        ],
        visual: 'WC'
      }
    ],
    coursework: [
      {
        course: 'اقتصادسنجی ۱',
        category: 'econometrics',
        score: '۱۹.۳ از ۲۰',
        scoreNumeric: 19.3,
        context: 'دوره کارشناسی ارشد · دانشکده اقتصاد و مالی، موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
        tools: ['Stata', 'LaTeX'],
        topics: ['رگرسیون خطی کلاسیک', 'نظریه مجانبی و رفتارهای حدی', 'آزمون فرضیه و استنتاج آماری', 'متغیرهای ابزاری (IV / 2SLS)\u200F', 'ریزداده‌های طرح آمارگیری نیروی کار (LFS)\u200F'],
        href: 'https://github.com/AmirrezaFarnamTaheri/Econometrics-I'
      },
      {
        course: 'اقتصادسنجی ۲ (اقتصادسنجی کاربردی)\u200F',
        category: 'econometrics',
        score: '۱۹.۰ از ۲۰',
        scoreNumeric: 19.0,
        context: 'دوره کارشناسی ارشد · دانشکده اقتصاد و مالی، موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
        tools: ['R', 'R Markdown'],
        topics: [
          'روش گشتاورهای تعمیم‌یافته (GMM)\u200F',
          'داده‌های تابلویی و اثرات ثابت (Panel Data)\u200F',
          'تفاضل در تفاضل‌ها (DiD و DiD ترکیبی)\u200F',
          'طرح ناپیوستگی در رگرسیون (RDD)\u200F',
          'تطابق نمره تمایل (PSM)\u200F',
          'متغیرهای ابزاری (IV / 2SLS)\u200F',
          'ریزداده‌های هزینه و درآمد خانوار (HEIS) و طرح نیروی کار (LFS)\u200F'
        ],
        href: 'https://github.com/AmirrezaFarnamTaheri/Metric-II-Homeworks'
      },
      {
        course: 'اقتصاد کلان ۱',
        category: 'econometrics',
        score: '۱۹.۰ از ۲۰',
        scoreNumeric: 19.0,
        context: 'دوره کارشناسی ارشد · دانشکده اقتصاد و مالی، موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
        tools: ['Python', 'MATLAB', 'Dynare', 'LaTeX'],
        topics: [
          'شبیه‌سازی ادوار تجاری تصادفی (RBC)\u200F',
          'پول و دولت در چارچوب مدل‌های RBC\u200F',
          'مدل‌های تعادلی جستجو و تطابق نیروی کار (مدل‌های McCall و DMP)\u200F',
          'مدل‌های رشد نئوکلاسیک و رشد درون‌زا',
          'برنامه‌ریزی پویا و معادلات اویلر'
        ],
        href: 'https://github.com/AmirrezaFarnamTaheri/Macroeconomics-I'
      },
      {
        course: 'یادگیری ماشین',
        category: 'ai',
        score: '۱۸.۵ از ۲۰',
        scoreNumeric: 18.5,
        context: 'دوره کارشناسی ارشد · دانشکده علم داده، موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
        tools: ['Python', 'scikit-learn', 'NumPy', 'Pandas'],
        topics: [
          'یادگیری با‌نظارت و روش‌های منظم‌سازی',
          'ماشین‌های بردار پشتیبان (SVM) و روش‌های هسته (Kernel Methods)\u200F',
          'مدل‌های ترکیبی مبتنی بر درخت (جنگل تصادفی و گرادیان بوستینگ)\u200F',
          'تحلیل و پیش‌بینی سری‌های زمانی',
          'خوشه‌بندی و روش‌های کاهش ابعاد (PCA)\u200F',
          'اعتبارسنجی متقاطع و ارزیابی تعمیم‌پذیری مدل'
        ],
        href: 'https://github.com/AmirrezaFarnamTaheri/Machine-Learning'
      },
      {
        course: 'شبکه‌های عصبی و یادگیری عمیق',
        category: 'ai',
        score: '۱۷.۰ از ۲۰',
        scoreNumeric: 17.0,
        context: 'دوره کارشناسی ارشد · دانشکده علم داده، موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
        tools: ['Python', 'PyTorch', 'Transformers', 'LoRA'],
        topics: [
          'الگوریتم پس‌انتشار خطا در پرسپترون چندلایه (MLP) و الگوریتم‌های بهینه‌سازی',
          'معماری شبکه‌های عصبی پیچشی (CNN)\u200F',
          'مدل‌سازی توالی‌ها و داده‌های متوالی (RNN, GRU, BiLSTM)\u200F',
          'معماری ترنسفورمرها و مکانیزم خود‌توجهی (Self-Attention)\u200F',
          'یادگیری تقویتی عمیق (الگوریتم DQN و گرادیان خط‌مشی Policy Gradient)\u200F',
          'تنظیم دقیق دستورالعملی با روش LoRA و یادگیری انتقالی'
        ],
        href: 'https://github.com/AmirrezaFarnamTaheri/Deep-Learning-2025'
      },
      {
        course: 'دروس منتخب کارشناسی ارشد',
        subject: 'دروس منتخب کارشناسی ارشد',
        category: 'econometrics math',
        isConsolidated: true,
        score: '۲۰.۰ · ۱۹.۳ · ۱۹.۰ · ۱۸.۵ · ۱۸.۱',
        cells: [
          { name: 'اقتصاد خرد ۲ (نظریه بازی‌ها)', score: '۲۰.۰ از ۲۰', scoreNumeric: 20.0 },
          { name: 'اقتصاد کلان ۲', score: '۱۹.۰ از ۲۰', scoreNumeric: 19.0, tool: 'Python · MATLAB · LaTeX', tools: ['Python', 'MATLAB', 'LaTeX'] },
          { name: 'ریاضیات برای اقتصاددانان', score: '۱۹.۳ از ۲۰', scoreNumeric: 19.3, tool: 'LaTeX', tools: ['LaTeX'] },
          { name: 'نظریه قراردادها', score: '۱۸.۵ از ۲۰', scoreNumeric: 18.5 },
          { name: 'اقتصاد خرد ۱', score: '۱۸.۱ از ۲۰', scoreNumeric: 18.1, tool: 'LaTeX', tools: ['LaTeX'] }
        ]
      },
      {
        course: 'دروس منتخب دوره کارشناسی',
        subject: 'دروس منتخب دوره کارشناسی',
        category: 'econometrics math',
        isConsolidated: true,
        score: '۲۰.۰ · ۲۰.۰ · ۲۰.۰ · ۱۹.۵ · ۱۷.۶ · ۱۷.۰ · ۱۶.۵',
        cells: [
          { name: 'اقتصادسنجی (دوره فرعی)', score: '۲۰.۰ از ۲۰', scoreNumeric: 20.0, tool: 'Stata', tools: ['Stata'] },
          { name: 'اقتصاد کلان (دوره فرعی)', score: '۲۰.۰ از ۲۰', scoreNumeric: 20.0 },
          { name: 'نظریه بازی‌ها (دوره فرعی)', score: '۲۰.۰ از ۲۰', scoreNumeric: 20.0 },
          { name: 'حساب دیفرانسیل و انتگرال ۲', score: '۱۷.۶ از ۲۰', scoreNumeric: 17.6 },
          { name: 'اقتصاد مهندسی', score: '۱۷.۰ از ۲۰', scoreNumeric: 17.0 },
          { name: 'روش تحقیق و گزارش‌نویسی', score: '۱۹.۵ از ۲۰', scoreNumeric: 19.5, breakBefore: true },
          { name: 'محاسبات عددی', score: '۱۶.۵ از ۲۰', scoreNumeric: 16.5, tool: 'MATLAB · Python', tools: ['MATLAB', 'Python'] }
        ]
      }
    ],
    additional: [
      {
        name: 'اقتصاد محاسباتی و علم داده',
        description: 'مجموعه تخصصی و کد-محور در سطح تحصیلات تکمیلی شامل روش‌های عددی، برنامه‌ریزی پویا، برآورد ساختاری، تحلیل سری‌های زمانی و محاسبات شتاب‌یافته روی GPU با زبان پایتون.\u200F',
        stack: ['Python', 'NumPy', 'SciPy', 'Pandas', 'Numba', 'Dask', 'CuPy'],
        href: 'https://github.com/AmirrezaFarnamTaheri/Computational-Economics-and-Data-Science'
      },
      {
        name: 'نقدینگی، عدم تطابق مهارت و انتخاب شغل (پژوهش پایان‌نامه ارشد)\u200F',
        description: 'پژوهش اقتصاد کار در مقطع کارشناسی ارشد با راهنمایی دکتر علیرضا سپه‌سالاری در موسسه تحقیقات پیشرفته تهران (TeIAS). بهره‌گیری از ریزداده‌های NLSY79 و بردارهای مهارتی O*NET جهت تحلیل عدم تطابق شغلی، توزیع ثروت نقدی، انتقال‌های بین‌شغلی، رگرسیون ناپارامتریک و مدل‌های تعادلی جستجو با پس‌انداز.\u200F',
        stack: ['Python', 'Stata', 'R', 'NLSY79', 'O*NET', 'Causal Inference', 'Structural Search'],
        href: null
      },
      {
        name: 'یادداشت‌ها و کدهای تعاملی بهینه‌سازی محدب',
        description: 'جزوه محاسباتی و اسکریپت‌های اعتبارسنجی الگوریتم‌های بهینه‌سازی شامل جبر خطی کاربردی، مجموعه‌ها و توابع محدب، نظریه دوگانگی، شرایط بهینگی KKT و الگوریتم‌های نقطه درونی.\u200F',
        stack: ['Python', 'NumPy', 'SciPy', 'بهینه‌سازی ریاضی', 'Jupyter'],
        href: 'https://github.com/AmirrezaFarnamTaheri/Convex-Optimization'
      }
    ],
    education: [
      {
        degree: 'کارشناسی ارشد اقتصاد نظری',
        gpa: 'معدل کل: ۱۸.۷۲ از ۲۰',
        school: 'موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
        dates: 'شهریور ۱۴۰۲ — اکنون',
        note: 'استاد راهنمای پایان‌نامه: دکتر علیرضا سپه‌سالاری (عضو هیئت علمی موسسه تحقیقات پیشرفته تهران · teias.institute).\u200F'
      },
      {
        degree: 'دوره فرعی اقتصاد نظری',
        gpa: 'معدل کل: ۱۹.۲۰ از ۲۰',
        school: 'دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران)\u200F',
        dates: 'مهر ۱۳۹۷ — شهریور ۱۴۰۲',
        note: 'دوره فرعی همگام با مقطع کارشناسی مهندسی عمران. شامل دروس اقتصادسنجی (۲۰.۰)، اقتصاد کلان (۲۰.۰) و نظریه بازی‌ها (۲۰.۰).\u200F'
      },
      {
        degree: 'کارشناسی مهندسی عمران',
        gpa: 'معدل کل: ۱۵.۶۹ از ۲۰',
        school: 'دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران)\u200F',
        dates: 'مهر ۱۳۹۷ — شهریور ۱۴۰۲',
        note: ''
      }
    ]
  };

  // --- UI Strings Dictionary ---
  const UI_STRINGS = {
    en: {
      meta_title: 'Farnam Taheri — Data Scientist · AI Engineer · Software Engineer',
      meta_desc: 'Amirreza Farnam Taheri — Data Scientist, AI Engineer, and Software Engineer. Systems programming in Rust and Go, machine learning, and empirical econometrics.',
      resume_title: 'Resume — Farnam Taheri',
      lang_name: 'فارسی',
      lang_toggle_label: 'تغییر به فارسی (FA)',
      lang_indicator: 'FA',
      skip_link: 'Skip to main content',
      teias_student: 'TEIAS GRADUATE STUDENT',
      nav_research: 'Research',
      nav_coursework: 'Courseworks',
      nav_background: 'Background & Skills',
      nav_projects: 'Passion Projects',
      nav_computing: 'Computing',
      nav_resume: 'Resume',
      printable_resume: 'Printable Resume',
      search: 'Search',
      cmd_k: 'Ctrl+K',
      academic_systems_kicker: 'ACADEMIC & SYSTEMS PORTFOLIO',
      hero_btn_research: 'Research & Courseworks',
      hero_btn_projects: 'Passion Projects',
      hero_btn_cmd: 'Command Palette',
      hero_btn_resume: 'Printable Resume',
      overview: 'Overview',
      ledger_note: 'Open-source repositories and verified graduate academic records.',
      research_title: 'Research',
      research_desc: 'Master’s thesis research in labor economics, search-and-matching models, and empirical microdata.',
      coursework_title: 'Courseworks',
      coursework_desc: 'Graduate coursework repositories (Python, Stata), academic credentials, and quantitative foundations.',
      stat_teias_gpa: 'TeIAS Graduate GPA',
      stat_minor_gpa: 'AUT Economics Minor GPA',
      stat_rank: 'Nationwide Entrance Exam',
      stat_rank_val: 'Rank 27',
      filter_all: 'All Courses',
      filter_econometrics: 'Econometrics & Economics',
      filter_ai: 'AI & Machine Learning',
      filter_math: 'Math & Computation',
      search_placeholder: 'Search methods, tools, courses (e.g. GMM, LoRA, Python)...',
      legend_course: 'Course / Institution',
      legend_methods: 'Methods & Tools',
      legend_eval: 'Evaluation',
      credentials_kicker: 'CREDENTIALS & COMPETENCIES',
      credentials_title: 'Academic Background & Technical Skills',
      credentials_desc: 'Dual academic pedigree spanning quantitative economics, structural modeling, and engineering systems.',
      skills_and_tech: 'Skills & Technologies',
      skills_econometrics: 'Econometrics & Modeling',
      skills_datascience: 'Data Science / Data Engineering',
      skills_ml: 'Machine Learning & AI',
      skills_systems: 'Systems & Engineering',
      skills_econometrics_content: 'Stata · Python · R · Dynare / MATLAB · LaTeX · Causal Inference · GMM · Synthetic DiD · Panel Econometrics · IV / 2SLS',
      skills_datascience_content: 'Survey Microdata (NLSY79, O*NET, HEIS, LFS) · SQL · ETL Pipelines · Pandas · NumPy · SciPy · Data Cleaning & Imputation · Nonparametric Smoothing',
      skills_ml_content: 'PyTorch · TensorFlow · Transformers · LoRA · Reinforcement Learning (DQN) · Time-Series & Forecasting · CNNs · GRU / BiLSTM · scikit-learn · AI Agents / Agentic Coding',
      skills_systems_content: 'Rust (2024) · Go · TypeScript · HTML / JavaScript · React 19 · Tauri 2 · SQLite WAL + FTS5 · Docker · Git · GitHub · Linux · CI/CD',
      projects_title: 'Passion Projects',
      projects_desc: 'Desktop applications, developer utilities, and network telemetry engines developed out of deep technical curiosity.',
      computing_title: 'Scientific Computing & Research',
      computing_desc: 'Numerical optimization, GPU computing in Python, and labor economics research.',
      contact_kicker: 'Contact',
      contact_title: 'Contact & Profiles',
      footer_bio: 'Amirreza “Farnam” Taheri — Portfolio & Curriculum Vitae',
      location_tag: 'Tehran, Iran',
      back_to_top: 'Top',
      thesis_kicker: 'MASTER’S THESIS RESEARCH',
      thesis_methods_title: 'METHODOLOGICAL FRAMEWORK:',
      thesis_data_label: 'DATA:',
      thesis_stack_label: 'STACK:',
      thesis_arch_header: 'MODEL ARCHITECTURE',
      thesis_research_note: 'Continuous-time Bellman equations with asset accumulation, discrete choice, and Simulated Method of Moments (SMM).',
      supervised_by: 'Supervised by',
      inspect_arch: 'INSPECT ARCHITECTURE',
      open_repo: 'Open Repository',
      private_repo: 'Private Repository',
      research_archive: 'Research Archive',
      copy: 'Copy',
      copied: 'Copied',
      modal_arch: 'System Architecture',
      modal_bench: 'Benchmarks & Specifications',
      modal_highlights: 'Key Highlights',
      modal_fullscreen: 'Fullscreen',
      modal_github_source: 'GitHub Source',
      modal_open_repo: 'Open Repository',
      contact_email_label: 'Email',
      contact_github_label: 'GitHub Profile',
      contact_linkedin_label: 'LinkedIn',
      repo_label: 'Repository',
      cmd_placeholder: 'Search projects, coursework, actions...',
      cmd_nav_hint: 'Use ↑ ↓ to navigate',
      cmd_select_hint: '↵ to select',
      cmd_close_hint: 'ESC to close',
      cmd_no_results: 'No matching commands',
      // Resume specific
      resume_back: 'Back to Portfolio',
      resume_print: 'Print / Save PDF',
      resume_profile_summary: 'Profile Summary',
      resume_thesis_title: 'Master’s Thesis Research',
      resume_coursework_title: 'Graduate & Minor Coursework',
      resume_projects_title: 'Passion Projects',
      resume_core_stack: 'Core Technical Stack',
      resume_edu_honors: 'Education & Honors',
      resume_thesis_badge: 'Master’s Thesis',
      resume_advisor_label: 'Advisor',
      resume_microdata_label: 'Microdata',
      resume_stack_label: 'Computational Stack',
      resume_project_stack_label: 'Stack',
      toast_lang_switched: 'Language switched to English',
      toast_singularity: 'Gravitational singularity initiated in loss manifold',
      toast_singularity_active: 'A singularity is already active on the manifold'
    },
    fa: {
      meta_title: 'فرنام طاهری — پژوهشگر اقتصاد کمی · دانشمند داده · یادگیری ماشین',
      meta_desc: 'امیررضا فرنام طاهری — دانشجوی ارشد اقتصاد در موسسه تحقیقات پیشرفته تهران (TeIAS). اقتصادسنجی تجربی، علم داده، مدل‌های جستجو و برنامه‌نویسی سیستمی.\u200F',
      resume_title: 'رزومه علمی و تخصصی — فرنام طاهری',
      lang_name: 'English',
      lang_toggle_label: 'Switch to English (EN)',
      lang_indicator: 'EN',
      skip_link: 'پرش به محتوای اصلی',
      teias_student: 'دانشجوی ارشد موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
      nav_research: 'پژوهش',
      nav_coursework: 'دروس و دوره‌ها',
      nav_background: 'سوابق و مهارت‌ها',
      nav_projects: 'پروژه‌ها',
      nav_computing: 'محاسبات علمی',
      nav_resume: 'رزومه',
      printable_resume: 'نسخه چاپی رزومه',
      search: 'جستجو',
      cmd_k: 'Ctrl+K',
      academic_systems_kicker: 'پرتفوی علمی، پژوهشی و مهندسی سیستم‌ها',
      hero_btn_research: 'پژوهش و دروس',
      hero_btn_projects: 'پروژه‌ها',
      hero_btn_cmd: 'جعبه ابزار دستورات',
      hero_btn_resume: 'نسخه چاپی رزومه',
      overview: 'نمای کلی',
      ledger_note: 'پروژه‌های متن‌باز و سوابق تحصیلی دوره کارشناسی ارشد.\u200F',
      research_title: 'پژوهش',
      research_desc: 'پژوهش پایان‌نامه ارشد در حوزه اقتصاد کار، مدل‌های تعادلی جستجو و تطابق و ریزداده‌های تجربی.\u200F',
      coursework_title: 'دروس و دوره‌ها',
      coursework_desc: 'پروژه‌های درسی کارشناسی ارشد (پایتون، استاتا)، تاییدیه‌های تحصیلی و مبانی کمی و آماری.\u200F',
      stat_teias_gpa: 'معدل کارشناسی ارشد TeIAS\u200F',
      stat_minor_gpa: 'معدل دوره فرعی اقتصاد (AUT)\u200F',
      stat_rank: 'رتبه',
      stat_rank_val: 'رتبه ۲۷',
      filter_all: 'همه دروس',
      filter_econometrics: 'اقتصادسنجی و اقتصاد',
      filter_ai: 'هوش مصنوعی و یادگیری ماشین',
      filter_math: 'ریاضیات و محاسبات',
      search_placeholder: 'جستجوی روش‌ها، ابزارها، دروس (مانند GMM، LoRA، پایتون)...',
      legend_course: 'عنوان درس / مؤسسه',
      legend_methods: 'روش‌ها و ابزارها',
      legend_eval: 'نمره و ارزیابی',
      credentials_kicker: 'مدارک و شایستگی‌های تخصصی',
      credentials_title: 'سوابق تحصیلی و مهارت‌های فنی',
      credentials_desc: 'پیشینه دوگانه آکادمیک در اقتصاد کمی، مدل‌سازی ساختاری و مهندسی سیستم‌ها.\u200F',
      skills_and_tech: 'مهارت‌ها و فناوری‌ها',
      skills_econometrics: 'اقتصادسنجی و مدل‌سازی کمی',
      skills_datascience: 'علم داده و مهندسی داده',
      skills_ml: 'یادگیری ماشین و هوش مصنوعی',
      skills_systems: 'سیستم‌ها و مهندسی نرم‌افزار',
      skills_econometrics_content: 'Stata · Python · R · Dynare / MATLAB · LaTeX · استنتاج علی (Causal Inference) · روش GMM · روش ترکیبی DiD · اقتصادسنجی تابلویی (Panel Data) · متغیرهای ابزاری (IV / 2SLS)\u200F',
      skills_datascience_content: 'ریزداده‌های پیمایشی (NLSY79, O*NET, HEIS, LFS) · زبان SQL · خط‌لوله‌های داده ETL · کتابخانه‌های Pandas, NumPy, SciPy · پاکسازی و درونیابی داده‌ها · هموارسازی ناپارامتری\u200F',
      skills_ml_content: 'PyTorch · TensorFlow · مدل‌های زبانی و ترنسفورمرها · تنظیم دقیق با LoRA · یادگیری تقویتی عمیق (DQN) · پیش‌بینی سری‌های زمانی · شبکه‌های CNN · مدل‌های GRU / BiLSTM · کتابخانه scikit-learn · عامل‌های هوشمند (AI Agents)\u200F',
      skills_systems_content: 'Rust (2024) · Go · TypeScript · HTML / JavaScript · React 19 · Tauri 2 · SQLite WAL + FTS5 · Docker · Git · GitHub · پایپ‌لاین‌های CI/CD\u200F',
      projects_title: 'پروژه‌ها',
      projects_desc: 'نرم‌افزارهای دسکتاپ، ابزارهای مهندسی و موتورهای دورسنجی شبکه با تکیه بر کاوش فنی عمیق.\u200F',
      computing_title: 'محاسبات علمی و پژوهشی',
      computing_desc: 'بهینه‌سازی عددی، محاسبات شتاب‌یافته روی پردازنده گرافیکی در پایتون و پژوهش‌های اقتصاد کار.\u200F',
      contact_kicker: 'ارتباط',
      contact_title: 'ارتباط و پروفایل‌ها',
      footer_bio: 'امیررضا «فرنام» طاهری — پورتفولیو و سوابق تحصیلی',
      location_tag: 'تهران، ایران',
      back_to_top: 'بالا',
      thesis_kicker: 'پژوهش پایان‌نامه کارشناسی ارشد',
      thesis_methods_title: 'چارچوب متدولوژی و روش‌شناسی:',
      thesis_data_label: 'داده‌ها:',
      thesis_stack_label: 'استک:',
      thesis_arch_header: 'معماری مدل ساختاری',
      thesis_research_note: 'معادلات بلمن زمان‌پیوسته با انباشت دارایی، انتخاب‌های گسسته و روش گشتاورهای شبیه‌سازی‌شده (SMM).\u200F',
      supervised_by: 'با راهنمایی',
      inspect_arch: 'بررسی معماری سیستم',
      open_repo: 'مشاهده مخزن در گیت‌هاب',
      private_repo: 'مخزن خصوصی',
      research_archive: 'آرشیو پژوهشی',
      copy: 'کپی',
      copied: 'کپی شد',
      modal_arch: 'معماری سیستم',
      modal_bench: 'سنجش کارایی و مشخصات فنی',
      modal_highlights: 'نکات برجسته و قابلیت‌های کلیدی',
      modal_fullscreen: 'تمام‌صفحه',
      modal_github_source: 'سورس گیت‌هاب',
      modal_open_repo: 'مشاهده مخزن در گیت‌هاب',
      contact_email_label: 'ایمیل',
      contact_github_label: 'پروفایل گیت‌هاب',
      contact_linkedin_label: 'پروفایل لینکدین',
      repo_label: 'مشاهده مخزن',
      cmd_placeholder: 'جستجوی پروژه‌ها، دروس، اقدامات...',
      cmd_nav_hint: 'استفاده از ↑ ↓ برای جابه‌جایی',
      cmd_select_hint: '↵ برای انتخاب',
      cmd_close_hint: 'ESC برای بستن',
      cmd_no_results: 'دستور یا موردی یافت نشد',
      // Resume specific
      resume_back: 'بازگشت به پورتفولیو',
      resume_print: 'چاپ / ذخیره PDF',
      resume_profile_summary: 'خلاصه سوابق علمی',
      resume_thesis_title: 'پژوهش پایان‌نامه کارشناسی ارشد',
      resume_coursework_title: 'دروس کارشناسی ارشد و دوره فرعی',
      resume_projects_title: 'پروژه‌ها',
      resume_core_stack: 'استک فنی و شایستگی‌های هسته',
      resume_edu_honors: 'سوابق تحصیلی و افتخارات',
      resume_thesis_badge: 'پایان‌نامه ارشد',
      resume_advisor_label: 'استاد راهنما',
      resume_microdata_label: 'ریزداده‌ها',
      resume_stack_label: 'استک محاسباتی',
      resume_project_stack_label: 'استک',
      toast_lang_switched: 'زبان به فارسی تغییر یافت',
      toast_singularity: 'تکینگی گرانشی (سیاه‌چاله) در خمینه تابع هزینه ایجاد شد',
      toast_singularity_active: 'در حال حاضر یک تکینگی در خمینه فعال است'
    }
  };

  // --- Language State & Management ---
  const STORAGE_KEY = 'portfolio_lang';
  let currentLang = 'en';

  function initLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'fa' || saved === 'en') {
        currentLang = saved;
      } else {
        const browserLang = (navigator.language || '').toLowerCase();
        if (browserLang.startsWith('fa')) {
          currentLang = 'fa';
        } else {
          currentLang = 'en';
        }
      }
    } catch (e) {
      currentLang = 'en';
    }
    applyLanguage(currentLang, false);
  }

  function applyLanguage(lang, triggerEvent = true) {
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    const isRTL = lang === 'fa';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

    // Update text for all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) {
        el.textContent = val;
      }
    });

    // Update placeholder for elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val) {
        el.setAttribute('placeholder', val);
      }
    });

    // Update document title if present
    if (document.querySelector('title')) {
      const titleKey = document.querySelector('title').getAttribute('data-i18n');
      if (titleKey && t(titleKey)) {
        document.title = t(titleKey);
      }
    }

    // Update language toggle buttons
    updateToggleButtons();

    if (triggerEvent) {
      window.dispatchEvent(new CustomEvent('portfolio:langchange', { detail: { lang, isRTL } }));
    }
  }

  function updateToggleButtons() {
    const isFa = currentLang === 'fa';
    const nextLangText = isFa ? 'EN' : 'FA';
    const ariaLabel = isFa ? 'Switch to English' : 'تغییر به زبان فارسی';
    
    // Main header button
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.innerHTML = `<span class="lang-code mono">${nextLangText}</span>`;
      toggleBtn.setAttribute('aria-label', ariaLabel);
      toggleBtn.setAttribute('title', ariaLabel);
    }

    const globeSvg = '<svg class="icon-svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>';

    // Mobile drawer button
    const mobileToggleBtn = document.getElementById('mobile-lang-toggle');
    if (mobileToggleBtn) {
      mobileToggleBtn.innerHTML = `${globeSvg} <span>${isFa ? 'English (EN)' : 'فارسی (FA)'}</span>`;
      mobileToggleBtn.setAttribute('aria-label', ariaLabel);
    }

    // Resume toolbar button
    const resumeToggleBtn = document.getElementById('resume-lang-toggle');
    if (resumeToggleBtn) {
      resumeToggleBtn.innerHTML = `${globeSvg} <span>${nextLangText}</span>`;
      resumeToggleBtn.setAttribute('aria-label', ariaLabel);
      resumeToggleBtn.setAttribute('title', ariaLabel);
    }
  }

  function t(key) {
    const dict = UI_STRINGS[currentLang] || UI_STRINGS.en;
    return dict[key] || (UI_STRINGS.en ? UI_STRINGS.en[key] : key) || key;
  }

  function getActiveData() {
    if (currentLang === 'fa') {
      return PORTFOLIO_DATA_FA;
    }
    return window.PORTFOLIO_DATA;
  }

  function toggleLanguage() {
    const next = currentLang === 'fa' ? 'en' : 'fa';
    applyLanguage(next, true);
    return next;
  }

  function setLanguage(lang) {
    if (lang === 'fa' || lang === 'en') {
      applyLanguage(lang, true);
    }
  }

  function getLanguage() {
    return currentLang;
  }

  // --- Export Public i18n API ---
  window.PORTFOLIO_DATA_FA = PORTFOLIO_DATA_FA;
  window.UI_STRINGS = UI_STRINGS;
  window.I18N = {
    getLanguage,
    setLanguage,
    toggleLanguage,
    getActiveData,
    t,
    applyLanguage
  };

  // Initialize immediately upon script execution
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }
})();
