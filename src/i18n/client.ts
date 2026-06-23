export type Lang = 'en' | 'id';

export function getStoredLang(): Lang {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'id') return stored;
  }
  return 'en';
}

export function setStoredLang(lang: Lang): void {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  window.dispatchEvent(new CustomEvent('language-toggle'));
}
