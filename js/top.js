$(function () {
  // スクロールするとヘッダーの背景色変更
  jQuery(window).on("scroll", function () {
    if (jQuery("#js-header").height() < jQuery(this).scrollTop()) {
      jQuery("#js-header").addClass("headerColorScroll");
      jQuery("#js-header-img").attr(
        "src",
        "https://rei-portfolio.github.io/ishii-kadan/img/logo.png"
      );
    } else {
      jQuery("#js-header").removeClass("headerColorScroll");
      jQuery("#js-header-img").attr(
        "src",
        "https://rei-portfolio.github.io/ishii-kadan/img/close.png"
      );
    }
  });
});
