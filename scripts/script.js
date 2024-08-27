document.addEventListener('DOMContentLoaded', function () {
    const scrollDown = document.querySelector('.scroll-down');

    scrollDown.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
