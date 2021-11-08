$(document).ready(function(){

/* ~~~~~~~~~~~~~~~~~~start header~~~~~~~~~~~~~~~~~~~ */
if ($(window).width() <= 767) {
  $(".btn_bars").click(function(){
    $(".ul_navbar").toggle(500);
    $(".moboverlay").fadeIn(500);
    $("body").addClass("over");
  });
  $(".close_").click(function(){
    $(".ul_navbar").hide("500");
    $(".moboverlay").fadeOut(500);
    $("body").removeClass("over");
  });
  $(".moboverlay").click(function(){
    $(".close_ ").trigger("click");
  });
  $(".ul_navbar a").click(function(){
    $(".close_ ").trigger("click");
  })
  $(".ul_navbar a").click(function(){
    $(".moboverlay").fadeOut(500);
    $("body").removeClass("over");
  })
}


jQuery(window).on('scroll', function() {
  if(jQuery(window).scrollTop() > 200) {
      jQuery('header').css({
          "background-color": "#b6304b",
          "position": "fixed",
          "box-shadow": "rgb(136 153 166 / 20%) 0px 0px 15px 0px, rgb(136 153 166 / 15%) 0px 0px 3px 1px"
        });
  } else {
    jQuery('header').css({
      "background-color":"unset",
      "padding":"15px 0",
      "box-shadow": "unset",
      "position": "absolute"
    });
  }
});
/* ~~~~~~~~~~~~~~~~~~end header~~~~~~~~~~~~~~~~~~~ */

  /*~~~~~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~~~~~~ */
  $('.slider .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    rtl:true,
    margin:40,
    autoplay:true,
    responsive:{
        0:{
            items:2,
            margin:15
        },
        600:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
/*~~~~~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~~~~~~ */
        /* ****************start wow ******************** */
        new WOW().init();
        document.documentElement.style.setProperty('--animate-duration', '.8s');
        /* ****************end wow ******************** */

        $("#click_main").click(function () {
          $('html, body').animate({
              scrollTop: $("#main_").offset().top -1
          }, 1000);
        });
        
        $("#click_about").click(function () {
          $('html, body').animate({
              scrollTop: $("#about_").offset().top -70
          }, 1000);
        });
        
        $("#click_features").click(function () {
          $('html, body').animate({
              scrollTop: $("#features").offset().top -70
          }, 1000);
        });
        
        $("#click_screens_").click(function () {
          $('html, body').animate({
              scrollTop: $("#screens_").offset().top -70
          }, 1000);
        });
        $("#click_contact").click(function () {
          $('html, body').animate({
              scrollTop: $("#contact_").offset().top -70
          }, 1000);
        });

});


