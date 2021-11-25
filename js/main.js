$(function () {
  // // スクロールするとヘッダーの背景色変更
  // jQuery(window).on("scroll", function () {
  //   if (jQuery("#js-header").height() < jQuery(this).scrollTop()) {
  //     jQuery("#js-header").addClass("headerColorScroll");
  //     jQuery("#js-header-img").attr("src", "../img/logo.png").fadeIn(5000);
  //   } else {
  //     jQuery("#js-header").removeClass("headerColorScroll");
  //     jQuery("#js-header-img").attr("src", "../img/header-logo.svg");

  //   }
  // });

  // Aos
  AOS.init({
    offset: 200,
    duration: 3000,
    easing: "ease",
    delay: 90,
    once: true,
    anchorPlacement: "bottom-center",
    // easing: "ease-in-back",
    // delay: 300,
    // offset: 0,
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

  $("#js-global-menu a").click(function () {
    if ($(window).width() < 810) {
      $("#js-global-menu").fadeOut(100); //.nav-wrapperが0.1秒でフェードアウト(メニューのフェードアウト)
      $("#js-hamburger").attr("aria-expanded", false);
      $("#js-global-menu").attr("area-hidden", "true");
      $("body").removeClass("noscroll"); //bodyのnoscrollクラスを削除
    }
  });

  // 画面幅広げてもリストなくならないように
  window.matchMedia("(max-width: 810px)").addEventListener("change", (e) => {
    if (!e.matches) $("#js-global-menu").attr("style", null);
  });

  // tab
  $(".js-tab-trigger").on("click", function () {
    //まずは全triggerからclass削除
    $(".js-tab-trigger").removeClass("is-active");
    //次に全targetからclass削除
    $(".js-tab-target").removeClass("is-active");
    //次にクリックした要素にis-active
    $(this).addClass("is-active");
    //data属性を取得する
    let id = $(this).data("id");
    //data属性値=idが等しいものにclass付与
    $("#" + id).addClass("is-active");
  });
  // .//tab
});

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
