/**
 * Ashes To Ashes Concierge Services — Main JavaScript
 * Handles: hamburger menu, smooth scrolling, FAQ accordion,
 * scroll-to-top, active nav highlighting, form validation
 */

(function () {
  'use strict';

  /* ==========================================================
     DOM References
     ========================================================== */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const scrollTopBtn = document.getElementById('scroll-top');
  const faqItems = document.querySelectorAll('.faq-item');
  const contactForm = document.getElementById('contact-form');
  const header = document.getElementById('site-header');

  /* ==========================================================
     Mobile Navigation — Hamburger Menu
     ========================================================== */

  // Create overlay element for mobile menu backdrop
  const overlay = document.createElement('div');
  overlay.classList.add('nav-overlay');
  overlay.id = 'nav-overlay';
  document.body.appendChild(overlay);

  function openMenu() {
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    navLinks.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when overlay is clicked
  overlay.addEventListener('click', closeMenu);

  // Close menu when a nav link is clicked
  navLinkItems.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  /* ==========================================================
     Smooth Scrolling for Anchor Links
     ========================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        var headerHeight = header ? header.offsetHeight : 70;
        var targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ==========================================================
     FAQ Accordion
     ========================================================== */
  faqItems.forEach(function (item) {
    var questionBtn = item.querySelector('.faq-question');

    questionBtn.addEventListener('click', function () {
      var isActive = item.classList.contains('active');

      // Close all other FAQ items
      faqItems.forEach(function (otherItem) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ==========================================================
     Scroll-to-Top Button
     ========================================================== */
  function handleScrollTopVisibility() {
    if (window.pageYOffset > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  /* ==========================================================
     Active Navigation Highlighting on Scroll
     ========================================================== */
  var sections = [];
  navLinkItems.forEach(function (link) {
    var targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      var section = document.querySelector(targetId);
      if (section) {
        sections.push({ id: targetId, el: section, link: link });
      }
    }
  });

  function highlightActiveNav() {
    var headerHeight = header ? header.offsetHeight : 70;
    var scrollPos = window.pageYOffset + headerHeight + 100;

    var currentSection = null;
    for (var i = sections.length - 1; i >= 0; i--) {
      if (scrollPos >= sections[i].el.offsetTop) {
        currentSection = sections[i];
        break;
      }
    }

    navLinkItems.forEach(function (link) {
      link.classList.remove('active');
    });

    if (currentSection) {
      currentSection.link.classList.add('active');
    }
  }

  /* ==========================================================
     Scroll Event Handler (throttled)
     ========================================================== */
  var scrollTicking = false;

  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      window.requestAnimationFrame(function () {
        handleScrollTopVisibility();
        highlightActiveNav();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  // Run once on load
  handleScrollTopVisibility();
  highlightActiveNav();

  /* ==========================================================
     Contact Form Validation
     ========================================================== */
  function showError(inputId, errorId, message) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    if (input) input.classList.add('error');
    if (error) error.textContent = message;
  }

  function clearError(inputId, errorId) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    if (input) input.classList.remove('error');
    if (error) error.textContent = '';
  }

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid = true;

      // Name validation
      var name = document.getElementById('contact-name').value.trim();
      if (!name) {
        showError('contact-name', 'name-error', 'Please enter your full name.');
        isValid = false;
      } else {
        clearError('contact-name', 'name-error');
      }

      // Email validation
      var email = document.getElementById('contact-email').value.trim();
      if (!email) {
        showError('contact-email', 'email-error', 'Please enter your email address.');
        isValid = false;
      } else if (!validateEmail(email)) {
        showError('contact-email', 'email-error', 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError('contact-email', 'email-error');
      }

      // Phone validation
      var phone = document.getElementById('contact-phone').value.trim();
      if (!phone) {
        showError('contact-phone', 'phone-error', 'Please enter your phone number.');
        isValid = false;
      } else {
        clearError('contact-phone', 'phone-error');
      }

      // Message validation
      var message = document.getElementById('contact-message').value.trim();
      if (!message) {
        showError('contact-message', 'message-error', 'Please enter a message.');
        isValid = false;
      } else {
        clearError('contact-message', 'message-error');
      }

      if (isValid) {
        // Show success message
        var successEl = document.getElementById('form-success');
        successEl.textContent = 'Thank you for reaching out! We will get back to you within 24 hours. For immediate needs, please call (281) 900-1127.';
        successEl.classList.add('show');

        // Reset form
        contactForm.reset();

        // Clear success message after 8 seconds
        setTimeout(function () {
          successEl.textContent = '';
          successEl.classList.remove('show');
        }, 8000);
      }
    });

    // Clear errors on input
    var formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(function (input) {
      input.addEventListener('input', function () {
        var errorId = this.id.replace('contact-', '') + '-error';
        clearError(this.id, errorId);
      });
    });
  }

})();
