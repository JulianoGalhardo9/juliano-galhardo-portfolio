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

/* ========== Active link on scroll ========== */
const sections = $$('main section[id]');
const navLinks = $$('.nav-link');

function onScroll() {
  const scrollPos = window.scrollY + 120;
  let currentId = '';
  sections.forEach(sec => {
    if (sec.offsetTop <= scrollPos && (sec.offsetTop + sec.offsetHeight) > scrollPos) {
      currentId = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
  });

  // shrink header on scroll
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ========== Skills animation: preenche as barras quando estiverem no viewport ========== */
const skillBars = $$('.skill-bar');

function animateSkills(){
  skillBars.forEach(bar => {
    const percent = bar.dataset.percent || '0';
    const fill = bar.querySelector('.skill-bar-fill');
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      // Anima até a largura desejada
      fill.style.width = percent + '%';
    }
  });
}
window.addEventListener('scroll', animateSkills, { passive: true });
window.addEventListener('load', animateSkills);