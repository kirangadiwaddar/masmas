$(document).ready(function () {
  $(window).resize(function () {
    var width = $(window).width();
    if (width < 579) {
      $("nav").hide();
    } else if (width > 580) {
      $("nav").show();
    }
  });
  $(".nav-btn").on("click", function () {
    $(this).toggleClass("active");
    $("nav").slideToggle();
  });
});
