/**
 * Amirreza "Farnam" Taheri — Portfolio Runtime
 * Client-side rendering, WebGL canvas, and interactive dialogs.
 */

(function () {
  'use strict';

  // --- Helper: HTML Escaping ---
  function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // --- Helper: Academic Entity Hyperlinking ---
  function linkAcademicEntities(text, options = {}) {
    if (!text) return '';
    const d = (window.I18N && window.I18N.getActiveData) ? window.I18N.getActiveData() : window.PORTFOLIO_DATA;
    const advUrl = options.advisorUrl || (d && d.thesis && d.thesis.advisorUrl) || (d && d.person && d.person.advisorUrl) || 'https://www.sepahsalari.com/';
    const instUrl = options.instituteUrl || (d && d.person && d.person.instituteUrl) || 'https://teias.institute';
    const advClass = options.advisorClass || 'advisor-link';
    const instClass = options.instituteClass || 'institute-link';

    let res = text.replace(
      /(?:Prof\. Alireza Sepahsalari|دکتر علیرضا سپه‌سالاری)/g,
      `<a href="${escapeHTML(advUrl)}" class="${advClass}" target="_blank" rel="noopener noreferrer">$&</a>`
    );

    res = res.replace(
      /(?:Tehran Institute for Advanced Studies \(TeIAS\)|Tehran Institute for Advanced Studies|\bTeIAS\b|موسسه تحقیقات پیشرفته تهران \(TeIAS\)[\u200E\u200F]?|موسسه تحقیقات پیشرفته تهران)/g,
      `<a href="${escapeHTML(instUrl)}" class="${instClass}" target="_blank" rel="noopener noreferrer">$&</a>`
    );

    return res;
  }
  window.linkAcademicEntities = linkAcademicEntities;

  // --- Vector SVG Icons ---
  const SVG_ICONS = {
    mail: `<svg class="icon-svg icon-mail" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
    phone: `<svg class="icon-svg icon-phone" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    lock: `<svg class="icon-svg icon-lock" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    file: `<svg class="icon-svg icon-file" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`
  };

  // --- Toast Notification Helper ---
  function showToast(message, duration = 2800) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="mono" style="color:var(--accent);">●</span> <span>${escapeHTML(message)}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease-out';
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }

  function bindClipboardButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const textToCopy = btn.getAttribute('data-clipboard');
        if (!textToCopy) return;

        try {
          await navigator.clipboard.writeText(textToCopy);
          const originalText = btn.innerHTML;
          btn.classList.add('copied');
          btn.innerHTML = `<span>✓</span> ${(window.I18N && window.I18N.t('copied')) || 'Copied'}`;
          showToast(`Copied: ${textToCopy}`);
          setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = originalText;
          }, 2200);
        } catch (err) {
          console.warn('Clipboard copy error:', err);
          showToast('Failed to copy. Please copy manually.');
        }
      });
    });
  }

  // --- Theme Management ---
  const storageKey = 'farnam_theme_preference';
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  function getPreferredTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☼' : '☾';
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
    if (typeof window.__updateCanvasTheme === 'function') {
      window.__updateCanvasTheme(theme === 'dark');
    }
  }

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(storageKey, next);
      applyTheme(next);
      showToast(`Switched to ${next.toUpperCase()} theme`);
    });
  }

  // --- Language Management Hooks ---
  const langToggleBtn = document.getElementById('lang-toggle');
  const mobileLangToggleBtn = document.getElementById('mobile-lang-toggle');

  function handleLangToggle() {
    if (window.I18N && typeof window.I18N.toggleLanguage === 'function') {
      const next = window.I18N.toggleLanguage();
      const toastMsg = window.I18N.t('toast_lang_switched');
      showToast(toastMsg || (next === 'fa' ? 'زبان به فارسی تغییر یافت' : 'Switched to English'));
    }
  }

  if (langToggleBtn) langToggleBtn.addEventListener('click', handleLangToggle);
  if (mobileLangToggleBtn) mobileLangToggleBtn.addEventListener('click', handleLangToggle);

  // --- Scroll Progress Bar ---
  const progressBar = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // --- Back to Top ---
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Mobile Drawer Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Hydrate Page Content from PORTFOLIO_DATA ---
  function hydrateDOM() {
    const d = (window.I18N && window.I18N.getActiveData) ? window.I18N.getActiveData() : window.PORTFOLIO_DATA;
    if (!d) return;

    // 1. Hero Roles & Statement
    const roleLine = document.getElementById('role-line');
    if (roleLine && d.person && d.person.roles) {
      roleLine.innerHTML = d.person.roles.map(r => `<span>${escapeHTML(r)}</span>`).join('');
    }

    const heroStatement = document.getElementById('hero-statement');
    if (heroStatement && d.person && d.person.statement) {
      heroStatement.innerHTML = linkAcademicEntities(escapeHTML(d.person.statement));
    }

    // 2. Hero Telemetry
    const heroTelemetry = document.getElementById('hero-telemetry');
    if (heroTelemetry && d.telemetry) {
      heroTelemetry.innerHTML = d.telemetry.map(t => `
        <div class="telemetry-row">
          <span class="telemetry-label">${escapeHTML(t.label)}</span>
          <span class="telemetry-val mono">
            ${t.status === 'live' ? '<span class="telemetry-dot" aria-hidden="true"></span>' : ''}
            ${linkAcademicEntities(escapeHTML(t.value))}
          </span>
        </div>
      `).join('');
    }

    // 3. Hero Contact
    const heroContact = document.getElementById('hero-contact');
    if (heroContact && d.person) {
      const copyLabel = (window.I18N && window.I18N.t('copy')) || 'Copy';
      heroContact.innerHTML = `
        <div class="contact-row">
          <a class="contact-link" href="mailto:${escapeHTML(d.person.email)}">
            ${SVG_ICONS.mail} <span>${escapeHTML(d.person.email)}</span>
          </a>
          <button type="button" class="copy-btn" data-clipboard="${escapeHTML(d.person.email)}" aria-label="Copy primary email">${escapeHTML(copyLabel)}</button>
        </div>
        ${d.person.phone ? `
          <div class="contact-row">
            <a class="contact-link" href="tel:${escapeHTML(d.person.phone)}">
              ${SVG_ICONS.phone} <span>${escapeHTML(d.person.phone)}</span>
            </a>
            <button type="button" class="copy-btn" data-clipboard="${escapeHTML(d.person.phone)}" aria-label="Copy phone number">${escapeHTML(copyLabel)}</button>
          </div>
        ` : ''}
        <div class="contact-row">
          <a class="contact-link" href="${escapeHTML(d.person.github)}" target="_blank" rel="noreferrer">
            <span>↗</span> ${escapeHTML(d.person.githubLabel)}
          </a>
          <span class="muted mono">${escapeHTML(d.person.location || 'Tehran / Remote')}</span>
        </div>
        ${d.person.linkedin ? `
          <div class="contact-row">
            <a class="contact-link" href="${escapeHTML(d.person.linkedin)}" target="_blank" rel="noreferrer">
              <span>↗</span> ${escapeHTML(d.person.linkedinLabel || 'LinkedIn')}
            </a>
            <span class="muted mono">LinkedIn</span>
          </div>
        ` : ''}
      `;
    }

    // 4. Proof Line Ticker
    const proofLine = document.getElementById('proof-line');
    if (proofLine && d.proofLine) {
      proofLine.innerHTML = d.proofLine.map(item => `<span>${escapeHTML(item)}</span>`).join('');
    }

    // 5. Featured Projects
    const featuredWork = document.getElementById('featured-work');
    const projects = d.featured || d.featuredProjects || [];
    if (featuredWork && projects.length > 0) {
      featuredWork.innerHTML = projects.map(p => {
        const title = p.name || p.title;
        const stack = p.stack || p.tags || [];
        const hasImage = Boolean(p.image);
        return `
          <article class="project-card" id="project-${escapeHTML(p.id)}">
            <div class="project-content">
              <div class="project-meta-top">
                <span class="project-number mono">${escapeHTML(p.number || '')}</span>
                <span class="project-kind mono">${escapeHTML(p.kind)}</span>
              </div>
              <div class="project-title-row">
                <h3>${escapeHTML(title)}</h3>
                ${p.score ? `<span class="score-chip mono">${escapeHTML(p.score)}</span>` : ''}
              </div>
              <div class="project-subtitle">${escapeHTML(p.subtitle)}</div>
              <p class="project-description">${escapeHTML(p.description)}</p>
              
              <div class="specs-matrix">
                ${(p.specs || []).map(s => `
                  <div class="spec-item">
                    <span class="spec-label mono">${escapeHTML(s.label)}</span>
                    <span class="spec-value">${escapeHTML(s.value)}</span>
                  </div>
                `).join('')}
              </div>

              <ul class="bullet-ledger">
                ${(p.bullets || []).map(b => `<li>${escapeHTML(b)}</li>`).join('')}
              </ul>

              <div class="tag-list">
                ${stack.map(t => `<span class="tag mono">${escapeHTML(t)}</span>`).join('')}
              </div>

              <div class="project-footer-action">
                <button type="button" class="inspect-btn" data-project-id="${escapeHTML(p.id)}" aria-label="Inspect ${escapeHTML(title)} architecture">
                  <span>⌗</span> ${escapeHTML((window.I18N && window.I18N.t('inspect_arch')) || 'INSPECT ARCHITECTURE')}
                </button>
                ${p.href ? `
                  <a class="project-link" href="${escapeHTML(p.href)}" target="_blank" rel="noreferrer">
                    <span>↗</span> ${escapeHTML(p.cta || ((window.I18N && window.I18N.t('open_repo')) || 'Open Repository'))}
                  </a>
                ` : `
                  <span class="project-link is-private">
                    ${SVG_ICONS.lock} <span>${escapeHTML(p.cta || ((window.I18N && window.I18N.t('private_repo')) || 'Private Repository'))}</span>
                  </span>
                `}
              </div>
            </div>

            <div class="project-visual">
              ${(p.screenshots && p.screenshots.length > 0) ? `
                <div class="app-window">
                  <div class="app-window-bar">
                    <div class="mini-browser-dots" aria-hidden="true">
                      <span class="dot dot-red"></span>
                      <span class="dot dot-yellow"></span>
                      <span class="dot dot-green"></span>
                    </div>
                    <div class="app-window-title mono">${escapeHTML(p.windowTitle || title)}</div>
                    ${p.liveBrowserUrl ? `
                      <a href="${escapeHTML(p.liveBrowserUrl)}" target="_blank" rel="noreferrer" class="mini-ext-btn app-window-live" title="Open live web demo" aria-label="Open live web demo">
                        <span class="mono" style="font-size: 10px; margin-right: 4px; font-weight: 600;">LIVE DEMO</span>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    ` : ''}
                    <button type="button" class="app-window-zoom" data-project-id="${escapeHTML(p.id)}" title="Open screenshot lightbox" aria-label="Open screenshot in lightbox">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </button>
                  </div>
                  ${(p.screenshots && p.screenshots.length > 1) ? `
                    <div class="screenshot-catalog-strip" role="tablist" aria-label="Screenshot Catalog">
                      ${p.screenshots.map((s, sIdx) => `
                        <button type="button" class="catalog-pill ${sIdx === 0 ? 'active' : ''}" data-project-id="${escapeHTML(p.id)}" data-idx="${sIdx}">
                          ${escapeHTML(s.label)}
                        </button>
                      `).join('')}
                      <div class="catalog-sweep-nav">
                        <button type="button" class="catalog-arrow prev" data-project-id="${escapeHTML(p.id)}" data-dir="-1" aria-label="Previous screenshot" title="Previous screenshot">‹</button>
                        <button type="button" class="catalog-arrow next" data-project-id="${escapeHTML(p.id)}" data-dir="1" aria-label="Next screenshot" title="Next screenshot">›</button>
                      </div>
                    </div>
                  ` : ''}
                  <div class="app-window-viewport">
                    <img id="img-${escapeHTML(p.id)}" class="clickable-screenshot" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.imageAlt || title)}" data-project-id="${escapeHTML(p.id)}" data-current-idx="0" loading="lazy" title="Click to enlarge" onerror="if(this.dataset.fallback &amp;&amp; this.src!==this.dataset.fallback){this.src=this.dataset.fallback;}" data-fallback="${escapeHTML(p.screenshots && p.screenshots[0] ? p.screenshots[0].fallbackUrl : '')}" />
                    ${(p.screenshots && p.screenshots.length > 1) ? `
                      <button type="button" class="viewport-nav-btn prev" data-project-id="${escapeHTML(p.id)}" data-dir="-1" aria-label="Previous view" title="Previous view">‹</button>
                      <button type="button" class="viewport-nav-btn next" data-project-id="${escapeHTML(p.id)}" data-dir="1" aria-label="Next view" title="Next view">›</button>
                    ` : ''}
                  </div>
                </div>
              ` : (p.liveBrowserUrl ? `
                <div class="mini-browser">
                  <div class="mini-browser-bar">
                    <div class="mini-browser-dots" aria-hidden="true">
                      <span class="dot dot-red"></span>
                      <span class="dot dot-yellow"></span>
                      <span class="dot dot-green"></span>
                    </div>
                    <div class="mini-browser-actions">
                      <span class="mini-nav-arrow disabled" aria-hidden="true">‹</span>
                      <span class="mini-nav-arrow disabled" aria-hidden="true">›</span>
                      <button type="button" class="mini-reload-btn" data-target-frame="frame-${escapeHTML(p.id)}" aria-label="Reload ${escapeHTML(title)} preview" title="Reload live preview">↻</button>
                    </div>
                    <div class="mini-browser-url-bar">
                      <svg class="mini-lock-icon" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <span class="mini-url-text mono">${escapeHTML(p.browserDisplayUrl || p.liveBrowserUrl)}</span>
                      <a href="${escapeHTML(p.liveBrowserUrl)}" target="_blank" rel="noreferrer" class="mini-ext-btn" title="Open live site in new tab" aria-label="Open ${escapeHTML(title)} in new tab">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="mini-browser-viewport">
                    <iframe id="frame-${escapeHTML(p.id)}" class="mini-browser-iframe" src="${escapeHTML(p.liveBrowserUrl)}" title="${escapeHTML(title)} Live Webpage" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups"></iframe>
                  </div>
                </div>
              ` : (hasImage ? `
                <div class="app-window">
                  <div class="app-window-bar">
                    <div class="mini-browser-dots" aria-hidden="true">
                      <span class="dot dot-red"></span>
                      <span class="dot dot-yellow"></span>
                      <span class="dot dot-green"></span>
                    </div>
                    <div class="app-window-title mono">${escapeHTML(p.windowTitle || title)}</div>
                  </div>
                  <div class="app-window-viewport">
                    <img id="img-${escapeHTML(p.id)}" class="clickable-screenshot" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.imageAlt || title)}" data-project-id="${escapeHTML(p.id)}" loading="lazy" />
                  </div>
                </div>
              ` : `
                <div class="code-mark mono">${escapeHTML(p.visual || '01')}</div>
              `))}
            </div>
          </article>
        `;
      }).join('');
    }

    // 6. Master's Thesis Spotlight
    const thesisSpotlight = document.getElementById('thesis-spotlight');
    if (thesisSpotlight && d.thesis) {
      const t = d.thesis;
      const thesisKicker = (window.I18N && window.I18N.t('thesis_kicker')) || 'MASTER’S THESIS RESEARCH';
      const supBy = (window.I18N && window.I18N.t('supervised_by')) || 'Supervised by';
      const methodsTitle = (window.I18N && window.I18N.t('thesis_methods_title')) || 'METHODOLOGICAL FRAMEWORK:';
      const dataLabel = (window.I18N && window.I18N.t('thesis_data_label')) || 'DATA:';
      const stackLabel = (window.I18N && window.I18N.t('thesis_stack_label')) || 'STACK:';
      const archHeader = (window.I18N && window.I18N.t('thesis_arch_header')) || 'MODEL ARCHITECTURE';
      const researchNote = (window.I18N && window.I18N.t('thesis_research_note')) || 'Continuous-time Bellman equations with asset accumulation, discrete choice, and Simulated Method of Moments (SMM).';

      thesisSpotlight.innerHTML = `
        <div class="thesis-card">
          <div class="thesis-main">
            <div class="thesis-kicker-row">
              <span class="thesis-kicker mono">${escapeHTML(thesisKicker)}</span>
              <span class="thesis-status mono"><span class="status-dot"></span> ${escapeHTML(t.status)}</span>
            </div>
            <h3 class="thesis-title">${escapeHTML(t.title)}</h3>
            <p class="thesis-subtitle mono">${linkAcademicEntities(escapeHTML(t.subtitle))}${t.advisor ? ` · ${escapeHTML(supBy)} <a href="${escapeHTML(t.advisorUrl || 'https://www.sepahsalari.com/')}" class="advisor-link" target="_blank" rel="noopener noreferrer">${escapeHTML(t.advisor)}</a>` : ''}</p>
            <p class="thesis-abstract">${escapeHTML(t.abstract)}</p>
            
            <div class="thesis-methods-wrap">
              <div class="thesis-methods-title mono">${escapeHTML(methodsTitle)}</div>
              <ul class="bullet-ledger">
                ${(t.methodology || []).map(m => `<li>${escapeHTML(m)}</li>`).join('')}
              </ul>
            </div>

            <div class="thesis-footer-meta">
              <div class="tag-list">
                <span class="tag-label mono">${escapeHTML(dataLabel)}</span>
                ${(t.dataSources || []).map(ds => `<span class="tag mono">${escapeHTML(ds)}</span>`).join('')}
              </div>
              <div class="tag-list" style="margin-top: 8px;">
                <span class="tag-label mono">${escapeHTML(stackLabel)}</span>
                ${(t.tools || []).map(tool => `<span class="tag mono accent-tag">${escapeHTML(tool)}</span>`).join('')}
              </div>
            </div>
          </div>

          <aside class="thesis-metrics-col">
            <div class="thesis-metrics-header mono">${escapeHTML(archHeader)}</div>
            <div class="thesis-metrics-grid">
              ${(t.metrics || []).map(m => `
                <div class="thesis-metric-card">
                  <span class="thesis-metric-label mono">${escapeHTML(m.metric)}</span>
                  <span class="thesis-metric-value mono">${escapeHTML(m.value)}</span>
                </div>
              `).join('')}
            </div>
            <div class="thesis-research-note mono">
              ${escapeHTML(researchNote)}
            </div>
          </aside>
        </div>
      `;
    }

    // 7. Coursework Filters
    const courseFilters = document.getElementById('course-filters');
    if (courseFilters) {
      const allText = (window.I18N && window.I18N.t('filter_all')) || 'All Courses';
      const econText = (window.I18N && window.I18N.t('filter_econometrics')) || 'Econometrics & Economics';
      const aiText = (window.I18N && window.I18N.t('filter_ai')) || 'AI & Machine Learning';
      const mathText = (window.I18N && window.I18N.t('filter_math')) || 'Math & Computation';
      courseFilters.innerHTML = `
        <button type="button" class="filter-btn active" data-filter="all">${escapeHTML(allText)}</button>
        <button type="button" class="filter-btn" data-filter="econometrics">${escapeHTML(econText)}</button>
        <button type="button" class="filter-btn" data-filter="ai">${escapeHTML(aiText)}</button>
        <button type="button" class="filter-btn" data-filter="math">${escapeHTML(mathText)}</button>
      `;
    }

    // 7. Scientific Computing / Additional Projects
    const additionalWork = document.getElementById('additional-work');
    if (additionalWork && d.additional) {
      additionalWork.innerHTML = d.additional.map(w => `
        <article class="additional-card">
          <h3>${escapeHTML(w.name)}</h3>
          <p>${escapeHTML(w.description)}</p>
          <div class="tag-list">
            ${(w.stack || []).map(s => `<span class="tag mono">${escapeHTML(s)}</span>`).join('')}
          </div>
          ${w.href ? `
            <a class="additional-card-link mono" href="${escapeHTML(w.href)}" target="_blank" rel="noreferrer">
              <span>↗</span> ${escapeHTML((window.I18N && window.I18N.t('open_repo')) || 'Open Repository')}
            </a>
          ` : `
            <span class="additional-card-link mono muted" style="cursor: default;">
              ${SVG_ICONS.lock} <span>${escapeHTML((window.I18N && window.I18N.t('research_archive')) || 'Research Archive')}</span>
            </span>
          `}
        </article>
      `).join('');
    }

    // 9. Academic Education
    const educationList = document.getElementById('education-list');
    if (educationList && d.education) {
      educationList.innerHTML = d.education.map(e => `
        <article class="education-item">
          <div class="education-header-row">
            <h3>${escapeHTML(e.degree)}</h3>
            ${e.gpa ? `<span class="education-gpa mono">${escapeHTML(e.gpa)}</span>` : ''}
          </div>
          <div class="education-school">${linkAcademicEntities(escapeHTML(e.school))}</div>
          <div class="education-meta mono">${escapeHTML(e.dates)}</div>
          ${e.note ? `<p class="education-note">${linkAcademicEntities(escapeHTML(e.note))}</p>` : ''}
        </article>
      `).join('');
    }

    // 10. Closing Section
    const closingContact = document.getElementById('closing-contact');
    if (closingContact && d.person) {
      const emailLabel = (window.I18N && window.I18N.t('contact_email_label')) || 'Email';
      const githubLabel = (window.I18N && window.I18N.t('contact_github_label')) || 'GitHub Profile';
      const linkedinLabel = (window.I18N && window.I18N.t('contact_linkedin_label')) || 'LinkedIn';
      const resumeLabel = (window.I18N && window.I18N.t('printable_resume')) || 'Printable Resume';

      closingContact.innerHTML = `
        <a class="button primary" href="mailto:${escapeHTML(d.person.email)}">
          ${SVG_ICONS.mail} <span>${escapeHTML(emailLabel)} (${escapeHTML(d.person.email)})</span>
        </a>
        ${d.person.phone ? `
          <a class="button" href="tel:${escapeHTML(d.person.phone)}">
            ${SVG_ICONS.phone} <span>${escapeHTML(d.person.phone)}</span>
          </a>
        ` : ''}
        <a class="button" href="${escapeHTML(d.person.github)}" target="_blank" rel="noreferrer">
          <span>↗</span> ${escapeHTML(githubLabel)}
        </a>
        ${d.person.linkedin ? `
          <a class="button" href="${escapeHTML(d.person.linkedin)}" target="_blank" rel="noreferrer">
            <span>↗</span> ${escapeHTML(linkedinLabel)}
          </a>
        ` : ''}
        <a class="button" href="resume.html">
          ${SVG_ICONS.file} <span>${escapeHTML(resumeLabel)}</span>
        </a>
      `;
    }

    // Bind dynamic elements
    bindInspectButtons();
    bindScreenshotCatalogAndLightbox();
    bindClipboardButtons();
    bindCourseworkControls();
    bindMiniBrowserControls();
    renderCoursework();
  }

  function bindMiniBrowserControls() {
    document.querySelectorAll('.mini-reload-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const frameId = btn.getAttribute('data-target-frame');
        const frame = document.getElementById(frameId);
        if (frame) {
          const currentSrc = frame.src;
          frame.src = '';
          frame.src = currentSrc;
        }
      });
    });
  }

  // --- Project Deep-Dive Modal Inspector ---
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  let currentOpenProjectId = null;

  function openProjectModal(projectId) {
    currentOpenProjectId = projectId;
    const d = (window.I18N && window.I18N.getActiveData) ? window.I18N.getActiveData() : window.PORTFOLIO_DATA;
    if (!d || !projectModal) return;
    const projects = d.featured || d.featuredProjects || [];
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const title = project.name || project.title;
    const stack = project.stack || project.tags || [];

    const titleEl = document.getElementById('modal-project-title');
    const subEl = document.getElementById('modal-project-subtitle');
    const kindEl = document.getElementById('modal-project-kind');
    const scoreEl = document.getElementById('modal-project-score');
    const diagEl = document.getElementById('modal-project-diagram');
    const archLinksEl = document.getElementById('modal-arch-links');
    const archIframeWrap = document.getElementById('modal-arch-iframe-wrap');
    const archIframe = document.getElementById('modal-arch-iframe');
    const benchEl = document.getElementById('modal-project-benchmarks');
    const bulletsEl = document.getElementById('modal-project-bullets');
    const stackEl = document.getElementById('modal-project-stack');
    const linkEl = document.getElementById('modal-project-link');

    if (titleEl) titleEl.textContent = title;
    if (subEl) subEl.textContent = project.subtitle;
    if (kindEl) kindEl.textContent = `${project.kind}`;
    if (scoreEl) {
      if (project.score) {
        scoreEl.textContent = `${(window.I18N && window.I18N.t('legend_eval')) || 'Score'}: ${project.score}`;
        scoreEl.style.display = 'inline-flex';
      } else {
        scoreEl.style.display = 'none';
      }
    }

    // Architecture: Repo interactive diagram or ASCII Blueprint
    if (archLinksEl) archLinksEl.innerHTML = '';

    if (project.architectureHtmlUrl) {
      if (diagEl) diagEl.style.display = 'none';
      if (archIframeWrap) archIframeWrap.style.display = 'block';
      if (archIframe) {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const url = new URL(project.architectureHtmlUrl, window.location.href);
        url.searchParams.set('theme', currentTheme);
        archIframe.src = url.toString();
      }
      if (archLinksEl) {
        const fullscreenUrl = project.architectureHtmlUrl.replace('?embed=1', '');
        archLinksEl.innerHTML = `
          <a href="${escapeHTML(fullscreenUrl)}" target="_blank" rel="noreferrer" class="modal-arch-link mono" title="Open interactive architecture fullscreen">
            <span>↗</span> ${(window.I18N && window.I18N.t('modal_fullscreen')) || 'Fullscreen'}
          </a>
          ${project.architectureRepoUrl ? `
            <a href="${escapeHTML(project.architectureRepoUrl)}" target="_blank" rel="noreferrer" class="modal-arch-link mono" title="View architecture source on GitHub">
              <span>⎇</span> ${(window.I18N && window.I18N.t('modal_github_source')) || 'GitHub Source'}
            </a>
          ` : ''}
        `;
      }
    } else {
      if (archIframeWrap) archIframeWrap.style.display = 'none';
      if (archIframe) archIframe.src = '';
      if (diagEl) {
        if (project.architectureDiagram) {
          diagEl.textContent = project.architectureDiagram;
          diagEl.style.display = 'block';
        } else {
          diagEl.style.display = 'none';
        }
      }
      if (archLinksEl && project.architectureDocUrl) {
        archLinksEl.innerHTML = `
          <a href="${escapeHTML(project.architectureDocUrl)}" target="_blank" rel="noreferrer" class="modal-arch-link mono" title="View architecture specification on GitHub">
            <span>⎇</span> docs/ARCHITECTURE.md (GitHub)
          </a>
        `;
      }
    }

    // Benchmarks Matrix
    if (benchEl) {
      if (project.benchmarks && project.benchmarks.length > 0) {
        benchEl.innerHTML = project.benchmarks.map(b => `
          <div class="bench-card">
            <div class="bench-metric mono">${escapeHTML(b.metric)}</div>
            <div class="bench-val mono">${escapeHTML(b.value)}</div>
          </div>
        `).join('');
        benchEl.style.display = 'grid';
      } else {
        benchEl.innerHTML = '';
        benchEl.style.display = 'none';
      }
    }

    // Highlights list
    if (bulletsEl) {
      bulletsEl.innerHTML = (project.bullets || []).map(b => `<li>${escapeHTML(b)}</li>`).join('');
    }

    // Stack Tags
    if (stackEl) {
      stackEl.innerHTML = stack.map(t => `<span class="tag mono">${escapeHTML(t)}</span>`).join('');
    }

    // External Link
    if (linkEl) {
      if (project.href) {
        linkEl.href = project.href;
        linkEl.innerHTML = `<span>↗</span> ${escapeHTML(project.cta || ((window.I18N && window.I18N.t('modal_open_repo')) || 'Open Repository'))}`;
        linkEl.classList.remove('is-private');
      } else {
        linkEl.href = '#';
        linkEl.innerHTML = `${SVG_ICONS.lock} <span>${escapeHTML(project.cta || ((window.I18N && window.I18N.t('private_repo')) || 'Private Repository'))}</span>`;
        linkEl.classList.add('is-private');
      }
    }

    projectModal.showModal();
  }

  function bindInspectButtons() {
    document.querySelectorAll('.inspect-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project-id');
        openProjectModal(projectId);
      });
    });
  }

  if (modalCloseBtn && projectModal) {
    const cleanupModal = () => {
      currentOpenProjectId = null;
      const archIframe = document.getElementById('modal-arch-iframe');
      if (archIframe) archIframe.src = '';
    };

    modalCloseBtn.addEventListener('click', () => {
      cleanupModal();
      projectModal.close();
    });

    projectModal.addEventListener('click', (e) => {
      const rect = projectModal.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        cleanupModal();
        projectModal.close();
      }
    });

    projectModal.addEventListener('close', cleanupModal);
  }

  // --- Screenshot Catalog & Lightbox Controller ---
  const screenshotLightbox = document.getElementById('screenshot-lightbox');
  const lbProjectName = document.getElementById('lightbox-project-name');
  const lbLabel = document.getElementById('lightbox-screenshot-label');
  const lbCounter = document.getElementById('lightbox-counter');
  const lbImg = document.getElementById('lightbox-img');
  const lbCloseBtn = document.getElementById('lightbox-close-btn');
  const lbPrevBtn = document.getElementById('lightbox-prev-btn');
  const lbNextBtn = document.getElementById('lightbox-next-btn');
  const lbFooter = document.getElementById('lightbox-footer');

  let activeLightboxProjectId = null;
  let activeLightboxIndex = 0;

  function getProjectScreenshots(projectId) {
    const d = (window.I18N && window.I18N.getActiveData) ? window.I18N.getActiveData() : window.PORTFOLIO_DATA;
    if (!d) return [];
    const projects = d.featured || d.featuredProjects || [];
    const proj = projects.find(p => p.id === projectId);
    if (!proj) return [];
    if (proj.screenshots && proj.screenshots.length > 0) return proj.screenshots;
    if (proj.architectureImage || proj.pipelineImage) {
      const items = [];
      const archLabel = (window.I18N && window.I18N.t('nav_architecture')) || 'Architecture';
      if (proj.architectureImage) items.push({ label: archLabel, url: proj.architectureImage, fallbackUrl: proj.fallbackImage, alt: `${proj.name} Architecture Diagram` });
      if (proj.pipelineImage) items.push({ label: 'Pipeline', url: proj.pipelineImage, fallbackUrl: proj.fallbackImage, alt: `${proj.name} Pipeline Diagram` });
      return items;
    }
    if (proj.image) return [{ label: 'Primary View', url: proj.image, alt: proj.imageAlt || proj.name }];
    return [];
  }

  function getProjectName(projectId) {
    const d = (window.I18N && window.I18N.getActiveData) ? window.I18N.getActiveData() : window.PORTFOLIO_DATA;
    if (!d) return '';
    const projects = d.featured || d.featuredProjects || [];
    const proj = projects.find(p => p.id === projectId);
    return proj ? (proj.name || proj.title) : '';
  }

  function switchCardScreenshot(projectId, targetIdx) {
    const shots = getProjectScreenshots(projectId);
    if (!shots || shots.length === 0) return;
    const safeIdx = ((targetIdx % shots.length) + shots.length) % shots.length;
    const shot = shots[safeIdx];

    const imgEl = document.getElementById(`img-${projectId}`);
    if (imgEl) {
      imgEl.onerror = () => {
        if (shot.fallbackUrl && imgEl.src !== shot.fallbackUrl) {
          imgEl.src = shot.fallbackUrl;
        }
      };
      imgEl.src = shot.url;
      imgEl.alt = shot.alt || shot.label;
      imgEl.setAttribute('data-current-idx', String(safeIdx));
    }

    const cardEl = document.getElementById(`project-${projectId}`);
    if (cardEl) {
      cardEl.querySelectorAll('.catalog-pill').forEach(pill => {
        const pIdx = parseInt(pill.getAttribute('data-idx'), 10);
        pill.classList.toggle('active', pIdx === safeIdx);
      });
    }
  }

  function renderLightboxContent() {
    if (!screenshotLightbox || !activeLightboxProjectId) return;
    const shots = getProjectScreenshots(activeLightboxProjectId);
    if (!shots || shots.length === 0) return;
    const total = shots.length;
    activeLightboxIndex = ((activeLightboxIndex % total) + total) % total;
    const current = shots[activeLightboxIndex];

    if (lbProjectName) lbProjectName.textContent = getProjectName(activeLightboxProjectId);
    if (lbLabel) lbLabel.textContent = `· ${current.label}`;
    if (lbCounter) lbCounter.textContent = `${activeLightboxIndex + 1} / ${total}`;
    if (lbImg) {
      lbImg.onerror = () => {
        if (current.fallbackUrl && lbImg.src !== current.fallbackUrl) {
          lbImg.src = current.fallbackUrl;
        }
      };
      lbImg.src = current.url;
      lbImg.alt = current.alt || current.label;
    }

    if (lbFooter) {
      if (total > 1) {
        lbFooter.innerHTML = shots.map((s, idx) => `
          <button type="button" class="catalog-pill ${idx === activeLightboxIndex ? 'active' : ''}" data-lightbox-idx="${idx}">
            ${escapeHTML(s.label)}
          </button>
        `).join('');
        lbFooter.style.display = 'flex';
      } else {
        lbFooter.innerHTML = '';
        lbFooter.style.display = 'none';
      }
    }
  }

  function openScreenshotLightbox(projectId, index = 0) {
    if (!screenshotLightbox) return;
    activeLightboxProjectId = projectId;
    activeLightboxIndex = index;
    renderLightboxContent();
    screenshotLightbox.showModal();
  }

  function bindScreenshotCatalogAndLightbox() {
    document.querySelectorAll('.catalog-pill[data-project-id]').forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = pill.getAttribute('data-project-id');
        const idx = parseInt(pill.getAttribute('data-idx'), 10);
        switchCardScreenshot(pid, idx);
      });
    });

    document.querySelectorAll('.catalog-arrow[data-project-id], .viewport-nav-btn[data-project-id]').forEach(arrow => {
      arrow.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = arrow.getAttribute('data-project-id');
        const dir = parseInt(arrow.getAttribute('data-dir'), 10);
        const imgEl = document.getElementById(`img-${pid}`);
        const cur = imgEl ? parseInt(imgEl.getAttribute('data-current-idx') || '0', 10) : 0;
        switchCardScreenshot(pid, cur + dir);
      });
    });

    document.querySelectorAll('.clickable-screenshot, .app-window-zoom').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = trigger.getAttribute('data-project-id');
        const imgEl = document.getElementById(`img-${pid}`);
        const cur = imgEl ? parseInt(imgEl.getAttribute('data-current-idx') || '0', 10) : 0;
        openScreenshotLightbox(pid, cur);
      });
    });

    if (screenshotLightbox) {
      if (lbCloseBtn) {
        lbCloseBtn.addEventListener('click', () => screenshotLightbox.close());
      }
      if (lbPrevBtn) {
        lbPrevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          activeLightboxIndex--;
          renderLightboxContent();
        });
      }
      if (lbNextBtn) {
        lbNextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          activeLightboxIndex++;
          renderLightboxContent();
        });
      }
      if (lbFooter) {
        lbFooter.addEventListener('click', (e) => {
          const pill = e.target.closest('[data-lightbox-idx]');
          if (!pill) return;
          e.stopPropagation();
          activeLightboxIndex = parseInt(pill.getAttribute('data-lightbox-idx'), 10);
          renderLightboxContent();
        });
      }
      screenshotLightbox.addEventListener('click', (e) => {
        const container = screenshotLightbox.querySelector('.lightbox-container');
        if (container && !container.contains(e.target)) {
          screenshotLightbox.close();
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (!screenshotLightbox || !screenshotLightbox.open) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        activeLightboxIndex--;
        renderLightboxContent();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        activeLightboxIndex++;
        renderLightboxContent();
      }
    });
  }

  // --- Coursework Filtering & Live Search ---
  const courseListContainer = document.getElementById('course-list');
  const courseSearchInput = document.getElementById('course-search');
  let activeCategory = 'all';
  let searchQuery = '';

  function renderCoursework() {
    const d = (window.I18N && window.I18N.getActiveData) ? window.I18N.getActiveData() : window.PORTFOLIO_DATA;
    if (!d || !courseListContainer) return;
    const courses = d.coursework || [];

    const filtered = courses.filter(c => {
      const matchCategory = activeCategory === 'all' ||
        c.category === activeCategory ||
        (c.category && c.category.split(' ').includes(activeCategory));
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchCategory;

      if (c.isConsolidated) {
        const subj = (c.subject || '').toLowerCase();
        const cellsMatch = (c.cells || []).some(cell => {
          const name = (cell.name || '').toLowerCase();
          const tool = (cell.tool || '').toLowerCase();
          const score = (cell.score || '').toLowerCase();
          return name.includes(q) || tool.includes(q) || score.includes(q);
        });
        return matchCategory && (subj.includes(q) || cellsMatch);
      }

      const title = (c.course || c.title || '').toLowerCase();
      const context = (c.context || '').toLowerCase();
      const topicsStr = Array.isArray(c.topics) ? c.topics.join(' ').toLowerCase() : (c.topics || '').toLowerCase();
      const toolsStr = Array.isArray(c.tools) ? c.tools.join(' ').toLowerCase() : (c.tools || '').toLowerCase();

      const matchSearch =
        title.includes(q) ||
        context.includes(q) ||
        topicsStr.includes(q) ||
        toolsStr.includes(q);

      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      const isFa = window.I18N && window.I18N.getLanguage() === 'fa';
      const noMatchMsg = isFa
        ? `هیچ درسی با عبارت «${escapeHTML(searchQuery)}» در دسته‌بندی «${escapeHTML(activeCategory)}» یافت نشد.`
        : `No coursework matches query "${escapeHTML(searchQuery)}" in category "${escapeHTML(activeCategory)}".`;
      courseListContainer.innerHTML = `
        <div style="padding: 40px; text-align: center; color: var(--muted);" class="mono">
          ${noMatchMsg}
        </div>
      `;
      return;
    }

    courseListContainer.innerHTML = filtered.map(c => {
      if (c.isConsolidated) {
        const cellsHtml = (c.cells || []).map(cell => {
          const scorePct = cell.scoreNumeric ? ((cell.scoreNumeric / 20) * 100).toFixed(1) : '95.0';
          const breakCls = cell.breakBefore ? ' cell-break-before' : '';
          const cellTools = Array.isArray(cell.tools)
            ? cell.tools
            : (cell.tool ? cell.tool.split(' · ').map(s => s.trim()) : []);
          const tagsHtml = cellTools.length > 0
            ? `<div class="cell-tags-wrap">${cellTools.map(t => `<span class="cell-tag mono">${escapeHTML(t)}</span>`).join('')}</div>`
            : '';
          return `
            <div class="course-cell${breakCls}">
              <div class="cell-name-row">
                <span class="cell-name">${escapeHTML(cell.name)}</span>
                ${tagsHtml}
              </div>
              <div class="cell-eval-row">
                <span class="score-val mono">${escapeHTML(cell.score)}</span>
                <div class="score-bar-wrap" title="${cell.scoreNumeric ? cell.scoreNumeric + '/20' : ''}">
                  <div class="score-bar-fill" style="width: ${scorePct}%"></div>
                </div>
              </div>
            </div>
          `;
        }).join('');

        return `
          <article class="course-row is-consolidated" data-category="${escapeHTML(c.category)}">
            <div class="consolidated-subject-col">
              <h3>${escapeHTML(c.subject)}</h3>
            </div>
            <div class="consolidated-cells-col">
              ${cellsHtml}
            </div>
          </article>
        `;
      }

      const title = c.course || c.title;
      const topics = Array.isArray(c.topics) ? c.topics.join(' · ') : c.topics;
      const tools = c.tools || [];
      const scorePct = c.scoreNumeric ? ((c.scoreNumeric / 20) * 100).toFixed(1) : '95.0';

      return `
        <article class="course-row" data-category="${escapeHTML(c.category)}">
          <div class="course-title-col">
            <h3>${escapeHTML(title)}</h3>
            <p class="course-context mono">${escapeHTML(c.context)}</p>
            ${c.href ? `
              <a class="course-repo-link mono" href="${escapeHTML(c.href)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHTML(title)} repository">
                <span>↗</span> ${escapeHTML((window.I18N && window.I18N.t('repo_label')) || 'Repository')}
              </a>
            ` : ''}
          </div>
          <div class="course-tools-col">
            ${tools.length > 0 ? `
              <div class="course-tools">
                ${tools.map(t => `<span class="tag mono">${escapeHTML(t)}</span>`).join('')}
              </div>
            ` : ''}
            <p class="course-topics">${escapeHTML(topics)}</p>
          </div>
          <div class="course-score-col">
            <span class="score-val mono">${escapeHTML(c.score)}</span>
            <div class="score-bar-wrap" title="${c.scoreNumeric ? c.scoreNumeric + '/20' : ''}">
              <div class="score-bar-fill" style="width: ${scorePct}%"></div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function bindCourseworkControls() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          activeCategory = btn.getAttribute('data-filter') || 'all';
          renderCoursework();
        });
      });
    }

    if (courseSearchInput) {
      courseSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderCoursework();
      });
    }
  }

  // --- Command Palette System (Ctrl+K / Cmd+K) ---
  const cmdDialog = document.getElementById('cmd-dialog');
  const cmdInput = document.getElementById('cmd-input');
  const cmdResults = document.getElementById('cmd-results');
  const cmdTriggerBtn = document.getElementById('cmd-trigger');
  const openCmdBtn = document.getElementById('open-cmd-btn');

  const commandItems = [
    { title: 'Home & Overview', cat: 'Navigation', icon: '↗', action: () => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' }) },
    { title: 'Research (Master’s Thesis)', cat: 'Navigation', icon: '✦', action: () => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' }) },
    { title: 'Courseworks', cat: 'Navigation', icon: '↗', action: () => document.getElementById('coursework')?.scrollIntoView({ behavior: 'smooth' }) },
    { title: 'Academic Background & Skills', cat: 'Navigation', icon: '↗', action: () => document.getElementById('background')?.scrollIntoView({ behavior: 'smooth' }) },
    { title: 'Passion Projects', cat: 'Navigation', icon: '↗', action: () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) },
    { title: 'Scientific Computing', cat: 'Navigation', icon: '↗', action: () => document.getElementById('scientific')?.scrollIntoView({ behavior: 'smooth' }) },
    { title: 'Econometrics I (Coursework Repo)', cat: 'Coursework', icon: '↗', action: () => window.open('https://github.com/AmirrezaFarnamTaheri/Econometrics-I', '_blank') },
    { title: 'Econometrics II: Applied Econometrics (Coursework Repo)', cat: 'Coursework', icon: '↗', action: () => window.open('https://github.com/AmirrezaFarnamTaheri/Metric-II-Homeworks', '_blank') },
    { title: 'Macroeconomics I (Coursework Repo)', cat: 'Coursework', icon: '↗', action: () => window.open('https://github.com/AmirrezaFarnamTaheri/Macroeconomics-I', '_blank') },
    { title: 'Machine Learning (Coursework Repo)', cat: 'Coursework', icon: '↗', action: () => window.open('https://github.com/AmirrezaFarnamTaheri/Machine-Learning', '_blank') },
    { title: 'Deep Learning 2025 (Coursework Repo)', cat: 'Coursework', icon: '↗', action: () => window.open('https://github.com/AmirrezaFarnamTaheri/Deep-Learning-2025', '_blank') },
    { title: 'Scriptor: Local Knowledge Workspace', cat: 'Tooling', icon: '⌗', action: () => openProjectModal('scriptor') },
    { title: 'HUNTX: Network Telemetry Utility', cat: 'Tooling', icon: '⌗', action: () => openProjectModal('huntx') },
    { title: 'WinCare: Diagnostics & Recovery Tool', cat: 'Tooling', icon: '⌗', action: () => openProjectModal('wincare') },
    { title: 'Toggle Dark / Light Theme', cat: 'Action', icon: '◐', action: () => themeToggle?.click() },
    { title: 'Visit TeIAS (Tehran Institute for Advanced Studies)', cat: 'Academic', icon: '↗', action: () => window.open('https://teias.institute', '_blank') },
    { title: 'Spawn Gravitational Singularity (Black Hole)', cat: 'Simulation', icon: '◉', action: () => { if (typeof window.__spawnBlackholeAt === 'function') { const s = window.__spawnBlackholeAt(0, 0); if (!s) showToast((window.I18N && window.I18N.t('toast_singularity_active')) || 'A singularity is already active on the manifold', 2400); } } },
    { title: 'Trigger Einstein-Rosen Wormhole Portal', cat: 'Simulation', icon: '◎', action: () => { if (typeof window.__triggerWormhole === 'function') { const w = window.__triggerWormhole(); if (!w) showToast((window.I18N && window.I18N.t('toast_singularity_active')) || 'A singularity or wormhole is already active on the manifold', 2400); } } },
    { title: 'Spawn Descent Probe on Surface', cat: 'Simulation', icon: '✦', action: () => { if (typeof window.__spawnProbeAt === 'function') window.__spawnProbeAt((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20); } },
    { title: 'Trigger Loss Surface Ripple', cat: 'Simulation', icon: '◈', action: () => { if (typeof window.__triggerSurfaceRipple === 'function') window.__triggerSurfaceRipple(); } },
    { title: 'Copy Primary Email (TaheriFarnam@Gmail.com)', cat: 'Contact', icon: '⎘', action: () => copyText('TaheriFarnam@Gmail.com') },
    { title: 'Copy Phone (+989999946242)', cat: 'Contact', icon: '⎘', action: () => copyText('+989999946242') },
    { title: 'Open GitHub Profile', cat: 'External', icon: '↗', action: () => window.open('https://github.com/AmirrezaFarnamTaheri', '_blank') },
    { title: 'Open LinkedIn Profile', cat: 'External', icon: '↗', action: () => window.open(window.PORTFOLIO_DATA?.person?.linkedin || 'https://ir.linkedin.com/in/amirreza-farnam-taheri-2691b1201', '_blank') },
    { title: 'Open Printable CV', cat: 'Document', icon: '↗', action: () => window.open('resume.html', '_blank') }
  ];

  let selectedIndex = 0;
  let filteredCommands = [...commandItems];

  function renderCmdResults() {
    if (!cmdResults) return;
    if (filteredCommands.length === 0) {
      cmdResults.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--muted);" class="mono">${escapeHTML((window.I18N && window.I18N.t('cmd_no_results')) || 'No matching commands')}</div>`;
      return;
    }

    cmdResults.innerHTML = filteredCommands.map((cmd, i) => `
      <div class="cmd-item ${i === selectedIndex ? 'selected' : ''}" data-index="${i}" role="option" aria-selected="${i === selectedIndex}">
        <div class="cmd-item-left">
          <span class="mono" style="color: var(--accent);">${cmd.icon}</span>
          <span>${escapeHTML(cmd.title)}</span>
        </div>
        <span class="cmd-item-cat mono">${escapeHTML(cmd.cat)}</span>
      </div>
    `).join('');

    const selectedEl = cmdResults.querySelector('.cmd-item.selected');
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: 'nearest' });
    }
  }

  function openCommandPalette() {
    if (!cmdDialog) return;
    cmdDialog.showModal();
    if (cmdInput) {
      cmdInput.value = '';
      filteredCommands = [...commandItems];
      selectedIndex = 0;
      renderCmdResults();
      cmdInput.focus();
    }
  }

  function closeCommandPalette() {
    if (cmdDialog && cmdDialog.open) cmdDialog.close();
  }

  if (cmdTriggerBtn) cmdTriggerBtn.addEventListener('click', openCommandPalette);
  if (openCmdBtn) openCmdBtn.addEventListener('click', openCommandPalette);

  if (cmdDialog) {
    cmdDialog.addEventListener('click', (e) => {
      const rect = cmdDialog.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        closeCommandPalette();
      }
    });

    if (cmdInput) {
      cmdInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        filteredCommands = commandItems.filter(item =>
          item.title.toLowerCase().includes(q) || item.cat.toLowerCase().includes(q)
        );
        selectedIndex = 0;
        renderCmdResults();
      });

      cmdInput.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (filteredCommands.length > 0) {
            selectedIndex = (selectedIndex + 1) % filteredCommands.length;
            renderCmdResults();
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (filteredCommands.length > 0) {
            selectedIndex = (selectedIndex - 1 + filteredCommands.length) % filteredCommands.length;
            renderCmdResults();
          }
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            const act = filteredCommands[selectedIndex].action;
            closeCommandPalette();
            act();
          }
        } else if (e.key === 'Escape') {
          closeCommandPalette();
        }
      });
    }

    cmdResults?.addEventListener('click', (e) => {
      const itemEl = e.target.closest('.cmd-item');
      if (itemEl) {
        const idx = parseInt(itemEl.getAttribute('data-index'), 10);
        if (filteredCommands[idx]) {
          const act = filteredCommands[idx].action;
          closeCommandPalette();
          act();
        }
      }
    });
  }

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      if (cmdDialog?.open) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    }
  });

  // --- THREE.JS WEBGL INTERACTIVE CANVAS ENGINE (ADAPTIVE LOSS MANIFOLD) ---
  const canvasWrap = document.querySelector('.hero-canvas-wrap');
  const canvasEl = document.getElementById('hero-canvas');

  let rippleX = 0, rippleY = 0, rippleIntensity = 0;
  window.__triggerSurfaceRipple = function () {
    rippleIntensity = 2.2;
    rippleX = (Math.random() - 0.5) * 16;
    rippleY = (Math.random() - 0.5) * 16;
  };

  function initWebGLCanvas() {
    if (!canvasEl || typeof THREE === 'undefined') {
      initFallback2DCanvas();
      return;
    }

    try {
      const scene = new THREE.Scene();
      const clock = new THREE.Clock();
      const width = (canvasWrap && canvasWrap.clientWidth) || window.innerWidth || 800;
      const height = (canvasWrap && canvasWrap.clientHeight) || window.innerHeight || 600;

      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(24, 28, 48);

      const renderer = new THREE.WebGLRenderer({
        canvas: canvasEl,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      if (THREE.ACESFilmicToneMapping) {
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.1;
      }

      // Studio Directional & Ambient Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
      keyLight.position.set(30, 45, 35);
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.5);
      rimLight.position.set(-35, 15, -25);
      scene.add(rimLight);

      const fillLight = new THREE.DirectionalLight(0x1e56e3, 0.85);
      fillLight.position.set(0, -25, 25);
      scene.add(fillLight);

      // Theme Colors
      let isDark = root.getAttribute('data-theme') === 'dark';
      let wireColor = isDark ? 0x38bdf8 : 0x1e56e3;
      let skinColor = isDark ? 0x0e1726 : 0xe0e7ff;
      let emissiveColor = isDark ? 0x091e3a : 0x1e40af;

      // Active Singularity / Gravitational Well (Max 1 at a time)
      let activeBlackhole = null;

      // Mathematical Loss Function with Multi-Basin Minima & Saddles
      function getLossHeight(x, y, t) {
        const rSq = x * x + y * y;
        const macro = Math.sin(x * 0.15 + t * 0.35) * Math.cos(y * 0.15 + t * 0.25) * 3.6;
        const saddle = (x * x - y * y) * 0.0032;
        const basin = -4.5 * Math.exp(-rSq / 130);
        const ripples = Math.cos(rSq * 0.006 - t * 0.22) * 1.8 + Math.sin(0.26 * x + 0.18 * y) * 0.85;

        let h = macro + saddle + basin + ripples;

        if (rippleIntensity > 0.01) {
          const dx = x - rippleX;
          const dy = y - rippleY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const rip = Math.sin(dist * 0.45 - t * 4.0) * Math.exp(-dist * 0.12) * rippleIntensity * 3.5;
          h += rip;
        }

        if (activeBlackhole && activeBlackhole.currentStrength > 0.0001) {
          const bx = x - activeBlackhole.x;
          const by = y - activeBlackhole.y;
          const distSq = bx * bx + by * by;
          const dist = Math.sqrt(distSq);
          const s = activeBlackhole.currentStrength;

          // Gravitational singularity funnel depression (smooth, dramatic cosmic bowl)
          const depth = 14.5 * s;
          let funnel = -depth / (1.0 + distSq * 0.075);

          // If transformed into an Einstein-Rosen wormhole: deep throat vortex conduit with flared mouth collar
          if (activeBlackhole.isWormhole) {
            const throat = -(10.5 * s) * Math.exp(-distSq * 0.35) + (5.5 * s) * (distSq / (3.5 + distSq * 0.6)) * Math.exp(-distSq * 0.12);
            funnel += throat;
          }

          // Kerr frame-dragging spiral vortex: angle theta relative to singularity
          // Modulated by coreDamp so swirl amplitude smoothly vanishes at dist -> 0 to eliminate singularity bobbing
          const theta = Math.atan2(by, bx);
          const coreDamp = Math.tanh(dist * 0.75);
          const swirlSpeed = activeBlackhole.isWormhole ? 12.0 : 8.0;
          const swirlAmp = activeBlackhole.isWormhole ? 3.6 : 3.0;
          const swirl = coreDamp * Math.sin(dist * 0.95 - theta * 2.0 - t * swirlSpeed) * Math.exp(-dist * 0.18) * swirlAmp * s;

          h += funnel + swirl;
        }

        return h;
      }

      // --- 1. Pure Topological Loss Landscape Geometry ---
      const gridSize = 56;
      const planeGeo = new THREE.PlaneGeometry(68, 68, gridSize, gridSize);
      const posAttr = planeGeo.attributes.position;
      const vertexCount = posAttr.count;

      // Pre-evaluate initial heights
      for (let idx = 0; idx < vertexCount; idx++) {
        const x = posAttr.getX(idx);
        const y = posAttr.getY(idx);
        posAttr.setZ(idx, getLossHeight(x, y, 0));
      }
      posAttr.needsUpdate = true;
      planeGeo.computeVertexNormals();

      // --- 2. Dual-Layered PBR Shaded Mesh & Precision Wireframe ---
      const manifoldGroup = new THREE.Group();
      manifoldGroup.position.set(6, -2, 0);
      manifoldGroup.rotation.x = -Math.PI / 2.3;
      manifoldGroup.rotation.z = -Math.PI / 8;
      scene.add(manifoldGroup);

      const skinMat = new THREE.MeshStandardMaterial({
        color: skinColor,
        roughness: 0.32,
        metalness: 0.52,
        emissive: emissiveColor,
        emissiveIntensity: isDark ? 0.35 : 0.18,
        flatShading: true,
        transparent: true,
        opacity: isDark ? 0.65 : 0.45,
        side: THREE.DoubleSide
      });
      const skinMesh = new THREE.Mesh(planeGeo, skinMat);
      manifoldGroup.add(skinMesh);

      const wireMat = new THREE.MeshBasicMaterial({
        color: wireColor,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.38 : 0.24
      });
      const wireMesh = new THREE.Mesh(planeGeo, wireMat);
      manifoldGroup.add(wireMesh);

      // --- 3. Interactive Probe Spawner & Trace System ---
      const probesGroup = new THREE.Group();
      manifoldGroup.add(probesGroup);

      const activeProbes = [];
      const MAX_PROBES = 8;
      const MAX_TRAIL_POINTS = 160;

      function spawnProbe(spawnX, spawnY) {
        // Limit total active probes for optimal performance
        if (activeProbes.length >= MAX_PROBES) {
          const oldest = activeProbes.shift();
          probesGroup.remove(oldest.mesh);
          probesGroup.remove(oldest.traceMesh);
          oldest.mesh.geometry.dispose();
          oldest.mesh.material.dispose();
          oldest.traceMesh.geometry.dispose();
          oldest.traceMesh.material.dispose();
        }

        // 3.1 Glossy Gemstone Probe Mesh
        const pGeo = new THREE.IcosahedronGeometry(0.75, 1);
        const pMat = new THREE.MeshStandardMaterial({
          color: isDark ? 0x38bdf8 : 0x1e56e3,
          emissive: isDark ? 0x0284c7 : 0x1d4ed8,
          emissiveIntensity: 0.85,
          metalness: 0.75,
          roughness: 0.2
        });
        const pMesh = new THREE.Mesh(pGeo, pMat);
        const startZ = getLossHeight(spawnX, spawnY, clock.getElapsedTime()) + 0.65;
        pMesh.position.set(spawnX, spawnY, startZ);
        probesGroup.add(pMesh);

        // 3.2 Luminous Descent Trace Line
        const trailPositions = new Float32Array(MAX_TRAIL_POINTS * 3);
        const trailGeo = new THREE.BufferGeometry();
        trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
        trailGeo.setDrawRange(0, 0);

        const trailMat = new THREE.LineBasicMaterial({
          color: isDark ? 0x7dd3fc : 0x2563eb,
          transparent: true,
          opacity: isDark ? 0.85 : 0.65,
          linewidth: 2
        });
        const traceMesh = new THREE.Line(trailGeo, trailMat);
        probesGroup.add(traceMesh);

        const probeObj = {
          x: spawnX,
          y: spawnY,
          vx: (Math.random() - 0.5) * 0.04,
          vy: (Math.random() - 0.5) * 0.04,
          history: [{ x: spawnX, y: spawnY }],
          mesh: pMesh,
          traceMesh: traceMesh,
          trailPositions: trailPositions,
          maxTrail: MAX_TRAIL_POINTS
        };

        activeProbes.push(probeObj);

        // Trigger surface impact ripple
        rippleIntensity = 2.0;
        rippleX = spawnX;
        rippleY = spawnY;
      }

      window.__spawnProbeAt = function (x, y) {
        spawnProbe(x, y);
      };

      function spawnBlackhole(spawnX, spawnY) {
        if (activeBlackhole) return; // Strict constraint: Maximum one blackhole at a time

        const bhGroup = new THREE.Group();
        manifoldGroup.add(bhGroup);

        // 1. Core singularity sphere (absorbing event horizon)
        const coreGeo = new THREE.SphereGeometry(1.4, 32, 32);
        const coreMat = new THREE.MeshBasicMaterial({
          color: 0x010204
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        bhGroup.add(coreMesh);

        // 2. Inner ISCO photon ring (innermost stable circular orbit)
        const iscoGeo = new THREE.RingGeometry(1.48, 1.82, 64);
        const iscoMat = new THREE.MeshBasicMaterial({
          color: isDark ? 0xffffff : 0x93c5fd,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.95,
          blending: THREE.AdditiveBlending
        });
        const iscoMesh = new THREE.Mesh(iscoGeo, iscoMat);
        iscoMesh.rotation.order = 'ZXY';
        iscoMesh.rotation.x = Math.PI / 2.6;
        bhGroup.add(iscoMesh);

        // 3. Luminous Accretion Disk Ring
        const ringGeo = new THREE.RingGeometry(1.82, 3.85, 64);
        const ringMat = new THREE.MeshBasicMaterial({
          color: isDark ? 0x38bdf8 : 0x1e56e3,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.88,
          blending: THREE.AdditiveBlending
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.order = 'ZXY';
        ringMesh.rotation.x = Math.PI / 2.6;
        bhGroup.add(ringMesh);

        // 4. Outer photon sphere halo ring
        const haloGeo = new THREE.RingGeometry(3.9, 4.65, 64);
        const haloMat = new THREE.MeshBasicMaterial({
          color: isDark ? 0x818cf8 : 0x4338ca,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.55,
          blending: THREE.AdditiveBlending
        });
        const haloMesh = new THREE.Mesh(haloGeo, haloMat);
        haloMesh.rotation.order = 'ZXY';
        haloMesh.rotation.x = Math.PI / 2.6;
        bhGroup.add(haloMesh);

        // 5. Einstein Gravitational Lensing Arc
        const lensGeo = new THREE.RingGeometry(1.55, 3.3, 64);
        const lensMat = new THREE.MeshBasicMaterial({
          color: isDark ? 0x67e8f9 : 0x2563eb,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.42,
          blending: THREE.AdditiveBlending
        });
        const lensMesh = new THREE.Mesh(lensGeo, lensMat);
        lensMesh.rotation.order = 'ZXY';
        lensMesh.rotation.y = Math.PI / 3.2;
        lensMesh.rotation.x = Math.PI / 6;
        bhGroup.add(lensMesh);

        // 6. Relativistic Accretion Particle Swarm (Keplerian Vortex)
        const particleCount = 130;
        const particlePositions = new Float32Array(particleCount * 3);
        const particleData = [];
        for (let i = 0; i < particleCount; i++) {
          const r = 1.8 + Math.random() * 3.4;
          const theta = Math.random() * Math.PI * 2;
          const speed = (0.05 + Math.random() * 0.04) / Math.sqrt(r);
          particleData.push({ r, theta, speed });
          const lx = r * Math.cos(theta);
          const ly = r * Math.sin(theta) * Math.cos(Math.PI / 2.6);
          const lz = r * Math.sin(theta) * Math.sin(Math.PI / 2.6);
          particlePositions[i * 3] = lx;
          particlePositions[i * 3 + 1] = ly;
          particlePositions[i * 3 + 2] = lz;
        }
        const particleGeo = new THREE.BufferGeometry();
        particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        const particleMat = new THREE.PointsMaterial({
          size: 0.28,
          color: isDark ? 0x7dd3fc : 0x1d4ed8,
          transparent: true,
          opacity: 0.85,
          blending: THREE.AdditiveBlending
        });
        const particleSystem = new THREE.Points(particleGeo, particleMat);
        bhGroup.add(particleSystem);

        // 7. Relativistic Polar Jet Cones (Activate upon Wormhole Transition)
        const jetGeo1 = new THREE.CylinderGeometry(0.25, 2.0, 4.8, 32, 1, true);
        const jetMat1 = new THREE.MeshBasicMaterial({
          color: isDark ? 0x38bdf8 : 0x0284c7,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending
        });
        const jetMesh1 = new THREE.Mesh(jetGeo1, jetMat1);
        jetMesh1.rotation.order = 'ZXY';
        jetMesh1.rotation.x = Math.PI / 2.6;
        jetMesh1.position.z = 2.4;
        jetMesh1.visible = false;
        bhGroup.add(jetMesh1);

        const jetGeo2 = new THREE.CylinderGeometry(0.25, 2.0, 4.8, 32, 1, true);
        const jetMat2 = new THREE.MeshBasicMaterial({
          color: isDark ? 0xc084fc : 0x9333ea,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending
        });
        const jetMesh2 = new THREE.Mesh(jetGeo2, jetMat2);
        jetMesh2.rotation.order = 'ZXY';
        jetMesh2.rotation.x = Math.PI / 2.6;
        jetMesh2.position.z = -2.4;
        jetMesh2.visible = false;
        bhGroup.add(jetMesh2);

        // 8. Einstein-Rosen 3D Hyperbolic Throat Conduit Tube
        const throatGeo = new THREE.CylinderGeometry(0.85, 1.75, 5.6, 32, 16, true);
        const throatMat = new THREE.MeshBasicMaterial({
          color: isDark ? 0x38bdf8 : 0x1e56e3,
          wireframe: true,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending
        });
        const throatMesh = new THREE.Mesh(throatGeo, throatMat);
        throatMesh.rotation.order = 'ZXY';
        throatMesh.rotation.x = Math.PI / 2.6;
        throatMesh.visible = false;
        bhGroup.add(throatMesh);

        // 9. Internal Hyperspace Throat Gate Rings
        const throatRingsGroup = new THREE.Group();
        throatRingsGroup.rotation.order = 'ZXY';
        throatRingsGroup.rotation.x = Math.PI / 2.6;
        throatRingsGroup.visible = false;
        bhGroup.add(throatRingsGroup);

        const throatRingMeshes = [];
        const ringZDepths = [-2.0, -1.0, 0, 1.0, 2.0];
        for (let ri = 0; ri < ringZDepths.length; ri++) {
          const rad = 0.88 + Math.abs(ringZDepths[ri]) * 0.28;
          const trGeo = new THREE.RingGeometry(rad * 0.85, rad, 48);
          const trMat = new THREE.MeshBasicMaterial({
            color: isDark ? 0xc084fc : 0x9333ea,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.85,
            blending: THREE.AdditiveBlending
          });
          const trMesh = new THREE.Mesh(trGeo, trMat);
          trMesh.position.z = ringZDepths[ri];
          throatRingsGroup.add(trMesh);
          throatRingMeshes.push(trMesh);
        }

        const initialZ = getLossHeight(spawnX, spawnY, clock.getElapsedTime());
        bhGroup.position.set(spawnX, spawnY, initialZ);
        bhGroup.scale.set(0.001, 0.001, 0.001);

        activeBlackhole = {
          x: spawnX,
          y: spawnY,
          startTime: clock.getElapsedTime(),
          duration: 24.0, // Reduced deprecation speed: 24s baseline lifespan until completely healed back to original state
          currentStrength: 0,
          absorbedCount: 0,
          isWormhole: false,
          group: bhGroup,
          coreMesh: coreMesh,
          ringMesh: ringMesh,
          haloMesh: haloMesh,
          iscoMesh: iscoMesh,
          lensMesh: lensMesh,
          jetMesh1: jetMesh1,
          jetMesh2: jetMesh2,
          throatMesh: throatMesh,
          throatRingsGroup: throatRingsGroup,
          throatRingMeshes: throatRingMeshes,
          particleSystem: particleSystem,
          particleData: particleData
        };

        // Shockwave ripple upon black hole collapse
        rippleIntensity = 3.5;
        rippleX = spawnX;
        rippleY = spawnY;

        if (typeof console !== 'undefined' && console.info) {
          console.info('%c[Singularity]%c Gravitational singularity active on loss manifold. Feed 8 probes into the event horizon to open an Einstein-Rosen bridge.', 'color: #38bdf8; font-weight: bold;', 'color: inherit;');
        }
      }

      function triggerWormholeTransition(currentTime) {
        if (!activeBlackhole) return;
        activeBlackhole.isWormhole = true;
        activeBlackhole.duration = 18.0; // Wormhole duration: 18 seconds
        activeBlackhole.startTime = typeof currentTime === 'number' ? currentTime : clock.getElapsedTime();
        rippleIntensity = 4.8; // Relativistic supernova shockwave

        // Morph core sphere into a translucent, shimmering portal mouth
        activeBlackhole.coreMesh.material.transparent = true;
        activeBlackhole.coreMesh.material.opacity = isDark ? 0.35 : 0.26;
        activeBlackhole.coreMesh.material.color.setHex(isDark ? 0xe0f2fe : 0x38bdf8);
        activeBlackhole.coreMesh.material.blending = THREE.AdditiveBlending;
        activeBlackhole.coreMesh.material.needsUpdate = true;

        // Luminous Einstein-Rosen portal visual transformation (theme-responsive)
        activeBlackhole.iscoMesh.material.color.setHex(isDark ? 0xffffff : 0x67e8f9);
        activeBlackhole.ringMesh.material.color.setHex(isDark ? 0xc084fc : 0x9333ea);
        activeBlackhole.haloMesh.material.color.setHex(isDark ? 0x38bdf8 : 0x0284c7);
        if (activeBlackhole.lensMesh) activeBlackhole.lensMesh.material.color.setHex(isDark ? 0xe0f2fe : 0x38bdf8);
        if (activeBlackhole.particleSystem) activeBlackhole.particleSystem.material.color.setHex(isDark ? 0xe0f2fe : 0x38bdf8);

        // Activate 3D Hyperbolic Throat Conduit Tube
        if (activeBlackhole.throatMesh) {
          activeBlackhole.throatMesh.visible = true;
          activeBlackhole.throatMesh.material.opacity = isDark ? 0.85 : 0.65;
          activeBlackhole.throatMesh.material.color.setHex(isDark ? 0x38bdf8 : 0x1e56e3);
        }

        // Activate Cascading Hyperspace Gate Rings
        if (activeBlackhole.throatRingsGroup) {
          activeBlackhole.throatRingsGroup.visible = true;
        }

        // Activate twin 3D relativistic polar jet columns
        if (activeBlackhole.jetMesh1) {
          activeBlackhole.jetMesh1.visible = true;
          activeBlackhole.jetMesh1.material.color.setHex(isDark ? 0x38bdf8 : 0x0284c7);
          activeBlackhole.jetMesh1.material.opacity = 0.75;
        }
        if (activeBlackhole.jetMesh2) {
          activeBlackhole.jetMesh2.visible = true;
          activeBlackhole.jetMesh2.material.color.setHex(isDark ? 0xc084fc : 0x9333ea);
          activeBlackhole.jetMesh2.material.opacity = 0.75;
        }

        if (typeof console !== 'undefined' && console.info) {
          console.info('%c[Wormhole]%c Einstein-Rosen bridge opened. Core inverted into throat bridge; probes will teleport across the manifold.', 'color: #c084fc; font-weight: bold;', 'color: inherit;');
        }
      }

      window.__spawnBlackholeAt = function (x, y) {
        if (!activeBlackhole) {
          spawnBlackhole(x, y);
          return true;
        }
        return false;
      };

      window.__spawnBlackhole = function (x = 0, y = 0) {
        return window.__spawnBlackholeAt(x, y);
      };

      window.__getActiveBlackhole = function () {
        return activeBlackhole;
      };

      window.__triggerWormhole = function () {
        if (!activeBlackhole) {
          spawnBlackhole(0, 0);
        }
        if (activeBlackhole && !activeBlackhole.isWormhole) {
          activeBlackhole.absorbedCount = 8;
          triggerWormholeTransition();
          return true;
        }
        return false;
      };

      // Spawn initial demonstration probe on startup
      spawnProbe(-6, 8);

      // Dynamic Theme updater
      window.__updateCanvasTheme = function (dark) {
        isDark = dark;
        wireColor = dark ? 0x38bdf8 : 0x1e56e3;
        skinColor = dark ? 0x0e1726 : 0xe0e7ff;
        emissiveColor = dark ? 0x091e3a : 0x1e40af;

        wireMat.color.setHex(wireColor);
        wireMat.opacity = dark ? 0.38 : 0.24;
        skinMat.color.setHex(skinColor);
        skinMat.emissive.setHex(emissiveColor);
        skinMat.emissiveIntensity = dark ? 0.35 : 0.18;
        skinMat.opacity = dark ? 0.65 : 0.45;
        rimLight.color.setHex(dark ? 0x38bdf8 : 0x60a5fa);

        activeProbes.forEach(p => {
          p.mesh.material.color.setHex(dark ? 0x38bdf8 : 0x1e56e3);
          p.mesh.material.emissive.setHex(dark ? 0x0284c7 : 0x1d4ed8);
          p.traceMesh.material.color.setHex(dark ? 0x7dd3fc : 0x2563eb);
          p.traceMesh.material.opacity = dark ? 0.85 : 0.65;
        });

        if (activeBlackhole) {
          if (activeBlackhole.isWormhole) {
            activeBlackhole.coreMesh.material.transparent = true;
            activeBlackhole.coreMesh.material.opacity = dark ? 0.35 : 0.26;
            activeBlackhole.coreMesh.material.color.setHex(dark ? 0xe0f2fe : 0x38bdf8);
            activeBlackhole.ringMesh.material.color.setHex(dark ? 0xc084fc : 0x9333ea);
            activeBlackhole.haloMesh.material.color.setHex(dark ? 0x38bdf8 : 0x0284c7);
            if (activeBlackhole.iscoMesh) activeBlackhole.iscoMesh.material.color.setHex(dark ? 0xffffff : 0x67e8f9);
            if (activeBlackhole.lensMesh) activeBlackhole.lensMesh.material.color.setHex(dark ? 0xe0f2fe : 0x38bdf8);
            if (activeBlackhole.jetMesh1) activeBlackhole.jetMesh1.material.color.setHex(dark ? 0x38bdf8 : 0x0284c7);
            if (activeBlackhole.jetMesh2) activeBlackhole.jetMesh2.material.color.setHex(dark ? 0xc084fc : 0x9333ea);
            if (activeBlackhole.particleSystem) activeBlackhole.particleSystem.material.color.setHex(dark ? 0xe0f2fe : 0x38bdf8);
            if (activeBlackhole.throatMesh) activeBlackhole.throatMesh.material.color.setHex(dark ? 0x38bdf8 : 0x1e56e3);
            if (activeBlackhole.throatRingMeshes) {
              activeBlackhole.throatRingMeshes.forEach(trm => trm.material.color.setHex(dark ? 0xc084fc : 0x9333ea));
            }
          } else {
            activeBlackhole.coreMesh.material.transparent = false;
            activeBlackhole.coreMesh.material.opacity = 1.0;
            activeBlackhole.coreMesh.material.color.setHex(0x010204);
            activeBlackhole.ringMesh.material.color.setHex(dark ? 0x38bdf8 : 0x1e56e3);
            activeBlackhole.haloMesh.material.color.setHex(dark ? 0x818cf8 : 0x4338ca);
            if (activeBlackhole.iscoMesh) activeBlackhole.iscoMesh.material.color.setHex(dark ? 0xffffff : 0x93c5fd);
            if (activeBlackhole.lensMesh) activeBlackhole.lensMesh.material.color.setHex(dark ? 0x67e8f9 : 0x2563eb);
            if (activeBlackhole.particleSystem) activeBlackhole.particleSystem.material.color.setHex(dark ? 0x7dd3fc : 0x1d4ed8);
          }
        }
      };

      // Mouse Orbit, Raycast Click Detection & Interactive Physics
      let mouseX = 0, mouseY = 0;
      let isDragging = false;
      let prevMouseX = 0, prevMouseY = 0;
      let pointerDownPos = { x: 0, y: 0, time: 0, active: false };
      let clickStreakCount = 0;
      let lastClickTimestamp = 0;

      const raycaster = new THREE.Raycaster();
      const clickPointer = new THREE.Vector2();

      function handlePointerDown(clientX, clientY) {
        isDragging = true;
        if (canvasWrap) canvasWrap.style.cursor = 'grabbing';
        prevMouseX = clientX;
        prevMouseY = clientY;
        pointerDownPos = { x: clientX, y: clientY, time: Date.now(), active: true };
      }

      function handlePointerMove(clientX, clientY) {
        if (!canvasEl) return;
        const rect = canvasEl.getBoundingClientRect();
        if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
          if (canvasWrap) canvasWrap.style.cursor = 'default';
          return;
        }

        const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
        const ny = -((clientY - rect.top) / rect.height) * 2 + 1;
        mouseX = nx;
        mouseY = ny;

        if (isDragging) {
          if (canvasWrap) canvasWrap.style.cursor = 'grabbing';
          const deltaX = clientX - prevMouseX;
          const deltaY = clientY - prevMouseY;
          manifoldGroup.rotation.z += deltaX * 0.005;
          manifoldGroup.rotation.x += deltaY * 0.003;
          prevMouseX = clientX;
          prevMouseY = clientY;
        } else {
          // Accurate mathematical raycast sync with 3D loss surface
          clickPointer.set(nx, ny);
          raycaster.setFromCamera(clickPointer, camera);

          const intersects = raycaster.intersectObject(skinMesh);
          if (intersects.length > 0) {
            if (canvasWrap) canvasWrap.style.cursor = 'grab';
            const localP = skinMesh.worldToLocal(intersects[0].point.clone());
            rippleX = localP.x;
            rippleY = localP.y;
            rippleIntensity = 1.0;
          } else {
            if (canvasWrap) canvasWrap.style.cursor = 'default';
          }
        }
      }

      function isInteractiveTarget(el) {
        if (!el || !el.closest) return false;
        return !!el.closest('a, button, input, select, textarea, kbd, .hero-ledger, .proof-line-wrap, #proof-line, .site-header, dialog, .screenshot-lightbox, .modal');
      }

      function handlePointerUp(clientX, clientY, target) {
        if (canvasWrap) canvasWrap.style.cursor = 'default';
        if (!pointerDownPos.active) {
          isDragging = false;
          return;
        }
        isDragging = false;
        const dist = Math.hypot(clientX - pointerDownPos.x, clientY - pointerDownPos.y);
        const elapsed = Date.now() - pointerDownPos.time;

        // If user clicked without dragging (with balanced tolerance for touch & trackpads)
        if (dist < 18 && elapsed < 600) {
          if (isInteractiveTarget(target)) {
            pointerDownPos.active = false;
            return;
          }

          // If text was selected anywhere, do not spawn probe
          const selectedText = window.getSelection ? window.getSelection().toString().trim() : '';
          if (selectedText.length > 0) {
            pointerDownPos.active = false;
            return;
          }

          const rect = canvasEl.getBoundingClientRect();
          if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
            const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
            const ny = -((clientY - rect.top) / rect.height) * 2 + 1;
            clickPointer.set(nx, ny);
            raycaster.setFromCamera(clickPointer, camera);

            let spawnCoord = null;
            const intersects = raycaster.intersectObject(skinMesh);
            if (intersects.length > 0) {
              const localP = skinMesh.worldToLocal(intersects[0].point.clone());
              spawnCoord = { x: localP.x, y: localP.y };
            } else {
              // Virtual manifold plane projection so clicking anywhere in the hero background spawns a probe
              const groundPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
              const planePt = new THREE.Vector3();
              const localRay = raycaster.ray.clone().applyMatrix4(manifoldGroup.matrixWorld.clone().invert());
              if (localRay.intersectPlane(groundPlane, planePt)) {
                spawnCoord = {
                  x: Math.max(-32, Math.min(32, planePt.x)),
                  y: Math.max(-32, Math.min(32, planePt.y))
                };
              }
            }

            if (spawnCoord) {
              const now = Date.now();
              if (now - lastClickTimestamp < 650) {
                clickStreakCount++;
              } else {
                clickStreakCount = 1;
              }
              lastClickTimestamp = now;

              if (clickStreakCount === 3) {
                clickStreakCount = 0; // Reset streak upon triple click
                if (!activeBlackhole) {
                  spawnBlackhole(spawnCoord.x, spawnCoord.y);
                } else {
                  // Strict constraint: Maximum one blackhole at a time
                  spawnProbe(spawnCoord.x, spawnCoord.y);
                }
              } else {
                spawnProbe(spawnCoord.x, spawnCoord.y);
              }
            }
          }
        }
        pointerDownPos.active = false;
      }

      const heroSection = document.getElementById('top');

      function onHeroPointerDown(e) {
        if (isInteractiveTarget(e.target)) return;
        handlePointerDown(e.clientX, e.clientY);
      }

      heroSection?.addEventListener('mousedown', onHeroPointerDown);
      heroSection?.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
          if (isInteractiveTarget(e.target)) return;
          handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });

      window.addEventListener('mousemove', (e) => {
        handlePointerMove(e.clientX, e.clientY);
      });

      window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });

      window.addEventListener('mouseup', (e) => {
        handlePointerUp(e.clientX, e.clientY, e.target);
      });

      window.addEventListener('touchend', (e) => {
        if (e.changedTouches.length > 0) {
          handlePointerUp(e.changedTouches[0].clientX, e.changedTouches[0].clientY, e.target);
        } else {
          isDragging = false;
        }
      });

      // Resize Handling with Debounce
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          const w = canvasWrap ? canvasWrap.clientWidth : window.innerWidth;
          const h = canvasWrap ? canvasWrap.clientHeight : window.innerHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }, 150);
      });

      // Animation Loop
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        if (!prefersReduced) {
          // 1. Update Blackhole Lifecycle & Gradual Restoration
          if (activeBlackhole) {
            const age = elapsedTime - activeBlackhole.startTime;
            if (age >= activeBlackhole.duration) {
              // Surface completely returns to original state
              manifoldGroup.remove(activeBlackhole.group);
              activeBlackhole.coreMesh.geometry.dispose();
              activeBlackhole.coreMesh.material.dispose();
              activeBlackhole.ringMesh.geometry.dispose();
              activeBlackhole.ringMesh.material.dispose();
              activeBlackhole.haloMesh.geometry.dispose();
              activeBlackhole.haloMesh.material.dispose();
              if (activeBlackhole.iscoMesh) {
                activeBlackhole.iscoMesh.geometry.dispose();
                activeBlackhole.iscoMesh.material.dispose();
              }
              if (activeBlackhole.lensMesh) {
                activeBlackhole.lensMesh.geometry.dispose();
                activeBlackhole.lensMesh.material.dispose();
              }
              if (activeBlackhole.jetMesh1) {
                activeBlackhole.jetMesh1.geometry.dispose();
                activeBlackhole.jetMesh1.material.dispose();
              }
              if (activeBlackhole.jetMesh2) {
                activeBlackhole.jetMesh2.geometry.dispose();
                activeBlackhole.jetMesh2.material.dispose();
              }
              if (activeBlackhole.particleSystem) {
                activeBlackhole.particleSystem.geometry.dispose();
                activeBlackhole.particleSystem.material.dispose();
              }
              if (activeBlackhole.throatMesh) {
                activeBlackhole.throatMesh.geometry.dispose();
                activeBlackhole.throatMesh.material.dispose();
              }
              if (activeBlackhole.throatRingMeshes) {
                activeBlackhole.throatRingMeshes.forEach(trm => {
                  trm.geometry.dispose();
                  trm.material.dispose();
                });
              }
              activeBlackhole = null;
            } else {
              const progress = age / activeBlackhole.duration;
              let s = 0;
              if (progress < 0.08) {
                // Rapid gravitational collapse & formation in first 8% (~1.9s)
                s = Math.sin((progress / 0.08) * (Math.PI / 2));
              } else {
                // Smooth cosine relaxation back to 0 over remaining time until surface goes back to original state
                const decayP = (progress - 0.08) / 0.92;
                s = 0.5 * (1 + Math.cos(Math.PI * decayP));
              }
              activeBlackhole.currentStrength = s;

              const scale = Math.max(0.001, s);
              activeBlackhole.group.scale.set(scale, scale, scale);

              const centerZ = getLossHeight(activeBlackhole.x, activeBlackhole.y, elapsedTime) + 0.45;
              activeBlackhole.group.position.set(activeBlackhole.x, activeBlackhole.y, centerZ);

              // Accretion disk relativistic spin
              const spinMult = activeBlackhole.isWormhole ? 2.2 : 1.0;
              activeBlackhole.ringMesh.rotation.z += 0.08 * spinMult;
              activeBlackhole.haloMesh.rotation.z -= 0.045 * spinMult;
              if (activeBlackhole.iscoMesh) activeBlackhole.iscoMesh.rotation.z += 0.12 * spinMult;
              if (activeBlackhole.lensMesh) activeBlackhole.lensMesh.rotation.z += 0.035 * spinMult;

              // Relativistic 3D throat conduit, gate rings & polar jet dynamic oscillation during wormhole phase
              if (activeBlackhole.isWormhole) {
                if (activeBlackhole.throatMesh) {
                  activeBlackhole.throatMesh.rotation.z += 0.04;
                  const throb = 1.0 + Math.sin(elapsedTime * 4.2) * 0.08;
                  activeBlackhole.throatMesh.scale.set(throb, 1.0, throb);
                }
                if (activeBlackhole.throatRingMeshes) {
                  for (let ri = 0; ri < activeBlackhole.throatRingMeshes.length; ri++) {
                    const trm = activeBlackhole.throatRingMeshes[ri];
                    trm.rotation.z += (ri % 2 === 0 ? 0.06 : -0.06);
                    const pz = 0.88 + Math.sin(elapsedTime * 3.8 + ri * 1.1) * 0.2;
                    trm.scale.set(pz, pz, pz);
                  }
                }
                if (activeBlackhole.jetMesh1 && activeBlackhole.jetMesh2) {
                  activeBlackhole.jetMesh1.rotation.z -= 0.12;
                  activeBlackhole.jetMesh2.rotation.z += 0.12;
                  activeBlackhole.jetMesh1.position.z = 2.2 + Math.sin(elapsedTime * 6.0) * 0.35;
                  activeBlackhole.jetMesh2.position.z = -2.2 - Math.sin(elapsedTime * 6.0) * 0.35;
                }
              }

              // Accretion particle Keplerian orbital motion & wormhole conduit transfer
              if (activeBlackhole.particleData && activeBlackhole.particleSystem) {
                const pArr = activeBlackhole.particleSystem.geometry.attributes.position.array;
                const pList = activeBlackhole.particleData;
                for (let pi = 0; pi < pList.length; pi++) {
                  const pd = pList[pi];
                  if (activeBlackhole.isWormhole) {
                    pd.theta += pd.speed * 2.2;
                    pd.r -= 0.007 * s;
                    if (pd.r < 1.1) {
                      pd.zTunnel = (pd.zTunnel !== undefined ? pd.zTunnel : 2.2) - 0.16;
                      if (pd.zTunnel < -2.2) {
                        pd.r = 4.6 + Math.random() * 0.6;
                        pd.zTunnel = 2.2;
                      }
                    } else {
                      pd.zTunnel = (Math.random() - 0.5) * 0.25;
                    }
                  } else {
                    pd.theta += pd.speed;
                    pd.r -= 0.0035 * s;
                    if (pd.r < 1.45) pd.r = 4.8 + Math.random() * 0.4;
                    pd.zTunnel = 0;
                  }
                  const cosA = Math.cos(pd.theta);
                  const sinA = Math.sin(pd.theta);
                  pArr[pi * 3] = pd.r * cosA;
                  pArr[pi * 3 + 1] = pd.r * sinA * Math.cos(Math.PI / 2.6);
                  pArr[pi * 3 + 2] = pd.r * sinA * Math.sin(Math.PI / 2.6) + (pd.zTunnel || 0);
                }
                activeBlackhole.particleSystem.geometry.attributes.position.needsUpdate = true;
              }
            }
          }

          // 2. Update Topological Loss Manifold Vertices
          const pos = planeGeo.attributes.position;
          for (let idx = 0; idx < vertexCount; idx++) {
            const x = pos.getX(idx);
            const y = pos.getY(idx);
            pos.setZ(idx, getLossHeight(x, y, elapsedTime));
          }
          pos.needsUpdate = true;
          planeGeo.computeVertexNormals();

          // 3. Update Active Descent Probes & Traces
          const eps = 0.25;
          const MAX_PROBE_SPEED = 0.52;
          for (let pIdx = activeProbes.length - 1; pIdx >= 0; pIdx--) {
            const p = activeProbes[pIdx];

            // Gravitational pull, Keplerian orbital accretion & wormhole mechanics
            if (activeBlackhole && activeBlackhole.currentStrength > 0.01) {
              const toBx = activeBlackhole.x - p.x;
              const toBy = activeBlackhole.y - p.y;
              const distToB = Math.sqrt(toBx * toBx + toBy * toBy);
              const captureRadius = 1.45 * Math.max(0.35, activeBlackhole.currentStrength);

              if (activeBlackhole.isWormhole) {
                // --- EINSTEIN-ROSEN WORMHOLE PROTOCOL ---
                if (distToB <= captureRadius * 1.15) {
                  // Ball enters the throat and is teleported/ejected across the manifold
                  const exitAngle = Math.random() * Math.PI * 2;
                  const exitDist = 14 + Math.random() * 8;
                  p.x = Math.max(-28, Math.min(28, activeBlackhole.x + Math.cos(exitAngle) * exitDist));
                  p.y = Math.max(-28, Math.min(28, activeBlackhole.y + Math.sin(exitAngle) * exitDist));
                  p.vx = Math.cos(exitAngle) * 0.44;
                  p.vy = Math.sin(exitAngle) * 0.44;
                  p.history = [{ x: p.x, y: p.y }];
                  const exitZ = getLossHeight(p.x, p.y, elapsedTime) + 0.65;
                  p.mesh.position.set(p.x, p.y, exitZ);
                  p.trailPositions[0] = p.x;
                  p.trailPositions[1] = p.y;
                  p.trailPositions[2] = exitZ - 0.49;
                  p.traceMesh.geometry.attributes.position.needsUpdate = true;
                  p.traceMesh.geometry.setDrawRange(0, 0);
                  // Wormhole exit flare shockwave
                  rippleIntensity = 2.6;
                  rippleX = p.x;
                  rippleY = p.y;
                  continue;
                } else {
                  // Relativistic swirl around the wormhole throat
                  const pull = (activeBlackhole.currentStrength * 1.5) / (distToB * distToB + 2.5);
                  p.vx += (toBx / distToB) * pull;
                  p.vy += (toBy / distToB) * pull;
                  p.vx += (-toBy / distToB) * pull * 0.95;
                  p.vy += (toBx / distToB) * pull * 0.95;
                }
              } else {
                // --- BLACK HOLE ACCRETION & REJUVENATING FEEDING PROTOCOL ---
                if (distToB <= captureRadius) {
                  // Cleanly swallowed into the event horizon
                  p.swallowed = true;

                  // Rejuvenate black hole: add +1.5s lifespan (making it younger by winding back elapsed time)
                  activeBlackhole.absorbedCount = (activeBlackhole.absorbedCount || 0) + 1;
                  activeBlackhole.startTime += 1.5;
                  if (activeBlackhole.startTime > elapsedTime - 0.08 * activeBlackhole.duration) {
                    activeBlackhole.startTime = elapsedTime - 0.08 * activeBlackhole.duration;
                  }

                  // Accretion feeding shockwave ripple
                  rippleIntensity = 2.8;
                  rippleX = activeBlackhole.x;
                  rippleY = activeBlackhole.y;

                  // Check if 8 balls threshold reached -> WORMHOLE PHASE TRANSITION
                  if (activeBlackhole.absorbedCount >= 8) {
                    activeBlackhole.isWormhole = true;
                    activeBlackhole.duration = 18.0; // Wormhole duration: 18 seconds
                    activeBlackhole.startTime = elapsedTime;
                    triggerWormholeTransition(elapsedTime);
                  }
                } else {
                  // Smooth relativistic Keplerian spiral physics
                  const uRx = toBx / distToB;
                  const uRy = toBy / distToB;
                  const uTx = -toBy / distToB;
                  const uTy = toBx / distToB;

                  // Target Keplerian orbital speed: v_orbit ~ sqrt(GM / r)
                  const vTarget = Math.min(0.48, 0.35 / Math.sqrt(Math.max(1.2, distToB)));
                  const currentVR = p.vx * uRx + p.vy * uRy;
                  const currentVT = p.vx * uTx + p.vy * uTy;

                  // Relativistic ISCO plunge: when entering innermost stable orbit, radial inward pull accelerates
                  const plunge = distToB < 3.2 ? (1.0 + (3.2 - distToB) * 0.85) : 1.0;
                  const pullR = ((activeBlackhole.currentStrength * 0.055) / (distToB * 0.3 + 1.0)) * plunge;

                  // Viscous accretion disk steering and tangential momentum
                  const newVT = currentVT * 0.92 + vTarget * 0.08 * Math.sign(currentVT || 1);
                  const newVR = currentVR * 0.92 + pullR;

                  p.vx = uRx * newVR + uTx * newVT;
                  p.vy = uRy * newVR + uTy * newVT;
                }
              }
            }

            if (p.swallowed) {
              probesGroup.remove(p.mesh);
              probesGroup.remove(p.traceMesh);
              p.mesh.geometry.dispose();
              p.mesh.material.dispose();
              p.traceMesh.geometry.dispose();
              p.traceMesh.material.dispose();
              activeProbes.splice(pIdx, 1);
              continue;
            }

            // Finite difference gradient ∇H(x, y)
            const hL = getLossHeight(p.x - eps, p.y, elapsedTime);
            const hR = getLossHeight(p.x + eps, p.y, elapsedTime);
            const hD = getLossHeight(p.x, p.y - eps, elapsedTime);
            const hU = getLossHeight(p.x, p.y + eps, elapsedTime);

            const gradX = (hR - hL) / (2 * eps);
            const gradY = (hU - hD) / (2 * eps);

            // In accretion zone, blend gradient descent with orbital momentum
            const inAccretion = activeBlackhole && !activeBlackhole.isWormhole && (Math.hypot(activeBlackhole.x - p.x, activeBlackhole.y - p.y) < 6.0);
            const gradDamp = inAccretion ? 0.015 : 0.045;

            // Momentum + Gradient Descent
            p.vx = p.vx * 0.935 - gradX * gradDamp;
            p.vy = p.vy * 0.935 - gradY * gradDamp;

            // Strict velocity clamping to prevent numerical explosion and pinball slingshots
            const speed = Math.hypot(p.vx, p.vy);
            if (speed > MAX_PROBE_SPEED) {
              p.vx = (p.vx / speed) * MAX_PROBE_SPEED;
              p.vy = (p.vy / speed) * MAX_PROBE_SPEED;
            }

            p.x += p.vx;
            p.y += p.vy;

            // Soft boundary dampening
            if (Math.abs(p.x) > 30) { p.x = Math.sign(p.x) * 30; p.vx *= -0.3; }
            if (Math.abs(p.y) > 30) { p.y = Math.sign(p.y) * 30; p.vy *= -0.3; }

            const currentZ = getLossHeight(p.x, p.y, elapsedTime) + 0.65;
            p.mesh.position.set(p.x, p.y, currentZ);
            p.mesh.rotation.x += 0.03;
            p.mesh.rotation.y += 0.04;

            // Append history point
            if (p.history.length < p.maxTrail) {
              p.history.push({ x: p.x, y: p.y });
            } else {
              p.history.shift();
              p.history.push({ x: p.x, y: p.y });
            }

            // Update luminous trace buffer
            const posArr = p.trailPositions;
            const count = p.history.length;
            for (let h = 0; h < count; h++) {
              const pt = p.history[h];
              const hz = getLossHeight(pt.x, pt.y, elapsedTime) + 0.16;
              posArr[h * 3] = pt.x;
              posArr[h * 3 + 1] = pt.y;
              posArr[h * 3 + 2] = hz;
            }
            p.traceMesh.geometry.attributes.position.needsUpdate = true;
            p.traceMesh.geometry.setDrawRange(0, count < 2 ? 0 : count);
          }

          // Gentle rotation & ripple decay
          manifoldGroup.rotation.z += 0.0008;
          rippleIntensity *= 0.96;
        }

        // Camera gentle drift
        camera.position.x += (mouseX * 4 - camera.position.x + 24) * 0.02;
        camera.position.y += (-mouseY * 4 - camera.position.y + 28) * 0.02;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      }

      animate();

    } catch (err) {
      console.warn('Three.js WebGL initialization failed, falling back to 2D canvas simulation:', err);
      initFallback2DCanvas();
    }
  }

  // --- Fallback 2D Canvas Engine ---
  function initFallback2DCanvas() {
    if (!canvasEl) return;
    const ctx = canvasEl.getContext('2d');
    if (!ctx) return;

    let width = (canvasEl.width = canvasWrap ? canvasWrap.clientWidth : window.innerWidth);
    let height = (canvasEl.height = canvasWrap ? canvasWrap.clientHeight : window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvasEl.width = canvasWrap ? canvasWrap.clientWidth : window.innerWidth;
      height = canvasEl.height = canvasWrap ? canvasWrap.clientHeight : window.innerHeight;
    });

    let t = 0;
    function render2D() {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);
      const isDark = root.getAttribute('data-theme') === 'dark';
      ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(30, 86, 227, 0.18)';
      ctx.lineWidth = 1;

      for (let j = 0; j < 12; j++) {
        ctx.beginPath();
        for (let i = 0; i < width; i += 20) {
          const y = height * 0.4 + Math.sin(i * 0.006 + t + j * 0.4) * 40 + j * 20;
          if (i === 0) ctx.moveTo(i, y);
          else ctx.lineTo(i, y);
        }
        ctx.stroke();
      }
      requestAnimationFrame(render2D);
    }
    render2D();
  }

  // Initialize Canvas & Hydrate DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      hydrateDOM();
      initWebGLCanvas();
    });
  } else {
    hydrateDOM();
    initWebGLCanvas();
  }

  // Re-hydrate DOM whenever language changes
  window.addEventListener('portfolio:langchange', () => {
    hydrateDOM();
    if (projectModal && projectModal.open && currentOpenProjectId) {
      openProjectModal(currentOpenProjectId);
    }
  });

})();

