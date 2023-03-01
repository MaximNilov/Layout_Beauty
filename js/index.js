const menuBtn = document.querySelector('.menu-btn');

const menuMobile = document.querySelector('.nav-menu__mobile');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});