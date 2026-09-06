/**
 * Farnam Taheri — Resume Print & Dynamic Hydration Script
 */
(() => {
  'use strict';

  const $ = (s) => document.querySelector(s);

  function hydrateResume() {
    const d = (window.I18N && window.I18N.getActiveData) ? window.I18N.getActiveData() : window.PORTFOLIO_DATA;
    if (!d) return;

    const advUrl = (d.thesis && d.thesis.advisorUrl) || (d.person && d.person.advisorUrl) || 'https://www.sepahsalari.com/';
    const instUrl = (d.person && d.person.instituteUrl) || 'https://teias.institute';

    function linkAcademicEntities(text) {
      if (!text) return '';
      let res = text.replace(
        /(?:Prof\. Alireza Sepahsalari|دکتر علیرضا سپه‌سالاری)/g,
        `<a href="${advUrl}" target="_blank" rel="noreferrer" class="resume-link advisor-link">$&</a>`
      );
      res = res.replace(
        /(?:Tehran Institute for Advanced Studies \(TeIAS\)|Tehran Institute for Advanced Studies|\bTeIAS\b|موسسه تحقیقات پیشرفته تهران \(TeIAS\)[\u200E\u200F]?|موسسه تحقیقات پیشرفته تهران)/g,
        `<a href="${instUrl}" target="_blank" rel="noreferrer" class="resume-link institute-link">$&</a>`
      );
      return res;
    }

    function linkAdvisor(text) {
      return linkAcademicEntities(text);
    }

    // 1. Header & Identity
    if ($('#resume-name') && d.person) $('#resume-name').textContent = d.person.name;
    if ($('#resume-roles') && d.person && d.person.roles) $('#resume-roles').textContent = d.person.roles.join(' · ');
    
    if ($('#resume-summary') && d.person) {
      $('#resume-summary').innerHTML = linkAdvisor(d.person.statement);
    }

    // 2. Contact Ledger
    if ($('#resume-contact') && d.person) {
      const mailSvg = `<svg class="icon-svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
      const phoneSvg = `<svg class="icon-svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
      const locSvg = `<svg class="icon-svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

      $('#resume-contact').innerHTML = `
        <div class="contact-line"><a href="mailto:${d.person.email}">${mailSvg} <span>${d.person.email}</span></a></div>
        ${d.person.phone ? `<div class="contact-line"><a href="tel:${d.person.phone}">${phoneSvg} <span>${d.person.phone}</span></a></div>` : ''}
        <div class="contact-line"><a href="${d.person.github}" target="_blank" rel="noreferrer">↗ <span>${d.person.githubLabel}</span></a></div>
        <div class="contact-line"><a href="${d.person.linkedin}" target="_blank" rel="noreferrer">↗ <span>${d.person.linkedinLabel || 'LinkedIn'}</span></a></div>
        <div class="contact-line"><span class="contact-loc">${locSvg} <span>${d.person.location || 'Tehran, Iran'}</span></span></div>
      `;
    }

    // 3. Master's Thesis Research
    if ($('#resume-thesis') && d.thesis) {
      const t = d.thesis;
      const thesisAdvUrl = t.advisorUrl || advUrl;
      const thesisBadge = (window.I18N && window.I18N.t('resume_thesis_badge')) || 'Master’s Thesis';
      const advisorLabel = (window.I18N && window.I18N.t('resume_advisor_label')) || 'Advisor';
      const microdataLabel = (window.I18N && window.I18N.t('resume_microdata_label')) || 'Microdata';
      const stackLabel = (window.I18N && window.I18N.t('resume_stack_label')) || 'Computational Stack';

      $('#resume-thesis').innerHTML = `
        <article class="resume-item thesis-item">
          <div class="resume-item-title">
            <h3>${t.title}</h3>
            <span class="score badge">${thesisBadge}</span>
          </div>
          <p class="resume-item-sub mono">${linkAcademicEntities(t.subtitle)}${t.advisor ? ` · ${advisorLabel}: <a href="${thesisAdvUrl}" target="_blank" rel="noreferrer" class="resume-link advisor-link">${t.advisor}</a>` : ''}</p>
          <ul class="resume-bullets">
            ${(t.methodology || []).map((b) => `<li>${b}</li>`).join('')}
          </ul>
          <div class="resume-tags">
            <strong>${microdataLabel}:</strong> NLSY79, O*NET, CPS · <strong>${stackLabel}:</strong> ${(t.tools || []).join(' · ')}
          </div>
        </article>
      `;
    }

    // 4. Graduate & Minor Coursework
    const courses = d.coursework || [];
    if ($('#resume-courses') && courses.length > 0) {
      $('#resume-courses').innerHTML = courses.map((c) => {
        if (c.isConsolidated) {
          const cellItems = (c.cells || []).map(cell => {
            const tools = Array.isArray(cell.tools) ? cell.tools : (cell.tool ? cell.tool.split(' · ').map(s => s.trim()) : []);
            const toolBadge = tools.length > 0 ? `<span class="cell-tool-chip">${tools.join(', ')}</span>` : '';
            return `<span class="cell-pill">${cell.name}${toolBadge ? ` ${toolBadge}` : ''}: <strong>${cell.score}</strong></span>`;
          }).join(' · ');
          return `
            <article class="resume-item course-item">
              <div class="resume-item-title">
                <h3 style="font-size: 11px;">${c.subject}</h3>
              </div>
              <div class="resume-tags cell-grid" style="margin-top: 2px;">${cellItems}</div>
            </article>
          `;
        }
        const tools = Array.isArray(c.tools) ? c.tools.join(' · ') : (c.tools || '');
        const topics = Array.isArray(c.topics) ? c.topics.slice(0, 4).join(' · ') : (c.topics || '');
        const repoUrl = c.href ? `<a href="${c.href}" target="_blank" rel="noreferrer" class="resume-repo-link">↗ GitHub</a>` : '';
        return `
          <article class="resume-item course-item">
            <div class="resume-item-title">
              <h3 style="font-size: 11px;">${c.course || c.title} ${repoUrl}</h3>
              <span class="score badge">${c.score}</span>
            </div>
            <div class="resume-tags" style="margin-top: 2px;">
              ${tools ? `<strong>[${tools}]</strong> ` : ''}${topics}
            </div>
          </article>
        `;
      }).join('');
    }

    // 5. Passion Projects (All 3 Flagship Projects)
    const projects = d.featured || d.featuredProjects || [];
    if ($('#resume-projects') && projects.length > 0) {
      const projStackLabel = (window.I18N && window.I18N.t('resume_project_stack_label')) || 'Stack';
      $('#resume-projects').innerHTML = projects.map((p) => {
        const repoUrl = p.architectureRepoUrl || (p.links && p.links.repo) || '';
        const repoLink = repoUrl ? `<a href="${repoUrl}" target="_blank" rel="noreferrer" class="resume-repo-link">↗ GitHub</a>` : '';
        return `
          <article class="resume-item project-item">
            <div class="resume-item-title">
              <h3 style="font-size: 11px;">${p.name || p.title} — <span class="muted-title">${p.subtitle}</span> ${repoLink}</h3>
              <span class="score badge">${p.kind.split('/')[0].trim()}</span>
            </div>
            <div class="resume-tags" style="margin-top: 2px;">
              <strong>${projStackLabel}:</strong> ${(p.stack || p.tags || []).join(' · ')}
            </div>
          </article>
        `;
      }).join('');
    }

    // 6. Academic Education & Honors
    const edu = d.education || [];
    if ($('#resume-education') && edu.length > 0) {
      $('#resume-education').innerHTML = edu.map((e) => {
        const noteHtml = e.note
          ? `<p class="education-note">${linkAdvisor(e.note)}</p>`
          : '';
        return `
          <div class="education-compact">
            <div class="education-title-row">
              <strong>${e.degree}</strong>
              ${e.gpa ? `<span class="score badge">${e.gpa}</span>` : ''}
            </div>
            <div class="education-meta">${linkAcademicEntities(e.school)} (${e.dates})</div>
            ${noteHtml}
          </div>
        `;
      }).join('') + (d.honors && d.honors.length > 0 ? `
        <div class="education-compact honors-box">
          <div class="education-title-row">
            <strong class="honor-title">✦ ${d.honors[0].title}</strong>
            <span class="score badge">${d.honors[0].year}</span>
          </div>
          <p class="education-note">${d.honors[0].context}</p>
        </div>
      ` : '');
    }
  }

  // Hook up language switcher in resume toolbar
  const resumeLangToggle = $('#resume-lang-toggle');
  if (resumeLangToggle) {
    resumeLangToggle.addEventListener('click', () => {
      if (window.I18N && typeof window.I18N.toggleLanguage === 'function') {
        window.I18N.toggleLanguage();
      }
    });
  }

  // Listen to language changes
  window.addEventListener('portfolio:langchange', hydrateResume);

  // Initial execution
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hydrateResume);
  } else {
    hydrateResume();
  }
})();

