//initializes image carousel
$(document).ready(function() {
    $(".carousel.carousel-slider").carousel({ fullWidth: true });
    $(".carousel").carousel();
    setInterval(function() {
      $(".carousel").carousel("next");
    }, 3000);
  });