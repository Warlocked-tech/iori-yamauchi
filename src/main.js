// =========================================================
// main.js — the JavaScript for the portfolio.
// It does three small things:
//   1) Light/dark theme toggle (remembered between visits)
//   2) Depth gauge that changes as you scroll
//   3) Floating bubbles in the hero
// =========================================================

// "root" is the <html> element. We put data-theme="dark" or "light" on it,
// and the CSS reads that attribute to switch colors.
const root = document.documentElement;
const themeBtn = document.getElementById('theme');

// ---------- 1) THEME TOGGLE ----------

// Load the theme the visitor chose last time (saved in the browser's localStorage).
// try/catch is used because some browsers block localStorage; the site still works without it.
try {
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
} catch (e) {}

// Runs every time the button is clicked
themeBtn.addEventListener('click', () => {
  // Is the page dark right now? Either the user picked dark, or they haven't picked
  // and their device prefers dark.
  const chosen = root.getAttribute('data-theme');
  const isDark = chosen === 'dark' || (!chosen && matchMedia('(prefers-color-scheme: dark)').matches);

  const next = isDark ? 'light' : 'dark'; // flip it
  root.setAttribute('data-theme', next);  // CSS reacts to this change instantly

  try { localStorage.setItem('theme', next); } catch (e) {} // remember for next visit
});

// ---------- 2) DEPTH GAUGE ----------
const depthText = document.getElementById('depth'); // the "0 m" label
const fill = document.getElementById('fill');       // the colored bar

function updateGauge() {
  // How far can the page scroll in total?
  const maxScroll = document.documentElement.scrollHeight - innerHeight;
  // Progress from 0 (top) to 1 (bottom). Math.min stops it going above 1.
  const progress = maxScroll > 0 ? Math.min(1, scrollY / maxScroll) : 0;

  depthText.textContent = Math.round(progress * 200) + ' m'; // 0 to 200 meters
  fill.style.height = progress * 100 + '%';                  // grow the bar
}
// Run it whenever the visitor scrolls. {passive: true} keeps scrolling smooth.
addEventListener('scroll', updateGauge, { passive: true });
updateGauge(); // also run once on page load

// ---------- 3) BUBBLES ----------
// Each object describes one bubble: where it is (left %), size (px),
// how long one rise takes (seconds) and how long to wait before starting.
// Add or edit items here to change the bubbles.
const bubbles = [
  { left: 8,  size: 14, duration: 11, delay: 0 },
  { left: 35, size: 22, duration: 15, delay: 3 },
  { left: 62, size: 10, duration: 9,  delay: 1 },
  { left: 84, size: 18, duration: 13, delay: 5 },
];

const bubbleBox = document.getElementById('bubbles');

// Loop over the list and create one <span class="bub"> for each item
bubbles.forEach((b) => {
  const el = document.createElement('span');
  el.className = 'bub'; // styled in style.css
  el.style.left = b.left + '%';
  el.style.width = b.size + 'px';
  el.style.height = b.size + 'px';
  el.style.animationDuration = b.duration + 's';
  el.style.animationDelay = b.delay + 's';
  bubbleBox.appendChild(el); // put it on the page
});

// ---------- 4) COPY EMAIL BUTTON ----------
const EMAIL = 'ioriyamauchi24@gmail.com';
const copyBtn = document.getElementById('copy-email');

copyBtn.addEventListener('click', async () => {
  try {
    // Modern way to copy text. It only works on HTTPS pages (like Vercel) and on localhost.
    await navigator.clipboard.writeText(EMAIL);
  } catch (e) {
    // Backup for older browsers: put the text in a hidden box, select it, and copy it
    const box = document.createElement('textarea');
    box.value = EMAIL;
    document.body.appendChild(box);
    box.select();
    document.execCommand('copy');
    box.remove();
  }

  // Give the visitor feedback, then switch back to the email after 2 seconds
  copyBtn.textContent = 'Copied!';
  setTimeout(() => { copyBtn.textContent = EMAIL; }, 2000);
});