const navbar = document.querySelectorAll('.navbar--element');
const elements = document.querySelectorAll('.page-view');

var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

function callback(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            navbar.forEach((element) => element.classList.remove('navbar--item-active'))
            if (entry.target.id === "hero") return

            const element = document.querySelectorAll(`[href*="${entry.target.id}"]`)?.[0];
            element.classList.add('navbar--item-active')
        }
    });
}

var observer = new IntersectionObserver(callback, options);

elements.forEach(function (element) {
    observer.observe(element);
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    },
});