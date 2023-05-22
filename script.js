const changePhoto = () => {
    const photo = document.querySelector('.best-items__image-for-more > img');

    if (window.innerWidth < 376) {
        photo.setAttribute('src', './images/BestItems/image 23.2.png');
    } else {
        photo.setAttribute('src', './images/BestItems/image 23.png');
    }
}

// ---HAMBURGER-MENU----------------------
const hamburgerMenu = () => {
    if (window.innerWidth < 376) {
        const hambMenu = document.querySelector('.nav-header'),
        hambMenuBtn = document.querySelector('.header__hamb-btn'),
        wrapper = document.querySelector('.wrapper-for-burger-menu');
    
        hambMenuBtn.addEventListener('click', () => {
            hambMenu.classList.toggle('active');
            wrapper.classList.toggle('active');
        });
    }
}

// ---DROPDOWN-MENU-----------------------

const dropdownMenu = () => {
    if (window.innerWidth > 375.99) {
        const menu = document.querySelector('.header__dropdown'),
            menuBtn = document.querySelector('.btns-header__item_dropdown-btn');
    
        menuBtn.addEventListener('mouseover', () => {
            menu.classList.remove('inactive');
        });
        menuBtn.addEventListener('mouseout', () => {
            menu.classList.add('inactive');
        })
    }
}

// ---SLIDER-------------------------------

const slider = () => {
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
}

// ---FORM-------------------------------------------------

const form = () => {
    const submitBtn = document.querySelector('.form-contacts__submitbtn'),
      form = document.querySelector('.form-contacts'),
      inputName = document.querySelector('.form-contacts__input_name'),
      inputTel = document.querySelector('.form-contacts__input_tel');

    const phoneNumberRegex = /^(\+\d{1,3}\s?)?(\(\d{1,4}\)|\d{1,4})[-\s]?\d{1,4}[-\s]?\d{1,9}$/;

    form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
            e.preventDefault();
            alert("Пожалуйста, заполните все обязательные поля.");
            return;
        }

        if (!phoneNumberRegex.test(inputTel.value)) {
            e.preventDefault();
            alert("Некорректно введён номер телефона");
            return;
        }

        alert('Данные отправлены');
    })
}

document.addEventListener('DOMContentLoaded', () => {
    changePhoto();
    hamburgerMenu();
    dropdownMenu();
    slider();
    form();
})