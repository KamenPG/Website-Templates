$(document).ready(function(){

    //slider settup
    $(".owl-carousel").owlCarousel({
        items : 1,
        loop: true,
        dots: true,
        autoplay:true,
        autoplayTimeout:4000
    });

    //dropdown menu settup
    $( ".open" ).click(function() {
        $("div.nav.opened.unclicked").removeClass("unclicked").addClass("clicked");
      });

    $( ".close" ).click(function() {
        $("div.nav.opened.clicked").removeClass("clicked").addClass("unclicked");
    });

  });
