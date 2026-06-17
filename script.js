/**
 * PASA RIDERS NEPAL — script.js
 * Premium Interactive JavaScript
 * Features: Nav, Hero effects, Scroll animations, Stats counter,
 *           Particles, Form handling, Hamburger menu, Back-to-top
 */

'use strict';

/* ====================================================
   1. UTILITY HELPERS
   ==================================================== */

/**
 * Debounce function to rate-limit scroll/resize events
 */
function debounce(fn, delay = 150) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Throttle function for animation-critical listeners
 */
function throttle(fn, limit = 16) {
  let lastRan;
  return (...args) => {
    if (!lastRan) {
      fn(...args);
      lastRan = Date.now();
    } else if (Date.now() - lastRan >= limit) {
      fn(...args);
      lastRan = Date.now();
    }
  };
}

/* ====================================================
   2. NAVBAR SCROLL BEHAVIOUR
   ==================================================== */
(function initNavbar() {
  const header = document.getElementById('header');
  const annBar = document.querySelector('.announcement-bar');
  if (!header) return;

  const SCROLL_THRESHOLD = 60;

  function updateHeader() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('scrolled');
      if (annBar) annBar.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      if (annBar) annBar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', throttle(updateHeader), { passive: true });
  updateHeader(); // run once on load
})();

/* ====================================================
   3. HAMBURGER MENU
   ==================================================== */
(function initHamburger() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  function closeMenu() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openMenu() {
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close on nav link click
  menu.querySelectorAll('.nav__link, .nav__cta').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && menu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Escape key closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });

  // Reference header for outside click
  const header = document.getElementById('header');
})();

/* ====================================================
   4. ACTIVE NAV LINK ON SCROLL
   ==================================================== */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
})();

/* ====================================================
   5. SCROLL REVEAL ANIMATIONS
   ==================================================== */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  // Check for reduced motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    revealEls.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // one-shot
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
})();

/* ====================================================
   6. HERO: Ken Burns + Load Class
   ==================================================== */
(function initHero() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Trigger the scale-down animation after load
  window.addEventListener('load', () => {
    hero.classList.add('loaded');
  });
})();

/* ====================================================
   7. PARTICLE SYSTEM
   ==================================================== */
(function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  // Skip particles on reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const PARTICLE_COUNT = 18;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const dot = document.createElement('div');
    dot.className = 'particle';

    const size   = Math.random() * 4 + 2; // 2–6px
    const left   = Math.random() * 100;    // 0–100%
    const dur    = (Math.random() * 6 + 5).toFixed(1); // 5–11s
    const delay  = (Math.random() * 8).toFixed(1);      // 0–8s
    const opacity = Math.random() * 0.5 + 0.15;

    dot.style.cssText = `
      left: ${left}%;
      bottom: -10px;
      width: ${size}px;
      height: ${size}px;
      opacity: 0;
      --dur: ${dur}s;
      --delay: ${delay}s;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(dot);
  }
})();

/* ====================================================
   8. STATS COUNTER ANIMATION
   ==================================================== */
(function initCounters() {
  const statValues = document.querySelectorAll('.stat-item__value[data-count]');
  if (!statValues.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    statValues.forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
    });
    return;
  }

  function animateCounter(el) {
    const target  = parseInt(el.dataset.count, 10);
    const prefix  = el.dataset.prefix || '';
    const suffix  = el.dataset.suffix || '';
    const duration = 1800; // ms
    const startTime = performance.now();

    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function tick(currentTime) {
      const elapsed  = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutExpo(progress);
      const current  = Math.floor(eased * target);

      el.textContent = `${prefix}${current.toLocaleString()}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
      }
    }

    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statValues.forEach(el => observer.observe(el));
})();

/* ====================================================
   9. INQUIRY FORM HANDLER
   ==================================================== */
