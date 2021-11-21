$(function () {
  // スクロールするとヘッダーの背景色変更
  jQuery(window).on("scroll", function () {
    if (jQuery("#js-header").height() < jQuery(this).scrollTop()) {
      jQuery("#js-header").addClass("headerColorScroll");
      jQuery("#js-header-img").attr("src", "../img/logo.png");
      // jQuery("#js-hamburger").addClass("headerColorScroll-false");
    } else {
      jQuery("#js-header").removeClass("headerColorScroll");
      jQuery("#js-header-img").attr("src", "../img/header-logo.svg");
      // jQuery("#js-hamburger").removeClass("headerColorScroll-false");
    }
  });
});