$(document).ready(function () {

  //=======  Typed Js  ======//
  var typed = new Typed("#typed", {
    strings: [
      "Full-Stack Web Developer",
      "Wordpress Expert",
      "Freelancer",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });

  //=======  Scroll Up Button ======//
  $(".number").counterUp({ delay: 10, time: 2000 });


  //=======  Smooth Animation  ======//
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


  //=======  Animate On Scroll  ======//
  AOS.init();


  //======= For Loading Animation =======//
  setTimeout(function(){
    $('.loader-bg').fadeToggle();
  },2000);


}); //document end 


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


//=======  Humburger Mobile Menu ========//
function openNav() {
  document.getElementById("mySidenav").style.width = "60%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


 function toggleMenu(){
document.getElementById('header').classList.toggle('sidebarHide');
document.getElementById('main').style.width = '100%';
}