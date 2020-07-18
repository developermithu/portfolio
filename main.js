$(document).ready(function () {
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
  $(".number").counterUp({ delay: 10, time: 3000 });

});
