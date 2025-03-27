let buttonOpen = document.querySelector(".main_menu_open")
let buttonClose = document.querySelector(".nav_close_mobile")
let menu = document.querySelector(".nav")
let overlay = document.querySelector(".main_overlay")

buttonOpen.onclick = function () {
    menu.style.transform = "translateX(0)"
    overlay.style.transform = "translateX(0)"

}

buttonClose.onclick = function () {
    menu.style.transform = "translateX(-100%)"
    overlay.style.transform = "translateX(-100%)"

}

const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,


    pagination: {
        el: '.swiper-pagination',
    },


    navigation: {
        nextEl: '.swiper_button_next',
        prevEl: '.swiper_button_prev',
    },


    scrollbar: {
        el: '.swiper_scrollbar',
    },
});
