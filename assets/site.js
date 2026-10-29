'use strict';
const links = [...document.querySelectorAll('[data-page-link]')];
const pages = [...document.querySelectorAll('[data-page]')];
const themeButton = document.querySelector('[data-theme-toggle]');
let storedTheme;
try { storedTheme = localStorage.getItem('theme'); } catch {}
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton?.setAttribute('aria-pressed', String(theme === 'dark'));
  themeButton?.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  if (themeButton) themeButton.textContent = theme === 'dark' ? '☀' : '☾';
}
setTheme(storedTheme === 'dark' ? 'dark' : 'light');
themeButton?.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try { localStorage.setItem('theme', theme); } catch {}
});
function updateNavigation() {
  if (!pages.length || !document.querySelector('.navbar')) return;
  const threshold = document.querySelector('.navbar').getBoundingClientRect().bottom + 80;
  let current = pages[0].dataset.page;
  for (const page of pages) {
    if (page.getBoundingClientRect().top <= threshold) current = page.dataset.page;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    current = pages.at(-1).dataset.page;
  }
  for (const link of links) {
    const selected = link.dataset.pageLink === current;
    link.classList.toggle('active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
let scheduled = false;
function scheduleNavigationUpdate() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    updateNavigation();
    scheduled = false;
  });
}
window.addEventListener('scroll', scheduleNavigationUpdate, { passive: true });
window.addEventListener('resize', scheduleNavigationUpdate);
window.addEventListener('hashchange', scheduleNavigationUpdate);
window.addEventListener('load', scheduleNavigationUpdate);
updateNavigation();

