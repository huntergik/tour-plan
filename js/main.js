var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: ".slider-button--prev",
    nextEl: ".slider-button--next",
  },
  // effect: "cube",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
