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
    cat: 'events',
    desc: 'A creative filmmaking contest where teams submit original short movies or mini-documentaries based on assigned themes.',
    link: 'https://forms.gle/techritz2k26-short-film'
  },
  {
    id: 6,
    name: 'Photography',
    cat: 'events',
    desc: 'A visual competition evaluating storytelling, composition, lighting, and creativity through original photographs capturing a specific theme.',
    link: 'https://forms.gle/techritz2k26-photography'
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
    desc: 'A competitive programming contest testing problem-solving efficiency, algorithmic logic, and speed across various coding languages.',
    link: 'https://forms.gle/techritz2k26-coding-challenge'
  },
  {
    id: 9,
    name: 'Debugging',
    cat: 'events',
    desc: 'A timed challenge where participants analyze broken code snippets to identify syntax/logical errors and optimize the programs for correct execution.',
    link: 'https://forms.gle/techritz2k26-debugging'
  },
  {
    id: 10,
    name: 'Poster Presentation',
    cat: 'events',
    desc: 'A visual display competition where participants design and present concise infographics or technical posters explaining a research topic or engineering concept.',
    link: 'https://forms.gle/techritz2k26-poster-pres'
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
    desc: 'An interactive learning session covering the fundamentals of autonomous AI agents, multi-agent frameworks, tool integration, and practical implementation.',
    link: 'https://forms.gle/techritz2k26-agentic-ai'
  },
  {
    id: 15,
    name: 'Hackathon',
    cat: 'events',
    desc: 'An intensive time-bound event where teams collaborate continuously to design, prototype, and build a working software or hardware product from scratch.',
    link: 'https://forms.gle/techritz2k26-hackathon'
  },
  {
    id: 16,
    name: 'Coding Jigsaw',
    cat: 'events',
    desc: 'A puzzle-style programming challenge where participants assemble scrambled blocks or logic segments into a fully functional program under time pressure.',
    link: 'https://forms.gle/techritz2k26-coding-jigsaw'
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
    cat: 'cultural',
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
  const list = events.filter(e => (filter === 'all' || e.cat === filter) && (!q || e.name.toLowerCase().includes(q)));
  
  if (list.length === 0) {
    eventGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:#b8d0e5;padding:35px;font-weight:600">No events found matching your search.</div>';
    return;
  }

  eventGrid.innerHTML = list.map((e, i) => {
    const isExpanded = expandedId === e.id;
    return `
      <article class="event-card ${isExpanded ? 'expanded' : ''}" onclick="toggleEvent(${e.id})">
        <div class="event-card-header">
          <span class="event-number">${String(i + 1).padStart(2, '0')}</span>
          <span class="event-badge">${e.cat === 'events' ? 'TECHNICAL' : 'CULTURAL'}</span>
        </div>
        <h3>${e.name}</h3>
        <p class="event-short-desc">${e.desc}</p>

        <div class="event-expand-details">
          <a href="${e.link}" target="_blank" rel="noopener" class="event-register-btn" onclick="event.stopPropagation()">
            REGISTER FOR THIS EVENT →
          </a>
        </div>
        <div class="card-action-hint">
          ${isExpanded ? 'Click to collapse ▲' : 'Click to register ▼'}
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