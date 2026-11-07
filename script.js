/*
 * Nikita C. Seiler / portfolio
 * No framework, bundler, analytics, trackers or third-party JavaScript.
 * The example interface graphics are illustrative, not connected to live backends.
 * Edit the projects array below to update project copy, tags and case studies.
 */

const energyScreenshots = [
  { url: 'https://raw.githubusercontent.com/nikita25-code/property-energy-intelligence/main/docs/dashboard-preview.png', title: 'Portfolio dashboard', description: 'Validated portfolio KPIs, energy ratings, scenario cost breakdowns and priority watchlist.' },
  { url: 'https://raw.githubusercontent.com/nikita25-code/property-energy-intelligence/main/docs/assets-preview.png', title: 'Asset-level explorer', description: 'Building and component details, assessment evidence and modelled intervention costs.' },
  { url: 'https://raw.githubusercontent.com/nikita25-code/property-energy-intelligence/main/docs/roadmap-preview.png', title: '2030 investment roadmap', description: 'Annual budget scenarios, prioritised interventions and transparent planning assumptions.' }
];

const projects = [
  {
    id: 'enterprise-ai-agent', order: '01', category: 'ai', categoryLabel: 'AI / AGENTS', year: '2026', phase: 'Functional prototype · SAP Denmark',
    title: 'Enterprise AI Analysis Agent',
    summary: 'A working MCP-based agent prototype that lets users query enterprise data through controlled, authenticated tools instead of navigating fragmented systems.',
    tags: ['MCP', 'SAP BTP', 'OData'], visual: 'ai', visualLabel: 'AGENT / DATA ACCESS', visualBg: '#142a22',
    eyebrow: 'BACHELOR PROJECT / SAP DENMARK',
    overview: 'An applied bachelor project in collaboration with SAP Denmark. I built and tested an enterprise analysis agent that converts natural-language requests into controlled tool calls against SAP Datasphere. The objective was to reduce friction between a business question and the data needed to answer it, while retaining access control and human validation.',
    challenge: 'Enterprise users can spend considerable time moving between datasets, reports and technical specialists. An AI assistant needs to be useful without making uncontrolled queries or presenting uncertain outputs as facts.',
    actions: ['Designed and tested a functional agent prototype in SAP Build / Joule Studio with MCP-based tool integration and authenticated, parameterized OData queries.', 'Defined tool scope, agent instructions and workflows with source transparency, human validation, and access considerations.', 'Conducted five interviews, analysed information and workflow friction, and translated findings into process models, KPIs and a phased implementation proposal.', 'Compared alternative implementation approaches in a five-year, assumption-based financial assessment.'],
    result: 'A functional prototype and documented decision basis connecting user research, technical implementation, governance and business feasibility.',
    technologies: ['MCP', 'SAP Build / Joule Studio', 'SAP Datasphere', 'OData', 'API authentication', 'Process modelling', 'Business analysis'],
    stats: [{value:'MCP + OData',label:'Integration architecture'},{value:'5',label:'Research interviews'},{value:'Functional',label:'Prototype status'}],
    note:'Research and prototype context: this is not a publicly deployed production enterprise system.'
  },
  {
    id: 'enterprise-data-pipeline', order: '02', category: 'data', categoryLabel: 'DATA / ENGINEERING', year: '2025', phase: 'SAP Denmark · Internship',
    title: 'Enterprise Data Integration Pipeline',
    summary: 'An end-to-end architecture connecting operational SAP data to analytical and AI-ready environments with validation, historical handling and controlled processing.',
    tags: ['SAP Datasphere', 'Databricks', 'SQL'], visual: 'pipeline', visualLabel: 'CROSS-PLATFORM / DATA FLOW', visualBg: '#14262d',
    eyebrow: 'SAP EXPERIENCE CENTER / ENGINEERING',
    overview: 'During my internship with SAP Denmark, I worked on cross-platform data integration from operational SAP systems through SAP Datasphere into Databricks, with downstream analytics in SAP Analytics Cloud.',
    challenge: 'Getting useful data across platforms involves more than connectivity: data types, historical continuity, access controls, licensing, transformations and operational recovery all matter.',
    actions: ['Designed an end-to-end data architecture linking SAP Digital Manufacturing, SAP Datasphere and Databricks through Delta Sharing.', 'Worked on data modelling, integration constraints, secure connections and transformation logic for downstream analytics and AI use cases.', 'Implemented or designed automated task chains, checks, safe failure handling and controlled update/backup procedures.', 'Produced architecture diagrams, ERD and BPMN documentation to make the system traceable and maintainable.'],
    result: 'Verified Delta Sharing integration and a documented, reproducible architecture for enterprise data workflows and downstream consumption.',
    technologies: ['SAP Digital Manufacturing', 'SAP Datasphere', 'HANA', 'Delta Sharing', 'Databricks', 'SAP Analytics Cloud', 'SQL', 'BPMN'],
    stats: [{value:'5 stages',label:'Architecture flow'},{value:'Delta Sharing',label:'Validated integration'},{value:'ERD + BPMN',label:'Documentation'}],
    note:'This project describes internship work and architecture; it is not presented as a public live demo.'
  },
  {
    id: 'energy-intelligence', repoUrl: 'https://github.com/nikita25-code/property-energy-intelligence', order: '03', category: 'data', categoryLabel: 'BACKEND / ANALYTICS', year: '2026', phase: 'Independent project · Interactive scenario platform',
    title: 'Energy Portfolio Intelligence',
    summary: 'An interactive, FastAPI-backed property analytics platform for exploring asset condition, modelling retrofit investments and prioritising energy upgrades using synthetic data.',
    tags: ['FastAPI', 'Python', 'Scenario planning'], visual: 'energy', visualLabel: 'ENERGY / DECISION SUPPORT', visualBg: '#14282c', screenshots: energyScreenshots,
    eyebrow: 'INDEPENDENT PROJECT / PROPERTY ANALYTICS',
    overview: 'An interactive decision-support platform connecting a reproducible data ingestion pipeline, a structured property and asset model, read-only FastAPI endpoints and a responsive dashboard. It explores which fictional public buildings may warrant attention and how alternative retrofit budgets affect a potential investment shortlist.',
    challenge: 'Property portfolio decisions depend on incomplete records, inconsistent inspections and uncertain cost assumptions. A useful screening application must make evidence, missing assessments and trade-offs visible instead of presenting modelled forecasts as established facts.',
    actions: [
      'Developed a Python ingestion and validation pipeline with reproducible synthetic data, data-quality checks and a relational property and component model.',
      'Implemented FastAPI analytics, property search and detail endpoints with validated filters, read-only queries and parameterized SQL.',
      'Built a responsive frontend for portfolio KPIs, energy-rating distributions, property exploration and asset-level assessment details.',
      'Implemented an assumption-driven 2027–2030 investment roadmap with annual funding limits and prioritised intervention scenarios.',
      'Added supported natural-language questions that return query-plan and SQL evidence; optional LLM interpretation is separate from the default rules-based planner.'
    ],
    result: 'A reproducible interactive demonstration covering 5,975 validated synthetic properties and 23,811 modelled components, with evidence-backed analysis and scenario-planning views.',
    technologies: ['Python', 'FastAPI', 'SQL / SQLite', 'Docker', 'Data validation', 'REST APIs', 'Scenario modelling', 'Frontend JavaScript'],
    stats: [{value:'5,975',label:'Synthetic properties'},{value:'23,811',label:'Modelled components'},{value:'2027–30',label:'Investment roadmap'}],
    note:'This is a portfolio demonstration using fictional generated buildings. Retrofit costs, savings, priorities and investment scenarios are modelling assumptions, not verified forecasts or professional valuations.'
  },
  {
    id: 'body-composition', order: '04', category: 'apps', categoryLabel: 'MOBILE / DATA', year: '2026', phase: 'Android app · In development',
    title: 'Body Composition Tracker',
    summary: 'An Android project that combines measurements from multiple BIA devices, pairs scans by time and makes long-term changes easier to inspect.',
    tags: ['Android', 'OCR', 'Data visualisation'], visual: 'phone', visualLabel: 'PERSONAL ANALYTICS / ANDROID', visualBg: '#171f37',
    eyebrow: 'INDEPENDENT PROJECT / MOBILE',
    overview: 'A mobile application built around the difficulty of comparing longitudinal body-composition measurements from different devices and inconsistent exported formats.',
    challenge: 'Readings may use different labels, contain OCR discrepancies and depend strongly on measurement conditions. An analysis tool needs transparent provenance and careful pairing rather than treating every metric as equivalent.',
    actions: ['Built bulk import and device-specific metric handling for PureGym and InBody records.', 'Developed scan pairing based on timestamps and filenames, with attention to OCR mismatches and duplicate handling.', 'Designed weekly, monthly and annual trend views and multi-metric comparison concepts.', 'Worked on clearer file metadata, time-of-day views and reference ranges.'],
    result: 'An evolving Android prototype designed around longitudinal analysis and more careful interpretation of device-estimated metrics.',
    technologies: ['Android', 'Data parsing', 'OCR', 'Time-series', 'Data visualisation', 'Git'],
    stats: [{value:'2 sources',label:'Device data formats'},{value:'Time-series',label:'Analysis focus'},{value:'In progress',label:'Project status'}],
    note:'The phone chart shown on the project card is illustrative, not personal measurement data. The app is still being developed.'
  },
  {
    id: 'filescope', order: '05', category: 'ai', categoryLabel: 'SEARCH / AI', year: '2026', phase: 'Independent prototype · Evolving',
    title: 'FileScope — Local Intelligence',
    summary: 'A local-first document discovery system exploring OCR, indexing, semantic retrieval and multimodal search across files and images.',
    tags: ['Python', 'OCR', 'Embeddings'], visual: 'filescope', visualLabel: 'LOCAL SEARCH / SEMANTIC INDEX', visualBg: '#1f1b31',
    eyebrow: 'INDEPENDENT PROJECT / INFORMATION RETRIEVAL',
    overview: 'FileScope is an ongoing independent project to make local document and image collections searchable beyond filenames and simple text matching.',
    challenge: 'Relevant information may be hidden inside PDFs, screenshots, images and Office files. OCR and embedding dependencies also vary across operating systems and hardware.',
    actions: ['Developed local ingestion, preprocessing and search components for mixed document formats.', 'Explored OCR-backed indexing and semantic/visual embeddings using SentenceTransformers, CLIP and image feature models.', 'Worked on logging, processing errors, file-handling reliability and parallel indexing.', 'Investigated GPU acceleration and environment compatibility, including CUDA and OCR dependencies.'],
    result: 'A developing local retrieval system with implemented indexing foundations and ongoing work on environment setup, OCR reliability and hardware acceleration.',
    technologies: ['Python', 'PyMuPDF', 'Tesseract OCR', 'SentenceTransformers', 'CLIP', 'Vector search', 'PyTorch'],
    stats: [{value:'Local-first',label:'System design'},{value:'Text + image',label:'Retrieval scope'},{value:'Evolving',label:'Project status'}],
    note:'This is an in-progress technical project. The visual search screen is a concept illustration, not a hosted live search result.'
  },
  {
    id: 'indoor-climate', order: '06', category: 'data', categoryLabel: 'MACHINE LEARNING / ANALYTICS', year: '2024–25', phase: 'Academic case study · Analysis',
    title: 'AI-Based Indoor Climate Optimisation',
    summary: 'Sensor-data analysis and predictive modelling translated into a practical ventilation improvement case and investment recommendation.',
    tags: ['scikit-learn', 'Statistics', 'Python'], visual: 'climate', visualLabel: 'PREDICTION / DECISION ANALYSIS', visualBg: '#172b27',
    eyebrow: 'ACADEMIC PROJECT / APPLIED ANALYTICS',
    overview: 'A data-driven indoor climate case exploring the link between environmental sensor readings, ventilation, energy use and operational improvement opportunities.',
    challenge: 'Sensor data must be cleaned, modelled and interpreted before recommendations can be made; predictive performance alone is not a sufficient basis for a business decision.',
    actions: ['Cleaned and analysed sensor, ventilation and energy data, including outlier detection and correlation analysis.', 'Compared Linear Regression and Random Forest for CO₂ prediction using train/test evaluation and model error metrics.', 'Examined variable importance and possible operational interventions.', 'Produced a procurement and improvement decision basis including cost, feasibility and modelled savings.'],
    result: 'An analytical recommendation connecting model evaluation to operational and financial decision-making; modelled scenarios indicated potential energy reductions of up to 20%.',
    technologies: ['Python', 'Pandas', 'scikit-learn', 'Random Forest', 'Regression', 'Statistics', 'Cost-benefit analysis'],
    stats: [{value:'2 models',label:'Compared methods'},{value:'CO₂',label:'Prediction target'},{value:'Up to 20%',label:'Modelled savings case'}],
    note:'The 20% is a scenario estimate from the project, not a measured saving after real-world implementation.'
  }
];

