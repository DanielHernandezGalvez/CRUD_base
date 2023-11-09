$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  });

  $(document).ready(function() {
    $('#carouselExampleControls1').carousel();
  });

  $(document).ready(function() {
    $('#carouselExampleControls2').carousel();
  });