(function initInquiryForm() {
  const form    = document.getElementById('inquiryForm');
  const success = document.getElementById('formSuccess');
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Native HTML5 validation check
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name     = data.get('name')?.trim() || '';
    const phone    = data.get('phone')?.trim() || '';
    const platform = data.get('platform') || '';
    const area     = data.get('area') || '';
    const message  = data.get('message')?.trim() || '';

    // Build WhatsApp message
    const waMessage = encodeURIComponent(
      `Hi Pasa Riders Nepal! 🏍️\n\n` +
      `*Bike Rental Inquiry*\n\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `🛵 Platform: ${platform}\n` +
      `📍 Area: ${area}` +
      (message ? `\n💬 Message: ${message}` : '') +
      `\n\nPlease get back to me. Thank you!`
    );

    // Open WhatsApp with prefilled message
    window.open(`https://wa.me/9779768533468?text=${waMessage}`, '_blank', 'noopener,noreferrer');

    // Show success state
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = '✅ Sent!';
      submitBtn.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';
    }

    success.hidden = false;
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Reset after 6 seconds
    setTimeout(() => {
      form.reset();
      success.hidden = true;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
          Submit Inquiry
        `;
        submitBtn.style.background = '';
      }
    }, 6000);
  });
})();

/* ====================================================
   10. SMOOTH SCROLL FOR NAV LINKS
   ==================================================== */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();

/* ====================================================
   11. BACK TO TOP BUTTON
   ==================================================== */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  const SHOW_AT = 400;

  function toggleBtn() {
    btn.classList.toggle('visible', window.scrollY > SHOW_AT);
  }

  window.addEventListener('scroll', throttle(toggleBtn), { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  toggleBtn();
})();

/* ====================================================
   12. FOOTER YEAR
   ==================================================== */
(function setFooterYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ====================================================
   13. FAQ ACCORDION — enhance details/summary UX
   ==================================================== */
(function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    item.addEventListener('toggle', function() {
      // Close others when one opens (accordion behaviour)
      if (this.open) {
        faqItems.forEach(other => {
          if (other !== this && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
})();

/* ====================================================
   14. NAVBAR: ADD BLUR GLASS ON LOAD IF SCROLLED
   ==================================================== */
(function checkInitialScroll() {
  if (window.scrollY > 60) {
    document.getElementById('header')?.classList.add('scrolled');
  }
})();

/* ====================================================
   15. IMAGE FALLBACK — if hero.jpg or logo.png missing
   ==================================================== */
(function initImageFallbacks() {
  // Hero fallback - if hero.jpg not found, apply CSS gradient
  const heroBg = document.querySelector('.hero__bg');
  if (!heroBg) return;

  // Test if hero image loads
  const testImg = new Image();
  testImg.onerror = () => {
    heroBg.style.background = `
      linear-gradient(135deg, 
        #0D1B2A 0%, 
        #1A3A5C 30%, 
        #FF6B35 70%, 
        #0D1B2A 100%
      )
    `;
  };
  testImg.src = 'assets/hero.jpg';

  // Logo fallback
  document.querySelectorAll('img[src="assets/logo.png"]').forEach(img => {
    img.onerror = () => {
      // Replace with SVG text logo
      const parent = img.parentElement;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', img.width || '48');
      svg.setAttribute('height', img.height || '48');
      svg.setAttribute('viewBox', '0 0 48 48');
      svg.setAttribute('aria-label', 'Pasa Riders Nepal');
      svg.innerHTML = `
        <rect width="48" height="48" rx="10" fill="#FF6B35"/>
        <text x="24" y="30" text-anchor="middle" font-family="sans-serif" 
              font-weight="900" font-size="18" fill="white">PR</text>
      `;
      img.replaceWith(svg);
    };
  });
})();

/* ====================================================
   16. HOVER TILT EFFECT — Service Cards
   ==================================================== */
(function initCardTilt() {
  const cards = document.querySelectorAll('.service-card, .step-card');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(hover: none)').matches) return; // Skip on touch

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const centerX = rect.width  / 2;
      const centerY = rect.height / 2;
      const rotX = ((y - centerY) / centerY) * -5;
      const rotY = ((x - centerX) / centerX) *  5;

      card.style.transform = `translateY(-6px) perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

/* ====================================================
   17. HEADER NAV LINK — "About" img-wrap hover glow
       (minor: hero about image decoration line)
   ==================================================== */
(function initHeroSubtleAnim() {
  const heroBg = document.querySelector('.hero__bg');
  if (!heroBg) return;

  // Subtle parallax on hero bg on mouse move (desktop only)
  if (window.matchMedia('(hover: none)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const hero = document.querySelector('.hero');
  if (!hero) return;

  hero.addEventListener('mousemove', throttle((e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width  / 2) / rect.width;
    const y = (e.clientY - rect.top  - rect.height / 2) / rect.height;
    heroBg.style.transform = `scale(1.06) translate(${x * 12}px, ${y * 8}px)`;
  }, 30));

  hero.addEventListener('mouseleave', () => {
    heroBg.style.transform = 'scale(1)';
  });
})();

/* ====================================================
   18. PERFORMANCE: Lazy load non-critical sections
       using content-visibility hint
   ==================================================== */
(function applyContentVisibility() {
  const heavySections = document.querySelectorAll(
    '.certifications, .testimonials, .faq, .contact, .footer'
  );

  // Only apply if supported
  if (!CSS.supports('content-visibility', 'auto')) return;

  heavySections.forEach(section => {
    section.style.contentVisibility = 'auto';
    section.style.containIntrinsicSize = '0 500px';
  });
})();

/* ====================================================
   19. ACCESSIBILITY: Announce page navigation to SR
   ==================================================== */
(function initRouteAnnouncer() {
  // Create a live region for navigation announcements
  const announcer = document.createElement('div');
  announcer.setAttribute('aria-live', 'polite');
  announcer.setAttribute('aria-atomic', 'true');
  announcer.className = 'sr-only';
  announcer.style.cssText = `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
  `;
  document.body.appendChild(announcer);

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href').replace('#', '');
      const target   = document.getElementById(targetId);
      if (target) {
        const label = target.getAttribute('aria-labelledby');
        const heading = label ? document.getElementById(label) : target.querySelector('h1, h2');
        if (heading) {
          announcer.textContent = `Navigated to ${heading.textContent}`;
          setTimeout(() => { announcer.textContent = ''; }, 1500);
        }
      }
    });
  });
})();

/* ====================================================
   20. STATS BAR: Highlight active city badge
   ==================================================== */
(function initStatsBadges() {
  const cityLabels = document.querySelectorAll('.stat-item__label');
  cityLabels.forEach(label => {
    if (label.textContent.includes('·')) {
      label.innerHTML = label.textContent
        .split('·')
        .map(city => `<span class="city-name">${city.trim()}</span>`)
        .join(' <span style="color:rgba(255,107,53,0.4)">·</span> ');
    }
  });
})();

/* ====================================================
   INIT COMPLETE — Log for dev reference
   ==================================================== */
console.info(
  '%c🏍️ Pasa Riders Nepal%c — pasariders.com.np\nRide More, Earn More! | Ph: 9768533468',
  'color:#FF6B35;font-family:sans-serif;font-size:16px;font-weight:bold;',
  'color:#8DA0B3;font-family:sans-serif;font-size:12px;'
);
