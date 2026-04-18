/* =========================================
   AttentionX — Main JS
   ========================================= */

// ── CUSTOM CURSOR ──────────────────────────
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .feature-card, .tech-card, .challenge-card, .step').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
});

// ── NAVBAR SCROLL ──────────────────────────
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── SCROLL REVEAL ──────────────────────────
const fadeEls = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 100 * (entry.target.dataset.delay || 0));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach((el, i) => {
  el.dataset.delay = i % 4;
  observer.observe(el);
});

// ── TYPING EFFECT ──────────────────────────
const typingEl = document.querySelector('.typing-effect');
if (typingEl) {
  const phrases = [
    '"The moment that changed everything..."',
    '"Nobody tells you this about success..."',
    '"This single habit made me $1M..."',
    '"The secret the industry hides from you..."',
  ];
  let pi = 0, ci = 0, deleting = false;

  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      typingEl.textContent = phrase.slice(0, ci + 1);
      ci++;
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
    } else {
      typingEl.textContent = phrase.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
      }
    }
    setTimeout(type, deleting ? 40 : 80);
  }
  setTimeout(type, 1000);
}

// ── DRAG AND DROP UPLOAD ───────────────────
const uploadZone = document.getElementById('uploadZone');
if (uploadZone) {
  uploadZone.addEventListener('dragover', e => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });
  uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
  uploadZone.addEventListener('drop', e => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) simulateUpload(files[0].name);
  });
  const fileInput = document.getElementById('fileInput');
  fileInput?.addEventListener('change', e => {
    if (e.target.files.length > 0) simulateUpload(e.target.files[0].name);
  });
}

function simulateUpload(filename) {
  if (typeof currentFileName !== "undefined") currentFileName = filename;
  const uploadContent = document.getElementById('uploadContent');
  const uploadProgress = document.getElementById('uploadProgress');
  const progressCircle = document.getElementById('progressCircle');
  const progressPct = document.getElementById('progressPct');
  const progressLabel = document.getElementById('progressLabel');

  if (!uploadContent || !uploadProgress) return;

  uploadContent.classList.add('hidden');
  uploadProgress.classList.remove('hidden');

  let pct = 0;
  const circumference = 2 * Math.PI * 40;
  progressCircle.style.strokeDasharray = circumference;

  const interval = setInterval(() => {
    pct += Math.random() * 8 + 2;
    if (pct > 100) pct = 100;
    const offset = circumference * (1 - pct / 100);
    progressCircle.style.strokeDashoffset = offset;
    progressPct.textContent = Math.round(pct) + '%';
    if (pct < 30) progressLabel.textContent = 'Uploading video...';
    else if (pct < 60) progressLabel.textContent = 'Analyzing content...';
    else if (pct < 90) progressLabel.textContent = 'Preparing AI pipeline...';
    else progressLabel.textContent = 'Almost ready...';

    if (pct >= 100) {
      clearInterval(interval);
      setTimeout(() => startProcessing(), 500);
    }
  }, 120);
}

// ── FAQ TOGGLE ──────────────────────────────
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-answer');
  const isOpen = btn.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-question').forEach(q => {
    q.classList.remove('open');
    q.closest('.faq-item').querySelector('.faq-answer').classList.remove('open');
  });

  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}
window.toggleFaq = toggleFaq;

// ── NOTIFY FORM ────────────────────────────
function handleNotify() {
  const input = document.getElementById('notifyEmail');
  const msg = document.getElementById('notifyMsg');
  if (!input || !msg) return;
  const email = input.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg.textContent = '⚠ Please enter a valid email address.';
    msg.style.color = '#ff6b6b';
    return;
  }
  msg.textContent = '✅ You\'re on the list! We\'ll notify you at launch.';
  msg.style.color = '#4ade80';
  input.value = '';
  input.disabled = true;
  document.querySelector('.notify-btn').disabled = true;
  document.querySelector('.notify-btn').textContent = 'Joined!';
}
window.handleNotify = handleNotify;

// ── ALLOW ENTER IN NOTIFY INPUT ────────────
document.addEventListener('DOMContentLoaded', () => {
  const ni = document.getElementById('notifyEmail');
  if (ni) ni.addEventListener('keypress', e => { if (e.key === 'Enter') handleNotify(); });
});
