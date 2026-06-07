(function () {
  'use strict';

  /* ----- Cursor glow ----- */
  var glow = document.getElementById('cursor-glow');
  if (glow) {
    document.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
    document.addEventListener('mouseleave', function () {
      glow.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function () {
      glow.style.opacity = '1';
    });
  }

  /* ----- Mobile nav toggle ----- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true' ? false : true;
      toggle.setAttribute('aria-expanded', expanded);
      menu.classList.toggle('open');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
      });
    });
  }

  /* ----- Scroll reveal (IntersectionObserver) ----- */
  function observeReveal() {
    var els = document.querySelectorAll(
      '.problem-card, .tech-card, .app-card, .credibility-card, .text-block, .about-text, .section-title, .cta-box, .stack-layer, .monitor-widget'
    );

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.style.opacity = '1'; });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach(function (el, i) {
      el.classList.add('reveal');
      if (i % 4 === 0) el.classList.add('reveal-delay-1');
      if (i % 4 === 1) el.classList.add('reveal-delay-2');
      if (i % 4 === 2) el.classList.add('reveal-delay-3');
      if (i % 4 === 3) el.classList.add('reveal-delay-4');
      observer.observe(el);
    });
  }

  /* ----- Smooth scroll for anchor links ----- */
  function smoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var offset = 80;
          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ----- Init ----- */
  document.addEventListener('DOMContentLoaded', function () {
    observeReveal();
    smoothAnchors();
  });

})();
