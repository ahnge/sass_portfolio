const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const navv = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.menu-nav__item');

menuBtn.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navv.classList.toggle('open');
    menuNav.classList.toggle('open');
    menuItems.forEach(item => {
        item.classList.toggle('open');
    })
});

document.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition)
    if (scrollPosition > 100) {
        menuNav.style.background = '#272727';
        menuNav.style.opacity = '.95';
    } else {
        menuNav.style.background = 'transparent';
    };
});