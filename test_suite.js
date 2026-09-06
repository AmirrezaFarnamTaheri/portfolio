/**
 * Comprehensive Regression Test Suite for Farnam Taheri Portfolio & CV
 * Validates data schema, DOM landmarks, 3D manifold physics, print rules, and bilingual i18n.
 */
const fs = require('fs');
const vm = require('vm');

let failures = 0;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failures++;
  } else {
    console.log(`✓ PASS: ${message}`);
  }
}

console.log('=== RUNNING CONSOLIDATED REGRESSION SUITE ===\n');

// --------------------------------------------------------------------------
// 1. Validate data.js (Data Model & Schema Integrity)
// --------------------------------------------------------------------------
let d;
try {
  const dataCode = fs.readFileSync('data.js', 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(dataCode, sandbox);
  d = sandbox.window.PORTFOLIO_DATA;

  assert(d && typeof d === 'object', 'PORTFOLIO_DATA is exported to window');
  
  // Person identity & contact
  const p = d.person || {};
  assert(p.name && p.email && p.github && Array.isArray(p.roles), 'Person schema has name, email, github, and roles');
  assert(p.statement && p.statement.includes('TeIAS') && p.statement.includes('Sepahsalari'), 'Statement documents TeIAS graduate status and advisor');

  // Featured projects
  const projects = d.featured || d.featuredProjects || [];
  const projectIds = projects.map(x => x.id);
  const hasAllProjects = ['scriptor', 'huntx', 'wincare'].every(id => projectIds.includes(id));
  assert(projects.length === 3 && hasAllProjects, 'Featured projects contains exactly [scriptor, huntx, wincare]');
  
  const allProjectsValid = projects.every(proj => 
    proj.id && proj.name && proj.kind && Array.isArray(proj.bullets) && Array.isArray(proj.stack)
  );
  assert(allProjectsValid, 'Every featured project satisfies schema (id, name, kind, bullets, stack)');

  // Coursework records
  const courses = d.coursework || [];
  assert(Array.isArray(courses) && courses.length === 7, 'Coursework items consolidated to exactly 7 records');
  const allCoursesHaveScores = courses.every(c => c.score && (c.isConsolidated ? Array.isArray(c.cells) : typeof c.scoreNumeric === 'number'));
  assert(allCoursesHaveScores, 'All coursework records contain valid scores and structures');

  // Master's thesis & academic records
  assert(d.thesis && d.thesis.title && d.thesis.advisorUrl === 'https://www.sepahsalari.com/', 'Thesis data configured with verified advisor URL');
  assert(Array.isArray(d.education) && d.education.some(e => e.degree === 'M.Sc. in Economics'), 'Education records specify M.Sc. in Economics');

} catch (e) {
  assert(false, `data.js execution error: ${e.message}`);
}

// --------------------------------------------------------------------------
// 2. Validate index.html (DOM Landmarks & Meta Integrity)
// --------------------------------------------------------------------------
try {
  const html = fs.readFileSync('index.html', 'utf8');

  // Essential structural landmarks
  const expectedIDs = [
    'scroll-progress', 'theme-toggle', 'cmd-trigger', 'mobile-menu-btn',
    'mobile-drawer', 'hero-canvas', 'project-modal', 'modal-close-btn',
    'modal-project-title', 'thesis-spotlight', 'course-list', 'course-search',
    'cmd-dialog', 'cmd-input', 'cmd-results', 'back-to-top', 'toast-container',
    'modal-arch-iframe', 'screenshot-lightbox', 'lang-toggle'
  ];
  const missingIDs = expectedIDs.filter(id => !html.includes(`id="${id}"`));
  assert(missingIDs.length === 0, `All ${expectedIDs.length} required DOM landmarks exist in index.html`);

  // Document metadata & assets
  assert(html.includes('Geist') && html.includes('Vazirmatn'), 'index.html imports Geist and Vazirmatn typography');
  assert(html.includes('data.js') && html.includes('i18n.js') && html.includes('app.js'), 'index.html loads data.js, i18n.js, and app.js');
  assert(html.includes('property="og:image"') && fs.existsSync('og-card.png'), 'Social graph metadata and og-card.png are valid');
  assert(html.indexOf('id="coursework"') < html.indexOf('id="work"'), 'Coursework section precedes Software Systems section');

} catch (e) {
  assert(false, `index.html inspection error: ${e.message}`);
}

// --------------------------------------------------------------------------
// 3. Validate app.js & styles.css (Application Logic & 3D Loss Manifold)
// --------------------------------------------------------------------------
try {
  const appCode = fs.readFileSync('app.js', 'utf8');
  const stylesCss = fs.readFileSync('styles.css', 'utf8');

  // Core controllers
  const expectedFns = [
    'showToast', 'openProjectModal', 'renderCoursework', 'openCommandPalette',
    'initWebGLCanvas', 'initFallback2DCanvas', 'spawnProbe', 'spawnBlackhole',
    'bindScreenshotCatalogAndLightbox', 'openScreenshotLightbox'
  ];
  const missingFns = expectedFns.filter(fn => !appCode.includes(fn));
  assert(missingFns.length === 0, `app.js exposes core UI & WebGL controllers (${expectedFns.join(', ')})`);

  // Blackhole and 3D simulation constraints
  assert(
    appCode.includes('activeBlackhole') && 
    appCode.includes('clickStreakCount') && 
    appCode.includes('activeBlackhole.duration') && 
    appCode.includes('!activeBlackhole'),
    '3D loss manifold enforces single active blackhole state with gradual restoration'
  );

  // Critical CSS component rules
  const requiredCss = ['.course-repo-link', '.thesis-card', '.screenshot-lightbox', '.cell-tags-wrap', '.advisor-link', '.lang-toggle', 'html[dir="rtl"]'];
  const missingCss = requiredCss.filter(cls => !stylesCss.includes(cls));
  assert(missingCss.length === 0, `styles.css defines required components (${requiredCss.join(', ')})`);

} catch (e) {
  assert(false, `app.js / styles.css inspection error: ${e.message}`);
}

// --------------------------------------------------------------------------
// 4. Validate resume.html, resume.js & resume.css (Print & CV Hydration)
// --------------------------------------------------------------------------
try {
  const resumeHtml = fs.readFileSync('resume.html', 'utf8');
  const resumeJs = fs.readFileSync('resume.js', 'utf8');
  const resumeCss = fs.readFileSync('resume.css', 'utf8');

  const resumeIds = ['resume-name', 'resume-thesis', 'resume-projects', 'resume-courses', 'resume-education', 'resume-lang-toggle'];
  const missingResumeIds = resumeIds.filter(id => !resumeHtml.includes(`id="${id}"`));
  assert(missingResumeIds.length === 0, `resume.html contains essential anchors (${resumeIds.join(', ')})`);

  assert(
    resumeJs.includes('PORTFOLIO_DATA') && 
    resumeJs.includes('#resume-thesis') && 
    resumeJs.includes('portfolio:langchange'),
    'resume.js handles data hydration, thesis spotlight, and reactive language changes'
  );

  assert(
    resumeCss.includes('@media print') && 
    resumeCss.includes('break-inside: avoid') && 
    resumeCss.includes('html[dir="rtl"]'),
    'resume.css implements A4 print calibration, page break isolation, and RTL styling'
  );

} catch (e) {
  assert(false, `resume inspection error: ${e.message}`);
}

// --------------------------------------------------------------------------
// 5. Validate i18n.js (Bilingual Dictionary & Reactive Switching)
// --------------------------------------------------------------------------
try {
  const i18nCode = fs.readFileSync('i18n.js', 'utf8');
  assert(i18nCode.length > 5000, 'i18n.js exists with complete Persian/English translation dictionary');

  // Sandboxed validation of I18N API
  const storage = {};
  const mockLocalStorage = {
    getItem: (key) => storage[key] || null,
    setItem: (key, val) => { storage[key] = String(val); },
    removeItem: (key) => { delete storage[key]; }
  };
  const mockDocument = {
    readyState: 'complete',
    documentElement: { setAttribute: () => {}, removeAttribute: () => {} },
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    dispatchEvent: () => {}
  };

  const sandboxI18n = {
    window: { PORTFOLIO_DATA: d, dispatchEvent: () => {} },
    document: mockDocument,
    localStorage: mockLocalStorage,
    CustomEvent: function(name, opts) { this.name = name; this.opts = opts; }
  };
  sandboxI18n.window.window = sandboxI18n.window;
  sandboxI18n.window.document = mockDocument;
  sandboxI18n.window.localStorage = mockLocalStorage;

  vm.createContext(sandboxI18n);
  vm.runInContext(i18nCode, sandboxI18n);

  const faData = sandboxI18n.window.PORTFOLIO_DATA_FA;
  const uiStrings = sandboxI18n.window.UI_STRINGS;
  const i18nApi = sandboxI18n.window.I18N;

  assert(faData && faData.person && faData.person.name && faData.thesis && Array.isArray(faData.featured), 'PORTFOLIO_DATA_FA exports complete Persian schema');
  assert(uiStrings && uiStrings.en && uiStrings.fa && uiStrings.fa.nav_research, 'UI_STRINGS provides bidirectional localization dictionaries');

  // Test language switching & persistence
  i18nApi.setLanguage('fa');
  const faActive = i18nApi.getLanguage() === 'fa' && i18nApi.getActiveData() === faData && mockLocalStorage.getItem('portfolio_lang') === 'fa';
  assert(faActive, 'I18N API switches to Persian, updates active dataset, and persists to localStorage');

  i18nApi.setLanguage('en');
  const enActive = i18nApi.getLanguage() === 'en' && i18nApi.getActiveData() === d && mockLocalStorage.getItem('portfolio_lang') === 'en';
  assert(enActive, 'I18N API switches to English, restores active dataset, and persists to localStorage');

  // 6. Validate Double Icon Prevention & UI_STRINGS Cleanliness
  const keysToCheck = ['inspect_arch', 'open_repo', 'private_repo', 'research_archive', 'modal_fullscreen', 'modal_github_source', 'copied'];
  const glyphPattern = /^[\u2190-\u21FF\u2600-\u26FF\u2700-\u27BF\u2300-\u23FF\u25A0-\u25FF\u2B00-\u2BFF\uD83C-\uDBFF\uDC00-\uDFFF✓↗🔒⌗⎇↓↑⌘🖨←]/;
  const noLeadingGlyphsEn = keysToCheck.every(k => uiStrings.en[k] && !glyphPattern.test(uiStrings.en[k].trim()));
  const noLeadingGlyphsFa = keysToCheck.every(k => uiStrings.fa[k] && !glyphPattern.test(uiStrings.fa[k].trim()));
  assert(noLeadingGlyphsEn && noLeadingGlyphsFa, 'UI_STRINGS dictionary eliminates duplicate icon glyphs across languages');

  // 7. Validate TeIAS Institutional Accuracy & Webpage Links
  const indexHtmlContent = fs.readFileSync('index.html', 'utf8');
  const stylesCssContent = fs.readFileSync('styles.css', 'utf8');
  const teiasEnExact = d.person.institute === 'Tehran Institute for Advanced Studies (TeIAS)' && d.person.instituteUrl === 'https://teias.institute';
  const teiasFaExact = faData.person.institute.startsWith('موسسه تحقیقات پیشرفته تهران (TeIAS)') && faData.person.instituteUrl === 'https://teias.institute';
  const teiasBadgeLinked = indexHtmlContent.includes('href="https://teias.institute"') && indexHtmlContent.includes('class="status-badge"');
  assert(teiasEnExact && teiasFaExact && teiasBadgeLinked, 'TeIAS institutional naming and teias.institute webpage verified in data, i18n, and DOM badge');

  // 8. Validate RTL Typography & BiDi Isolation Rules
  const rtlLetterSpacingZero = stylesCssContent.includes('html[dir="rtl"] h1') && stylesCssContent.includes('letter-spacing: 0 !important;');
  const rtlBadgesIsolated = stylesCssContent.includes('html[dir="rtl"] .tag') && stylesCssContent.includes('unicode-bidi: isolate;');
  assert(rtlLetterSpacingZero && rtlBadgesIsolated, 'RTL layout neutralizes letter-spacing and isolates bidirectional code tokens');

  // 9. Validate Farsi Telemetry Rank Label
  const farsiRankTelemetry = faData.telemetry.find(t => t.label === 'رتبه');
  assert(farsiRankTelemetry && farsiRankTelemetry.value.includes('۲۷') && uiStrings.fa.stat_rank === 'رتبه', 'Farsi telemetry and stat strings use standard "رتبه" label');

  // 10. Validate Printable Resume Bluebox Removal for Consolidated Coursework
  const resumeJsContent = fs.readFileSync('resume.js', 'utf8');
  const noRedundantResumeScoreBadge = !resumeJsContent.includes('<span class="score badge">${c.score}</span>\n              </div>\n              <div class="resume-tags cell-grid"');
  assert(noRedundantResumeScoreBadge, 'Resume omits redundant consolidated course score badge in favor of cell pills');

  // 11. Validate HUNTX Showcase Configuration (Live Webpage & Architecture/Pipeline Images)
  const huntxEn = d.featured.find(p => p.id === 'huntx');
  const huntxFa = faData.featured.find(p => p.id === 'huntx');
  const huntxHasNoScreenshots = !huntxEn.screenshots && !huntxFa.screenshots;
  const huntxHasLiveShowcase = !!huntxEn.liveBrowserUrl && !!huntxFa.liveBrowserUrl;
  const huntxHasArchImages = !!huntxEn.architectureImage && !!huntxFa.architectureImage && !!huntxEn.pipelineImage;
  assert(huntxHasNoScreenshots && huntxHasLiveShowcase && huntxHasArchImages, 'HUNTX showcases live webpage in mini-browser and retains architecture/pipeline diagrams');

  // 12. Validate Absence of Emoji Icons in Templates and Scripts
  const filesToScan = ['index.html', 'resume.html', 'app.js', 'resume.js', 'i18n.js'];
  const emojiIconRegex = /[🌐🖨✉📞🔒📄📍]/;
  const emojiFree = filesToScan.every(f => !emojiIconRegex.test(fs.readFileSync(f, 'utf8')));
  assert(emojiFree, 'All UI emojis replaced with accessible inline SVG vector glyphs');

  // 13. Validate Blackhole Spawning Without Popup Toast
  const appJsContent = fs.readFileSync('app.js', 'utf8');
  const blackholeSpawnIdx = appJsContent.indexOf('function spawnBlackhole');
  const blackholeSpawnBlock = appJsContent.slice(blackholeSpawnIdx, blackholeSpawnIdx + 1200);
  assert(!blackholeSpawnBlock.includes('showToast'), '3D Singularity black hole spawns smoothly without popup toast notification');

  // 14. Validate Blackhole & Probe Descent Numerical Physics Stability
  const hasVelocityClamp = appJsContent.includes('MAX_PROBE_SPEED') && appJsContent.includes('Math.hypot(p.vx, p.vy)');
  const hasCoreDampening = appJsContent.includes('coreDamp') && appJsContent.includes('Math.tanh');
  const hasAccretionCapture = appJsContent.includes('captureRadius') && appJsContent.includes('p.swallowed = true');
  const hasZxyRingOrder = appJsContent.includes("iscoMesh.rotation.order = 'ZXY'") && appJsContent.includes("ringMesh.rotation.order = 'ZXY'");
  assert(
    hasVelocityClamp && hasCoreDampening && hasAccretionCapture && hasZxyRingOrder,
    '3D loss manifold numerical physics, vortex core damping, and event horizon capture verified'
  );

  // 15. Validate Persian Academic Specialization Nomenclature (اقتصاد نظری)
  const noLegacyOloomEqtesadi = !i18nCode.includes('علوم اقتصادی');
  const hasEqtesadNazariInRoles = faData.person.roles.includes('کارشناسی ارشد اقتصاد نظری');
  const hasEqtesadNazariInEducation = faData.education.some(e => e.degree === 'کارشناسی ارشد اقتصاد نظری');
  assert(
    noLegacyOloomEqtesadi && hasEqtesadNazariInRoles && hasEqtesadNazariInEducation,
    'Persian academic terminology standardized to "اقتصاد نظری" across roles, honors, and degrees'
  );

  // 16. Validate Extended Blackhole Lifespan, Rejuvenation & Einstein-Rosen Wormhole Portal
  const hasExtendedDuration = appJsContent.includes('duration: 24.0');
  const hasFeedingRejuvenation = appJsContent.includes('activeBlackhole.startTime += 1.5') && appJsContent.includes('activeBlackhole.absorbedCount');
  const hasWormholeTrigger = appJsContent.includes('activeBlackhole.absorbedCount >= 8') && appJsContent.includes('activeBlackhole.isWormhole = true');
  const hasWormholeThroat = appJsContent.includes('if (activeBlackhole.isWormhole)') && appJsContent.includes('Math.exp(-distSq * 0.35)');
  const hasWormholeThemeSupport = appJsContent.includes('if (activeBlackhole.isWormhole)') && appJsContent.includes('0xe0f2fe');
  assert(
    hasExtendedDuration && hasFeedingRejuvenation && hasWormholeTrigger && hasWormholeThroat && hasWormholeThemeSupport,
    'Blackhole lifespan (24s), probe absorption rejuvenation (+1.5s), 8-ball wormhole transformation, and throat curvature verified'
  );

} catch (e) {
  assert(false, `i18n validation error: ${e.message}`);
}

console.log(`\n=== SUITE COMPLETE: ${failures === 0 ? 'ALL PASSED' : failures + ' FAILED'} ===`);
process.exit(failures === 0 ? 0 : 1);
