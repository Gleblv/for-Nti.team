// ---HAMBURGER-MENU----------------------
const hamburgerMenu = () => {
    const menu = document.querySelector('.nav-header'),
      menuBtn = document.querySelector('.header__hamb-btn');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

// ---DROPDOWN-MENU-----------------------

const dropdownMenu = () => {
    const menu = document.querySelector('.header__dropdown'),
          menuBtn = document.querySelector('.btns-header__item_dropdown-btn');

    menuBtn.addEventListener('mouseover', () => {
        menu.classList.remove('inactive');
    });
    menuBtn.addEventListener('mouseout', () => {
        menu.classList.add('inactive');
    })
}

dropdownMenu();
hamburgerMenu();