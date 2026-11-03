const themeToggle = document.getElementById('themeToggle');
const radiusToggle = document.getElementById('radiusToggle');

themeToggle.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  document.body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

radiusToggle.addEventListener('click', () => {
  const root = document.documentElement;
  const current = getComputedStyle(root).getPropertyValue('--radius-md').trim();

  if (current === '1rem') {
    root.style.setProperty('--radius-md', '2rem');
    root.style.setProperty('--radius-lg', '2.5rem');
  } else {
    root.style.setProperty('--radius-md', '1rem');
    root.style.setProperty('--radius-lg', '1.5rem');
  }
});
