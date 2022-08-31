//------------------ОТКРЫТИЕ-ЗАКРЫТИЕ ПОПАП ОКНА--------------------------------------

const overlay = document.querySelector('.js-overlay');
const closeOverlay = document.querySelector('.js-feedback__close');
const openOverlay = document.querySelectorAll('.js-overlay-open');
const feedback = document.querySelector('.feedback');
/*const itemBtn = document.querySelector('.details-page__btn');
const popBody = document.querySelector('.popup__body');
const popup = document.querySelector('.popup__content');*/

//открытие попап окна
openOverlay.forEach((openOverlay) => {
    openOverlay.addEventListener('click', () => {
        console.log("forEach worked");
        overlay.classList.add('overlay_show');
        feedback.classList.add('feedback_show');
        document.body.classList.add('block');
    });
});

//закрытие по крестику
if (closeOverlay) {
    closeOverlay.addEventListener('click', () => {
        overlay.classList.remove('overlay_show');
        feedback.classList.remove('feedback_show');
        document.body.classList.remove('block');
    });
}

//закрытие по оверлею
if (overlay) {
    overlay.addEventListener('click', (e) => {
        const pressFeedback = feedback.contains(e.target);
        if (!pressFeedback) {
            console.log("закрытие по оверлею");
            overlay.classList.remove('overlay_show');
            feedback.classList.remove('feedback_show');
            document.body.classList.remove('block');
        };
    });
}

//---------------------------------Муню бургер--------------------------------

const labelBurger = document.querySelector('.js-header__burger-open');
const iconBurger = document.querySelector('.js-burger__icon-open');
const menuBurger = document.querySelector('.js-burger__menu-open');
const burgerBack = document.querySelector('.burger__background');

if (labelBurger) {
    labelBurger.addEventListener('click', function (e) {
        iconBurger.classList.toggle('burger__icon-open');
        menuBurger.classList.toggle('burger__menu-open');
        burgerBack.classList.toggle('burger__background-open');
        document.body.classList.toggle('body__burger-lock');
    });
}

//------------------------------фон для шапки при скроле-----------------------------------------------

window.addEventListener('scroll', function() {
    const headColor = document.querySelector('.header');
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        headColor.classList.add('header__move');
    } else {
        headColor.classList.remove('header__move');
    }
});

//-------------------------------------------------------------------------------------



























