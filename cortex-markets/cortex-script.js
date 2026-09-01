/* ═══════════════════════════════════════════
   CORTEX MARKETS — cortex-script.js
═══════════════════════════════════════════ */

/* ── Mobile hamburger ── */
const hamburger = document.getElementById('nav-hamburger');
const navLinks  = document.getElementById('nav-links');
if(hamburger && navLinks) {
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
}

/* ── SCROLL REVEAL ── */
(function () {
  const items = document.querySelectorAll('[data-reveal]');
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 100}ms`;
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { 
      if (e.isIntersecting) { 
        e.target.classList.add('revealed'); 
        io.unobserve(e.target); 
      } 
    });
  }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });
  items.forEach(el => io.observe(el));
})();

/* ── UTM PARAMETERS ── */
(function() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source');
  const medium = params.get('utm_medium');
  const campaign = params.get('utm_campaign');
  
  if(source && document.getElementById('utm_source')) document.getElementById('utm_source').value = source;
  if(medium && document.getElementById('utm_medium')) document.getElementById('utm_medium').value = medium;
  if(campaign && document.getElementById('utm_campaign')) document.getElementById('utm_campaign').value = campaign;
})();

/* ── CONTACT FORM ── */
(function () {
  const form    = document.getElementById('cortex-lead-form');
  const status  = document.getElementById('cx-form-status');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    
    // Analytics
    if(typeof gtag !== 'undefined') {
      gtag('event', 'cortex_form_submit', {
        'event_category': 'engagement',
        'event_label': 'Lead Form'
      });
    }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        status.textContent = 'Thank you. Your enquiry has been received. Shiv Kumar / Clarivo Advisory will review your requirements and respond.';
        status.className = 'cx-form-status success';
        form.reset();
        btn.textContent = 'Request Sent';
      } else {
        throw new Error('Server error');
      }
    } catch {
      status.textContent = 'Failed to send request. Please email shiv@clarivoadvisory.com directly.';
      status.className = 'cx-form-status error';
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
})();

/* ── ANALYTICS TRACKING ── */
(function() {
  if(typeof gtag === 'undefined') return;
  
  gtag('event', 'cortex_page_view', {
    'event_category': 'page_view',
    'page_path': window.location.pathname
  });

  const ctaButtons = document.querySelectorAll('[data-cta-source]');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      gtag('event', 'cortex_cta_click', {
        'event_category': 'engagement',
        'event_label': btn.getAttribute('data-cta-source')
      });
    });
  });

  const form = document.getElementById('cortex-lead-form');
  if(form) {
    let formStarted = false;
    form.addEventListener('input', () => {
      if(!formStarted) {
        formStarted = true;
        gtag('event', 'cortex_form_start', {
          'event_category': 'engagement',
          'event_label': 'Lead Form Started'
        });
      }
    });
  }
})();

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  });
});