const visuals = {
  ai: () => `<div class="mock-ai"><div class="mock-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span> analysis_agent.session <small>AUTHENTICATED</small></div><div class="mock-chat">How can we turn fragmented operational data into a reliable answer?</div><div class="mock-agent"><div class="mock-agent-icon">✳</div><div><strong>Analysis agent</strong><div class="mock-query">tool: <span>datasphere.query</span><br/>scope: <span>authorized_data</span><br/>validation: <span>enabled</span></div></div></div><div class="mock-bottom">MCP TOOL CALL · ODATA SERVICE</div></div><div class="floating-verified">✓ SOURCE VALIDATION</div>`,
  pipeline: () => `<div class="mock-pipeline"><div class="pipe-stage"><div class="pipe-stage-icon">▤</div><div class="pipe-stage-name">SAP DM</div><small>Operational<br/>systems</small></div><div class="pipe-link"></div><div class="pipe-stage"><div class="pipe-stage-icon">◫</div><div class="pipe-stage-name">Datasphere</div><small>Model &<br/>transform</small></div><div class="pipe-link"></div><div class="pipe-stage"><div class="pipe-stage-icon">⌁</div><div class="pipe-stage-name">Delta Share</div><small>Secure<br/>exchange</small></div><div class="pipe-link"></div><div class="pipe-stage"><div class="pipe-stage-icon">◇</div><div class="pipe-stage-name">Databricks</div><small>Analytics<br/>& AI</small></div><div class="pipe-link"></div><div class="pipe-stage"><div class="pipe-stage-icon">▥</div><div class="pipe-stage-name">SAC</div><small>Business<br/>insights</small></div></div><div class="pipe-status">● INTEGRATION VERIFIED</div>`,
  energy: () => `<div class="mock-energy"><div class="energy-side"><div class="energy-mini-title">PORTFOLIO OVERVIEW</div><div class="energy-big">5,975</div><small>synthetic properties</small><div class="energy-bars"><i style="height:32%"></i><i style="height:45%"></i><i style="height:78%"></i><i style="height:89%"></i><i style="height:100%"></i><i style="height:65%"></i><i style="height:39%"></i></div></div><div class="energy-panel"><div class="energy-mini-title">ENERGY RATING DISTRIBUTION</div><div class="energy-rating"><span style="background:#88d6ad">A</span><span style="background:#b7d88a">B</span><span style="background:#d4d277">C</span><span style="background:#e6bd79">D</span><span style="background:#e8a779">E</span><span style="background:#da907b">F</span><span style="background:#c7777d">G</span></div><div class="energy-line"></div><div class="energy-line"></div><div class="energy-line"></div><footer>SCENARIO MODELLING<br/>COMPONENT-LEVEL COSTS</footer></div></div>`,
  phone: () => `<div class="phone-float">TIME-SERIES ANALYSIS</div><div class="mock-phone"><div class="phone-speaker"></div><div class="phone-head">Composition<span style="float:right;color:#abccff">↗</span></div><div class="phone-label">SAMPLE TREND / ILLUSTRATIVE</div><div class="phone-value">+0.8 <small>change</small></div><svg class="phone-chart" viewBox="0 0 150 84" aria-hidden="true"><defs><linearGradient id="phoneG" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#94b7ff" stop-opacity=".28"/><stop offset="1" stop-color="#94b7ff" stop-opacity="0"/></linearGradient></defs><path d="M0 69 L19 61 L35 67 L49 43 L64 47 L83 33 L98 40 L114 24 L127 26 L150 12 V84 H0Z" fill="url(#phoneG)"/><path d="M0 69 L19 61 L35 67 L49 43 L64 47 L83 33 L98 40 L114 24 L127 26 L150 12" stroke="#a5bfff" stroke-width="2.5" fill="none"/><circle cx="150" cy="12" r="4" fill="#d5c4ff"/></svg><div class="phone-footer">MULTI-DEVICE · LONGITUDINAL<br/><br/>WEEKLY　MONTHLY　ANNUAL</div></div><div class="phone-float right">OCR + DATA PAIRING</div>`,
  filescope: () => `<div class="mock-search"><div class="search-input">⌕ &nbsp; Search across your local files <span>↵</span></div><div class="search-file"><b>PDF</b><div><strong>System architecture.pdf</strong><small>Document · indexed text</small></div><span>◉</span></div><div class="search-file"><b>IMG</b><div><strong>Design reference.png</strong><small>Image · visual features</small></div><span>◉</span></div><div class="search-file"><b>DOC</b><div><strong>Research notes.docx</strong><small>Document · semantic text</small></div><span>◉</span></div></div><div class="mock-search-badge">SEMANTIC + OCR</div>`,
  climate: () => `<div class="mock-climate"><div class="climate-top"><span>CO₂ / PREDICTION MODEL</span><span>● MODEL COMPARISON</span></div><div class="climate-chart"><svg viewBox="0 0 450 150" preserveAspectRatio="none" aria-hidden="true"><g stroke="#45685c" stroke-width="1" opacity=".6"><path d="M0 25H450M0 55H450M0 85H450M0 115H450M0 145H450"/></g><path d="M0 102 Q30 68 62 87 T130 70 T200 91 T273 55 T340 65 T450 18" fill="none" stroke="#bcf1a8" stroke-width="3"/><path d="M0 117 Q30 77 62 96 T130 87 T200 105 T273 71 T340 78 T450 31" fill="none" stroke="#86addb" stroke-width="2" stroke-dasharray="5 5"/><circle cx="450" cy="18" r="5" fill="#d5ffab"/></svg></div><div class="climate-foot"><span>ACTUAL VS MODELLED / CONCEPT GRAPH</span><span>R² · MSE</span></div><div class="climate-tag">MODELLED SCENARIOS</div></div>`
};

