const events = [
  {
    id: 1,
    name: 'Project Expo',
    cat: 'events',
    desc: 'A platform for students to display working hardware or software prototypes, demonstrating innovation, functional design, and practical applications.',
    link: 'https://forms.gle/techritz2k26-project-expo'
  },
  {
    id: 2,
    name: 'Circuitrix',
    cat: 'events',
    desc: 'A technical contest focused on analyzing, designing, testing, and troubleshooting electronic circuits and logic diagrams.',
    link: 'https://forms.gle/techritz2k26-circuitrix'
  },
  {
    id: 3,
    name: 'Paper Presentation',
    cat: 'events',
    desc: 'An academic event where participants present original research papers, technical innovations, or emerging tech trends before a panel of judges.',
    link: 'https://forms.gle/techritz2k26-paper-pres'
  },
  {
    id: 4,
    name: 'Technical Quiz',
    cat: 'events',
    desc: "A multi-round trivia competition testing participants' core knowledge, fundamentals, and recent advancements across engineering and technology.",
    link: 'https://forms.gle/techritz2k26-tech-quiz'
  },
  {
    id: 5,
    name: 'Short Film',
    cat: 'creative',
    desc: 'A creative filmmaking contest where teams submit original short movies or mini-documentaries based on assigned themes.',
    link: 'https://docs.google.com/forms/d/1VN5g6pVDEXZy3g85qsNAUNws2SLqTBIYyPMtinSF_94/edit?pli=1',
    coordinators: [
      { name: 'B.L.Sindhuja Reddy', phone: '9949322204' },
      { name: ' G.Tejaswini', phone: '9154393163' },
      { name: 'B.Mounika', phone: '7780710554' }
    ]
  },
  {
    id: 6,
    name: 'Photography',
    cat: 'creative',
    organizer: 'Samskrithi Club (CSE) - VIEW',
    desc: 'A visual competition evaluating storytelling, composition, lighting, and creativity through original photographs capturing a specific theme.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfJdUr6nz7yBhaPROrz1HiJd7t88utEqE6XTUOBKpKW3piv7A/viewform',
    coordinators: [
      { name: 'S.Jyoshna', phone: '9666333658' },
      { name: 'N.S.S.Harshita', phone: '9030251103' }
    ]
  },
  {
    id: 7,
    name: 'Technical Treasure Hunt',
    cat: 'events',
    desc: 'An interactive challenge where teams solve tech-themed riddles, code snippets, and logic puzzles to uncover physical or digital clues leading to the final prize.',
    link: 'https://forms.gle/techritz2k26-treasure-hunt'
  },
  {
    id: 8,
    name: 'Coding Challenge',
    cat: 'events',
    logo: 'mlsc-logo.jpeg',
    organizer: 'Microsoft Learn Student Community - VIEW',
    desc: 'A competitive programming contest testing problem-solving efficiency, algorithmic logic, and speed across various coding languages.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSc6LPfGUg1dv6lJyL7-HE8zJiwF2VptxT-DTS8KBE2UFwcyeg/viewform',
    coordinators: [
      { name: 'Sophiya Tabassum', phone: '9441141970' },
      { name: ' G. Roja', phone: '6300829212' },
      { name: 'Ch. Madhu Latha', phone: '9676684826' }
    ]
  },
  {
    id: 9,
    name: 'Debugging',
    cat: 'events',
    desc: 'A timed challenge where participants analyze broken code snippets to identify syntax/logical errors and optimize the programs for correct execution.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdbnvEpdltK4XdMGEdPhB06eWGnuFTsrp4WkX89X4FF4tLhnw/viewform',
    coordinators: [
      { name: 'V. Chaturya (4th Year)', phone: '8019295157' },
      { name: 'L. Nandhini (3rd Year)', phone: '9032526470' },
      { name: 'B. Likitha (2nd Year)', phone: '8499950998' },
      { name: 'G. Srinija (2nd Year)', phone: '9014275607' }
    ]
  },
  {
    id: 10,
    name: 'Poster Presentation',
    cat: 'events',
    desc: 'A visual display competition where participants design and present concise infographics or technical posters explaining a research topic or engineering concept.',
    link: '#',
  },
  {
    id: 11,
    name: 'Business Ideas',
    cat: 'events',
    desc: 'A startup pitch competition where teams present viable business models, market strategies, and scalable products to a panel of judges.',
    link: 'https://forms.gle/techritz2k26-business-ideas'
  },
  {
    id: 12,
    name: 'Third Eye',
    cat: 'events',
    desc: 'A creative visual or analytical event focused on hidden detail identification, observational photography, or unconventional problem-solving perspectives.',
    link: 'https://forms.gle/techritz2k26-third-eye'
  },
  {
    id: 13,
    name: 'Innovation Ideas',
    cat: 'events',
    desc: 'A conceptual brainstorming contest where students pitch novel solutions and disruptive technologies addressing real-world societal or industry challenges.',
    link: 'https://forms.gle/techritz2k26-innovative-ideas'
  },
  {
    id: 14,
    name: 'Agentic AI Workshop',
    cat: 'events',
    logos: ['CN-LOGO.jpeg', 'GDG.webp'],
    organizer: 'Coding Ninjas 10x Club - VIEW,Google Developers Group on Campus - VIEW',
    desc: 'An interactive learning session covering the fundamentals of autonomous AI agents, multi-agent frameworks, tool integration, and practical implementation.',
    link: '#',
    isClosed: true,
    coordinators: [
      { name: 'K. Chandrakala', phone: '9640038826' },
      { name: 'G. Devaki Akshaya', phone: '8309503150' },
      { name: 'Satti Meghana', phone: '9492477453' },
      { name: 'Hanumanthu Pavitra', phone: '9247937207' }
    ]
  },
  {
    id: 15,
    name: 'Hackathon',
    cat: 'events',
    logos: ['CN-LOGO.jpeg','GDG.webp'],
    organizer: 'Coding Ninjas 10x Club - VIEW,Google Developers Group on Campus - VIEW',
    desc: 'An intensive time-bound event where teams collaborate continuously to design, prototype, and build a working software or hardware product from scratch.',
    link: '#',
    isClosed: true,
    coordinators: [
      { name: 'K. Chandrakala', phone: '9640038826' },
      { name: 'G. Devaki Akshaya', phone: '8309503150' },
      { name: 'Satti Meghana', phone: '9492477453' },
      { name: 'Hanumanthu Pavitra', phone: '9247937207' }
    ]
  },
  {
    id: 16,
    name: 'CODE JIGSAW',
    cat: 'events',
    logo: 'CN-LOGO.jpeg',
    organizer: 'Coding Ninjas 10x Club - VIEW',
    desc: 'Test your problem-solving, logical reasoning, and coding speed in this exciting jigsaw-style challenge!',
    link: 'https://forms.gle/o41tcskgKXh9F5ZU8',
    coordinators: [
      { name: 'K. Chandrakala', phone: '9640038826' },
      { name: 'G. Devaki Akshaya', phone: '8309503150' },
      { name: 'P. Meghana', phone: '7995923822' },
      { name: 'T. Sudha Kavya sri', phone: '9908433902' }
    ]
  },
  {
    id: 17,
    name: 'Prompt Challenge',
    cat: 'events',
    desc: 'A generative AI competition where participants engineer precise prompts to achieve specific, high-quality AI outputs in image, text, or code generation.',
    link: 'https://forms.gle/techritz2k26-prompt-challenge'
  },
  {
    id: 18,
    name: 'Reels Contest',
    cat: 'creative',
    desc: 'A short-form video creation event focusing on fast-paced storytelling, dynamic editing, and creative content creation on a given theme.',
    link: 'https://forms.gle/techritz2k26-reels-contest'
  },
  {
    id: 19,
    name: 'Escape The Server',
    cat: 'events',
    desc: 'An immersive escape-room style challenge where teams solve terminal commands, system puzzles, security exploits, and backend clues to "break out" of a locked server environment.',
    link: 'https://forms.gle/techritz2k26-escape-server'
  }
];

