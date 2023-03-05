// меню бургер
const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav_list');

burgerBtn.addEventListener( 'click' ,() => {
    menuBurger.classList.add('burger-active');
});

menuClose.addEventListener( 'click', () => {
    menuBurger.classList.remove('burger-active');
});

// Main
const swiper = new Swiper ('.swiper',{
    spaceBetween:30,
    loop:true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
})
// how_section
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.work__btn').forEach(function (e) {
        e.addEventListener('click', function (e) {
            const tab = e.currentTarget.dataset.path;
            document.querySelectorAll('.tab-content').forEach(function (e) {
                e.classList.remove('tab-content--active')
                document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
            });
        });

        e.addEventListener('click', function (e) {
            const tabDefault = e.currentTarget.dataset.default;
            document.querySelectorAll('.work__btn').forEach(function (e) {
                e.classList.remove('work__btn--default')
                document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__btn--default');
            })
        })
    });
});


// Открывающиеся спойлеры
const spoilers = document.querySelectorAll('.spoiler__item');

spoilers.forEach((spoiler) => {
    spoiler.addEventListener('click', (e) => {
        e.preventDefault();

        currText = e.currentTarget.querySelector('.spoiler__text');

        if (!spoiler.classList.contains('_active_spoiler')) {

            spoiler.classList.add('_active_spoiler');

            currText.style.height = 'auto';

            let height = currText.clientHeight + 'px';

            currText.style.height = '0px';

            setTimeout(() => {
                currText.style.height = height;
            }, 0);
        } else {
            currText.style.height = '0px';

            spoiler.classList.remove('_active_spoiler');
        }
    });
});

// search
const form = document.querySelector('.search__container');
const search = document.querySelector('.search__icon');

search.addEventListener('click', () => {
    form.classList.add('_open__search');
    search.classList.add('_open__search');
});

form.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
    let input = form.querySelector(".search__input");
    if (target.closest('.search__clearer')) {
        e.preventDefault();
        form.classList.remove('_open__search');
        search.classList.remove('_open__search');
        input.value = "Что будем искать?";
    }
    if (target == input) {
        input.value = "";
        input.focus();
    }
});