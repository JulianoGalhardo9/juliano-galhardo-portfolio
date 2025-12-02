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

/* ========== Contact form: validação simples e envio simulado ========== */
const contactForm = $('#contactForm');
const formMsg = $('#formMsg');
const resetBtn = $('#resetBtn');

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

contactForm?.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = $('#name').value.trim();
  const email = $('#email').value.trim();
  const subject = $('#subject').value.trim();
  const message = $('#message').value.trim();

  // Validações básicas
  if (!name || !email || !message) {
    formMsg.style.color = '#f97316'; // warning
    formMsg.textContent = 'Por favor, preencha os campos obrigatórios.';
    return;
  }
  if (!validateEmail(email)) {
    formMsg.style.color = '#f97316';
    formMsg.textContent = 'Email inválido. Verifique e tente novamente.';
    return;
  }

  // Simulação de envio: aqui você pode integrar com uma API (Netlify, Formspree, AWS Lambda, etc.)
  formMsg.style.color = getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#5eead4';
  formMsg.textContent = 'Enviando...';

  // Simula delay de envio
  setTimeout(() => {
    // Mostra sucesso
    formMsg.style.color = '#34d399';
    formMsg.textContent = 'Mensagem enviada com sucesso! Obrigado.';

    // Opcional: abrir mailto como fallback (comentado)
    // window.location.href = `mailto:seu@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    contactForm.reset();
  }, 900);
});

resetBtn?.addEventListener('click', () => {
  contactForm.reset();
  formMsg.textContent = '';
});