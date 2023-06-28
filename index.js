const elements = document.querySelectorAll('.navbar--element');

elements.forEach(function (element) {
    element.addEventListener('click', function () {
        elements.forEach(function (el) {
            el.classList.remove('navbar--item-active');
        });

        element.classList.add('navbar--item-active');
    });
});