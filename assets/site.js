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
// Preserve bookmarks from the former continuous homepage.
if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) {
  const legacyPages = {
    projects: 'software.html', cv: 'cv-overview.html', research: 'research.html',
    'agent-project-title': 'software.html#agent-project-title',
    'luminosityfit-project-title': 'software.html#luminosityfit-project-title',
    'reconstruction-project-title': 'software.html#reconstruction-project-title',
    'simulation-project-title': 'software.html#simulation-project-title'
  };
  const destination = legacyPages[location.hash.slice(1)];
  if (destination) location.replace(destination);
}
