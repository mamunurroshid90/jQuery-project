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

  // Progress bars
  var prog = document.querySelectorAll(".progress-bar");

  // Set individual transition properties
  prog[0].style.transition = "2s all";
  prog[1].style.transition = "1s all";
  prog[2].style.transition = "1.5s all";
  prog[3].style.transition = "2s all";
  prog[4].style.transition = "1.7s all";
  prog[5].style.transition = "1s all";
  prog[6].style.transition = "1.8s all";

  // Set the width with a slight delay
  setTimeout(() => {
    prog[0].style.width = "100%";
    prog[1].style.width = "90%";
    prog[2].style.width = "95%";
    prog[3].style.width = "70%";
    prog[4].style.width = "90%";
    prog[5].style.width = "80%";
    prog[6].style.width = "60%";
  }, 10);
});
