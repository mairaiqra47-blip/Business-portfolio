// 1. Nav bar style change when scrolling
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// 2. Reveal sections and cards as they enter the screen
const revealSelectors = [
    'section h2',
    'section .eyebrow',
    'section .about-text p',
    '.about-photo',
    '.education-item',
    '.experience-item',
    '.interest-item',
    '.achievement-item',
    '.skill-group',
    '#languages li',
    '#contact p'
];

const items = document.querySelectorAll(revealSelectors.join(','));

// Small stagger so cards appear one after another
items.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 3) * 0.1}s`;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

items.forEach((el) => observer.observe(el));
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 50);
});