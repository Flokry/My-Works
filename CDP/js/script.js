const burger = document.getElementById('burger-js');
const menu = document.querySelector('.header__menu');
const navbar = document.querySelector('.header__navbar');
const toClose = document.querySelector('.header__burger-button');
//Переменная для определенния расположения меня при разном размере экрана
let menuRoll = () => {
        if (document.body.offsetWidth > 600) {
            return '13%';
        } else {
            return '0';
        }
    }
    //Функция открытия и закрытия меню
function remaster() {

    if (toClose.classList == "header__closebtn") {
        burger.style.border = '1px solid #fff';
        burger.style.borderRadius = '50%';
        burger.style.padding = '5px';
        menu.style.right = menuRoll();
        burger.style.right = '150px'

    } else {
        burger.style = 'none';
        menu.style.right = '-100%';
    }

}
//Меню-бургер
burger.addEventListener('click', event => {
        toClose.classList.toggle('header__burger-button')
        toClose.classList.toggle('header__closebtn')
        remaster();
    })
    //Закрытие меню при изменение  размера экрана
window.addEventListener('resize', event => {
        remaster();
    })
    //Отслеживание скролла 
window.addEventListener('scroll', event => {
    if (pageYOffset > 30 && document.body.offsetWidth <= 600 && document.body.offsetWidth > 450) {
        navbar.style.background = 'rgba(160, 154, 208, 0.75)';
        menu.style.background = 'rgba(160, 154, 208, 0.75)';
    } else if (pageYOffset > 150 && document.body.offsetWidth > 600) {
        navbar.style.background = 'rgba(160, 154, 208, 0.75)';
        menu.style.background = '';
        navbar.classList.cadd('header__fixed-top')
    } else if (document.body.offsetWidth > 450) {
        navbar.style.background = '';
        menu.style.background = '';
        navbar.classList.remove('header__fixed-top')
    }
})