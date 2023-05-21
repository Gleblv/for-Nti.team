
const photo = document.querySelector('.best-items__image-for-more > img');

if (window.innerWidth < 376) {
    photo.setAttribute('src', './images/BestItems/image 23.2.png');
} else {
    photo.setAttribute('src', './images/BestItems/image 23.png');
}

// ---HAMBURGER-MENU----------------------
const hambMenu = document.querySelector('.nav-header'),
    hambMenuBtn = document.querySelector('.header__hamb-btn');

    hambMenuBtn.addEventListener('click', () => {
    hambMenu.classList.toggle('active');
});

// ---DROPDOWN-MENU-----------------------

const menu = document.querySelector('.header__dropdown'),
        menuBtn = document.querySelector('.btns-header__item_dropdown-btn');

menuBtn.addEventListener('mouseover', () => {
    menu.classList.remove('inactive');
});
menuBtn.addEventListener('mouseout', () => {
    menu.classList.add('inactive');
})

// ---SLIDER-------------------------------

const slides = document.querySelector('.slider-besttimes__slides'),
        slidesArray = document.querySelectorAll('.slider-bestitems__image'),
        nextBtn = document.querySelector('.offer-bestitems__arrow'),
        dotes = document.querySelectorAll('.slider-bestitems__dote');

const slidesWidth = slides.clientWidth,
        end = slidesWidth * (slidesArray.length - 1);

let currentPosition = 0,
    activeDoteNumber = 0;

nextBtn.addEventListener('click', () => {
    dotes.forEach(dote => {
        dote.classList.remove('active');
    })

    if (currentPosition == end) {
        currentPosition = 0;
        activeDoteNumber = 0
        dotes[activeDoteNumber].classList.add('active');
        slides.style.transform = `translateX(-${currentPosition}px)`;
        return;
    }

    currentPosition += slidesWidth;
    activeDoteNumber++;
    slides.style.transform = `translateX(-${currentPosition}px)`;

    dotes[activeDoteNumber].classList.add('active');
})