// The Energy case study uses genuine app screenshots stored in its public source repository.
function renderScreenshotCard(p) {
  const first = p.screenshots[0];
  const next = p.screenshots[1] || first;
  return `<div class="energy-card-media" data-card-gallery data-card-index="0">
    <img class="energy-card-image" src="${first.url}" alt="${p.title}: ${first.title}" loading="lazy" decoding="async" />
    <div class="energy-card-caption"><span>ACTUAL APPLICATION PREVIEW</span><strong data-card-gallery-title>${first.title}</strong></div>
    <div class="energy-card-controls">
      <button type="button" class="energy-card-next" data-energy-card-next aria-label="Show next screenshot: ${next.title}" title="Next screenshot">
        <span aria-hidden="true">→</span>
      </button>
    </div>
  </div>`;
}

function renderCaseGallery(p) {
  if (!p.screenshots?.length) return '';
  const first = p.screenshots[0];
  return `<section class="case-gallery" data-case-gallery aria-label="Screenshots from the ${p.title} application">
    <div class="case-gallery-heading"><h3>Inside the application</h3><span>REAL INTERFACE · SYNTHETIC DATA</span></div>
    <a class="case-gallery-main" data-gallery-open href="${first.url}" target="_blank" rel="noopener noreferrer" aria-label="Open full-size screenshot: ${first.title}">
      <img data-gallery-image src="${first.url}" alt="${first.title}" loading="lazy" decoding="async" />
      <span>View full screenshot ↗</span>
    </a>
    <div class="case-gallery-details"><div><strong data-gallery-title>${first.title}</strong><p data-gallery-description>${first.description}</p></div>
      <div class="case-gallery-nav"><button type="button" data-gallery-step="-1" aria-label="Previous screenshot">←</button><span data-gallery-counter>01 / 03</span><button type="button" data-gallery-step="1" aria-label="Next screenshot">→</button></div>
    </div>
    <div class="case-gallery-thumbs" role="group" aria-label="Choose an application screenshot">
      ${p.screenshots.map((shot, i) => `<button type="button" class="case-gallery-thumb" data-gallery-index="${i}" aria-pressed="${i === 0}" aria-label="Show ${shot.title}"><img src="${shot.url}" alt="" loading="lazy" decoding="async"/><span>${shot.title}</span></button>`).join('')}
    </div>
  </section>`;
}

