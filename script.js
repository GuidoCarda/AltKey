var swiperPopular = new Swiper(".popular__section", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 400px
    400: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 600px
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