const hamburger = document.querySelector('.header-logo-menu-hamburger');
const menu = document.querySelector('.header-navigation');

hamburger.addEventListener('click', () => menu.classList.toggle('header-navigation-active'));