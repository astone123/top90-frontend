export function getPreferredTheme() {
  let storedTheme = localStorage.getItem('top90-theme');
  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
}

export function setTheme(theme: string) {
  document.documentElement.setAttribute('data-bs-theme', theme);
}

export function cloudfrontEnabled() {
  return import.meta.env.VITE_TOP90_CLOUDFRONT_ENABLED !== 'false';
}
