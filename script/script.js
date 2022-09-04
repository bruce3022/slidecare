//------------------ОТКРЫТИЕ-ЗАКРЫТИЕ ПОПАП ОКНА--------------------------------------

const overlay = document.querySelector('.js-overlay');
const closeOverlay = document.querySelector('.js-feedback__close');
const openOverlay = document.querySelectorAll('.js-overlay-open');
const feedback = document.querySelector('.feedback');
const header = document.querySelector('.header');
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
        header.classList.add('header_padding');
    });
});

//закрытие по крестику
if (closeOverlay) {
    closeOverlay.addEventListener('click', () => {
        overlay.classList.remove('overlay_show');
        feedback.classList.remove('feedback_show');
        document.body.classList.remove('block');
        header.classList.remove('header_padding');
    });
}

const div = {
    classList: {
        add: function (value) { this.list.push(value); console.log('push ' + value ) },
        list: []
    },
    childNodes: [
        {
            classList: ['class-3'],
            childNodes: []
        }
    ]
}

div.classList.add('class-5');
div.classList.list.push('class-19');
div.classList.list.unshift('class-13');
console.log('classList', div.classList);

class NewElementPIV {
    classList;
    childNodes;
    offset;
    boundingClientRect;
    width;

    constructor(width) {
        this.width = width;
        this.initializePIV();
    }

    initializePIV() {
        console.log('INIT NEW ELEMENT WIDTH', this.width);
        this.classList = ['PIV-CLASS', 'PIV-CLASS-2'];
    }
}

const PIV = new NewElementPIV(50);
const PIV_2 = new NewElementPIV(200);


/*
class Car {
    maxSpeed;
    currentSpeed = 0;
    distance = 0;
    timer;
    constructor(maxSpeed) {
        this.maxSpeed = maxSpeed;
        document.addEventListener('keydown', (e) => {
            if (e.key === 'w' && this.currentSpeed < this.maxSpeed) {
                this.currentSpeed += 1;
                console.log('currentSpeed', this.currentSpeed);
            } else if (e.key === 's' && this.currentSpeed > -this.maxSpeed ) {
                this.currentSpeed -= 1;
                console.log('currentSpeed', this.currentSpeed);
            }
        });

        this.timer = setInterval(() => this.drive(this.currentSpeed), 1000);
    }

    drive(speed) {
        this.distance += speed;
        console.log('distance passed', this.distance);
    }
}

const newCar = new Car(20);

*/

const car = {
    maxSpeed: 20,
    currentSpeed: 0,
    distance: 0,
    timer: undefined,
    drive: function () {
        this.distance += this.currentSpeed;
        console.log('distance passed', this.distance);
    },
    init: function () {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'w' && this.currentSpeed < this.maxSpeed) {
                this.currentSpeed += 1;
                console.log('currentSpeed', this.currentSpeed);
            } else if (e.key === 's' && this.currentSpeed > -this.maxSpeed ) {
                this.currentSpeed -= 1;
                console.log('currentSpeed', this.currentSpeed);
            }
        });

        this.timer = setInterval(() => this.drive(this.currentSpeed), 1000);
    }
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
            header.classList.remove('header_padding');
        };
    });
}

//---------------------------------Муню бургер--------------------------------

const labelBurger = document.querySelector('.js-header__burger-open');
const iconBurger = document.querySelector('.js-burger__icon-open');
const menuBurger = document.querySelector('.js-burger__menu-open');
const burgerBack = document.querySelector('.burger__background');

if (labelBurger) {
    labelBurger.addEventListener('click', (e) => {
        iconBurger.classList.toggle('burger__icon-open');
        menuBurger.classList.toggle('burger__menu-open');
        burgerBack.classList.toggle('burger__background-open');
        document.body.classList.toggle('body__burger-lock');
        header.classList.toggle('header_padding');
    });
}

//---------------------появление фонф шапки при скроле-----------------------------------------------

window.addEventListener('scroll', () => {
    const headColor = document.querySelector('.header');

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        headColor.classList.add('header__move');
    } else {
        headColor.classList.remove('header__move');
    }
});

//---------------------параллакс фона в главном блоке----------------------------------------------

const backgroundMove = document.querySelector('.main-block__background');
const mainBlock = document.querySelector('.main-block');

mainBlock.addEventListener('mousemove', (e) => {
    console.log("параллакс");

    let x = e.clientX / window.innerWidth; // полная ширина окна - относительно окна браузера
 // let x = e.pageX / document.documentElement.clientWidth; // ширина окна за вычетом полосы прокрутки - относительно документа
    let y = e.clientY / window.innerHeight;
    backgroundMove.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

//-----------------------------------------------------------------------------------

const headerBlock = document.querySelector('.header');

headerBlock.addEventListener('mousemove', (e) => {
    console.log("параллакс");

    let x = e.clientX / window.innerWidth; // полная ширина окна
    let y = e.clientY / window.innerHeight;
    backgroundMove.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});


//-------------------------------прокрутка на самый верх----------------------------------

const logoUp = document.querySelector('.footer__logo');

if (logoUp) {
    logoUp.addEventListener('click', (e) => {
        console.log('возврат наверх');

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

//-------------------------перемещение к блокам---------------------------------------------------

const menuLinks = document.querySelectorAll('a[data-id]');

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (e) => {
        console.log('прокрутка до нужного блока');
        e.preventDefault();

        const sectionName = menuLink.getAttribute('data-id');
        // const sectionBlock = document.querySelector(`section[id='${sectionName}']`);
        const sectionBlock = document.querySelector('section[id="' + sectionName + '"]');
        const headerHeight = document.querySelector('header').offsetHeight;
        const sectionBlockValue = sectionBlock.getBoundingClientRect().top + pageYOffset - headerHeight;

        window.scrollTo({
            top: sectionBlockValue,
            behavior: "smooth"
        });
    });
})

//------------------------------------------------------------------------------------





































