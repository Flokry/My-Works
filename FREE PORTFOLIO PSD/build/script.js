let hireMeBtn = document.querySelector('.hire-btn');
let cookieBtn = document.querySelector('.btn-small');
let burgerBtn = document.querySelector('.burger');
let closeBtn = document.querySelector('.f-popup__close');
let closeBtn2 = document.querySelector('.s-popup__close');
let menuPopup = document.querySelector('.f-popup');
let formPopup = document.querySelector('.s-popup');
let cookie = document.querySelector('.cookie');
let header = document.querySelector('.header');

cookieBtn.addEventListener('click', event => {
    cookie.style.top = -80 + "px";
    header.style.paddingTop = 60 + "px";
})


document.body.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.classList.contains('burger')) {
        menuPopup.style.display = "block";
    } else if (event.target.classList.contains('f-popup__close') || event.target.classList.contains('f-popup') || event.target.getAttribute('data-set') === 'link') {
        menuPopup.style.display = "none";
    }

    if (event.target.classList.contains('hire-btn')) {
        formPopup.style.display = "block";
    } else if (event.target.classList.contains('s-popup__close') || event.target.classList.contains('s-popup')) {
        formPopup.style.display = "none";
    }
})