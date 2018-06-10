$(document).ready(function(){

    //slider setup
    $(".owl-carousel").owlCarousel({
        items : 1,
        loop: true,
        dots: true,
        autoplay:true,
        autoplayTimeout:4000
    });

    //dropdown menu setup
    $( ".open" ).click(function() {
        $("div.nav.opened.unclicked").removeClass("unclicked").addClass("clicked");
      });

    $( ".close" ).click(function() {
        $("div.nav.opened.clicked").removeClass("clicked").addClass("unclicked");
    });

  });