function bindCaseGallery(p) {
  const gallery = modalContent.querySelector('[data-case-gallery]');
  if (!gallery || !p.screenshots) return;
  let index = 0;
  const change = next => {
    index = (next + p.screenshots.length) % p.screenshots.length;
    const slide = p.screenshots[index];
    const img = gallery.querySelector('[data-gallery-image]');
    img.src = slide.url;
    img.alt = slide.title;
    gallery.querySelector('[data-gallery-title]').textContent = slide.title;
    gallery.querySelector('[data-gallery-description]').textContent = slide.description;
    gallery.querySelector('[data-gallery-open]').href = slide.url;
    gallery.querySelector('[data-gallery-open]').setAttribute('aria-label', `Open full-size screenshot: ${slide.title}`);
    gallery.querySelector('[data-gallery-counter]').textContent = `${String(index + 1).padStart(2, '0')} / ${String(p.screenshots.length).padStart(2, '0')}`;
    gallery.querySelectorAll('[data-gallery-index]').forEach(btn => btn.setAttribute('aria-pressed', String(Number(btn.dataset.galleryIndex) === index)));
  };
  gallery.addEventListener('click', event => {
    const thumb = event.target.closest('[data-gallery-index]');
    const step = event.target.closest('[data-gallery-step]');
    if (thumb) change(Number(thumb.dataset.galleryIndex));
    else if (step) change(index + Number(step.dataset.galleryStep));
  });
}

