var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: ".hotel-slider__button--prev",
    nextEl: ".hotel-slider__button--next",
  },
  // effect: "cube",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: ".reviews-slider__button--prev",
    nextEl: ".reviews-slider__button--next",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
