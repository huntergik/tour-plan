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

  // кнопка бургера-меню
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
  // закрытие на esc
  // var closseButton = $(".modal");
  // menuButton.on("click", function () {
  //   $(".modal").toggleClass(".modal");
  // });

  // обработка форм отправки
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be at least 2 characters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone is required",
          minlength: "Enter full phone number",
        },
      },
    });
  });
  $(".phone").mask("+7 (000) 000-00-00");

  // скрипт анимации AOS:
  AOS.init();
});

// скрипт закрытия модального окна на клав.: ESC
// $(document).ready(function () {
//   $("#hereBtn").click(function (e) {
//     $("#alertModal").modal("show");
//   });
// });

// function ESCclose(evt) {
//   if (evt.keyCode == 27) {
//     //window.close();
//     console.log("close the window...");
//   }
// }
// $(document).on("keydown", function (e) {
//   if (e.keyCode == 27) window.close();
// });

// var elements = $(".modal__overlay, .modal__dialog");

// $(".modal__overlay").click(function () {
//   elements.addClass("active");
// });

// $(".modal__close").click(function () {
//   elements.removeClass("active");
// });

// скрипт отключения скролла сайта при открытом nav-меню
// $("body").toggleClass("lock");