const projectGrid = document.getElementById('projectGrid');
function renderProjects() {
  projectGrid.innerHTML = projects.map(p => `
    <article class="project-card reveal" data-category="${p.category}" data-project="${p.id}">
      <div class="project-visual" style="--visualbg:${p.visualBg}">
        ${p.screenshots ? renderScreenshotCard(p) : visuals[p.visual]()}
      </div>
      <div class="project-content">
        <div class="project-meta"><span>${p.categoryLabel}</span><span class="meta-divider">/</span><span class="project-phase">${p.year} · ${p.phase}</span></div>
        <h3>${p.title}</h3><p>${p.summary}</p>
        <div class="project-bottom"><div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
          <div class="project-action-links">${p.repoUrl ? `<a class="project-source-link" href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" aria-label="View ${p.title} source code on GitHub">GitHub ↗</a>` : ''}
          <button class="project-open" type="button" data-open-project="${p.id}" aria-label="Read case study: ${p.title}" title="Read case study">↗</button></div>
        </div>
      </div>
    </article>`).join('');
  observeReveals();
}

// Energy Portfolio Intelligence card: circular next-arrow control.
projectGrid.addEventListener('click', event => {
  const nextButton = event.target.closest('[data-energy-card-next]');
  if (!nextButton) return;
  const card = nextButton.closest('[data-project="energy-intelligence"]');
  const gallery = nextButton.closest('[data-card-gallery]');
  if (!card || !gallery) return;
  const currentIndex = Number(gallery.dataset.cardIndex || 0);
  const index = (currentIndex + 1) % energyScreenshots.length;
  const shot = energyScreenshots[index];
  const img = card.querySelector('.energy-card-image');
  img.src = shot.url;
  img.alt = `Energy Portfolio Intelligence: ${shot.title}`;
  card.querySelector('[data-card-gallery-title]').textContent = shot.title;
  gallery.dataset.cardIndex = String(index);
  const upcoming = energyScreenshots[(index + 1) % energyScreenshots.length];
  nextButton.setAttribute('aria-label', `Show next screenshot: ${upcoming.title}`);
  nextButton.title = `Next screenshot: ${upcoming.title}`;
});

// Project filters
const filterButtons = [...document.querySelectorAll('.filter-chip')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(b => {
    const active = b === button;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.project-card').forEach(card => {
    card.hidden = filter !== 'all' && card.dataset.category !== filter;
  });
}));

// Accessible case-study dialog
const modal = document.getElementById('projectModal');
const panel = modal.querySelector('.modal-panel');
const modalContent = document.getElementById('modalContent');
const closeButton = document.getElementById('modalClose');
let previousFocus = null;
function openProject(id) {
  const p = projects.find(project => project.id === id);
  if (!p) return;
  previousFocus = document.activeElement;
  modalContent.innerHTML = `
    <div class="modal-eyebrow">NCS / ${p.order} — ${p.eyebrow}</div>
    <h2 id="modalTitle">${p.title}</h2>
    <p class="modal-summary">${p.summary}</p>
    <div class="modal-stat-row">${p.stats.map(s=>`<div class="modal-stat"><strong>${s.value}</strong><small>${s.label}</small></div>`).join('')}</div>
    ${renderCaseGallery(p)}
    <h3>Overview</h3><p>${p.overview}</p>
    <h3>The challenge</h3><p>${p.challenge}</p>
    <h3>What I built / worked on</h3><ul class="modal-points">${p.actions.map(a=>`<li>${a}</li>`).join('')}</ul>
    <h3>Outcome</h3><p>${p.result}</p>
    <h3>Technologies & methods</h3><div class="modal-stack">${p.technologies.map(t=>`<span>${t}</span>`).join('')}</div>
    <div class="modal-note">${p.note}</div>
    <div class="modal-footer"><div class="modal-footer-links">${p.repoUrl ? `<a class="modal-github-link" href="${p.repoUrl}" target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>` : ''}<a href="mailto:nikita_seiler@outlook.com?subject=${encodeURIComponent('Question about ' + p.title)}">Ask me about this project ↗</a></div><button type="button" data-close-modal>← Back to projects</button></div>`;
  bindCaseGallery(p);
  modal.hidden = false;
  document.body.classList.add('modal-open');
  panel.scrollTop = 0;
  closeButton.focus();
}
function closeProject() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  if (previousFocus && document.contains(previousFocus)) previousFocus.focus();
}
projectGrid.addEventListener('click', e => {
  const btn = e.target.closest('[data-open-project]');
  if (btn) openProject(btn.dataset.openProject);
});
modal.addEventListener('click', e => { if (e.target.closest('[data-close-modal]')) closeProject(); });
document.addEventListener('keydown', e => {
  if (modal.hidden) return;
  if (e.key === 'Escape') { closeProject(); return; }
  if (e.key !== 'Tab') return;
  const focusable = [...panel.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(el=>el.getClientRects().length);
  if (!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length-1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

// Theme controls
const themeButton = document.getElementById('themeToggle');
function themeSet(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  themeButton.title = theme === 'dark' ? 'Light mode' : 'Dark mode';
  themeButton.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀' : '☾';
  try { localStorage.setItem('ncs-portfolio-theme',theme); } catch(_) {}
}
let savedTheme = null;
try { savedTheme = localStorage.getItem('ncs-portfolio-theme'); } catch(_) {}
themeSet(savedTheme === 'light' ? 'light' : 'dark');
themeButton.addEventListener('click',()=>themeSet(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

// Responsive nav
const menuButton = document.getElementById('mobileMenuButton');
const mobileNav = document.getElementById('mobileNav');
function menuClose() { mobileNav.hidden=true; menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation'); }
menuButton.addEventListener('click',()=>{
  const opening = mobileNav.hidden;
  mobileNav.hidden = !opening;
  menuButton.setAttribute('aria-expanded',String(opening));
  menuButton.setAttribute('aria-label',opening?'Close navigation':'Open navigation');
});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',menuClose));
window.addEventListener('resize',()=>{if(window.innerWidth>700)menuClose()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden)menuClose()});

// Scroll navigation and entrance motion
const header = document.querySelector('.site-header');
const navLinks = [...document.querySelectorAll('.desktop-nav a')];
function onScroll() { header.classList.toggle('is-scrolled',scrollY>40); }
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
if ('IntersectionObserver' in window) {
  const activeSectionObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        navLinks.forEach(link=>link.classList.toggle('is-active',link.getAttribute('href')==='#'+entry.target.id));
      }
    });
  },{rootMargin:'-28% 0px -62% 0px'});
  document.querySelectorAll('section[id]').forEach(section=>activeSectionObserver.observe(section));
}
let revealObserver;
if ('IntersectionObserver' in window) {
  revealObserver = new IntersectionObserver(entries=>entries.forEach(entry=>{
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
  }),{threshold:.07,rootMargin:'0px 0px 50px 0px'});
}
function observeReveals() {
  document.querySelectorAll('.reveal:not(.is-visible)').forEach(el=>{
    if (revealObserver) revealObserver.observe(el); else el.classList.add('is-visible');
  });
}

// Contact links are plain anchors (no JavaScript required).
document.getElementById('year').textContent = String(new Date().getFullYear());
renderProjects();
observeReveals();


/* ===========================================================================
   EDIT DOTTED CONNECTORS HERE — distances are in PIXELS (px)
   ===========================================================================
   Want to adjust just the TOP-LEFT line? Change only `topLeft` below.
   Example: topLeft: { x: 0, y: 0, bendX: 12, nearCircleY: -8 }

   x             Shift the connection point on its card: + right / - left.
   y             Shift the connection point on its card: + down / - up.
   bendX         Move that line's vertical elbow: + right / - left.
   nearCircleY   Move the line's horizontal segment beside the N circle:
                 + down / - up. The line stays BEHIND the circle.

   Each corner controls one END of the two routes:
     GREEN:  topLeft → bottomRight
     PURPLE: bottomLeft → topRight

   Change only the NUMBER; keep commas, braces and field names as written.
   Save and reload the HTML (or refresh the site) to see the new positions.
   The dots automatically follow the new line geometry — no SVG editing needed.
   =========================================================================== */
(() => {
  const PATH_ADJUST_PX = {
    topLeft:     { x: 0, y: 0, bendX: 0, nearCircleY: 0 }, // Card 01: source → circle (GREEN)
    topRight:    { x: 0, y: 0, bendX: 0, nearCircleY: 0 }, // Card 02: circle → engineering (PURPLE)
    bottomLeft:  { x: 0, y: 0, bendX: 0, nearCircleY: 0 }, // Card 03: intelligence → circle (PURPLE)
    bottomRight: { x: 0, y: 0, bendX: 0, nearCircleY: 0 }, // Card 04: circle → delivery (GREEN)
  };

  // These references identify the existing visible lines AND their moving dots.
  const hub = document.querySelector('.architecture-hub .hub-diagram');
  if (!hub) return;
  const svg = hub.querySelector('.hub-svg');
  const core = hub.querySelector('.hub-core');
  const greenLine = hub.querySelector('#hub-route-green');
  const purpleLine = hub.querySelector('#hub-route-purple');
  const greenMotion = hub.querySelector('#hub-motion-green');
  const purpleMotion = hub.querySelector('#hub-motion-purple');
  if (!svg || !core || !greenLine || !purpleLine || !greenMotion || !purpleMotion) return;

  const getRect = el => {
    const a = el.getBoundingClientRect();
    const h = hub.getBoundingClientRect();
    return { x: a.left - h.left, y: a.top - h.top,
             width: a.width, height: a.height,
             right: a.right - h.left, bottom: a.bottom - h.top };
  };
  const n = x => Number(x.toFixed(2));
  const makePaths = () => {
    const parent = hub.getBoundingClientRect();
    if (!parent.width || !parent.height) return;
    const source = getRect(hub.querySelector('.hub-card-source'));
    const engineer = getRect(hub.querySelector('.hub-card-engineering'));
    const intelligence = getRect(hub.querySelector('.hub-card-ai'));
    const delivery = getRect(hub.querySelector('.hub-card-delivery'));
    const circle = getRect(core);
    const cx = circle.x + circle.width / 2;
    const cy = circle.y + circle.height / 2;
    const r = circle.width / 2;
    const leftEdge = circle.x + 3;
    const rightEdge = circle.right - 3;

    // Attachment coordinates, calculated live from each card's real position.
    // Add the per-corner pixel offsets above; do NOT hard-code screen positions here.
    const topLeft = PATH_ADJUST_PX.topLeft;
    const topRight = PATH_ADJUST_PX.topRight;
    const bottomLeft = PATH_ADJUST_PX.bottomLeft;
    const bottomRight = PATH_ADJUST_PX.bottomRight;

    const srcX = source.right + topLeft.x;
    const srcY = source.y + source.height * .52 + topLeft.y;
    const dstX = delivery.x + bottomRight.x;
    const dstY = delivery.y + delivery.height * .52 + bottomRight.y;
    // Bottom-left connector: attach at the TOP of the AI card.
    // The segment leaves the card vertically, with NO small side bend/hook.
    // x moves the attachment point horizontally; bendX shifts this same vertical line.
    const aiX = intelligence.x + intelligence.width * .82 + bottomLeft.x;
    const aiY = intelligence.y + bottomLeft.y;
    // Top-right starts/ends at the lower edge of Card 02, as in the reference.
    const engineeringX = engineer.x + engineer.width * .39 + topRight.x;
    const engineeringY = engineer.bottom + topRight.y;

    // Move elbows independently. Near-circle Y offsets alter the short visible
    // horizontal sections; the two long middle segments remain behind the N hub.
    const greenElbow = srcX + Math.min(29, Math.max(18, (leftEdge-srcX) * .42)) + topLeft.bendX;
    const greenRightElbow = dstX - Math.min(27, Math.max(17, (dstX-rightEdge) * .42)) + bottomRight.bendX;
    // Bottom-left: one straight vertical line leaving the AI card.
    // There is only one rounded elbow, near the center circle.
    const purpleElbow = aiX + bottomLeft.bendX;
    const purpleRightElbow = engineeringX + topRight.bendX;
    const greenLeftY = cy - Math.min(17, r * .24) + topLeft.nearCircleY;
    const greenRightY = cy + Math.min(17, r * .24) + bottomRight.nearCircleY;
    const purpleLeftY = cy + Math.min(17, r * .24) + bottomLeft.nearCircleY;
    const purpleRightY = cy - Math.min(17, r * .24) + topRight.nearCircleY;
    const q = 9; // rounded elbow radius (px); same for all four corners

    // The center spans are intentionally behind the opaque circular hub.
    const green = [
      `M ${n(srcX)} ${n(srcY)}`,
      `H ${n(greenElbow - q)}`,
      `Q ${n(greenElbow)} ${n(srcY)} ${n(greenElbow)} ${n(srcY + q)}`,
      `V ${n(greenLeftY - q)}`,
      `Q ${n(greenElbow)} ${n(greenLeftY)} ${n(greenElbow + q)} ${n(greenLeftY)}`,
      `H ${n(leftEdge)}`,
      `L ${n(rightEdge)} ${n(greenRightY)}`,
      `H ${n(greenRightElbow - q)}`,
      `Q ${n(greenRightElbow)} ${n(greenRightY)} ${n(greenRightElbow)} ${n(greenRightY + q)}`,
      `V ${n(dstY - q)}`,
      `Q ${n(greenRightElbow)} ${n(dstY)} ${n(greenRightElbow + q)} ${n(dstY)}`,
      `H ${n(dstX)}`
    ].join(' ');

    const purple = [
      // Straight up from the card's top edge: no horizontal hook over the box.
      `M ${n(purpleElbow)} ${n(aiY)}`,
      `V ${n(purpleLeftY + q)}`,
      `Q ${n(purpleElbow)} ${n(purpleLeftY)} ${n(purpleElbow + q)} ${n(purpleLeftY)}`,
      `H ${n(leftEdge)}`,
      `L ${n(rightEdge)} ${n(purpleRightY)}`,
      `H ${n(purpleRightElbow - q)}`,
      `Q ${n(purpleRightElbow)} ${n(purpleRightY)} ${n(purpleRightElbow)} ${n(purpleRightY - q)}`,
      `V ${n(engineeringY)}`
    ].join(' ');

    svg.setAttribute('viewBox', `0 0 ${n(parent.width)} ${n(parent.height)}`);
    greenLine.setAttribute('d', green);
    purpleLine.setAttribute('d', purple);
    greenMotion.setAttribute('path', green);
    purpleMotion.setAttribute('path', purple);
  };
  const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(makePaths) : null;
  if (observer) observer.observe(hub);
  window.addEventListener('resize', makePaths, { passive: true });
  requestAnimationFrame(makePaths);
})();


// Footer navigation: always scroll to the actual top of the document.
// The no-JavaScript fallback is the #top anchor at the start of <body>.
document.querySelectorAll('a.back-top').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, left: 0, behavior: reducedMotion ? 'instant' : 'smooth' });
  });
});
