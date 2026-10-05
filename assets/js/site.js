/* No framework, analytics, cookies, API keys, or live release lookup. */
(() => {
  'use strict';
  const data = window.HIJINKS;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  // URLs are curated in site-data.js; reject executable or unexpected schemes.
  const safeURL = value => {
    if (!value) return '';
    try { const url = new URL(value, location.href); return ['http:', 'https:', 'file:'].includes(url.protocol) ? escape(value) : ''; } catch { return ''; }
  };
  const dateLabel = value => new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC' }).format(new Date(value + 'T12:00:00Z'));
  const arrow = '<span aria-hidden="true">↗</span>';
  const external = (url, text, className = 'text-link') => safeURL(url) ? `<a class="${className}" href="${safeURL(url)}">${escape(text)} ${arrow}</a>` : '';
  const projectLink = project => `project.html?id=${encodeURIComponent(project.id)}`;
  const icon = type => type === 'bolt'
    ? '<svg viewBox="0 0 80 80" fill="none" aria-hidden="true"><path d="M44 8 18 43h20l-3 29 27-39H42l2-25Z" stroke="currentColor" stroke-width="3"/><path d="M13 19h12M55 62h12" stroke="currentColor" stroke-width="2"/></svg>'
    : '<svg viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="40" r="23" stroke="currentColor" stroke-width="2"/><circle cx="40" cy="40" r="9" stroke="currentColor" stroke-width="2"/><path d="M40 5v21m0 28v21M5 40h21m28 0h21" stroke="currentColor" stroke-width="3"/><path d="m10 20 10-10m40 0 10 10M10 60l10 10m40 0 10-10" stroke="currentColor"/></svg>';

  const page = document.body.dataset.page;
  const navItem = (url, label, active) => `<a href="${url}" ${active ? 'aria-current="page"' : ''}>${label}</a>`;
  $('#site-header').innerHTML = `<div class="container header-layout"><a class="brand" href="index.html" aria-label="Hijinks home"><img src="assets/images/mark.svg" alt="" width="40" height="40"><span>HIJINKS<small>HELLDIVERS 2 / MODS & GUIDES</small></span></a><button class="menu-toggle" aria-expanded="false" aria-controls="site-nav"><span>Menu</span><span aria-hidden="true">☰</span></button><nav id="site-nav" aria-label="Main navigation">${navItem('index.html#projects', 'Projects', page === 'project')}${navItem('docs.html', 'Field manual', page === 'docs')}${navItem('changelog.html', 'Changelog', page === 'changelog')}${navItem('index.html#guides', 'Guides', false)}<a class="nav-github" href="${safeURL(data.github)}">GitHub ${arrow}</a></nav></div>`;
  $('#site-footer').innerHTML = `<div class="container footer-layout"><div><a class="brand footer-brand" href="index.html"><img src="assets/images/mark.svg" alt="" width="32" height="32"><span>HIJINKS<small>FOR FELLOW DIVERS.</small></span></a><p>Independent community mods and guides.<br>Helldivers 2 belongs to its respective owners.</p></div><div class="footer-links">${external(data.github, 'GitHub')}${external(data.nexus, 'Nexus Mods')}<a href="docs.html">Installation & help</a></div><p class="footer-signoff">UNOFFICIAL.<br><span>DEMOCRATICALLY MOTIVATED.</span><small>© 2026 Hijinks · <a href="credits.html">Credits</a></small></p></div>`;
  const menu = $('.menu-toggle');
  menu.addEventListener('click', () => { const expanded = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', expanded); $('#site-nav').classList.toggle('open', expanded); });
  $$('#site-nav a').forEach(link => link.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); $('#site-nav').classList.remove('open'); }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { menu.setAttribute('aria-expanded', 'false'); $('#site-nav').classList.remove('open'); menu.focus(); } });

  function projectCard(project, index) {
    return `<article class="project-card" data-category="${escape(project.category)}" data-search="${escape([project.name, project.code, project.category, project.description].join(' ').toLowerCase())}"><a href="${projectLink(project)}" class="card-media" aria-label="Explore ${escape(project.name)}"><img src="${safeURL(project.image)}" alt="${escape(project.imageAlt)}" loading="lazy" width="600" height="600"><span class="media-index" aria-hidden="true">PROJECT / ${String(index + 1).padStart(2, '0')}</span></a><div class="card-content"><div class="card-meta"><span class="category">${escape(project.category)}</span><span class="status"><span aria-hidden="true"></span> ${escape(project.status)} · v${escape(project.version)}</span></div><h3><a href="${projectLink(project)}">${escape(project.name.toUpperCase())}</a></h3><p>${escape(project.description)}</p><div class="card-features">${project.features.slice(0, 2).map(feature => `<span>${escape(feature)}</span>`).join('')}</div><div class="card-actions">${external(project.download, `Download v${project.version}`, 'button primary small')}<a class="button outline small" href="${projectLink(project)}">Project details <span aria-hidden="true">→</span></a></div><div class="card-resource-links">${external(project.nexus, 'Nexus')}${external(project.release, 'Release notes')}<a href="docs.html#${encodeURIComponent(project.id)}">Install guide</a></div></div></article>`;
  }
  function updateRow(update) {
    const project = data.projects.find(item => item.id === update.project);
    if (!project) return '';
    return `<article class="update-row"><time datetime="${escape(update.date)}">${dateLabel(update.date)}</time><div><span class="release-label">${escape(project.code)} <b>v${escape(update.version)}</b></span><h3>${escape(update.title)}</h3></div>${external(update.url, 'Release notes')}</article>`;
  }
  function installPanel(project) {
    return `<article id="${escape(project.id)}" class="content-panel install-panel"><div class="panel-top"><div><span class="release-label">${escape(project.code)} / v${escape(project.version)}</span><h2>${escape(project.name.toUpperCase())}</h2></div><a class="text-link" href="${projectLink(project)}">Project details →</a></div><div class="notice"><strong>Requirements</strong><p>${escape(project.requirements)}</p><strong>Compatibility</strong><p>${escape(project.compatibility)}</p></div><ol class="install-steps">${project.install.map(step => `<li>${escape(step)}</li>`).join('')}</ol><div class="actions">${external(project.download, `Download v${project.version}`, 'button primary small')}${external(project.upstreamDocs, 'Source documentation')}</div><p class="muted">${escape(project.usage)}</p></article>`;
  }

  if (page === 'home') {
    $('#project-grid').innerHTML = data.projects.map(projectCard).join('');
    $('.filter[data-filter="all"] span').textContent = String(data.projects.length).padStart(2, '0');
    $('#guide-grid').innerHTML = data.guides.map((guide, index) => `<a class="guide-card" href="${safeURL(guide.url)}"><div class="guide-symbol">${icon(guide.icon)}<span class="guide-number">0${index + 1}</span></div><div><p class="eyebrow">${escape(guide.label)}</p><h3>${escape(guide.title.toUpperCase())}</h3><p class="guide-subtitle">${escape(guide.subtitle)}</p><p>${escape(guide.description)}</p><span class="guide-cta">Read on Steam ${arrow}</span></div></a>`).join('');
    $('#latest-updates').innerHTML = data.updates.slice(0, 2).map(updateRow).join('');
    let category = 'all';
    function filterProjects() {
      const query = $('#project-search').value.trim().toLowerCase();
      let count = 0;
      $$('.project-card').forEach(card => { const match = (category === 'all' || card.dataset.category === category) && card.dataset.search.includes(query); card.hidden = !match; if (match) count++; });
      $('#no-results').hidden = count !== 0;
      $('#filter-status').textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown.`;
    }
    $$('.filter[data-filter]').forEach(button => button.addEventListener('click', () => { category = button.dataset.filter; $$('.filter[data-filter]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); }); filterProjects(); }));
    $('#project-search').addEventListener('input', filterProjects);
    filterProjects();
  }
  if (page === 'docs') $('#manual-projects').innerHTML = data.projects.map(installPanel).join('');
  if (page === 'changelog') {
    function renderReleases(filter) {
      const updates = data.updates.filter(item => filter === 'all' || item.project === filter);
      $('#release-list').innerHTML = updates.map(update => { const project = data.projects.find(item => item.id === update.project); if (!project) return ''; return `<article class="content-panel release-panel"><div class="panel-top"><span class="release-label">${escape(project.name)} / v${escape(update.version)}</span><time datetime="${escape(update.date)}">${dateLabel(update.date)}</time></div><h2>${escape(update.title.toUpperCase())}</h2><ul class="plain-list">${update.notes.map(note => `<li>${escape(note)}</li>`).join('')}</ul>${external(update.url, 'Full release notes')}</article>`; }).join('');
      $('#release-status').textContent = `${updates.length} releases shown.`;
    }
    $$('.filter[data-release-filter]').forEach(button => button.addEventListener('click', () => { $$('.filter[data-release-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); }); renderReleases(button.dataset.releaseFilter); }));
    renderReleases('all');
  }
  if (page === 'project') {
    const id = new URLSearchParams(location.search).get('id');
    const project = data.projects.find(item => item.id === id);
    if (!project) {
      document.title = 'Project not found | Hijinks';
      $('#main').innerHTML = '<p class="eyebrow">Signal lost</p><h1 class="page-title">PROJECT NOT FOUND.</h1><p class="page-lead">This project is not in the public field kit.</p><a class="button primary" href="index.html#projects">Return to projects →</a>';
      return;
    }
    document.title = `${project.name} | Hijinks`;
    $('meta[name="description"]').setAttribute('content', project.description);
    $('#main').innerHTML = `<a class="breadcrumb" href="index.html#projects">← All projects</a><section class="project-hero"><div><p class="eyebrow">${escape(project.category)} / ${escape(project.status)}</p><h1 class="page-title">${escape(project.name.toUpperCase())}</h1><p class="project-tagline">${escape(project.tagline)}</p><p class="page-lead">${escape(project.description)}</p><div class="actions">${external(project.download, `Download v${project.version}`, 'button primary')}${external(project.release, 'Latest published release')}</div><p class="snapshot-note">Published ${dateLabel(project.date)} · GitHub release</p><div class="project-external">${external(project.nexus, 'View on Nexus')}${external(project.repo, 'Source on GitHub')}</div></div><button class="project-hero-media media-open" data-media="0" aria-label="Expand ${escape(project.name)} artwork"><img src="${safeURL(project.image)}" alt="${escape(project.imageAlt)}" width="600" height="600"><span>PROJECT ARTWORK <span aria-hidden="true">⤢</span></span></button></section><nav class="project-section-nav" aria-label="Project sections"><a href="#overview">Overview</a><a href="#install">Installation</a><a href="#media">Media</a><a href="#changes">Changelog</a><a href="#questions">FAQ</a></nav><div class="detail-columns"><div><section id="overview" class="content-panel"><p class="eyebrow">The brief</p><h2>WHAT IT DOES.</h2><ul class="feature-list">${project.features.map(feature => `<li><span aria-hidden="true">✓</span>${escape(feature)}</li>`).join('')}</ul><p>${escape(project.usage)}</p><h3>KEEP IN MIND</h3><ul class="plain-list">${project.limitations.map(item => `<li>${escape(item)}</li>`).join('')}</ul></section><section id="install" class="content-panel"><p class="eyebrow">Deployment</p><h2>INSTALLATION.</h2><ol class="install-steps">${project.install.map(step => `<li>${escape(step)}</li>`).join('')}</ol><div class="download-file"><code>${escape(project.filename)}</code><button class="copy-button" type="button">Copy filename</button></div><p id="copy-status" class="copy-status" role="status"></p>${external(project.upstreamDocs, 'Complete source documentation')}</section><section id="media" class="content-panel"><p class="eyebrow">Visual briefing</p><h2>PROJECT MEDIA.</h2><div class="media-grid">${project.media.map((item, index) => `<figure><button class="media-open gallery-button" data-media="${index}" aria-label="Expand ${escape(item.caption)}"><img src="${safeURL(item.src)}" alt="${escape(item.alt)}" loading="lazy" width="600" height="600"><span>${escape(item.type)} <span aria-hidden="true">⤢</span></span></button><figcaption>${escape(item.caption)}</figcaption></figure>`).join('')}</div><p class="snapshot-note">Project artwork is shown here. Gameplay screenshots and videos will be added when available.</p></section><section id="changes" class="content-panel"><p class="eyebrow">Release history</p><h2>CHANGELOG.</h2>${data.updates.filter(update => update.project === project.id).map(update => `<div class="inline-release"><span class="release-label">v${escape(update.version)} / ${dateLabel(update.date)}</span><h3>${escape(update.title)}</h3><ul class="plain-list">${update.notes.map(note => `<li>${escape(note)}</li>`).join('')}</ul>${external(update.url, 'Complete release notes')}</div>`).join('')}</section><section id="questions" class="content-panel"><p class="eyebrow">Questions from the field</p><h2>GOOD TO KNOW.</h2>${project.faq.map(item => `<details><summary>${escape(item.question)}</summary><p>${escape(item.answer)}</p></details>`).join('')}</section></div><aside class="project-aside"><div class="content-panel"><p class="eyebrow">Mission requirements</p><h3>BEFORE YOU INSTALL</h3><dl><dt>Version</dt><dd>${escape(project.version)}</dd><dt>Dependencies</dt><dd>${escape(project.requirements)}</dd><dt>Compatibility</dt><dd>${escape(project.compatibility)}</dd></dl><a class="button outline small" href="docs.html#${encodeURIComponent(project.id)}">Field manual →</a></div><div class="aside-note"><span aria-hidden="true">↗</span><p>Found a problem?</p>${external(project.nexus, 'Project on Nexus')}<p class="snapshot-note">Include your version, game build, and steps to reproduce.</p></div></aside></div>`;
    const dialog = $('#media-dialog');
    $$('.media-open').forEach(button => button.addEventListener('click', () => { const item = project.media[Number(button.dataset.media)]; if (!item) return; $('#dialog-image').src = item.src; $('#dialog-image').alt = item.alt; $('#dialog-caption').textContent = item.caption; dialog.showModal(); }));
    dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
    $('.copy-button').addEventListener('click', async () => { const status = $('#copy-status'); try { if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable'); await navigator.clipboard.writeText(project.filename); status.textContent = 'Filename copied.'; } catch { status.textContent = 'Copy is unavailable here. Select the filename above and copy it manually.'; } });
  }
  // Dynamically rendered targets must exist before following incoming fragments.
  if (location.hash) { const target = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (target) requestAnimationFrame(() => target.scrollIntoView()); }
})();
