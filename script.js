/* ═══════════════════════════════════════════
   CLARIVO ADVISORY — script.js
   Replace YOUR_CALENDLY_URL with real link
═══════════════════════════════════════════ */
const CALENDLY_URL = 'YOUR_CALENDLY_URL';

/* ── Sticky nav ── */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ── Mobile hamburger ── */
const hamburger = document.getElementById('nav-hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id], div.cred-bar');
const navItems = document.querySelectorAll('.nav-link');
const ioNav = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navItems.forEach(n => n.classList.toggle('active', n.getAttribute('href') === `#${id}`));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('section[id]').forEach(s => ioNav.observe(s));

/* ── HERO SLIDER ── */
(function () {
  const slides     = document.querySelectorAll('.slide');
  const dots       = document.querySelectorAll('.dot');
  const prevBtn    = document.getElementById('sliderPrev');
  const nextBtn    = document.getElementById('sliderNext');
  let current      = 0;
  let autoplay;
  const total      = slides.length;

  function goTo(n) {
    slides[current].classList.remove('slide--active');
    dots[current].classList.remove('dot--active');
    current = (n + total) % total;
    slides[current].classList.add('slide--active');
    dots[current].classList.add('dot--active');
  }

  function startAuto() { autoplay = setInterval(() => goTo(current + 1), 5000); }
  function stopAuto()  { clearInterval(autoplay); }

  prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });
  dots.forEach(d => d.addEventListener('click', () => { stopAuto(); goTo(+d.dataset.slide); startAuto(); }));

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { stopAuto(); goTo(current - 1); startAuto(); }
    if (e.key === 'ArrowRight') { stopAuto(); goTo(current + 1); startAuto(); }
  });

  // Touch swipe
  let touchX = 0;
  const hero = document.querySelector('.hero');
  hero.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  hero.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) { stopAuto(); goTo(dx < 0 ? current + 1 : current - 1); startAuto(); }
  });

  startAuto();
})();

/* ── MARKETS TABS ── */
(function () {
  const tabs   = document.querySelectorAll('.mkt-tab');
  const panels = document.querySelectorAll('.markets-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('mkt-tab--active'));
      panels.forEach(p => p.classList.remove('markets-panel--active'));
      tab.classList.add('mkt-tab--active');
      const panel = document.querySelector(`.markets-panel[data-panel="${tab.dataset.tab}"]`);
      if (panel) panel.classList.add('markets-panel--active');
    });
  });
})();

/* ── SCROLL REVEAL ── */
(function () {
  const items = document.querySelectorAll(
    '.service-card, .cs-card, .pillar, .industry-card, .resource-card, .insight-card, .how-step, .mkt-item, .why-stat, .more-insight-item'
  );
  items.forEach((el, i) => {
    el.setAttribute('data-reveal', '');
    el.style.transitionDelay = `${(i % 6) * 60}ms`;
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });
  items.forEach(el => io.observe(el));
})();

/* ── COUNTER ANIMATION ── */
(function () {
  const counters = document.querySelectorAll('.stat-num, .why-stat-num, .cs-mval');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const raw = el.textContent.replace(/[^0-9.]/g, '');
      if (!raw || isNaN(+raw)) return;
      const target   = parseFloat(raw);
      const suffix   = el.textContent.replace(raw, '');
      const duration = 1200;
      const start    = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        const val      = target < 10 ? (eased * target).toFixed(1) : Math.round(eased * target);
        el.textContent = val + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
})();

/* ── CALENDLY MODAL ── */
function openCalendly(e) {
  if (e) e.preventDefault();
  if (CALENDLY_URL && CALENDLY_URL !== 'YOUR_CALENDLY_URL') {
    window.open(CALENDLY_URL, '_blank', 'width=820,height=700,left=200,top=100');
  } else {
    document.getElementById('calendly-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeCalendly() {
  document.getElementById('calendly-modal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modal-close').addEventListener('click', closeCalendly);
document.getElementById('calendly-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeCalendly();
});

/* ── RESOURCE MODAL ── */
const resourceTitles = {
  export: 'Export Buyer Discovery Framework',
  ai:     'AI Automation Readiness Checklist',
  crm:    'CRM Intelligence Playbook',
  nifty:  'NIFTY Options Automation Blueprint',
  spy:    'SPY / US Markets Automation Blueprint',
  mt5:    'MT5 Automation Checklist'
};

function openResourceModal(type) {
  document.getElementById('resource-type').value = type;
  document.getElementById('resource-modal-title').textContent = `Download: ${resourceTitles[type] || 'Free Resource'}`;
  document.getElementById('resource-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeResourceModal() {
  document.getElementById('resource-modal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('resource-modal-close').addEventListener('click', closeResourceModal);
document.getElementById('resource-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeResourceModal();
});

/* Close modals on Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeCalendly(); closeResourceModal(); }
});

/* ── CONTACT FORM ── */
(function () {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        success.textContent = '✓ Enquiry received. Shiv Kumar will respond personally within one business day.';
        success.classList.add('visible');
        form.reset();
        btn.textContent = 'Sent!';
        setTimeout(() => { btn.disabled = false; btn.textContent = 'Send Enquiry to Shiv Kumar'; }, 4000);
      } else {
        throw new Error('Server error');
      }
    } catch {
      btn.textContent = 'Failed — please try WhatsApp';
      btn.disabled = false;
      setTimeout(() => { btn.textContent = 'Send Enquiry to Shiv Kumar'; }, 4000);
    }
  });
})();

/* ── RESOURCE FORM ── */
(function () {
  const form    = document.getElementById('resource-form');
  const success = document.getElementById('resource-success');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        success.textContent = '✓ Request received. Shiv Kumar will send the resource directly to your inbox.';
        success.classList.add('visible');
        form.reset();
        btn.textContent = 'Sent!';
        setTimeout(() => closeResourceModal(), 3000);
      } else {
        throw new Error();
      }
    } catch {
      btn.textContent = 'Failed — please email directly';
      btn.disabled = false;
    }
  });
})();

/* ── NEWSLETTER FORM ── */
(function () {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = form.querySelector('[type="submit"]');
    const note = form.querySelector('.newsletter-note');
    btn.textContent = 'Subscribing…';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        note.textContent = '✓ You\'re subscribed. Watch your inbox for the Clarivo Intelligence Brief.';
        note.style.color = '#166534';
        form.reset();
        btn.textContent = 'Subscribed ✓';
      } else {
        throw new Error();
      }
    } catch {
      note.textContent = 'Something went wrong — please try again.';
      btn.textContent = 'Subscribe';
      btn.disabled = false;
    }
  });
})();

/* ── SMOOTH SCROLL for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--full-nav')) || 104;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset - 8, behavior: 'smooth' });
  });
});
