var swiperPopular = new Swiper(".popular__section", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});