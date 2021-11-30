$(function () {
  // Aos
  AOS.init({
    offset: 200,
    duration: 3000,
    easing: "ease",
    delay: 90,
    once: true,
    anchorPlacement: "bottom-center",
  });

  // ハンバーガーメニュー
  $("#js-hamburger").click(function () {
    $("body").toggleClass("is-drawerActive");
    $("body").toggleClass("noscroll");
    if ($(this).attr("aria-expanded") == "false") {
      $(this).attr("aria-expanded", true);
      $("#js-global-menu").attr("area-hidden", "false");
      $("#js-global-menu").fadeIn(500);
    } else {
      $(this).attr("aria-expanded", false);
      $("#js-global-menu").attr("area-hidden", "true");
      $("#js-global-menu").fadeOut(500);
    }
  });

  // tab
  $(".js-tab-trigger").on("click", function () {
    $(".js-tab-trigger").removeClass("is-active");
    $(".js-tab-target").removeClass("is-active");
    $(this).addClass("is-active");
    let id = $(this).data("id");
    $("#" + id).addClass("is-active");
  });
  // .//tab

  // modal
  MicroModal.init({
    // openClass: "is-open",
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    
  });
  //.//modal
  

  // flatpickr
  const config = {
    locale: "ja", // 日本語用モジュールを適用
    dateFormat: "Y.m.d（D）", // 2021.05.24（月）の形式で表示
    // 時間指定
    // enableTime: true,
    minDate: "today",
    mode: "range",
  };
  flatpickr("#datepicker", config);
  // .//flatpickr
});
