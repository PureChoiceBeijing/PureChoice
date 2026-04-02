(function () {
  'use strict';

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('nav-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (open) {
        panel.setAttribute('hidden', '');
      } else {
        panel.removeAttribute('hidden');
      }
    });

    panel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        panel.setAttribute('hidden', '');
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 960) {
        toggle.setAttribute('aria-expanded', 'false');
        panel.setAttribute('hidden', '');
      }
    });
  }

  if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var revealNodes = document.querySelectorAll('[data-reveal]');
    if (revealNodes.length && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
      );
      revealNodes.forEach(function (el) {
        io.observe(el);
      });
    } else {
      revealNodes.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();
