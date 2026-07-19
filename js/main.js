document.addEventListener('DOMContentLoaded', () => {

  /* ── Header scroll ─────────────────────── */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Hamburger / Mobile Nav ────────────── */
  const hamburger = document.querySelector('.hamburger');
  const overlay   = document.querySelector('.mobile-overlay');
  const closeBtn  = document.querySelector('.mobile-close');

  const openNav  = () => { overlay?.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeNav = () => { overlay?.classList.remove('open'); document.body.style.overflow = ''; };

  hamburger?.addEventListener('click', openNav);
  closeBtn?.addEventListener('click', closeNav);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeNav(); });
  overlay?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  /* ── FAQ Accordion ─────────────────────── */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q')?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Scroll Fade-in ────────────────────── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  /* ── Counter Animation ─────────────────── */
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const dur    = 1600;
      const step   = target / (dur / 16);
      let cur = 0;
      const tick = () => {
        cur += step;
        if (cur >= target) { el.textContent = target.toLocaleString() + suffix; return; }
        el.textContent = Math.floor(cur).toLocaleString() + suffix;
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => counterIO.observe(el));

  /* ── Smooth Scroll ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const target = id === '#' ? null : document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = (header?.offsetHeight || 68) + 16;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });

  /* ── Current Nav Link ──────────────────── */
  const currentPath = location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.header-nav a, .mobile-drawer a').forEach(a => {
    const href = a.getAttribute('href')?.replace(/\/$/, '') || '';
    if (href && currentPath.endsWith(href)) a.style.color = 'var(--orange)';
  });

});
