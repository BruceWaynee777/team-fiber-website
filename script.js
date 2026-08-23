// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// Animated stat counters — count up from 0 to the real number when the
// stats section scrolls into view.
const statEls = document.querySelectorAll('.stat-num-value');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animateCount(el) {
  const target = parseInt(el.dataset.countTo, 10) || 0;

  if (prefersReducedMotion) {
    el.textContent = target;
    return;
  }

  const duration = 1400; // ms
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic — fast start, gentle landing
    el.textContent = Math.round(eased * target);

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target; // guarantee the exact final number
    }
  }

  requestAnimationFrame(tick);
}

if (statEls.length) {
  if ('IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statEls.forEach(el => statObserver.observe(el));
  } else {
    statEls.forEach(el => { el.textContent = el.dataset.countTo; });
  }
}
