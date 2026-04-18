/* =========================================
   AttentionX — Demo JS (Enhanced)
   ========================================= */

let elapsedInterval = null;
let elapsedSec = 0;
let currentFileName = 'sample_mentorship_session.mp4';

const sampleBtn = document.getElementById('sampleBtn');
sampleBtn?.addEventListener('click', () => {
  currentFileName = 'sample_mentorship_session.mp4';
  simulateUpload(currentFileName);
});

function startProcessing() {
  const uploadZone = document.getElementById('uploadZone');
  const processingSection = document.getElementById('processingSection');
  const sampleBtn = document.getElementById('sampleBtn');
  const demoOr = document.querySelector('.demo-or');
  const demoNotice = document.getElementById('demoNotice');

  uploadZone?.classList.add('hidden');
  sampleBtn?.classList.add('hidden');
  if (demoOr) demoOr.classList.add('hidden');
  if (demoNotice) demoNotice.classList.add('hidden');
  processingSection?.classList.remove('hidden');

  // Update file name
  const nameEl = document.getElementById('procFileName');
  if (nameEl) nameEl.textContent = currentFileName;

  // Start elapsed timer
  elapsedSec = 0;
  const elapsedEl = document.getElementById('procElapsed');
  elapsedInterval = setInterval(() => {
    elapsedSec++;
    if (elapsedEl) elapsedEl.textContent = `Elapsed: ${elapsedSec}s`;
  }, 1000);

  const steps = [
    { id: 'step-transcribe', label: 'Whisper Transcription', duration: 2200 },
    { id: 'step-analyze', label: 'Gemini Peak Analysis', duration: 2800 },
    { id: 'step-crop', label: 'Smart Crop (MediaPipe)', duration: 2100 },
    { id: 'step-caption', label: 'Caption Generation', duration: 1900 },
    { id: 'step-export', label: 'Exporting Clips', duration: 1600 },
  ];

  let delay = 0;
  steps.forEach((step, i) => {
    setTimeout(() => {
      runStep(step.id, step.duration, i === steps.length - 1);
    }, delay);
    delay += step.duration + 250;
  });
}

function runStep(id, duration, isLast) {
  const stepEl = document.getElementById(id);
  if (!stepEl) return;

  const fill = stepEl.querySelector('.proc-fill');
  const status = stepEl.querySelector('.proc-status');

  status.textContent = 'Running...';
  status.classList.add('running');

  let width = 0;
  const interval = setInterval(() => {
    width += 100 / (duration / 30);
    if (width > 100) width = 100;
    fill.style.width = width + '%';
    if (width >= 100) {
      clearInterval(interval);
      status.textContent = '✓ Done';
      status.classList.remove('running');
      status.classList.add('done');
      if (isLast) {
        clearInterval(elapsedInterval);
        setTimeout(showResults, 600);
      }
    }
  }, 30);
}

function showResults() {
  const processingSection = document.getElementById('processingSection');
  const resultsSection = document.getElementById('resultsSection');
  processingSection?.classList.add('hidden');
  resultsSection?.classList.remove('hidden');
  resultsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function downloadDemo() {
  showToast('⬇ Clip downloaded! (Demo mode — no actual file generated)');
}

function downloadAllDemo() {
  showToast('📦 All 5 clips packaged! (Demo mode — no actual ZIP generated)');
}

function resetDemo() {
  const uploadZone = document.getElementById('uploadZone');
  const uploadContent = document.getElementById('uploadContent');
  const uploadProgress = document.getElementById('uploadProgress');
  const processingSection = document.getElementById('processingSection');
  const resultsSection = document.getElementById('resultsSection');
  const sampleBtn = document.getElementById('sampleBtn');
  const demoOr = document.querySelector('.demo-or');
  const demoNotice = document.getElementById('demoNotice');

  uploadZone?.classList.remove('hidden');
  uploadContent?.classList.remove('hidden');
  uploadProgress?.classList.add('hidden');
  processingSection?.classList.add('hidden');
  resultsSection?.classList.add('hidden');
  sampleBtn?.classList.remove('hidden');
  if (demoOr) demoOr.classList.remove('hidden');
  if (demoNotice) demoNotice.classList.remove('hidden');

  clearInterval(elapsedInterval);
  elapsedSec = 0;

  document.querySelectorAll('.proc-fill').forEach(el => el.style.width = '0%');
  document.querySelectorAll('.proc-status').forEach(el => {
    el.textContent = 'Pending';
    el.classList.remove('done', 'running');
  });

  const progressCircle = document.getElementById('progressCircle');
  if (progressCircle) {
    const c = 2 * Math.PI * 40;
    progressCircle.style.strokeDasharray = c;
    progressCircle.style.strokeDashoffset = c;
  }
  const progressPct = document.getElementById('progressPct');
  if (progressPct) progressPct.textContent = '0%';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  toast.style.cssText = `
    position:fixed; bottom:32px; left:50%; transform:translateX(-50%);
    background:var(--surface-2); border:1px solid var(--border-accent);
    color:var(--text); padding:14px 28px; border-radius:100px;
    font-family:var(--font-mono); font-size:0.875rem;
    z-index:9999; animation:toast-in 0.3s ease;
    box-shadow:0 8px 32px rgba(0,0,0,0.4); white-space:nowrap;
  `;
  const style = document.createElement('style');
  style.textContent = `@keyframes toast-in{from{opacity:0;transform:translate(-50%,16px)}to{opacity:1;transform:translate(-50%,0)}}`;
  document.head.appendChild(style);
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

window.downloadDemo = downloadDemo;
window.downloadAllDemo = downloadAllDemo;
window.resetDemo = resetDemo;
window.startProcessing = startProcessing;
