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
      roles: ['کارشناسی ارشد اقتصاد نظری', 'مدل‌سازی ساختاری', 'اقتصادسنجی', 'یادگیری ماشین و یادگیری عمیق'],
      statement: 'دانشجوی کارشناسی ارشد اقتصاد نظری در موسسه تحقیقات پیشرفته تهران (TeIAS)؛ پژوهشگر حوزه اقتصاد کار، اقتصادسنجی و مدل‌های تعادلی ساختاری جستجو و تطابق تحت راهنمایی دکتر علیرضا سپه‌سالاری. تمرکز من بر مدل‌سازی ساختاری (Structural Modeling)، اقتصادسنجی و یادگیری ماشین و یادگیری عمیق با Python، Stata و R، در کنار طراحی و توسعه نرم‌افزارهای سیستمی با زبان‌های Rust، Go و TypeScript است.',
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
      { label: 'وضعیت', value: 'فعال (دانشجوی کارشناسی ارشد TeIAS)\u200F', status: 'live' },
      { label: 'رتبه', value: 'رتبه ۲۷ کشوری در کنکور کارشناسی ارشد (۱۴۰۲)\u200F' },
      { label: 'معدل کارشناسی ارشد', value: '۱۸.۷۲ از ۲۰ (TeIAS)\u200F' },
      { label: 'موضوع پایان‌نامه', value: 'عدم تطابق مهارت، نقدینگی و مدل‌های ساختاری جستجو' },
      { label: 'استک اصلی', value: 'Python · Stata · SQL · ML · DL · AI Agents · Rust · LaTeX' },
      { label: 'دوره فرعی اقتصاد', value: 'دوره فرعی اقتصاد دانشگاه صنعتی امیرکبیر (۱۹.۲۰ از ۲۰)\u200F' }
    ],
    proofLine: [
      'Python',
      'Stata',
      'SQL',
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
      'Dynare / MATLAB',
      'مدل‌سازی ساختاری (Structural Modeling)\u200F',
      'اقتصادسنجی (Econometrics)\u200F',
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
      title: 'نقدینگی، عدم تطابق مهارت و انتخاب شغل',
      subtitle: 'پژوهش پایان‌نامه کارشناسی ارشد · دانشکده اقتصاد و مالی، موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
      status: 'در حال انجام (پایان‌نامه کارشناسی ارشد)\u200F',
      advisor: 'دکتر علیرضا سپه‌سالاری',
      advisorUrl: 'https://www.sepahsalari.com/',
      institute: 'موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
      instituteUrl: 'https://teias.institute',
      abstract: 'چارچوب تعادلی جستجو و تطابق (Search-and-Matching) با لحاظ پس‌انداز احتیاطی نیروی کار، قیود نقدینگی و عدم تطابق چندبُعدی مهارت. این مدل تبیین می‌کند که چگونه کمبود دارایی نقدی و تنگنای مالی، جویندگان کار را ناچار به پذیرش فرصت‌های شغلی نامتناسب و زیربهینه کرده و پیامدهای ماندگار و فرساینده‌ای بر دستمزد و مسیر شغلی بر جای می‌گذارد.\u200F',
      methodology: [
        'حل معادلات بلمن در زمان پیوسته با انباشت درون‌زای دارایی و تعیین سیاست‌های بهینه دستمزد رزرو.\u200F',
        'محاسبات عددی از طریق تکرار تابع ارزش (VFI) و برنامه‌ریزی پویا در فضای حالت پیوسته.\u200F',
        'تحلیل تجربی و استخراج گشتاورهای ساختاری با ریزداده‌های NLSY79 و O*NET؛ در حین پردازش داده‌ها، مغایرت عناوین متغیرهای رسمی (W1382000 و W1391400) شناسایی و گزارش شد که به تأیید بایگان CHRR در دانشگاه ایالتی اوهایو رسید.\u200F'
      ],
      dataSources: ['NLSY79 (ریزداده‌های طولی جوانان آمریکا)\u200F', 'O*NET (پایگاه جامع اطلاعات مهارت‌های شغلی)\u200F', 'CPS (پیمایش جاری جمعیت آمریکا)\u200F'],
      tools: ['Python', 'Stata', 'R', 'NumPy / SciPy', 'برنامه‌ریزی پویا (Dynamic Programming)\u200F', 'LaTeX'],
      metrics: [
        { metric: 'هسته نظری', value: 'جستجوی تعادلی با پس‌انداز و عدم تطابق مهارت' },
        { metric: 'نمونه ریزداده', value: 'کوهورت طولی NLSY79' },
        { metric: 'عمق طبقه‌بندی شغلی', value: 'بیش از ۸۰۰ عنوان شغلی در O*NET' },
        { metric: 'روش محاسباتی', value: 'تکرار تابع ارزش (VFI) و روش SMM\u200F' }
      ]
    },
    honors: [
      {
        title: 'رتبه ۲۷ کشوری — آزمون سراسری (کنکور) کارشناسی ارشد اقتصاد نظری',
        year: '۱۴۰۲ (2023)\u200F',
        context: 'آزمون سراسری ورودی مقطع کارشناسی ارشد در رشته اقتصاد نظری (رتبه ۲۷ در میان داوطلبان کل کشور).\u200F'
      },
      {
        title: 'بورسیه تحصیلی بر اساس شایستگی علمی TeIAS\u200F',
        year: '۱۴۰۲ و ۱۴۰۴ (2023 & 2025)\u200F'
      }
    ],
    stackPillars: [],
    featured: [
      {
        id: 'scriptor',
        number: '01',
        kind: 'ابزار پژوهشی / محیط مدیریت دانش محلی',
        name: 'اسکریپتور (Scriptor)',
        subtitle: 'محیط کار محلی یادداشت‌برداری، نگارش علمی و گراف‌های تعاملی دانش',
        description: 'اسکریپتور یک نرم‌افزار دسکتاپ مدرن با معماری Tauri برای نگارش تخصصی و پژوهش‌های علمی است. در این سامانه، فایل‌های Markdown به‌عنوان منبع اصلی و محلی داده بر روی دیسک ذخیره می‌شوند تا حریم خصوصی و استقلال کامل داده‌ها حفظ شود. هسته بومی Rust مسئولیت نمایه‌سازی پرسرعت، جستجوی تمام‌متن با SQLite FTS5، اجرای زنجیره تبدیل فرمت اسناد با Pandoc و ارتباط امن میان‌پردازشی (IPC) را بر عهده دارد. رابط کاربری مدرن React 19 نیز امکاناتی نظیر پیش‌نمایش ارجاعات علمی، پیوندهای متقابل دوطرفه (Backlinks)، بوم نامحدود یادداشت‌ها (Canvas) و تعامل با مدل‌های هوش مصنوعی از طریق پروتکل کانتکست مدل (MCP) را فراهم می‌آورد.',
        bullets: [
          'معماری دسکتاپ بر پایه Tauri 2 با هسته بومی Rust 1.96 (نسخه ۲۰۲۴) و رندرر مدرن React 19 و TypeScript 6.\u200F',
          'نمایه‌سازی تمام‌متن پرسرعت با SQLite WAL + FTS5، سامانه فراخوانی RPC محلی با احراز هویت HMAC و ساختار تایپ مشترک ts-rs.\u200F',
          'پروفایل‌های خروجی قطعی و چندفرمت با پاندوک (شامل HTML، PDF، DOCX، LaTeX، ePub و اسلایدهای Reveal.js) و ابزار بصری رفع تعارض‌های گیت.\u200F',
          'مهندسی خودکار انتشار نرم‌افزار به همراه مانیفست CycloneDX SBOM، تاییدیه اصالت SHA-256، آزمون‌های جامع Playwright و ممیزی دسترس‌پذیری.\u200F'
        ],
        specs: [
          { label: 'معماری', value: 'Tauri 2 + Rust 1.96 + React 19' },
          { label: 'ذخیره‌سازی و جستجو', value: 'SQLite WAL + نمایه تمام‌متن FTS5' },
          { label: 'تبدیل اسناد', value: 'Pandoc (PDF/LaTeX/HTML/DOCX)' },
          { label: 'پروتکل‌ها', value: 'پروتکل MCP هوش مصنوعی + HMAC RPC' }
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
          { metric: 'مصرف حافظه رم', value: 'حدود ۴۲ مگابایت (پایه)' }
        ],
        stack: ['Rust', 'TypeScript', 'React 19', 'Tauri 2', 'SQLite FTS5', 'Pandoc', 'MCP', 'Git', 'CI/CD'],
        href: 'https://github.com/AmirrezaFarnamTaheri/Scriptor',
        cta: 'مشاهده مخزن اسکریپتور',
        image: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/workspace-dark.png',
        fallbackImage: 'assets/screenshots/scriptor/workspace-dark.png',
        imageAlt: 'محیط کار اسکریپتور شامل ویرایشگر متن، گراف دانش و پیش‌نمایش اسناد',
        windowTitle: 'اسکریپتور · محیط نگارش و گراف دانش',
        architectureHtmlUrl: 'architectures/scriptor.html?embed=1',
        architectureRepoUrl: 'https://github.com/AmirrezaFarnamTaheri/Scriptor/blob/main/docs/architecture.html',
        architectureDocUrl: 'https://github.com/AmirrezaFarnamTaheri/Scriptor/blob/main/docs/ARCHITECTURE.md',
        screenshots: [
          { label: 'محیط نگارش (تم تیره)', url: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/workspace-dark.png', fallbackUrl: 'assets/screenshots/scriptor/workspace-dark.png', alt: 'نمای تاریک اسکریپتور با ویرایشگر CodeMirror 6 و پیش‌نمایش فرمول‌های LaTeX' },
          { label: 'گراف سه‌بعدی دانش', url: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/knowledge-workbench.png', fallbackUrl: 'assets/screenshots/scriptor/knowledge-workbench.png', alt: 'میز کار بصری اسکریپتور همراه با گراف تعاملی ارتباط میان یادداشت‌ها و مراجع' },
          { label: 'تخته بصری Canvas', url: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/canvas.png', fallbackUrl: 'assets/screenshots/scriptor/canvas.png', alt: 'تخته فضایی بی‌نهایت جهت ترسیم و چیدمان ذهنی ارتباط مفاهیم و اسناد' },
          { label: 'پل کارگزار MCP', url: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/mcp-panel.png', fallbackUrl: 'assets/screenshots/scriptor/mcp-panel.png', alt: 'مدیریت و اتصال ابزارهای هوش مصنوعی بر بستر پروتکل Model Context Protocol' },
          { label: 'محیط نگارش (تم روشن)', url: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/Scriptor/main/docs/assets/screenshots/workspace-light.png', fallbackUrl: 'assets/screenshots/scriptor/workspace-light.png', alt: 'نمای روشن اسکریپتور با تم مینیمال و تایپوگرافی خوانا' }
        ],
        visual: 'SC'
      },
      {
        id: 'huntx',
        number: '02',
        kind: 'پایپ‌لاین داده / ابزار دورسنجی و ارزیابی شبکه',
        name: 'هانت‌ایکس (HUNTX / GatherX)',
        subtitle: 'سامانه گردآوری داده، سنجش بلادرنگ تاخیر و انتشار خودکار فیدهای تلمتری شبکه',
        description: 'سامانه‌ای چندمرحله‌ای برای پایش، گردآوری و تحلیل تلمتری شبکه در مقیاس بالا. لایه کنترلی پایتون وظیفه دریافت منابع، ذخیره‌سازی وضعیت و حذف داده‌های تکراری با اعتبارسنجی هش محتوا را بر عهده دارد. موتور اجرایی کامپایل‌شده به زبان Go (با عنوان huntx-engine) رمزگشایی پرسرعت پروتکل‌ها، ارزیابی هندشیک‌های TLS، تحلیل تاخیر و نوسان (Jitter)، و مسیریابی بهینه جغرافیایی را با توان پردازشی بالا انجام می‌دهد. در نهایت نتایج اعتبارسنجی‌شده در چرخه‌های منظم دو ساعته از طریق GitHub Actions بر روی داشبورد زنده وب منتشر می‌شوند.',
        bullets: [
          'پایپ‌لاین چندمرحله‌ای داده با فیلترینگ منابع، ذخیره‌سازی چک‌پوینت‌ها و حذف داده‌های تکراری با هش SHA-256.\u200F',
          'موتور پرسرعت Go با توان رمزگشایی و آزمون پروتکل‌های VLESS Reality، VMess، Trojan TLS، Shadowsocks و Hysteria2.\u200F',
          'مسیریابی هوشمند با GeoIP/CIDR، سنجش نوسان تاخیر (Jitter) و مسیریابی جایگزین بر مبنای کیفیت اتصال.\u200F',
          'انتشار خودکار منظم هر ۲ ساعت یک‌بار از طریق GitHub Actions به همراه مانیفست‌های معتبر و قطعی انتشار.\u200F'
        ],
        specs: [
          { label: 'لایه داده', value: 'پایپ‌لاین Python + پایگاه داده SQLite' },
          { label: 'موتور شبکه', value: 'موتور اجرایی Go (بررسی ترافیک و TLS)' },
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
          { metric: 'توان پردازش پروتکل‌ها', value: 'بیش از ۱۲,۰۰۰ گره در ثانیه' },
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
        kind: 'ابزار دسکتاپ / پلتفرم پایش و خودترمیمی ویندوز',
        name: 'وین‌کر (WinCare)',
        subtitle: 'جعبه‌ابزار جامع عملیات سیستمی، نظارت بر پردازش‌ها و خودترمیمی خودکار ویندوز',
        description: 'سامانه‌ای ساختاریافته و مبتنی بر سیاست‌های سیستمی جهت پایش پیوسته و خودترمیمی سیستم‌عامل ویندوز. این پروژه رابط کاربری مدرن WinUI 3 در دسکتاپ، واسط خط فرمان تعاملی Spectre.Console و سرویس REST را با هسته بومی Rust و موتور استنتاج ONNX Runtime ترکیب می‌کند تا با تحلیل بلادرنگ تلمتری مصرف منابع، اقدامات اصلاحی خودکار را همراه با قابلیت بازگردانی (Rollback) ایمن اجرا نماید.',
        bullets: [
          'معماری چندلایه و هیبریدی با رابط کاربری غنی WinUI 3 در دسکتاپ و هسته محلی بسیار سریع به زبان Rust.\u200F',
          'موتور استنتاج محلی با شتاب‌دهی سخت‌افزاری DirectML جهت شناسایی بلادرنگ ناهنجاری‌ها و گره‌های مصرف منابع.\u200F',
          'ایزولاسیون پردازش‌ها با Windows Job Objects، جمع‌آوری تلمتری سیستمی و نگهداری خودکار بر مبنای قوانین مشخص.\u200F',
          'واسط خط فرمان تعاملی و سبک با Spectre.Console در کنار مرکز کنترل گرافیکی مدرن ویندوز.\u200F'
        ],
        specs: [
          { label: 'رابط کاربری', value: 'WinUI 3 (.NET 8) + Spectre.Console' },
          { label: 'هسته سیستمی', value: 'کتابخانه محلی بومی Rust 2024 (DLL)' },
          { label: 'موتور استنتاج', value: 'ONNX Runtime + شتاب‌دهی DirectML' },
          { label: 'مدیریت پردازش‌ها', value: 'Windows Job Objects و سقف منابع' }
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
          { metric: 'پویش تشخیصی سلامت', value: 'کمتر از ۲۵۰ میلی‌ثانیه' },
          { metric: 'استنتاج مدل ONNX', value: 'کمتر از ۱۵ میلی‌ثانیه' },
          { metric: 'ایزولاسیون حافظه', value: 'اعمال سخت‌گیرانه سقف رم' }
        ],
        stack: ['WinUI 3', '.NET 8', 'C#', 'Rust 2024', 'ONNX Runtime', 'DirectML'],
        href: 'https://github.com/AmirrezaFarnamTaheri/WinCare',
        cta: 'مشاهده مخزن وین‌کر',
        image: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/runtime-dashboard.png',
        fallbackImage: 'assets/screenshots/wincare/runtime-dashboard.png',
        imageAlt: 'داشبورد دسکتاپ WinCare با نمایش تلمتری زنده، سلامت سیستم و وضعیت پردازش‌ها',
        windowTitle: 'وین‌کر · پلتفرم مدیریت عملیات و خودترمیمی دسکتاپ',
        screenshots: [
          { label: 'داشبورد بلادرنگ', url: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/runtime-dashboard.png', fallbackUrl: 'assets/screenshots/wincare/runtime-dashboard.png', alt: 'داشبورد دسکتاپ WinUI 3 در زمان اجرا با نمایش زنده منابع پردازشی و وضعیت حافظه' },
          { label: 'پویش و عیب‌یابی', url: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/runtime-checkup.png', fallbackUrl: 'assets/screenshots/wincare/runtime-checkup.png', alt: 'صفحه بررسی وضعیت سلامت سیستم و پیشنهادات اصلاحی پیش از اعمال' },
          { label: 'کاتالوگ ابزارها', url: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/showcase-preview.png', fallbackUrl: 'assets/screenshots/wincare/showcase-preview.png', alt: 'کاتالوگ ابزارهای تشخیصی و راهکارهای تعمیر و نگهداری ویندوز' },
          { label: 'معماری سامانه', url: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/architecture-preview.png', fallbackUrl: 'assets/screenshots/wincare/architecture-preview.png', alt: 'نمودار تعاملی جریان داده و معماری هسته بومی Rust و رابط کاربری WinUI 3' },
          { label: 'واسط ترمینالی TUI', url: 'https://raw.githubusercontent.com/AmirrezaFarnamTaheri/WinCare/master/docs/images/tui-preview.png', fallbackUrl: 'assets/screenshots/wincare/tui-preview.png', alt: 'واسط خط فرمان مبتنی بر Spectre.Console برای اجرای بدون محیط گرافیکی' }
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
        topics: ['رگرسیون خطی کلاسیک و خواص برآوردگر OLS', 'نظریه مجانبی و رفتارهای حدی (Asymptotic Theory)', 'آزمون فرضیه و استنتاج آماری', 'متغیرهای ابزاری و رگرسیون دومرحله‌ای (IV / 2SLS)\u200F', 'تحلیل ریزداده‌های طرح آمارگیری نیروی کار (LFS)\u200F'],
        href: 'https://github.com/AmirrezaFarnamTaheri/Econometrics-I'
      },
      {
        course: 'اقتصادسنجی ۲',
        category: 'econometrics',
        score: '۱۹.۰ از ۲۰',
        scoreNumeric: 19.0,
        context: 'دوره کارشناسی ارشد · دانشکده اقتصاد و مالی، موسسه تحقیقات پیشرفته تهران (TeIAS)\u200F',
        tools: ['R', 'R Markdown'],
        topics: [
          'روش گشتاورهای تعمیم‌یافته (GMM)\u200F',
          'داده‌های تابلویی و الگوهای اثرات ثابت (Panel Data)\u200F',
          'تفاضل در تفاضل‌ها (DiD و DiD ترکیبی)\u200F',
          'طرح ناپیوستگی در رگرسیون (RDD)\u200F',
          'تطابق بر اساس نمره تمایل (PSM)\u200F',
          'متغیرهای ابزاری (IV / 2SLS)\u200F',
          'تحلیل ریزداده‌های هزینه و درآمد خانوار (HEIS) و طرح نیروی کار (LFS)\u200F'
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
          'شبیه‌سازی ادوار تجاری تصادفی تعادل عمومی (RBC)\u200F',
          'پول، اصطکاک‌های مالی و نقش دولت در مدل‌های تعادل عمومی\u200F',
          'مدل‌های تعادلی جستجو و تطابق نیروی کار (مدل‌های McCall و DMP)\u200F',
          'نظریه‌های رشد نئوکلاسیک و مدل‌های رشد درون‌زا',
          'برنامه‌ریزی پویای بازگشتی و معادلات اویلر'
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
          'یادگیری بانظارت و روش‌های منظم‌سازی (Regularization)\u200F',
          'ماشین‌های بردار پشتیبان (SVM) و روش‌های هسته (Kernel Methods)\u200F',
          'روش‌های جمعی و یادگیری مبتنی بر درخت (جنگل تصادفی و گرادیان بوستینگ)\u200F',
          'تحلیل و پیش‌بینی سری‌های زمانی',
          'خوشه‌بندی و کاهش ابعاد با تحلیل مولفه‌های اصلی (PCA)\u200F',
          'اعتبارسنجی متقاطع و ارزیابی خطای تعمیم مدل'
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
          'الگوریتم پس‌انتشار خطا در پرسپترون چندلایه (MLP) و بهینه‌سازهای پیشرفته',
          'معماری شبکه‌های عصبی پیچشی (CNN)\u200F',
          'مدل‌سازی داده‌های متوالی و توالی‌ها (RNN, GRU, BiLSTM)\u200F',
          'معماری ترنسفورمرها و سازوکار خودتوجهی (Self-Attention)\u200F',
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
        description: 'مجموعه تخصصی و مدون در سطح تحصیلات تکمیلی شامل روش‌های عددی، برنامه‌ریزی پویا، برآورد مدل‌های ساختاری، تحلیل سری‌های زمانی و محاسبات شتاب‌یافته روی پردازنده گرافیکی (GPU) با زبان پایتون.\u200F',
        stack: ['Python', 'NumPy', 'SciPy', 'Pandas', 'Numba', 'Dask', 'CuPy'],
        href: 'https://github.com/AmirrezaFarnamTaheri/Computational-Economics-and-Data-Science'
      },
      {
        name: 'نقدینگی، عدم تطابق مهارت و انتخاب شغل (پژوهش پایان‌نامه کارشناسی ارشد)\u200F',
        description: 'پژوهش اقتصاد کار در مقطع کارشناسی ارشد با راهنمایی دکتر علیرضا سپه‌سالاری در موسسه تحقیقات پیشرفته تهران (TeIAS). بهره‌گیری از ریزداده‌های NLSY79 و ماتریس مهارت‌های شغلی O*NET جهت تحلیل عدم تطابق شغلی، توزیع ثروت و نقدینگی، جریان‌های انتقال بین‌شغلی، رگرسیون ناپارامتریک و مدل‌های تعادلی جستجو با پس‌انداز احتیاطی.\u200F',
        stack: ['Python', 'Stata', 'R', 'NLSY79', 'O*NET', 'مدل‌سازی ساختاری', 'برنامه‌ریزی پویا'],
        href: null
      },
      {
        name: 'یادداشت‌ها و کدهای تعاملی بهینه‌سازی محدب',
        description: 'مجموعه آموزشی و تحلیلی الگوریتم‌های بهینه‌سازی ریاضی شامل جبر خطی کاربردی، مجموعه‌ها و توابع محدب، نظریه دوگانگی، شرایط بهینگی KKT و پیاده‌سازی الگوریتم‌های نقطه درونی در پایتون.\u200F',
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
        note: 'دوره فرعی هم‌گام با مقطع کارشناسی مهندسی عمران؛ گذراندن دروس پایه: اقتصادسنجی (۲۰.۰)، اقتصاد کلان (۲۰.۰) و نظریه بازی‌ها (۲۰.۰).\u200F'
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
      skills_econometrics: 'Structural Modeling & Econometrics',
      skills_datascience: 'Data Science / Data Engineering',
      skills_ml: 'Machine Learning & Deep Learning',
      skills_systems: 'Systems & Engineering',
      skills_econometrics_content: 'Continuous-Time Bellman Equations · Dynamic Programming · Value Function Iteration (VFI) · SMM / Structural Estimation · Panel Data Econometrics · GMM · 2SLS / Instrumental Variables · Nonparametric Smoothing · Dynare / MATLAB · Stata · Python · R · LaTeX',
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
      meta_desc: 'امیررضا فرنام طاهری — دانش‌آموخته کارشناسی ارشد اقتصاد نظری در موسسه تحقیقات پیشرفته تهران (TeIAS). اقتصادسنجی تجربی، علم داده، مدل‌های جستجو و توسعه نرم‌افزار.',
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
      academic_systems_kicker: 'پورتفولیوی علمی، پژوهشی و مهندسی سیستم‌ها',
      hero_btn_research: 'پژوهش و دروس تخصصی',
      hero_btn_projects: 'پروژه‌های شاخص',
      hero_btn_cmd: 'پالت دستورات (Ctrl+K)',
      hero_btn_resume: 'نسخه چاپی رزومه',
      overview: 'نمای کلی',
      ledger_note: 'مخازن متن‌باز و سوابق علمی و تحصیلی کارشناسی ارشد.',
      research_title: 'پژوهش علمی',
      research_desc: 'پژوهش پایان‌نامه کارشناسی ارشد در حوزه اقتصاد کار، مدل‌های تعادلی جستجو و تطابق و تحلیل ریزداده‌ها.',
      coursework_title: 'دروس و دوره‌های تخصصی',
      coursework_desc: 'پروژه‌های درسی مقطع کارشناسی ارشد (پایتون، استاتا)، ریزنمرات و مبانی تحلیلی و آماری.',
      stat_teias_gpa: 'معدل کل TeIAS\u200F',
      stat_minor_gpa: 'معدل دوره فرعی اقتصاد (AUT)\u200F',
      stat_rank: 'رتبه',
      stat_rank_val: 'رتبه ۲۷',
      filter_all: 'همه دروس',
      filter_econometrics: 'اقتصادسنجی و اقتصاد',
      filter_ai: 'هوش مصنوعی و یادگیری ماشین',
      filter_math: 'ریاضیات و محاسبات',
      search_placeholder: 'جستجوی روش‌ها، ابزارها، دروس (مانند GMM، LoRA، پایتون)...',
      legend_course: 'عنوان درس / دانشگاه',
      legend_methods: 'روش‌ها و ابزارها',
      legend_eval: 'ارزیابی و نمره',
      credentials_kicker: 'شایستگی‌ها و مدارک تخصصی',
      credentials_title: 'سوابق تحصیلی و شایستگی‌های فنی',
      credentials_desc: 'پیشینه تحصیلی دوگانه در اقتصاد کمی، مدل‌سازی ساختاری ریاضی و مهندسی سیستم‌ها.',
      skills_and_tech: 'مهارت‌ها و فناوری‌ها',
      skills_econometrics: 'مدل‌سازی ساختاری و اقتصادسنجی',
      skills_datascience: 'علم داده و تحلیل داده‌های کلان',
      skills_ml: 'یادگیری ماشین و یادگیری عمیق',
      skills_systems: 'برنامه‌نویسی سیستمی و مهندسی نرم‌افزار',
      skills_econometrics_content: 'معادلات بلمن زمان‌پیوسته · برنامه‌ریزی پویا (Dynamic Programming) · تکرار تابع ارزش (VFI) · برآورد ساختاری به روش SMM · اقتصادسنجی داده‌های تابلویی (Panel Data) · روش گشتاورها (GMM) · متغیرهای ابزاری (2SLS / IV) · رگرسیون ناپارامتریک · ابزارهای Dynare / MATLAB · Stata · پایتون · R · LaTeX\u200F',
      skills_datascience_content: 'تحلیل ریزداده‌های پیمایشی (NLSY79, O*NET, HEIS, LFS) · زبان SQL · پایپ‌لاین‌های داده ETL · کتابخانه‌های Pandas, NumPy, SciPy · پالایش و پاکسازی داده‌ها\u200F',
      skills_ml_content: 'PyTorch · TensorFlow · مدل‌های زبانی بزرگ و ترنسفورمرها · تنظیم دقیق کارآمد با LoRA · یادگیری تقویتی عمیق (DQN) · پیش‌بینی سری‌های زمانی · شبکه‌های CNN · مدل‌های بازگشتی GRU / BiLSTM · یادگیری ماشین با scikit-learn · عامل‌های هوشمند (AI Agents)\u200F',
      skills_systems_content: 'Rust (2024) · Go · TypeScript · HTML / JavaScript · React 19 · Tauri 2 · SQLite WAL + FTS5 · Docker · Git · GitHub · پایپ‌لاین‌های CI/CD\u200F',
      projects_title: 'پروژه‌های نرم‌افزاری',
      projects_desc: 'توسعه نرم‌افزارهای دسکتاپ، ابزارهای تخصصی پژوهشی و موتورهای پردازش و دورسنجی شبکه.',
      computing_title: 'محاسبات علمی و کاربردی',
      computing_desc: 'بهینه‌سازی عددی، محاسبات موازی روی پردازنده گرافیکی در پایتون و پژوهش‌های پیشرفته اقتصاد کار.',
      contact_kicker: 'پل‌های ارتباطی',
      contact_title: 'ارتباط و شبکه‌های حرفه‌ای',
      footer_bio: 'امیررضا «فرنام» طاهری — پورتفولیوی علمی، پژوهشی و مهندسی',
      location_tag: 'تهران، ایران',
      back_to_top: 'بازگشت به بالا',
      thesis_kicker: 'پژوهش پایان‌نامه کارشناسی ارشد',
      thesis_methods_title: 'روش‌شناسی و چارچوب محاسباتی:',
      thesis_data_label: 'پایگاه‌های داده:',
      thesis_stack_label: 'ابزارهای محاسباتی:',
      thesis_arch_header: 'ساختار مدل تعادلی',
      thesis_research_note: 'معادلات بلمن زمان‌پیوسته با انباشت درون‌زای دارایی، تصمیم‌گیری گسسته و برآورد به روش گشتاورهای شبیه‌سازی‌شده (SMM).\u200F',
      supervised_by: 'استاد راهنما:',
      inspect_arch: 'بررسی معماری سیستم',
      open_repo: 'مشاهده مخزن گیت‌هاب',
      private_repo: 'مخزن محرمانه',
      research_archive: 'آرشیو مقالات و پژوهش‌ها',
      copy: 'کپی',
      copied: 'کپی شد',
      modal_arch: 'نمودار و معماری سیستم',
      modal_bench: 'سنجش کارایی و ویژگی‌های فنی',
      modal_highlights: 'قابلیت‌های کلیدی و نوآوری‌ها',
      modal_fullscreen: 'نمای تمام‌صفحه',
      modal_github_source: 'سورس‌کد در گیت‌هاب',
      modal_open_repo: 'مشاهده مخزن در گیت‌هاب',
      contact_email_label: 'پست الکترونیکی',
      contact_github_label: 'حساب گیت‌هاب',
      contact_linkedin_label: 'پروفایل لینکدین',
      repo_label: 'مخزن پروژه',
      cmd_placeholder: 'جستجوی پروژه‌ها، دروس، اقدامات...',
      cmd_nav_hint: 'کلیدهای ↑ ↓ برای پیمایش',
      cmd_select_hint: '↵ برای انتخاب',
      cmd_close_hint: 'ESC برای بستن',
      cmd_no_results: 'موردی یافت نشد',
      // Resume specific
      resume_back: 'بازگشت به پورتفولیو',
      resume_print: 'چاپ یا دریافت نسخه PDF',
      resume_profile_summary: 'خلاصه سوابق تحصیلی و تخصصی',
      resume_thesis_title: 'پژوهش پایان‌نامه کارشناسی ارشد',
      resume_coursework_title: 'دروس مقطع کارشناسی ارشد و دوره فرعی',
      resume_projects_title: 'پروژه‌های شاخص',
      resume_core_stack: 'مهارت‌های تخصصی و پشته فنی',
      resume_edu_honors: 'سوابق تحصیلی و افتخارات',
      resume_thesis_badge: 'پایان‌نامه کارشناسی ارشد',
      resume_advisor_label: 'استاد راهنما',
      resume_microdata_label: 'پایگاه‌های داده',
      resume_stack_label: 'ابزارهای محاسباتی',
      resume_project_stack_label: 'فناوری‌های کلیدی',
      toast_lang_switched: 'زبان به فارسی تغییر یافت',
      toast_singularity: 'تکینگی گرانشی در خمینه تابع هزینه ایجاد شد',
      toast_singularity_active: 'در حال حاضر یک تکینگی در خمینه در جریان است'
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
