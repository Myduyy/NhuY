const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        preEl: '.swiper-button-prev',
    },
});

