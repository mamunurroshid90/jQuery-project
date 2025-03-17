$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyAdd");
    } else {
      $(".sticky").removeClass("stickyAdd");
    }
  });
  var typed = new Typed(".element", {
    strings: ["Web Developer", "Graphic Designer", "Video Editor"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
    smartBackspace: true,
  });
});
