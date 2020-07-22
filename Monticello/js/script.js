const burger = document.getElementById('burger-js');
const menu = document.querySelector('.navbar__menu');
const navbar = document.querySelector('.navbar');
const toClose = document.querySelector('.navbar__burger-button');
const dot = document.querySelectorAll('.navbar__dot');
let dotArr = [];
let dotActive;
if (dot !== '') {
    for (i = 0; i < dot.length; i++) {
        dotArr.push(dot[i].className.split(' ')[1]);
    }
}

function hide() {
    if (dotArr == '') {
        return;
    }
    for (i = 0; i < dotArr.length; i++) {
        dotActive = document.querySelector(`.${dotArr[i]}`);
        dotActive.style.background = "none";
    }
}

window.addEventListener('scroll', event => {
    if (pageYOffset > 30 && document.body.offsetWidth < 901) {
        navbar.style.background = 'rgba(137, 0, 195, 0.75)';
        menu.style.background = 'rgba(137, 0, 195, 0.75)';
    } else if (pageYOffset > 150 && document.body.offsetWidth > 901) {
        navbar.style.background = 'rgba(137, 0, 195, 1)';
        navbar.style.top = '0';
        navbar.style.maxWidth = '100%';
    } else {
        navbar.style = '';
        menu.style.background = 'none';
    }
    if (pageYOffset > 650 && pageYOffset < 1850) {
        hide();
        dotActive = document.querySelector(`.${dotArr[0]}`)
        setTimeout(() => {
            dotActive.style.background = "#fff";
        }, 500);
    } else if (pageYOffset >= 1850 && pageYOffset < 2650) {
        hide();
        dotActive = document.querySelector(`.${dotArr[1]}`)
        setTimeout(() => {
            dotActive.style.background = "#fff";
        }, 500);
    } else if (pageYOffset >= 2650 && pageYOffset < 4050) {
        hide();
        dotActive = document.querySelector(`.${dotArr[2]}`)
        setTimeout(() => {
            dotActive.style.background = "#fff";
        }, 500);
    } else if (pageYOffset >= 4450) {
        hide();
        dotActive = document.querySelector(`.${dotArr[3]}`)
        setTimeout(() => {
            dotActive.style.background = "#fff";
        }, 500);
    } else {
        hide();
    }

})
burger.addEventListener('click', event => {
    toClose.classList.toggle('navbar__burger-button')
    toClose.classList.toggle('navbar__closebtn')
    if (toClose.classList == "navbar__closebtn") {
        burger.style.border = '1px solid #fff';
        burger.style.borderRadius = '50%';
        burger.style.padding = '5px';
        menu.style.left = '0';

    } else {
        burger.style = 'none';
        menu.style.left = '-100%';
    }

})