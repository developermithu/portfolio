$(document).ready(function () {
  //=======  Mobile Menu Button  ======//

  //=======  Typed Js  ======//
  var typed = new Typed("#typed", {
    strings: [
      "Web Designer",
      "Web Developer",
      "Wordpress Designer",
      "Freelancer",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });

  //=======  Counter Up  ======//
  $(".number").counterUp({ delay: 10, time: 2000 });

  //=======  Counter Up  ======//
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-up-btn").fadeIn();
    } else {
      $(".scroll-up-btn").fadeOut();
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  //=======  Counter Up  ======//
  AOS.init();

});

// =======  smooth scroll for IE / Safari / Ege ========//

$("a").on("click", function (event) {
  if (this.hash != "") {
    event.preventDefault();
    var hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
  }
});

// =======  Humburger Mobile Menu ========//
function openNav() {
  document.getElementById("mySidenav").style.width = "60%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}