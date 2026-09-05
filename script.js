const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.navbar ul');

navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
});