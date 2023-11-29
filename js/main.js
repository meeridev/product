const btn = document.querySelector(".btn-three"),
    body = document.querySelector('body');

btn.addEventListener('click', () => {
    if (body.className === '') {
        body.classList.add('dark')
    } else body.className = ''
})

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loops: true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "450": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "992": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "1024": {
            slidesPerView: 2.5,
            spaceBetween: 40,
        },
        "1440": {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

const btnMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-general');
const btnOpen = document.querySelector('.menu-open');
const btnClose = document.querySelector('.menu-close');

btnMenu.addEventListener("click", () => {
    if (menu.style.display === "none") {
        menu.style.display = "block"
        menu.style.display = "flex"
        btnOpen.style.display = "none"
        btnClose.style.display = "block"
    } else {
        menu.style.display = "none"
        btnOpen.style.display = "block"
        btnClose.style.display = "none"
    }
})