const coordinators = [
  ['P. Ananya', '8499811978'],
  ['P. Bhavya Sri', '8639711057'],
  ['M. Sumanvitha', '9030930827'],
  ['P. Ashrita', '9494303133'],
  ['S. Kamalika', '7207528124'],
  ['P. Yashaswini', '6305589292'],
  ['C. Purvika', '7337084753'],
  ['D. Bhavani', '8008677645'],
  ['Lahari', '7997052004'],
  ['Tanuja', '6302710064'],
  ['Sneha', '6303741271']
];

const eventGrid = document.getElementById('eventGrid');
const search = document.getElementById('eventSearch');
let filter = 'all';
let expandedId = null;

function toggleEvent(id) {
  expandedId = expandedId === id ? null : id;
  renderEvents();
}

function renderEvents() {
  const q = (search.value || '').trim().toLowerCase();

  const list = events.filter(e => {
    const matchesFilter = filter === 'all' || e.cat === filter;
    const matchesSearch = !q || 
      e.name.toLowerCase().includes(q) || 
      e.cat.toLowerCase().includes(q) ||
      (e.desc && e.desc.toLowerCase().includes(q));

    return matchesFilter && matchesSearch;
  });
  
  if (list.length === 0) {
    eventGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:#b8d0e5;padding:35px;font-weight:600">No events found matching your search.</div>';
    return;
  }

  eventGrid.innerHTML = list.map((e) => {
    const isExpanded = expandedId === e.id;
    
    // Construct logo(s) HTML
    let logosHtml = '';
    if (Array.isArray(e.logos) && e.logos.length > 0) {
      logosHtml = e.logos.map(src => `<img src="${src.trim()}" alt="${e.organizer || e.name}" class="club-logo-img">`).join('');
    } else if (e.logo) {
      logosHtml = `<img src="${e.logo.trim()}" alt="${e.organizer || e.name}" class="club-logo-img">`;
    }

    const headerLeftHtml = `
      <div class="event-club-brand">
        <span class="event-number">${String(e.id).padStart(2, '0')}</span>
        ${logosHtml}
      </div>
    `;

    const coordinatorsHtml = e.coordinators ? `
      <div class="coordinator-list">
        <p class="coordinator-title"><strong>Event Coordinators:</strong></p>
        <ul>
          ${e.coordinators.map(c => `<li>${c.name}: <a href="tel:${c.phone}">${c.phone}</a></li>`).join('')}
        </ul>
      </div>
    ` : '';

    const descriptionHtml = e.organizer 
      ? `Organized by <strong>${e.organizer}</strong>. ${e.desc}`
      : e.desc;

    const registrationBtnHtml = (e.isClosed || e.link === 'registration closed')
      ? `<button class="event-register-btn closed-btn" disabled onclick="event.stopPropagation()">REGISTRATION CLOSED</button>`
      : `<a href="${e.link}" target="_blank" rel="noopener" class="event-register-btn" onclick="event.stopPropagation()">REGISTER FOR THIS EVENT →</a>`;

    return `
      <article class="event-card ${isExpanded ? 'expanded' : ''}" onclick="toggleEvent(${e.id})">
        <div class="event-card-header">
          ${headerLeftHtml}
          <span class="event-badge">${e.cat === 'events' ? 'TECHNICAL' : 'CREATIVE'}</span>
        </div>
        <h3>${e.name}</h3>
        <p class="event-short-desc">${descriptionHtml}</p>

        <div class="event-expand-details">
          ${coordinatorsHtml}
          ${registrationBtnHtml}
        </div>

        <div class="card-action-hint">
          <span>${isExpanded ? 'Click to collapse ▲' : 'Click to view details & register ▼'}</span>
        </div>
      </article>
    `;
  }).join('');
}

renderEvents();

search.addEventListener('input', renderEvents);
document.querySelectorAll('#eventFilters button').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('#eventFilters button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filter = btn.dataset.filter;
  renderEvents();
}));

document.getElementById('studentGrid').innerHTML = coordinators.map(([name, phone]) => {
  const digits = phone.replace(/\D/g, '');
  return `<a class="student-card" href="tel:+91${digits}"><span>${name}</span><small>${phone}</small></a>`;
}).join('');

const posterModal = document.getElementById('posterModal');
function openModal(el) {
  if (!el) return;
  el.classList.add('open');
  el.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal(el) {
  if (!el) return;
  el.classList.remove('open');
  el.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', () => closeModal(el.closest('.modal'))));
document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.modal.open').forEach(closeModal); });

document.getElementById('posterImage')?.addEventListener('click', () => openModal(posterModal));
document.getElementById('menuToggle').addEventListener('click', () => document.getElementById('navLinks').classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open')));
