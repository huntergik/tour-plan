$(document).ready(function () {
  $(".navbar").click(function (event) {
    // $(".header__bottom").toggleClass("active");
    // убираем прокрутку сайта при раскрытом меню
    $("body").toggleClass("lock");
  });
});
