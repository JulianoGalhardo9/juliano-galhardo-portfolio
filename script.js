/* ========== Helpers ========== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* ========== Header / Mobile Nav Toggle ========== */
const navToggle = $('#navToggle');
const header = $('#header');
const nav = $('#nav');

navToggle?.addEventListener('click', () => {
  // Alterna um menu simples no mobile (adiciona/remova uma classe para exibir nav como coluna)
  if (nav.classList.contains('nav-mobile')) {
    nav.classList.remove('nav-mobile');
    navToggle.setAttribute('aria-label', 'Abrir menu');
  } else {
    nav.classList.add('nav-mobile');
    navToggle.setAttribute('aria-label', 'Fechar menu');
  }
});

/* Fecha menu mobile ao clicar em link */
$$('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('nav-mobile')) nav.classList.remove('nav-mobile');
  });
});