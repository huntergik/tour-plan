$(document).ready(function () {
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

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  // кнопка вызывающая модальное окно
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // function ESCclose(evt) {
  //   if (evt.keyCode == 27) {
  //     //window.close();
  //     console.log("close the window...");
  //   }
  // }
});

// $(document).ready(function () {
//   $("#hereBtn").click(function (e) {
//     $("#alertModal").modal("show");
//   });
// });

// $(document).on("keydown", function (e) {
//   if (e.keyCode == 27) window.close();
// });

// $("body").toggleClass("lock");
