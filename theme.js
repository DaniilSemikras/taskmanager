(function () {
  'use strict';

  const STORAGE_KEY = 'taskmanager-theme';
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  function storedTheme() {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'dark' || value === 'light' ? value : '';
    } catch {
      return '';
    }
  }

  function currentLanguage() {
    return document.documentElement.lang === 'en' ? 'en' : 'uk';
  }

  function updateButtons(theme) {
    const dark = theme === 'dark';
    const language = currentLanguage();
    const label = dark
      ? (language === 'en' ? 'Light theme' : 'Світла тема')
      : (language === 'en' ? 'Dark theme' : 'Темна тема');
    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.setAttribute('aria-pressed', String(dark));
      const icon = button.querySelector('span');
      if (icon) icon.textContent = dark ? '☀' : '☾';
    });
  }

  function applyTheme(theme, remember) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const themeColor = document.getElementById('theme-color');
    if (themeColor) themeColor.content = theme === 'dark' ? '#17161e' : '#f5f5f8';
    if (remember) {
      try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* Storage can be unavailable in private mode. */ }
    }
    updateButtons(theme);
  }

  applyTheme(storedTheme() || (media.matches ? 'dark' : 'light'), false);

  document.addEventListener('DOMContentLoaded', function () {
    updateButtons(document.documentElement.dataset.theme || 'light');
    document.addEventListener('click', function (event) {
      const button = event.target.closest('[data-theme-toggle]');
      if (!button) return;
      applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
    });
    new MutationObserver(function () {
      updateButtons(document.documentElement.dataset.theme || 'light');
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  });

  media.addEventListener('change', function (event) {
    if (!storedTheme()) applyTheme(event.matches ? 'dark' : 'light', false);
  });
})();
